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

export type Answer4 = {};

/**
 * The source value of the answer type.
 */
export type AnswerSourceValue =
  | Answer4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the answer.
 */
export enum AnswerValue {
  ShortText = "short_text",
  LongText = "long_text",
  Attachment = "attachment",
  MultiSelect = "multi_select",
  SingleSelect = "single_select",
  Boolean = "boolean",
  Number = "number",
  Date = "date",
  Video = "video",
}
/**
 * The type of the answer.
 */
export type AnswerValueOpen = OpenEnum<typeof AnswerValue>;

/**
 * Type of the answer
 */
export type Type = {
  /**
   * The source value of the answer type.
   */
  sourceValue?:
    | Answer4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the answer.
   */
  value?: AnswerValueOpen | null | undefined;
};

export type Answer = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Type of the answer
   */
  type?: Type | null | undefined;
  /**
   * Values of the answer
   */
  values?: Array<string> | null | undefined;
};

/** @internal */
export const Answer4$inboundSchema: z.ZodType<Answer4, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Answer4$Outbound = {};

/** @internal */
export const Answer4$outboundSchema: z.ZodType<
  Answer4$Outbound,
  z.ZodTypeDef,
  Answer4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Answer4$ {
  /** @deprecated use `Answer4$inboundSchema` instead. */
  export const inboundSchema = Answer4$inboundSchema;
  /** @deprecated use `Answer4$outboundSchema` instead. */
  export const outboundSchema = Answer4$outboundSchema;
  /** @deprecated use `Answer4$Outbound` instead. */
  export type Outbound = Answer4$Outbound;
}

export function answer4ToJSON(answer4: Answer4): string {
  return JSON.stringify(Answer4$outboundSchema.parse(answer4));
}

export function answer4FromJSON(
  jsonString: string,
): SafeParseResult<Answer4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Answer4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Answer4' from JSON`,
  );
}

/** @internal */
export const AnswerSourceValue$inboundSchema: z.ZodType<
  AnswerSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Answer4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AnswerSourceValue$Outbound =
  | Answer4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AnswerSourceValue$outboundSchema: z.ZodType<
  AnswerSourceValue$Outbound,
  z.ZodTypeDef,
  AnswerSourceValue
> = z.union([
  z.lazy(() => Answer4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnswerSourceValue$ {
  /** @deprecated use `AnswerSourceValue$inboundSchema` instead. */
  export const inboundSchema = AnswerSourceValue$inboundSchema;
  /** @deprecated use `AnswerSourceValue$outboundSchema` instead. */
  export const outboundSchema = AnswerSourceValue$outboundSchema;
  /** @deprecated use `AnswerSourceValue$Outbound` instead. */
  export type Outbound = AnswerSourceValue$Outbound;
}

export function answerSourceValueToJSON(
  answerSourceValue: AnswerSourceValue,
): string {
  return JSON.stringify(
    AnswerSourceValue$outboundSchema.parse(answerSourceValue),
  );
}

export function answerSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<AnswerSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnswerSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnswerSourceValue' from JSON`,
  );
}

/** @internal */
export const AnswerValue$inboundSchema: z.ZodType<
  AnswerValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AnswerValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AnswerValue$outboundSchema: z.ZodType<
  AnswerValueOpen,
  z.ZodTypeDef,
  AnswerValueOpen
> = z.union([
  z.nativeEnum(AnswerValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnswerValue$ {
  /** @deprecated use `AnswerValue$inboundSchema` instead. */
  export const inboundSchema = AnswerValue$inboundSchema;
  /** @deprecated use `AnswerValue$outboundSchema` instead. */
  export const outboundSchema = AnswerValue$outboundSchema;
}

/** @internal */
export const Type$inboundSchema: z.ZodType<Type, z.ZodTypeDef, unknown> = z
  .object({
    source_value: z.nullable(
      z.union([
        z.lazy(() => Answer4$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(AnswerValue$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "source_value": "sourceValue",
    });
  });

/** @internal */
export type Type$Outbound = {
  source_value?:
    | Answer4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const Type$outboundSchema: z.ZodType<Type$Outbound, z.ZodTypeDef, Type> =
  z.object({
    sourceValue: z.nullable(
      z.union([
        z.lazy(() => Answer4$outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(AnswerValue$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      sourceValue: "source_value",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
  /** @deprecated use `Type$Outbound` instead. */
  export type Outbound = Type$Outbound;
}

export function typeToJSON(type: Type): string {
  return JSON.stringify(Type$outboundSchema.parse(type));
}

export function typeFromJSON(
  jsonString: string,
): SafeParseResult<Type, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Type$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Type' from JSON`,
  );
}

/** @internal */
export const Answer$inboundSchema: z.ZodType<Answer, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    remote_id: z.nullable(z.string()).optional(),
    type: z.nullable(z.lazy(() => Type$inboundSchema)).optional(),
    values: z.nullable(z.array(z.string())).optional(),
  }).transform((v) => {
    return remap$(v, {
      "remote_id": "remoteId",
    });
  });

/** @internal */
export type Answer$Outbound = {
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  type?: Type$Outbound | null | undefined;
  values?: Array<string> | null | undefined;
};

/** @internal */
export const Answer$outboundSchema: z.ZodType<
  Answer$Outbound,
  z.ZodTypeDef,
  Answer
> = z.object({
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => Type$outboundSchema)).optional(),
  values: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Answer$ {
  /** @deprecated use `Answer$inboundSchema` instead. */
  export const inboundSchema = Answer$inboundSchema;
  /** @deprecated use `Answer$outboundSchema` instead. */
  export const outboundSchema = Answer$outboundSchema;
  /** @deprecated use `Answer$Outbound` instead. */
  export type Outbound = Answer$Outbound;
}

export function answerToJSON(answer: Answer): string {
  return JSON.stringify(Answer$outboundSchema.parse(answer));
}

export function answerFromJSON(
  jsonString: string,
): SafeParseResult<Answer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Answer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Answer' from JSON`,
  );
}
