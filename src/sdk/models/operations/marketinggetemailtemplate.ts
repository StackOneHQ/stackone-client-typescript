/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingGetEmailTemplateRequest = {
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

export type MarketingGetEmailTemplateResponse = {
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
     * The email template with the given identifier was retrieved.
     */
    templateResult?: shared.TemplateResult | undefined;
};

/** @internal */
export const MarketingGetEmailTemplateRequest$inboundSchema: z.ZodType<
    MarketingGetEmailTemplateRequest,
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
export type MarketingGetEmailTemplateRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const MarketingGetEmailTemplateRequest$outboundSchema: z.ZodType<
    MarketingGetEmailTemplateRequest$Outbound,
    z.ZodTypeDef,
    MarketingGetEmailTemplateRequest
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
export namespace MarketingGetEmailTemplateRequest$ {
    /** @deprecated use `MarketingGetEmailTemplateRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingGetEmailTemplateRequest$inboundSchema;
    /** @deprecated use `MarketingGetEmailTemplateRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingGetEmailTemplateRequest$outboundSchema;
    /** @deprecated use `MarketingGetEmailTemplateRequest$Outbound` instead. */
    export type Outbound = MarketingGetEmailTemplateRequest$Outbound;
}

/** @internal */
export const MarketingGetEmailTemplateResponse$inboundSchema: z.ZodType<
    MarketingGetEmailTemplateResponse,
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
export type MarketingGetEmailTemplateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplateResult?: shared.TemplateResult$Outbound | undefined;
};

/** @internal */
export const MarketingGetEmailTemplateResponse$outboundSchema: z.ZodType<
    MarketingGetEmailTemplateResponse$Outbound,
    z.ZodTypeDef,
    MarketingGetEmailTemplateResponse
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
export namespace MarketingGetEmailTemplateResponse$ {
    /** @deprecated use `MarketingGetEmailTemplateResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingGetEmailTemplateResponse$inboundSchema;
    /** @deprecated use `MarketingGetEmailTemplateResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingGetEmailTemplateResponse$outboundSchema;
    /** @deprecated use `MarketingGetEmailTemplateResponse$Outbound` instead. */
    export type Outbound = MarketingGetEmailTemplateResponse$Outbound;
}
