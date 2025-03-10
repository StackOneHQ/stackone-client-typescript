/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Category,
  Category$inboundSchema,
  Category$Outbound,
  Category$outboundSchema,
} from "./category.js";
import {
  LanguageEnum,
  LanguageEnum$inboundSchema,
  LanguageEnum$Outbound,
  LanguageEnum$outboundSchema,
} from "./languageenum.js";
import {
  LocalizationModel,
  LocalizationModel$inboundSchema,
  LocalizationModel$Outbound,
  LocalizationModel$outboundSchema,
} from "./localizationmodel.js";
import {
  Skills,
  Skills$inboundSchema,
  Skills$Outbound,
  Skills$outboundSchema,
} from "./skills.js";

export type Content4 = {};

export type ContentSourceValue =
  | Content4
  | string
  | number
  | boolean
  | Array<any>;

export enum ContentValue {
  Video = "video",
  Quiz = "quiz",
  Document = "document",
  Audio = "audio",
  Article = "article",
}
export type ContentValueOpen = OpenEnum<typeof ContentValue>;

/**
 * The type of content
 */
export type ContentContentType = {
  sourceValue?:
    | Content4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: ContentValueOpen | null | undefined;
};

export type Content = {
  /**
   * Whether the content is active and available for users.
   */
  active?: boolean | null | undefined;
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
   * The date on which the content was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * The description of the content
   */
  description?: string | null | undefined;
  /**
   * The duration of the content following the ISO8601 standard. If duration_unit is applicable we will derive this from the smallest unit given in the duration string or the minimum unit accepted by the provider.
   */
  duration?: string | null | undefined;
  /**
   * The external ID associated with this content
   */
  externalReference?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The languages associated with this content
   */
  languages?: Array<LanguageEnum> | null | undefined;
  /**
   * Localised content information
   */
  localizations?: Array<LocalizationModel> | null | undefined;
  /**
   * The mobile friendly URL of the content
   */
  mobileLaunchContentUrl?: string | null | undefined;
  /**
   * The order of the individual content within a content grouping. This is not applicable for pushing individual content.
   */
  order?: number | null | undefined;
  /**
   * The name of the content provider
   */
  provider?: string | null | undefined;
  /**
   * Provider's unique identifier of the parent course ID associated with this content
   */
  remoteCourseIds?: Array<string> | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * A short description or summary for the content
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  shortDescription?: string | null | undefined;
  /**
   * The skills associated with this course
   */
  skills?: Array<Skills> | null | undefined;
  /**
   * A list of tags associated with the content
   */
  tags?: Array<string> | null | undefined;
  /**
   * The title of the content
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The date on which the content was last updated.
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const Content4$inboundSchema: z.ZodType<
  Content4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Content4$Outbound = {};

/** @internal */
export const Content4$outboundSchema: z.ZodType<
  Content4$Outbound,
  z.ZodTypeDef,
  Content4
> = z.object({});

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

export function content4ToJSON(content4: Content4): string {
  return JSON.stringify(Content4$outboundSchema.parse(content4));
}

export function content4FromJSON(
  jsonString: string,
): SafeParseResult<Content4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Content4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Content4' from JSON`,
  );
}

/** @internal */
export const ContentSourceValue$inboundSchema: z.ZodType<
  ContentSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Content4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type ContentSourceValue$Outbound =
  | Content4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const ContentSourceValue$outboundSchema: z.ZodType<
  ContentSourceValue$Outbound,
  z.ZodTypeDef,
  ContentSourceValue
