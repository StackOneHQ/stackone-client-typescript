/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InAppTemplate,
  InAppTemplate$inboundSchema,
  InAppTemplate$Outbound,
  InAppTemplate$outboundSchema,
} from "./inapptemplate.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type InAppTemplateResult = {
  data: InAppTemplate;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InAppTemplateResult$inboundSchema: z.ZodType<
  InAppTemplateResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: InAppTemplate$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type InAppTemplateResult$Outbound = {
  data: InAppTemplate$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InAppTemplateResult$outboundSchema: z.ZodType<
  InAppTemplateResult$Outbound,
  z.ZodTypeDef,
  InAppTemplateResult
> = z.object({
  data: InAppTemplate$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InAppTemplateResult$ {
  /** @deprecated use `InAppTemplateResult$inboundSchema` instead. */
  export const inboundSchema = InAppTemplateResult$inboundSchema;
  /** @deprecated use `InAppTemplateResult$outboundSchema` instead. */
  export const outboundSchema = InAppTemplateResult$outboundSchema;
  /** @deprecated use `InAppTemplateResult$Outbound` instead. */
  export type Outbound = InAppTemplateResult$Outbound;
}

export function inAppTemplateResultToJSON(
  inAppTemplateResult: InAppTemplateResult,
): string {
  return JSON.stringify(
    InAppTemplateResult$outboundSchema.parse(inAppTemplateResult),
  );
}

export function inAppTemplateResultFromJSON(
  jsonString: string,
): SafeParseResult<InAppTemplateResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InAppTemplateResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InAppTemplateResult' from JSON`,
  );
}
