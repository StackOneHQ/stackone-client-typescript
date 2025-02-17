/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StackOneCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import {
  encodeDeepObjectQuery,
  encodeFormQuery,
  encodeSimple,
  queryJoin,
} from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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
 * List Departments
 */
export async function atsListDepartments(
  client: StackOneCore,
  request: operations.AtsListDepartmentsRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.AtsListDepartmentsResponse,
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    { cursor: string }
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.AtsListDepartmentsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/unified/ats/departments")();

  const query = queryJoin(
    encodeDeepObjectQuery({
      "filter": payload.filter,
      "proxy": payload.proxy,
    }),
    encodeFormQuery({
      "fields": payload.fields,
      "next": payload.next,
      "page": payload.page,
      "page_size": payload.page_size,
      "raw": payload.raw,
      "sync_token": payload.sync_token,
      "updated_after": payload.updated_after,
    }),
  );

  const headers = new Headers(compactMap({
    Accept: "application/json",
    "x-account-id": encodeSimple("x-account-id", payload["x-account-id"], {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? "",
    operationID: "ats_list_departments",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "408"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "403", "408", "412", "429", "4XX", "500", "501", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result, raw] = await M.match<
    operations.AtsListDepartmentsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.AtsListDepartmentsResponse$inboundSchema, {
      key: "DepartmentsPaginated",
    }),
    M.fail(408),
    M.fail([400, 403, 412, 429, "4XX"]),
    M.fail([500, 501, "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.AtsListDepartmentsResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >
    >;
    "~next"?: { cursor: string };
  } => {
    const nextCursor = dlv(responseData, "next");
    if (nextCursor == null) {
      return { next: () => null };
    }

    const nextVal = () =>
      atsListDepartments(
        client,
        {
          ...request,
          next: nextCursor,
        },
        options,
      );

    return { next: nextVal, "~next": { cursor: nextCursor } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
