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
    export const inboundSchema: z.ZodType<CandidateEmail, z.ZodTypeDef, unknown> = z.object({
        type: z.nullable(z.string()).optional(),
        value: z.nullable(z.string()).optional(),
    });

    export type Outbound = {
        type?: string | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CandidateEmail> = z.object({
        type: z.nullable(z.string()).optional(),
        value: z.nullable(z.string()).optional(),
    });
}
