/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type AtsCreateCandidateRequest = {
    atsCreateCandidateRequestDto: shared.AtsCreateCandidateRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsCreateCandidateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The candidate was successfully created.
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
export namespace AtsCreateCandidateRequest$ {
    export const inboundSchema: z.ZodType<AtsCreateCandidateRequest, z.ZodTypeDef, unknown> = z
        .object({
            AtsCreateCandidateRequestDto: shared.AtsCreateCandidateRequestDto$.inboundSchema,
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                atsCreateCandidateRequestDto: v.AtsCreateCandidateRequestDto,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        AtsCreateCandidateRequestDto: shared.AtsCreateCandidateRequestDto$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateRequest> = z
        .object({
            atsCreateCandidateRequestDto: shared.AtsCreateCandidateRequestDto$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                AtsCreateCandidateRequestDto: v.atsCreateCandidateRequestDto,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace AtsCreateCandidateResponse$ {
    export const inboundSchema: z.ZodType<AtsCreateCandidateResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateResponse> = z
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
