/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { SDKError } from "./models/errors/sdkerror.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";
import * as operations from "./models/operations/index.js";
import { unwrap as unwrap$ } from "./types/fp.js";

export class Proxy extends ClientSDK {
    /**
     * Proxy Request
     */
    async proxyRequest(
        request: operations.StackoneProxyRequestRequest,
        options?: RequestOptions
    ): Promise<operations.StackoneProxyRequestResponse> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.StackoneProxyRequestRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.ProxyRequestBody, { explode: true });

        const path$ = pathToFunc("/unified/proxy")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "*/*",
            "x-account-id": encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            }),
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "stackone_proxy_request",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await m$.match<
            operations.StackoneProxyRequestResponse,
            SDKError | SDKValidationError
        >(
            m$.nil(200, operations.StackoneProxyRequestResponse$inboundSchema),
            m$.fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
