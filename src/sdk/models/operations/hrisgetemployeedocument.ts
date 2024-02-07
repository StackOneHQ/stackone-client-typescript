/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

/**
 * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
 */
export type HrisGetEmployeeDocumentQueryParamProxy = {};

export type HrisGetEmployeeDocumentRequest = {
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
    proxy?: HrisGetEmployeeDocumentQueryParamProxy | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    subResourceId: string;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetEmployeeDocumentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The document related to the employee with the given identifiers was retrieved.
     */
    documentResult?: shared.DocumentResult | undefined;
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
export namespace HrisGetEmployeeDocumentQueryParamProxy$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        HrisGetEmployeeDocumentQueryParamProxy,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeeDocumentQueryParamProxy
    > = z.object({});
}

/** @internal */
export namespace HrisGetEmployeeDocumentRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: HrisGetEmployeeDocumentQueryParamProxy$.Inbound | null | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<HrisGetEmployeeDocumentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z
                .nullable(z.lazy(() => HrisGetEmployeeDocumentQueryParamProxy$.inboundSchema))
                .optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
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
                subResourceId: v.subResourceId,
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: HrisGetEmployeeDocumentQueryParamProxy$.Outbound | null | undefined;
        raw: boolean | null;
        subResourceId: string;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetEmployeeDocumentRequest> =
        z
            .object({
                fields: z.nullable(z.string()).optional(),
                id: z.string(),
                next: z.nullable(z.string()).optional(),
                page: z.nullable(z.string()).optional(),
                pageSize: z.nullable(z.string().default("25")),
                proxy: z
                    .nullable(z.lazy(() => HrisGetEmployeeDocumentQueryParamProxy$.outboundSchema))
                    .optional(),
                raw: z.nullable(z.boolean().default(false)),
                subResourceId: z.string(),
                updatedAfter: z.nullable(z.string()).optional(),
                xAccountId: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.fields === undefined ? null : { fields: v.fields }),
                    id: v.id,
                    ...(v.next === undefined ? null : { next: v.next }),
                    ...(v.page === undefined ? null : { page: v.page }),
                    page_size: v.pageSize,
                    ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                    raw: v.raw,
                    subResourceId: v.subResourceId,
                    ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                    "x-account-id": v.xAccountId,
                };
            });
}

/** @internal */
export namespace HrisGetEmployeeDocumentResponse$ {
    export type Inbound = {
        ContentType: string;
        DocumentResult?: shared.DocumentResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<HrisGetEmployeeDocumentResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                DocumentResult: shared.DocumentResult$.inboundSchema.optional(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    ...(v.DocumentResult === undefined
                        ? null
                        : { documentResult: v.DocumentResult }),
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ContentType: string;
        DocumentResult?: shared.DocumentResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeeDocumentResponse
    > = z
        .object({
            contentType: z.string(),
            documentResult: shared.DocumentResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.documentResult === undefined ? null : { DocumentResult: v.documentResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
