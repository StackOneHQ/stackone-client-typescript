/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type HrisCreateTimeOffRequestRequest = {
    hrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisCreateTimeOffRequestResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The time off request was created successfully.
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
export namespace HrisCreateTimeOffRequestRequest$ {
    export const inboundSchema: z.ZodType<HrisCreateTimeOffRequestRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.inboundSchema,
                "x-account-id": z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    HrisCreateTimeOffRequestDto: "hrisCreateTimeOffRequestDto",
                    "x-account-id": "xAccountId",
                });
            });

    export type Outbound = {
        HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.Outbound;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestRequest
    > = z
        .object({
            hrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$.outboundSchema,
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                hrisCreateTimeOffRequestDto: "HrisCreateTimeOffRequestDto",
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace HrisCreateTimeOffRequestResponse$ {
    export const inboundSchema: z.ZodType<HrisCreateTimeOffRequestResponse, z.ZodTypeDef, unknown> =
        z
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
        HrisCreateTimeOffRequestResponse
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
