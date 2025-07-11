/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
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
  Skills,
  Skills$inboundSchema,
  Skills$Outbound,
  Skills$outboundSchema,
} from "./skills.js";

export enum Course2 {
  True = "true",
  False = "false",
}

/**
 * Whether the course is active and available for users.
 */
export type CourseActive = boolean | Course2;

export type Course = {
  /**
   * Whether the course is active and available for users.
   */
  active?: boolean | Course2 | null | undefined;
  /**
   * The categories associated with this course
   */
  categories?: Array<Category> | null | undefined;
  /**
   * The child ID/IDs associated with this course
   */
  contentIds?: Array<string> | null | undefined;
  /**
   * The URL of the thumbnail image associated with the course.
   */
  coverUrl?: string | null | undefined;
  /**
   * The date on which the course was created.
   */
  createdAt?: string | null | undefined;
  /**
   * The description of the course
   */
  description?: string | null | undefined;
  /**
   * The duration of the course following the ISO8601 standard. If duration_unit is applicable we will derive this from the smallest unit given in the duration string
   */
  duration?: string | null | undefined;
  /**
   * The external ID associated with this course
   */
  externalReference?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The languages associated with this course
   */
  languages?: Array<LanguageEnum> | null | undefined;
  /**
   * The name of the course provider
   */
  provider?: string | null | undefined;
  /**
   * Provider's unique identifier of the child content IDs associated with this course
   */
  remoteContentIds?: Array<string> | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The skills associated with this course
   */
  skills?: Array<Skills> | null | undefined;
  /**
   * The title of the course
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The date on which the course was last updated.
   */
  updatedAt?: string | null | undefined;
  /**
   * The redirect URL of the course.
   */
  url?: string | null | undefined;
};

/** @internal */
export const Course2$inboundSchema: z.ZodNativeEnum<typeof Course2> = z
  .nativeEnum(Course2);

/** @internal */
export const Course2$outboundSchema: z.ZodNativeEnum<typeof Course2> =
  Course2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Course2$ {
  /** @deprecated use `Course2$inboundSchema` instead. */
  export const inboundSchema = Course2$inboundSchema;
  /** @deprecated use `Course2$outboundSchema` instead. */
  export const outboundSchema = Course2$outboundSchema;
}

/** @internal */
export const CourseActive$inboundSchema: z.ZodType<
  CourseActive,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), Course2$inboundSchema]);

/** @internal */
export type CourseActive$Outbound = boolean | string;

/** @internal */
export const CourseActive$outboundSchema: z.ZodType<
  CourseActive$Outbound,
  z.ZodTypeDef,
  CourseActive
> = z.union([z.boolean(), Course2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CourseActive$ {
  /** @deprecated use `CourseActive$inboundSchema` instead. */
  export const inboundSchema = CourseActive$inboundSchema;
  /** @deprecated use `CourseActive$outboundSchema` instead. */
  export const outboundSchema = CourseActive$outboundSchema;
  /** @deprecated use `CourseActive$Outbound` instead. */
  export type Outbound = CourseActive$Outbound;
}

export function courseActiveToJSON(courseActive: CourseActive): string {
  return JSON.stringify(CourseActive$outboundSchema.parse(courseActive));
}

export function courseActiveFromJSON(
  jsonString: string,
): SafeParseResult<CourseActive, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CourseActive$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CourseActive' from JSON`,
  );
}

/** @internal */
export const Course$inboundSchema: z.ZodType<Course, z.ZodTypeDef, unknown> = z
  .object({
    active: z.nullable(z.union([z.boolean(), Course2$inboundSchema]))
      .optional(),
    categories: z.nullable(z.array(Category$inboundSchema)).optional(),
    content_ids: z.nullable(z.array(z.string())).optional(),
    cover_url: z.nullable(z.string()).optional(),
    created_at: z.nullable(z.string()).optional(),
    description: z.nullable(z.string()).optional(),
    duration: z.nullable(z.string()).optional(),
    external_reference: z.nullable(z.string()).optional(),
    id: z.nullable(z.string()).optional(),
    languages: z.nullable(z.array(LanguageEnum$inboundSchema)).optional(),
    provider: z.nullable(z.string()).optional(),
    remote_content_ids: z.nullable(z.array(z.string())).optional(),
    remote_id: z.nullable(z.string()).optional(),
    skills: z.nullable(z.array(Skills$inboundSchema)).optional(),
    title: z.nullable(z.string()).optional(),
    unified_custom_fields: z.nullable(z.record(z.any())).optional(),
    updated_at: z.nullable(z.string()).optional(),
    url: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "content_ids": "contentIds",
      "cover_url": "coverUrl",
      "created_at": "createdAt",
      "external_reference": "externalReference",
      "remote_content_ids": "remoteContentIds",
      "remote_id": "remoteId",
      "unified_custom_fields": "unifiedCustomFields",
      "updated_at": "updatedAt",
    });
  });

/** @internal */
export type Course$Outbound = {
  active?: boolean | string | null | undefined;
  categories?: Array<Category$Outbound> | null | undefined;
  content_ids?: Array<string> | null | undefined;
  cover_url?: string | null | undefined;
  created_at?: string | null | undefined;
  description?: string | null | undefined;
  duration?: string | null | undefined;
  external_reference?: string | null | undefined;
  id?: string | null | undefined;
  languages?: Array<LanguageEnum$Outbound> | null | undefined;
  provider?: string | null | undefined;
  remote_content_ids?: Array<string> | null | undefined;
  remote_id?: string | null | undefined;
  skills?: Array<Skills$Outbound> | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const Course$outboundSchema: z.ZodType<
  Course$Outbound,
  z.ZodTypeDef,
  Course
> = z.object({
  active: z.nullable(z.union([z.boolean(), Course2$outboundSchema])).optional(),
  categories: z.nullable(z.array(Category$outboundSchema)).optional(),
  contentIds: z.nullable(z.array(z.string())).optional(),
  coverUrl: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  externalReference: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$outboundSchema)).optional(),
  provider: z.nullable(z.string()).optional(),
  remoteContentIds: z.nullable(z.array(z.string())).optional(),
  remoteId: z.nullable(z.string()).optional(),
  skills: z.nullable(z.array(Skills$outboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    contentIds: "content_ids",
    coverUrl: "cover_url",
    createdAt: "created_at",
    externalReference: "external_reference",
    remoteContentIds: "remote_content_ids",
    remoteId: "remote_id",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Course$ {
  /** @deprecated use `Course$inboundSchema` instead. */
  export const inboundSchema = Course$inboundSchema;
  /** @deprecated use `Course$outboundSchema` instead. */
  export const outboundSchema = Course$outboundSchema;
  /** @deprecated use `Course$Outbound` instead. */
  export type Outbound = Course$Outbound;
}

export function courseToJSON(course: Course): string {
  return JSON.stringify(Course$outboundSchema.parse(course));
}

export function courseFromJSON(
  jsonString: string,
): SafeParseResult<Course, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Course$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Course' from JSON`,
  );
}
