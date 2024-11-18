/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmailMessages,
  EmailMessages$inboundSchema,
  EmailMessages$Outbound,
  EmailMessages$outboundSchema,
} from "./emailmessages.js";

export type EmailTemplate = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  messages?: Array<EmailMessages> | null | undefined;
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const EmailTemplate$inboundSchema: z.ZodType<
  EmailTemplate,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  messages: z.nullable(z.array(EmailMessages$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type EmailTemplate$Outbound = {
  id?: string | null | undefined;
  messages?: Array<EmailMessages$Outbound> | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const EmailTemplate$outboundSchema: z.ZodType<
  EmailTemplate$Outbound,
  z.ZodTypeDef,
  EmailTemplate
> = z.object({
  id: z.nullable(z.string()).optional(),
  messages: z.nullable(z.array(EmailMessages$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailTemplate$ {
  /** @deprecated use `EmailTemplate$inboundSchema` instead. */
  export const inboundSchema = EmailTemplate$inboundSchema;
  /** @deprecated use `EmailTemplate$outboundSchema` instead. */
  export const outboundSchema = EmailTemplate$outboundSchema;
  /** @deprecated use `EmailTemplate$Outbound` instead. */
  export type Outbound = EmailTemplate$Outbound;
}

export function emailTemplateToJSON(emailTemplate: EmailTemplate): string {
  return JSON.stringify(EmailTemplate$outboundSchema.parse(emailTemplate));
}

export function emailTemplateFromJSON(
  jsonString: string,
): SafeParseResult<EmailTemplate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmailTemplate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmailTemplate' from JSON`,
  );
}
