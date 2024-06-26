/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse.js";
import { RejectedReason, RejectedReason$ } from "./rejectedreason.js";
import * as z from "zod";

export type RejectedReasonResult = {
    data: RejectedReason;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace RejectedReasonResult$ {
    export const inboundSchema: z.ZodType<RejectedReasonResult, z.ZodTypeDef, unknown> = z.object({
        data: RejectedReason$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: RejectedReason$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RejectedReasonResult> = z.object(
        {
            data: RejectedReason$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        }
    );
}
