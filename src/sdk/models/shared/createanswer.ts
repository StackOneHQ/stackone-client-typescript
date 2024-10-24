/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export type CreateAnswer4 = {};

/**
 * The source value of the answer type.
 */
export type CreateAnswerSourceValue =
  | CreateAnswer4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the answer.
 */
export enum CreateAnswerValue {
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
export type CreateAnswerValueOpen = OpenEnum<typeof CreateAnswerValue>;

/**
 * Type of the answer
 */
export type CreateAnswerType = {
  /**
   * The source value of the answer type.
   */
  sourceValue?:
    | CreateAnswer4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the answer.
   */
  value?: CreateAnswerValueOpen | null | undefined;
};

export type CreateAnswer = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Type of the answer
   */
  type?: CreateAnswerType | null | undefined;
  /**
   * Values of the answer
   */
  values?: Array<string> | null | undefined;
};

/** @internal */
export const CreateAnswer4$inboundSchema: z.ZodType<
  CreateAnswer4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateAnswer4$Outbound = {};

/** @internal */
export const CreateAnswer4$outboundSchema: z.ZodType<
  CreateAnswer4$Outbound,
  z.ZodTypeDef,
  CreateAnswer4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAnswer4$ {
  /** @deprecated use `CreateAnswer4$inboundSchema` instead. */
  export const inboundSchema = CreateAnswer4$inboundSchema;
  /** @deprecated use `CreateAnswer4$outboundSchema` instead. */
  export const outboundSchema = CreateAnswer4$outboundSchema;
  /** @deprecated use `CreateAnswer4$Outbound` instead. */
  export type Outbound = CreateAnswer4$Outbound;
}

/** @internal */
export const CreateAnswerSourceValue$inboundSchema: z.ZodType<
  CreateAnswerSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateAnswer4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateAnswerSourceValue$Outbound =
  | CreateAnswer4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateAnswerSourceValue$outboundSchema: z.ZodType<
  CreateAnswerSourceValue$Outbound,
  z.ZodTypeDef,
  CreateAnswerSourceValue
> = z.union([
  z.lazy(() => CreateAnswer4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAnswerSourceValue$ {
  /** @deprecated use `CreateAnswerSourceValue$inboundSchema` instead. */
  export const inboundSchema = CreateAnswerSourceValue$inboundSchema;
  /** @deprecated use `CreateAnswerSourceValue$outboundSchema` instead. */
  export const outboundSchema = CreateAnswerSourceValue$outboundSchema;
  /** @deprecated use `CreateAnswerSourceValue$Outbound` instead. */
  export type Outbound = CreateAnswerSourceValue$Outbound;
}

/** @internal */
export const CreateAnswerValue$inboundSchema: z.ZodType<
  CreateAnswerValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateAnswerValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateAnswerValue$outboundSchema: z.ZodType<
  CreateAnswerValueOpen,
  z.ZodTypeDef,
  CreateAnswerValueOpen
> = z.union([
  z.nativeEnum(CreateAnswerValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAnswerValue$ {
  /** @deprecated use `CreateAnswerValue$inboundSchema` instead. */
  export const inboundSchema = CreateAnswerValue$inboundSchema;
  /** @deprecated use `CreateAnswerValue$outboundSchema` instead. */
  export const outboundSchema = CreateAnswerValue$outboundSchema;
}

/** @internal */
export const CreateAnswerType$inboundSchema: z.ZodType<
  CreateAnswerType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateAnswer4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateAnswerValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateAnswerType$Outbound = {
  source_value?:
    | CreateAnswer4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateAnswerType$outboundSchema: z.ZodType<
  CreateAnswerType$Outbound,
  z.ZodTypeDef,
  CreateAnswerType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateAnswer4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateAnswerValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAnswerType$ {
  /** @deprecated use `CreateAnswerType$inboundSchema` instead. */
  export const inboundSchema = CreateAnswerType$inboundSchema;
  /** @deprecated use `CreateAnswerType$outboundSchema` instead. */
  export const outboundSchema = CreateAnswerType$outboundSchema;
  /** @deprecated use `CreateAnswerType$Outbound` instead. */
  export type Outbound = CreateAnswerType$Outbound;
}

/** @internal */
export const CreateAnswer$inboundSchema: z.ZodType<
  CreateAnswer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CreateAnswerType$inboundSchema)).optional(),
  values: z.nullable(z.array(z.string())).optional(),
});

/** @internal */
export type CreateAnswer$Outbound = {
  id?: string | null | undefined;
  type?: CreateAnswerType$Outbound | null | undefined;
  values?: Array<string> | null | undefined;
};

/** @internal */
export const CreateAnswer$outboundSchema: z.ZodType<
  CreateAnswer$Outbound,
  z.ZodTypeDef,
  CreateAnswer
> = z.object({
  id: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CreateAnswerType$outboundSchema)).optional(),
  values: z.nullable(z.array(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAnswer$ {
  /** @deprecated use `CreateAnswer$inboundSchema` instead. */
  export const inboundSchema = CreateAnswer$inboundSchema;
  /** @deprecated use `CreateAnswer$outboundSchema` instead. */
  export const outboundSchema = CreateAnswer$outboundSchema;
  /** @deprecated use `CreateAnswer$Outbound` instead. */
  export type Outbound = CreateAnswer$Outbound;
}
