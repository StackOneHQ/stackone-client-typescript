/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PushMessages,
  PushMessages$inboundSchema,
  PushMessages$Outbound,
  PushMessages$outboundSchema,
} from "./pushmessages.js";

export type PushTemplate = {
  /**
   * Date of creation
   */
  createdAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  messages?: Array<PushMessages> | null | undefined;
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * Date of last update
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const PushTemplate$inboundSchema: z.ZodType<
  PushTemplate,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  messages: z.nullable(z.array(PushMessages$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "remote_id": "remoteId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PushTemplate$Outbound = {
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  messages?: Array<PushMessages$Outbound> | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  tags?: Array<string> | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const PushTemplate$outboundSchema: z.ZodType<
  PushTemplate$Outbound,
  z.ZodTypeDef,
  PushTemplate
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  messages: z.nullable(z.array(PushMessages$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    remoteId: "remote_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushTemplate$ {
  /** @deprecated use `PushTemplate$inboundSchema` instead. */
  export const inboundSchema = PushTemplate$inboundSchema;
  /** @deprecated use `PushTemplate$outboundSchema` instead. */
  export const outboundSchema = PushTemplate$outboundSchema;
  /** @deprecated use `PushTemplate$Outbound` instead. */
  export type Outbound = PushTemplate$Outbound;
}

export function pushTemplateToJSON(pushTemplate: PushTemplate): string {
  return JSON.stringify(PushTemplate$outboundSchema.parse(pushTemplate));
}

export function pushTemplateFromJSON(
  jsonString: string,
): SafeParseResult<PushTemplate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PushTemplate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PushTemplate' from JSON`,
  );
}
