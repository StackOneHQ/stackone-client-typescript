/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HRISCostCenter,
  HRISCostCenter$inboundSchema,
  HRISCostCenter$Outbound,
  HRISCostCenter$outboundSchema,
} from "./hriscostcenter.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type HRISCostCenterPaginated = {
  data: Array<HRISCostCenter>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const HRISCostCenterPaginated$inboundSchema: z.ZodType<
  HRISCostCenterPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(HRISCostCenter$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type HRISCostCenterPaginated$Outbound = {
  data: Array<HRISCostCenter$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const HRISCostCenterPaginated$outboundSchema: z.ZodType<
  HRISCostCenterPaginated$Outbound,
  z.ZodTypeDef,
  HRISCostCenterPaginated
> = z.object({
  data: z.array(HRISCostCenter$outboundSchema),
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
export namespace HRISCostCenterPaginated$ {
  /** @deprecated use `HRISCostCenterPaginated$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenterPaginated$inboundSchema;
  /** @deprecated use `HRISCostCenterPaginated$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenterPaginated$outboundSchema;
  /** @deprecated use `HRISCostCenterPaginated$Outbound` instead. */
  export type Outbound = HRISCostCenterPaginated$Outbound;
}

export function hrisCostCenterPaginatedToJSON(
  hrisCostCenterPaginated: HRISCostCenterPaginated,
): string {
  return JSON.stringify(
    HRISCostCenterPaginated$outboundSchema.parse(hrisCostCenterPaginated),
  );
}

export function hrisCostCenterPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<HRISCostCenterPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISCostCenterPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISCostCenterPaginated' from JSON`,
  );
}
