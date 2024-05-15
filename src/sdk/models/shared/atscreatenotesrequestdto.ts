/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NoteContentApiModel, NoteContentApiModel$ } from "./notecontentapimodel";
import * as z from "zod";

export type AtsCreateNotesRequestDto4 = {};

/**
 * The source value of the notes visibility.
 */
export type AtsCreateNotesRequestDtoSourceValue =
    | AtsCreateNotesRequestDto4
    | string
    | number
    | boolean;

/**
 * The visibility of the notes.
 */
export enum AtsCreateNotesRequestDtoValue {
    Private = "private",
    Public = "public",
}

/**
 * Visibility of the note
 */
export type Visibility = {
    /**
     * The source value of the notes visibility.
     */
    sourceValue?: AtsCreateNotesRequestDto4 | string | number | boolean | null | undefined;
    /**
     * The visibility of the notes.
     */
    value?: AtsCreateNotesRequestDtoValue | null | undefined;
};

export type AtsCreateNotesRequestDto = {
    /**
     * Unique identifier of the author
     */
    authorId?: string | null | undefined;
    content?: Array<NoteContentApiModel> | null | undefined;
    /**
     * Visibility of the note
     */
    visibility?: Visibility | null | undefined;
};

/** @internal */
export namespace AtsCreateNotesRequestDto4$ {
    export const inboundSchema: z.ZodType<AtsCreateNotesRequestDto4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateNotesRequestDto4> =
        z.object({});
}

/** @internal */
export namespace AtsCreateNotesRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        AtsCreateNotesRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => AtsCreateNotesRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = AtsCreateNotesRequestDto4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsCreateNotesRequestDtoSourceValue
    > = z.union([
        z.lazy(() => AtsCreateNotesRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace AtsCreateNotesRequestDtoValue$ {
    export const inboundSchema = z.nativeEnum(AtsCreateNotesRequestDtoValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Visibility$ {
    export const inboundSchema: z.ZodType<Visibility, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateNotesRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateNotesRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AtsCreateNotesRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Visibility> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateNotesRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateNotesRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AtsCreateNotesRequestDto$ {
    export const inboundSchema: z.ZodType<AtsCreateNotesRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            author_id: z.nullable(z.string()).optional(),
            content: z.nullable(z.array(NoteContentApiModel$.inboundSchema)).optional(),
            visibility: z.nullable(z.lazy(() => Visibility$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.author_id === undefined ? null : { authorId: v.author_id }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.visibility === undefined ? null : { visibility: v.visibility }),
            };
        });

    export type Outbound = {
        author_id?: string | null | undefined;
        content?: Array<NoteContentApiModel$.Outbound> | null | undefined;
        visibility?: Visibility$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateNotesRequestDto> = z
        .object({
            authorId: z.nullable(z.string()).optional(),
            content: z.nullable(z.array(NoteContentApiModel$.outboundSchema)).optional(),
            visibility: z.nullable(z.lazy(() => Visibility$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.authorId === undefined ? null : { author_id: v.authorId }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.visibility === undefined ? null : { visibility: v.visibility }),
            };
        });
}
