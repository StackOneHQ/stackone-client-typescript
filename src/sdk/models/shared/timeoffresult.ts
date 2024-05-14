/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse";
import { TimeOff, TimeOff$ } from "./timeoff";
import * as z from "zod";

export type TimeOffResult = {
    data: TimeOff;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace TimeOffResult$ {
    export const inboundSchema: z.ZodType<TimeOffResult, z.ZodTypeDef, unknown> = z
        .object({
            data: TimeOff$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: TimeOff$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffResult> = z
        .object({
            data: TimeOff$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
