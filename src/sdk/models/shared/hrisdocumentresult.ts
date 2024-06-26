/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HrisDocumentApiModel, HrisDocumentApiModel$ } from "./hrisdocumentapimodel.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type HrisDocumentResult = {
    data: HrisDocumentApiModel;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace HrisDocumentResult$ {
    export const inboundSchema: z.ZodType<HrisDocumentResult, z.ZodTypeDef, unknown> = z.object({
        data: HrisDocumentApiModel$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: HrisDocumentApiModel$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisDocumentResult> = z.object({
        data: HrisDocumentApiModel$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
