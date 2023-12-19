/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { JobPosting, JobPosting$ } from "./jobposting";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type JobPostingsPaginated = {
    data: Array<JobPosting>;
    nextPage: string;
    raw?: Array<RawResponse> | undefined;
};

/** @internal */
export namespace JobPostingsPaginated$ {
    export type Inbound = {
        data: Array<JobPosting$.Inbound>;
        next_page: string;
        raw?: Array<RawResponse$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<JobPostingsPaginated, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(JobPosting$.inboundSchema),
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
        data: Array<JobPosting$.Outbound>;
        next_page: string;
        raw?: Array<RawResponse$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingsPaginated> = z
        .object({
            data: z.array(JobPosting$.outboundSchema),
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
