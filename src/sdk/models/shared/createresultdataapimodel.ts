/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type CreateResultDataApiModel = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export const CreateResultDataApiModel$inboundSchema: z.ZodType<
    CreateResultDataApiModel,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remote_id: "remoteId",
        });
    });

/** @internal */
export type CreateResultDataApiModel$Outbound = {
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
};

/** @internal */
export const CreateResultDataApiModel$outboundSchema: z.ZodType<
    CreateResultDataApiModel$Outbound,
    z.ZodTypeDef,
    CreateResultDataApiModel
> = z
    .object({
        id: z.nullable(z.string()).optional(),
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
export namespace CreateResultDataApiModel$ {
    /** @deprecated use `CreateResultDataApiModel$inboundSchema` instead. */
    export const inboundSchema = CreateResultDataApiModel$inboundSchema;
    /** @deprecated use `CreateResultDataApiModel$outboundSchema` instead. */
    export const outboundSchema = CreateResultDataApiModel$outboundSchema;
    /** @deprecated use `CreateResultDataApiModel$Outbound` instead. */
    export type Outbound = CreateResultDataApiModel$Outbound;
}
