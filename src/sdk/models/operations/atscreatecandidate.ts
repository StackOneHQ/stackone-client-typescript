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
     * The candidate was successfully created.
     */
    candidateResult?: shared.CandidateResult | undefined;
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
export namespace AtsCreateCandidateRequest$ {
    export type Inbound = {
        AtsCreateCandidateRequestDto: shared.AtsCreateCandidateRequestDto$.Inbound;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsCreateCandidateRequest, z.ZodTypeDef, Inbound> = z
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
    export type Inbound = {
        CandidateResult?: shared.CandidateResult$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AtsCreateCandidateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CandidateResult: shared.CandidateResult$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CandidateResult === undefined
                    ? null
                    : { candidateResult: v.CandidateResult }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CandidateResult?: shared.CandidateResult$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateResponse> = z
        .object({
            candidateResult: shared.CandidateResult$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.candidateResult === undefined
                    ? null
                    : { CandidateResult: v.candidateResult }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
