/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type AtsGetInterviewRequest = {
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

export type AtsGetInterviewResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The interview with the given identifier was retrieved.
     */
    interviewsResult?: shared.InterviewsResult | undefined;
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
export namespace AtsGetInterviewRequest$ {
    export const inboundSchema: z.ZodType<AtsGetInterviewRequest, z.ZodTypeDef, unknown> = z
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

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetInterviewRequest> = z
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
}

/** @internal */
export namespace AtsGetInterviewResponse$ {
    export const inboundSchema: z.ZodType<AtsGetInterviewResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            InterviewsResult: shared.InterviewsResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                InterviewsResult: "interviewsResult",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        InterviewsResult?: shared.InterviewsResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetInterviewResponse> = z
        .object({
            contentType: z.string(),
            interviewsResult: shared.InterviewsResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                interviewsResult: "InterviewsResult",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
