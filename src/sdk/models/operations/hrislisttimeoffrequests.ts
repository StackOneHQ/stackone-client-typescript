/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type HrisListTimeOffRequestsQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type HrisListTimeOffRequestsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: HrisListTimeOffRequestsQueryParamFilter | null | undefined;
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

export type HrisListTimeOffRequestsResponse = {
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
     * The list of time off requests was retrieved.
     */
    timeOffPaginated?: shared.TimeOffPaginated | undefined;
};

/** @internal */
export const HrisListTimeOffRequestsQueryParamFilter$inboundSchema: z.ZodType<
    HrisListTimeOffRequestsQueryParamFilter,
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
export type HrisListTimeOffRequestsQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListTimeOffRequestsQueryParamFilter$outboundSchema: z.ZodType<
    HrisListTimeOffRequestsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    HrisListTimeOffRequestsQueryParamFilter
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
export namespace HrisListTimeOffRequestsQueryParamFilter$ {
    /** @deprecated use `HrisListTimeOffRequestsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = HrisListTimeOffRequestsQueryParamFilter$inboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = HrisListTimeOffRequestsQueryParamFilter$outboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsQueryParamFilter$Outbound` instead. */
    export type Outbound = HrisListTimeOffRequestsQueryParamFilter$Outbound;
}

/** @internal */
export const HrisListTimeOffRequestsRequest$inboundSchema: z.ZodType<
    HrisListTimeOffRequestsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => HrisListTimeOffRequestsQueryParamFilter$inboundSchema))
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
export type HrisListTimeOffRequestsRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: HrisListTimeOffRequestsQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const HrisListTimeOffRequestsRequest$outboundSchema: z.ZodType<
    HrisListTimeOffRequestsRequest$Outbound,
    z.ZodTypeDef,
    HrisListTimeOffRequestsRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => HrisListTimeOffRequestsQueryParamFilter$outboundSchema))
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
export namespace HrisListTimeOffRequestsRequest$ {
    /** @deprecated use `HrisListTimeOffRequestsRequest$inboundSchema` instead. */
    export const inboundSchema = HrisListTimeOffRequestsRequest$inboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsRequest$outboundSchema` instead. */
    export const outboundSchema = HrisListTimeOffRequestsRequest$outboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsRequest$Outbound` instead. */
    export type Outbound = HrisListTimeOffRequestsRequest$Outbound;
}

/** @internal */
export const HrisListTimeOffRequestsResponse$inboundSchema: z.ZodType<
    HrisListTimeOffRequestsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        TimeOffPaginated: shared.TimeOffPaginated$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            TimeOffPaginated: "timeOffPaginated",
        });
    });

/** @internal */
export type HrisListTimeOffRequestsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TimeOffPaginated?: shared.TimeOffPaginated$Outbound | undefined;
};

/** @internal */
export const HrisListTimeOffRequestsResponse$outboundSchema: z.ZodType<
    HrisListTimeOffRequestsResponse$Outbound,
    z.ZodTypeDef,
    HrisListTimeOffRequestsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        timeOffPaginated: shared.TimeOffPaginated$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            timeOffPaginated: "TimeOffPaginated",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListTimeOffRequestsResponse$ {
    /** @deprecated use `HrisListTimeOffRequestsResponse$inboundSchema` instead. */
    export const inboundSchema = HrisListTimeOffRequestsResponse$inboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsResponse$outboundSchema` instead. */
    export const outboundSchema = HrisListTimeOffRequestsResponse$outboundSchema;
    /** @deprecated use `HrisListTimeOffRequestsResponse$Outbound` instead. */
    export type Outbound = HrisListTimeOffRequestsResponse$Outbound;
}
