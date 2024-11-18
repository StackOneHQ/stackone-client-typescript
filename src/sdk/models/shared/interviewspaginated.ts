/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
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

export type InterviewsPaginated = {
  data: Array<Interview>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InterviewsPaginated$inboundSchema: z.ZodType<
  InterviewsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Interview$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type InterviewsPaginated$Outbound = {
  data: Array<Interview$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InterviewsPaginated$outboundSchema: z.ZodType<
  InterviewsPaginated$Outbound,
  z.ZodTypeDef,
  InterviewsPaginated
> = z.object({
  data: z.array(Interview$outboundSchema),
  next: z.nullable(z.string()).optional(),
  nextPage: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    nextPage: "next_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewsPaginated$ {
  /** @deprecated use `InterviewsPaginated$inboundSchema` instead. */
  export const inboundSchema = InterviewsPaginated$inboundSchema;
  /** @deprecated use `InterviewsPaginated$outboundSchema` instead. */
  export const outboundSchema = InterviewsPaginated$outboundSchema;
  /** @deprecated use `InterviewsPaginated$Outbound` instead. */
  export type Outbound = InterviewsPaginated$Outbound;
}

export function interviewsPaginatedToJSON(
  interviewsPaginated: InterviewsPaginated,
): string {
  return JSON.stringify(
    InterviewsPaginated$outboundSchema.parse(interviewsPaginated),
  );
}

export function interviewsPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<InterviewsPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewsPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewsPaginated' from JSON`,
  );
}
