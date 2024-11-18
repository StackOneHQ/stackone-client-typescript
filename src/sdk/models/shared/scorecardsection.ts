/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Field,
  Field$inboundSchema,
  Field$Outbound,
  Field$outboundSchema,
} from "./field.js";

export type ScorecardSection = {
  /**
   * The fields within the section
   */
  fields?: Array<Field> | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The label of the section
   */
  label?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

/** @internal */
export const ScorecardSection$inboundSchema: z.ZodType<
  ScorecardSection,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.array(Field$inboundSchema)).optional(),
  id: z.nullable(z.string()).optional(),
  label: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type ScorecardSection$Outbound = {
  fields?: Array<Field$Outbound> | null | undefined;
  id?: string | null | undefined;
  label?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const ScorecardSection$outboundSchema: z.ZodType<
  ScorecardSection$Outbound,
  z.ZodTypeDef,
  ScorecardSection
> = z.object({
  fields: z.nullable(z.array(Field$outboundSchema)).optional(),
  id: z.nullable(z.string()).optional(),
  label: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScorecardSection$ {
  /** @deprecated use `ScorecardSection$inboundSchema` instead. */
  export const inboundSchema = ScorecardSection$inboundSchema;
  /** @deprecated use `ScorecardSection$outboundSchema` instead. */
  export const outboundSchema = ScorecardSection$outboundSchema;
  /** @deprecated use `ScorecardSection$Outbound` instead. */
  export type Outbound = ScorecardSection$Outbound;
}

export function scorecardSectionToJSON(
  scorecardSection: ScorecardSection,
): string {
  return JSON.stringify(
    ScorecardSection$outboundSchema.parse(scorecardSection),
  );
}

export function scorecardSectionFromJSON(
  jsonString: string,
): SafeParseResult<ScorecardSection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScorecardSection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScorecardSection' from JSON`,
  );
}
