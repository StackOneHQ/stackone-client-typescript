/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse.js";
import { Scorecard, Scorecard$ } from "./scorecard.js";
import * as z from "zod";

export type ScorecardsResult = {
    data: Scorecard;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ScorecardsResult$ {
    export const inboundSchema: z.ZodType<ScorecardsResult, z.ZodTypeDef, unknown> = z.object({
        data: Scorecard$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Scorecard$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScorecardsResult> = z.object({
        data: Scorecard$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
