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

export type LmsCreateCompletionRequestDto4 = {};

export type LmsCreateCompletionRequestDtoSourceValue =
  | LmsCreateCompletionRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

export enum LmsCreateCompletionRequestDtoValue {
  Pass = "Pass",
  Fail = "Fail",
  UnmappedValue = "unmapped_value",
}
export type LmsCreateCompletionRequestDtoValueOpen = OpenEnum<
  typeof LmsCreateCompletionRequestDtoValue
>;

/**
 * The result of the completion
 */
export type LmsCreateCompletionRequestDtoResult = {
  sourceValue?:
    | LmsCreateCompletionRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: LmsCreateCompletionRequestDtoValueOpen | null | undefined;
};

export type LmsCreateCompletionRequestDto = {
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
   * The external reference of the learning object associated with this completion, this is the main identifier for creating completions.
   */
  learningObjectExternalReference?: string | null | undefined;
  /**
   * The id of the learning object associated with this completion. This is not required unless specified in an integration.
   */
  learningObjectId?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * The result of the completion
   */
  result?: LmsCreateCompletionRequestDtoResult | null | undefined;
  /**
   * ISO 8601 duration format representing the time spent on completing the learning object
   */
  timeSpent?: string | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDto4$inboundSchema: z.ZodType<
  LmsCreateCompletionRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LmsCreateCompletionRequestDto4$Outbound = {};

/** @internal */
export const LmsCreateCompletionRequestDto4$outboundSchema: z.ZodType<
  LmsCreateCompletionRequestDto4$Outbound,
  z.ZodTypeDef,
  LmsCreateCompletionRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDto4$ {
  /** @deprecated use `LmsCreateCompletionRequestDto4$inboundSchema` instead. */
  export const inboundSchema = LmsCreateCompletionRequestDto4$inboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDto4$outboundSchema` instead. */
  export const outboundSchema = LmsCreateCompletionRequestDto4$outboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDto4$Outbound` instead. */
  export type Outbound = LmsCreateCompletionRequestDto4$Outbound;
}

export function lmsCreateCompletionRequestDto4ToJSON(
  lmsCreateCompletionRequestDto4: LmsCreateCompletionRequestDto4,
): string {
  return JSON.stringify(
    LmsCreateCompletionRequestDto4$outboundSchema.parse(
      lmsCreateCompletionRequestDto4,
    ),
  );
}

export function lmsCreateCompletionRequestDto4FromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateCompletionRequestDto4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateCompletionRequestDto4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateCompletionRequestDto4' from JSON`,
  );
}

/** @internal */
export const LmsCreateCompletionRequestDtoSourceValue$inboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => LmsCreateCompletionRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type LmsCreateCompletionRequestDtoSourceValue$Outbound =
  | LmsCreateCompletionRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const LmsCreateCompletionRequestDtoSourceValue$outboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  LmsCreateCompletionRequestDtoSourceValue
