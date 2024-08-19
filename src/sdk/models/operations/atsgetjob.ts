/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetJobRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
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

export type AtsGetJobResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The job with the given identifier was retrieved.
     */
    jobResult?: shared.JobResult | undefined;
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
export const AtsGetJobRequest$inboundSchema: z.ZodType<AtsGetJobRequest, z.ZodTypeDef, unknown> = z
    .object({
        expand: z.nullable(z.string()).optional(),
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
export type AtsGetJobRequest$Outbound = {
    expand?: string | null | undefined;
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const AtsGetJobRequest$outboundSchema: z.ZodType<
    AtsGetJobRequest$Outbound,
    z.ZodTypeDef,
    AtsGetJobRequest
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
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
export namespace AtsGetJobRequest$ {
    /** @deprecated use `AtsGetJobRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetJobRequest$inboundSchema;
    /** @deprecated use `AtsGetJobRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetJobRequest$outboundSchema;
    /** @deprecated use `AtsGetJobRequest$Outbound` instead. */
    export type Outbound = AtsGetJobRequest$Outbound;
}

/** @internal */
export const AtsGetJobResponse$inboundSchema: z.ZodType<AtsGetJobResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            ContentType: z.string(),
            JobResult: shared.JobResult$inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                JobResult: "jobResult",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

/** @internal */
export type AtsGetJobResponse$Outbound = {
    ContentType: string;
    JobResult?: shared.JobResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetJobResponse$outboundSchema: z.ZodType<
    AtsGetJobResponse$Outbound,
    z.ZodTypeDef,
    AtsGetJobResponse
> = z
    .object({
        contentType: z.string(),
        jobResult: shared.JobResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            jobResult: "JobResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetJobResponse$ {
    /** @deprecated use `AtsGetJobResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetJobResponse$inboundSchema;
    /** @deprecated use `AtsGetJobResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetJobResponse$outboundSchema;
    /** @deprecated use `AtsGetJobResponse$Outbound` instead. */
    export type Outbound = AtsGetJobResponse$Outbound;
}
