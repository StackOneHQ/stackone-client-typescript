/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type NoteContentApiModel = {
    /**
     * Body of the note
     */
    body?: string | null | undefined;
};

/** @internal */
export const NoteContentApiModel$inboundSchema: z.ZodType<
    NoteContentApiModel,
    z.ZodTypeDef,
    unknown
> = z.object({
    body: z.nullable(z.string()).optional(),
});

/** @internal */
export type NoteContentApiModel$Outbound = {
    body?: string | null | undefined;
};

/** @internal */
export const NoteContentApiModel$outboundSchema: z.ZodType<
    NoteContentApiModel$Outbound,
    z.ZodTypeDef,
    NoteContentApiModel
> = z.object({
    body: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NoteContentApiModel$ {
    /** @deprecated use `NoteContentApiModel$inboundSchema` instead. */
    export const inboundSchema = NoteContentApiModel$inboundSchema;
    /** @deprecated use `NoteContentApiModel$outboundSchema` instead. */
    export const outboundSchema = NoteContentApiModel$outboundSchema;
    /** @deprecated use `NoteContentApiModel$Outbound` instead. */
    export type Outbound = NoteContentApiModel$Outbound;
}
