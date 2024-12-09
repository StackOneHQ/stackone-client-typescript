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
  AssignmentStatusEnum,
  AssignmentStatusEnum$inboundSchema,
  AssignmentStatusEnum$Outbound,
  AssignmentStatusEnum$outboundSchema,
} from "./assignmentstatusenum.js";

export type Assignment4 = {};

export type AssignmentSourceValue =
  | Assignment4
  | string
  | number
  | boolean
  | Array<any>;

export enum AssignmentValue {
  Content = "content",
  Course = "course",
  Collection = "collection",
}
export type AssignmentValueOpen = OpenEnum<typeof AssignmentValue>;

/**
 * The learning object type of the assignment
 */
export type LearningObjectType = {
  sourceValue?:
    | Assignment4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: AssignmentValueOpen | null | undefined;
};

export type Assignment = {
  /**
   * The course ID associated with this assignment
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  courseId?: string | null | undefined;
  /**
   * The date the assignment was created
   */
  createdAt?: string | null | undefined;
  /**
   * The date the assignment is due to be completed
   */
  dueDate?: string | null | undefined;
  /**
   * The ID associated with this assignment
   */
  id?: string | null | undefined;
  /**
   * The external reference of the learning object associated with this assignment
   */
  learningObjectExternalReference?: string | null | undefined;
  /**
   * The learning_object_id associated with this assignment
   */
  learningObjectId?: string | null | undefined;
  /**
   * The learning object type of the assignment
   */
  learningObjectType?: LearningObjectType | null | undefined;
  /**
   * The progress associated with this assigment
   */
  progress?: number | null | undefined;
  /**
   * Provider's unique identifier of the course related to the assignment
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  remoteCourseId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Provider's unique identifier of the learning object related to the assignment
   */
  remoteLearningObjectId?: string | null | undefined;
  /**
   * Provider's unique identifier of the user related to the assignment
   */
  remoteUserId?: string | null | undefined;
  /**
   * The status of the assignment
   */
  status?: Array<AssignmentStatusEnum> | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The date the assignment was last updated
   */
  updatedAt?: string | null | undefined;
  /**
   * The user ID associated with this assignment
   */
  userId?: string | null | undefined;
};

/** @internal */
export const Assignment4$inboundSchema: z.ZodType<
  Assignment4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Assignment4$Outbound = {};

/** @internal */
export const Assignment4$outboundSchema: z.ZodType<
  Assignment4$Outbound,
  z.ZodTypeDef,
  Assignment4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Assignment4$ {
  /** @deprecated use `Assignment4$inboundSchema` instead. */
  export const inboundSchema = Assignment4$inboundSchema;
  /** @deprecated use `Assignment4$outboundSchema` instead. */
  export const outboundSchema = Assignment4$outboundSchema;
  /** @deprecated use `Assignment4$Outbound` instead. */
  export type Outbound = Assignment4$Outbound;
}

export function assignment4ToJSON(assignment4: Assignment4): string {
  return JSON.stringify(Assignment4$outboundSchema.parse(assignment4));
}

export function assignment4FromJSON(
  jsonString: string,
): SafeParseResult<Assignment4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Assignment4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Assignment4' from JSON`,
  );
}

/** @internal */
export const AssignmentSourceValue$inboundSchema: z.ZodType<
  AssignmentSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Assignment4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AssignmentSourceValue$Outbound =
  | Assignment4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AssignmentSourceValue$outboundSchema: z.ZodType<
  AssignmentSourceValue$Outbound,
  z.ZodTypeDef,
  AssignmentSourceValue
