/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type LmsCreateContentRequest = {
    lmsCreateContentRequestDto: shared.LmsCreateContentRequestDto;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type LmsCreateContentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The content was created successfully.
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
export const LmsCreateContentRequest$inboundSchema: z.ZodType<
    LmsCreateContentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        LmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$inboundSchema,
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            LmsCreateContentRequestDto: "lmsCreateContentRequestDto",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type LmsCreateContentRequest$Outbound = {
    LmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$Outbound;
    "x-account-id": string;
};

/** @internal */
export const LmsCreateContentRequest$outboundSchema: z.ZodType<
    LmsCreateContentRequest$Outbound,
    z.ZodTypeDef,
    LmsCreateContentRequest
> = z
    .object({
        lmsCreateContentRequestDto: shared.LmsCreateContentRequestDto$outboundSchema,
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            lmsCreateContentRequestDto: "LmsCreateContentRequestDto",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateContentRequest$ {
    /** @deprecated use `LmsCreateContentRequest$inboundSchema` instead. */
    export const inboundSchema = LmsCreateContentRequest$inboundSchema;
    /** @deprecated use `LmsCreateContentRequest$outboundSchema` instead. */
    export const outboundSchema = LmsCreateContentRequest$outboundSchema;
    /** @deprecated use `LmsCreateContentRequest$Outbound` instead. */
    export type Outbound = LmsCreateContentRequest$Outbound;
}

/** @internal */
export const LmsCreateContentResponse$inboundSchema: z.ZodType<
    LmsCreateContentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        CreateResult: shared.CreateResult$inboundSchema.optional(),
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

/** @internal */
export type LmsCreateContentResponse$Outbound = {
    ContentType: string;
    CreateResult?: shared.CreateResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const LmsCreateContentResponse$outboundSchema: z.ZodType<
    LmsCreateContentResponse$Outbound,
    z.ZodTypeDef,
    LmsCreateContentResponse
> = z
    .object({
        contentType: z.string(),
        createResult: shared.CreateResult$outboundSchema.optional(),
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

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateContentResponse$ {
    /** @deprecated use `LmsCreateContentResponse$inboundSchema` instead. */
    export const inboundSchema = LmsCreateContentResponse$inboundSchema;
    /** @deprecated use `LmsCreateContentResponse$outboundSchema` instead. */
    export const outboundSchema = LmsCreateContentResponse$outboundSchema;
    /** @deprecated use `LmsCreateContentResponse$Outbound` instead. */
    export type Outbound = LmsCreateContentResponse$Outbound;
}
