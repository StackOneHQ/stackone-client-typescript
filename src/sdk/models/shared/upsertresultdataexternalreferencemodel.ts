/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpsertResultDataExternalReferenceModel = {
  /**
   * The external identifier
   */
  externalReference?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

/** @internal */
export const UpsertResultDataExternalReferenceModel$inboundSchema: z.ZodType<
  UpsertResultDataExternalReferenceModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_reference: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "external_reference": "externalReference",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type UpsertResultDataExternalReferenceModel$Outbound = {
  external_reference?: string | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const UpsertResultDataExternalReferenceModel$outboundSchema: z.ZodType<
  UpsertResultDataExternalReferenceModel$Outbound,
  z.ZodTypeDef,
  UpsertResultDataExternalReferenceModel
> = z.object({
  externalReference: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    externalReference: "external_reference",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertResultDataExternalReferenceModel$ {
  /** @deprecated use `UpsertResultDataExternalReferenceModel$inboundSchema` instead. */
  export const inboundSchema =
    UpsertResultDataExternalReferenceModel$inboundSchema;
  /** @deprecated use `UpsertResultDataExternalReferenceModel$outboundSchema` instead. */
  export const outboundSchema =
    UpsertResultDataExternalReferenceModel$outboundSchema;
  /** @deprecated use `UpsertResultDataExternalReferenceModel$Outbound` instead. */
  export type Outbound = UpsertResultDataExternalReferenceModel$Outbound;
}

export function upsertResultDataExternalReferenceModelToJSON(
  upsertResultDataExternalReferenceModel:
    UpsertResultDataExternalReferenceModel,
): string {
  return JSON.stringify(
    UpsertResultDataExternalReferenceModel$outboundSchema.parse(
      upsertResultDataExternalReferenceModel,
    ),
  );
}

export function upsertResultDataExternalReferenceModelFromJSON(
  jsonString: string,
): SafeParseResult<UpsertResultDataExternalReferenceModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpsertResultDataExternalReferenceModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertResultDataExternalReferenceModel' from JSON`,
  );
}
