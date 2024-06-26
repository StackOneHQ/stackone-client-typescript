/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import { NoteContentApiModel, NoteContentApiModel$ } from "./notecontentapimodel.js";
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
 * The visibility of the notes.
 */
export type NoteValueOpen = OpenEnum<typeof NoteValue>;

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
    value?: NoteValueOpen | null | undefined;
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
     * Provider's unique identifier of the author
     */
    remoteAuthorId?: string | null | undefined;
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
    export const inboundSchema: z.ZodType<Note4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Note4> = z.object({});
}

/** @internal */
export namespace NoteSourceValue$ {
    export const inboundSchema: z.ZodType<NoteSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Note4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = Note4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteSourceValue> = z.union([
        z.lazy(() => Note4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace NoteValue$ {
    export const inboundSchema: z.ZodType<NoteValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(NoteValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema: z.ZodType<NoteValueOpen, z.ZodTypeDef, NoteValueOpen> = z.union([
        z.nativeEnum(NoteValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace NoteVisibility$ {
    export const inboundSchema: z.ZodType<NoteVisibility, z.ZodTypeDef, unknown> = z
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
            value: z.nullable(NoteValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?: Note4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
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
            value: z.nullable(NoteValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace Note$ {
    export const inboundSchema: z.ZodType<Note, z.ZodTypeDef, unknown> = z
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
            remote_author_id: z.nullable(z.string()).optional(),
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
            return remap$(v, {
                author_id: "authorId",
                created_at: "createdAt",
                deleted_at: "deletedAt",
                remote_author_id: "remoteAuthorId",
                remote_id: "remoteId",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        author_id?: string | null | undefined;
        content?: Array<NoteContentApiModel$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        deleted_at?: string | null | undefined;
        id?: string | null | undefined;
        remote_author_id?: string | null | undefined;
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
            remoteAuthorId: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            visibility: z.nullable(z.lazy(() => NoteVisibility$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                authorId: "author_id",
                createdAt: "created_at",
                deletedAt: "deleted_at",
                remoteAuthorId: "remote_author_id",
                remoteId: "remote_id",
                updatedAt: "updated_at",
            });
        });
}
