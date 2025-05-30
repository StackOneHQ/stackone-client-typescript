/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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
  TimeOffBalances,
  TimeOffBalances$inboundSchema,
  TimeOffBalances$Outbound,
  TimeOffBalances$outboundSchema,
} from "./timeoffbalances.js";

export type TimeOffBalancesPaginated = {
  data: Array<TimeOffBalances>;
  next?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const TimeOffBalancesPaginated$inboundSchema: z.ZodType<
  TimeOffBalancesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(TimeOffBalances$inboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type TimeOffBalancesPaginated$Outbound = {
  data: Array<TimeOffBalances$Outbound>;
  next?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const TimeOffBalancesPaginated$outboundSchema: z.ZodType<
  TimeOffBalancesPaginated$Outbound,
  z.ZodTypeDef,
  TimeOffBalancesPaginated
> = z.object({
  data: z.array(TimeOffBalances$outboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TimeOffBalancesPaginated$ {
  /** @deprecated use `TimeOffBalancesPaginated$inboundSchema` instead. */
  export const inboundSchema = TimeOffBalancesPaginated$inboundSchema;
  /** @deprecated use `TimeOffBalancesPaginated$outboundSchema` instead. */
  export const outboundSchema = TimeOffBalancesPaginated$outboundSchema;
  /** @deprecated use `TimeOffBalancesPaginated$Outbound` instead. */
  export type Outbound = TimeOffBalancesPaginated$Outbound;
}

export function timeOffBalancesPaginatedToJSON(
  timeOffBalancesPaginated: TimeOffBalancesPaginated,
): string {
  return JSON.stringify(
    TimeOffBalancesPaginated$outboundSchema.parse(timeOffBalancesPaginated),
  );
}

export function timeOffBalancesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<TimeOffBalancesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TimeOffBalancesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TimeOffBalancesPaginated' from JSON`,
  );
}
