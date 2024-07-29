/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import {
    IamResource,
    IamResource$inboundSchema,
    IamResource$Outbound,
    IamResource$outboundSchema,
} from "./iamresource.js";
import * as z from "zod";

export type IamPermission4 = {};

export type IamPermissionSourceValue = IamPermission4 | string | number | boolean;

/**
 * The type of the permission, e.g. read, read_write, delete, etc.
 */
export enum IamPermissionValue {
    Read = "read",
    ReadWrite = "read_write",
    Approve = "approve",
    Delete = "delete",
    Use = "use",
    Export = "export",
    UnmappedValue = "unmapped_value",
}
/**
 * The type of the permission, e.g. read, read_write, delete, etc.
 */
export type IamPermissionValueOpen = OpenEnum<typeof IamPermissionValue>;

export type IamPermissionType = {
    sourceValue?: IamPermission4 | string | number | boolean | null | undefined;
    /**
     * The type of the permission, e.g. read, read_write, delete, etc.
     */
    value?: IamPermissionValueOpen | null | undefined;
};

export type IamPermission = {
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the permission.
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The resources that the permission applies to.
     */
    resources?: Array<IamResource> | null | undefined;
    type?: IamPermissionType | null | undefined;
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const IamPermission4$inboundSchema: z.ZodType<IamPermission4, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type IamPermission4$Outbound = {};

/** @internal */
export const IamPermission4$outboundSchema: z.ZodType<
    IamPermission4$Outbound,
    z.ZodTypeDef,
    IamPermission4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPermission4$ {
    /** @deprecated use `IamPermission4$inboundSchema` instead. */
    export const inboundSchema = IamPermission4$inboundSchema;
    /** @deprecated use `IamPermission4$outboundSchema` instead. */
    export const outboundSchema = IamPermission4$outboundSchema;
    /** @deprecated use `IamPermission4$Outbound` instead. */
    export type Outbound = IamPermission4$Outbound;
}

/** @internal */
export const IamPermissionSourceValue$inboundSchema: z.ZodType<
    IamPermissionSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => IamPermission4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type IamPermissionSourceValue$Outbound = IamPermission4$Outbound | string | number | boolean;

/** @internal */
export const IamPermissionSourceValue$outboundSchema: z.ZodType<
    IamPermissionSourceValue$Outbound,
    z.ZodTypeDef,
    IamPermissionSourceValue
> = z.union([z.lazy(() => IamPermission4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPermissionSourceValue$ {
    /** @deprecated use `IamPermissionSourceValue$inboundSchema` instead. */
    export const inboundSchema = IamPermissionSourceValue$inboundSchema;
    /** @deprecated use `IamPermissionSourceValue$outboundSchema` instead. */
    export const outboundSchema = IamPermissionSourceValue$outboundSchema;
    /** @deprecated use `IamPermissionSourceValue$Outbound` instead. */
    export type Outbound = IamPermissionSourceValue$Outbound;
}

/** @internal */
export const IamPermissionValue$inboundSchema: z.ZodType<
    IamPermissionValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(IamPermissionValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const IamPermissionValue$outboundSchema: z.ZodType<
    IamPermissionValueOpen,
    z.ZodTypeDef,
    IamPermissionValueOpen
> = z.union([z.nativeEnum(IamPermissionValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPermissionValue$ {
    /** @deprecated use `IamPermissionValue$inboundSchema` instead. */
    export const inboundSchema = IamPermissionValue$inboundSchema;
    /** @deprecated use `IamPermissionValue$outboundSchema` instead. */
    export const outboundSchema = IamPermissionValue$outboundSchema;
}

/** @internal */
export const IamPermissionType$inboundSchema: z.ZodType<IamPermissionType, z.ZodTypeDef, unknown> =
    z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => IamPermission4$inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(IamPermissionValue$inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

/** @internal */
export type IamPermissionType$Outbound = {
    source_value?: IamPermission4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const IamPermissionType$outboundSchema: z.ZodType<
    IamPermissionType$Outbound,
    z.ZodTypeDef,
    IamPermissionType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => IamPermission4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(IamPermissionValue$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceValue: "source_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPermissionType$ {
    /** @deprecated use `IamPermissionType$inboundSchema` instead. */
    export const inboundSchema = IamPermissionType$inboundSchema;
    /** @deprecated use `IamPermissionType$outboundSchema` instead. */
    export const outboundSchema = IamPermissionType$outboundSchema;
    /** @deprecated use `IamPermissionType$Outbound` instead. */
    export type Outbound = IamPermissionType$Outbound;
}

/** @internal */
export const IamPermission$inboundSchema: z.ZodType<IamPermission, z.ZodTypeDef, unknown> = z
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
        remote_id: z.nullable(z.string()).optional(),
        resources: z.nullable(z.array(IamResource$inboundSchema)).optional(),
        type: z.nullable(z.lazy(() => IamPermissionType$inboundSchema)).optional(),
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

/** @internal */
export type IamPermission$Outbound = {
    created_at?: string | null | undefined;
    description?: string | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    remote_id?: string | null | undefined;
    resources?: Array<IamResource$Outbound> | null | undefined;
    type?: IamPermissionType$Outbound | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const IamPermission$outboundSchema: z.ZodType<
    IamPermission$Outbound,
    z.ZodTypeDef,
    IamPermission
> = z
    .object({
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        description: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        resources: z.nullable(z.array(IamResource$outboundSchema)).optional(),
        type: z.nullable(z.lazy(() => IamPermissionType$outboundSchema)).optional(),
        updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            remoteId: "remote_id",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPermission$ {
    /** @deprecated use `IamPermission$inboundSchema` instead. */
    export const inboundSchema = IamPermission$inboundSchema;
    /** @deprecated use `IamPermission$outboundSchema` instead. */
    export const outboundSchema = IamPermission$outboundSchema;
    /** @deprecated use `IamPermission$Outbound` instead. */
    export type Outbound = IamPermission$Outbound;
}
