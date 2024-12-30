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

export type LmsCreateAssignmentRequestDto4 = {};

export type LmsCreateAssignmentRequestDtoSourceValue =
  | LmsCreateAssignmentRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

export enum LmsCreateAssignmentRequestDtoValue {
  Pending = "pending",
  InProgress = "in_progress",
  Completed = "completed",
}
export type LmsCreateAssignmentRequestDtoValueOpen = OpenEnum<
  typeof LmsCreateAssignmentRequestDtoValue
>;

/**
 * The status of the assignment
 */
export type LmsCreateAssignmentRequestDtoStatus = {
  sourceValue?:
    | LmsCreateAssignmentRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: LmsCreateAssignmentRequestDtoValueOpen | null | undefined;
};

export type LmsCreateAssignmentRequestDto = {
  /**
   * The date the assignment was created
   */
  createdAt?: string | null | undefined;
  /**
   * The date the assignment is due to be completed
   */
  dueDate?: string | null | undefined;
  /**
   * The external reference of the learning object associated with this assignment
   */
  learningObjectExternalReference?: string | null | undefined;
  /**
   * The learning_object_id associated with this assignment
   */
  learningObjectId?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * The progress associated with this assigment
   */
  progress?: number | null | undefined;
  /**
   * The status of the assignment
   */
  status?: LmsCreateAssignmentRequestDtoStatus | null | undefined;
};

/** @internal */
export const LmsCreateAssignmentRequestDto4$inboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LmsCreateAssignmentRequestDto4$Outbound = {};

/** @internal */
export const LmsCreateAssignmentRequestDto4$outboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDto4$Outbound,
  z.ZodTypeDef,
  LmsCreateAssignmentRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateAssignmentRequestDto4$ {
  /** @deprecated use `LmsCreateAssignmentRequestDto4$inboundSchema` instead. */
  export const inboundSchema = LmsCreateAssignmentRequestDto4$inboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDto4$outboundSchema` instead. */
  export const outboundSchema = LmsCreateAssignmentRequestDto4$outboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDto4$Outbound` instead. */
  export type Outbound = LmsCreateAssignmentRequestDto4$Outbound;
}

export function lmsCreateAssignmentRequestDto4ToJSON(
  lmsCreateAssignmentRequestDto4: LmsCreateAssignmentRequestDto4,
): string {
  return JSON.stringify(
    LmsCreateAssignmentRequestDto4$outboundSchema.parse(
      lmsCreateAssignmentRequestDto4,
    ),
  );
}

export function lmsCreateAssignmentRequestDto4FromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateAssignmentRequestDto4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateAssignmentRequestDto4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateAssignmentRequestDto4' from JSON`,
  );
}

/** @internal */
export const LmsCreateAssignmentRequestDtoSourceValue$inboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => LmsCreateAssignmentRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type LmsCreateAssignmentRequestDtoSourceValue$Outbound =
  | LmsCreateAssignmentRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const LmsCreateAssignmentRequestDtoSourceValue$outboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  LmsCreateAssignmentRequestDtoSourceValue
