/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StackOneCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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

/**
 * List Assignments
 */
export async function lmsListAssignments(
  client: StackOneCore,
  request: operations.LmsListAssignmentsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.LmsListAssignmentsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.LmsListAssignmentsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/unified/lms/assignments")();

  const query = encodeFormQuery({
    "fields": payload.fields,
    "filter": payload.filter,
    "next": payload.next,
    "page": payload.page,
    "page_size": payload.page_size,
    "proxy": payload.proxy,
    "raw": payload.raw,
    "remote_user_id": payload.remote_user_id,
    "updated_after": payload.updated_after,
    "user_id": payload.user_id,
  });

  const headers = new Headers({
    Accept: "application/json",
    "x-account-id": encodeSimple("x-account-id", payload["x-account-id"], {
      explode: false,
      charEncoding: "none",
    }),
  });

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "lms_list_assignments",
    oAuth2Scopes: [],
    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.LmsListAssignmentsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.LmsListAssignmentsResponse$inboundSchema, {
      key: "AssignmentsPaginated",
    }),
    M.fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
