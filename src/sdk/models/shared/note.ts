/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NoteContentApiModel, NoteContentApiModel$ } from "./notecontentapimodel";
import * as z from "zod";

export type Note4 = {};

/**
 * The source value of the notes visibility.
 */
export type NoteSourceValue = Note4 | string | number | boolean;

/**
 * The visibility of the notes.
 */
export enum NoteValue {
    Private = "private",
    Public = "public",
}

/**
 * Visibility of the note
 */
export type NoteVisibility = {
    /**
     * The source value of the notes visibility.
     */
    sourceValue?: Note4 | string | number | boolean | null | undefined;
    /**
     * The visibility of the notes.
     */
    value?: NoteValue | null | undefined;
};

export type Note = {
    /**
     * Unique identifier of the author
     */
    authorId?: string | null | undefined;
    content?: Array<NoteContentApiModel> | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    /**
     * Date of Deletion
     */
    deletedAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
    /**
     * Visibility of the note
     */
    visibility?: NoteVisibility | null | undefined;
};

/** @internal */
export namespace Note4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Note4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Note4> = z.object({});
}

/** @internal */
export namespace NoteSourceValue$ {
    export type Inbound = Note4$.Inbound | string | number | boolean;

    export type Outbound = Note4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<NoteSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => Note4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteSourceValue> = z.union([
        z.lazy(() => Note4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const NoteValue$ = z.nativeEnum(NoteValue);

/** @internal */
export namespace NoteVisibility$ {
    export type Inbound = {
        source_value?: Note4$.Inbound | string | number | boolean | null | undefined;
        value?: NoteValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<NoteVisibility, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Note4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(NoteValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: Note4$.Outbound | string | number | boolean | null | undefined;
        value?: NoteValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteVisibility> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Note4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(NoteValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace Note$ {
    export type Inbound = {
        author_id?: string | null | undefined;
        content?: Array<NoteContentApiModel$.Inbound> | null | undefined;
        created_at?: string | null | undefined;
        deleted_at?: string | null | undefined;
        id?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
        visibility?: NoteVisibility$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<Note, z.ZodTypeDef, Inbound> = z
        .object({
            author_id: z.nullable(z.string()).optional(),
            content: z.nullable(z.array(NoteContentApiModel$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            deleted_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            visibility: z.nullable(z.lazy(() => NoteVisibility$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.author_id === undefined ? null : { authorId: v.author_id }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.deleted_at === undefined ? null : { deletedAt: v.deleted_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
                ...(v.visibility === undefined ? null : { visibility: v.visibility }),
            };
        });

    export type Outbound = {
        author_id?: string | null | undefined;
        content?: Array<NoteContentApiModel$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        deleted_at?: string | null | undefined;
        id?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
        visibility?: NoteVisibility$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Note> = z
        .object({
            authorId: z.nullable(z.string()).optional(),
            content: z.nullable(z.array(NoteContentApiModel$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            deletedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            visibility: z.nullable(z.lazy(() => NoteVisibility$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.authorId === undefined ? null : { author_id: v.authorId }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deleted_at: v.deletedAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
                ...(v.visibility === undefined ? null : { visibility: v.visibility }),
            };
        });
}
