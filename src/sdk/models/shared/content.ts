/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import {
    Category,
    Category$inboundSchema,
    Category$Outbound,
    Category$outboundSchema,
} from "./category.js";
import {
    ContentLanguageEnum,
    ContentLanguageEnum$inboundSchema,
    ContentLanguageEnum$Outbound,
    ContentLanguageEnum$outboundSchema,
} from "./contentlanguageenum.js";
import * as z from "zod";

export enum Content2 {
    True = "true",
    False = "false",
}

/**
 * Whether the content is active and available for users.
 */
export type Active = boolean | Content2;

export type Content4 = {};

export type ContentSourceValue = Content4 | string | number | boolean;

export enum ContentValue {
    Video = "video",
    Quiz = "quiz",
    Document = "document",
}
export type ContentValueOpen = OpenEnum<typeof ContentValue>;

/**
 * The type of content
 */
export type ContentContentType = {
    sourceValue?: Content4 | string | number | boolean | null | undefined;
    value?: ContentValueOpen | null | undefined;
};

export type Content = {
    /**
     * Whether the content is active and available for users.
     */
    active?: boolean | Content2 | null | undefined;
    /**
     * The categories associated with this content
     */
    categories?: Array<Category> | null | undefined;
    /**
     * The type of content
     */
    contentType?: ContentContentType | null | undefined;
    /**
     * The external URL of the content
     */
    contentUrl?: string | null | undefined;
    /**
     * The parent ID/IDs associated with this content
     */
    courseIds?: Array<string> | null | undefined;
    /**
     * The URL of the thumbnail image associated with the content.
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
    externalReference?: string | null | undefined;
    /**
     * The ID associated with this content
     */
    id?: string | null | undefined;
    /**
     * The languages associated with this content
     */
    languages?: Array<ContentLanguageEnum> | null | undefined;
    /**
     * The order of the individual content within a content grouping. This is not applicable for pushing individual content.
     */
    order?: number | null | undefined;
    /**
     * Provider's unique identifier of the parent course ID associated with this content
     */
    remoteCourseIds?: Array<string> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The title of the content
     */
    title?: string | null | undefined;
};

/** @internal */
export const Content2$inboundSchema: z.ZodNativeEnum<typeof Content2> = z.nativeEnum(Content2);

/** @internal */
export const Content2$outboundSchema: z.ZodNativeEnum<typeof Content2> = Content2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Content2$ {
    /** @deprecated use `Content2$inboundSchema` instead. */
    export const inboundSchema = Content2$inboundSchema;
    /** @deprecated use `Content2$outboundSchema` instead. */
    export const outboundSchema = Content2$outboundSchema;
}

/** @internal */
export const Active$inboundSchema: z.ZodType<Active, z.ZodTypeDef, unknown> = z.union([
    z.boolean(),
    Content2$inboundSchema,
]);

/** @internal */
export type Active$Outbound = boolean | string;

