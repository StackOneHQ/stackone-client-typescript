/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisUpdateEmployeeWorkEligibilityRequestRequest = {
    hrisCreateWorkEligibilityRequestDto: shared.HrisCreateWorkEligibilityRequestDto;
    id: string;
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisUpdateEmployeeWorkEligibilityRequestResponse = {
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
export const HrisUpdateEmployeeWorkEligibilityRequestRequest$inboundSchema: z.ZodType<
    HrisUpdateEmployeeWorkEligibilityRequestRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HrisCreateWorkEligibilityRequestDto:
            shared.HrisCreateWorkEligibilityRequestDto$inboundSchema,
        id: z.string(),
        subResourceId: z.string(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            HrisCreateWorkEligibilityRequestDto: "hrisCreateWorkEligibilityRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type HrisUpdateEmployeeWorkEligibilityRequestRequest$Outbound = {
    HrisCreateWorkEligibilityRequestDto: shared.HrisCreateWorkEligibilityRequestDto$Outbound;
    id: string;
    subResourceId: string;
    "x-account-id": string;
};

/** @internal */
export const HrisUpdateEmployeeWorkEligibilityRequestRequest$outboundSchema: z.ZodType<
    HrisUpdateEmployeeWorkEligibilityRequestRequest$Outbound,
    z.ZodTypeDef,
    HrisUpdateEmployeeWorkEligibilityRequestRequest
> = z
    .object({
        hrisCreateWorkEligibilityRequestDto:
            shared.HrisCreateWorkEligibilityRequestDto$outboundSchema,
        id: z.string(),
        subResourceId: z.string(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            hrisCreateWorkEligibilityRequestDto: "HrisCreateWorkEligibilityRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeWorkEligibilityRequestRequest$ {
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestRequest$inboundSchema` instead. */
    export const inboundSchema = HrisUpdateEmployeeWorkEligibilityRequestRequest$inboundSchema;
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestRequest$outboundSchema` instead. */
    export const outboundSchema = HrisUpdateEmployeeWorkEligibilityRequestRequest$outboundSchema;
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestRequest$Outbound` instead. */
    export type Outbound = HrisUpdateEmployeeWorkEligibilityRequestRequest$Outbound;
}

/** @internal */
export const HrisUpdateEmployeeWorkEligibilityRequestResponse$inboundSchema: z.ZodType<
    HrisUpdateEmployeeWorkEligibilityRequestResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type HrisUpdateEmployeeWorkEligibilityRequestResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const HrisUpdateEmployeeWorkEligibilityRequestResponse$outboundSchema: z.ZodType<
    HrisUpdateEmployeeWorkEligibilityRequestResponse$Outbound,
    z.ZodTypeDef,
    HrisUpdateEmployeeWorkEligibilityRequestResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeWorkEligibilityRequestResponse$ {
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestResponse$inboundSchema` instead. */
    export const inboundSchema = HrisUpdateEmployeeWorkEligibilityRequestResponse$inboundSchema;
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestResponse$outboundSchema` instead. */
    export const outboundSchema = HrisUpdateEmployeeWorkEligibilityRequestResponse$outboundSchema;
    /** @deprecated use `HrisUpdateEmployeeWorkEligibilityRequestResponse$Outbound` instead. */
    export type Outbound = HrisUpdateEmployeeWorkEligibilityRequestResponse$Outbound;
}
