/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Company, Company$ } from "./company";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type CompanyResult = {
    data: Company;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace CompanyResult$ {
    export type Inbound = {
        data: Company$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<CompanyResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: Company$.inboundSchema,
            raw: z.array(RawResponse$.inboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Company$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompanyResult> = z
        .object({
            data: Company$.outboundSchema,
            raw: z.array(RawResponse$.outboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
