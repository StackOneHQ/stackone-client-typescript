/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetAssessmentsRequestRequest = {
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

export type AtsGetAssessmentsRequestResponse = {
    /**
     * The assessments order with the given identifier was retrieved.
     */
    assessmentsResultsResult?: shared.AssessmentsResultsResult | undefined;
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
export const AtsGetAssessmentsRequestRequest$inboundSchema: z.ZodType<
    AtsGetAssessmentsRequestRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean()),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type AtsGetAssessmentsRequestRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const AtsGetAssessmentsRequestRequest$outboundSchema: z.ZodType<
    AtsGetAssessmentsRequestRequest$Outbound,
    z.ZodTypeDef,
    AtsGetAssessmentsRequestRequest
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
export namespace AtsGetAssessmentsRequestRequest$ {
    /** @deprecated use `AtsGetAssessmentsRequestRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetAssessmentsRequestRequest$inboundSchema;
    /** @deprecated use `AtsGetAssessmentsRequestRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetAssessmentsRequestRequest$outboundSchema;
    /** @deprecated use `AtsGetAssessmentsRequestRequest$Outbound` instead. */
    export type Outbound = AtsGetAssessmentsRequestRequest$Outbound;
}

/** @internal */
export const AtsGetAssessmentsRequestResponse$inboundSchema: z.ZodType<
    AtsGetAssessmentsRequestResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AssessmentsResultsResult: shared.AssessmentsResultsResult$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            AssessmentsResultsResult: "assessmentsResultsResult",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsGetAssessmentsRequestResponse$Outbound = {
    AssessmentsResultsResult?: shared.AssessmentsResultsResult$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetAssessmentsRequestResponse$outboundSchema: z.ZodType<
    AtsGetAssessmentsRequestResponse$Outbound,
    z.ZodTypeDef,
    AtsGetAssessmentsRequestResponse
> = z
    .object({
        assessmentsResultsResult: shared.AssessmentsResultsResult$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            assessmentsResultsResult: "AssessmentsResultsResult",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetAssessmentsRequestResponse$ {
    /** @deprecated use `AtsGetAssessmentsRequestResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetAssessmentsRequestResponse$inboundSchema;
    /** @deprecated use `AtsGetAssessmentsRequestResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetAssessmentsRequestResponse$outboundSchema;
    /** @deprecated use `AtsGetAssessmentsRequestResponse$Outbound` instead. */
    export type Outbound = AtsGetAssessmentsRequestResponse$Outbound;
}
