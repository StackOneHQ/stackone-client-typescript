/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PushMessages,
  PushMessages$inboundSchema,
  PushMessages$Outbound,
  PushMessages$outboundSchema,
} from "./pushmessages.js";

export type MarketingCreatePushTemplateRequestDto = {
  messages?: Array<PushMessages> | null | undefined;
  name?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreatePushTemplateRequestDto$inboundSchema: z.ZodType<
  MarketingCreatePushTemplateRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  messages: z.nullable(z.array(PushMessages$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type MarketingCreatePushTemplateRequestDto$Outbound = {
  messages?: Array<PushMessages$Outbound> | null | undefined;
  name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreatePushTemplateRequestDto$outboundSchema: z.ZodType<
  MarketingCreatePushTemplateRequestDto$Outbound,
  z.ZodTypeDef,
  MarketingCreatePushTemplateRequestDto
> = z.object({
  messages: z.nullable(z.array(PushMessages$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreatePushTemplateRequestDto$ {
  /** @deprecated use `MarketingCreatePushTemplateRequestDto$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreatePushTemplateRequestDto$inboundSchema;
  /** @deprecated use `MarketingCreatePushTemplateRequestDto$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreatePushTemplateRequestDto$outboundSchema;
  /** @deprecated use `MarketingCreatePushTemplateRequestDto$Outbound` instead. */
  export type Outbound = MarketingCreatePushTemplateRequestDto$Outbound;
}

export function marketingCreatePushTemplateRequestDtoToJSON(
  marketingCreatePushTemplateRequestDto: MarketingCreatePushTemplateRequestDto,
): string {
  return JSON.stringify(
    MarketingCreatePushTemplateRequestDto$outboundSchema.parse(
      marketingCreatePushTemplateRequestDto,
    ),
  );
}

export function marketingCreatePushTemplateRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<MarketingCreatePushTemplateRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MarketingCreatePushTemplateRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingCreatePushTemplateRequestDto' from JSON`,
  );
}
