/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InterviewStage, InterviewStage$ } from "./interviewstage";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type InterviewStageResult = {
    data: InterviewStage;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace InterviewStageResult$ {
    export type Inbound = {
        data: InterviewStage$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<InterviewStageResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: InterviewStage$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: InterviewStage$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewStageResult> = z
        .object({
            data: InterviewStage$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
