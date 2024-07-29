/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
export const StackoneGetAccountRequest$inboundSchema: z.ZodType<
    StackoneGetAccountRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type StackoneGetAccountRequest$Outbound = {
    id: string;
};

/** @internal */
export const StackoneGetAccountRequest$outboundSchema: z.ZodType<
    StackoneGetAccountRequest$Outbound,
    z.ZodTypeDef,
    StackoneGetAccountRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetAccountRequest$ {
    /** @deprecated use `StackoneGetAccountRequest$inboundSchema` instead. */
    export const inboundSchema = StackoneGetAccountRequest$inboundSchema;
    /** @deprecated use `StackoneGetAccountRequest$outboundSchema` instead. */
    export const outboundSchema = StackoneGetAccountRequest$outboundSchema;
    /** @deprecated use `StackoneGetAccountRequest$Outbound` instead. */
    export type Outbound = StackoneGetAccountRequest$Outbound;
}

/** @internal */
export const StackoneGetAccountResponse$inboundSchema: z.ZodType<
    StackoneGetAccountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        LinkedAccount: shared.LinkedAccount$inboundSchema.optional(),
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

/** @internal */
export type StackoneGetAccountResponse$Outbound = {
    ContentType: string;
    LinkedAccount?: shared.LinkedAccount$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const StackoneGetAccountResponse$outboundSchema: z.ZodType<
    StackoneGetAccountResponse$Outbound,
    z.ZodTypeDef,
    StackoneGetAccountResponse
> = z
    .object({
        contentType: z.string(),
        linkedAccount: shared.LinkedAccount$outboundSchema.optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetAccountResponse$ {
    /** @deprecated use `StackoneGetAccountResponse$inboundSchema` instead. */
    export const inboundSchema = StackoneGetAccountResponse$inboundSchema;
    /** @deprecated use `StackoneGetAccountResponse$outboundSchema` instead. */
    export const outboundSchema = StackoneGetAccountResponse$outboundSchema;
    /** @deprecated use `StackoneGetAccountResponse$Outbound` instead. */
    export type Outbound = StackoneGetAccountResponse$Outbound;
}
