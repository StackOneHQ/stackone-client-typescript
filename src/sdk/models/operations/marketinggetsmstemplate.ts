/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingGetSmsTemplateRequest = {
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

export type MarketingGetSmsTemplateResponse = {
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
     * The SMS template with the given identifier was retrieved.
     */
    templateResult?: shared.TemplateResult | undefined;
};

/** @internal */
export const MarketingGetSmsTemplateRequest$inboundSchema: z.ZodType<
    MarketingGetSmsTemplateRequest,
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
export type MarketingGetSmsTemplateRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const MarketingGetSmsTemplateRequest$outboundSchema: z.ZodType<
    MarketingGetSmsTemplateRequest$Outbound,
    z.ZodTypeDef,
    MarketingGetSmsTemplateRequest
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
export namespace MarketingGetSmsTemplateRequest$ {
    /** @deprecated use `MarketingGetSmsTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingGetSmsTemplateRequest$inboundSchema;
    /** @deprecated use `MarketingGetSmsTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingGetSmsTemplateRequest$outboundSchema;
    /** @deprecated use `MarketingGetSmsTemplateRequest$Outbound` instead. */
    export type Outbound = MarketingGetSmsTemplateRequest$Outbound;
}

/** @internal */
export const MarketingGetSmsTemplateResponse$inboundSchema: z.ZodType<
    MarketingGetSmsTemplateResponse,
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
export type MarketingGetSmsTemplateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplateResult?: shared.TemplateResult$Outbound | undefined;
};

/** @internal */
export const MarketingGetSmsTemplateResponse$outboundSchema: z.ZodType<
    MarketingGetSmsTemplateResponse$Outbound,
    z.ZodTypeDef,
    MarketingGetSmsTemplateResponse
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
export namespace MarketingGetSmsTemplateResponse$ {
    /** @deprecated use `MarketingGetSmsTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingGetSmsTemplateResponse$inboundSchema;
    /** @deprecated use `MarketingGetSmsTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingGetSmsTemplateResponse$outboundSchema;
    /** @deprecated use `MarketingGetSmsTemplateResponse$Outbound` instead. */
    export type Outbound = MarketingGetSmsTemplateResponse$Outbound;
}
