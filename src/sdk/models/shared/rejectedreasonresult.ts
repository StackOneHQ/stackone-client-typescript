/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import {
    RejectedReason,
    RejectedReason$inboundSchema,
    RejectedReason$Outbound,
    RejectedReason$outboundSchema,
} from "./rejectedreason.js";
import * as z from "zod";

export type RejectedReasonResult = {
    data: RejectedReason;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const RejectedReasonResult$inboundSchema: z.ZodType<
    RejectedReasonResult,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: RejectedReason$inboundSchema,
    raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type RejectedReasonResult$Outbound = {
    data: RejectedReason$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const RejectedReasonResult$outboundSchema: z.ZodType<
    RejectedReasonResult$Outbound,
    z.ZodTypeDef,
    RejectedReasonResult
> = z.object({
    data: RejectedReason$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RejectedReasonResult$ {
    /** @deprecated use `RejectedReasonResult$inboundSchema` instead. */
    export const inboundSchema = RejectedReasonResult$inboundSchema;
    /** @deprecated use `RejectedReasonResult$outboundSchema` instead. */
    export const outboundSchema = RejectedReasonResult$outboundSchema;
    /** @deprecated use `RejectedReasonResult$Outbound` instead. */
    export type Outbound = RejectedReasonResult$Outbound;
}
