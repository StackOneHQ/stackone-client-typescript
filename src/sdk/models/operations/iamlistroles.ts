/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import * as z from "zod";

export type IamListRolesRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
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
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: Record<string, any> | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type IamListRolesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list of roles was retrieved.
     */
    iamRolesPaginated?: shared.IamRolesPaginated | undefined;
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
export namespace IamListRolesRequest$ {
    export type Inbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<IamListRolesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                pageSize: v.page_size,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: Record<string, any> | null | undefined;
        raw: boolean | null;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamListRolesRequest> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            pageSize: z.nullable(z.string().default("25")),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            updatedAfter: z.nullable(z.string()).optional(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                page_size: v.pageSize,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace IamListRolesResponse$ {
    export type Inbound = {
        ContentType: string;
        IamRolesPaginated?: shared.IamRolesPaginated$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<IamListRolesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            IamRolesPaginated: shared.IamRolesPaginated$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.IamRolesPaginated === undefined
                    ? null
                    : { iamRolesPaginated: v.IamRolesPaginated }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        IamRolesPaginated?: shared.IamRolesPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamListRolesResponse> = z
        .object({
            contentType: z.string(),
            iamRolesPaginated: shared.IamRolesPaginated$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.iamRolesPaginated === undefined
                    ? null
                    : { IamRolesPaginated: v.iamRolesPaginated }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}