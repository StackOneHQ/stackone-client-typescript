/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldDefinition,
  CustomFieldDefinition$inboundSchema,
  CustomFieldDefinition$Outbound,
  CustomFieldDefinition$outboundSchema,
} from "./customfielddefinition.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type CustomFieldDefinitionsPaginated = {
  data: Array<CustomFieldDefinition>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CustomFieldDefinitionsPaginated$inboundSchema: z.ZodType<
  CustomFieldDefinitionsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(CustomFieldDefinition$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type CustomFieldDefinitionsPaginated$Outbound = {
  data: Array<CustomFieldDefinition$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CustomFieldDefinitionsPaginated$outboundSchema: z.ZodType<
  CustomFieldDefinitionsPaginated$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinitionsPaginated
> = z.object({
  data: z.array(CustomFieldDefinition$outboundSchema),
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
export namespace CustomFieldDefinitionsPaginated$ {
  /** @deprecated use `CustomFieldDefinitionsPaginated$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinitionsPaginated$inboundSchema;
  /** @deprecated use `CustomFieldDefinitionsPaginated$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinitionsPaginated$outboundSchema;
  /** @deprecated use `CustomFieldDefinitionsPaginated$Outbound` instead. */
  export type Outbound = CustomFieldDefinitionsPaginated$Outbound;
}

export function customFieldDefinitionsPaginatedToJSON(
  customFieldDefinitionsPaginated: CustomFieldDefinitionsPaginated,
): string {
  return JSON.stringify(
    CustomFieldDefinitionsPaginated$outboundSchema.parse(
      customFieldDefinitionsPaginated,
    ),
  );
}

export function customFieldDefinitionsPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinitionsPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinitionsPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinitionsPaginated' from JSON`,
  );
}
