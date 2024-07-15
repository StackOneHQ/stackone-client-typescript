/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetApplicationOfferRequest = {
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
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsGetApplicationOfferResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The offer related to the application with the given identifiers was retrieved.
     */
    offersResult?: shared.OffersResult | undefined;
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
export const AtsGetApplicationOfferRequest$inboundSchema: z.ZodType<
    AtsGetApplicationOfferRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        subResourceId: z.string(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsGetApplicationOfferRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    subResourceId: string;
    "x-account-id": string;
};

/** @internal */
export const AtsGetApplicationOfferRequest$outboundSchema: z.ZodType<
    AtsGetApplicationOfferRequest$Outbound,
    z.ZodTypeDef,
    AtsGetApplicationOfferRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        subResourceId: z.string(),
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
export namespace AtsGetApplicationOfferRequest$ {
    /** @deprecated use `AtsGetApplicationOfferRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetApplicationOfferRequest$inboundSchema;
    /** @deprecated use `AtsGetApplicationOfferRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetApplicationOfferRequest$outboundSchema;
    /** @deprecated use `AtsGetApplicationOfferRequest$Outbound` instead. */
    export type Outbound = AtsGetApplicationOfferRequest$Outbound;
}

/** @internal */
export const AtsGetApplicationOfferResponse$inboundSchema: z.ZodType<
    AtsGetApplicationOfferResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        OffersResult: shared.OffersResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            OffersResult: "offersResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsGetApplicationOfferResponse$Outbound = {
    ContentType: string;
    OffersResult?: shared.OffersResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetApplicationOfferResponse$outboundSchema: z.ZodType<
    AtsGetApplicationOfferResponse$Outbound,
    z.ZodTypeDef,
    AtsGetApplicationOfferResponse
> = z
    .object({
        contentType: z.string(),
        offersResult: shared.OffersResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            offersResult: "OffersResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetApplicationOfferResponse$ {
    /** @deprecated use `AtsGetApplicationOfferResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetApplicationOfferResponse$inboundSchema;
    /** @deprecated use `AtsGetApplicationOfferResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetApplicationOfferResponse$outboundSchema;
    /** @deprecated use `AtsGetApplicationOfferResponse$Outbound` instead. */
    export type Outbound = AtsGetApplicationOfferResponse$Outbound;
}
