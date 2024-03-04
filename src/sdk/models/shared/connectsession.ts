/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum Categories {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Iam = "iam",
    Marketing = "marketing",
    Stackone = "stackone",
}

export type ConnectSession = {
    accountId?: string | null | undefined;
    categories?: Array<Categories> | null | undefined;
    createdAt: Date;
    id: number;
    label?: string | null | undefined;
    organizationId: number;
    originOwnerId: string;
    originOwnerName: string;
    originUsername?: string | null | undefined;
    projectId: string;
    provider?: string | null | undefined;
};

/** @internal */
export const Categories$ = z.nativeEnum(Categories);

/** @internal */
export namespace ConnectSession$ {
    export type Inbound = {
        account_id?: string | null | undefined;
        categories?: Array<Categories> | null | undefined;
        created_at: string;
        id: number;
        label?: string | null | undefined;
        organization_id: number;
        origin_owner_id: string;
        origin_owner_name: string;
        origin_username?: string | null | undefined;
        project_id: string;
        provider?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<ConnectSession, z.ZodTypeDef, Inbound> = z
        .object({
            account_id: z.nullable(z.string()).optional(),
            categories: z.nullable(z.array(Categories$)).optional(),
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            id: z.number(),
            label: z.nullable(z.string()).optional(),
            organization_id: z.number(),
            origin_owner_id: z.string(),
            origin_owner_name: z.string(),
            origin_username: z.nullable(z.string()).optional(),
            project_id: z.string(),
            provider: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.account_id === undefined ? null : { accountId: v.account_id }),
                ...(v.categories === undefined ? null : { categories: v.categories }),
                createdAt: v.created_at,
                id: v.id,
                ...(v.label === undefined ? null : { label: v.label }),
                organizationId: v.organization_id,
                originOwnerId: v.origin_owner_id,
                originOwnerName: v.origin_owner_name,
                ...(v.origin_username === undefined ? null : { originUsername: v.origin_username }),
                projectId: v.project_id,
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });

    export type Outbound = {
        account_id?: string | null | undefined;
        categories?: Array<Categories> | null | undefined;
        created_at: string;
        id: number;
        label?: string | null | undefined;
        organization_id: number;
        origin_owner_id: string;
        origin_owner_name: string;
        origin_username?: string | null | undefined;
        project_id: string;
        provider?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectSession> = z
        .object({
            accountId: z.nullable(z.string()).optional(),
            categories: z.nullable(z.array(Categories$)).optional(),
            createdAt: z.date().transform((v) => v.toISOString()),
            id: z.number(),
            label: z.nullable(z.string()).optional(),
            organizationId: z.number(),
            originOwnerId: z.string(),
            originOwnerName: z.string(),
            originUsername: z.nullable(z.string()).optional(),
            projectId: z.string(),
            provider: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.accountId === undefined ? null : { account_id: v.accountId }),
                ...(v.categories === undefined ? null : { categories: v.categories }),
                created_at: v.createdAt,
                id: v.id,
                ...(v.label === undefined ? null : { label: v.label }),
                organization_id: v.organizationId,
                origin_owner_id: v.originOwnerId,
                origin_owner_name: v.originOwnerName,
                ...(v.originUsername === undefined ? null : { origin_username: v.originUsername }),
                project_id: v.projectId,
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });
}
