/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
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
    proxy?: Record<string, any> | null | undefined;
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
export namespace AtsListApplicationsQueryParamFilter$ {
    export const inboundSchema: z.ZodType<
        AtsListApplicationsQueryParamFilter,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            job_id: z.nullable(z.string()).optional(),
            updated_after: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
            };
        });

    export type Outbound = {
        job_id?: string | null | undefined;
        updated_after?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationsQueryParamFilter
    > = z
        .object({
            jobId: z.nullable(z.string()).optional(),
            updatedAfter: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
            };
        });
}

/** @internal */
export namespace AtsListApplicationsRequest$ {
    export const inboundSchema: z.ZodType<AtsListApplicationsRequest, z.ZodTypeDef, unknown> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            filter: z
                .nullable(z.lazy(() => AtsListApplicationsQueryParamFilter$.inboundSchema))
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
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                pageSize: v.page_size,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.sync_token === undefined ? null : { syncToken: v.sync_token }),
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        filter?: AtsListApplicationsQueryParamFilter$.Outbound | null | undefined;
        job_id?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: Record<string, any> | null | undefined;
        raw: boolean | null;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsListApplicationsRequest> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            filter: z
                .nullable(z.lazy(() => AtsListApplicationsQueryParamFilter$.outboundSchema))
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
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                page_size: v.pageSize,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.syncToken === undefined ? null : { sync_token: v.syncToken }),
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace AtsListApplicationsResponse$ {
    export const inboundSchema: z.ZodType<AtsListApplicationsResponse, z.ZodTypeDef, unknown> = z
        .object({
            ApplicationsPaginated: shared.ApplicationsPaginated$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ApplicationsPaginated === undefined
                    ? null
                    : { applicationsPaginated: v.ApplicationsPaginated }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ApplicationsPaginated?: shared.ApplicationsPaginated$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsListApplicationsResponse> = z
        .object({
            applicationsPaginated: shared.ApplicationsPaginated$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.applicationsPaginated === undefined
                    ? null
                    : { ApplicationsPaginated: v.applicationsPaginated }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
