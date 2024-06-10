/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types";
import * as z from "zod";

export type Credentials = {};

export type SetupInformation = {};

export enum LinkedAccountStatus {
    Active = "active",
    Inactive = "inactive",
    Error = "error",
}
export type LinkedAccountStatusOpen = OpenEnum<typeof LinkedAccountStatus>;

export type LinkedAccount = {
    createdAt: Date;
    credentials?: Credentials | null | undefined;
    id: string;
    label?: string | null | undefined;
    originOwnerId: string;
    originOwnerName: string;
    originUsername?: string | null | undefined;
    provider: string;
    setupInformation?: SetupInformation | null | undefined;
    status: LinkedAccountStatusOpen;
    statusReasons?: Array<string> | null | undefined;
    updatedAt: Date;
};

/** @internal */
export namespace Credentials$ {
    export const inboundSchema: z.ZodType<Credentials, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Credentials> = z.object({});
}

/** @internal */
export namespace SetupInformation$ {
    export const inboundSchema: z.ZodType<SetupInformation, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SetupInformation> = z.object({});
}

/** @internal */
export namespace LinkedAccountStatus$ {
    export const inboundSchema: z.ZodType<LinkedAccountStatusOpen, z.ZodTypeDef, unknown> = z.union(
        [z.nativeEnum(LinkedAccountStatus), z.string().transform(catchUnrecognizedEnum)]
    );

    export const outboundSchema = z.union([
        z.nativeEnum(LinkedAccountStatus),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace LinkedAccount$ {
    export const inboundSchema: z.ZodType<LinkedAccount, z.ZodTypeDef, unknown> = z
        .object({
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            credentials: z.nullable(z.lazy(() => Credentials$.inboundSchema)).optional(),
            id: z.string(),
            label: z.nullable(z.string()).optional(),
            origin_owner_id: z.string(),
            origin_owner_name: z.string(),
            origin_username: z.nullable(z.string()).optional(),
            provider: z.string(),
            setup_information: z.nullable(z.lazy(() => SetupInformation$.inboundSchema)).optional(),
            status: LinkedAccountStatus$.inboundSchema,
            status_reasons: z.nullable(z.array(z.string())).optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return remap$(v, {
                created_at: "createdAt",
                origin_owner_id: "originOwnerId",
                origin_owner_name: "originOwnerName",
                origin_username: "originUsername",
                setup_information: "setupInformation",
                status_reasons: "statusReasons",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        created_at: string;
        credentials?: Credentials$.Outbound | null | undefined;
        id: string;
        label?: string | null | undefined;
        origin_owner_id: string;
        origin_owner_name: string;
        origin_username?: string | null | undefined;
        provider: string;
        setup_information?: SetupInformation$.Outbound | null | undefined;
        status: string;
        status_reasons?: Array<string> | null | undefined;
        updated_at: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedAccount> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            credentials: z.nullable(z.lazy(() => Credentials$.outboundSchema)).optional(),
            id: z.string(),
            label: z.nullable(z.string()).optional(),
            originOwnerId: z.string(),
            originOwnerName: z.string(),
            originUsername: z.nullable(z.string()).optional(),
            provider: z.string(),
            setupInformation: z.nullable(z.lazy(() => SetupInformation$.outboundSchema)).optional(),
            status: LinkedAccountStatus$.outboundSchema,
            statusReasons: z.nullable(z.array(z.string())).optional(),
            updatedAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return remap$(v, {
                createdAt: "created_at",
                originOwnerId: "origin_owner_id",
                originOwnerName: "origin_owner_name",
                originUsername: "origin_username",
                setupInformation: "setup_information",
                statusReasons: "status_reasons",
                updatedAt: "updated_at",
            });
        });
}
