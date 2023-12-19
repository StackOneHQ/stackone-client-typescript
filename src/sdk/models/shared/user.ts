/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type User = {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    name: string;
    phone: string;
};

/** @internal */
export namespace User$ {
    export type Inbound = {
        email: string;
        first_name: string;
        id: string;
        last_name: string;
        name: string;
        phone: string;
    };

    export const inboundSchema: z.ZodType<User, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
            first_name: z.string(),
            id: z.string(),
            last_name: z.string(),
            name: z.string(),
            phone: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                firstName: v.first_name,
                id: v.id,
                lastName: v.last_name,
                name: v.name,
                phone: v.phone,
            };
        });

    export type Outbound = {
        email: string;
        first_name: string;
        id: string;
        last_name: string;
        name: string;
        phone: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, User> = z
        .object({
            email: z.string(),
            firstName: z.string(),
            id: z.string(),
            lastName: z.string(),
            name: z.string(),
            phone: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                first_name: v.firstName,
                id: v.id,
                last_name: v.lastName,
                name: v.name,
                phone: v.phone,
            };
        });
}
