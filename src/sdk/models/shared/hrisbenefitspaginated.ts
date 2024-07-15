/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    HRISBenefit,
    HRISBenefit$inboundSchema,
    HRISBenefit$Outbound,
    HRISBenefit$outboundSchema,
} from "./hrisbenefit.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type HRISBenefitsPaginated = {
    data: Array<HRISBenefit>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const HRISBenefitsPaginated$inboundSchema: z.ZodType<
    HRISBenefitsPaginated,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        data: z.array(HRISBenefit$inboundSchema),
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
export type HRISBenefitsPaginated$Outbound = {
    data: Array<HRISBenefit$Outbound>;
    next?: string | null | undefined;
    next_page?: string | null | undefined;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const HRISBenefitsPaginated$outboundSchema: z.ZodType<
    HRISBenefitsPaginated$Outbound,
    z.ZodTypeDef,
    HRISBenefitsPaginated
> = z
    .object({
        data: z.array(HRISBenefit$outboundSchema),
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
export namespace HRISBenefitsPaginated$ {
    /** @deprecated use `HRISBenefitsPaginated$inboundSchema` instead. */
    export const inboundSchema = HRISBenefitsPaginated$inboundSchema;
    /** @deprecated use `HRISBenefitsPaginated$outboundSchema` instead. */
    export const outboundSchema = HRISBenefitsPaginated$outboundSchema;
    /** @deprecated use `HRISBenefitsPaginated$Outbound` instead. */
    export type Outbound = HRISBenefitsPaginated$Outbound;
}
