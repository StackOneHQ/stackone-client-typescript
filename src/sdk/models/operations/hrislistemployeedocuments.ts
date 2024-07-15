/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type HrisListEmployeeDocumentsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type HrisListEmployeeDocumentsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: HrisListEmployeeDocumentsQueryParamFilter | null | undefined;
    id: string;
    /**
     * The unified cursor
     */
    next?: string | null | undefined;
    /**
     * The page number of the results to fetch
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    page?: string | null | undefined;
    /**
     * The number of results per page
     */
    pageSize?: string | null | undefined;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisListEmployeeDocumentsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The documents related to the employee with the given identifier were retrieved.
     */
    hrisDocumentsPaginated?: shared.HrisDocumentsPaginated | undefined;
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
export const HrisListEmployeeDocumentsQueryParamFilter$inboundSchema: z.ZodType<
    HrisListEmployeeDocumentsQueryParamFilter,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        updated_after: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updated_after: "updatedAfter",
        });
    });

/** @internal */
export type HrisListEmployeeDocumentsQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListEmployeeDocumentsQueryParamFilter$outboundSchema: z.ZodType<
    HrisListEmployeeDocumentsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    HrisListEmployeeDocumentsQueryParamFilter
> = z
    .object({
        updatedAfter: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updatedAfter: "updated_after",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListEmployeeDocumentsQueryParamFilter$ {
    /** @deprecated use `HrisListEmployeeDocumentsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = HrisListEmployeeDocumentsQueryParamFilter$inboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = HrisListEmployeeDocumentsQueryParamFilter$outboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsQueryParamFilter$Outbound` instead. */
    export type Outbound = HrisListEmployeeDocumentsQueryParamFilter$Outbound;
}

/** @internal */
export const HrisListEmployeeDocumentsRequest$inboundSchema: z.ZodType<
    HrisListEmployeeDocumentsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => HrisListEmployeeDocumentsQueryParamFilter$inboundSchema))
            .optional(),
        id: z.string(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updated_after: z.nullable(z.string()).optional(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            page_size: "pageSize",
            updated_after: "updatedAfter",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type HrisListEmployeeDocumentsRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: HrisListEmployeeDocumentsQueryParamFilter$Outbound | null | undefined;
    id: string;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const HrisListEmployeeDocumentsRequest$outboundSchema: z.ZodType<
    HrisListEmployeeDocumentsRequest$Outbound,
    z.ZodTypeDef,
    HrisListEmployeeDocumentsRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => HrisListEmployeeDocumentsQueryParamFilter$outboundSchema))
            .optional(),
        id: z.string(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        pageSize: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updatedAfter: z.nullable(z.string()).optional(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            pageSize: "page_size",
            updatedAfter: "updated_after",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListEmployeeDocumentsRequest$ {
    /** @deprecated use `HrisListEmployeeDocumentsRequest$inboundSchema` instead. */
    export const inboundSchema = HrisListEmployeeDocumentsRequest$inboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsRequest$outboundSchema` instead. */
    export const outboundSchema = HrisListEmployeeDocumentsRequest$outboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsRequest$Outbound` instead. */
    export type Outbound = HrisListEmployeeDocumentsRequest$Outbound;
}

/** @internal */
export const HrisListEmployeeDocumentsResponse$inboundSchema: z.ZodType<
    HrisListEmployeeDocumentsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        HrisDocumentsPaginated: shared.HrisDocumentsPaginated$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            HrisDocumentsPaginated: "hrisDocumentsPaginated",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type HrisListEmployeeDocumentsResponse$Outbound = {
    ContentType: string;
    HrisDocumentsPaginated?: shared.HrisDocumentsPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const HrisListEmployeeDocumentsResponse$outboundSchema: z.ZodType<
    HrisListEmployeeDocumentsResponse$Outbound,
    z.ZodTypeDef,
    HrisListEmployeeDocumentsResponse
> = z
    .object({
        contentType: z.string(),
        hrisDocumentsPaginated: shared.HrisDocumentsPaginated$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            hrisDocumentsPaginated: "HrisDocumentsPaginated",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListEmployeeDocumentsResponse$ {
    /** @deprecated use `HrisListEmployeeDocumentsResponse$inboundSchema` instead. */
    export const inboundSchema = HrisListEmployeeDocumentsResponse$inboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsResponse$outboundSchema` instead. */
    export const outboundSchema = HrisListEmployeeDocumentsResponse$outboundSchema;
    /** @deprecated use `HrisListEmployeeDocumentsResponse$Outbound` instead. */
    export type Outbound = HrisListEmployeeDocumentsResponse$Outbound;
}
