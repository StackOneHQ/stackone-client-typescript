/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type HrisCreateEmployeeWorkEligibilityRequestRequest = {
    hrisCreateWorkEligibilityRequestDto: shared.HrisCreateWorkEligibilityRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisCreateEmployeeWorkEligibilityRequestResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record created successfully.
     */
    createWorkEligibilityResult?: shared.CreateWorkEligibilityResult | undefined;
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
export namespace HrisCreateEmployeeWorkEligibilityRequestRequest$ {
    export type Inbound = {
        HrisCreateWorkEligibilityRequestDto: shared.HrisCreateWorkEligibilityRequestDto$.Inbound;
        id: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        HrisCreateEmployeeWorkEligibilityRequestRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HrisCreateWorkEligibilityRequestDto:
                shared.HrisCreateWorkEligibilityRequestDto$.inboundSchema,
            id: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                hrisCreateWorkEligibilityRequestDto: v.HrisCreateWorkEligibilityRequestDto,
                id: v.id,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        HrisCreateWorkEligibilityRequestDto: shared.HrisCreateWorkEligibilityRequestDto$.Outbound;
        id: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateEmployeeWorkEligibilityRequestRequest
    > = z
        .object({
            hrisCreateWorkEligibilityRequestDto:
                shared.HrisCreateWorkEligibilityRequestDto$.outboundSchema,
            id: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                HrisCreateWorkEligibilityRequestDto: v.hrisCreateWorkEligibilityRequestDto,
                id: v.id,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisCreateEmployeeWorkEligibilityRequestResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateWorkEligibilityResult?: shared.CreateWorkEligibilityResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        HrisCreateEmployeeWorkEligibilityRequestResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CreateWorkEligibilityResult:
                shared.CreateWorkEligibilityResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateWorkEligibilityResult === undefined
                    ? null
                    : { createWorkEligibilityResult: v.CreateWorkEligibilityResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateWorkEligibilityResult?: shared.CreateWorkEligibilityResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateEmployeeWorkEligibilityRequestResponse
    > = z
        .object({
            contentType: z.string(),
            createWorkEligibilityResult:
                shared.CreateWorkEligibilityResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createWorkEligibilityResult === undefined
                    ? null
                    : { CreateWorkEligibilityResult: v.createWorkEligibilityResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
