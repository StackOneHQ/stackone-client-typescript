/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Company = {
    /**
     * The created_at date
     */
    createdAt?: Date | null | undefined;
    /**
     * The display name of the company
     */
    displayName?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the company
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The updated_at date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Company$ {
    export type Inbound = {
        created_at?: string | null | undefined;
        display_name?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Company, z.ZodTypeDef, Inbound> = z
        .object({
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            display_name: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.display_name === undefined ? null : { displayName: v.display_name }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        display_name?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Company> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            displayName: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.displayName === undefined ? null : { display_name: v.displayName }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
