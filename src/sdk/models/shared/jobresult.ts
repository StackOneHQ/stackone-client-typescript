/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Job, Job$ } from "./job";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type JobResult = {
    job: Job;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace JobResult$ {
    export type Inbound = {
        job: Job$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<JobResult, z.ZodTypeDef, Inbound> = z
        .object({
            job: Job$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                job: v.job,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        job: Job$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobResult> = z
        .object({
            job: Job$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                job: v.job,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
