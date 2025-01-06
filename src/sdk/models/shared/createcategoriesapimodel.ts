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

export type CreateCategoriesApiModel4 = {};

export type CreateCategoriesApiModelSourceValue =
  | CreateCategoriesApiModel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateCategoriesApiModelValue {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}
export type CreateCategoriesApiModelValueOpen = OpenEnum<
  typeof CreateCategoriesApiModelValue
>;

/**
 * The hierarchal level of the category
 */
export type CreateCategoriesApiModelLevel = {
  sourceValue?:
    | CreateCategoriesApiModel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateCategoriesApiModelValueOpen | null | undefined;
};

export type CreateCategoriesApiModel = {
  /**
   * The ID associated with this category
   */
  id?: string | null | undefined;
  /**
   * The hierarchal level of the category
   */
  level?: CreateCategoriesApiModelLevel | null | undefined;
  /**
   * The name associated with this category
   */
  name?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel4$inboundSchema: z.ZodType<
  CreateCategoriesApiModel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateCategoriesApiModel4$Outbound = {};

/** @internal */
export const CreateCategoriesApiModel4$outboundSchema: z.ZodType<
  CreateCategoriesApiModel4$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModel4$ {
  /** @deprecated use `CreateCategoriesApiModel4$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModel4$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModel4$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModel4$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModel4$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModel4$Outbound;
}

export function createCategoriesApiModel4ToJSON(
  createCategoriesApiModel4: CreateCategoriesApiModel4,
): string {
  return JSON.stringify(
    CreateCategoriesApiModel4$outboundSchema.parse(createCategoriesApiModel4),
  );
}

export function createCategoriesApiModel4FromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModel4' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSourceValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateCategoriesApiModel4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateCategoriesApiModelSourceValue$Outbound =
  | CreateCategoriesApiModel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateCategoriesApiModelSourceValue$outboundSchema: z.ZodType<
  CreateCategoriesApiModelSourceValue$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelSourceValue
> = z.union([
  z.lazy(() => CreateCategoriesApiModel4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSourceValue$ {
  /** @deprecated use `CreateCategoriesApiModelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSourceValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSourceValue$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSourceValue$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelSourceValue$Outbound;
}

export function createCategoriesApiModelSourceValueToJSON(
  createCategoriesApiModelSourceValue: CreateCategoriesApiModelSourceValue,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSourceValue$outboundSchema.parse(
      createCategoriesApiModelSourceValue,
    ),
  );
}

export function createCategoriesApiModelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCategoriesApiModelSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateCategoriesApiModelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateCategoriesApiModelValue$outboundSchema: z.ZodType<
  CreateCategoriesApiModelValueOpen,
  z.ZodTypeDef,
  CreateCategoriesApiModelValueOpen
> = z.union([
  z.nativeEnum(CreateCategoriesApiModelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelValue$ {
  /** @deprecated use `CreateCategoriesApiModelValue$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelValue$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelValue$outboundSchema;
}

/** @internal */
export const CreateCategoriesApiModelLevel$inboundSchema: z.ZodType<
  CreateCategoriesApiModelLevel,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateCategoriesApiModelLevel$Outbound = {
  source_value?:
    | CreateCategoriesApiModel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModelLevel$outboundSchema: z.ZodType<
  CreateCategoriesApiModelLevel$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelLevel
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelLevel$ {
  /** @deprecated use `CreateCategoriesApiModelLevel$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelLevel$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLevel$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelLevel$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLevel$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelLevel$Outbound;
}

export function createCategoriesApiModelLevelToJSON(
  createCategoriesApiModelLevel: CreateCategoriesApiModelLevel,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelLevel$outboundSchema.parse(
      createCategoriesApiModelLevel,
    ),
  );
}

export function createCategoriesApiModelLevelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelLevel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModelLevel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelLevel' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModel$inboundSchema: z.ZodType<
  CreateCategoriesApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  level: z.nullable(z.lazy(() => CreateCategoriesApiModelLevel$inboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type CreateCategoriesApiModel$Outbound = {
  id?: string | null | undefined;
  level?: CreateCategoriesApiModelLevel$Outbound | null | undefined;
  name?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel$outboundSchema: z.ZodType<
  CreateCategoriesApiModel$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModel
> = z.object({
  id: z.nullable(z.string()).optional(),
  level: z.nullable(z.lazy(() => CreateCategoriesApiModelLevel$outboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModel$ {
  /** @deprecated use `CreateCategoriesApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModel$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModel$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModel$Outbound;
}

export function createCategoriesApiModelToJSON(
  createCategoriesApiModel: CreateCategoriesApiModel,
): string {
  return JSON.stringify(
    CreateCategoriesApiModel$outboundSchema.parse(createCategoriesApiModel),
  );
}

export function createCategoriesApiModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModel' from JSON`,
  );
}
