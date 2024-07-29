/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingCreateContentBlockRequest = {
    marketingCreateContentBlocksRequestDto: shared.MarketingCreateContentBlocksRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingCreateContentBlockResponse = {
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
export const MarketingCreateContentBlockRequest$inboundSchema: z.ZodType<
    MarketingCreateContentBlockRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        MarketingCreateContentBlocksRequestDto:
            shared.MarketingCreateContentBlocksRequestDto$inboundSchema,
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            MarketingCreateContentBlocksRequestDto: "marketingCreateContentBlocksRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type MarketingCreateContentBlockRequest$Outbound = {
    MarketingCreateContentBlocksRequestDto: shared.MarketingCreateContentBlocksRequestDto$Outbound;
    "x-account-id": string;
};

/** @internal */
export const MarketingCreateContentBlockRequest$outboundSchema: z.ZodType<
    MarketingCreateContentBlockRequest$Outbound,
    z.ZodTypeDef,
    MarketingCreateContentBlockRequest
> = z
    .object({
        marketingCreateContentBlocksRequestDto:
            shared.MarketingCreateContentBlocksRequestDto$outboundSchema,
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            marketingCreateContentBlocksRequestDto: "MarketingCreateContentBlocksRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlockRequest$ {
    /** @deprecated use `MarketingCreateContentBlockRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingCreateContentBlockRequest$inboundSchema;
    /** @deprecated use `MarketingCreateContentBlockRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingCreateContentBlockRequest$outboundSchema;
    /** @deprecated use `MarketingCreateContentBlockRequest$Outbound` instead. */
    export type Outbound = MarketingCreateContentBlockRequest$Outbound;
}

/** @internal */
export const MarketingCreateContentBlockResponse$inboundSchema: z.ZodType<
    MarketingCreateContentBlockResponse,
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
export type MarketingCreateContentBlockResponse$Outbound = {
    ContentType: string;
    CreateResult?: shared.CreateResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const MarketingCreateContentBlockResponse$outboundSchema: z.ZodType<
    MarketingCreateContentBlockResponse$Outbound,
    z.ZodTypeDef,
    MarketingCreateContentBlockResponse
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
export namespace MarketingCreateContentBlockResponse$ {
    /** @deprecated use `MarketingCreateContentBlockResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingCreateContentBlockResponse$inboundSchema;
    /** @deprecated use `MarketingCreateContentBlockResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingCreateContentBlockResponse$outboundSchema;
    /** @deprecated use `MarketingCreateContentBlockResponse$Outbound` instead. */
    export type Outbound = MarketingCreateContentBlockResponse$Outbound;
}