/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Interview, Interview$ } from "./interview";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type InterviewsResult = {
    data: Interview;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace InterviewsResult$ {
    export type Inbound = {
        data: Interview$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<InterviewsResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: Interview$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Interview$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewsResult> = z
        .object({
            data: Interview$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
