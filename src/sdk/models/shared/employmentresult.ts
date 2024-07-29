/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Employment,
    Employment$inboundSchema,
    Employment$Outbound,
    Employment$outboundSchema,
} from "./employment.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type EmploymentResult = {
    data: Employment;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const EmploymentResult$inboundSchema: z.ZodType<EmploymentResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Employment$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type EmploymentResult$Outbound = {
    data: Employment$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const EmploymentResult$outboundSchema: z.ZodType<
    EmploymentResult$Outbound,
    z.ZodTypeDef,
    EmploymentResult
> = z.object({
    data: Employment$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentResult$ {
    /** @deprecated use `EmploymentResult$inboundSchema` instead. */
    export const inboundSchema = EmploymentResult$inboundSchema;
    /** @deprecated use `EmploymentResult$outboundSchema` instead. */
    export const outboundSchema = EmploymentResult$outboundSchema;
    /** @deprecated use `EmploymentResult$Outbound` instead. */
    export type Outbound = EmploymentResult$Outbound;
}
