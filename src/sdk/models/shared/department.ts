/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type Department = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export const Department$inboundSchema: z.ZodType<Department, z.ZodTypeDef, unknown> = z
    .object({
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remote_id: "remoteId",
        });
    });

/** @internal */
export type Department$Outbound = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    remote_id?: string | null | undefined;
};

/** @internal */
export const Department$outboundSchema: z.ZodType<Department$Outbound, z.ZodTypeDef, Department> = z
    .object({
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remoteId: "remote_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Department$ {
    /** @deprecated use `Department$inboundSchema` instead. */
    export const inboundSchema = Department$inboundSchema;
    /** @deprecated use `Department$outboundSchema` instead. */
    export const outboundSchema = Department$outboundSchema;
    /** @deprecated use `Department$Outbound` instead. */
    export type Outbound = Department$Outbound;
}
