/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Completion,
    Completion$inboundSchema,
    Completion$Outbound,
    Completion$outboundSchema,
} from "./completion.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type CompletionResult = {
    data: Completion;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CompletionResult$inboundSchema: z.ZodType<CompletionResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Completion$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type CompletionResult$Outbound = {
    data: Completion$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CompletionResult$outboundSchema: z.ZodType<
    CompletionResult$Outbound,
    z.ZodTypeDef,
    CompletionResult
> = z.object({
    data: Completion$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionResult$ {
    /** @deprecated use `CompletionResult$inboundSchema` instead. */
    export const inboundSchema = CompletionResult$inboundSchema;
    /** @deprecated use `CompletionResult$outboundSchema` instead. */
    export const outboundSchema = CompletionResult$outboundSchema;
    /** @deprecated use `CompletionResult$Outbound` instead. */
    export type Outbound = CompletionResult$Outbound;
}
