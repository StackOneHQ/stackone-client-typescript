/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Message,
    Message$inboundSchema,
    Message$Outbound,
    Message$outboundSchema,
} from "./message.js";
import * as z from "zod";

export type MarketingCreateTemplateRequestDto = {
    messages?: Array<Message> | null | undefined;
    name?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreateTemplateRequestDto$inboundSchema: z.ZodType<
    MarketingCreateTemplateRequestDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    messages: z.nullable(z.array(Message$inboundSchema)).optional(),
    name: z.nullable(z.string()).optional(),
    passthrough: z.nullable(z.record(z.any())).optional(),
    tags: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type MarketingCreateTemplateRequestDto$Outbound = {
    messages?: Array<Message$Outbound> | null | undefined;
    name?: string | null | undefined;
    passthrough?: { [k: string]: any } | null | undefined;
    tags?: Array<string> | null | undefined;
};

/** @internal */
export const MarketingCreateTemplateRequestDto$outboundSchema: z.ZodType<
    MarketingCreateTemplateRequestDto$Outbound,
    z.ZodTypeDef,
    MarketingCreateTemplateRequestDto
> = z.object({
    messages: z.nullable(z.array(Message$outboundSchema)).optional(),
    name: z.nullable(z.string()).optional(),
    passthrough: z.nullable(z.record(z.any())).optional(),
    tags: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateTemplateRequestDto$ {
    /** @deprecated use `MarketingCreateTemplateRequestDto$inboundSchema` instead. */
    export const inboundSchema = MarketingCreateTemplateRequestDto$inboundSchema;
    /** @deprecated use `MarketingCreateTemplateRequestDto$outboundSchema` instead. */
    export const outboundSchema = MarketingCreateTemplateRequestDto$outboundSchema;
    /** @deprecated use `MarketingCreateTemplateRequestDto$Outbound` instead. */
    export type Outbound = MarketingCreateTemplateRequestDto$Outbound;
}
