/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsListAssessmentsPackagesQueryParamFilter = {
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
};

export type AtsListAssessmentsPackagesRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * Filter parameters that allow greater customisation of the list response
     */
    filter?: AtsListAssessmentsPackagesQueryParamFilter | null | undefined;
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

export type AtsListAssessmentsPackagesResponse = {
    /**
     * The list of assessments packages was retrieved.
     */
    assessmentsPackagesPaginated?: shared.AssessmentsPackagesPaginated | undefined;
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
export const AtsListAssessmentsPackagesQueryParamFilter$inboundSchema: z.ZodType<
    AtsListAssessmentsPackagesQueryParamFilter,
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
export type AtsListAssessmentsPackagesQueryParamFilter$Outbound = {
    updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListAssessmentsPackagesQueryParamFilter$outboundSchema: z.ZodType<
    AtsListAssessmentsPackagesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListAssessmentsPackagesQueryParamFilter
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
export namespace AtsListAssessmentsPackagesQueryParamFilter$ {
    /** @deprecated use `AtsListAssessmentsPackagesQueryParamFilter$inboundSchema` instead. */
    export const inboundSchema = AtsListAssessmentsPackagesQueryParamFilter$inboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesQueryParamFilter$outboundSchema` instead. */
    export const outboundSchema = AtsListAssessmentsPackagesQueryParamFilter$outboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesQueryParamFilter$Outbound` instead. */
    export type Outbound = AtsListAssessmentsPackagesQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListAssessmentsPackagesRequest$inboundSchema: z.ZodType<
    AtsListAssessmentsPackagesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => AtsListAssessmentsPackagesQueryParamFilter$inboundSchema))
            .optional(),
        next: z.nullable(z.string()).optional(),
        page: z.nullable(z.string()).optional(),
        page_size: z.nullable(z.string().default("25")),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean()),
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
export type AtsListAssessmentsPackagesRequest$Outbound = {
    fields?: string | null | undefined;
    filter?: AtsListAssessmentsPackagesQueryParamFilter$Outbound | null | undefined;
    next?: string | null | undefined;
    page?: string | null | undefined;
    page_size: string | null;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    updated_after?: string | null | undefined;
    "x-account-id": string;
};

/** @internal */
export const AtsListAssessmentsPackagesRequest$outboundSchema: z.ZodType<
    AtsListAssessmentsPackagesRequest$Outbound,
    z.ZodTypeDef,
    AtsListAssessmentsPackagesRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        filter: z
            .nullable(z.lazy(() => AtsListAssessmentsPackagesQueryParamFilter$outboundSchema))
            .optional(),
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
export namespace AtsListAssessmentsPackagesRequest$ {
    /** @deprecated use `AtsListAssessmentsPackagesRequest$inboundSchema` instead. */
    export const inboundSchema = AtsListAssessmentsPackagesRequest$inboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesRequest$outboundSchema` instead. */
    export const outboundSchema = AtsListAssessmentsPackagesRequest$outboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesRequest$Outbound` instead. */
    export type Outbound = AtsListAssessmentsPackagesRequest$Outbound;
}

/** @internal */
export const AtsListAssessmentsPackagesResponse$inboundSchema: z.ZodType<
    AtsListAssessmentsPackagesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        AssessmentsPackagesPaginated: shared.AssessmentsPackagesPaginated$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            AssessmentsPackagesPaginated: "assessmentsPackagesPaginated",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type AtsListAssessmentsPackagesResponse$Outbound = {
    AssessmentsPackagesPaginated?: shared.AssessmentsPackagesPaginated$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const AtsListAssessmentsPackagesResponse$outboundSchema: z.ZodType<
    AtsListAssessmentsPackagesResponse$Outbound,
    z.ZodTypeDef,
    AtsListAssessmentsPackagesResponse
> = z
    .object({
        assessmentsPackagesPaginated: shared.AssessmentsPackagesPaginated$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            assessmentsPackagesPaginated: "AssessmentsPackagesPaginated",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListAssessmentsPackagesResponse$ {
    /** @deprecated use `AtsListAssessmentsPackagesResponse$inboundSchema` instead. */
    export const inboundSchema = AtsListAssessmentsPackagesResponse$inboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesResponse$outboundSchema` instead. */
    export const outboundSchema = AtsListAssessmentsPackagesResponse$outboundSchema;
    /** @deprecated use `AtsListAssessmentsPackagesResponse$Outbound` instead. */
    export type Outbound = AtsListAssessmentsPackagesResponse$Outbound;
}
