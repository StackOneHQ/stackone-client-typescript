/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type AtsGetCandidateNoteQueryParamProxy = {};

export type AtsGetCandidateNoteRequest = {
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
    proxy?: AtsGetCandidateNoteQueryParamProxy | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    subResourceId: string;
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

export type AtsGetCandidateNoteResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The note with the given identifier related to the candidate with the given identifier was retrieved.
     */
    noteResult?: shared.NoteResult | undefined;
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
export namespace AtsGetCandidateNoteQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        AtsGetCandidateNoteQueryParamProxy,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsGetCandidateNoteQueryParamProxy
    > = z.object({});
}

/** @internal */
export namespace AtsGetCandidateNoteRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: AtsGetCandidateNoteQueryParamProxy$.Inbound | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsGetCandidateNoteRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.string().nullable().optional(),
            id: z.string(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            page_size: z.string().nullable().optional(),
            proxy: z.lazy(() => AtsGetCandidateNoteQueryParamProxy$.inboundSchema).optional(),
            raw: z.boolean().nullable().optional(),
            subResourceId: z.string(),
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
                subResourceId: v.subResourceId,
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
        proxy?: AtsGetCandidateNoteQueryParamProxy$.Outbound | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetCandidateNoteRequest> = z
        .object({
            fields: z.string().nullable().optional(),
            id: z.string(),
            next: z.string().nullable().optional(),
            page: z.string().nullable().optional(),
            pageSize: z.string().nullable().optional(),
            proxy: z.lazy(() => AtsGetCandidateNoteQueryParamProxy$.outboundSchema).optional(),
            raw: z.boolean().nullable().optional(),
            subResourceId: z.string(),
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
                subResourceId: v.subResourceId,
                ...(v.syncToken === undefined ? null : { sync_token: v.syncToken }),
                ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace AtsGetCandidateNoteResponse$ {
    export type Inbound = {
        ContentType: string;
        NoteResult?: shared.NoteResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AtsGetCandidateNoteResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            NoteResult: shared.NoteResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.NoteResult === undefined ? null : { noteResult: v.NoteResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        NoteResult?: shared.NoteResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetCandidateNoteResponse> = z
        .object({
            contentType: z.string(),
            noteResult: shared.NoteResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.noteResult === undefined ? null : { NoteResult: v.noteResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
