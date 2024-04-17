/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type MarketingCreateEmailTemplateRequest = {
    marketingCreateEmailTemplateRequestDto: shared.MarketingCreateEmailTemplateRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingCreateEmailTemplateResponse = {
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
export namespace MarketingCreateEmailTemplateRequest$ {
    export type Inbound = {
        MarketingCreateEmailTemplateRequestDto: shared.MarketingCreateEmailTemplateRequestDto$.Inbound;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        MarketingCreateEmailTemplateRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            MarketingCreateEmailTemplateRequestDto:
                shared.MarketingCreateEmailTemplateRequestDto$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                marketingCreateEmailTemplateRequestDto: v.MarketingCreateEmailTemplateRequestDto,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        MarketingCreateEmailTemplateRequestDto: shared.MarketingCreateEmailTemplateRequestDto$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreateEmailTemplateRequest
    > = z
        .object({
            marketingCreateEmailTemplateRequestDto:
                shared.MarketingCreateEmailTemplateRequestDto$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                MarketingCreateEmailTemplateRequestDto: v.marketingCreateEmailTemplateRequestDto,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace MarketingCreateEmailTemplateResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateResult?: shared.CreateResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        MarketingCreateEmailTemplateResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CreateResult: shared.CreateResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateResult === undefined ? null : { createResult: v.CreateResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
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
        MarketingCreateEmailTemplateResponse
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
            return {
                ContentType: v.contentType,
                ...(v.createResult === undefined ? null : { CreateResult: v.createResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
