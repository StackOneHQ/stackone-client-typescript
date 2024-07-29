/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
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

export type CompaniesPaginated = {
    data: Array<Company>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CompaniesPaginated$inboundSchema: z.ZodType<
    CompaniesPaginated,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        data: z.array(Company$inboundSchema),
        next: z.nullable(z.string()).optional(),
        next_page: z.nullable(z.string()).optional(),
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            next_page: "nextPage",
        });
    });

/** @internal */
export type CompaniesPaginated$Outbound = {
    data: Array<Company$Outbound>;
    next?: string | null | undefined;
    next_page?: string | null | undefined;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CompaniesPaginated$outboundSchema: z.ZodType<
    CompaniesPaginated$Outbound,
    z.ZodTypeDef,
    CompaniesPaginated
> = z
    .object({
        data: z.array(Company$outboundSchema),
        next: z.nullable(z.string()).optional(),
        nextPage: z.nullable(z.string()).optional(),
        raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            nextPage: "next_page",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesPaginated$ {
    /** @deprecated use `CompaniesPaginated$inboundSchema` instead. */
    export const inboundSchema = CompaniesPaginated$inboundSchema;
    /** @deprecated use `CompaniesPaginated$outboundSchema` instead. */
    export const outboundSchema = CompaniesPaginated$outboundSchema;
    /** @deprecated use `CompaniesPaginated$Outbound` instead. */
    export type Outbound = CompaniesPaginated$Outbound;
}
