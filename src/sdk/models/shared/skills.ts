/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type Skills = {
  /**
   * Whether the skill is active and therefore available for use
   */
  active?: boolean | null | undefined;
  /**
   * The ID associated with this skill
   */
  id?: string | null | undefined;
  /**
   * The name associated with this skill
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

/** @internal */
export const Skills$inboundSchema: z.ZodType<Skills, z.ZodTypeDef, unknown> = z
  .object({
    active: z.nullable(z.boolean()).optional(),
    id: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    remote_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "remote_id": "remoteId",
    });
  });

/** @internal */
export type Skills$Outbound = {
  active?: boolean | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const Skills$outboundSchema: z.ZodType<
  Skills$Outbound,
  z.ZodTypeDef,
  Skills
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
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
export namespace Skills$ {
  /** @deprecated use `Skills$inboundSchema` instead. */
  export const inboundSchema = Skills$inboundSchema;
  /** @deprecated use `Skills$outboundSchema` instead. */
  export const outboundSchema = Skills$outboundSchema;
  /** @deprecated use `Skills$Outbound` instead. */
  export type Outbound = Skills$Outbound;
}
