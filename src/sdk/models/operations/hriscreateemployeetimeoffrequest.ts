/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type HrisCreateEmployeeTimeOffRequestRequest = {
    hrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto;
    id: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisCreateEmployeeTimeOffRequestResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Record created successfully.
     */
    createTimeOffResult?: shared.CreateTimeOffResult | undefined;
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
export namespace HrisCreateEmployeeTimeOffRequestRequest$ {
    export type Inbound = {
        HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.Inbound;
        id: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        HrisCreateEmployeeTimeOffRequestRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.inboundSchema,
            id: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                hrisCreateTimeOffRequestDto: v.HrisCreateTimeOffRequestDto,
                id: v.id,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.Outbound;
        id: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateEmployeeTimeOffRequestRequest
    > = z
        .object({
            hrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.outboundSchema,
            id: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                HrisCreateTimeOffRequestDto: v.hrisCreateTimeOffRequestDto,
                id: v.id,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisCreateEmployeeTimeOffRequestResponse$ {
    export type Inbound = {
        ContentType: string;
        CreateTimeOffResult?: shared.CreateTimeOffResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        HrisCreateEmployeeTimeOffRequestResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            CreateTimeOffResult: shared.CreateTimeOffResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CreateTimeOffResult === undefined
                    ? null
                    : { createTimeOffResult: v.CreateTimeOffResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CreateTimeOffResult?: shared.CreateTimeOffResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateEmployeeTimeOffRequestResponse
    > = z
        .object({
            contentType: z.string(),
            createTimeOffResult: shared.CreateTimeOffResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.createTimeOffResult === undefined
                    ? null
                    : { CreateTimeOffResult: v.createTimeOffResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
