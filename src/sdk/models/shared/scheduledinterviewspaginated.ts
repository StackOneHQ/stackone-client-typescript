/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";
import {
  ScheduledInterview,
  ScheduledInterview$inboundSchema,
  ScheduledInterview$Outbound,
  ScheduledInterview$outboundSchema,
} from "./scheduledinterview.js";

export type ScheduledInterviewsPaginated = {
  data: Array<ScheduledInterview>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const ScheduledInterviewsPaginated$inboundSchema: z.ZodType<
  ScheduledInterviewsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(ScheduledInterview$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type ScheduledInterviewsPaginated$Outbound = {
  data: Array<ScheduledInterview$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const ScheduledInterviewsPaginated$outboundSchema: z.ZodType<
  ScheduledInterviewsPaginated$Outbound,
  z.ZodTypeDef,
  ScheduledInterviewsPaginated
> = z.object({
  data: z.array(ScheduledInterview$outboundSchema),
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
export namespace ScheduledInterviewsPaginated$ {
  /** @deprecated use `ScheduledInterviewsPaginated$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterviewsPaginated$inboundSchema;
  /** @deprecated use `ScheduledInterviewsPaginated$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterviewsPaginated$outboundSchema;
  /** @deprecated use `ScheduledInterviewsPaginated$Outbound` instead. */
  export type Outbound = ScheduledInterviewsPaginated$Outbound;
}

export function scheduledInterviewsPaginatedToJSON(
  scheduledInterviewsPaginated: ScheduledInterviewsPaginated,
): string {
  return JSON.stringify(
    ScheduledInterviewsPaginated$outboundSchema.parse(
      scheduledInterviewsPaginated,
    ),
  );
}

export function scheduledInterviewsPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<ScheduledInterviewsPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScheduledInterviewsPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScheduledInterviewsPaginated' from JSON`,
  );
}
