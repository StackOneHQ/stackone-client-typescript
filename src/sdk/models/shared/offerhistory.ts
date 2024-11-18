/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OfferHistory = {
  /**
   * Date of creation
   */
  createdAt?: Date | null | undefined;
  currency?: string | null | undefined;
  salary?: number | null | undefined;
  /**
   * Start Date of the offer
   */
  startDate?: Date | null | undefined;
  /**
   * Date of last update
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const OfferHistory$inboundSchema: z.ZodType<
  OfferHistory,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  currency: z.nullable(z.string()).optional(),
  salary: z.nullable(z.number()).optional(),
  start_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "start_date": "startDate",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type OfferHistory$Outbound = {
  created_at?: string | null | undefined;
  currency?: string | null | undefined;
  salary?: number | null | undefined;
  start_date?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const OfferHistory$outboundSchema: z.ZodType<
  OfferHistory$Outbound,
  z.ZodTypeDef,
  OfferHistory
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  currency: z.nullable(z.string()).optional(),
  salary: z.nullable(z.number()).optional(),
  startDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    startDate: "start_date",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OfferHistory$ {
  /** @deprecated use `OfferHistory$inboundSchema` instead. */
  export const inboundSchema = OfferHistory$inboundSchema;
  /** @deprecated use `OfferHistory$outboundSchema` instead. */
  export const outboundSchema = OfferHistory$outboundSchema;
  /** @deprecated use `OfferHistory$Outbound` instead. */
  export type Outbound = OfferHistory$Outbound;
}

export function offerHistoryToJSON(offerHistory: OfferHistory): string {
  return JSON.stringify(OfferHistory$outboundSchema.parse(offerHistory));
}

export function offerHistoryFromJSON(
  jsonString: string,
): SafeParseResult<OfferHistory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OfferHistory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OfferHistory' from JSON`,
  );
}