/** @internal */
export const Active$outboundSchema: z.ZodType<Active$Outbound, z.ZodTypeDef, Active> = z.union([
    z.boolean(),
    Content2$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Active$ {
    /** @deprecated use `Active$inboundSchema` instead. */
    export const inboundSchema = Active$inboundSchema;
    /** @deprecated use `Active$outboundSchema` instead. */
    export const outboundSchema = Active$outboundSchema;
    /** @deprecated use `Active$Outbound` instead. */
    export type Outbound = Active$Outbound;
}

/** @internal */
export const Content4$inboundSchema: z.ZodType<Content4, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Content4$Outbound = {};

/** @internal */
export const Content4$outboundSchema: z.ZodType<Content4$Outbound, z.ZodTypeDef, Content4> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Content4$ {
    /** @deprecated use `Content4$inboundSchema` instead. */
    export const inboundSchema = Content4$inboundSchema;
    /** @deprecated use `Content4$outboundSchema` instead. */
    export const outboundSchema = Content4$outboundSchema;
    /** @deprecated use `Content4$Outbound` instead. */
    export type Outbound = Content4$Outbound;
}

/** @internal */
export const ContentSourceValue$inboundSchema: z.ZodType<
    ContentSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => Content4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type ContentSourceValue$Outbound = Content4$Outbound | string | number | boolean;

/** @internal */
export const ContentSourceValue$outboundSchema: z.ZodType<
    ContentSourceValue$Outbound,
    z.ZodTypeDef,
    ContentSourceValue
> = z.union([z.lazy(() => Content4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentSourceValue$ {
    /** @deprecated use `ContentSourceValue$inboundSchema` instead. */
    export const inboundSchema = ContentSourceValue$inboundSchema;
    /** @deprecated use `ContentSourceValue$outboundSchema` instead. */
    export const outboundSchema = ContentSourceValue$outboundSchema;
    /** @deprecated use `ContentSourceValue$Outbound` instead. */
    export type Outbound = ContentSourceValue$Outbound;
}

/** @internal */
export const ContentValue$inboundSchema: z.ZodType<ContentValueOpen, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(ContentValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const ContentValue$outboundSchema: z.ZodType<
    ContentValueOpen,
    z.ZodTypeDef,
    ContentValueOpen
> = z.union([z.nativeEnum(ContentValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentValue$ {
    /** @deprecated use `ContentValue$inboundSchema` instead. */
    export const inboundSchema = ContentValue$inboundSchema;
    /** @deprecated use `ContentValue$outboundSchema` instead. */
    export const outboundSchema = ContentValue$outboundSchema;
}

/** @internal */
export const ContentContentType$inboundSchema: z.ZodType<
    ContentContentType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([z.lazy(() => Content4$inboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(ContentValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type ContentContentType$Outbound = {
    source_value?: Content4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const ContentContentType$outboundSchema: z.ZodType<
    ContentContentType$Outbound,
    z.ZodTypeDef,
    ContentContentType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => Content4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(ContentValue$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceValue: "source_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentContentType$ {
    /** @deprecated use `ContentContentType$inboundSchema` instead. */
    export const inboundSchema = ContentContentType$inboundSchema;
    /** @deprecated use `ContentContentType$outboundSchema` instead. */
    export const outboundSchema = ContentContentType$outboundSchema;
    /** @deprecated use `ContentContentType$Outbound` instead. */
    export type Outbound = ContentContentType$Outbound;
}

/** @internal */
export const Content$inboundSchema: z.ZodType<Content, z.ZodTypeDef, unknown> = z
    .object({
        active: z.nullable(z.union([z.boolean(), Content2$inboundSchema])).optional(),
        categories: z.nullable(z.array(Category$inboundSchema)).optional(),
        content_type: z.nullable(z.lazy(() => ContentContentType$inboundSchema)).optional(),
        content_url: z.nullable(z.string()).optional(),
        course_ids: z.nullable(z.array(z.string())).optional(),
        cover_url: z.nullable(z.string()).optional(),
        description: z.nullable(z.string()).optional(),
        duration: z.nullable(z.string()).optional(),
        external_reference: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        languages: z.nullable(z.array(ContentLanguageEnum$inboundSchema)).optional(),
        order: z.nullable(z.number()).optional(),
        remote_course_ids: z.nullable(z.array(z.string())).optional(),
        remote_id: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            content_type: "contentType",
            content_url: "contentUrl",
            course_ids: "courseIds",
            cover_url: "coverUrl",
            external_reference: "externalReference",
            remote_course_ids: "remoteCourseIds",
            remote_id: "remoteId",
        });
    });

/** @internal */
export type Content$Outbound = {
    active?: boolean | string | null | undefined;
    categories?: Array<Category$Outbound> | null | undefined;
    content_type?: ContentContentType$Outbound | null | undefined;
    content_url?: string | null | undefined;
    course_ids?: Array<string> | null | undefined;
    cover_url?: string | null | undefined;
    description?: string | null | undefined;
    duration?: string | null | undefined;
    external_reference?: string | null | undefined;
    id?: string | null | undefined;
    languages?: Array<ContentLanguageEnum$Outbound> | null | undefined;
    order?: number | null | undefined;
    remote_course_ids?: Array<string> | null | undefined;
    remote_id?: string | null | undefined;
    title?: string | null | undefined;
};

/** @internal */
export const Content$outboundSchema: z.ZodType<Content$Outbound, z.ZodTypeDef, Content> = z
    .object({
        active: z.nullable(z.union([z.boolean(), Content2$outboundSchema])).optional(),
        categories: z.nullable(z.array(Category$outboundSchema)).optional(),
        contentType: z.nullable(z.lazy(() => ContentContentType$outboundSchema)).optional(),
        contentUrl: z.nullable(z.string()).optional(),
        courseIds: z.nullable(z.array(z.string())).optional(),
        coverUrl: z.nullable(z.string()).optional(),
        description: z.nullable(z.string()).optional(),
        duration: z.nullable(z.string()).optional(),
        externalReference: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        languages: z.nullable(z.array(ContentLanguageEnum$outboundSchema)).optional(),
        order: z.nullable(z.number()).optional(),
        remoteCourseIds: z.nullable(z.array(z.string())).optional(),
        remoteId: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "content_type",
            contentUrl: "content_url",
            courseIds: "course_ids",
            coverUrl: "cover_url",
            externalReference: "external_reference",
            remoteCourseIds: "remote_course_ids",
            remoteId: "remote_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Content$ {
    /** @deprecated use `Content$inboundSchema` instead. */
    export const inboundSchema = Content$inboundSchema;
    /** @deprecated use `Content$outboundSchema` instead. */
    export const outboundSchema = Content$outboundSchema;
    /** @deprecated use `Content$Outbound` instead. */
    export type Outbound = Content$Outbound;
}
