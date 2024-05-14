/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Department = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export namespace Department$ {
    export const inboundSchema: z.ZodType<Department, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Department> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
            };
        });
}
