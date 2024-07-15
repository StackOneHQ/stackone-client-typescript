/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type IamListGroupsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type IamListGroupsRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: IamListGroupsQueryParamFilter | null | undefined;
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

export type IamListGroupsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list of groups was retrieved.
     */
    iamGroupsPaginated?: shared.IamGroupsPaginated | undefined;
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
export const IamListGroupsQueryParamFilter$inboundSchema: z.ZodType<
    IamListGroupsQueryParamFilter,
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
export type IamListGroupsQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const IamListGroupsQueryParamFilter$outboundSchema: z.ZodType<
    IamListGroupsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    IamListGroupsQueryParamFilter
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
export namespace IamListGroupsQueryParamFilter$ {
    /** @deprecated use `IamListGroupsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = IamListGroupsQueryParamFilter$inboundSchema;
    /** @deprecated use `IamListGroupsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = IamListGroupsQueryParamFilter$outboundSchema;
    /** @deprecated use `IamListGroupsQueryParamFilter$Outbound` instead. */
    export type Outbound = IamListGroupsQueryParamFilter$Outbound;
}

/** @internal */
export const IamListGroupsRequest$inboundSchema: z.ZodType<
    IamListGroupsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => IamListGroupsQueryParamFilter$inboundSchema)).optional(),
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
export type IamListGroupsRequest$Outbound = {
    expand?: string | null | undefined;
    fields?: string | null | undefined;
    filter?: IamListGroupsQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const IamListGroupsRequest$outboundSchema: z.ZodType<
    IamListGroupsRequest$Outbound,
    z.ZodTypeDef,
    IamListGroupsRequest
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => IamListGroupsQueryParamFilter$outboundSchema)).optional(),
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
export namespace IamListGroupsRequest$ {
    /** @deprecated use `IamListGroupsRequest$inboundSchema` instead. */
    export const inboundSchema = IamListGroupsRequest$inboundSchema;
    /** @deprecated use `IamListGroupsRequest$outboundSchema` instead. */
    export const outboundSchema = IamListGroupsRequest$outboundSchema;
    /** @deprecated use `IamListGroupsRequest$Outbound` instead. */
    export type Outbound = IamListGroupsRequest$Outbound;
}

/** @internal */
export const IamListGroupsResponse$inboundSchema: z.ZodType<
    IamListGroupsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        IamGroupsPaginated: shared.IamGroupsPaginated$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            IamGroupsPaginated: "iamGroupsPaginated",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type IamListGroupsResponse$Outbound = {
    ContentType: string;
    IamGroupsPaginated?: shared.IamGroupsPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const IamListGroupsResponse$outboundSchema: z.ZodType<
    IamListGroupsResponse$Outbound,
    z.ZodTypeDef,
    IamListGroupsResponse
> = z
    .object({
        contentType: z.string(),
        iamGroupsPaginated: shared.IamGroupsPaginated$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            iamGroupsPaginated: "IamGroupsPaginated",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamListGroupsResponse$ {
    /** @deprecated use `IamListGroupsResponse$inboundSchema` instead. */
    export const inboundSchema = IamListGroupsResponse$inboundSchema;
    /** @deprecated use `IamListGroupsResponse$outboundSchema` instead. */
    export const outboundSchema = IamListGroupsResponse$outboundSchema;
    /** @deprecated use `IamListGroupsResponse$Outbound` instead. */
    export type Outbound = IamListGroupsResponse$Outbound;
}
