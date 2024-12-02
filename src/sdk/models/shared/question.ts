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
  QuestionMultipleChoiceAnswers,
  QuestionMultipleChoiceAnswers$inboundSchema,
  QuestionMultipleChoiceAnswers$Outbound,
  QuestionMultipleChoiceAnswers$outboundSchema,
} from "./questionmultiplechoiceanswers.js";

export type QuestionSchemas4 = {};

/**
 * The source value of the question's condition type
 */
export type QuestionSchemasSourceValue =
  | QuestionSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the question's condition
 */
export enum QuestionSchemasValue {
  EqualsTo = "equals_to",
  Contains = "contains",
}
/**
 * The type of the question's condition
 */
export type QuestionSchemasValueOpen = OpenEnum<typeof QuestionSchemasValue>;

export type ConditionType = {
  /**
   * The source value of the question's condition type
   */
  sourceValue?:
    | QuestionSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the question's condition
   */
  value?: QuestionSchemasValueOpen | null | undefined;
};

export type ParentQuestion = {
  conditionType?: ConditionType | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * List of parent questions's option IDs
   */
  optionIds?: Array<string> | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

export enum Question2 {
  True = "true",
  False = "false",
}

export type QuestionRequired = boolean | Question2;

export type Question4 = {};

/**
 * The source value of the questions type.
 */
export type QuestionSourceValue =
  | Question4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the questions.
 */
export enum QuestionValue {
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
 * The type of the questions.
 */
export type QuestionValueOpen = OpenEnum<typeof QuestionValue>;

export type QuestionType = {
  /**
   * The source value of the questions type.
   */
  sourceValue?:
    | Question4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the questions.
   */
  value?: QuestionValueOpen | null | undefined;
};

export type Question = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  multipleChoiceAnswers?:
    | Array<QuestionMultipleChoiceAnswers>
    | null
    | undefined;
  name?: string | null | undefined;
  parentQuestion?: ParentQuestion | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  required?: boolean | Question2 | null | undefined;
  text?: string | null | undefined;
  type?: QuestionType | null | undefined;
};

/** @internal */
export const QuestionSchemas4$inboundSchema: z.ZodType<
  QuestionSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type QuestionSchemas4$Outbound = {};

/** @internal */
export const QuestionSchemas4$outboundSchema: z.ZodType<
  QuestionSchemas4$Outbound,
  z.ZodTypeDef,
  QuestionSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionSchemas4$ {
  /** @deprecated use `QuestionSchemas4$inboundSchema` instead. */
  export const inboundSchema = QuestionSchemas4$inboundSchema;
  /** @deprecated use `QuestionSchemas4$outboundSchema` instead. */
  export const outboundSchema = QuestionSchemas4$outboundSchema;
  /** @deprecated use `QuestionSchemas4$Outbound` instead. */
  export type Outbound = QuestionSchemas4$Outbound;
}

export function questionSchemas4ToJSON(
  questionSchemas4: QuestionSchemas4,
): string {
  return JSON.stringify(
    QuestionSchemas4$outboundSchema.parse(questionSchemas4),
  );
}

export function questionSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<QuestionSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuestionSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuestionSchemas4' from JSON`,
  );
}

/** @internal */
export const QuestionSchemasSourceValue$inboundSchema: z.ZodType<
  QuestionSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => QuestionSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type QuestionSchemasSourceValue$Outbound =
  | QuestionSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const QuestionSchemasSourceValue$outboundSchema: z.ZodType<
  QuestionSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  QuestionSchemasSourceValue
