/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreateCategoriesApiModel,
  CreateCategoriesApiModel$inboundSchema,
  CreateCategoriesApiModel$Outbound,
  CreateCategoriesApiModel$outboundSchema,
} from "./createcategoriesapimodel.js";
import {
  CreateContentApiModel,
  CreateContentApiModel$inboundSchema,
  CreateContentApiModel$Outbound,
  CreateContentApiModel$outboundSchema,
} from "./createcontentapimodel.js";
import {
  CreateSkillsApiModel,
  CreateSkillsApiModel$inboundSchema,
  CreateSkillsApiModel$Outbound,
  CreateSkillsApiModel$outboundSchema,
} from "./createskillsapimodel.js";
import {
  LanguageEnum,
  LanguageEnum$inboundSchema,
  LanguageEnum$Outbound,
  LanguageEnum$outboundSchema,
} from "./languageenum.js";

export type LmsUpsertCourseRequestDto = {
  /**
   * Whether the course is active and available for users.
   */
  active?: boolean | null | undefined;
  /**
   * The categories associated with this content
   */
  categories?: Array<CreateCategoriesApiModel> | null | undefined;
  /**
   * The content associated with this course
   */
  content?: Array<CreateContentApiModel> | null | undefined;
  /**
   * The URL of the thumbnail image associated with the course.
   */
  coverUrl?: string | null | undefined;
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
   * The languages associated with this course
   */
  languages?: Array<LanguageEnum> | null | undefined;
  /**
   * The skills associated with this content
   */
  skills?: Array<CreateSkillsApiModel> | null | undefined;
  /**
   * The title of the course
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The redirect URL of the course.
   */
  url?: string | null | undefined;
};

/** @internal */
export const LmsUpsertCourseRequestDto$inboundSchema: z.ZodType<
  LmsUpsertCourseRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  categories: z.nullable(z.array(CreateCategoriesApiModel$inboundSchema))
    .optional(),
  content: z.nullable(z.array(CreateContentApiModel$inboundSchema)).optional(),
  cover_url: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  external_reference: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$inboundSchema)).optional(),
  skills: z.nullable(z.array(CreateSkillsApiModel$inboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "cover_url": "coverUrl",
    "external_reference": "externalReference",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type LmsUpsertCourseRequestDto$Outbound = {
  active?: boolean | null | undefined;
  categories?: Array<CreateCategoriesApiModel$Outbound> | null | undefined;
  content?: Array<CreateContentApiModel$Outbound> | null | undefined;
  cover_url?: string | null | undefined;
  description?: string | null | undefined;
  duration?: string | null | undefined;
  external_reference?: string | null | undefined;
  languages?: Array<LanguageEnum$Outbound> | null | undefined;
  skills?: Array<CreateSkillsApiModel$Outbound> | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const LmsUpsertCourseRequestDto$outboundSchema: z.ZodType<
  LmsUpsertCourseRequestDto$Outbound,
  z.ZodTypeDef,
  LmsUpsertCourseRequestDto
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  categories: z.nullable(z.array(CreateCategoriesApiModel$outboundSchema))
    .optional(),
  content: z.nullable(z.array(CreateContentApiModel$outboundSchema)).optional(),
  coverUrl: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  externalReference: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$outboundSchema)).optional(),
  skills: z.nullable(z.array(CreateSkillsApiModel$outboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    coverUrl: "cover_url",
    externalReference: "external_reference",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertCourseRequestDto$ {
  /** @deprecated use `LmsUpsertCourseRequestDto$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertCourseRequestDto$inboundSchema;
  /** @deprecated use `LmsUpsertCourseRequestDto$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertCourseRequestDto$outboundSchema;
  /** @deprecated use `LmsUpsertCourseRequestDto$Outbound` instead. */
  export type Outbound = LmsUpsertCourseRequestDto$Outbound;
}

export function lmsUpsertCourseRequestDtoToJSON(
  lmsUpsertCourseRequestDto: LmsUpsertCourseRequestDto,
): string {
  return JSON.stringify(
    LmsUpsertCourseRequestDto$outboundSchema.parse(lmsUpsertCourseRequestDto),
  );
}

export function lmsUpsertCourseRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertCourseRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpsertCourseRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertCourseRequestDto' from JSON`,
  );
}
