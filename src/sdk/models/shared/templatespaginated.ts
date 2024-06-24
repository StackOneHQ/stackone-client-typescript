/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import { Template, Template$ } from "./template.js";
import * as z from "zod";

export type TemplatesPaginated = {
    data: Array<Template>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace TemplatesPaginated$ {
    export const inboundSchema: z.ZodType<TemplatesPaginated, z.ZodTypeDef, unknown> = z
        .object({
            data: z.array(Template$.inboundSchema),
            next: z.nullable(z.string()).optional(),
            next_page: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                next_page: "nextPage",
            });
        });

    export type Outbound = {
        data: Array<Template$.Outbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TemplatesPaginated> = z
        .object({
            data: z.array(Template$.outboundSchema),
            next: z.nullable(z.string()).optional(),
            nextPage: z.nullable(z.string()).optional(),
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                nextPage: "next_page",
            });
        });
}
