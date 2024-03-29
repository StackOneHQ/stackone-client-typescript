/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Department = {
    id?: string | null | undefined;
    name?: string | null | undefined;
};

/** @internal */
export namespace Department$ {
    export type Inbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Department, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Department> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
