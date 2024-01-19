/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type HrisListEmployeesQueryParamProxy = {};

export type HrisListEmployeesRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * The comma separated list of fields that will be included in the response
     */
    include?: string | null | undefined;
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
    proxy?: HrisListEmployeesQueryParamProxy | null | undefined;
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

export type HrisListEmployeesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list of employees was retrieved.
     */
    employeesPaginated?: shared.EmployeesPaginated | undefined;
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
export namespace HrisListEmployeesQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<HrisListEmployeesQueryParamProxy, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisListEmployeesQueryParamProxy
    > = z.object({});
}

/** @internal */
export namespace HrisListEmployeesRequest$ {
    export type Inbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        include?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: HrisListEmployeesQueryParamProxy$.Inbound | null | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<HrisListEmployeesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            include: z.nullable(z.string()).optional(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z
                .nullable(z.lazy(() => HrisListEmployeesQueryParamProxy$.inboundSchema))
                .optional(),
            raw: z.nullable(z.boolean().default(false)),
            sync_token: z.nullable(z.string()).optional(),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.include === undefined ? null : { include: v.include }),
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
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        include?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: HrisListEmployeesQueryParamProxy$.Outbound | null | undefined;
        raw: boolean | null;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisListEmployeesRequest> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            include: z.nullable(z.string()).optional(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            pageSize: z.nullable(z.string().default("25")),
            proxy: z
                .nullable(z.lazy(() => HrisListEmployeesQueryParamProxy$.outboundSchema))
                .optional(),
            raw: z.nullable(z.boolean().default(false)),
            syncToken: z.nullable(z.string()).optional(),
            updatedAfter: z.nullable(z.string()).optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.include === undefined ? null : { include: v.include }),
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
export namespace HrisListEmployeesResponse$ {
    export type Inbound = {
        ContentType: string;
        EmployeesPaginated?: shared.EmployeesPaginated$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<HrisListEmployeesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            EmployeesPaginated: shared.EmployeesPaginated$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.EmployeesPaginated === undefined
                    ? null
                    : { employeesPaginated: v.EmployeesPaginated }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        EmployeesPaginated?: shared.EmployeesPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisListEmployeesResponse> = z
        .object({
            contentType: z.string(),
            employeesPaginated: shared.EmployeesPaginated$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.employeesPaginated === undefined
                    ? null
                    : { EmployeesPaginated: v.employeesPaginated }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
