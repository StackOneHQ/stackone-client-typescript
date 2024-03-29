/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Content, Content$ } from "./content";
import { IamGroup, IamGroup$ } from "./iamgroup";
import { IamMfaTypeEnum, IamMfaTypeEnum$ } from "./iammfatypeenum";
import { IamRole, IamRole$ } from "./iamrole";
import * as z from "zod";

/**
 * The user's avatar data. This generally contains a URL within this property's 'contents' array.
 */
export type IamUserAvatar = {
    /**
     * The content of the file
     */
    contents?: Array<Content> | null | undefined;
    /**
     * The creation date of the file
     */
    createdAt?: Date | null | undefined;
    /**
     * The unique ID of the file
     */
    id?: string | null | undefined;
    /**
     * The name of the file
     */
    name?: string | null | undefined;
    /**
     * The path where the file is stored
     */
    path?: string | null | undefined;
    /**
     * The update date of the file
     */
    updatedAt?: Date | null | undefined;
};

export type IamUser4 = {};

export type IamUserSourceValue = IamUser4 | string | number | boolean;

/**
 * The status of the user, e.g. whether the user is enabled, has been disabled (eg. by an admin), or is pending (ie: awaiting approval by the user or an admin).
 */
export enum IamUserValue {
    Enabled = "enabled",
    Disabled = "disabled",
    Pending = "pending",
    UnmappedValue = "unmapped_value",
}

export type IamUserStatus = {
    sourceValue?: IamUser4 | string | number | boolean | null | undefined;
    /**
     * The status of the user, e.g. whether the user is enabled, has been disabled (eg. by an admin), or is pending (ie: awaiting approval by the user or an admin).
     */
    value?: IamUserValue | null | undefined;
};

export type IamUser = {
    /**
     * The user's avatar data. This generally contains a URL within this property's 'contents' array.
     */
    avatar?: IamUserAvatar | null | undefined;
    /**
     * The date the user was created
     */
    createdAt?: Date | null | undefined;
    firstName?: string | null | undefined;
    /**
     * List of groups the user is assigned to
     */
    groups?: Array<IamGroup> | null | undefined;
    id?: string | null | undefined;
    /**
     * Indicates if the user is a bot or service user
     */
    isBotUser?: boolean | null | undefined;
    /**
     * The date this user was last active
     */
    lastActiveAt?: Date | null | undefined;
    /**
     * The date this user last logged in
     */
    lastLoginAt?: Date | null | undefined;
    lastName?: string | null | undefined;
    /**
     * The list of Multi-Factor Authentication (MFA) types enabled for the user.
     */
    multiFactorEnabled?: Array<IamMfaTypeEnum> | null | undefined;
    /**
     * User's name which (can be a full name or display name)
     */
    name?: string | null | undefined;
    /**
     * Primary email address of the user. This is generally a work email address.
     */
    primaryEmailAddress?: string | null | undefined;
    /**
     * List of roles the user is assigned to
     */
    roles?: Array<IamRole> | null | undefined;
    status?: IamUserStatus | null | undefined;
    /**
     * The date the user was created
     */
    updatedAt?: Date | null | undefined;
    username?: string | null | undefined;
};

