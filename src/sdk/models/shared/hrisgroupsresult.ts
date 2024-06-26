/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HRISGroup, HRISGroup$ } from "./hrisgroup.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type HRISGroupsResult = {
    data: HRISGroup;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace HRISGroupsResult$ {
    export const inboundSchema: z.ZodType<HRISGroupsResult, z.ZodTypeDef, unknown> = z.object({
        data: HRISGroup$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: HRISGroup$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroupsResult> = z.object({
        data: HRISGroup$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
