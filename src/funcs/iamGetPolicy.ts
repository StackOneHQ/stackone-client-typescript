/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { StackOneCore } from "../core.js";
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
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get Policy
 */
export function iamGetPolicy(
  client: StackOneCore,
  request: operations.IamGetPolicyRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.IamGetPolicyResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.ForbiddenResponse
    | errors.NotFoundResponse
    | errors.RequestTimedOutResponse
    | errors.ConflictResponse
    | errors.PreconditionFailedResponse
    | errors.UnprocessableEntityResponse
    | errors.TooManyRequestsResponse
    | errors.InternalServerErrorResponse
    | errors.NotImplementedResponse
    | errors.BadGatewayResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: StackOneCore,
  request: operations.IamGetPolicyRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.IamGetPolicyResponse,
      | errors.BadRequestResponse
      | errors.UnauthorizedResponse
      | errors.ForbiddenResponse
      | errors.NotFoundResponse
      | errors.RequestTimedOutResponse
      | errors.ConflictResponse
      | errors.PreconditionFailedResponse
      | errors.UnprocessableEntityResponse
      | errors.TooManyRequestsResponse
      | errors.InternalServerErrorResponse
      | errors.NotImplementedResponse
      | errors.BadGatewayResponse
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.IamGetPolicyRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    id: encodeSimple("id", payload.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/unified/iam/policies/{id}")(pathParams);

  const query = queryJoin(
    encodeDeepObjectQuery({
      "proxy": payload.proxy,
    }),
    encodeFormQuery({
      "expand": payload.expand,
      "fields": payload.fields,
      "raw": payload.raw,
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
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "iam_get_policy",
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
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "408",
      "409",
      "412",
      "422",
      "429",
      "4XX",
      "500",
      "501",
      "502",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
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
    operations.IamGetPolicyResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.ForbiddenResponse
    | errors.NotFoundResponse
    | errors.RequestTimedOutResponse
    | errors.ConflictResponse
    | errors.PreconditionFailedResponse
    | errors.UnprocessableEntityResponse
    | errors.TooManyRequestsResponse
    | errors.InternalServerErrorResponse
    | errors.NotImplementedResponse
    | errors.BadGatewayResponse
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.IamGetPolicyResponse$inboundSchema, {
      key: "IamPolicyResult",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(403, errors.ForbiddenResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(408, errors.RequestTimedOutResponse$inboundSchema, {
      hdrs: true,
    }),
    M.jsonErr(409, errors.ConflictResponse$inboundSchema),
    M.jsonErr(412, errors.PreconditionFailedResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntityResponse$inboundSchema),
    M.jsonErr(429, errors.TooManyRequestsResponse$inboundSchema),
    M.jsonErr(500, errors.InternalServerErrorResponse$inboundSchema),
    M.jsonErr(501, errors.NotImplementedResponse$inboundSchema),
    M.jsonErr(502, errors.BadGatewayResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
