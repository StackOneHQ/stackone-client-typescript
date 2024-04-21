/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type HRISGroup4 = {};

export type HRISGroupSourceValue = HRISGroup4 | string | number | boolean;

export enum HRISGroupValue {
    Workspace = "workspace",
    Team = "team",
    Department = "department",
    Group = "group",
    UnmappedValue = "unmapped_value",
}

/**
 * The type of the group
 */
export type HRISGroupType = {
    sourceValue?: HRISGroup4 | string | number | boolean | null | undefined;
    value?: HRISGroupValue | null | undefined;
};

export type HRISGroup = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the group
     */
    name?: string | null | undefined;
    /**
     * The list of parent group ids of the given group
     */
    parentIds?: Array<string> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The type of the group
     */
    type?: HRISGroupType | null | undefined;
};

/** @internal */
export namespace HRISGroup4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<HRISGroup4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroup4> = z.object({});
}

/** @internal */
export namespace HRISGroupSourceValue$ {
    export type Inbound = HRISGroup4$.Inbound | string | number | boolean;

    export type Outbound = HRISGroup4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<HRISGroupSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => HRISGroup4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroupSourceValue> = z.union([
        z.lazy(() => HRISGroup4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const HRISGroupValue$: z.ZodNativeEnum<typeof HRISGroupValue> = z.nativeEnum(HRISGroupValue);

/** @internal */
export namespace HRISGroupType$ {
    export type Inbound = {
        source_value?: HRISGroup4$.Inbound | string | number | boolean | null | undefined;
        value?: HRISGroupValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<HRISGroupType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => HRISGroup4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HRISGroupValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: HRISGroup4$.Outbound | string | number | boolean | null | undefined;
        value?: HRISGroupValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroupType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HRISGroup4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HRISGroupValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HRISGroup$ {
    export type Inbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        parent_ids?: Array<string> | null | undefined;
        remote_id?: string | null | undefined;
        type?: HRISGroupType$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<HRISGroup, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            parent_ids: z.nullable(z.array(z.string())).optional(),
            remote_id: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => HRISGroupType$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.parent_ids === undefined ? null : { parentIds: v.parent_ids }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        parent_ids?: Array<string> | null | undefined;
        remote_id?: string | null | undefined;
        type?: HRISGroupType$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroup> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            parentIds: z.nullable(z.array(z.string())).optional(),
            remoteId: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => HRISGroupType$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.parentIds === undefined ? null : { parent_ids: v.parentIds }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}