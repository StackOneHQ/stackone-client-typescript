/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Credentials = {};

export type SetupInformation = {};

export enum LinkedAccountStatus {
    Active = "active",
    Inactive = "inactive",
    Error = "error",
}

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
    status: LinkedAccountStatus;
    statusReasons?: Array<string> | null | undefined;
    updatedAt: Date;
};

/** @internal */
export namespace Credentials$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Credentials, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Credentials> = z.object({});
}

/** @internal */
export namespace SetupInformation$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<SetupInformation, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SetupInformation> = z.object({});
}

/** @internal */
export const LinkedAccountStatus$: z.ZodNativeEnum<typeof LinkedAccountStatus> =
    z.nativeEnum(LinkedAccountStatus);

/** @internal */
export namespace LinkedAccount$ {
    export type Inbound = {
        created_at: string;
        credentials?: Credentials$.Inbound | null | undefined;
        id: string;
        label?: string | null | undefined;
        origin_owner_id: string;
        origin_owner_name: string;
        origin_username?: string | null | undefined;
        provider: string;
        setup_information?: SetupInformation$.Inbound | null | undefined;
        status: LinkedAccountStatus;
        status_reasons?: Array<string> | null | undefined;
        updated_at: string;
    };

    export const inboundSchema: z.ZodType<LinkedAccount, z.ZodTypeDef, Inbound> = z
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
            status: LinkedAccountStatus$,
            status_reasons: z.nullable(z.array(z.string())).optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                createdAt: v.created_at,
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                id: v.id,
                ...(v.label === undefined ? null : { label: v.label }),
                originOwnerId: v.origin_owner_id,
                originOwnerName: v.origin_owner_name,
                ...(v.origin_username === undefined ? null : { originUsername: v.origin_username }),
                provider: v.provider,
                ...(v.setup_information === undefined
                    ? null
                    : { setupInformation: v.setup_information }),
                status: v.status,
                ...(v.status_reasons === undefined ? null : { statusReasons: v.status_reasons }),
                updatedAt: v.updated_at,
            };
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
        status: LinkedAccountStatus;
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
            status: LinkedAccountStatus$,
            statusReasons: z.nullable(z.array(z.string())).optional(),
            updatedAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                created_at: v.createdAt,
                ...(v.credentials === undefined ? null : { credentials: v.credentials }),
                id: v.id,
                ...(v.label === undefined ? null : { label: v.label }),
                origin_owner_id: v.originOwnerId,
                origin_owner_name: v.originOwnerName,
                ...(v.originUsername === undefined ? null : { origin_username: v.originUsername }),
                provider: v.provider,
                ...(v.setupInformation === undefined
                    ? null
                    : { setup_information: v.setupInformation }),
                status: v.status,
                ...(v.statusReasons === undefined ? null : { status_reasons: v.statusReasons }),
                updated_at: v.updatedAt,
            };
        });
}
