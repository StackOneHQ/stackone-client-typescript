/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingGetOmniChannelTemplateRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingGetOmniChannelTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The omni-channel template with the given identifier was retrieved.
     */
    templateResult?: shared.TemplateResult | undefined;
};

/** @internal */
export const MarketingGetOmniChannelTemplateRequest$inboundSchema: z.ZodType<
    MarketingGetOmniChannelTemplateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean()),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type MarketingGetOmniChannelTemplateRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const MarketingGetOmniChannelTemplateRequest$outboundSchema: z.ZodType<
    MarketingGetOmniChannelTemplateRequest$Outbound,
    z.ZodTypeDef,
    MarketingGetOmniChannelTemplateRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingGetOmniChannelTemplateRequest$ {
    /** @deprecated use `MarketingGetOmniChannelTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingGetOmniChannelTemplateRequest$inboundSchema;
    /** @deprecated use `MarketingGetOmniChannelTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingGetOmniChannelTemplateRequest$outboundSchema;
    /** @deprecated use `MarketingGetOmniChannelTemplateRequest$Outbound` instead. */
    export type Outbound = MarketingGetOmniChannelTemplateRequest$Outbound;
}

/** @internal */
export const MarketingGetOmniChannelTemplateResponse$inboundSchema: z.ZodType<
    MarketingGetOmniChannelTemplateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TemplateResult: shared.TemplateResult$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TemplateResult: "templateResult",
        });
    });

/** @internal */
export type MarketingGetOmniChannelTemplateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplateResult?: shared.TemplateResult$Outbound | undefined;
};

/** @internal */
export const MarketingGetOmniChannelTemplateResponse$outboundSchema: z.ZodType<
    MarketingGetOmniChannelTemplateResponse$Outbound,
    z.ZodTypeDef,
    MarketingGetOmniChannelTemplateResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        templateResult: shared.TemplateResult$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            templateResult: "TemplateResult",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingGetOmniChannelTemplateResponse$ {
    /** @deprecated use `MarketingGetOmniChannelTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingGetOmniChannelTemplateResponse$inboundSchema;
    /** @deprecated use `MarketingGetOmniChannelTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingGetOmniChannelTemplateResponse$outboundSchema;
    /** @deprecated use `MarketingGetOmniChannelTemplateResponse$Outbound` instead. */
    export type Outbound = MarketingGetOmniChannelTemplateResponse$Outbound;
}
