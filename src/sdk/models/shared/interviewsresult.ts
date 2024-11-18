/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Interview,
  Interview$inboundSchema,
  Interview$Outbound,
  Interview$outboundSchema,
} from "./interview.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type InterviewsResult = {
  data: Interview;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InterviewsResult$inboundSchema: z.ZodType<
  InterviewsResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Interview$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type InterviewsResult$Outbound = {
  data: Interview$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InterviewsResult$outboundSchema: z.ZodType<
  InterviewsResult$Outbound,
  z.ZodTypeDef,
  InterviewsResult
> = z.object({
  data: Interview$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewsResult$ {
  /** @deprecated use `InterviewsResult$inboundSchema` instead. */
  export const inboundSchema = InterviewsResult$inboundSchema;
  /** @deprecated use `InterviewsResult$outboundSchema` instead. */
  export const outboundSchema = InterviewsResult$outboundSchema;
  /** @deprecated use `InterviewsResult$Outbound` instead. */
  export type Outbound = InterviewsResult$Outbound;
}

export function interviewsResultToJSON(
  interviewsResult: InterviewsResult,
): string {
  return JSON.stringify(
    InterviewsResult$outboundSchema.parse(interviewsResult),
  );
}

export function interviewsResultFromJSON(
  jsonString: string,
): SafeParseResult<InterviewsResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewsResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewsResult' from JSON`,
  );
}