> = z.union([
  z.lazy(() => Content4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

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

export function contentSourceValueToJSON(
  contentSourceValue: ContentSourceValue,
): string {
  return JSON.stringify(
    ContentSourceValue$outboundSchema.parse(contentSourceValue),
  );
}

export function contentSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<ContentSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContentSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContentSourceValue' from JSON`,
  );
}

/** @internal */
export const ContentValue$inboundSchema: z.ZodType<
  ContentValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ContentValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ContentValue$outboundSchema: z.ZodType<
  ContentValueOpen,
  z.ZodTypeDef,
  ContentValueOpen
> = z.union([
  z.nativeEnum(ContentValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

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
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Content4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ContentValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ContentContentType$Outbound = {
  source_value?:
    | Content4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ContentContentType$outboundSchema: z.ZodType<
  ContentContentType$Outbound,
  z.ZodTypeDef,
  ContentContentType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Content4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ContentValue$outboundSchema).optional(),
}).transform((v) => {
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

export function contentContentTypeToJSON(
  contentContentType: ContentContentType,
): string {
  return JSON.stringify(
    ContentContentType$outboundSchema.parse(contentContentType),
  );
}

export function contentContentTypeFromJSON(
  jsonString: string,
): SafeParseResult<ContentContentType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContentContentType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContentContentType' from JSON`,
  );
}

/** @internal */
export const Content$inboundSchema: z.ZodType<Content, z.ZodTypeDef, unknown> =
  z.object({
    active: z.nullable(z.boolean()).optional(),
    categories: z.nullable(z.array(Category$inboundSchema)).optional(),
    content_type: z.nullable(z.lazy(() => ContentContentType$inboundSchema))
      .optional(),
    content_url: z.nullable(z.string()).optional(),
    course_ids: z.nullable(z.array(z.string())).optional(),
    cover_url: z.nullable(z.string()).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    description: z.nullable(z.string()).optional(),
    duration: z.nullable(z.string()).optional(),
    external_reference: z.nullable(z.string()).optional(),
    id: z.nullable(z.string()).optional(),
    languages: z.nullable(z.array(LanguageEnum$inboundSchema)).optional(),
    localizations: z.nullable(z.array(LocalizationModel$inboundSchema))
      .optional(),
    mobile_launch_content_url: z.nullable(z.string()).optional(),
    order: z.nullable(z.number()).optional(),
    provider: z.nullable(z.string()).optional(),
    remote_course_ids: z.nullable(z.array(z.string())).optional(),
    remote_id: z.nullable(z.string()).optional(),
    short_description: z.nullable(z.string()).optional(),
    skills: z.nullable(z.array(Skills$inboundSchema)).optional(),
    tags: z.nullable(z.array(z.string())).optional(),
    title: z.nullable(z.string()).optional(),
    unified_custom_fields: z.nullable(z.record(z.any())).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "content_type": "contentType",
      "content_url": "contentUrl",
      "course_ids": "courseIds",
      "cover_url": "coverUrl",
      "created_at": "createdAt",
      "external_reference": "externalReference",
      "mobile_launch_content_url": "mobileLaunchContentUrl",
      "remote_course_ids": "remoteCourseIds",
      "remote_id": "remoteId",
      "short_description": "shortDescription",
      "unified_custom_fields": "unifiedCustomFields",
      "updated_at": "updatedAt",
    });
  });

/** @internal */
export type Content$Outbound = {
  active?: boolean | null | undefined;
  categories?: Array<Category$Outbound> | null | undefined;
  content_type?: ContentContentType$Outbound | null | undefined;
  content_url?: string | null | undefined;
  course_ids?: Array<string> | null | undefined;
  cover_url?: string | null | undefined;
  created_at?: string | null | undefined;
  description?: string | null | undefined;
  duration?: string | null | undefined;
  external_reference?: string | null | undefined;
  id?: string | null | undefined;
  languages?: Array<LanguageEnum$Outbound> | null | undefined;
  localizations?: Array<LocalizationModel$Outbound> | null | undefined;
  mobile_launch_content_url?: string | null | undefined;
  order?: number | null | undefined;
  provider?: string | null | undefined;
  remote_course_ids?: Array<string> | null | undefined;
  remote_id?: string | null | undefined;
  short_description?: string | null | undefined;
  skills?: Array<Skills$Outbound> | null | undefined;
  tags?: Array<string> | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const Content$outboundSchema: z.ZodType<
  Content$Outbound,
  z.ZodTypeDef,
  Content
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  categories: z.nullable(z.array(Category$outboundSchema)).optional(),
  contentType: z.nullable(z.lazy(() => ContentContentType$outboundSchema))
    .optional(),
  contentUrl: z.nullable(z.string()).optional(),
  courseIds: z.nullable(z.array(z.string())).optional(),
  coverUrl: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  externalReference: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$outboundSchema)).optional(),
  localizations: z.nullable(z.array(LocalizationModel$outboundSchema))
    .optional(),
  mobileLaunchContentUrl: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  provider: z.nullable(z.string()).optional(),
  remoteCourseIds: z.nullable(z.array(z.string())).optional(),
  remoteId: z.nullable(z.string()).optional(),
  shortDescription: z.nullable(z.string()).optional(),
  skills: z.nullable(z.array(Skills$outboundSchema)).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "content_type",
    contentUrl: "content_url",
    courseIds: "course_ids",
    coverUrl: "cover_url",
    createdAt: "created_at",
    externalReference: "external_reference",
    mobileLaunchContentUrl: "mobile_launch_content_url",
    remoteCourseIds: "remote_course_ids",
    remoteId: "remote_id",
    shortDescription: "short_description",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
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

export function contentToJSON(content: Content): string {
  return JSON.stringify(Content$outboundSchema.parse(content));
}

export function contentFromJSON(
  jsonString: string,
): SafeParseResult<Content, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Content$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Content' from JSON`,
  );
}
