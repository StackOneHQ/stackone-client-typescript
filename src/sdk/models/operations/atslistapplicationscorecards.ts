/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type AtsListApplicationScorecardsQueryParamProxy = {};

export type AtsListApplicationScorecardsRequest = {
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
    proxy?: AtsListApplicationScorecardsQueryParamProxy | undefined;
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

export type AtsListApplicationScorecardsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The scorecards related to the application with the given identifier were retrieved.
     */
    scorecardsPaginated?: shared.ScorecardsPaginated | undefined;
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
export namespace AtsListApplicationScorecardsQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        AtsListApplicationScorecardsQueryParamProxy,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationScorecardsQueryParamProxy
    > = z.object({});
}

/** @internal */
export namespace AtsListApplicationScorecardsRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: AtsListApplicationScorecardsQueryParamProxy$.Inbound | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        AtsListApplicationScorecardsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            fields: z.string().nullable().optional(),
            id: z.string(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            page_size: z.string().nullable().optional(),
            proxy: z
                .lazy(() => AtsListApplicationScorecardsQueryParamProxy$.inboundSchema)
                .optional(),
            raw: z.boolean().nullable().optional(),
            sync_token: z.string().nullable().optional(),
            updated_after: z.string().nullable().optional(),
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
        proxy?: AtsListApplicationScorecardsQueryParamProxy$.Outbound | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationScorecardsRequest
    > = z
        .object({
            fields: z.string().nullable().optional(),
            id: z.string(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            pageSize: z.string().nullable().optional(),
            proxy: z
                .lazy(() => AtsListApplicationScorecardsQueryParamProxy$.outboundSchema)
                .optional(),
            raw: z.boolean().nullable().optional(),
            syncToken: z.string().nullable().optional(),
            updatedAfter: z.string().nullable().optional(),
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
export namespace AtsListApplicationScorecardsResponse$ {
    export type Inbound = {
        ContentType: string;
        ScorecardsPaginated?: shared.ScorecardsPaginated$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        AtsListApplicationScorecardsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ScorecardsPaginated: shared.ScorecardsPaginated$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ScorecardsPaginated === undefined
                    ? null
                    : { scorecardsPaginated: v.ScorecardsPaginated }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ScorecardsPaginated?: shared.ScorecardsPaginated$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationScorecardsResponse
    > = z
        .object({
            contentType: z.string(),
            scorecardsPaginated: shared.ScorecardsPaginated$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.scorecardsPaginated === undefined
                    ? null
                    : { ScorecardsPaginated: v.scorecardsPaginated }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
