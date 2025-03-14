/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IamPolicy,
  IamPolicy$inboundSchema,
  IamPolicy$Outbound,
  IamPolicy$outboundSchema,
} from "./iampolicy.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type IamPolicyResult = {
  data: IamPolicy;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const IamPolicyResult$inboundSchema: z.ZodType<
  IamPolicyResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: IamPolicy$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type IamPolicyResult$Outbound = {
  data: IamPolicy$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const IamPolicyResult$outboundSchema: z.ZodType<
  IamPolicyResult$Outbound,
  z.ZodTypeDef,
  IamPolicyResult
> = z.object({
  data: IamPolicy$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPolicyResult$ {
  /** @deprecated use `IamPolicyResult$inboundSchema` instead. */
  export const inboundSchema = IamPolicyResult$inboundSchema;
  /** @deprecated use `IamPolicyResult$outboundSchema` instead. */
  export const outboundSchema = IamPolicyResult$outboundSchema;
  /** @deprecated use `IamPolicyResult$Outbound` instead. */
  export type Outbound = IamPolicyResult$Outbound;
}

export function iamPolicyResultToJSON(
  iamPolicyResult: IamPolicyResult,
): string {
  return JSON.stringify(IamPolicyResult$outboundSchema.parse(iamPolicyResult));
}

export function iamPolicyResultFromJSON(
  jsonString: string,
): SafeParseResult<IamPolicyResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamPolicyResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamPolicyResult' from JSON`,
  );
}
