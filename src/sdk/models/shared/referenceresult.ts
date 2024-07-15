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
    Reference,
    Reference$inboundSchema,
    Reference$Outbound,
    Reference$outboundSchema,
} from "./reference.js";
import * as z from "zod";

export type ReferenceResult = {
    data: Reference;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const ReferenceResult$inboundSchema: z.ZodType<ReferenceResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Reference$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type ReferenceResult$Outbound = {
    data: Reference$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const ReferenceResult$outboundSchema: z.ZodType<
    ReferenceResult$Outbound,
    z.ZodTypeDef,
    ReferenceResult
> = z.object({
    data: Reference$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReferenceResult$ {
    /** @deprecated use `ReferenceResult$inboundSchema` instead. */
    export const inboundSchema = ReferenceResult$inboundSchema;
    /** @deprecated use `ReferenceResult$outboundSchema` instead. */
    export const outboundSchema = ReferenceResult$outboundSchema;
    /** @deprecated use `ReferenceResult$Outbound` instead. */
    export type Outbound = ReferenceResult$Outbound;
}
