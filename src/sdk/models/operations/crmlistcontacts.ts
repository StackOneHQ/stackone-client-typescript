/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type CrmListContactsQueryParamProxy = {};

export type CrmListContactsRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
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
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
     */
    proxy?: CrmListContactsQueryParamProxy | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The sync token to select the only updated results
     */
    syncToken?: string | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type CrmListContactsResponse = {
    /**
     * The list of contacts was retrieved.
     */
    contactsPaginated?: shared.ContactsPaginated | undefined;
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
export namespace CrmListContactsQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CrmListContactsQueryParamProxy, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CrmListContactsQueryParamProxy> =
        z.object({});
}

/** @internal */
export namespace CrmListContactsRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: CrmListContactsQueryParamProxy$.Inbound | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<CrmListContactsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.string().nullable().optional(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            page_size: z.string().nullable().optional(),
            proxy: z.lazy(() => CrmListContactsQueryParamProxy$.inboundSchema).optional(),
            raw: z.boolean().nullable().optional(),
            sync_token: z.string().nullable().optional(),
            updated_after: z.string().nullable().optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.next === undefined ? null : { next: v.next }),
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
        fields?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: CrmListContactsQueryParamProxy$.Outbound | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CrmListContactsRequest> = z
        .object({
            fields: z.string().nullable().optional(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            pageSize: z.string().nullable().optional(),
            proxy: z.lazy(() => CrmListContactsQueryParamProxy$.outboundSchema).optional(),
            raw: z.boolean().nullable().optional(),
            syncToken: z.string().nullable().optional(),
            updatedAfter: z.string().nullable().optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.next === undefined ? null : { next: v.next }),
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
export namespace CrmListContactsResponse$ {
    export type Inbound = {
        ContactsPaginated?: shared.ContactsPaginated$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<CrmListContactsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContactsPaginated: shared.ContactsPaginated$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.ContactsPaginated === undefined
                    ? null
                    : { contactsPaginated: v.ContactsPaginated }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContactsPaginated?: shared.ContactsPaginated$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CrmListContactsResponse> = z
        .object({
            contactsPaginated: shared.ContactsPaginated$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.contactsPaginated === undefined
                    ? null
                    : { ContactsPaginated: v.contactsPaginated }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
