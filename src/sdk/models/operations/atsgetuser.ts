/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type AtsGetUserRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | undefined;
    id: string;
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

export type AtsGetUserResponse = {
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
     * The user with the given identifier was retrieved.
     */
    userResult?: shared.UserResult | undefined;
};

/** @internal */
export namespace AtsGetUserRequest$ {
    export type Inbound = {
        fields?: string | undefined;
        id: string;
        page?: string | undefined;
        page_size?: string | undefined;
        proxy?: Record<string, any> | undefined;
        raw?: boolean | undefined;
        sync_token?: string | undefined;
        updated_after?: string | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsGetUserRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.string().optional(),
            id: z.string(),
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
                id: v.id,
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
        id: string;
        page?: string | undefined;
        page_size?: string | undefined;
        proxy?: Record<string, any> | undefined;
        raw?: boolean | undefined;
        sync_token?: string | undefined;
        updated_after?: string | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetUserRequest> = z
        .object({
            fields: z.string().optional(),
            id: z.string(),
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
                id: v.id,
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
export namespace AtsGetUserResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        UserResult?: shared.UserResult$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AtsGetUserResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            UserResult: shared.UserResult$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.UserResult === undefined ? null : { userResult: v.UserResult }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        UserResult?: shared.UserResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetUserResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            userResult: shared.UserResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.userResult === undefined ? null : { UserResult: v.userResult }),
            };
        });
}
