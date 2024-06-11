/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types";
import { ContentLanguageEnum, ContentLanguageEnum$ } from "./contentlanguageenum";
import { CreateCategoriesApiModel, CreateCategoriesApiModel$ } from "./createcategoriesapimodel";
import * as z from "zod";

export type LmsCreateContentRequestDto4 = {};

export type LmsCreateContentRequestDtoSourceValue =
    | LmsCreateContentRequestDto4
    | string
    | number
    | boolean;

export enum LmsCreateContentRequestDtoValue {
    Video = "video",
    Quiz = "quiz",
    Document = "document",
}
export type LmsCreateContentRequestDtoValueOpen = OpenEnum<typeof LmsCreateContentRequestDtoValue>;

/**
 * The content type
 */
export type LmsCreateContentRequestDtoContentType = {
    sourceValue?: LmsCreateContentRequestDto4 | string | number | boolean | null | undefined;
    value?: LmsCreateContentRequestDtoValueOpen | null | undefined;
};

export type LmsCreateContentRequestDto = {
    /**
     * The active status of the content
     */
    active?: boolean | null | undefined;
    /**
     * The categories associated with this content
     */
    categories?: Array<CreateCategoriesApiModel> | null | undefined;
    /**
     * The content type
     */
    contentType?: LmsCreateContentRequestDtoContentType | null | undefined;
    /**
     * The content URL
     */
    contentUrl?: string | null | undefined;
    /**
     * The parent ID associated with this content
     */
    courseId?: string | null | undefined;
    /**
     * The cover URL
     */
    coverUrl?: string | null | undefined;
    /**
     * The description of the content
     */
    description?: string | null | undefined;
    /**
     * The duration of the content following the ISO8601 standard. If duration_unit is applicable we will derive this from the smallest unit given in the duration string
     */
    duration?: string | null | undefined;
    /**
     * The external ID associated with this content
     */
    externalId?: string | null | undefined;
    /**
     * The languages associated with this content
     */
    languages?: Array<ContentLanguageEnum> | null | undefined;
    /**
     * The order of the content within a collection
     */
    order?: number | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * The title of the content
     */
    title?: string | null | undefined;
};

/** @internal */
export namespace LmsCreateContentRequestDto4$ {
    export const inboundSchema: z.ZodType<LmsCreateContentRequestDto4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsCreateContentRequestDto4> =
        z.object({});
}

/** @internal */
export namespace LmsCreateContentRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        LmsCreateContentRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => LmsCreateContentRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = LmsCreateContentRequestDto4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LmsCreateContentRequestDtoSourceValue
    > = z.union([
        z.lazy(() => LmsCreateContentRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace LmsCreateContentRequestDtoValue$ {
    export const inboundSchema: z.ZodType<
        LmsCreateContentRequestDtoValueOpen,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.nativeEnum(LmsCreateContentRequestDtoValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema = z.union([
        z.nativeEnum(LmsCreateContentRequestDtoValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace LmsCreateContentRequestDtoContentType$ {
    export const inboundSchema: z.ZodType<
        LmsCreateContentRequestDtoContentType,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => LmsCreateContentRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(LmsCreateContentRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?:
            | LmsCreateContentRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        LmsCreateContentRequestDtoContentType
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => LmsCreateContentRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(LmsCreateContentRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace LmsCreateContentRequestDto$ {
    export const inboundSchema: z.ZodType<LmsCreateContentRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            categories: z.nullable(z.array(CreateCategoriesApiModel$.inboundSchema)).optional(),
            content_type: z
                .nullable(z.lazy(() => LmsCreateContentRequestDtoContentType$.inboundSchema))
                .optional(),
            content_url: z.nullable(z.string()).optional(),
            course_id: z.nullable(z.string()).optional(),
            cover_url: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            duration: z.nullable(z.string()).optional(),
            external_id: z.nullable(z.string()).optional(),
            languages: z.nullable(z.array(ContentLanguageEnum$.inboundSchema)).optional(),
            order: z.nullable(z.number()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                content_type: "contentType",
                content_url: "contentUrl",
                course_id: "courseId",
                cover_url: "coverUrl",
                external_id: "externalId",
            });
        });

    export type Outbound = {
        active?: boolean | null | undefined;
        categories?: Array<CreateCategoriesApiModel$.Outbound> | null | undefined;
        content_type?: LmsCreateContentRequestDtoContentType$.Outbound | null | undefined;
        content_url?: string | null | undefined;
        course_id?: string | null | undefined;
        cover_url?: string | null | undefined;
        description?: string | null | undefined;
        duration?: string | null | undefined;
        external_id?: string | null | undefined;
        languages?: Array<ContentLanguageEnum$.Outbound> | null | undefined;
        order?: number | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LmsCreateContentRequestDto> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            categories: z.nullable(z.array(CreateCategoriesApiModel$.outboundSchema)).optional(),
            contentType: z
                .nullable(z.lazy(() => LmsCreateContentRequestDtoContentType$.outboundSchema))
                .optional(),
            contentUrl: z.nullable(z.string()).optional(),
            courseId: z.nullable(z.string()).optional(),
            coverUrl: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            duration: z.nullable(z.string()).optional(),
            externalId: z.nullable(z.string()).optional(),
            languages: z.nullable(z.array(ContentLanguageEnum$.outboundSchema)).optional(),
            order: z.nullable(z.number()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "content_type",
                contentUrl: "content_url",
                courseId: "course_id",
                coverUrl: "cover_url",
                externalId: "external_id",
            });
        });
}
