/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Candidate, Candidate$ } from "./candidate.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type CandidateResult = {
    data: Candidate;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace CandidateResult$ {
    export const inboundSchema: z.ZodType<CandidateResult, z.ZodTypeDef, unknown> = z.object({
        data: Candidate$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Candidate$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CandidateResult> = z.object({
        data: Candidate$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
