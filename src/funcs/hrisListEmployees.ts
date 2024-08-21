/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StackOneCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import {
    encodeDeepObjectQuery as encodeDeepObjectQuery$,
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
    queryJoin as queryJoin$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";
import {
    createPageIterator,
    haltIterator,
    PageIterator,
    Paginator,
} from "../sdk/types/operations.js";

/**
 * List Employees
 */
export async function hrisListEmployees(
    client$: StackOneCore,
    request: operations.HrisListEmployeesRequest,
    options?: RequestOptions
): Promise<
    PageIterator<
        Result<
            operations.HrisListEmployeesResponse,
            | SDKError
            | SDKValidationError
            | UnexpectedClientError
            | InvalidRequestError
            | RequestAbortedError
            | RequestTimeoutError
            | ConnectionError
        >
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.HrisListEmployeesRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return haltIterator(parsed$);
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/unified/hris/employees")();

    const query$ = queryJoin$(
        encodeDeepObjectQuery$({
            filter: payload$.filter,
            proxy: payload$.proxy,
        }),
        encodeFormQuery$({
            expand: payload$.expand,
            fields: payload$.fields,
            include: payload$.include,
            next: payload$.next,
            page: payload$.page,
            page_size: payload$.page_size,
            raw: payload$.raw,
            updated_after: payload$.updated_after,
        })
    );

    const headers$ = new Headers({
        Accept: "application/json",
        "x-account-id": encodeSimple$("x-account-id", payload$["x-account-id"], {
            explode: false,
            charEncoding: "none",
        }),
    });

    const security$ = await extractSecurity(client$.options$.security);
    const context = {
        operationID: "hris_list_employees",
        oAuth2Scopes: [],
        securitySource: client$.options$.security,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return haltIterator(requestRes);
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return haltIterator(doResult);
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$, raw$] = await m$.match<
        operations.HrisListEmployeesResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.HrisListEmployeesResponse$inboundSchema, {
            key: "EmployeesPaginated",
        }),
        m$.fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return haltIterator(result$);
    }

    const nextFunc = (
        responseData: unknown
    ): Paginator<
        Result<
            operations.HrisListEmployeesResponse,
            | SDKError
            | SDKValidationError
            | UnexpectedClientError
            | InvalidRequestError
            | RequestAbortedError
            | RequestTimeoutError
            | ConnectionError
        >
    > => {
        const nextCursor = dlv(responseData, "next");

        if (nextCursor == null) {
            return () => null;
        }

        return () =>
            hrisListEmployees(
                client$,
                {
                    ...input$,
                    next: nextCursor,
                },
                options
            );
    };

    const page$ = { ...result$, next: nextFunc(raw$) };
    return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}
