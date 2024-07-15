/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type InterviewStage = {
    /**
     * Interview Stage created date
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    name?: string | null | undefined;
    order?: number | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Interview Stage updated date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const InterviewStage$inboundSchema: z.ZodType<InterviewStage, z.ZodTypeDef, unknown> = z
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
        name: z.nullable(z.string()).optional(),
        order: z.nullable(z.number()).optional(),
        remote_id: z.nullable(z.string()).optional(),
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
export type InterviewStage$Outbound = {
    created_at?: string | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    order?: number | null | undefined;
    remote_id?: string | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const InterviewStage$outboundSchema: z.ZodType<
    InterviewStage$Outbound,
    z.ZodTypeDef,
    InterviewStage
> = z
    .object({
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        order: z.nullable(z.number()).optional(),
        remoteId: z.nullable(z.string()).optional(),
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
export namespace InterviewStage$ {
    /** @deprecated use `InterviewStage$inboundSchema` instead. */
    export const inboundSchema = InterviewStage$inboundSchema;
    /** @deprecated use `InterviewStage$outboundSchema` instead. */
    export const outboundSchema = InterviewStage$outboundSchema;
    /** @deprecated use `InterviewStage$Outbound` instead. */
    export type Outbound = InterviewStage$Outbound;
}
