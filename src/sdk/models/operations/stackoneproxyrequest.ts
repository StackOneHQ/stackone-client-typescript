/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type StackoneProxyRequestRequest = {
    /**
     * The request body
     */
    proxyRequestBody: shared.ProxyRequestBody;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type StackoneProxyRequestResponse = {
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
export namespace StackoneProxyRequestRequest$ {
    export const inboundSchema: z.ZodType<StackoneProxyRequestRequest, z.ZodTypeDef, unknown> = z
        .object({
            ProxyRequestBody: shared.ProxyRequestBody$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                ProxyRequestBody: "proxyRequestBody",
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        ProxyRequestBody: shared.ProxyRequestBody$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneProxyRequestRequest> = z
        .object({
            proxyRequestBody: shared.ProxyRequestBody$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                proxyRequestBody: "ProxyRequestBody",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace StackoneProxyRequestResponse$ {
    export const inboundSchema: z.ZodType<StackoneProxyRequestResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneProxyRequestResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
