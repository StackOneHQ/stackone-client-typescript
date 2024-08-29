/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Category = {
    /**
     * Whether the category is active and therefore available for use
     */
    active?: boolean | null | undefined;
    /**
     * The ID associated with this category
     */
    id?: string | null | undefined;
    /**
     * The name associated with this category
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Custom Unified Fields configured in your StackOne project
     */
    unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Category$inboundSchema: z.ZodType<Category, z.ZodTypeDef, unknown> = z
    .object({
        active: z.nullable(z.boolean()).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        unified_custom_fields: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remote_id: "remoteId",
            unified_custom_fields: "unifiedCustomFields",
        });
    });

/** @internal */
export type Category$Outbound = {
    active?: boolean | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    remote_id?: string | null | undefined;
    unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Category$outboundSchema: z.ZodType<Category$Outbound, z.ZodTypeDef, Category> = z
    .object({
        active: z.nullable(z.boolean()).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remoteId: "remote_id",
            unifiedCustomFields: "unified_custom_fields",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Category$ {
    /** @deprecated use `Category$inboundSchema` instead. */
    export const inboundSchema = Category$inboundSchema;
    /** @deprecated use `Category$outboundSchema` instead. */
    export const outboundSchema = Category$outboundSchema;
    /** @deprecated use `Category$Outbound` instead. */
    export type Outbound = Category$Outbound;
}
