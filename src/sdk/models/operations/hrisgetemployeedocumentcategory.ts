/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisGetEmployeeDocumentCategoryRequest = {
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

export type HrisGetEmployeeDocumentCategoryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The employee document category with the given identifier was retrieved.
     */
    referenceResult?: shared.ReferenceResult | undefined;
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
export const HrisGetEmployeeDocumentCategoryRequest$inboundSchema: z.ZodType<
    HrisGetEmployeeDocumentCategoryRequest,
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
export type HrisGetEmployeeDocumentCategoryRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeeDocumentCategoryRequest$outboundSchema: z.ZodType<
    HrisGetEmployeeDocumentCategoryRequest$Outbound,
    z.ZodTypeDef,
    HrisGetEmployeeDocumentCategoryRequest
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
export namespace HrisGetEmployeeDocumentCategoryRequest$ {
    /** @deprecated use `HrisGetEmployeeDocumentCategoryRequest$inboundSchema` instead. */
    export const inboundSchema = HrisGetEmployeeDocumentCategoryRequest$inboundSchema;
    /** @deprecated use `HrisGetEmployeeDocumentCategoryRequest$outboundSchema` instead. */
    export const outboundSchema = HrisGetEmployeeDocumentCategoryRequest$outboundSchema;
    /** @deprecated use `HrisGetEmployeeDocumentCategoryRequest$Outbound` instead. */
    export type Outbound = HrisGetEmployeeDocumentCategoryRequest$Outbound;
}

/** @internal */
export const HrisGetEmployeeDocumentCategoryResponse$inboundSchema: z.ZodType<
    HrisGetEmployeeDocumentCategoryResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ReferenceResult: shared.ReferenceResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            ReferenceResult: "referenceResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type HrisGetEmployeeDocumentCategoryResponse$Outbound = {
    ContentType: string;
    ReferenceResult?: shared.ReferenceResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const HrisGetEmployeeDocumentCategoryResponse$outboundSchema: z.ZodType<
    HrisGetEmployeeDocumentCategoryResponse$Outbound,
    z.ZodTypeDef,
    HrisGetEmployeeDocumentCategoryResponse
> = z
    .object({
        contentType: z.string(),
        referenceResult: shared.ReferenceResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            referenceResult: "ReferenceResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeeDocumentCategoryResponse$ {
    /** @deprecated use `HrisGetEmployeeDocumentCategoryResponse$inboundSchema` instead. */
    export const inboundSchema = HrisGetEmployeeDocumentCategoryResponse$inboundSchema;
    /** @deprecated use `HrisGetEmployeeDocumentCategoryResponse$outboundSchema` instead. */
    export const outboundSchema = HrisGetEmployeeDocumentCategoryResponse$outboundSchema;
    /** @deprecated use `HrisGetEmployeeDocumentCategoryResponse$Outbound` instead. */
    export type Outbound = HrisGetEmployeeDocumentCategoryResponse$Outbound;
}
