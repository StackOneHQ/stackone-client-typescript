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
  RejectedReason,
  RejectedReason$inboundSchema,
  RejectedReason$Outbound,
  RejectedReason$outboundSchema,
} from "./rejectedreason.js";

export type RejectedReasonsPaginated = {
  data: Array<RejectedReason>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const RejectedReasonsPaginated$inboundSchema: z.ZodType<
  RejectedReasonsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(RejectedReason$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type RejectedReasonsPaginated$Outbound = {
  data: Array<RejectedReason$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const RejectedReasonsPaginated$outboundSchema: z.ZodType<
  RejectedReasonsPaginated$Outbound,
  z.ZodTypeDef,
  RejectedReasonsPaginated
> = z.object({
  data: z.array(RejectedReason$outboundSchema),
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
export namespace RejectedReasonsPaginated$ {
  /** @deprecated use `RejectedReasonsPaginated$inboundSchema` instead. */
  export const inboundSchema = RejectedReasonsPaginated$inboundSchema;
  /** @deprecated use `RejectedReasonsPaginated$outboundSchema` instead. */
  export const outboundSchema = RejectedReasonsPaginated$outboundSchema;
  /** @deprecated use `RejectedReasonsPaginated$Outbound` instead. */
  export type Outbound = RejectedReasonsPaginated$Outbound;
}

export function rejectedReasonsPaginatedToJSON(
  rejectedReasonsPaginated: RejectedReasonsPaginated,
): string {
  return JSON.stringify(
    RejectedReasonsPaginated$outboundSchema.parse(rejectedReasonsPaginated),
  );
}

export function rejectedReasonsPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<RejectedReasonsPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RejectedReasonsPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RejectedReasonsPaginated' from JSON`,
  );
}
