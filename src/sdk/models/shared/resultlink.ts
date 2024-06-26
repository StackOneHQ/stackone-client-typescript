/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ResultLink = {
    /**
     * The label of the result link.
     */
    label?: string | null | undefined;
    /**
     * The URL of the result link.
     */
    url?: string | null | undefined;
};

/** @internal */
export namespace ResultLink$ {
    export const inboundSchema: z.ZodType<ResultLink, z.ZodTypeDef, unknown> = z.object({
        label: z.nullable(z.string()).optional(),
        url: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        label?: string | null | undefined;
        url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResultLink> = z.object({
        label: z.nullable(z.string()).optional(),
        url: z.nullable(z.string()).optional(),
    });
}
