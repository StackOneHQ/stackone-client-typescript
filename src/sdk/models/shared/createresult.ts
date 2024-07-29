/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    CreateResultDataApiModel,
    CreateResultDataApiModel$inboundSchema,
    CreateResultDataApiModel$Outbound,
    CreateResultDataApiModel$outboundSchema,
} from "./createresultdataapimodel.js";
import * as z from "zod";

export type CreateResult = {
    data: CreateResultDataApiModel;
    message: string;
    statusCode: number;
    timestamp: Date;
};

/** @internal */
export const CreateResult$inboundSchema: z.ZodType<CreateResult, z.ZodTypeDef, unknown> = z.object({
    data: CreateResultDataApiModel$inboundSchema,
    message: z.string(),
    statusCode: z.number(),
    timestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
});

/** @internal */
export type CreateResult$Outbound = {
    data: CreateResultDataApiModel$Outbound;
    message: string;
    statusCode: number;
    timestamp: string;
};

/** @internal */
export const CreateResult$outboundSchema: z.ZodType<
    CreateResult$Outbound,
    z.ZodTypeDef,
    CreateResult
> = z.object({
    data: CreateResultDataApiModel$outboundSchema,
    message: z.string(),
    statusCode: z.number(),
    timestamp: z.date().transform((v) => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateResult$ {
    /** @deprecated use `CreateResult$inboundSchema` instead. */
    export const inboundSchema = CreateResult$inboundSchema;
    /** @deprecated use `CreateResult$outboundSchema` instead. */
    export const outboundSchema = CreateResult$outboundSchema;
    /** @deprecated use `CreateResult$Outbound` instead. */
    export type Outbound = CreateResult$Outbound;
}
