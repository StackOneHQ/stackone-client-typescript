/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
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
export type HRISGroupValueOpen = OpenEnum<typeof HRISGroupValue>;

/**
 * The type of the group
 */
export type HRISGroupType = {
    sourceValue?: HRISGroup4 | string | number | boolean | null | undefined;
    value?: HRISGroupValueOpen | null | undefined;
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
     * The list of group owner ids of the given group
     */
    ownerIds?: Array<string> | null | undefined;
    /**
     * The list of parent group ids of the given group
     */
    parentIds?: Array<string> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's list of parent group ids of the given group
     */
    remoteParentIds?: Array<string> | null | undefined;
    /**
     * The type of the group
     */
    type?: HRISGroupType | null | undefined;
};

/** @internal */
export namespace HRISGroup4$ {
    export const inboundSchema: z.ZodType<HRISGroup4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroup4> = z.object({});
}

/** @internal */
export namespace HRISGroupSourceValue$ {
    export const inboundSchema: z.ZodType<HRISGroupSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => HRISGroup4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = HRISGroup4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroupSourceValue> = z.union([
        z.lazy(() => HRISGroup4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace HRISGroupValue$ {
    export const inboundSchema: z.ZodType<HRISGroupValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(HRISGroupValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema: z.ZodType<HRISGroupValueOpen, z.ZodTypeDef, HRISGroupValueOpen> =
        z.union([z.nativeEnum(HRISGroupValue), z.string().and(z.custom<Unrecognized<string>>())]);
}

/** @internal */
export namespace HRISGroupType$ {
    export const inboundSchema: z.ZodType<HRISGroupType, z.ZodTypeDef, unknown> = z
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
            value: z.nullable(HRISGroupValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?: HRISGroup4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
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
            value: z.nullable(HRISGroupValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace HRISGroup$ {
    export const inboundSchema: z.ZodType<HRISGroup, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            owner_ids: z.nullable(z.array(z.string())).optional(),
            parent_ids: z.nullable(z.array(z.string())).optional(),
            remote_id: z.nullable(z.string()).optional(),
            remote_parent_ids: z.nullable(z.array(z.string())).optional(),
            type: z.nullable(z.lazy(() => HRISGroupType$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                owner_ids: "ownerIds",
                parent_ids: "parentIds",
                remote_id: "remoteId",
                remote_parent_ids: "remoteParentIds",
            });
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        owner_ids?: Array<string> | null | undefined;
        parent_ids?: Array<string> | null | undefined;
        remote_id?: string | null | undefined;
        remote_parent_ids?: Array<string> | null | undefined;
        type?: HRISGroupType$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISGroup> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            ownerIds: z.nullable(z.array(z.string())).optional(),
            parentIds: z.nullable(z.array(z.string())).optional(),
            remoteId: z.nullable(z.string()).optional(),
            remoteParentIds: z.nullable(z.array(z.string())).optional(),
            type: z.nullable(z.lazy(() => HRISGroupType$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ownerIds: "owner_ids",
                parentIds: "parent_ids",
                remoteId: "remote_id",
                remoteParentIds: "remote_parent_ids",
            });
        });
}
