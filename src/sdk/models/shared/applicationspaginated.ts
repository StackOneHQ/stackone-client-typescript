/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { Application, Application$ } from "./application.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type ApplicationsPaginated = {
    data: Array<Application>;
    next?: string | null | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    nextPage?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ApplicationsPaginated$ {
    export const inboundSchema: z.ZodType<ApplicationsPaginated, z.ZodTypeDef, unknown> = z
        .object({
            data: z.array(Application$.inboundSchema),
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
        data: Array<Application$.Outbound>;
        next?: string | null | undefined;
        next_page?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationsPaginated> = z
        .object({
            data: z.array(Application$.outboundSchema),
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
