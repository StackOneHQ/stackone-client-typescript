/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Interview,
    Interview$inboundSchema,
    Interview$Outbound,
    Interview$outboundSchema,
} from "./interview.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type InterviewsResult = {
    data: Interview;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const InterviewsResult$inboundSchema: z.ZodType<InterviewsResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Interview$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type InterviewsResult$Outbound = {
    data: Interview$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const InterviewsResult$outboundSchema: z.ZodType<
    InterviewsResult$Outbound,
    z.ZodTypeDef,
    InterviewsResult
> = z.object({
    data: Interview$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewsResult$ {
    /** @deprecated use `InterviewsResult$inboundSchema` instead. */
    export const inboundSchema = InterviewsResult$inboundSchema;
    /** @deprecated use `InterviewsResult$outboundSchema` instead. */
    export const outboundSchema = InterviewsResult$outboundSchema;
    /** @deprecated use `InterviewsResult$Outbound` instead. */
    export type Outbound = InterviewsResult$Outbound;
}