> = z.union([
  z.lazy(() => LmsCreateAssignmentRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateAssignmentRequestDtoSourceValue$ {
  /** @deprecated use `LmsCreateAssignmentRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    LmsCreateAssignmentRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateAssignmentRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = LmsCreateAssignmentRequestDtoSourceValue$Outbound;
}

export function lmsCreateAssignmentRequestDtoSourceValueToJSON(
  lmsCreateAssignmentRequestDtoSourceValue:
    LmsCreateAssignmentRequestDtoSourceValue,
): string {
  return JSON.stringify(
    LmsCreateAssignmentRequestDtoSourceValue$outboundSchema.parse(
      lmsCreateAssignmentRequestDtoSourceValue,
    ),
  );
}

export function lmsCreateAssignmentRequestDtoSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  LmsCreateAssignmentRequestDtoSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LmsCreateAssignmentRequestDtoSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LmsCreateAssignmentRequestDtoSourceValue' from JSON`,
  );
}

/** @internal */
export const LmsCreateAssignmentRequestDtoValue$inboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(LmsCreateAssignmentRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const LmsCreateAssignmentRequestDtoValue$outboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoValueOpen,
  z.ZodTypeDef,
  LmsCreateAssignmentRequestDtoValueOpen
> = z.union([
  z.nativeEnum(LmsCreateAssignmentRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateAssignmentRequestDtoValue$ {
  /** @deprecated use `LmsCreateAssignmentRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = LmsCreateAssignmentRequestDtoValue$inboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateAssignmentRequestDtoValue$outboundSchema;
}

/** @internal */
export const LmsCreateAssignmentRequestDtoStatus$inboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => LmsCreateAssignmentRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsCreateAssignmentRequestDtoValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type LmsCreateAssignmentRequestDtoStatus$Outbound = {
  source_value?:
    | LmsCreateAssignmentRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const LmsCreateAssignmentRequestDtoStatus$outboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDtoStatus$Outbound,
  z.ZodTypeDef,
  LmsCreateAssignmentRequestDtoStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => LmsCreateAssignmentRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsCreateAssignmentRequestDtoValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateAssignmentRequestDtoStatus$ {
  /** @deprecated use `LmsCreateAssignmentRequestDtoStatus$inboundSchema` instead. */
  export const inboundSchema =
    LmsCreateAssignmentRequestDtoStatus$inboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDtoStatus$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateAssignmentRequestDtoStatus$outboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDtoStatus$Outbound` instead. */
  export type Outbound = LmsCreateAssignmentRequestDtoStatus$Outbound;
}

export function lmsCreateAssignmentRequestDtoStatusToJSON(
  lmsCreateAssignmentRequestDtoStatus: LmsCreateAssignmentRequestDtoStatus,
): string {
  return JSON.stringify(
    LmsCreateAssignmentRequestDtoStatus$outboundSchema.parse(
      lmsCreateAssignmentRequestDtoStatus,
    ),
  );
}

export function lmsCreateAssignmentRequestDtoStatusFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateAssignmentRequestDtoStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsCreateAssignmentRequestDtoStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateAssignmentRequestDtoStatus' from JSON`,
  );
}

/** @internal */
export const LmsCreateAssignmentRequestDto$inboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(z.string()).optional(),
  due_date: z.nullable(z.string()).optional(),
  learning_object_external_reference: z.nullable(z.string()).optional(),
  learning_object_id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  progress: z.nullable(z.number()).optional(),
  status: z.nullable(
    z.lazy(() => LmsCreateAssignmentRequestDtoStatus$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "due_date": "dueDate",
    "learning_object_external_reference": "learningObjectExternalReference",
    "learning_object_id": "learningObjectId",
  });
});

/** @internal */
export type LmsCreateAssignmentRequestDto$Outbound = {
  created_at?: string | null | undefined;
  due_date?: string | null | undefined;
  learning_object_external_reference?: string | null | undefined;
  learning_object_id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  progress?: number | null | undefined;
  status?: LmsCreateAssignmentRequestDtoStatus$Outbound | null | undefined;
};

/** @internal */
export const LmsCreateAssignmentRequestDto$outboundSchema: z.ZodType<
  LmsCreateAssignmentRequestDto$Outbound,
  z.ZodTypeDef,
  LmsCreateAssignmentRequestDto
> = z.object({
  createdAt: z.nullable(z.string()).optional(),
  dueDate: z.nullable(z.string()).optional(),
  learningObjectExternalReference: z.nullable(z.string()).optional(),
  learningObjectId: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  progress: z.nullable(z.number()).optional(),
  status: z.nullable(
    z.lazy(() => LmsCreateAssignmentRequestDtoStatus$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    dueDate: "due_date",
    learningObjectExternalReference: "learning_object_external_reference",
    learningObjectId: "learning_object_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateAssignmentRequestDto$ {
  /** @deprecated use `LmsCreateAssignmentRequestDto$inboundSchema` instead. */
  export const inboundSchema = LmsCreateAssignmentRequestDto$inboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDto$outboundSchema` instead. */
  export const outboundSchema = LmsCreateAssignmentRequestDto$outboundSchema;
  /** @deprecated use `LmsCreateAssignmentRequestDto$Outbound` instead. */
  export type Outbound = LmsCreateAssignmentRequestDto$Outbound;
}

export function lmsCreateAssignmentRequestDtoToJSON(
  lmsCreateAssignmentRequestDto: LmsCreateAssignmentRequestDto,
): string {
  return JSON.stringify(
    LmsCreateAssignmentRequestDto$outboundSchema.parse(
      lmsCreateAssignmentRequestDto,
    ),
  );
}

export function lmsCreateAssignmentRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateAssignmentRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateAssignmentRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateAssignmentRequestDto' from JSON`,
  );
}