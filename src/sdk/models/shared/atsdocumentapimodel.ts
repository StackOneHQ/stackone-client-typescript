/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Content, Content$ } from "./content";
import * as z from "zod";

export type AtsDocumentApiModel4 = {};

export type AtsDocumentApiModelSourceValue = AtsDocumentApiModel4 | string | number | boolean;

export enum AtsDocumentApiModelValue {
    Resume = "resume",
    Avatar = "avatar",
    CoverLetter = "cover_letter",
    ProfilePicture = "profile_picture",
    Policy = "policy",
    Passport = "passport",
    TakeHomeTest = "take_home_test",
    OfferLetter = "offer_letter",
    SignedOfferLetter = "signed_offer_letter",
    NationalId = "national_id",
    OfferPacket = "offer_packet",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

/**
 * The content type of the document
 */
export type AtsDocumentApiModelType = {
    sourceValue?: AtsDocumentApiModel4 | string | number | boolean | null | undefined;
    value?: AtsDocumentApiModelValue | null | undefined;
};

export type AtsDocumentApiModel = {
    /**
     * The content of the file
     */
    contents?: Array<Content> | null | undefined;
    /**
     * The creation date of the file
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the file
     */
    name?: string | null | undefined;
    /**
     * The path where the file is stored
     */
    path?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The content type of the document
     */
    type?: AtsDocumentApiModelType | null | undefined;
    /**
     * The update date of the file
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace AtsDocumentApiModel4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<AtsDocumentApiModel4, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsDocumentApiModel4> = z.object(
        {}
    );
}

/** @internal */
export namespace AtsDocumentApiModelSourceValue$ {
    export type Inbound = AtsDocumentApiModel4$.Inbound | string | number | boolean;

    export type Outbound = AtsDocumentApiModel4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<AtsDocumentApiModelSourceValue, z.ZodTypeDef, Inbound> =
        z.union([
            z.lazy(() => AtsDocumentApiModel4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsDocumentApiModelSourceValue> =
        z.union([
            z.lazy(() => AtsDocumentApiModel4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export const AtsDocumentApiModelValue$: z.ZodNativeEnum<typeof AtsDocumentApiModelValue> =
    z.nativeEnum(AtsDocumentApiModelValue);

/** @internal */
export namespace AtsDocumentApiModelType$ {
    export type Inbound = {
        source_value?: AtsDocumentApiModel4$.Inbound | string | number | boolean | null | undefined;
        value?: AtsDocumentApiModelValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<AtsDocumentApiModelType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsDocumentApiModel4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsDocumentApiModelValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AtsDocumentApiModel4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: AtsDocumentApiModelValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsDocumentApiModelType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsDocumentApiModel4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsDocumentApiModelValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AtsDocumentApiModel$ {
    export type Inbound = {
        contents?: Array<Content$.Inbound> | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        path?: string | null | undefined;
        remote_id?: string | null | undefined;
        type?: AtsDocumentApiModelType$.Inbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AtsDocumentApiModel, z.ZodTypeDef, Inbound> = z
        .object({
            contents: z.nullable(z.array(Content$.inboundSchema)).optional(),
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
            path: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => AtsDocumentApiModelType$.inboundSchema)).optional(),
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
            return {
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        contents?: Array<Content$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        path?: string | null | undefined;
        remote_id?: string | null | undefined;
        type?: AtsDocumentApiModelType$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsDocumentApiModel> = z
        .object({
            contents: z.nullable(z.array(Content$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            path: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => AtsDocumentApiModelType$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
