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

export type Completion4 = {};

export type CompletionSourceValue =
  | Completion4
  | string
  | number
  | boolean
  | Array<any>;

export enum CompletionValue {
  Content = "content",
  Course = "course",
  Collection = "collection",
}
export type CompletionValueOpen = OpenEnum<typeof CompletionValue>;

/**
 * The learning object type of the completion
 */
export type CompletionLearningObjectType = {
  sourceValue?:
    | Completion4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CompletionValueOpen | null | undefined;
};

export type CompletionSchemas4 = {};

export type CompletionSchemasSourceValue =
  | CompletionSchemas4
  | string
  | number
  | boolean
  | Array<any>;

export enum CompletionSchemasValue {
  Pass = "Pass",
  Fail = "Fail",
}
export type CompletionSchemasValueOpen = OpenEnum<
  typeof CompletionSchemasValue
>;

/**
 * The result of the completion
 */
export type CompletionSchemasResult = {
  sourceValue?:
    | CompletionSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CompletionSchemasValueOpen | null | undefined;
};

export type Completion = {
  /**
   * The date the content was completed
   */
  completedAt?: string | null | undefined;
  /**
   * The external reference associated with this content
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  contentExternalReference?: string | null | undefined;
  /**
   * The content ID associated with this completion
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  contentId?: string | null | undefined;
  /**
   * The course ID associated with this completion
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  courseId?: string | null | undefined;
  /**
   * The created date of the completion
   */
  createdAt?: string | null | undefined;
  /**
   * The external ID associated with this completion
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  externalId?: string | null | undefined;
  /**
   * The ID associated with this completion
   */
  id?: string | null | undefined;
  /**
   * The external reference of the learning object associated with this completion
   */
  learningObjectExternalReference?: string | null | undefined;
  /**
   * The id of the learning object associated with this completion
   */
  learningObjectId?: string | null | undefined;
  /**
   * The learning object type of the completion
   */
  learningObjectType?: CompletionLearningObjectType | null | undefined;
  /**
   * Provider's unique identifier of the content associated with the completion
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  remoteContentId?: string | null | undefined;
  /**
   * Provider's unique identifier of the course associated with the completion
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  remoteCourseId?: string | null | undefined;
  /**
   * Provider's unique identifier of the content external reference
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  remoteExternalId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Provider's unique identifier of the learning object related to the completion
   */
  remoteLearningObjectId?: string | null | undefined;
  /**
   * Provider's unique identifier of the user related to the completion
   */
  remoteUserId?: string | null | undefined;
  /**
   * The result of the completion
   */
  result?: CompletionSchemasResult | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The updated date of the completion
   */
  updatedAt?: string | null | undefined;
  /**
   * The user ID associated with this completion
   */
  userId?: string | null | undefined;
};

/** @internal */
export const Completion4$inboundSchema: z.ZodType<
  Completion4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Completion4$Outbound = {};

/** @internal */
export const Completion4$outboundSchema: z.ZodType<
  Completion4$Outbound,
  z.ZodTypeDef,
  Completion4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Completion4$ {
  /** @deprecated use `Completion4$inboundSchema` instead. */
  export const inboundSchema = Completion4$inboundSchema;
  /** @deprecated use `Completion4$outboundSchema` instead. */
  export const outboundSchema = Completion4$outboundSchema;
  /** @deprecated use `Completion4$Outbound` instead. */
  export type Outbound = Completion4$Outbound;
}

export function completion4ToJSON(completion4: Completion4): string {
  return JSON.stringify(Completion4$outboundSchema.parse(completion4));
}

export function completion4FromJSON(
  jsonString: string,
): SafeParseResult<Completion4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Completion4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Completion4' from JSON`,
  );
}

/** @internal */
export const CompletionSourceValue$inboundSchema: z.ZodType<
  CompletionSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Completion4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CompletionSourceValue$Outbound =
  | Completion4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CompletionSourceValue$outboundSchema: z.ZodType<
  CompletionSourceValue$Outbound,
  z.ZodTypeDef,
  CompletionSourceValue
