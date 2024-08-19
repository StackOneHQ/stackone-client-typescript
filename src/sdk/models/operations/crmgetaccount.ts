/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type CrmGetAccountRequest = {
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

export type CrmGetAccountResponse = {
    /**
     * The account with the given identifier was retrieved.
     */
    accountResult?: shared.AccountResult | undefined;
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
export const CrmGetAccountRequest$inboundSchema: z.ZodType<
    CrmGetAccountRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean()),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type CrmGetAccountRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    "x-account-id": string;
};

/** @internal */
export const CrmGetAccountRequest$outboundSchema: z.ZodType<
    CrmGetAccountRequest$Outbound,
    z.ZodTypeDef,
    CrmGetAccountRequest
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
export namespace CrmGetAccountRequest$ {
    /** @deprecated use `CrmGetAccountRequest$inboundSchema` instead. */
    export const inboundSchema = CrmGetAccountRequest$inboundSchema;
    /** @deprecated use `CrmGetAccountRequest$outboundSchema` instead. */
    export const outboundSchema = CrmGetAccountRequest$outboundSchema;
    /** @deprecated use `CrmGetAccountRequest$Outbound` instead. */
    export type Outbound = CrmGetAccountRequest$Outbound;
}

/** @internal */
export const CrmGetAccountResponse$inboundSchema: z.ZodType<
    CrmGetAccountResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AccountResult: shared.AccountResult$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            AccountResult: "accountResult",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type CrmGetAccountResponse$Outbound = {
    AccountResult?: shared.AccountResult$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const CrmGetAccountResponse$outboundSchema: z.ZodType<
    CrmGetAccountResponse$Outbound,
    z.ZodTypeDef,
    CrmGetAccountResponse
> = z
    .object({
        accountResult: shared.AccountResult$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            accountResult: "AccountResult",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmGetAccountResponse$ {
    /** @deprecated use `CrmGetAccountResponse$inboundSchema` instead. */
    export const inboundSchema = CrmGetAccountResponse$inboundSchema;
    /** @deprecated use `CrmGetAccountResponse$outboundSchema` instead. */
    export const outboundSchema = CrmGetAccountResponse$outboundSchema;
    /** @deprecated use `CrmGetAccountResponse$Outbound` instead. */
    export type Outbound = CrmGetAccountResponse$Outbound;
}
