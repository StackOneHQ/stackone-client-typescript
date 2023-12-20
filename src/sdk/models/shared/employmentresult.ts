/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Employment, Employment$ } from "./employment";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type EmploymentResult = {
    data: Employment;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace EmploymentResult$ {
    export type Inbound = {
        data: Employment$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<EmploymentResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: Employment$.inboundSchema,
            raw: z.array(RawResponse$.inboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Employment$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmploymentResult> = z
        .object({
            data: Employment$.outboundSchema,
            raw: z.array(RawResponse$.outboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
