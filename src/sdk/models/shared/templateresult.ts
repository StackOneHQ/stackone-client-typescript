/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse";
import { Template, Template$ } from "./template";
import * as z from "zod";

export type TemplateResult = {
    data: Template;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace TemplateResult$ {
    export const inboundSchema: z.ZodType<TemplateResult, z.ZodTypeDef, unknown> = z.object({
        data: Template$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Template$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TemplateResult> = z.object({
        data: Template$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
