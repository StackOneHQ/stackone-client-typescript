/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateResult = {
    message: string;
    statusCode: number;
    timestamp: Date;
};

/** @internal */
export const UpdateResult$inboundSchema: z.ZodType<UpdateResult, z.ZodTypeDef, unknown> = z.object({
    message: z.string(),
    statusCode: z.number(),
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type UpdateResult$Outbound = {
    message: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const UpdateResult$outboundSchema: z.ZodType<
    UpdateResult$Outbound,
    z.ZodTypeDef,
    UpdateResult
> = z.object({
    message: z.string(),
    statusCode: z.number(),
    timestamp: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateResult$ {
    /** @deprecated use `UpdateResult$inboundSchema` instead. */
    export const inboundSchema = UpdateResult$inboundSchema;
    /** @deprecated use `UpdateResult$outboundSchema` instead. */
    export const outboundSchema = UpdateResult$outboundSchema;
    /** @deprecated use `UpdateResult$Outbound` instead. */
    export type Outbound = UpdateResult$Outbound;
}
