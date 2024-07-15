/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type LmsGetCategoryRequest = {
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

export type LmsGetCategoryResponse = {
    /**
     * The category with the given identifier was retrieved.
     */
    categoryResult?: shared.CategoryResult | undefined;
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
};

/** @internal */
export const LmsGetCategoryRequest$inboundSchema: z.ZodType<
    LmsGetCategoryRequest,
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
export type LmsGetCategoryRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const LmsGetCategoryRequest$outboundSchema: z.ZodType<
    LmsGetCategoryRequest$Outbound,
    z.ZodTypeDef,
    LmsGetCategoryRequest
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
export namespace LmsGetCategoryRequest$ {
    /** @deprecated use `LmsGetCategoryRequest$inboundSchema` instead. */
    export const inboundSchema = LmsGetCategoryRequest$inboundSchema;
    /** @deprecated use `LmsGetCategoryRequest$outboundSchema` instead. */
    export const outboundSchema = LmsGetCategoryRequest$outboundSchema;
    /** @deprecated use `LmsGetCategoryRequest$Outbound` instead. */
    export type Outbound = LmsGetCategoryRequest$Outbound;
}

/** @internal */
export const LmsGetCategoryResponse$inboundSchema: z.ZodType<
    LmsGetCategoryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CategoryResult: shared.CategoryResult$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            CategoryResult: "categoryResult",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type LmsGetCategoryResponse$Outbound = {
    CategoryResult?: shared.CategoryResult$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const LmsGetCategoryResponse$outboundSchema: z.ZodType<
    LmsGetCategoryResponse$Outbound,
    z.ZodTypeDef,
    LmsGetCategoryResponse
> = z
    .object({
        categoryResult: shared.CategoryResult$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            categoryResult: "CategoryResult",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsGetCategoryResponse$ {
    /** @deprecated use `LmsGetCategoryResponse$inboundSchema` instead. */
    export const inboundSchema = LmsGetCategoryResponse$inboundSchema;
    /** @deprecated use `LmsGetCategoryResponse$outboundSchema` instead. */
    export const outboundSchema = LmsGetCategoryResponse$outboundSchema;
    /** @deprecated use `LmsGetCategoryResponse$Outbound` instead. */
    export type Outbound = LmsGetCategoryResponse$Outbound;
}
