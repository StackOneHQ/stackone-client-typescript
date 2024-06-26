/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { IamPermission, IamPermission$ } from "./iampermission.js";
import * as z from "zod";

export type IamPolicy = {
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the policy.
     */
    name?: string | null | undefined;
    /**
     * The set of permissions associated with the policy.
     */
    permissions?: Array<IamPermission> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace IamPolicy$ {
    export const inboundSchema: z.ZodType<IamPolicy, z.ZodTypeDef, unknown> = z
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
            return remap$(v, {
                created_at: "createdAt",
                remote_id: "remoteId",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        permissions?: Array<IamPermission$.Outbound> | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamPolicy> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            permissions: z.nullable(z.array(IamPermission$.outboundSchema)).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                createdAt: "created_at",
                remoteId: "remote_id",
                updatedAt: "updated_at",
            });
        });
}
