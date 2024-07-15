/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import {
    ListItem,
    ListItem$inboundSchema,
    ListItem$Outbound,
    ListItem$outboundSchema,
} from "./listitem.js";
import * as z from "zod";

export type List4 = {};

/**
 * The source value of the list type.
 */
export type ListSourceValue = List4 | string | number | boolean;

/**
 * The type of the list.
 */
export enum ListValue {
    Candidates = "candidates",
    Contacts = "contacts",
    Companies = "companies",
    UnmappedValue = "unmapped_value",
}
/**
 * The type of the list.
 */
export type ListValueOpen = OpenEnum<typeof ListValue>;

/**
 * The list type
 */
export type ListType = {
    /**
     * The source value of the list type.
     */
    sourceValue?: List4 | string | number | boolean | null | undefined;
    /**
     * The type of the list.
     */
    value?: ListValueOpen | null | undefined;
};

export type List = {
    /**
     * Timestamp when the list was created
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    items?: Array<ListItem> | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The list type
     */
    type?: ListType | null | undefined;
    /**
     * Timestamp when the list was last updated
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const List4$inboundSchema: z.ZodType<List4, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type List4$Outbound = {};

/** @internal */
export const List4$outboundSchema: z.ZodType<List4$Outbound, z.ZodTypeDef, List4> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace List4$ {
    /** @deprecated use `List4$inboundSchema` instead. */
    export const inboundSchema = List4$inboundSchema;
    /** @deprecated use `List4$outboundSchema` instead. */
    export const outboundSchema = List4$outboundSchema;
    /** @deprecated use `List4$Outbound` instead. */
    export type Outbound = List4$Outbound;
}

/** @internal */
export const ListSourceValue$inboundSchema: z.ZodType<ListSourceValue, z.ZodTypeDef, unknown> =
    z.union([z.lazy(() => List4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type ListSourceValue$Outbound = List4$Outbound | string | number | boolean;

/** @internal */
export const ListSourceValue$outboundSchema: z.ZodType<
    ListSourceValue$Outbound,
    z.ZodTypeDef,
    ListSourceValue
> = z.union([z.lazy(() => List4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListSourceValue$ {
    /** @deprecated use `ListSourceValue$inboundSchema` instead. */
    export const inboundSchema = ListSourceValue$inboundSchema;
    /** @deprecated use `ListSourceValue$outboundSchema` instead. */
    export const outboundSchema = ListSourceValue$outboundSchema;
    /** @deprecated use `ListSourceValue$Outbound` instead. */
    export type Outbound = ListSourceValue$Outbound;
}

/** @internal */
export const ListValue$inboundSchema: z.ZodType<ListValueOpen, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(ListValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const ListValue$outboundSchema: z.ZodType<ListValueOpen, z.ZodTypeDef, ListValueOpen> =
    z.union([z.nativeEnum(ListValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListValue$ {
    /** @deprecated use `ListValue$inboundSchema` instead. */
    export const inboundSchema = ListValue$inboundSchema;
    /** @deprecated use `ListValue$outboundSchema` instead. */
    export const outboundSchema = ListValue$outboundSchema;
}

/** @internal */
export const ListType$inboundSchema: z.ZodType<ListType, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([z.lazy(() => List4$inboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(ListValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type ListType$Outbound = {
    source_value?: List4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const ListType$outboundSchema: z.ZodType<ListType$Outbound, z.ZodTypeDef, ListType> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([z.lazy(() => List4$outboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(ListValue$outboundSchema).optional(),
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
export namespace ListType$ {
    /** @deprecated use `ListType$inboundSchema` instead. */
    export const inboundSchema = ListType$inboundSchema;
    /** @deprecated use `ListType$outboundSchema` instead. */
    export const outboundSchema = ListType$outboundSchema;
    /** @deprecated use `ListType$Outbound` instead. */
    export type Outbound = ListType$Outbound;
}

/** @internal */
export const List$inboundSchema: z.ZodType<List, z.ZodTypeDef, unknown> = z
    .object({
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        id: z.nullable(z.string()).optional(),
        items: z.nullable(z.array(ListItem$inboundSchema)).optional(),
        name: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        type: z.nullable(z.lazy(() => ListType$inboundSchema)).optional(),
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
export type List$Outbound = {
    created_at?: string | null | undefined;
    id?: string | null | undefined;
    items?: Array<ListItem$Outbound> | null | undefined;
    name?: string | null | undefined;
    remote_id?: string | null | undefined;
    type?: ListType$Outbound | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const List$outboundSchema: z.ZodType<List$Outbound, z.ZodTypeDef, List> = z
    .object({
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        id: z.nullable(z.string()).optional(),
        items: z.nullable(z.array(ListItem$outboundSchema)).optional(),
        name: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        type: z.nullable(z.lazy(() => ListType$outboundSchema)).optional(),
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
export namespace List$ {
    /** @deprecated use `List$inboundSchema` instead. */
    export const inboundSchema = List$inboundSchema;
    /** @deprecated use `List$outboundSchema` instead. */
    export const outboundSchema = List$outboundSchema;
    /** @deprecated use `List$Outbound` instead. */
    export type Outbound = List$Outbound;
}
