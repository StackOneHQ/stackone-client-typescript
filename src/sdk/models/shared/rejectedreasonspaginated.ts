/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse";
import { RejectedReason, RejectedReason$ } from "./rejectedreason";
import { z } from "zod";

export type RejectedReasonsPaginated = {
    data: Array<RejectedReason>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace RejectedReasonsPaginated$ {
    export type Inbound = {
        data: Array<RejectedReason$.Inbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<RejectedReasonsPaginated, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(RejectedReason$.inboundSchema),
            next: z.string().nullable().optional(),
            next_page: z.string().nullable().optional(),
            raw: z.array(RawResponse$.inboundSchema).nullable().optional(),
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
        data: Array<RejectedReason$.Outbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RejectedReasonsPaginated> = z
        .object({
            data: z.array(RejectedReason$.outboundSchema),
            next: z.string().nullable().optional(),
            nextPage: z.string().nullable().optional(),
            raw: z.array(RawResponse$.outboundSchema).nullable().optional(),
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
