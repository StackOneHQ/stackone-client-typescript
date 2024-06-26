/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type StackoneGetAccountRequest = {
    id: string;
};

export type StackoneGetAccountResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The account with the given identifier was retrieved.
     */
    linkedAccount?: shared.LinkedAccount | undefined;
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
export namespace StackoneGetAccountRequest$ {
    export const inboundSchema: z.ZodType<StackoneGetAccountRequest, z.ZodTypeDef, unknown> =
        z.object({
            id: z.string(),
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneGetAccountRequest> =
        z.object({
            id: z.string(),
        });
}

/** @internal */
export namespace StackoneGetAccountResponse$ {
    export const inboundSchema: z.ZodType<StackoneGetAccountResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            LinkedAccount: shared.LinkedAccount$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                LinkedAccount: "linkedAccount",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        LinkedAccount?: shared.LinkedAccount$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneGetAccountResponse> = z
        .object({
            contentType: z.string(),
            linkedAccount: shared.LinkedAccount$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                linkedAccount: "LinkedAccount",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
