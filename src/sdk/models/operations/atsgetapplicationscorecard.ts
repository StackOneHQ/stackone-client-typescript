/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetApplicationScorecardRequest = {
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

export type AtsGetApplicationScorecardResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The scorecard related to the application with the given identifiers was retrieved.
     */
    scorecardsResult?: shared.ScorecardsResult | undefined;
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
export const AtsGetApplicationScorecardRequest$inboundSchema: z.ZodType<
    AtsGetApplicationScorecardRequest,
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
export type AtsGetApplicationScorecardRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    subResourceId: string;
    "x-account-id": string;
};

/** @internal */
export const AtsGetApplicationScorecardRequest$outboundSchema: z.ZodType<
    AtsGetApplicationScorecardRequest$Outbound,
    z.ZodTypeDef,
    AtsGetApplicationScorecardRequest
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
export namespace AtsGetApplicationScorecardRequest$ {
    /** @deprecated use `AtsGetApplicationScorecardRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetApplicationScorecardRequest$inboundSchema;
    /** @deprecated use `AtsGetApplicationScorecardRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetApplicationScorecardRequest$outboundSchema;
    /** @deprecated use `AtsGetApplicationScorecardRequest$Outbound` instead. */
    export type Outbound = AtsGetApplicationScorecardRequest$Outbound;
}

/** @internal */
export const AtsGetApplicationScorecardResponse$inboundSchema: z.ZodType<
    AtsGetApplicationScorecardResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ScorecardsResult: shared.ScorecardsResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            ScorecardsResult: "scorecardsResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsGetApplicationScorecardResponse$Outbound = {
    ContentType: string;
    ScorecardsResult?: shared.ScorecardsResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetApplicationScorecardResponse$outboundSchema: z.ZodType<
    AtsGetApplicationScorecardResponse$Outbound,
    z.ZodTypeDef,
    AtsGetApplicationScorecardResponse
> = z
    .object({
        contentType: z.string(),
        scorecardsResult: shared.ScorecardsResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            scorecardsResult: "ScorecardsResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetApplicationScorecardResponse$ {
    /** @deprecated use `AtsGetApplicationScorecardResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetApplicationScorecardResponse$inboundSchema;
    /** @deprecated use `AtsGetApplicationScorecardResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetApplicationScorecardResponse$outboundSchema;
    /** @deprecated use `AtsGetApplicationScorecardResponse$Outbound` instead. */
    export type Outbound = AtsGetApplicationScorecardResponse$Outbound;
}
