/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Interview, Interview$ } from "./interview.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type InterviewsResult = {
    data: Interview;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace InterviewsResult$ {
    export const inboundSchema: z.ZodType<InterviewsResult, z.ZodTypeDef, unknown> = z.object({
        data: Interview$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Interview$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewsResult> = z.object({
        data: Interview$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