> = z.union([
  z.lazy(() => Assignment4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentSourceValue$ {
  /** @deprecated use `AssignmentSourceValue$inboundSchema` instead. */
  export const inboundSchema = AssignmentSourceValue$inboundSchema;
  /** @deprecated use `AssignmentSourceValue$outboundSchema` instead. */
  export const outboundSchema = AssignmentSourceValue$outboundSchema;
  /** @deprecated use `AssignmentSourceValue$Outbound` instead. */
  export type Outbound = AssignmentSourceValue$Outbound;
}

export function assignmentSourceValueToJSON(
  assignmentSourceValue: AssignmentSourceValue,
): string {
  return JSON.stringify(
    AssignmentSourceValue$outboundSchema.parse(assignmentSourceValue),
  );
}

export function assignmentSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<AssignmentSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignmentSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignmentSourceValue' from JSON`,
  );
}

/** @internal */
export const AssignmentValue$inboundSchema: z.ZodType<
  AssignmentValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AssignmentValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AssignmentValue$outboundSchema: z.ZodType<
  AssignmentValueOpen,
  z.ZodTypeDef,
  AssignmentValueOpen
> = z.union([
  z.nativeEnum(AssignmentValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentValue$ {
  /** @deprecated use `AssignmentValue$inboundSchema` instead. */
  export const inboundSchema = AssignmentValue$inboundSchema;
  /** @deprecated use `AssignmentValue$outboundSchema` instead. */
  export const outboundSchema = AssignmentValue$outboundSchema;
}

/** @internal */
export const LearningObjectType$inboundSchema: z.ZodType<
  LearningObjectType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Assignment4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssignmentValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type LearningObjectType$Outbound = {
  source_value?:
    | Assignment4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const LearningObjectType$outboundSchema: z.ZodType<
  LearningObjectType$Outbound,
  z.ZodTypeDef,
  LearningObjectType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Assignment4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssignmentValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LearningObjectType$ {
  /** @deprecated use `LearningObjectType$inboundSchema` instead. */
  export const inboundSchema = LearningObjectType$inboundSchema;
  /** @deprecated use `LearningObjectType$outboundSchema` instead. */
  export const outboundSchema = LearningObjectType$outboundSchema;
  /** @deprecated use `LearningObjectType$Outbound` instead. */
  export type Outbound = LearningObjectType$Outbound;
}

export function learningObjectTypeToJSON(
  learningObjectType: LearningObjectType,
): string {
  return JSON.stringify(
    LearningObjectType$outboundSchema.parse(learningObjectType),
  );
}

export function learningObjectTypeFromJSON(
  jsonString: string,
): SafeParseResult<LearningObjectType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LearningObjectType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LearningObjectType' from JSON`,
  );
}

/** @internal */
export const Assignment$inboundSchema: z.ZodType<
  Assignment,
  z.ZodTypeDef,
  unknown
> = z.object({
  course_id: z.nullable(z.string()).optional(),
  created_at: z.nullable(z.string()).optional(),
  due_date: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  learning_object_external_reference: z.nullable(z.string()).optional(),
  learning_object_id: z.nullable(z.string()).optional(),
  learning_object_type: z.nullable(
    z.lazy(() => LearningObjectType$inboundSchema),
  ).optional(),
  progress: z.nullable(z.number()).optional(),
  remote_course_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_learning_object_id: z.nullable(z.string()).optional(),
  remote_user_id: z.nullable(z.string()).optional(),
  status: z.nullable(z.array(AssignmentStatusEnum$inboundSchema)).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "course_id": "courseId",
    "created_at": "createdAt",
    "due_date": "dueDate",
    "learning_object_external_reference": "learningObjectExternalReference",
    "learning_object_id": "learningObjectId",
    "learning_object_type": "learningObjectType",
    "remote_course_id": "remoteCourseId",
    "remote_id": "remoteId",
    "remote_learning_object_id": "remoteLearningObjectId",
    "remote_user_id": "remoteUserId",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type Assignment$Outbound = {
  course_id?: string | null | undefined;
  created_at?: string | null | undefined;
  due_date?: string | null | undefined;
  id?: string | null | undefined;
  learning_object_external_reference?: string | null | undefined;
  learning_object_id?: string | null | undefined;
  learning_object_type?: LearningObjectType$Outbound | null | undefined;
  progress?: number | null | undefined;
  remote_course_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_learning_object_id?: string | null | undefined;
  remote_user_id?: string | null | undefined;
  status?: Array<AssignmentStatusEnum$Outbound> | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const Assignment$outboundSchema: z.ZodType<
  Assignment$Outbound,
  z.ZodTypeDef,
  Assignment
> = z.object({
  courseId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.string()).optional(),
  dueDate: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  learningObjectExternalReference: z.nullable(z.string()).optional(),
  learningObjectId: z.nullable(z.string()).optional(),
  learningObjectType: z.nullable(
    z.lazy(() => LearningObjectType$outboundSchema),
  ).optional(),
  progress: z.nullable(z.number()).optional(),
  remoteCourseId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteLearningObjectId: z.nullable(z.string()).optional(),
  remoteUserId: z.nullable(z.string()).optional(),
  status: z.nullable(z.array(AssignmentStatusEnum$outboundSchema)).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    courseId: "course_id",
    createdAt: "created_at",
    dueDate: "due_date",
    learningObjectExternalReference: "learning_object_external_reference",
    learningObjectId: "learning_object_id",
    learningObjectType: "learning_object_type",
    remoteCourseId: "remote_course_id",
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
export namespace Assignment$ {
  /** @deprecated use `Assignment$inboundSchema` instead. */
  export const inboundSchema = Assignment$inboundSchema;
  /** @deprecated use `Assignment$outboundSchema` instead. */
  export const outboundSchema = Assignment$outboundSchema;
  /** @deprecated use `Assignment$Outbound` instead. */
  export type Outbound = Assignment$Outbound;
}

export function assignmentToJSON(assignment: Assignment): string {
  return JSON.stringify(Assignment$outboundSchema.parse(assignment));
}

export function assignmentFromJSON(
  jsonString: string,
): SafeParseResult<Assignment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Assignment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Assignment' from JSON`,
  );
}