> = z.union([
  z.lazy(() => LmsCreateCompletionRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDtoSourceValue$ {
  /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    LmsCreateCompletionRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateCompletionRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = LmsCreateCompletionRequestDtoSourceValue$Outbound;
}

export function lmsCreateCompletionRequestDtoSourceValueToJSON(
  lmsCreateCompletionRequestDtoSourceValue:
    LmsCreateCompletionRequestDtoSourceValue,
): string {
  return JSON.stringify(
    LmsCreateCompletionRequestDtoSourceValue$outboundSchema.parse(
      lmsCreateCompletionRequestDtoSourceValue,
    ),
  );
}

export function lmsCreateCompletionRequestDtoSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  LmsCreateCompletionRequestDtoSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LmsCreateCompletionRequestDtoSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LmsCreateCompletionRequestDtoSourceValue' from JSON`,
  );
}

/** @internal */
export const LmsCreateCompletionRequestDtoValue$inboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(LmsCreateCompletionRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const LmsCreateCompletionRequestDtoValue$outboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoValueOpen,
  z.ZodTypeDef,
  LmsCreateCompletionRequestDtoValueOpen
> = z.union([
  z.nativeEnum(LmsCreateCompletionRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDtoValue$ {
  /** @deprecated use `LmsCreateCompletionRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = LmsCreateCompletionRequestDtoValue$inboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateCompletionRequestDtoValue$outboundSchema;
}

/** @internal */
export const LmsCreateCompletionRequestDtoResult$inboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => LmsCreateCompletionRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsCreateCompletionRequestDtoValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type LmsCreateCompletionRequestDtoResult$Outbound = {
  source_value?:
    | LmsCreateCompletionRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDtoResult$outboundSchema: z.ZodType<
  LmsCreateCompletionRequestDtoResult$Outbound,
  z.ZodTypeDef,
  LmsCreateCompletionRequestDtoResult
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => LmsCreateCompletionRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(LmsCreateCompletionRequestDtoValue$outboundSchema)
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
export namespace LmsCreateCompletionRequestDtoResult$ {
  /** @deprecated use `LmsCreateCompletionRequestDtoResult$inboundSchema` instead. */
  export const inboundSchema =
    LmsCreateCompletionRequestDtoResult$inboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDtoResult$outboundSchema` instead. */
  export const outboundSchema =
    LmsCreateCompletionRequestDtoResult$outboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDtoResult$Outbound` instead. */
  export type Outbound = LmsCreateCompletionRequestDtoResult$Outbound;
}

export function lmsCreateCompletionRequestDtoResultToJSON(
  lmsCreateCompletionRequestDtoResult: LmsCreateCompletionRequestDtoResult,
): string {
  return JSON.stringify(
    LmsCreateCompletionRequestDtoResult$outboundSchema.parse(
      lmsCreateCompletionRequestDtoResult,
    ),
  );
}

export function lmsCreateCompletionRequestDtoResultFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateCompletionRequestDtoResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsCreateCompletionRequestDtoResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateCompletionRequestDtoResult' from JSON`,
  );
}

/** @internal */
export const LmsCreateCompletionRequestDto$inboundSchema: z.ZodType<
  LmsCreateCompletionRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  completed_at: z.nullable(z.string()).optional(),
  content_external_reference: z.nullable(z.string()).optional(),
  content_id: z.nullable(z.string()).optional(),
  learning_object_external_reference: z.nullable(z.string()).optional(),
  learning_object_id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  result: z.nullable(
    z.lazy(() => LmsCreateCompletionRequestDtoResult$inboundSchema),
  ).optional(),
  time_spent: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "completed_at": "completedAt",
    "content_external_reference": "contentExternalReference",
    "content_id": "contentId",
    "learning_object_external_reference": "learningObjectExternalReference",
    "learning_object_id": "learningObjectId",
    "time_spent": "timeSpent",
  });
});

/** @internal */
export type LmsCreateCompletionRequestDto$Outbound = {
  completed_at?: string | null | undefined;
  content_external_reference?: string | null | undefined;
  content_id?: string | null | undefined;
  learning_object_external_reference?: string | null | undefined;
  learning_object_id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  result?: LmsCreateCompletionRequestDtoResult$Outbound | null | undefined;
  time_spent?: string | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDto$outboundSchema: z.ZodType<
  LmsCreateCompletionRequestDto$Outbound,
  z.ZodTypeDef,
  LmsCreateCompletionRequestDto
> = z.object({
  completedAt: z.nullable(z.string()).optional(),
  contentExternalReference: z.nullable(z.string()).optional(),
  contentId: z.nullable(z.string()).optional(),
  learningObjectExternalReference: z.nullable(z.string()).optional(),
  learningObjectId: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  result: z.nullable(
    z.lazy(() => LmsCreateCompletionRequestDtoResult$outboundSchema),
  ).optional(),
  timeSpent: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    completedAt: "completed_at",
    contentExternalReference: "content_external_reference",
    contentId: "content_id",
    learningObjectExternalReference: "learning_object_external_reference",
    learningObjectId: "learning_object_id",
    timeSpent: "time_spent",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDto$ {
  /** @deprecated use `LmsCreateCompletionRequestDto$inboundSchema` instead. */
  export const inboundSchema = LmsCreateCompletionRequestDto$inboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDto$outboundSchema` instead. */
  export const outboundSchema = LmsCreateCompletionRequestDto$outboundSchema;
  /** @deprecated use `LmsCreateCompletionRequestDto$Outbound` instead. */
  export type Outbound = LmsCreateCompletionRequestDto$Outbound;
}

export function lmsCreateCompletionRequestDtoToJSON(
  lmsCreateCompletionRequestDto: LmsCreateCompletionRequestDto,
): string {
  return JSON.stringify(
    LmsCreateCompletionRequestDto$outboundSchema.parse(
      lmsCreateCompletionRequestDto,
    ),
  );
}

export function lmsCreateCompletionRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateCompletionRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateCompletionRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateCompletionRequestDto' from JSON`,
  );
}
