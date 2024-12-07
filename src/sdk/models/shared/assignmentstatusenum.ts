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

export type Four = {};

export type SourceValue = Four | string | number | boolean | Array<any>;

export enum Value {
  Pending = "pending",
  InProgress = "in_progress",
  Completed = "completed",
}
export type ValueOpen = OpenEnum<typeof Value>;

export type AssignmentStatusEnum = {
  sourceValue?:
    | Four
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: ValueOpen | null | undefined;
};

/** @internal */
export const Four$inboundSchema: z.ZodType<Four, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Four$Outbound = {};

/** @internal */
export const Four$outboundSchema: z.ZodType<Four$Outbound, z.ZodTypeDef, Four> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Four$ {
  /** @deprecated use `Four$inboundSchema` instead. */
  export const inboundSchema = Four$inboundSchema;
  /** @deprecated use `Four$outboundSchema` instead. */
  export const outboundSchema = Four$outboundSchema;
  /** @deprecated use `Four$Outbound` instead. */
  export type Outbound = Four$Outbound;
}

export function fourToJSON(four: Four): string {
  return JSON.stringify(Four$outboundSchema.parse(four));
}

export function fourFromJSON(
  jsonString: string,
): SafeParseResult<Four, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Four$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Four' from JSON`,
  );
}

/** @internal */
export const SourceValue$inboundSchema: z.ZodType<
  SourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Four$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type SourceValue$Outbound =
  | Four$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const SourceValue$outboundSchema: z.ZodType<
  SourceValue$Outbound,
  z.ZodTypeDef,
  SourceValue
> = z.union([
  z.lazy(() => Four$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceValue$ {
  /** @deprecated use `SourceValue$inboundSchema` instead. */
  export const inboundSchema = SourceValue$inboundSchema;
  /** @deprecated use `SourceValue$outboundSchema` instead. */
  export const outboundSchema = SourceValue$outboundSchema;
  /** @deprecated use `SourceValue$Outbound` instead. */
  export type Outbound = SourceValue$Outbound;
}

export function sourceValueToJSON(sourceValue: SourceValue): string {
  return JSON.stringify(SourceValue$outboundSchema.parse(sourceValue));
}

export function sourceValueFromJSON(
  jsonString: string,
): SafeParseResult<SourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SourceValue' from JSON`,
  );
}

/** @internal */
export const Value$inboundSchema: z.ZodType<ValueOpen, z.ZodTypeDef, unknown> =
  z
    .union([
      z.nativeEnum(Value),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const Value$outboundSchema: z.ZodType<
  ValueOpen,
  z.ZodTypeDef,
  ValueOpen
> = z.union([
  z.nativeEnum(Value),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
}

/** @internal */
export const AssignmentStatusEnum$inboundSchema: z.ZodType<
  AssignmentStatusEnum,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Four$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(Value$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AssignmentStatusEnum$Outbound = {
  source_value?:
    | Four$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AssignmentStatusEnum$outboundSchema: z.ZodType<
  AssignmentStatusEnum$Outbound,
  z.ZodTypeDef,
  AssignmentStatusEnum
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Four$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(Value$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssignmentStatusEnum$ {
  /** @deprecated use `AssignmentStatusEnum$inboundSchema` instead. */
  export const inboundSchema = AssignmentStatusEnum$inboundSchema;
  /** @deprecated use `AssignmentStatusEnum$outboundSchema` instead. */
  export const outboundSchema = AssignmentStatusEnum$outboundSchema;
  /** @deprecated use `AssignmentStatusEnum$Outbound` instead. */
  export type Outbound = AssignmentStatusEnum$Outbound;
}

export function assignmentStatusEnumToJSON(
  assignmentStatusEnum: AssignmentStatusEnum,
): string {
  return JSON.stringify(
    AssignmentStatusEnum$outboundSchema.parse(assignmentStatusEnum),
  );
}

export function assignmentStatusEnumFromJSON(
  jsonString: string,
): SafeParseResult<AssignmentStatusEnum, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssignmentStatusEnum$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssignmentStatusEnum' from JSON`,
  );
}
