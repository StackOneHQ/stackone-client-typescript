/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type MarketingListOmniChannelTemplatesQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type MarketingListOmniChannelTemplatesRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: MarketingListOmniChannelTemplatesQueryParamFilter | null | undefined;
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

export type MarketingListOmniChannelTemplatesResponse = {
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
     * The list of omni-channel templates was retrieved.
     */
    templatesPaginated?: shared.TemplatesPaginated | undefined;
};

/** @internal */
export const MarketingListOmniChannelTemplatesQueryParamFilter$inboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesQueryParamFilter,
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
export type MarketingListOmniChannelTemplatesQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const MarketingListOmniChannelTemplatesQueryParamFilter$outboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    MarketingListOmniChannelTemplatesQueryParamFilter
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
export namespace MarketingListOmniChannelTemplatesQueryParamFilter$ {
    /** @deprecated use `MarketingListOmniChannelTemplatesQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = MarketingListOmniChannelTemplatesQueryParamFilter$inboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = MarketingListOmniChannelTemplatesQueryParamFilter$outboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesQueryParamFilter$Outbound` instead. */
    export type Outbound = MarketingListOmniChannelTemplatesQueryParamFilter$Outbound;
}

/** @internal */
export const MarketingListOmniChannelTemplatesRequest$inboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => MarketingListOmniChannelTemplatesQueryParamFilter$inboundSchema))
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
export type MarketingListOmniChannelTemplatesRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: MarketingListOmniChannelTemplatesQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const MarketingListOmniChannelTemplatesRequest$outboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesRequest$Outbound,
    z.ZodTypeDef,
    MarketingListOmniChannelTemplatesRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(
                z.lazy(() => MarketingListOmniChannelTemplatesQueryParamFilter$outboundSchema)
            )
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
export namespace MarketingListOmniChannelTemplatesRequest$ {
    /** @deprecated use `MarketingListOmniChannelTemplatesRequest$inboundSchema` instead. */
    export const inboundSchema = MarketingListOmniChannelTemplatesRequest$inboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesRequest$outboundSchema` instead. */
    export const outboundSchema = MarketingListOmniChannelTemplatesRequest$outboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesRequest$Outbound` instead. */
    export type Outbound = MarketingListOmniChannelTemplatesRequest$Outbound;
}

/** @internal */
export const MarketingListOmniChannelTemplatesResponse$inboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesResponse,
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
export type MarketingListOmniChannelTemplatesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TemplatesPaginated?: shared.TemplatesPaginated$Outbound | undefined;
};

/** @internal */
export const MarketingListOmniChannelTemplatesResponse$outboundSchema: z.ZodType<
    MarketingListOmniChannelTemplatesResponse$Outbound,
    z.ZodTypeDef,
    MarketingListOmniChannelTemplatesResponse
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
export namespace MarketingListOmniChannelTemplatesResponse$ {
    /** @deprecated use `MarketingListOmniChannelTemplatesResponse$inboundSchema` instead. */
    export const inboundSchema = MarketingListOmniChannelTemplatesResponse$inboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesResponse$outboundSchema` instead. */
    export const outboundSchema = MarketingListOmniChannelTemplatesResponse$outboundSchema;
    /** @deprecated use `MarketingListOmniChannelTemplatesResponse$Outbound` instead. */
    export type Outbound = MarketingListOmniChannelTemplatesResponse$Outbound;
}
