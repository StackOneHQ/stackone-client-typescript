/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type HrisGetCompanyQueryParamProxy = {};

export type HrisGetCompanyRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
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
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
     */
    proxy?: HrisGetCompanyQueryParamProxy | null | undefined;
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

export type HrisGetCompanyResponse = {
    /**
     * The Company with the given identifier was retrieved.
     */
    companyResult?: shared.CompanyResult | undefined;
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
export namespace HrisGetCompanyQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<HrisGetCompanyQueryParamProxy, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetCompanyQueryParamProxy> =
        z.object({});
}

/** @internal */
export namespace HrisGetCompanyRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: HrisGetCompanyQueryParamProxy$.Inbound | null | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<HrisGetCompanyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string()).optional(),
            proxy: z
                .nullable(z.lazy(() => HrisGetCompanyQueryParamProxy$.inboundSchema))
                .optional(),
            raw: z.nullable(z.boolean()).optional(),
            sync_token: z.nullable(z.string()).optional(),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
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
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: HrisGetCompanyQueryParamProxy$.Outbound | null | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetCompanyRequest> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            pageSize: z.nullable(z.string()).optional(),
            proxy: z
                .nullable(z.lazy(() => HrisGetCompanyQueryParamProxy$.outboundSchema))
                .optional(),
            raw: z.nullable(z.boolean()).optional(),
            syncToken: z.nullable(z.string()).optional(),
            updatedAfter: z.nullable(z.string()).optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
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
export namespace HrisGetCompanyResponse$ {
    export type Inbound = {
        CompanyResult?: shared.CompanyResult$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<HrisGetCompanyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CompanyResult: shared.CompanyResult$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CompanyResult === undefined ? null : { companyResult: v.CompanyResult }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CompanyResult?: shared.CompanyResult$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetCompanyResponse> = z
        .object({
            companyResult: shared.CompanyResult$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.companyResult === undefined ? null : { CompanyResult: v.companyResult }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
