/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type IamResource4 = {};

export type IamResourceSourceValue = IamResource4 | string | number | boolean;

/**
 * The type of the resource, e.g. user, group, permission, etc.
 */
export enum IamResourceValue {
    Project = "project",
    File = "file",
    Folder = "folder",
    Product = "product",
    Property = "property",
    User = "user",
    UnmappedValue = "unmapped_value",
}

export type IamResourceType = {
    sourceValue?: IamResource4 | string | number | boolean | null | undefined;
    /**
     * The type of the resource, e.g. user, group, permission, etc.
     */
    value?: IamResourceValue | null | undefined;
};

export type IamResource = {
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The location of the resource.
     */
    location?: string | null | undefined;
    /**
     * The name of the resource.
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    type?: IamResourceType | null | undefined;
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace IamResource4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<IamResource4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamResource4> = z.object({});
}

/** @internal */
export namespace IamResourceSourceValue$ {
    export type Inbound = IamResource4$.Inbound | string | number | boolean;

    export type Outbound = IamResource4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<IamResourceSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => IamResource4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamResourceSourceValue> =
        z.union([z.lazy(() => IamResource4$.outboundSchema), z.string(), z.number(), z.boolean()]);
}

/** @internal */
export const IamResourceValue$: z.ZodNativeEnum<typeof IamResourceValue> =
    z.nativeEnum(IamResourceValue);

/** @internal */
export namespace IamResourceType$ {
    export type Inbound = {
        source_value?: IamResource4$.Inbound | string | number | boolean | null | undefined;
        value?: IamResourceValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamResourceType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => IamResource4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamResourceValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: IamResource4$.Outbound | string | number | boolean | null | undefined;
        value?: IamResourceValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamResourceType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => IamResource4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamResourceValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace IamResource$ {
    export type Inbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        type?: IamResourceType$.Inbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamResource, z.ZodTypeDef, Inbound> = z
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
            location: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => IamResourceType$.inboundSchema)).optional(),
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
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        type?: IamResourceType$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamResource> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            location: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => IamResourceType$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
