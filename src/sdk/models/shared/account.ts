/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { AccountAddress, AccountAddress$ } from "./accountaddress.js";
import * as z from "zod";

export type Account = {
    addresses?: Array<AccountAddress> | null | undefined;
    annualRevenue?: string | null | undefined;
    /**
     * Timestamp when the account was created
     */
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Values of the industries
     */
    industries?: Array<string> | null | undefined;
    name?: string | null | undefined;
    ownerId?: string | null | undefined;
    /**
     * List of account phone numbers
     */
    phoneNumbers?: Array<string> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's unique identifier of the owner
     */
    remoteOwnerId?: string | null | undefined;
    /**
     * Timestamp when the account was last updated
     */
    updatedAt?: Date | null | undefined;
    website?: string | null | undefined;
};

/** @internal */
export namespace Account$ {
    export const inboundSchema: z.ZodType<Account, z.ZodTypeDef, unknown> = z
        .object({
            addresses: z.nullable(z.array(AccountAddress$.inboundSchema)).optional(),
            annual_revenue: z.nullable(z.string()).optional(),
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
            industries: z.nullable(z.array(z.string())).optional(),
            name: z.nullable(z.string()).optional(),
            owner_id: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(z.string())).optional(),
            remote_id: z.nullable(z.string()).optional(),
            remote_owner_id: z.nullable(z.string()).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            website: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                annual_revenue: "annualRevenue",
                created_at: "createdAt",
                owner_id: "ownerId",
                phone_numbers: "phoneNumbers",
                remote_id: "remoteId",
                remote_owner_id: "remoteOwnerId",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        addresses?: Array<AccountAddress$.Outbound> | null | undefined;
        annual_revenue?: string | null | undefined;
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        industries?: Array<string> | null | undefined;
        name?: string | null | undefined;
        owner_id?: string | null | undefined;
        phone_numbers?: Array<string> | null | undefined;
        remote_id?: string | null | undefined;
        remote_owner_id?: string | null | undefined;
        updated_at?: string | null | undefined;
        website?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Account> = z
        .object({
            addresses: z.nullable(z.array(AccountAddress$.outboundSchema)).optional(),
            annualRevenue: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            industries: z.nullable(z.array(z.string())).optional(),
            name: z.nullable(z.string()).optional(),
            ownerId: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(z.string())).optional(),
            remoteId: z.nullable(z.string()).optional(),
            remoteOwnerId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            website: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                annualRevenue: "annual_revenue",
                createdAt: "created_at",
                ownerId: "owner_id",
                phoneNumbers: "phone_numbers",
                remoteId: "remote_id",
                remoteOwnerId: "remote_owner_id",
                updatedAt: "updated_at",
            });
        });
}
