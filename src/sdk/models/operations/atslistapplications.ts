/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type AtsListApplicationsRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | undefined;
    /**
     * The page number of the results to fetch
     */
    page?: string | undefined;
    /**
     * The number of results per page
     */
    pageSize?: string | undefined;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
     */
    proxy?: Record<string, any> | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | undefined;
    /**
     * The sync token to select the only updated results
     */
    syncToken?: string | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | undefined;
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
export namespace AtsListApplicationsRequest$ {
    export type Inbound = {
        fields?: string | undefined;
        page?: string | undefined;
        page_size?: string | undefined;
        proxy?: Record<string, any> | undefined;
        raw?: boolean | undefined;
        sync_token?: string | undefined;
        updated_after?: string | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsListApplicationsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.string().optional(),
            page: z.string().optional(),
            page_size: z.string().optional(),
            proxy: z.record(z.any()).optional(),
            raw: z.boolean().optional(),
            sync_token: z.string().optional(),
            updated_after: z.string().optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.page === undefined ? null : { page: v.page }),
                ...(v.page_size === undefined ? null : { pageSize: v.page_size }),
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
                ...(v.sync_token === undefined ? null : { syncToken: v.sync_token }),
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | undefined;
        page?: string | undefined;
        page_size?: string | undefined;
        proxy?: Record<string, any> | undefined;
        raw?: boolean | undefined;
        sync_token?: string | undefined;
        updated_after?: string | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsListApplicationsRequest> = z
        .object({
            fields: z.string().optional(),
            page: z.string().optional(),
            pageSize: z.string().optional(),
            proxy: z.record(z.any()).optional(),
            raw: z.boolean().optional(),
            syncToken: z.string().optional(),
            updatedAfter: z.string().optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.page === undefined ? null : { page: v.page }),
                ...(v.pageSize === undefined ? null : { page_size: v.pageSize }),
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
                ...(v.syncToken === undefined ? null : { sync_token: v.syncToken }),
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace AtsListApplicationsResponse$ {
    export type Inbound = {
        ApplicationsPaginated?: shared.ApplicationsPaginated$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AtsListApplicationsResponse, z.ZodTypeDef, Inbound> = z
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
