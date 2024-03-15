/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Content, Content$ } from "./content";
import * as z from "zod";

export type HrisCreateDocumentRequestDto4 = {};

export type HrisCreateDocumentRequestDtoSourceValue =
    | HrisCreateDocumentRequestDto4
    | string
    | number
    | boolean;

export enum HrisCreateDocumentRequestDtoValue {
    Resume = "resume",
    Avatar = "avatar",
    CoverLetter = "cover_letter",
    ProfilePicture = "profile_picture",
    Passport = "passport",
    TakeHomeTest = "take_home_test",
    OfferLetter = "offer_letter",
    SignedOfferLetter = "signed_offer_letter",
    OfferPacket = "offer_packet",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

/**
 * The content type of the document
 */
export type HrisCreateDocumentRequestDtoType = {
    sourceValue?: HrisCreateDocumentRequestDto4 | string | number | boolean | null | undefined;
    value?: HrisCreateDocumentRequestDtoValue | null | undefined;
};

export type HrisCreateDocumentRequestDto = {
    /**
     * The content of the file
     */
    content: Content;
    /**
     * The name of the file
     */
    name: string;
    /**
     * The path where the file is stored
     */
    path?: string | null | undefined;
    /**
     * The content type of the document
     */
    type?: HrisCreateDocumentRequestDtoType | null | undefined;
};

/** @internal */
export namespace HrisCreateDocumentRequestDto4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<HrisCreateDocumentRequestDto4, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisCreateDocumentRequestDto4> =
        z.object({});
}

/** @internal */
export namespace HrisCreateDocumentRequestDtoSourceValue$ {
    export type Inbound = HrisCreateDocumentRequestDto4$.Inbound | string | number | boolean;

    export type Outbound = HrisCreateDocumentRequestDto4$.Outbound | string | number | boolean;
    export const inboundSchema: z.ZodType<
        HrisCreateDocumentRequestDtoSourceValue,
        z.ZodTypeDef,
        Inbound
    > = z.union([
        z.lazy(() => HrisCreateDocumentRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateDocumentRequestDtoSourceValue
    > = z.union([
        z.lazy(() => HrisCreateDocumentRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const HrisCreateDocumentRequestDtoValue$ = z.nativeEnum(HrisCreateDocumentRequestDtoValue);

/** @internal */
export namespace HrisCreateDocumentRequestDtoType$ {
    export type Inbound = {
        source_value?:
            | HrisCreateDocumentRequestDto4$.Inbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateDocumentRequestDtoValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<HrisCreateDocumentRequestDtoType, z.ZodTypeDef, Inbound> =
        z
            .object({
                source_value: z
                    .nullable(
                        z.union([
                            z.lazy(() => HrisCreateDocumentRequestDto4$.inboundSchema),
                            z.string(),
                            z.number(),
                            z.boolean(),
                        ])
                    )
                    .optional(),
                value: z.nullable(HrisCreateDocumentRequestDtoValue$).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                    ...(v.value === undefined ? null : { value: v.value }),
                };
            });

    export type Outbound = {
        source_value?:
            | HrisCreateDocumentRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateDocumentRequestDtoValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateDocumentRequestDtoType
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateDocumentRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateDocumentRequestDtoValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HrisCreateDocumentRequestDto$ {
    export type Inbound = {
        content: Content$.Inbound;
        name: string;
        path?: string | null | undefined;
        type?: HrisCreateDocumentRequestDtoType$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<HrisCreateDocumentRequestDto, z.ZodTypeDef, Inbound> = z
        .object({
            content: Content$.inboundSchema,
            name: z.string(),
            path: z.nullable(z.string()).optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateDocumentRequestDtoType$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        content: Content$.Outbound;
        name: string;
        path?: string | null | undefined;
        type?: HrisCreateDocumentRequestDtoType$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisCreateDocumentRequestDto> = z
        .object({
            content: Content$.outboundSchema,
            name: z.string(),
            path: z.nullable(z.string()).optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateDocumentRequestDtoType$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                name: v.name,
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}