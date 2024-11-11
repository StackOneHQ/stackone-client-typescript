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
  SmsTemplate,
  SmsTemplate$inboundSchema,
  SmsTemplate$Outbound,
  SmsTemplate$outboundSchema,
} from "./smstemplate.js";

export type SmsTemplateResult = {
  data: SmsTemplate;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const SmsTemplateResult$inboundSchema: z.ZodType<
  SmsTemplateResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: SmsTemplate$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type SmsTemplateResult$Outbound = {
  data: SmsTemplate$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const SmsTemplateResult$outboundSchema: z.ZodType<
  SmsTemplateResult$Outbound,
  z.ZodTypeDef,
  SmsTemplateResult
> = z.object({
  data: SmsTemplate$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsTemplateResult$ {
  /** @deprecated use `SmsTemplateResult$inboundSchema` instead. */
  export const inboundSchema = SmsTemplateResult$inboundSchema;
  /** @deprecated use `SmsTemplateResult$outboundSchema` instead. */
  export const outboundSchema = SmsTemplateResult$outboundSchema;
  /** @deprecated use `SmsTemplateResult$Outbound` instead. */
  export type Outbound = SmsTemplateResult$Outbound;
}
