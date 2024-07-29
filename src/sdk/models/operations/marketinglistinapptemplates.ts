/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type MarketingListInAppTemplatesQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type MarketingListInAppTemplatesRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: MarketingListInAppTemplatesQueryParamFilter | null | undefined;
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

export type MarketingListInAppTemplatesResponse = {
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
     * The list of in_app templates was retrieved.
     */
    templatesPaginated?: shared.TemplatesPaginated | undefined;
};

/** @internal */
export const MarketingListInAppTemplatesQueryParamFilter$inboundSchema: z.ZodType<
    MarketingListInAppTemplatesQueryParamFilter,
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
export type MarketingListInAppTemplatesQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const MarketingListInAppTemplatesQueryParamFilter$outboundSchema: z.ZodType<
    MarketingListInAppTemplatesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    MarketingListInAppTemplatesQueryParamFilter
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
export namespace MarketingListInAppTemplatesQueryParamFilter$ {
    /** @deprecated use `MarketingListInAppTemplatesQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = MarketingListInAppTemplatesQueryParamFilter$inboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = MarketingListInAppTemplatesQueryParamFilter$outboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesQueryParamFilter$Outbound` instead. */
    export type Outbound = MarketingListInAppTemplatesQueryParamFilter$Outbound;
}

/** @internal */
export const MarketingListInAppTemplatesRequest$inboundSchema: z.ZodType<
    MarketingListInAppTemplatesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => MarketingListInAppTemplatesQueryParamFilter$inboundSchema))
            .optional(),
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
export type MarketingListInAppTemplatesRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: MarketingListInAppTemplatesQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const MarketingListInAppTemplatesRequest$outboundSchema: z.ZodType<
    MarketingListInAppTemplatesRequest$Outbound,
    z.ZodTypeDef,
    MarketingListInAppTemplatesRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => MarketingListInAppTemplatesQueryParamFilter$outboundSchema))
            .optional(),
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
export namespace MarketingListInAppTemplatesRequest$ {
    /** @deprecated use `MarketingListInAppTemplatesRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingListInAppTemplatesRequest$inboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingListInAppTemplatesRequest$outboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesRequest$Outbound` instead. */
    export type Outbound = MarketingListInAppTemplatesRequest$Outbound;
}

/** @internal */
export const MarketingListInAppTemplatesResponse$inboundSchema: z.ZodType<
    MarketingListInAppTemplatesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TemplatesPaginated: shared.TemplatesPaginated$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TemplatesPaginated: "templatesPaginated",
        });
    });

/** @internal */
export type MarketingListInAppTemplatesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplatesPaginated?: shared.TemplatesPaginated$Outbound | undefined;
};

/** @internal */
export const MarketingListInAppTemplatesResponse$outboundSchema: z.ZodType<
    MarketingListInAppTemplatesResponse$Outbound,
    z.ZodTypeDef,
    MarketingListInAppTemplatesResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        templatesPaginated: shared.TemplatesPaginated$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            templatesPaginated: "TemplatesPaginated",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingListInAppTemplatesResponse$ {
    /** @deprecated use `MarketingListInAppTemplatesResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingListInAppTemplatesResponse$inboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingListInAppTemplatesResponse$outboundSchema;
    /** @deprecated use `MarketingListInAppTemplatesResponse$Outbound` instead. */
    export type Outbound = MarketingListInAppTemplatesResponse$Outbound;
}