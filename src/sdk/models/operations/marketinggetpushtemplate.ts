/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingGetPushTemplateRequest = {
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

export type MarketingGetPushTemplateResponse = {
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
     * The push template with the given identifier was retrieved.
     */
    templateResult?: shared.TemplateResult | undefined;
};

/** @internal */
export const MarketingGetPushTemplateRequest$inboundSchema: z.ZodType<
    MarketingGetPushTemplateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type MarketingGetPushTemplateRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const MarketingGetPushTemplateRequest$outboundSchema: z.ZodType<
    MarketingGetPushTemplateRequest$Outbound,
    z.ZodTypeDef,
    MarketingGetPushTemplateRequest
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
export namespace MarketingGetPushTemplateRequest$ {
    /** @deprecated use `MarketingGetPushTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingGetPushTemplateRequest$inboundSchema;
    /** @deprecated use `MarketingGetPushTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingGetPushTemplateRequest$outboundSchema;
    /** @deprecated use `MarketingGetPushTemplateRequest$Outbound` instead. */
    export type Outbound = MarketingGetPushTemplateRequest$Outbound;
}

/** @internal */
export const MarketingGetPushTemplateResponse$inboundSchema: z.ZodType<
    MarketingGetPushTemplateResponse,
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
export type MarketingGetPushTemplateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplateResult?: shared.TemplateResult$Outbound | undefined;
};

/** @internal */
export const MarketingGetPushTemplateResponse$outboundSchema: z.ZodType<
    MarketingGetPushTemplateResponse$Outbound,
    z.ZodTypeDef,
    MarketingGetPushTemplateResponse
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
export namespace MarketingGetPushTemplateResponse$ {
    /** @deprecated use `MarketingGetPushTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingGetPushTemplateResponse$inboundSchema;
    /** @deprecated use `MarketingGetPushTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingGetPushTemplateResponse$outboundSchema;
    /** @deprecated use `MarketingGetPushTemplateResponse$Outbound` instead. */
    export type Outbound = MarketingGetPushTemplateResponse$Outbound;
}
