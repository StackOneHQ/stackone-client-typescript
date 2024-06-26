/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type MarketingCreatePushTemplateRequest = {
    marketingCreatePushTemplateRequestDto: shared.MarketingCreatePushTemplateRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingCreatePushTemplateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record created successfully.
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
export namespace MarketingCreatePushTemplateRequest$ {
    export const inboundSchema: z.ZodType<
        MarketingCreatePushTemplateRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            MarketingCreatePushTemplateRequestDto:
                shared.MarketingCreatePushTemplateRequestDto$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                MarketingCreatePushTemplateRequestDto: "marketingCreatePushTemplateRequestDto",
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        MarketingCreatePushTemplateRequestDto: shared.MarketingCreatePushTemplateRequestDto$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreatePushTemplateRequest
    > = z
        .object({
            marketingCreatePushTemplateRequestDto:
                shared.MarketingCreatePushTemplateRequestDto$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                marketingCreatePushTemplateRequestDto: "MarketingCreatePushTemplateRequestDto",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace MarketingCreatePushTemplateResponse$ {
    export const inboundSchema: z.ZodType<
        MarketingCreatePushTemplateResponse,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreatePushTemplateResponse
    > = z
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
