/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type HrisGetEmployeesWorkEligibilityRequest = {
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
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetEmployeesWorkEligibilityResponse = {
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
    /**
     * The work eligibility of the employee with the given identifiers was retrieved.
     */
    workEligibilityResult?: shared.WorkEligibilityResult | undefined;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityRequest$inboundSchema: z.ZodType<
    HrisGetEmployeesWorkEligibilityRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        subResourceId: z.string(),
        "x-account-id": z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-account-id": "xAccountId",
        });
    });

/** @internal */
export type HrisGetEmployeesWorkEligibilityRequest$Outbound = {
    fields?: string | null | undefined;
    id: string;
    proxy?: { [k: string]: any } | null | undefined;
    raw: boolean | null;
    subResourceId: string;
    "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityRequest$outboundSchema: z.ZodType<
    HrisGetEmployeesWorkEligibilityRequest$Outbound,
    z.ZodTypeDef,
    HrisGetEmployeesWorkEligibilityRequest
> = z
    .object({
        fields: z.nullable(z.string()).optional(),
        id: z.string(),
        proxy: z.nullable(z.record(z.any())).optional(),
        raw: z.nullable(z.boolean().default(false)),
        subResourceId: z.string(),
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
export namespace HrisGetEmployeesWorkEligibilityRequest$ {
    /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$inboundSchema` instead. */
    export const inboundSchema = HrisGetEmployeesWorkEligibilityRequest$inboundSchema;
    /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$outboundSchema` instead. */
    export const outboundSchema = HrisGetEmployeesWorkEligibilityRequest$outboundSchema;
    /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$Outbound` instead. */
    export type Outbound = HrisGetEmployeesWorkEligibilityRequest$Outbound;
}

/** @internal */
export const HrisGetEmployeesWorkEligibilityResponse$inboundSchema: z.ZodType<
    HrisGetEmployeesWorkEligibilityResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        WorkEligibilityResult: shared.WorkEligibilityResult$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            WorkEligibilityResult: "workEligibilityResult",
        });
    });

/** @internal */
export type HrisGetEmployeesWorkEligibilityResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WorkEligibilityResult?: shared.WorkEligibilityResult$Outbound | undefined;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityResponse$outboundSchema: z.ZodType<
    HrisGetEmployeesWorkEligibilityResponse$Outbound,
    z.ZodTypeDef,
    HrisGetEmployeesWorkEligibilityResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        workEligibilityResult: shared.WorkEligibilityResult$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            workEligibilityResult: "WorkEligibilityResult",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeesWorkEligibilityResponse$ {
    /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$inboundSchema` instead. */
    export const inboundSchema = HrisGetEmployeesWorkEligibilityResponse$inboundSchema;
    /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$outboundSchema` instead. */
    export const outboundSchema = HrisGetEmployeesWorkEligibilityResponse$outboundSchema;
    /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$Outbound` instead. */
    export type Outbound = HrisGetEmployeesWorkEligibilityResponse$Outbound;
}
