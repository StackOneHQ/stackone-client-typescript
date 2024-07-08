/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type LmsUpdateContentRequest = {
    lmsCreateContentRequestDto: shared.LmsCreateContentRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type LmsUpdateContentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The content was updated successfully.
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
export namespace LmsUpdateContentRequest$ {
    export const inboundSchema: z.ZodType<LmsUpdateContentRequest, z.ZodTypeDef, unknown> = z
        .object({
            LmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$.inboundSchema,
            id: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                LmsCreateContentRequestDto: "lmsCreateContentRequestDto",
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        LmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$.Outbound;
        id: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsUpdateContentRequest> = z
        .object({
            lmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$.outboundSchema,
            id: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                lmsCreateContentRequestDto: "LmsCreateContentRequestDto",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace LmsUpdateContentResponse$ {
    export const inboundSchema: z.ZodType<LmsUpdateContentResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsUpdateContentResponse> = z
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