/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * ATS Application Filter
 */
export type AtsListApplicationsQueryParamFilter = {
    /**
     * Filter to select applications by job_id
     */
    jobId?: string | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type AtsListApplicationsRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * ATS Application Filter
     */
    filter?: AtsListApplicationsQueryParamFilter | null | undefined;
    /**
     * Filter for job ID to retrieve a list of applications related to this job
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    jobId?: string | null | undefined;
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
     * The sync token to select the only updated results
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    syncToken?: string | null | undefined;
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

export type AtsListApplicationsResponse = {
    /**
     * The list of applications was retrieved.
     */
    applicationsPaginated?: shared.ApplicationsPaginated | undefined;
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
export const AtsListApplicationsQueryParamFilter$inboundSchema: z.ZodType<
    AtsListApplicationsQueryParamFilter,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        job_id: z.nullable(z.string()).optional(),
        updated_after: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            job_id: "jobId",
            updated_after: "updatedAfter",
        });
    });

/** @internal */
export type AtsListApplicationsQueryParamFilter$Outbound = {
    job_id?: string | null | undefined;
    updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationsQueryParamFilter$outboundSchema: z.ZodType<
    AtsListApplicationsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsQueryParamFilter
> = z
    .object({
        jobId: z.nullable(z.string()).optional(),
        updatedAfter: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            jobId: "job_id",
            updatedAfter: "updated_after",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationsQueryParamFilter$ {
    /** @deprecated use `AtsListApplicationsQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = AtsListApplicationsQueryParamFilter$inboundSchema;
    /** @deprecated use `AtsListApplicationsQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = AtsListApplicationsQueryParamFilter$outboundSchema;
    /** @deprecated use `AtsListApplicationsQueryParamFilter$Outbound` instead. */
    export type Outbound = AtsListApplicationsQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListApplicationsRequest$inboundSchema: z.ZodType<
    AtsListApplicationsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => AtsListApplicationsQueryParamFilter$inboundSchema))
            .optional(),
        job_id: z.nullable(z.string()).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        sync_token: z.nullable(z.string()).optional(),
        updated_after: z.nullable(z.string()).optional(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            job_id: "jobId",
            page_size: "pageSize",
            sync_token: "syncToken",
            updated_after: "updatedAfter",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsListApplicationsRequest$Outbound = {
    expand?: string | null | undefined;
    fields?: string | null | undefined;
    filter?: AtsListApplicationsQueryParamFilter$Outbound | null | undefined;
    job_id?: string | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    sync_token?: string | null | undefined;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const AtsListApplicationsRequest$outboundSchema: z.ZodType<
    AtsListApplicationsRequest$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsRequest
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => AtsListApplicationsQueryParamFilter$outboundSchema))
            .optional(),
        jobId: z.nullable(z.string()).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        pageSize: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        syncToken: z.nullable(z.string()).optional(),
        updatedAfter: z.nullable(z.string()).optional(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            jobId: "job_id",
            pageSize: "page_size",
            syncToken: "sync_token",
            updatedAfter: "updated_after",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationsRequest$ {
    /** @deprecated use `AtsListApplicationsRequest$inboundSchema` instead. */
    export const inboundSchema = AtsListApplicationsRequest$inboundSchema;
    /** @deprecated use `AtsListApplicationsRequest$outboundSchema` instead. */
    export const outboundSchema = AtsListApplicationsRequest$outboundSchema;
    /** @deprecated use `AtsListApplicationsRequest$Outbound` instead. */
    export type Outbound = AtsListApplicationsRequest$Outbound;
}

/** @internal */
export const AtsListApplicationsResponse$inboundSchema: z.ZodType<
    AtsListApplicationsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ApplicationsPaginated: shared.ApplicationsPaginated$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ApplicationsPaginated: "applicationsPaginated",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsListApplicationsResponse$Outbound = {
    ApplicationsPaginated?: shared.ApplicationsPaginated$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsListApplicationsResponse$outboundSchema: z.ZodType<
    AtsListApplicationsResponse$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsResponse
> = z
    .object({
        applicationsPaginated: shared.ApplicationsPaginated$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            applicationsPaginated: "ApplicationsPaginated",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationsResponse$ {
    /** @deprecated use `AtsListApplicationsResponse$inboundSchema` instead. */
    export const inboundSchema = AtsListApplicationsResponse$inboundSchema;
    /** @deprecated use `AtsListApplicationsResponse$outboundSchema` instead. */
    export const outboundSchema = AtsListApplicationsResponse$outboundSchema;
    /** @deprecated use `AtsListApplicationsResponse$Outbound` instead. */
    export type Outbound = AtsListApplicationsResponse$Outbound;
}
