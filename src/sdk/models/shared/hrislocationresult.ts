/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HRISLocation, HRISLocation$ } from "./hrislocation";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type HRISLocationResult = {
    data: HRISLocation;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace HRISLocationResult$ {
    export type Inbound = {
        data: HRISLocation$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<HRISLocationResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: HRISLocation$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: HRISLocation$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISLocationResult> = z
        .object({
            data: HRISLocation$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