> = z.union([
  z.lazy(() => QuestionSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionSchemasSourceValue$ {
  /** @deprecated use `QuestionSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema = QuestionSchemasSourceValue$inboundSchema;
  /** @deprecated use `QuestionSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema = QuestionSchemasSourceValue$outboundSchema;
  /** @deprecated use `QuestionSchemasSourceValue$Outbound` instead. */
  export type Outbound = QuestionSchemasSourceValue$Outbound;
}

export function questionSchemasSourceValueToJSON(
  questionSchemasSourceValue: QuestionSchemasSourceValue,
): string {
  return JSON.stringify(
    QuestionSchemasSourceValue$outboundSchema.parse(questionSchemasSourceValue),
  );
}

export function questionSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<QuestionSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuestionSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuestionSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const QuestionSchemasValue$inboundSchema: z.ZodType<
  QuestionSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(QuestionSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const QuestionSchemasValue$outboundSchema: z.ZodType<
  QuestionSchemasValueOpen,
  z.ZodTypeDef,
  QuestionSchemasValueOpen
> = z.union([
  z.nativeEnum(QuestionSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionSchemasValue$ {
  /** @deprecated use `QuestionSchemasValue$inboundSchema` instead. */
  export const inboundSchema = QuestionSchemasValue$inboundSchema;
  /** @deprecated use `QuestionSchemasValue$outboundSchema` instead. */
  export const outboundSchema = QuestionSchemasValue$outboundSchema;
}

/** @internal */
export const ConditionType$inboundSchema: z.ZodType<
  ConditionType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => QuestionSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(QuestionSchemasValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ConditionType$Outbound = {
  source_value?:
    | QuestionSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ConditionType$outboundSchema: z.ZodType<
  ConditionType$Outbound,
  z.ZodTypeDef,
  ConditionType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => QuestionSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(QuestionSchemasValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConditionType$ {
  /** @deprecated use `ConditionType$inboundSchema` instead. */
  export const inboundSchema = ConditionType$inboundSchema;
  /** @deprecated use `ConditionType$outboundSchema` instead. */
  export const outboundSchema = ConditionType$outboundSchema;
  /** @deprecated use `ConditionType$Outbound` instead. */
  export type Outbound = ConditionType$Outbound;
}

export function conditionTypeToJSON(conditionType: ConditionType): string {
  return JSON.stringify(ConditionType$outboundSchema.parse(conditionType));
}

export function conditionTypeFromJSON(
  jsonString: string,
): SafeParseResult<ConditionType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConditionType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConditionType' from JSON`,
  );
}

/** @internal */
export const ParentQuestion$inboundSchema: z.ZodType<
  ParentQuestion,
  z.ZodTypeDef,
  unknown
> = z.object({
  condition_type: z.nullable(z.lazy(() => ConditionType$inboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  option_ids: z.nullable(z.array(z.string())).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "condition_type": "conditionType",
    "option_ids": "optionIds",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type ParentQuestion$Outbound = {
  condition_type?: ConditionType$Outbound | null | undefined;
  id?: string | null | undefined;
  option_ids?: Array<string> | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const ParentQuestion$outboundSchema: z.ZodType<
  ParentQuestion$Outbound,
  z.ZodTypeDef,
  ParentQuestion
> = z.object({
  conditionType: z.nullable(z.lazy(() => ConditionType$outboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  optionIds: z.nullable(z.array(z.string())).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    conditionType: "condition_type",
    optionIds: "option_ids",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParentQuestion$ {
  /** @deprecated use `ParentQuestion$inboundSchema` instead. */
  export const inboundSchema = ParentQuestion$inboundSchema;
  /** @deprecated use `ParentQuestion$outboundSchema` instead. */
  export const outboundSchema = ParentQuestion$outboundSchema;
  /** @deprecated use `ParentQuestion$Outbound` instead. */
  export type Outbound = ParentQuestion$Outbound;
}

export function parentQuestionToJSON(parentQuestion: ParentQuestion): string {
  return JSON.stringify(ParentQuestion$outboundSchema.parse(parentQuestion));
}

export function parentQuestionFromJSON(
  jsonString: string,
): SafeParseResult<ParentQuestion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ParentQuestion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ParentQuestion' from JSON`,
  );
}

/** @internal */
export const Question2$inboundSchema: z.ZodNativeEnum<typeof Question2> = z
  .nativeEnum(Question2);

/** @internal */
export const Question2$outboundSchema: z.ZodNativeEnum<typeof Question2> =
  Question2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Question2$ {
  /** @deprecated use `Question2$inboundSchema` instead. */
  export const inboundSchema = Question2$inboundSchema;
  /** @deprecated use `Question2$outboundSchema` instead. */
  export const outboundSchema = Question2$outboundSchema;
}

/** @internal */
export const QuestionRequired$inboundSchema: z.ZodType<
  QuestionRequired,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), Question2$inboundSchema]);

/** @internal */
export type QuestionRequired$Outbound = boolean | string;

/** @internal */
export const QuestionRequired$outboundSchema: z.ZodType<
  QuestionRequired$Outbound,
  z.ZodTypeDef,
  QuestionRequired
> = z.union([z.boolean(), Question2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionRequired$ {
  /** @deprecated use `QuestionRequired$inboundSchema` instead. */
  export const inboundSchema = QuestionRequired$inboundSchema;
  /** @deprecated use `QuestionRequired$outboundSchema` instead. */
  export const outboundSchema = QuestionRequired$outboundSchema;
  /** @deprecated use `QuestionRequired$Outbound` instead. */
  export type Outbound = QuestionRequired$Outbound;
}

export function questionRequiredToJSON(
  questionRequired: QuestionRequired,
): string {
  return JSON.stringify(
    QuestionRequired$outboundSchema.parse(questionRequired),
  );
}

export function questionRequiredFromJSON(
  jsonString: string,
): SafeParseResult<QuestionRequired, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuestionRequired$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuestionRequired' from JSON`,
  );
}

/** @internal */
export const Question4$inboundSchema: z.ZodType<
  Question4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Question4$Outbound = {};

/** @internal */
export const Question4$outboundSchema: z.ZodType<
  Question4$Outbound,
  z.ZodTypeDef,
  Question4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Question4$ {
  /** @deprecated use `Question4$inboundSchema` instead. */
  export const inboundSchema = Question4$inboundSchema;
  /** @deprecated use `Question4$outboundSchema` instead. */
  export const outboundSchema = Question4$outboundSchema;
  /** @deprecated use `Question4$Outbound` instead. */
  export type Outbound = Question4$Outbound;
}

export function question4ToJSON(question4: Question4): string {
  return JSON.stringify(Question4$outboundSchema.parse(question4));
}

export function question4FromJSON(
  jsonString: string,
): SafeParseResult<Question4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Question4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Question4' from JSON`,
  );
}

/** @internal */
export const QuestionSourceValue$inboundSchema: z.ZodType<
  QuestionSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Question4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type QuestionSourceValue$Outbound =
  | Question4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const QuestionSourceValue$outboundSchema: z.ZodType<
  QuestionSourceValue$Outbound,
  z.ZodTypeDef,
  QuestionSourceValue
> = z.union([
  z.lazy(() => Question4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionSourceValue$ {
  /** @deprecated use `QuestionSourceValue$inboundSchema` instead. */
  export const inboundSchema = QuestionSourceValue$inboundSchema;
  /** @deprecated use `QuestionSourceValue$outboundSchema` instead. */
  export const outboundSchema = QuestionSourceValue$outboundSchema;
  /** @deprecated use `QuestionSourceValue$Outbound` instead. */
  export type Outbound = QuestionSourceValue$Outbound;
}

export function questionSourceValueToJSON(
  questionSourceValue: QuestionSourceValue,
): string {
  return JSON.stringify(
    QuestionSourceValue$outboundSchema.parse(questionSourceValue),
  );
}

export function questionSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<QuestionSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuestionSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuestionSourceValue' from JSON`,
  );
}

/** @internal */
export const QuestionValue$inboundSchema: z.ZodType<
  QuestionValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(QuestionValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const QuestionValue$outboundSchema: z.ZodType<
  QuestionValueOpen,
  z.ZodTypeDef,
  QuestionValueOpen
> = z.union([
  z.nativeEnum(QuestionValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionValue$ {
  /** @deprecated use `QuestionValue$inboundSchema` instead. */
  export const inboundSchema = QuestionValue$inboundSchema;
  /** @deprecated use `QuestionValue$outboundSchema` instead. */
  export const outboundSchema = QuestionValue$outboundSchema;
}

/** @internal */
export const QuestionType$inboundSchema: z.ZodType<
  QuestionType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Question4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(QuestionValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type QuestionType$Outbound = {
  source_value?:
    | Question4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const QuestionType$outboundSchema: z.ZodType<
  QuestionType$Outbound,
  z.ZodTypeDef,
  QuestionType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Question4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(QuestionValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QuestionType$ {
  /** @deprecated use `QuestionType$inboundSchema` instead. */
  export const inboundSchema = QuestionType$inboundSchema;
  /** @deprecated use `QuestionType$outboundSchema` instead. */
  export const outboundSchema = QuestionType$outboundSchema;
  /** @deprecated use `QuestionType$Outbound` instead. */
  export type Outbound = QuestionType$Outbound;
}

export function questionTypeToJSON(questionType: QuestionType): string {
  return JSON.stringify(QuestionType$outboundSchema.parse(questionType));
}

export function questionTypeFromJSON(
  jsonString: string,
): SafeParseResult<QuestionType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QuestionType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QuestionType' from JSON`,
  );
}

/** @internal */
export const Question$inboundSchema: z.ZodType<
  Question,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  multiple_choice_answers: z.nullable(
    z.array(QuestionMultipleChoiceAnswers$inboundSchema),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  parent_question: z.nullable(z.lazy(() => ParentQuestion$inboundSchema))
    .optional(),
  remote_id: z.nullable(z.string()).optional(),
  required: z.nullable(z.union([z.boolean(), Question2$inboundSchema]))
    .optional(),
  text: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => QuestionType$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "multiple_choice_answers": "multipleChoiceAnswers",
    "parent_question": "parentQuestion",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type Question$Outbound = {
  id?: string | null | undefined;
  multiple_choice_answers?:
    | Array<QuestionMultipleChoiceAnswers$Outbound>
    | null
    | undefined;
  name?: string | null | undefined;
  parent_question?: ParentQuestion$Outbound | null | undefined;
  remote_id?: string | null | undefined;
  required?: boolean | string | null | undefined;
  text?: string | null | undefined;
  type?: QuestionType$Outbound | null | undefined;
};

/** @internal */
export const Question$outboundSchema: z.ZodType<
  Question$Outbound,
  z.ZodTypeDef,
  Question
> = z.object({
  id: z.nullable(z.string()).optional(),
  multipleChoiceAnswers: z.nullable(
    z.array(QuestionMultipleChoiceAnswers$outboundSchema),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  parentQuestion: z.nullable(z.lazy(() => ParentQuestion$outboundSchema))
    .optional(),
  remoteId: z.nullable(z.string()).optional(),
  required: z.nullable(z.union([z.boolean(), Question2$outboundSchema]))
    .optional(),
  text: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => QuestionType$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    multipleChoiceAnswers: "multiple_choice_answers",
    parentQuestion: "parent_question",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Question$ {
  /** @deprecated use `Question$inboundSchema` instead. */
  export const inboundSchema = Question$inboundSchema;
  /** @deprecated use `Question$outboundSchema` instead. */
  export const outboundSchema = Question$outboundSchema;
  /** @deprecated use `Question$Outbound` instead. */
  export type Outbound = Question$Outbound;
}

export function questionToJSON(question: Question): string {
  return JSON.stringify(Question$outboundSchema.parse(question));
}

export function questionFromJSON(
  jsonString: string,
): SafeParseResult<Question, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Question$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Question' from JSON`,
  );
}
