/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    HTTPClient,
    matchStatusCode,
    isAbortError,
    isTimeoutError,
    isConnectionError,
} from "./http.js";
import { SecurityState } from "./security.js";
import { retry, RetryConfig } from "./retries.js";
import { encodeForm } from "./encodings.js";
import { stringToBase64 } from "./base64.js";
import { SDKOptions, SDK_METADATA, serverURLFromOptions } from "./config.js";
import { SDKHooks } from "../hooks/hooks.js";
import { HookContext } from "../hooks/types.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { ERR, OK, Result } from "../sdk/types/fp.js";

export type RequestOptions = {
    /**
     * Sets a timeout, in milliseconds, on HTTP requests made by an SDK method. If
     * `fetchOptions.signal` is set then it will take precedence over this option.
     */
    timeoutMs?: number;
    /**
     * Set or override a retry policy on HTTP calls.
     */
    retries?: RetryConfig;
    /**
     * Specifies the status codes which should be retried using the given retry policy.
     */
    retryCodes?: string[];
    /**
     * Sets various request options on the `fetch` call made by an SDK method.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options|Request}
     */
    fetchOptions?: Omit<RequestInit, "method" | "body">;
};

type RequestConfig = {
    method: string;
    path: string;
    baseURL?: string | URL;
    query?: string;
    body?: RequestInit["body"];
    headers?: HeadersInit;
    security?: SecurityState | null;
    uaHeader?: string;
    timeoutMs?: number;
};

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;
const webWorkerLike =
    typeof gt === "object" &&
    gt != null &&
    "importScripts" in gt &&
    typeof gt["importScripts"] === "function";
const isBrowserLike =
    webWorkerLike ||
    (typeof navigator !== "undefined" && "serviceWorker" in navigator) ||
    (typeof window === "object" && typeof window.document !== "undefined");

export class ClientSDK {
    private readonly httpClient: HTTPClient;
    protected readonly baseURL: URL | null;
    protected readonly hooks$: SDKHooks;
    protected readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            this.hooks$ = opt.hooks;
        } else {
            this.hooks$ = new SDKHooks();
        }
        this.options$ = { ...options, hooks: this.hooks$ };

        const url = serverURLFromOptions(options);
        if (url) {
            url.pathname = url.pathname.replace(/\/+$/, "") + "/";
        }
        const { baseURL, client } = this.hooks$.sdkInit({
            baseURL: url,
            client: options.httpClient || new HTTPClient(),
        });
        this.baseURL = baseURL;
        this.httpClient = client;
    }

    protected createRequest$(
        context: HookContext,
        conf: RequestConfig,
        options?: RequestOptions
    ): Result<Request, InvalidRequestError | UnexpectedClientError> {
        const { method, path, query, headers: opHeaders, security } = conf;

        const base = conf.baseURL ?? this.baseURL;
        if (!base) {
            return ERR(new InvalidRequestError("No base URL provided for operation"));
        }
        const reqURL = new URL(base);
        const inputURL = new URL(path, reqURL);

        if (path) {
            reqURL.pathname += inputURL.pathname.replace(/^\/+/, "");
        }

        let finalQuery = query || "";

        const secQuery: string[] = [];
        for (const [k, v] of Object.entries(security?.queryParams || {})) {
            secQuery.push(encodeForm(k, v, { charEncoding: "percent" }));
        }
        if (secQuery.length) {
            finalQuery += `&${secQuery.join("&")}`;
        }

        if (finalQuery) {
            const q = finalQuery.startsWith("&") ? finalQuery.slice(1) : finalQuery;
            reqURL.search = `?${q}`;
        }

        const headers = new Headers(opHeaders);

        const username = security?.basic.username;
        const password = security?.basic.password;
        if (username != null || password != null) {
            const encoded = stringToBase64([username || "", password || ""].join(":"));
            headers.set("Authorization", `Basic ${encoded}`);
        }

        const securityHeaders = new Headers(security?.headers || {});
        for (const [k, v] of securityHeaders) {
            headers.set(k, v);
        }

        let cookie = headers.get("cookie") || "";
        for (const [k, v] of Object.entries(security?.cookies || {})) {
            cookie += `; ${k}=${v}`;
        }
        cookie = cookie.startsWith("; ") ? cookie.slice(2) : cookie;
        headers.set("cookie", cookie);

        const userHeaders = new Headers(options?.fetchOptions?.headers);
        for (const [k, v] of userHeaders) {
            headers.set(k, v);
        }

        // Only set user agent header in non-browser-like environments since CORS
        // policy disallows setting it in browsers e.g. Chrome throws an error.
        if (!isBrowserLike) {
            headers.set(conf.uaHeader ?? "user-agent", SDK_METADATA.userAgent);
        }

        let fetchOptions = options?.fetchOptions;
        if (!fetchOptions?.signal && conf.timeoutMs && conf.timeoutMs > 0) {
            const timeoutSignal = AbortSignal.timeout(conf.timeoutMs);
            if (!fetchOptions) {
                fetchOptions = { signal: timeoutSignal };
            } else {
                fetchOptions.signal = timeoutSignal;
            }
        }

        let input;
        try {
            input = this.hooks$.beforeCreateRequest(context, {
                url: reqURL,
                options: {
                    ...fetchOptions,
                    body: conf.body ?? null,
                    headers,
                    method,
                },
            });
        } catch (err: unknown) {
            return ERR(
                new UnexpectedClientError("Create request hook failed to execute", { cause: err })
            );
        }

        return OK(new Request(input.url, input.options));
    }

    protected async do$(
        request: Request,
        options: {
            context: HookContext;
            errorCodes: number | string | (number | string)[];
            retryConfig?: RetryConfig | undefined;
            retryCodes?: string[] | undefined;
        }
    ): Promise<
        Result<
            Response,
            RequestAbortedError | RequestTimeoutError | ConnectionError | UnexpectedClientError
        >
    > {
        const { context, errorCodes } = options;
        const retryConfig = options.retryConfig || { strategy: "none" };
        const retryCodes = options.retryCodes || [];

        return retry(
            async () => {
                const req = request.clone();

                let response = await this.httpClient.request(
                    await this.hooks$.beforeRequest(context, req)
                );

                if (matchStatusCode(response, errorCodes)) {
                    const result = await this.hooks$.afterError(context, response, null);
                    if (result.error) {
                        throw result.error;
                    }
                    response = result.response || response;
                } else {
                    response = await this.hooks$.afterSuccess(context, response);
                }

                return response;
            },
            { config: retryConfig, statusCodes: retryCodes }
        ).then(
            (r) => OK(r),
            (err) => {
                switch (true) {
                    case isAbortError(err):
                        return ERR(
                            new RequestAbortedError("Request aborted by client", { cause: err })
                        );
                    case isTimeoutError(err):
                        return ERR(new RequestTimeoutError("Request timed out", { cause: err }));
                    case isConnectionError(err):
                        return ERR(new ConnectionError("Unable to make request", { cause: err }));
                    default:
                        return ERR(
                            new UnexpectedClientError("Unexpected HTTP client error", {
                                cause: err,
                            })
                        );
                }
            }
        );
    }
}
