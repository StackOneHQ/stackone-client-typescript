/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { IamPermission, IamPermission$ } from "./iampermission";
import { z } from "zod";

export type IamPolicy = {
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    id?: string | null | undefined;
    /**
     * The name of the policy.
     */
    name?: string | null | undefined;
    /**
     * The set of permissions associated with the policy.
     */
    permissions?: Array<IamPermission> | null | undefined;
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace IamPolicy$ {
    export type Inbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        permissions?: Array<IamPermission$.Inbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamPolicy, z.ZodTypeDef, Inbound> = z
        .object({
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            permissions: z.nullable(z.array(IamPermission$.inboundSchema)).optional(),
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
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        permissions?: Array<IamPermission$.Outbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPolicy> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            permissions: z.nullable(z.array(IamPermission$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.permissions === undefined ? null : { permissions: v.permissions }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
