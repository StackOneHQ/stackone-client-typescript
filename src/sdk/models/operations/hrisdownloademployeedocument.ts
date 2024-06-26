/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type HrisDownloadEmployeeDocumentRequest = {
    /**
     * The format to download the file in
     */
    format?: string | null | undefined;
    id: string;
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisDownloadEmployeeDocumentResponse = {
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
     * The document related to the employee with the given identifiers was retrieved.
     */
    responseStream?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export namespace HrisDownloadEmployeeDocumentRequest$ {
    export const inboundSchema: z.ZodType<
        HrisDownloadEmployeeDocumentRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            format: z.nullable(z.string()).optional(),
            id: z.string(),
            subResourceId: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        format?: string | null | undefined;
        id: string;
        subResourceId: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisDownloadEmployeeDocumentRequest
    > = z
        .object({
            format: z.nullable(z.string()).optional(),
            id: z.string(),
            subResourceId: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace HrisDownloadEmployeeDocumentResponse$ {
    export const inboundSchema: z.ZodType<
        HrisDownloadEmployeeDocumentResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "response-stream": z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                "response-stream": "responseStream",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "response-stream"?: ReadableStream<Uint8Array> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisDownloadEmployeeDocumentResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            responseStream: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                responseStream: "response-stream",
            });
        });
}
