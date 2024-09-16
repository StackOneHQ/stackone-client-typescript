/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";
import {
  Skills,
  Skills$inboundSchema,
  Skills$Outbound,
  Skills$outboundSchema,
} from "./skills.js";

export type SkillResult = {
  data: Skills;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const SkillResult$inboundSchema: z.ZodType<
  SkillResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Skills$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type SkillResult$Outbound = {
  data: Skills$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const SkillResult$outboundSchema: z.ZodType<
  SkillResult$Outbound,
  z.ZodTypeDef,
  SkillResult
> = z.object({
  data: Skills$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SkillResult$ {
  /** @deprecated use `SkillResult$inboundSchema` instead. */
  export const inboundSchema = SkillResult$inboundSchema;
  /** @deprecated use `SkillResult$outboundSchema` instead. */
  export const outboundSchema = SkillResult$outboundSchema;
  /** @deprecated use `SkillResult$Outbound` instead. */
  export type Outbound = SkillResult$Outbound;
}
