/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmailTemplate,
  EmailTemplate$inboundSchema,
  EmailTemplate$Outbound,
  EmailTemplate$outboundSchema,
} from "./emailtemplate.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type EmailTemplatesPaginated = {
  data: Array<EmailTemplate>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const EmailTemplatesPaginated$inboundSchema: z.ZodType<
  EmailTemplatesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(EmailTemplate$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type EmailTemplatesPaginated$Outbound = {
  data: Array<EmailTemplate$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const EmailTemplatesPaginated$outboundSchema: z.ZodType<
  EmailTemplatesPaginated$Outbound,
  z.ZodTypeDef,
  EmailTemplatesPaginated
> = z.object({
  data: z.array(EmailTemplate$outboundSchema),
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
export namespace EmailTemplatesPaginated$ {
  /** @deprecated use `EmailTemplatesPaginated$inboundSchema` instead. */
  export const inboundSchema = EmailTemplatesPaginated$inboundSchema;
  /** @deprecated use `EmailTemplatesPaginated$outboundSchema` instead. */
  export const outboundSchema = EmailTemplatesPaginated$outboundSchema;
  /** @deprecated use `EmailTemplatesPaginated$Outbound` instead. */
  export type Outbound = EmailTemplatesPaginated$Outbound;
}

export function emailTemplatesPaginatedToJSON(
  emailTemplatesPaginated: EmailTemplatesPaginated,
): string {
  return JSON.stringify(
    EmailTemplatesPaginated$outboundSchema.parse(emailTemplatesPaginated),
  );
}

export function emailTemplatesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<EmailTemplatesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmailTemplatesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmailTemplatesPaginated' from JSON`,
  );
}