/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsUpdateCandidateRequest = {
    atsUpdateCandidateRequestDto: shared.AtsUpdateCandidateRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsUpdateCandidateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The candidate was successfully updated.
     */
    createResult?: shared.CreateResult | undefined;
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
export const AtsUpdateCandidateRequest$inboundSchema: z.ZodType<
    AtsUpdateCandidateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AtsUpdateCandidateRequestDto: shared.AtsUpdateCandidateRequestDto$inboundSchema,
        id: z.string(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            AtsUpdateCandidateRequestDto: "atsUpdateCandidateRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsUpdateCandidateRequest$Outbound = {
    AtsUpdateCandidateRequestDto: shared.AtsUpdateCandidateRequestDto$Outbound;
    id: string;
    "x-account-id": string;
};

/** @internal */
export const AtsUpdateCandidateRequest$outboundSchema: z.ZodType<
    AtsUpdateCandidateRequest$Outbound,
    z.ZodTypeDef,
    AtsUpdateCandidateRequest
> = z
    .object({
        atsUpdateCandidateRequestDto: shared.AtsUpdateCandidateRequestDto$outboundSchema,
        id: z.string(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            atsUpdateCandidateRequestDto: "AtsUpdateCandidateRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateCandidateRequest$ {
    /** @deprecated use `AtsUpdateCandidateRequest$inboundSchema` instead. */
    export const inboundSchema = AtsUpdateCandidateRequest$inboundSchema;
    /** @deprecated use `AtsUpdateCandidateRequest$outboundSchema` instead. */
    export const outboundSchema = AtsUpdateCandidateRequest$outboundSchema;
    /** @deprecated use `AtsUpdateCandidateRequest$Outbound` instead. */
    export type Outbound = AtsUpdateCandidateRequest$Outbound;
}

/** @internal */
export const AtsUpdateCandidateResponse$inboundSchema: z.ZodType<
    AtsUpdateCandidateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CreateResult: shared.CreateResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            CreateResult: "createResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsUpdateCandidateResponse$Outbound = {
    ContentType: string;
    CreateResult?: shared.CreateResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsUpdateCandidateResponse$outboundSchema: z.ZodType<
    AtsUpdateCandidateResponse$Outbound,
    z.ZodTypeDef,
    AtsUpdateCandidateResponse
> = z
    .object({
        contentType: z.string(),
        createResult: shared.CreateResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            createResult: "CreateResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateCandidateResponse$ {
    /** @deprecated use `AtsUpdateCandidateResponse$inboundSchema` instead. */
    export const inboundSchema = AtsUpdateCandidateResponse$inboundSchema;
    /** @deprecated use `AtsUpdateCandidateResponse$outboundSchema` instead. */
    export const outboundSchema = AtsUpdateCandidateResponse$outboundSchema;
    /** @deprecated use `AtsUpdateCandidateResponse$Outbound` instead. */
    export type Outbound = AtsUpdateCandidateResponse$Outbound;
}
