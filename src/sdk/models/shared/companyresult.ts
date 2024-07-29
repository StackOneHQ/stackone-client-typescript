/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Company,
    Company$inboundSchema,
    Company$Outbound,
    Company$outboundSchema,
} from "./company.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type CompanyResult = {
    data: Company;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CompanyResult$inboundSchema: z.ZodType<CompanyResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Company$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type CompanyResult$Outbound = {
    data: Company$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CompanyResult$outboundSchema: z.ZodType<
    CompanyResult$Outbound,
    z.ZodTypeDef,
    CompanyResult
> = z.object({
    data: Company$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyResult$ {
    /** @deprecated use `CompanyResult$inboundSchema` instead. */
    export const inboundSchema = CompanyResult$inboundSchema;
    /** @deprecated use `CompanyResult$outboundSchema` instead. */
    export const outboundSchema = CompanyResult$outboundSchema;
    /** @deprecated use `CompanyResult$Outbound` instead. */
    export type Outbound = CompanyResult$Outbound;
}
