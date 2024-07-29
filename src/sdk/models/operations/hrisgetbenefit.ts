/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisGetBenefitRequest = {
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

export type HrisGetBenefitResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The Benefit with the given identifier was retrieved.
     */
    hrisBenefitResult?: shared.HRISBenefitResult | undefined;
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
export const HrisGetBenefitRequest$inboundSchema: z.ZodType<
    HrisGetBenefitRequest,
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
export type HrisGetBenefitRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const HrisGetBenefitRequest$outboundSchema: z.ZodType<
    HrisGetBenefitRequest$Outbound,
    z.ZodTypeDef,
    HrisGetBenefitRequest
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
export namespace HrisGetBenefitRequest$ {
    /** @deprecated use `HrisGetBenefitRequest$inboundSchema` instead. */
    export const inboundSchema = HrisGetBenefitRequest$inboundSchema;
    /** @deprecated use `HrisGetBenefitRequest$outboundSchema` instead. */
    export const outboundSchema = HrisGetBenefitRequest$outboundSchema;
    /** @deprecated use `HrisGetBenefitRequest$Outbound` instead. */
    export type Outbound = HrisGetBenefitRequest$Outbound;
}

/** @internal */
export const HrisGetBenefitResponse$inboundSchema: z.ZodType<
    HrisGetBenefitResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        HRISBenefitResult: shared.HRISBenefitResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            HRISBenefitResult: "hrisBenefitResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type HrisGetBenefitResponse$Outbound = {
    ContentType: string;
    HRISBenefitResult?: shared.HRISBenefitResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const HrisGetBenefitResponse$outboundSchema: z.ZodType<
    HrisGetBenefitResponse$Outbound,
    z.ZodTypeDef,
    HrisGetBenefitResponse
> = z
    .object({
        contentType: z.string(),
        hrisBenefitResult: shared.HRISBenefitResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            hrisBenefitResult: "HRISBenefitResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetBenefitResponse$ {
    /** @deprecated use `HrisGetBenefitResponse$inboundSchema` instead. */
    export const inboundSchema = HrisGetBenefitResponse$inboundSchema;
    /** @deprecated use `HrisGetBenefitResponse$outboundSchema` instead. */
    export const outboundSchema = HrisGetBenefitResponse$outboundSchema;
    /** @deprecated use `HrisGetBenefitResponse$Outbound` instead. */
    export type Outbound = HrisGetBenefitResponse$Outbound;
}
