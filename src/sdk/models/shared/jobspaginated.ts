/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Job, Job$ } from "./job";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type JobsPaginated = {
    data: Array<Job>;
    nextPage: string;
    raw?: Array<RawResponse> | undefined;
};

/** @internal */
export namespace JobsPaginated$ {
    export type Inbound = {
        data: Array<Job$.Inbound>;
        next_page: string;
        raw?: Array<RawResponse$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<JobsPaginated, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(Job$.inboundSchema),
            next_page: z.string(),
            raw: z.array(RawResponse$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                nextPage: v.next_page,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Array<Job$.Outbound>;
        next_page: string;
        raw?: Array<RawResponse$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobsPaginated> = z
        .object({
            data: z.array(Job$.outboundSchema),
            nextPage: z.string(),
            raw: z.array(RawResponse$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                next_page: v.nextPage,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
