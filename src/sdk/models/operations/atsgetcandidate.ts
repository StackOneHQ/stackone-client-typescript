/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetCandidateRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsGetCandidateResponse = {
    /**
     * The candidate with the given identifier was retrieved.
     */
    candidateResult?: shared.CandidateResult | undefined;
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
export const AtsGetCandidateRequest$inboundSchema: z.ZodType<
    AtsGetCandidateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsGetCandidateRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const AtsGetCandidateRequest$outboundSchema: z.ZodType<
    AtsGetCandidateRequest$Outbound,
    z.ZodTypeDef,
    AtsGetCandidateRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetCandidateRequest$ {
    /** @deprecated use `AtsGetCandidateRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetCandidateRequest$inboundSchema;
    /** @deprecated use `AtsGetCandidateRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetCandidateRequest$outboundSchema;
    /** @deprecated use `AtsGetCandidateRequest$Outbound` instead. */
    export type Outbound = AtsGetCandidateRequest$Outbound;
}

/** @internal */
export const AtsGetCandidateResponse$inboundSchema: z.ZodType<
    AtsGetCandidateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        CandidateResult: shared.CandidateResult$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            CandidateResult: "candidateResult",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsGetCandidateResponse$Outbound = {
    CandidateResult?: shared.CandidateResult$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetCandidateResponse$outboundSchema: z.ZodType<
    AtsGetCandidateResponse$Outbound,
    z.ZodTypeDef,
    AtsGetCandidateResponse
> = z
    .object({
        candidateResult: shared.CandidateResult$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            candidateResult: "CandidateResult",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetCandidateResponse$ {
    /** @deprecated use `AtsGetCandidateResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetCandidateResponse$inboundSchema;
    /** @deprecated use `AtsGetCandidateResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetCandidateResponse$outboundSchema;
    /** @deprecated use `AtsGetCandidateResponse$Outbound` instead. */
    export type Outbound = AtsGetCandidateResponse$Outbound;
}