> = z.union([
  z.lazy(() => Completion4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSourceValue$ {
  /** @deprecated use `CompletionSourceValue$inboundSchema` instead. */
  export const inboundSchema = CompletionSourceValue$inboundSchema;
  /** @deprecated use `CompletionSourceValue$outboundSchema` instead. */
  export const outboundSchema = CompletionSourceValue$outboundSchema;
  /** @deprecated use `CompletionSourceValue$Outbound` instead. */
  export type Outbound = CompletionSourceValue$Outbound;
}

export function completionSourceValueToJSON(
  completionSourceValue: CompletionSourceValue,
): string {
  return JSON.stringify(
    CompletionSourceValue$outboundSchema.parse(completionSourceValue),
  );
}

export function completionSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CompletionSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionSourceValue' from JSON`,
  );
}

/** @internal */
export const CompletionValue$inboundSchema: z.ZodType<
  CompletionValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CompletionValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CompletionValue$outboundSchema: z.ZodType<
  CompletionValueOpen,
  z.ZodTypeDef,
  CompletionValueOpen
> = z.union([
  z.nativeEnum(CompletionValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionValue$ {
  /** @deprecated use `CompletionValue$inboundSchema` instead. */
  export const inboundSchema = CompletionValue$inboundSchema;
  /** @deprecated use `CompletionValue$outboundSchema` instead. */
  export const outboundSchema = CompletionValue$outboundSchema;
}

/** @internal */
export const CompletionLearningObjectType$inboundSchema: z.ZodType<
  CompletionLearningObjectType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Completion4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CompletionLearningObjectType$Outbound = {
  source_value?:
    | Completion4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CompletionLearningObjectType$outboundSchema: z.ZodType<
  CompletionLearningObjectType$Outbound,
  z.ZodTypeDef,
  CompletionLearningObjectType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Completion4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionLearningObjectType$ {
  /** @deprecated use `CompletionLearningObjectType$inboundSchema` instead. */
  export const inboundSchema = CompletionLearningObjectType$inboundSchema;
  /** @deprecated use `CompletionLearningObjectType$outboundSchema` instead. */
  export const outboundSchema = CompletionLearningObjectType$outboundSchema;
  /** @deprecated use `CompletionLearningObjectType$Outbound` instead. */
  export type Outbound = CompletionLearningObjectType$Outbound;
}

export function completionLearningObjectTypeToJSON(
  completionLearningObjectType: CompletionLearningObjectType,
): string {
  return JSON.stringify(
    CompletionLearningObjectType$outboundSchema.parse(
      completionLearningObjectType,
    ),
  );
}

export function completionLearningObjectTypeFromJSON(
  jsonString: string,
): SafeParseResult<CompletionLearningObjectType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionLearningObjectType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionLearningObjectType' from JSON`,
  );
}

/** @internal */
export const CompletionSchemas4$inboundSchema: z.ZodType<
  CompletionSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CompletionSchemas4$Outbound = {};

/** @internal */
export const CompletionSchemas4$outboundSchema: z.ZodType<
  CompletionSchemas4$Outbound,
  z.ZodTypeDef,
  CompletionSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSchemas4$ {
  /** @deprecated use `CompletionSchemas4$inboundSchema` instead. */
  export const inboundSchema = CompletionSchemas4$inboundSchema;
  /** @deprecated use `CompletionSchemas4$outboundSchema` instead. */
  export const outboundSchema = CompletionSchemas4$outboundSchema;
  /** @deprecated use `CompletionSchemas4$Outbound` instead. */
  export type Outbound = CompletionSchemas4$Outbound;
}

export function completionSchemas4ToJSON(
  completionSchemas4: CompletionSchemas4,
): string {
  return JSON.stringify(
    CompletionSchemas4$outboundSchema.parse(completionSchemas4),
  );
}

export function completionSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<CompletionSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionSchemas4' from JSON`,
  );
}

/** @internal */
export const CompletionSchemasSourceValue$inboundSchema: z.ZodType<
  CompletionSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CompletionSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CompletionSchemasSourceValue$Outbound =
  | CompletionSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CompletionSchemasSourceValue$outboundSchema: z.ZodType<
  CompletionSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  CompletionSchemasSourceValue
> = z.union([
  z.lazy(() => CompletionSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSchemasSourceValue$ {
  /** @deprecated use `CompletionSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema = CompletionSchemasSourceValue$inboundSchema;
  /** @deprecated use `CompletionSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema = CompletionSchemasSourceValue$outboundSchema;
  /** @deprecated use `CompletionSchemasSourceValue$Outbound` instead. */
  export type Outbound = CompletionSchemasSourceValue$Outbound;
}

export function completionSchemasSourceValueToJSON(
  completionSchemasSourceValue: CompletionSchemasSourceValue,
): string {
  return JSON.stringify(
    CompletionSchemasSourceValue$outboundSchema.parse(
      completionSchemasSourceValue,
    ),
  );
}

export function completionSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CompletionSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const CompletionSchemasValue$inboundSchema: z.ZodType<
  CompletionSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CompletionSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CompletionSchemasValue$outboundSchema: z.ZodType<
  CompletionSchemasValueOpen,
  z.ZodTypeDef,
  CompletionSchemasValueOpen
> = z.union([
  z.nativeEnum(CompletionSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSchemasValue$ {
  /** @deprecated use `CompletionSchemasValue$inboundSchema` instead. */
  export const inboundSchema = CompletionSchemasValue$inboundSchema;
  /** @deprecated use `CompletionSchemasValue$outboundSchema` instead. */
  export const outboundSchema = CompletionSchemasValue$outboundSchema;
}

/** @internal */
export const CompletionSchemasResult$inboundSchema: z.ZodType<
  CompletionSchemasResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CompletionSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionSchemasValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CompletionSchemasResult$Outbound = {
  source_value?:
    | CompletionSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CompletionSchemasResult$outboundSchema: z.ZodType<
  CompletionSchemasResult$Outbound,
  z.ZodTypeDef,
  CompletionSchemasResult
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CompletionSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CompletionSchemasValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionSchemasResult$ {
  /** @deprecated use `CompletionSchemasResult$inboundSchema` instead. */
  export const inboundSchema = CompletionSchemasResult$inboundSchema;
  /** @deprecated use `CompletionSchemasResult$outboundSchema` instead. */
  export const outboundSchema = CompletionSchemasResult$outboundSchema;
  /** @deprecated use `CompletionSchemasResult$Outbound` instead. */
  export type Outbound = CompletionSchemasResult$Outbound;
}

export function completionSchemasResultToJSON(
  completionSchemasResult: CompletionSchemasResult,
): string {
  return JSON.stringify(
    CompletionSchemasResult$outboundSchema.parse(completionSchemasResult),
  );
}

export function completionSchemasResultFromJSON(
  jsonString: string,
): SafeParseResult<CompletionSchemasResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionSchemasResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionSchemasResult' from JSON`,
  );
}

/** @internal */
export const Completion$inboundSchema: z.ZodType<
  Completion,
  z.ZodTypeDef,
  unknown
> = z.object({
  completed_at: z.nullable(z.string()).optional(),
  content_external_reference: z.nullable(z.string()).optional(),
  content_id: z.nullable(z.string()).optional(),
  course_id: z.nullable(z.string()).optional(),
  created_at: z.nullable(z.string()).optional(),
  external_id: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  learning_object_external_reference: z.nullable(z.string()).optional(),
  learning_object_id: z.nullable(z.string()).optional(),
  learning_object_type: z.nullable(
    z.lazy(() => CompletionLearningObjectType$inboundSchema),
  ).optional(),
  remote_content_id: z.nullable(z.string()).optional(),
  remote_course_id: z.nullable(z.string()).optional(),
  remote_external_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_learning_object_id: z.nullable(z.string()).optional(),
  remote_user_id: z.nullable(z.string()).optional(),
  result: z.nullable(z.lazy(() => CompletionSchemasResult$inboundSchema))
    .optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "completed_at": "completedAt",
    "content_external_reference": "contentExternalReference",
    "content_id": "contentId",
    "course_id": "courseId",
    "created_at": "createdAt",
    "external_id": "externalId",
    "learning_object_external_reference": "learningObjectExternalReference",
    "learning_object_id": "learningObjectId",
    "learning_object_type": "learningObjectType",
    "remote_content_id": "remoteContentId",
    "remote_course_id": "remoteCourseId",
    "remote_external_id": "remoteExternalId",
    "remote_id": "remoteId",
    "remote_learning_object_id": "remoteLearningObjectId",
    "remote_user_id": "remoteUserId",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type Completion$Outbound = {
  completed_at?: string | null | undefined;
  content_external_reference?: string | null | undefined;
  content_id?: string | null | undefined;
  course_id?: string | null | undefined;
  created_at?: string | null | undefined;
  external_id?: string | null | undefined;
  id?: string | null | undefined;
  learning_object_external_reference?: string | null | undefined;
  learning_object_id?: string | null | undefined;
  learning_object_type?:
    | CompletionLearningObjectType$Outbound
    | null
    | undefined;
  remote_content_id?: string | null | undefined;
  remote_course_id?: string | null | undefined;
  remote_external_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_learning_object_id?: string | null | undefined;
  remote_user_id?: string | null | undefined;
  result?: CompletionSchemasResult$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const Completion$outboundSchema: z.ZodType<
  Completion$Outbound,
  z.ZodTypeDef,
  Completion
> = z.object({
  completedAt: z.nullable(z.string()).optional(),
  contentExternalReference: z.nullable(z.string()).optional(),
  contentId: z.nullable(z.string()).optional(),
  courseId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  learningObjectExternalReference: z.nullable(z.string()).optional(),
  learningObjectId: z.nullable(z.string()).optional(),
  learningObjectType: z.nullable(
    z.lazy(() => CompletionLearningObjectType$outboundSchema),
  ).optional(),
  remoteContentId: z.nullable(z.string()).optional(),
  remoteCourseId: z.nullable(z.string()).optional(),
  remoteExternalId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteLearningObjectId: z.nullable(z.string()).optional(),
  remoteUserId: z.nullable(z.string()).optional(),
  result: z.nullable(z.lazy(() => CompletionSchemasResult$outboundSchema))
    .optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    completedAt: "completed_at",
    contentExternalReference: "content_external_reference",
    contentId: "content_id",
    courseId: "course_id",
    createdAt: "created_at",
    externalId: "external_id",
    learningObjectExternalReference: "learning_object_external_reference",
    learningObjectId: "learning_object_id",
    learningObjectType: "learning_object_type",
    remoteContentId: "remote_content_id",
    remoteCourseId: "remote_course_id",
    remoteExternalId: "remote_external_id",
    remoteId: "remote_id",
    remoteLearningObjectId: "remote_learning_object_id",
    remoteUserId: "remote_user_id",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Completion$ {
  /** @deprecated use `Completion$inboundSchema` instead. */
  export const inboundSchema = Completion$inboundSchema;
  /** @deprecated use `Completion$outboundSchema` instead. */
  export const outboundSchema = Completion$outboundSchema;
  /** @deprecated use `Completion$Outbound` instead. */
  export type Outbound = Completion$Outbound;
}

export function completionToJSON(completion: Completion): string {
  return JSON.stringify(Completion$outboundSchema.parse(completion));
}

export function completionFromJSON(
  jsonString: string,
): SafeParseResult<Completion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Completion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Completion' from JSON`,
  );
}