/** @internal */
export namespace IamUserAvatar$ {
    export type Inbound = {
        contents?: Array<Content$.Inbound> | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        path?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamUserAvatar, z.ZodTypeDef, Inbound> = z
        .object({
            contents: z.nullable(z.array(Content$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            path: z.nullable(z.string()).optional(),
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
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        contents?: Array<Content$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        path?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUserAvatar> = z
        .object({
            contents: z.nullable(z.array(Content$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            path: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace IamUser4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<IamUser4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUser4> = z.object({});
}

/** @internal */
export namespace IamUserSourceValue$ {
    export type Inbound = IamUser4$.Inbound | string | number | boolean;

    export type Outbound = IamUser4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<IamUserSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => IamUser4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUserSourceValue> = z.union([
        z.lazy(() => IamUser4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const IamUserValue$ = z.nativeEnum(IamUserValue);

/** @internal */
export namespace IamUserStatus$ {
    export type Inbound = {
        source_value?: IamUser4$.Inbound | string | number | boolean | null | undefined;
        value?: IamUserValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamUserStatus, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => IamUser4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamUserValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: IamUser4$.Outbound | string | number | boolean | null | undefined;
        value?: IamUserValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUserStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => IamUser4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamUserValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace IamUser$ {
    export type Inbound = {
        avatar?: IamUserAvatar$.Inbound | null | undefined;
        created_at?: string | null | undefined;
        first_name?: string | null | undefined;
        groups?: Array<IamGroup$.Inbound> | null | undefined;
        id?: string | null | undefined;
        is_bot_user?: boolean | null | undefined;
        last_active_at?: string | null | undefined;
        last_login_at?: string | null | undefined;
        last_name?: string | null | undefined;
        multi_factor_enabled?: Array<IamMfaTypeEnum$.Inbound> | null | undefined;
        name?: string | null | undefined;
        primary_email_address?: string | null | undefined;
        roles?: Array<IamRole$.Inbound> | null | undefined;
        status?: IamUserStatus$.Inbound | null | undefined;
        updated_at?: string | null | undefined;
        username?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamUser, z.ZodTypeDef, Inbound> = z
        .object({
            avatar: z.nullable(z.lazy(() => IamUserAvatar$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            first_name: z.nullable(z.string()).optional(),
            groups: z.nullable(z.array(IamGroup$.inboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            is_bot_user: z.nullable(z.boolean()).optional(),
            last_active_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            last_login_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            last_name: z.nullable(z.string()).optional(),
            multi_factor_enabled: z.nullable(z.array(IamMfaTypeEnum$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            primary_email_address: z.nullable(z.string()).optional(),
            roles: z.nullable(z.array(IamRole$.inboundSchema)).optional(),
            status: z.nullable(z.lazy(() => IamUserStatus$.inboundSchema)).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            username: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.avatar === undefined ? null : { avatar: v.avatar }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.groups === undefined ? null : { groups: v.groups }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.is_bot_user === undefined ? null : { isBotUser: v.is_bot_user }),
                ...(v.last_active_at === undefined ? null : { lastActiveAt: v.last_active_at }),
                ...(v.last_login_at === undefined ? null : { lastLoginAt: v.last_login_at }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.multi_factor_enabled === undefined
                    ? null
                    : { multiFactorEnabled: v.multi_factor_enabled }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.primary_email_address === undefined
                    ? null
                    : { primaryEmailAddress: v.primary_email_address }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });

    export type Outbound = {
        avatar?: IamUserAvatar$.Outbound | null | undefined;
        created_at?: string | null | undefined;
        first_name?: string | null | undefined;
        groups?: Array<IamGroup$.Outbound> | null | undefined;
        id?: string | null | undefined;
        is_bot_user?: boolean | null | undefined;
        last_active_at?: string | null | undefined;
        last_login_at?: string | null | undefined;
        last_name?: string | null | undefined;
        multi_factor_enabled?: Array<IamMfaTypeEnum$.Outbound> | null | undefined;
        name?: string | null | undefined;
        primary_email_address?: string | null | undefined;
        roles?: Array<IamRole$.Outbound> | null | undefined;
        status?: IamUserStatus$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
        username?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamUser> = z
        .object({
            avatar: z.nullable(z.lazy(() => IamUserAvatar$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            firstName: z.nullable(z.string()).optional(),
            groups: z.nullable(z.array(IamGroup$.outboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            isBotUser: z.nullable(z.boolean()).optional(),
            lastActiveAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            lastLoginAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            lastName: z.nullable(z.string()).optional(),
            multiFactorEnabled: z.nullable(z.array(IamMfaTypeEnum$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            primaryEmailAddress: z.nullable(z.string()).optional(),
            roles: z.nullable(z.array(IamRole$.outboundSchema)).optional(),
            status: z.nullable(z.lazy(() => IamUserStatus$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            username: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.avatar === undefined ? null : { avatar: v.avatar }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.groups === undefined ? null : { groups: v.groups }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.isBotUser === undefined ? null : { is_bot_user: v.isBotUser }),
                ...(v.lastActiveAt === undefined ? null : { last_active_at: v.lastActiveAt }),
                ...(v.lastLoginAt === undefined ? null : { last_login_at: v.lastLoginAt }),
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.multiFactorEnabled === undefined
                    ? null
                    : { multi_factor_enabled: v.multiFactorEnabled }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.primaryEmailAddress === undefined
                    ? null
                    : { primary_email_address: v.primaryEmailAddress }),
                ...(v.roles === undefined ? null : { roles: v.roles }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });
}
