/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type IamListRolesQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type IamListRolesRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: IamListRolesQueryParamFilter | null | undefined;
    /**
     * The unified cursor
     */
    next?: string | null | undefined;
    /**
     * The page number of the results to fetch
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    page?: string | null | undefined;
    /**
     * The number of results per page
     */
    pageSize?: string | null | undefined;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type IamListRolesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The list of roles was retrieved.
     */
    iamRolesPaginated?: shared.IamRolesPaginated | undefined;
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
export const IamListRolesQueryParamFilter$inboundSchema: z.ZodType<
    IamListRolesQueryParamFilter,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        updated_after: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updated_after: "updatedAfter",
        });
    });

/** @internal */
export type IamListRolesQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const IamListRolesQueryParamFilter$outboundSchema: z.ZodType<
    IamListRolesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    IamListRolesQueryParamFilter
> = z
    .object({
        updatedAfter: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            updatedAfter: "updated_after",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamListRolesQueryParamFilter$ {
    /** @deprecated use `IamListRolesQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = IamListRolesQueryParamFilter$inboundSchema;
    /** @deprecated use `IamListRolesQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = IamListRolesQueryParamFilter$outboundSchema;
    /** @deprecated use `IamListRolesQueryParamFilter$Outbound` instead. */
    export type Outbound = IamListRolesQueryParamFilter$Outbound;
}

/** @internal */
export const IamListRolesRequest$inboundSchema: z.ZodType<
    IamListRolesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => IamListRolesQueryParamFilter$inboundSchema)).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updated_after: z.nullable(z.string()).optional(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            page_size: "pageSize",
            updated_after: "updatedAfter",
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type IamListRolesRequest$Outbound = {
    expand?: string | null | undefined;
    fields?: string | null | undefined;
    filter?: IamListRolesQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const IamListRolesRequest$outboundSchema: z.ZodType<
    IamListRolesRequest$Outbound,
    z.ZodTypeDef,
    IamListRolesRequest
> = z
    .object({
        expand: z.nullable(z.string()).optional(),
        fields: z.nullable(z.string()).optional(),
        filter: z.nullable(z.lazy(() => IamListRolesQueryParamFilter$outboundSchema)).optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        pageSize: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        updatedAfter: z.nullable(z.string()).optional(),
        xAccountId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            pageSize: "page_size",
            updatedAfter: "updated_after",
            xAccountId: "x-account-id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamListRolesRequest$ {
    /** @deprecated use `IamListRolesRequest$inboundSchema` instead. */
    export const inboundSchema = IamListRolesRequest$inboundSchema;
    /** @deprecated use `IamListRolesRequest$outboundSchema` instead. */
    export const outboundSchema = IamListRolesRequest$outboundSchema;
    /** @deprecated use `IamListRolesRequest$Outbound` instead. */
    export type Outbound = IamListRolesRequest$Outbound;
}

/** @internal */
export const IamListRolesResponse$inboundSchema: z.ZodType<
    IamListRolesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        IamRolesPaginated: shared.IamRolesPaginated$inboundSchema.optional(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            IamRolesPaginated: "iamRolesPaginated",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type IamListRolesResponse$Outbound = {
    ContentType: string;
    IamRolesPaginated?: shared.IamRolesPaginated$Outbound | undefined;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const IamListRolesResponse$outboundSchema: z.ZodType<
    IamListRolesResponse$Outbound,
    z.ZodTypeDef,
    IamListRolesResponse
> = z
    .object({
        contentType: z.string(),
        iamRolesPaginated: shared.IamRolesPaginated$outboundSchema.optional(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            iamRolesPaginated: "IamRolesPaginated",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamListRolesResponse$ {
    /** @deprecated use `IamListRolesResponse$inboundSchema` instead. */
    export const inboundSchema = IamListRolesResponse$inboundSchema;
    /** @deprecated use `IamListRolesResponse$outboundSchema` instead. */
    export const outboundSchema = IamListRolesResponse$outboundSchema;
    /** @deprecated use `IamListRolesResponse$Outbound` instead. */
    export type Outbound = IamListRolesResponse$Outbound;
}
