/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingCreateOmniChannelTemplateRequest = {
    marketingCreateTemplateRequestDto: shared.MarketingCreateTemplateRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingCreateOmniChannelTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record created successfully.
     */
    createResult?: shared.CreateResult | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export const MarketingCreateOmniChannelTemplateRequest$inboundSchema: z.ZodType<
    MarketingCreateOmniChannelTemplateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MarketingCreateTemplateRequestDto: shared.MarketingCreateTemplateRequestDto$inboundSchema,
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            MarketingCreateTemplateRequestDto: "marketingCreateTemplateRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type MarketingCreateOmniChannelTemplateRequest$Outbound = {
    MarketingCreateTemplateRequestDto: shared.MarketingCreateTemplateRequestDto$Outbound;
    "x-account-id": string;
};

/** @internal */
export const MarketingCreateOmniChannelTemplateRequest$outboundSchema: z.ZodType<
    MarketingCreateOmniChannelTemplateRequest$Outbound,
    z.ZodTypeDef,
    MarketingCreateOmniChannelTemplateRequest
> = z
    .object({
        marketingCreateTemplateRequestDto: shared.MarketingCreateTemplateRequestDto$outboundSchema,
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            marketingCreateTemplateRequestDto: "MarketingCreateTemplateRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateOmniChannelTemplateRequest$ {
    /** @deprecated use `MarketingCreateOmniChannelTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingCreateOmniChannelTemplateRequest$inboundSchema;
    /** @deprecated use `MarketingCreateOmniChannelTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingCreateOmniChannelTemplateRequest$outboundSchema;
    /** @deprecated use `MarketingCreateOmniChannelTemplateRequest$Outbound` instead. */
    export type Outbound = MarketingCreateOmniChannelTemplateRequest$Outbound;
}

/** @internal */
export const MarketingCreateOmniChannelTemplateResponse$inboundSchema: z.ZodType<
    MarketingCreateOmniChannelTemplateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CreateResult: shared.CreateResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            CreateResult: "createResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type MarketingCreateOmniChannelTemplateResponse$Outbound = {
    ContentType: string;
    CreateResult?: shared.CreateResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const MarketingCreateOmniChannelTemplateResponse$outboundSchema: z.ZodType<
    MarketingCreateOmniChannelTemplateResponse$Outbound,
    z.ZodTypeDef,
    MarketingCreateOmniChannelTemplateResponse
> = z
    .object({
        contentType: z.string(),
        createResult: shared.CreateResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            createResult: "CreateResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateOmniChannelTemplateResponse$ {
    /** @deprecated use `MarketingCreateOmniChannelTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingCreateOmniChannelTemplateResponse$inboundSchema;
    /** @deprecated use `MarketingCreateOmniChannelTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingCreateOmniChannelTemplateResponse$outboundSchema;
    /** @deprecated use `MarketingCreateOmniChannelTemplateResponse$Outbound` instead. */
    export type Outbound = MarketingCreateOmniChannelTemplateResponse$Outbound;
}
