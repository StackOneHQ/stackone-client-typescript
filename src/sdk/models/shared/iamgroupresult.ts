/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IamGroup,
  IamGroup$inboundSchema,
  IamGroup$Outbound,
  IamGroup$outboundSchema,
} from "./iamgroup.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type IamGroupResult = {
  data: IamGroup;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const IamGroupResult$inboundSchema: z.ZodType<
  IamGroupResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: IamGroup$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type IamGroupResult$Outbound = {
  data: IamGroup$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const IamGroupResult$outboundSchema: z.ZodType<
  IamGroupResult$Outbound,
  z.ZodTypeDef,
  IamGroupResult
> = z.object({
  data: IamGroup$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroupResult$ {
  /** @deprecated use `IamGroupResult$inboundSchema` instead. */
  export const inboundSchema = IamGroupResult$inboundSchema;
  /** @deprecated use `IamGroupResult$outboundSchema` instead. */
  export const outboundSchema = IamGroupResult$outboundSchema;
  /** @deprecated use `IamGroupResult$Outbound` instead. */
  export type Outbound = IamGroupResult$Outbound;
}

export function iamGroupResultToJSON(iamGroupResult: IamGroupResult): string {
  return JSON.stringify(IamGroupResult$outboundSchema.parse(iamGroupResult));
}

export function iamGroupResultFromJSON(
  jsonString: string,
): SafeParseResult<IamGroupResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGroupResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGroupResult' from JSON`,
  );
}
