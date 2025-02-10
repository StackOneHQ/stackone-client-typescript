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
  AdditionalData,
  AdditionalData$inboundSchema,
  AdditionalData$Outbound,
  AdditionalData$outboundSchema,
} from "./additionaldata.js";
import {
  CreateCategoriesApiModel,
  CreateCategoriesApiModel$inboundSchema,
  CreateCategoriesApiModel$Outbound,
  CreateCategoriesApiModel$outboundSchema,
} from "./createcategoriesapimodel.js";
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

export type LmsUpsertContentRequestDto4 = {};

export type LmsUpsertContentRequestDtoSourceValue =
  | LmsUpsertContentRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

export enum LmsUpsertContentRequestDtoValue {
  Video = "video",
  Quiz = "quiz",
  Document = "document",
}
export type LmsUpsertContentRequestDtoValueOpen = OpenEnum<
  typeof LmsUpsertContentRequestDtoValue
>;

/**
 * The type of content
 */
export type LmsUpsertContentRequestDtoContentType = {
  sourceValue?:
    | LmsUpsertContentRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: LmsUpsertContentRequestDtoValueOpen | null | undefined;
};

export type LmsUpsertContentRequestDto = {
  /**
   * Whether the content is active and available for users.
   */
  active?: boolean | null | undefined;
  /**
   * The additional_data associated with this content
   */
  additionalData?: Array<AdditionalData> | null | undefined;
  /**
   * The categories associated with this content
   */
  categories?: Array<CreateCategoriesApiModel> | null | undefined;
  /**
   * The type of content
   */
  contentType?: LmsUpsertContentRequestDtoContentType | null | undefined;
  /**
   * The external URL of the content
   */
  contentUrl?: string | null | undefined;
  /**
   * The URL of the thumbnail image associated with the content.
   */
  coverUrl?: string | null | undefined;
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
   * The languages associated with this content
   */
  languages?: Array<LanguageEnum> | null | undefined;
  /**
   * The mobile friendly URL of the content
   */
  mobileLaunchContentUrl?: string | null | undefined;
  /**
   * The order of the individual content within a content grouping. This is not applicable for pushing individual content.
   */
  order?: number | null | undefined;
  /**
   * A short description or summary for the content
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  shortDescription?: string | null | undefined;
  /**
   * The skills associated with this content
   */
  skills?: Array<CreateSkillsApiModel> | null | undefined;
  /**
   * The title of the content
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const LmsUpsertContentRequestDto4$inboundSchema: z.ZodType<
  LmsUpsertContentRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LmsUpsertContentRequestDto4$Outbound = {};

/** @internal */
export const LmsUpsertContentRequestDto4$outboundSchema: z.ZodType<
  LmsUpsertContentRequestDto4$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequestDto4$ {
  /** @deprecated use `LmsUpsertContentRequestDto4$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertContentRequestDto4$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDto4$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertContentRequestDto4$outboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDto4$Outbound` instead. */
  export type Outbound = LmsUpsertContentRequestDto4$Outbound;
}

export function lmsUpsertContentRequestDto4ToJSON(
  lmsUpsertContentRequestDto4: LmsUpsertContentRequestDto4,
): string {
  return JSON.stringify(
    LmsUpsertContentRequestDto4$outboundSchema.parse(
      lmsUpsertContentRequestDto4,
    ),
  );
}

export function lmsUpsertContentRequestDto4FromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentRequestDto4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpsertContentRequestDto4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentRequestDto4' from JSON`,
  );
}

/** @internal */
export const LmsUpsertContentRequestDtoSourceValue$inboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => LmsUpsertContentRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type LmsUpsertContentRequestDtoSourceValue$Outbound =
  | LmsUpsertContentRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const LmsUpsertContentRequestDtoSourceValue$outboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentRequestDtoSourceValue
