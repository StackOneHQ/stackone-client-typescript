/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

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
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<StackoneGetAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneGetAccountRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace StackoneGetAccountResponse$ {
    export type Inbound = {
        ContentType: string;
        LinkedAccount?: shared.LinkedAccount$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StackoneGetAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            LinkedAccount: shared.LinkedAccount$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.LinkedAccount === undefined ? null : { linkedAccount: v.LinkedAccount }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
            return {
                ContentType: v.contentType,
                ...(v.linkedAccount === undefined ? null : { LinkedAccount: v.linkedAccount }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
