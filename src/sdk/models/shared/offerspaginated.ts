/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Offer,
  Offer$inboundSchema,
  Offer$Outbound,
  Offer$outboundSchema,
} from "./offer.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type OffersPaginated = {
  data: Array<Offer>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const OffersPaginated$inboundSchema: z.ZodType<
  OffersPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Offer$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type OffersPaginated$Outbound = {
  data: Array<Offer$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const OffersPaginated$outboundSchema: z.ZodType<
  OffersPaginated$Outbound,
  z.ZodTypeDef,
  OffersPaginated
> = z.object({
  data: z.array(Offer$outboundSchema),
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
export namespace OffersPaginated$ {
  /** @deprecated use `OffersPaginated$inboundSchema` instead. */
  export const inboundSchema = OffersPaginated$inboundSchema;
  /** @deprecated use `OffersPaginated$outboundSchema` instead. */
  export const outboundSchema = OffersPaginated$outboundSchema;
  /** @deprecated use `OffersPaginated$Outbound` instead. */
  export type Outbound = OffersPaginated$Outbound;
}

export function offersPaginatedToJSON(
  offersPaginated: OffersPaginated,
): string {
  return JSON.stringify(OffersPaginated$outboundSchema.parse(offersPaginated));
}

export function offersPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<OffersPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OffersPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OffersPaginated' from JSON`,
  );
}
