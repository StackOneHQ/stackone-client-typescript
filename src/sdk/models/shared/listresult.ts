/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { List, List$ } from "./list";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type ListResult = {
    data: List;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ListResult$ {
    export type Inbound = {
        data: List$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<ListResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: List$.inboundSchema,
            raw: z.array(RawResponse$.inboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: List$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListResult> = z
        .object({
            data: List$.outboundSchema,
            raw: z.array(RawResponse$.outboundSchema).nullable().optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
