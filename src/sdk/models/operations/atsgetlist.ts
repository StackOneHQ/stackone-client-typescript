/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type AtsGetListRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsGetListResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list with the given identifier was retrieved.
     */
    listResult?: shared.ListResult | undefined;
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
export const AtsGetListRequest$inboundSchema: z.ZodType<AtsGetListRequest, z.ZodTypeDef, unknown> =
    z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-account-id": "xAccountId",
            });
        });

/** @internal */
export type AtsGetListRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const AtsGetListRequest$outboundSchema: z.ZodType<
    AtsGetListRequest$Outbound,
    z.ZodTypeDef,
    AtsGetListRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetListRequest$ {
    /** @deprecated use `AtsGetListRequest$inboundSchema` instead. */
    export const inboundSchema = AtsGetListRequest$inboundSchema;
    /** @deprecated use `AtsGetListRequest$outboundSchema` instead. */
    export const outboundSchema = AtsGetListRequest$outboundSchema;
    /** @deprecated use `AtsGetListRequest$Outbound` instead. */
    export type Outbound = AtsGetListRequest$Outbound;
}

/** @internal */
export const AtsGetListResponse$inboundSchema: z.ZodType<
    AtsGetListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        ListResult: shared.ListResult$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            ListResult: "listResult",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsGetListResponse$Outbound = {
    ContentType: string;
    ListResult?: shared.ListResult$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsGetListResponse$outboundSchema: z.ZodType<
    AtsGetListResponse$Outbound,
    z.ZodTypeDef,
    AtsGetListResponse
> = z
    .object({
        contentType: z.string(),
        listResult: shared.ListResult$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            listResult: "ListResult",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetListResponse$ {
    /** @deprecated use `AtsGetListResponse$inboundSchema` instead. */
    export const inboundSchema = AtsGetListResponse$inboundSchema;
    /** @deprecated use `AtsGetListResponse$outboundSchema` instead. */
    export const outboundSchema = AtsGetListResponse$outboundSchema;
    /** @deprecated use `AtsGetListResponse$Outbound` instead. */
    export type Outbound = AtsGetListResponse$Outbound;
}
