/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateContentApiModel = {
  /**
   * The external URL of the content
   */
  contentUrl?: string | null | undefined;
  /**
   * The description of the content
   */
  description?: string | null | undefined;
  /**
   * The external ID associated with this content
   */
  externalReference?: string | null | undefined;
  /**
   * The order of the individual content within a content grouping. This is not applicable for pushing individual content.
   */
  order?: number | null | undefined;
  /**
   * The title of the content
   */
  title?: string | null | undefined;
};

/** @internal */
export const CreateContentApiModel$inboundSchema: z.ZodType<
  CreateContentApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  content_url: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  external_reference: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "content_url": "contentUrl",
    "external_reference": "externalReference",
  });
});

/** @internal */
export type CreateContentApiModel$Outbound = {
  content_url?: string | null | undefined;
  description?: string | null | undefined;
  external_reference?: string | null | undefined;
  order?: number | null | undefined;
  title?: string | null | undefined;
};

/** @internal */
export const CreateContentApiModel$outboundSchema: z.ZodType<
  CreateContentApiModel$Outbound,
  z.ZodTypeDef,
  CreateContentApiModel
> = z.object({
  contentUrl: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  externalReference: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    contentUrl: "content_url",
    externalReference: "external_reference",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateContentApiModel$ {
  /** @deprecated use `CreateContentApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateContentApiModel$inboundSchema;
  /** @deprecated use `CreateContentApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateContentApiModel$outboundSchema;
  /** @deprecated use `CreateContentApiModel$Outbound` instead. */
  export type Outbound = CreateContentApiModel$Outbound;
}

export function createContentApiModelToJSON(
  createContentApiModel: CreateContentApiModel,
): string {
  return JSON.stringify(
    CreateContentApiModel$outboundSchema.parse(createContentApiModel),
  );
}

export function createContentApiModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateContentApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateContentApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateContentApiModel' from JSON`,
  );
}
