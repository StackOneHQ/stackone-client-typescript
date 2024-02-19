/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HRISBenefit, HRISBenefit$ } from "./hrisbenefit";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

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
export namespace HRISBenefitsPaginated$ {
    export type Inbound = {
        data: Array<HRISBenefit$.Inbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<HRISBenefitsPaginated, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(HRISBenefit$.inboundSchema),
            next: z.nullable(z.string()).optional(),
            next_page: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.next_page === undefined ? null : { nextPage: v.next_page }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Array<HRISBenefit$.Outbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISBenefitsPaginated> = z
        .object({
            data: z.array(HRISBenefit$.outboundSchema),
            next: z.nullable(z.string()).optional(),
            nextPage: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.nextPage === undefined ? null : { next_page: v.nextPage }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
