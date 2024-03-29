/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type StackoneUpdateAccountRequest = {
    patchAccountDto: shared.PatchAccountDto;
    id: string;
};

export type StackoneUpdateAccountResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The account with the given identifier was updated.
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
export namespace StackoneUpdateAccountRequest$ {
    export type Inbound = {
        PatchAccountDto: shared.PatchAccountDto$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<StackoneUpdateAccountRequest, z.ZodTypeDef, Inbound> = z
        .object({
            PatchAccountDto: shared.PatchAccountDto$.inboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                patchAccountDto: v.PatchAccountDto,
                id: v.id,
            };
        });

    export type Outbound = {
        PatchAccountDto: shared.PatchAccountDto$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneUpdateAccountRequest> = z
        .object({
            patchAccountDto: shared.PatchAccountDto$.outboundSchema,
            id: z.string(),
        })
        .transform((v) => {
            return {
                PatchAccountDto: v.patchAccountDto,
                id: v.id,
            };
        });
}

/** @internal */
export namespace StackoneUpdateAccountResponse$ {
    export type Inbound = {
        ContentType: string;
        LinkedAccount?: shared.LinkedAccount$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StackoneUpdateAccountResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StackoneUpdateAccountResponse> =
        z
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
