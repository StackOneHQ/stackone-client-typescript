/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type Filter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type AtsListApplicationDocumentsRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: Filter | null | undefined;
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

export type AtsListApplicationDocumentsResponse = {
    /**
     * The documents related to the application with the given identifier were retrieved.
     */
    atsDocumentsPaginated?: shared.AtsDocumentsPaginated | undefined;
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
export namespace Filter$ {
    export const inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z
        .object({
            updated_after: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                updated_after: "updatedAfter",
            });
        });

    export type Outbound = {
        updated_after?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Filter> = z
        .object({
            updatedAfter: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                updatedAfter: "updated_after",
            });
        });
}

/** @internal */
export namespace AtsListApplicationDocumentsRequest$ {
    export const inboundSchema: z.ZodType<
        AtsListApplicationDocumentsRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            filter: z.nullable(z.lazy(() => Filter$.inboundSchema)).optional(),
            id: z.string(),
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
                page_size: "pageSize",
                sync_token: "syncToken",
                updated_after: "updatedAfter",
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        fields?: string | null | undefined;
        filter?: Filter$.Outbound | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationDocumentsRequest
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            filter: z.nullable(z.lazy(() => Filter$.outboundSchema)).optional(),
            id: z.string(),
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
                pageSize: "page_size",
                syncToken: "sync_token",
                updatedAfter: "updated_after",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace AtsListApplicationDocumentsResponse$ {
    export const inboundSchema: z.ZodType<
        AtsListApplicationDocumentsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            AtsDocumentsPaginated: shared.AtsDocumentsPaginated$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                AtsDocumentsPaginated: "atsDocumentsPaginated",
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        AtsDocumentsPaginated?: shared.AtsDocumentsPaginated$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsListApplicationDocumentsResponse
    > = z
        .object({
            atsDocumentsPaginated: shared.AtsDocumentsPaginated$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                atsDocumentsPaginated: "AtsDocumentsPaginated",
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
