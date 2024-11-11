/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type CreateCategoriesApiModel = {
  /**
   * The name associated with this category
   */
  name?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel$inboundSchema: z.ZodType<
  CreateCategoriesApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type CreateCategoriesApiModel$Outbound = {
  name?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel$outboundSchema: z.ZodType<
  CreateCategoriesApiModel$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModel
> = z.object({
  name: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModel$ {
  /** @deprecated use `CreateCategoriesApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModel$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModel$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModel$Outbound;
}
