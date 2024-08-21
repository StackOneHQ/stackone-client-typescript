/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Assignment,
    Assignment$inboundSchema,
    Assignment$Outbound,
    Assignment$outboundSchema,
} from "./assignment.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type AssignmentResult = {
    data: Assignment;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const AssignmentResult$inboundSchema: z.ZodType<AssignmentResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Assignment$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type AssignmentResult$Outbound = {
    data: Assignment$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const AssignmentResult$outboundSchema: z.ZodType<
    AssignmentResult$Outbound,
    z.ZodTypeDef,
    AssignmentResult
> = z.object({
    data: Assignment$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentResult$ {
    /** @deprecated use `AssignmentResult$inboundSchema` instead. */
    export const inboundSchema = AssignmentResult$inboundSchema;
    /** @deprecated use `AssignmentResult$outboundSchema` instead. */
    export const outboundSchema = AssignmentResult$outboundSchema;
    /** @deprecated use `AssignmentResult$Outbound` instead. */
    export type Outbound = AssignmentResult$Outbound;
}
