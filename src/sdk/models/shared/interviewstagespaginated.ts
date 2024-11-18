/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InterviewStage,
  InterviewStage$inboundSchema,
  InterviewStage$Outbound,
  InterviewStage$outboundSchema,
} from "./interviewstage.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type InterviewStagesPaginated = {
  data: Array<InterviewStage>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InterviewStagesPaginated$inboundSchema: z.ZodType<
  InterviewStagesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(InterviewStage$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type InterviewStagesPaginated$Outbound = {
  data: Array<InterviewStage$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InterviewStagesPaginated$outboundSchema: z.ZodType<
  InterviewStagesPaginated$Outbound,
  z.ZodTypeDef,
  InterviewStagesPaginated
> = z.object({
  data: z.array(InterviewStage$outboundSchema),
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
export namespace InterviewStagesPaginated$ {
  /** @deprecated use `InterviewStagesPaginated$inboundSchema` instead. */
  export const inboundSchema = InterviewStagesPaginated$inboundSchema;
  /** @deprecated use `InterviewStagesPaginated$outboundSchema` instead. */
  export const outboundSchema = InterviewStagesPaginated$outboundSchema;
  /** @deprecated use `InterviewStagesPaginated$Outbound` instead. */
  export type Outbound = InterviewStagesPaginated$Outbound;
}

export function interviewStagesPaginatedToJSON(
  interviewStagesPaginated: InterviewStagesPaginated,
): string {
  return JSON.stringify(
    InterviewStagesPaginated$outboundSchema.parse(interviewStagesPaginated),
  );
}

export function interviewStagesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<InterviewStagesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewStagesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewStagesPaginated' from JSON`,
  );
}