> = z.union([
  z.lazy(() => LmsUpsertContentRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequestDtoSourceValue$ {
  /** @deprecated use `LmsUpsertContentRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    LmsUpsertContentRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    LmsUpsertContentRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = LmsUpsertContentRequestDtoSourceValue$Outbound;
}

export function lmsUpsertContentRequestDtoSourceValueToJSON(
  lmsUpsertContentRequestDtoSourceValue: LmsUpsertContentRequestDtoSourceValue,
): string {
  return JSON.stringify(
    LmsUpsertContentRequestDtoSourceValue$outboundSchema.parse(
      lmsUpsertContentRequestDtoSourceValue,
    ),
  );
}

export function lmsUpsertContentRequestDtoSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentRequestDtoSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsUpsertContentRequestDtoSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentRequestDtoSourceValue' from JSON`,
  );
}

/** @internal */
export const LmsUpsertContentRequestDtoValue$inboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(LmsUpsertContentRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const LmsUpsertContentRequestDtoValue$outboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoValueOpen,
  z.ZodTypeDef,
  LmsUpsertContentRequestDtoValueOpen
> = z.union([
  z.nativeEnum(LmsUpsertContentRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequestDtoValue$ {
  /** @deprecated use `LmsUpsertContentRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertContentRequestDtoValue$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertContentRequestDtoValue$outboundSchema;
}

/** @internal */
export const LmsUpsertContentRequestDtoContentType$inboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoContentType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => LmsUpsertContentRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsUpsertContentRequestDtoValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type LmsUpsertContentRequestDtoContentType$Outbound = {
  source_value?:
    | LmsUpsertContentRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const LmsUpsertContentRequestDtoContentType$outboundSchema: z.ZodType<
  LmsUpsertContentRequestDtoContentType$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentRequestDtoContentType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => LmsUpsertContentRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsUpsertContentRequestDtoValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequestDtoContentType$ {
  /** @deprecated use `LmsUpsertContentRequestDtoContentType$inboundSchema` instead. */
  export const inboundSchema =
    LmsUpsertContentRequestDtoContentType$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDtoContentType$outboundSchema` instead. */
  export const outboundSchema =
    LmsUpsertContentRequestDtoContentType$outboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDtoContentType$Outbound` instead. */
  export type Outbound = LmsUpsertContentRequestDtoContentType$Outbound;
}

export function lmsUpsertContentRequestDtoContentTypeToJSON(
  lmsUpsertContentRequestDtoContentType: LmsUpsertContentRequestDtoContentType,
): string {
  return JSON.stringify(
    LmsUpsertContentRequestDtoContentType$outboundSchema.parse(
      lmsUpsertContentRequestDtoContentType,
    ),
  );
}

export function lmsUpsertContentRequestDtoContentTypeFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentRequestDtoContentType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsUpsertContentRequestDtoContentType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentRequestDtoContentType' from JSON`,
  );
}

/** @internal */
export const LmsUpsertContentRequestDto$inboundSchema: z.ZodType<
  LmsUpsertContentRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  additional_data: z.nullable(z.array(AdditionalData$inboundSchema)).optional(),
  categories: z.nullable(z.array(CreateCategoriesApiModel$inboundSchema))
    .optional(),
  content_type: z.nullable(
    z.lazy(() => LmsUpsertContentRequestDtoContentType$inboundSchema),
  ).optional(),
  content_url: z.nullable(z.string()).optional(),
  cover_url: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  external_reference: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$inboundSchema)).optional(),
  mobile_launch_content_url: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  short_description: z.nullable(z.string()).optional(),
  skills: z.nullable(z.array(CreateSkillsApiModel$inboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "additional_data": "additionalData",
    "content_type": "contentType",
    "content_url": "contentUrl",
    "cover_url": "coverUrl",
    "external_reference": "externalReference",
    "mobile_launch_content_url": "mobileLaunchContentUrl",
    "short_description": "shortDescription",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type LmsUpsertContentRequestDto$Outbound = {
  active?: boolean | null | undefined;
  additional_data?: Array<AdditionalData$Outbound> | null | undefined;
  categories?: Array<CreateCategoriesApiModel$Outbound> | null | undefined;
  content_type?:
    | LmsUpsertContentRequestDtoContentType$Outbound
    | null
    | undefined;
  content_url?: string | null | undefined;
  cover_url?: string | null | undefined;
  description?: string | null | undefined;
  duration?: string | null | undefined;
  external_reference?: string | null | undefined;
  languages?: Array<LanguageEnum$Outbound> | null | undefined;
  mobile_launch_content_url?: string | null | undefined;
  order?: number | null | undefined;
  short_description?: string | null | undefined;
  skills?: Array<CreateSkillsApiModel$Outbound> | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const LmsUpsertContentRequestDto$outboundSchema: z.ZodType<
  LmsUpsertContentRequestDto$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentRequestDto
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  additionalData: z.nullable(z.array(AdditionalData$outboundSchema)).optional(),
  categories: z.nullable(z.array(CreateCategoriesApiModel$outboundSchema))
    .optional(),
  contentType: z.nullable(
    z.lazy(() => LmsUpsertContentRequestDtoContentType$outboundSchema),
  ).optional(),
  contentUrl: z.nullable(z.string()).optional(),
  coverUrl: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration: z.nullable(z.string()).optional(),
  externalReference: z.nullable(z.string()).optional(),
  languages: z.nullable(z.array(LanguageEnum$outboundSchema)).optional(),
  mobileLaunchContentUrl: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  shortDescription: z.nullable(z.string()).optional(),
  skills: z.nullable(z.array(CreateSkillsApiModel$outboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    additionalData: "additional_data",
    contentType: "content_type",
    contentUrl: "content_url",
    coverUrl: "cover_url",
    externalReference: "external_reference",
    mobileLaunchContentUrl: "mobile_launch_content_url",
    shortDescription: "short_description",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequestDto$ {
  /** @deprecated use `LmsUpsertContentRequestDto$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertContentRequestDto$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDto$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertContentRequestDto$outboundSchema;
  /** @deprecated use `LmsUpsertContentRequestDto$Outbound` instead. */
  export type Outbound = LmsUpsertContentRequestDto$Outbound;
}

export function lmsUpsertContentRequestDtoToJSON(
  lmsUpsertContentRequestDto: LmsUpsertContentRequestDto,
): string {
  return JSON.stringify(
    LmsUpsertContentRequestDto$outboundSchema.parse(lmsUpsertContentRequestDto),
  );
}

export function lmsUpsertContentRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpsertContentRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentRequestDto' from JSON`,
  );
}
