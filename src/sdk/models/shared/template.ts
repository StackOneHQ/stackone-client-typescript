/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Template = {
  /**
   * Date of creation
   */
  createdAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
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
export const Template$inboundSchema: z.ZodType<
  Template,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
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
export type Template$Outbound = {
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  tags?: Array<string> | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const Template$outboundSchema: z.ZodType<
  Template$Outbound,
  z.ZodTypeDef,
  Template
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
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
export namespace Template$ {
  /** @deprecated use `Template$inboundSchema` instead. */
  export const inboundSchema = Template$inboundSchema;
  /** @deprecated use `Template$outboundSchema` instead. */
  export const outboundSchema = Template$outboundSchema;
  /** @deprecated use `Template$Outbound` instead. */
  export type Outbound = Template$Outbound;
}

export function templateToJSON(template: Template): string {
  return JSON.stringify(Template$outboundSchema.parse(template));
}

export function templateFromJSON(
  jsonString: string,
): SafeParseResult<Template, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Template$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Template' from JSON`,
  );
}
