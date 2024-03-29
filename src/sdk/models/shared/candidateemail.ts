/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CandidateEmail = {
    /**
     * Type of the email
     */
    type?: string | null | undefined;
    /**
     * Email value
     */
    value?: string | null | undefined;
};

/** @internal */
export namespace CandidateEmail$ {
    export type Inbound = {
        type?: string | null | undefined;
        value?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<CandidateEmail, z.ZodTypeDef, Inbound> = z
        .object({
            type: z.nullable(z.string()).optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        type?: string | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CandidateEmail> = z
        .object({
            type: z.nullable(z.string()).optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
