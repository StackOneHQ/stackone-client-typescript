/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type LmsCreateCompletionRequest = {
    lmsCreateCompletionRequestDto: shared.LmsCreateCompletionRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type LmsCreateCompletionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The completion was created successfully.
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
export namespace LmsCreateCompletionRequest$ {
    export const inboundSchema: z.ZodType<LmsCreateCompletionRequest, z.ZodTypeDef, unknown> = z
        .object({
            LmsCreateCompletionRequestDto: shared.LmsCreateCompletionRequestDto$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                LmsCreateCompletionRequestDto: "lmsCreateCompletionRequestDto",
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        LmsCreateCompletionRequestDto: shared.LmsCreateCompletionRequestDto$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsCreateCompletionRequest> = z
        .object({
            lmsCreateCompletionRequestDto: shared.LmsCreateCompletionRequestDto$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                lmsCreateCompletionRequestDto: "LmsCreateCompletionRequestDto",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace LmsCreateCompletionResponse$ {
    export const inboundSchema: z.ZodType<LmsCreateCompletionResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            CreateResult: shared.CreateResult$.inboundSchema.optional(),
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

    export type Outbound = {
        ContentType: string;
        CreateResult?: shared.CreateResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsCreateCompletionResponse> = z
        .object({
            contentType: z.string(),
            createResult: shared.CreateResult$.outboundSchema.optional(),
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
}
