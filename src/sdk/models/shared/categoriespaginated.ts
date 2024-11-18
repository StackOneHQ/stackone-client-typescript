/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Category,
  Category$inboundSchema,
  Category$Outbound,
  Category$outboundSchema,
} from "./category.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type CategoriesPaginated = {
  data: Array<Category>;
  next?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CategoriesPaginated$inboundSchema: z.ZodType<
  CategoriesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Category$inboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type CategoriesPaginated$Outbound = {
  data: Array<Category$Outbound>;
  next?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CategoriesPaginated$outboundSchema: z.ZodType<
  CategoriesPaginated$Outbound,
  z.ZodTypeDef,
  CategoriesPaginated
> = z.object({
  data: z.array(Category$outboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoriesPaginated$ {
  /** @deprecated use `CategoriesPaginated$inboundSchema` instead. */
  export const inboundSchema = CategoriesPaginated$inboundSchema;
  /** @deprecated use `CategoriesPaginated$outboundSchema` instead. */
  export const outboundSchema = CategoriesPaginated$outboundSchema;
  /** @deprecated use `CategoriesPaginated$Outbound` instead. */
  export type Outbound = CategoriesPaginated$Outbound;
}

export function categoriesPaginatedToJSON(
  categoriesPaginated: CategoriesPaginated,
): string {
  return JSON.stringify(
    CategoriesPaginated$outboundSchema.parse(categoriesPaginated),
  );
}

export function categoriesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<CategoriesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CategoriesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CategoriesPaginated' from JSON`,
  );
}
