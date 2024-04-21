/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AtsDocumentApiModel, AtsDocumentApiModel$ } from "./atsdocumentapimodel";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type AtsDocumentResult = {
    data: AtsDocumentApiModel;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace AtsDocumentResult$ {
    export type Inbound = {
        data: AtsDocumentApiModel$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AtsDocumentResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: AtsDocumentApiModel$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: AtsDocumentApiModel$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsDocumentResult> = z
        .object({
            data: AtsDocumentApiModel$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}