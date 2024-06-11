/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as z from "zod";

export type User = {
    /**
     * The date the user was created
     */
    createdAt?: string | null | undefined;
    /**
     * The email of the user
     */
    email?: string | null | undefined;
    /**
     * The user ID
     */
    id?: string | null | undefined;
    /**
     * The name of the user
     */
    name?: string | null | undefined;
    /**
     * The phone number of the user
     */
    phoneNumber?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The date the user was last updated
     */
    updatedAt?: string | null | undefined;
};

/** @internal */
export namespace User$ {
    export const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
        .object({
            created_at: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone_number: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            updated_at: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                created_at: "createdAt",
                phone_number: "phoneNumber",
                remote_id: "remoteId",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        email?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        phone_number?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, User> = z
        .object({
            createdAt: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phoneNumber: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                createdAt: "created_at",
                phoneNumber: "phone_number",
                remoteId: "remote_id",
                updatedAt: "updated_at",
            });
        });
}
