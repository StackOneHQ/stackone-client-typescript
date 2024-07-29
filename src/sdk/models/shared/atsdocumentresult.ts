/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AtsDocumentApiModel,
    AtsDocumentApiModel$inboundSchema,
    AtsDocumentApiModel$Outbound,
    AtsDocumentApiModel$outboundSchema,
} from "./atsdocumentapimodel.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type AtsDocumentResult = {
    data: AtsDocumentApiModel;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const AtsDocumentResult$inboundSchema: z.ZodType<AtsDocumentResult, z.ZodTypeDef, unknown> =
    z.object({
        data: AtsDocumentApiModel$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type AtsDocumentResult$Outbound = {
    data: AtsDocumentApiModel$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const AtsDocumentResult$outboundSchema: z.ZodType<
    AtsDocumentResult$Outbound,
    z.ZodTypeDef,
    AtsDocumentResult
> = z.object({
    data: AtsDocumentApiModel$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsDocumentResult$ {
    /** @deprecated use `AtsDocumentResult$inboundSchema` instead. */
    export const inboundSchema = AtsDocumentResult$inboundSchema;
    /** @deprecated use `AtsDocumentResult$outboundSchema` instead. */
    export const outboundSchema = AtsDocumentResult$outboundSchema;
    /** @deprecated use `AtsDocumentResult$Outbound` instead. */
    export type Outbound = AtsDocumentResult$Outbound;
}
