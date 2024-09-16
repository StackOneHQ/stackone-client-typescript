/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  HRISGroup,
  HRISGroup$inboundSchema,
  HRISGroup$Outbound,
  HRISGroup$outboundSchema,
} from "./hrisgroup.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type HRISGroupsResult = {
  data: HRISGroup;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const HRISGroupsResult$inboundSchema: z.ZodType<
  HRISGroupsResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: HRISGroup$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type HRISGroupsResult$Outbound = {
  data: HRISGroup$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const HRISGroupsResult$outboundSchema: z.ZodType<
  HRISGroupsResult$Outbound,
  z.ZodTypeDef,
  HRISGroupsResult
> = z.object({
  data: HRISGroup$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISGroupsResult$ {
  /** @deprecated use `HRISGroupsResult$inboundSchema` instead. */
  export const inboundSchema = HRISGroupsResult$inboundSchema;
  /** @deprecated use `HRISGroupsResult$outboundSchema` instead. */
  export const outboundSchema = HRISGroupsResult$outboundSchema;
  /** @deprecated use `HRISGroupsResult$Outbound` instead. */
  export type Outbound = HRISGroupsResult$Outbound;
}
