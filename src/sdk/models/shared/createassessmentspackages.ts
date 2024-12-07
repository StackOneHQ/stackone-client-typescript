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

export type CreateAssessmentsPackages4 = {};

/**
 * The source value of the description type.
 */
export type CreateAssessmentsPackagesSourceValue =
  | CreateAssessmentsPackages4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the description.
 */
export enum CreateAssessmentsPackagesValue {
  Responsibilities = "responsibilities",
  Skills = "skills",
  Benefits = "benefits",
  CompanyOverview = "company_overview",
  Description = "description",
  Other = "other",
}
/**
 * The type of the description.
 */
export type CreateAssessmentsPackagesValueOpen = OpenEnum<
  typeof CreateAssessmentsPackagesValue
>;

/**
 * Package type
 */
export type CreateAssessmentsPackagesType = {
  /**
   * The source value of the description type.
   */
  sourceValue?:
    | CreateAssessmentsPackages4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the description.
   */
  value?: CreateAssessmentsPackagesValueOpen | null | undefined;
};

export type CreateAssessmentsPackages = {
  /**
   * Package description
   */
  description?: string | null | undefined;
  /**
   * Package name
   */
  name?: string | null | undefined;
  /**
   * Package type
   */
  type?: CreateAssessmentsPackagesType | null | undefined;
};

/** @internal */
export const CreateAssessmentsPackages4$inboundSchema: z.ZodType<
  CreateAssessmentsPackages4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateAssessmentsPackages4$Outbound = {};

/** @internal */
export const CreateAssessmentsPackages4$outboundSchema: z.ZodType<
  CreateAssessmentsPackages4$Outbound,
  z.ZodTypeDef,
  CreateAssessmentsPackages4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackages4$ {
  /** @deprecated use `CreateAssessmentsPackages4$inboundSchema` instead. */
  export const inboundSchema = CreateAssessmentsPackages4$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackages4$outboundSchema` instead. */
  export const outboundSchema = CreateAssessmentsPackages4$outboundSchema;
  /** @deprecated use `CreateAssessmentsPackages4$Outbound` instead. */
  export type Outbound = CreateAssessmentsPackages4$Outbound;
}

export function createAssessmentsPackages4ToJSON(
  createAssessmentsPackages4: CreateAssessmentsPackages4,
): string {
  return JSON.stringify(
    CreateAssessmentsPackages4$outboundSchema.parse(createAssessmentsPackages4),
  );
}

export function createAssessmentsPackages4FromJSON(
  jsonString: string,
): SafeParseResult<CreateAssessmentsPackages4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAssessmentsPackages4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssessmentsPackages4' from JSON`,
  );
}

/** @internal */
export const CreateAssessmentsPackagesSourceValue$inboundSchema: z.ZodType<
  CreateAssessmentsPackagesSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateAssessmentsPackages4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateAssessmentsPackagesSourceValue$Outbound =
  | CreateAssessmentsPackages4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateAssessmentsPackagesSourceValue$outboundSchema: z.ZodType<
  CreateAssessmentsPackagesSourceValue$Outbound,
  z.ZodTypeDef,
  CreateAssessmentsPackagesSourceValue
> = z.union([
  z.lazy(() => CreateAssessmentsPackages4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackagesSourceValue$ {
  /** @deprecated use `CreateAssessmentsPackagesSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateAssessmentsPackagesSourceValue$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackagesSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateAssessmentsPackagesSourceValue$outboundSchema;
  /** @deprecated use `CreateAssessmentsPackagesSourceValue$Outbound` instead. */
  export type Outbound = CreateAssessmentsPackagesSourceValue$Outbound;
}

export function createAssessmentsPackagesSourceValueToJSON(
  createAssessmentsPackagesSourceValue: CreateAssessmentsPackagesSourceValue,
): string {
  return JSON.stringify(
    CreateAssessmentsPackagesSourceValue$outboundSchema.parse(
      createAssessmentsPackagesSourceValue,
    ),
  );
}

export function createAssessmentsPackagesSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssessmentsPackagesSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateAssessmentsPackagesSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssessmentsPackagesSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateAssessmentsPackagesValue$inboundSchema: z.ZodType<
  CreateAssessmentsPackagesValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateAssessmentsPackagesValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateAssessmentsPackagesValue$outboundSchema: z.ZodType<
  CreateAssessmentsPackagesValueOpen,
  z.ZodTypeDef,
  CreateAssessmentsPackagesValueOpen
> = z.union([
  z.nativeEnum(CreateAssessmentsPackagesValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackagesValue$ {
  /** @deprecated use `CreateAssessmentsPackagesValue$inboundSchema` instead. */
  export const inboundSchema = CreateAssessmentsPackagesValue$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackagesValue$outboundSchema` instead. */
  export const outboundSchema = CreateAssessmentsPackagesValue$outboundSchema;
}

/** @internal */
export const CreateAssessmentsPackagesType$inboundSchema: z.ZodType<
  CreateAssessmentsPackagesType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateAssessmentsPackages4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateAssessmentsPackagesValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateAssessmentsPackagesType$Outbound = {
  source_value?:
    | CreateAssessmentsPackages4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateAssessmentsPackagesType$outboundSchema: z.ZodType<
  CreateAssessmentsPackagesType$Outbound,
  z.ZodTypeDef,
  CreateAssessmentsPackagesType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateAssessmentsPackages4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateAssessmentsPackagesValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackagesType$ {
  /** @deprecated use `CreateAssessmentsPackagesType$inboundSchema` instead. */
  export const inboundSchema = CreateAssessmentsPackagesType$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackagesType$outboundSchema` instead. */
  export const outboundSchema = CreateAssessmentsPackagesType$outboundSchema;
  /** @deprecated use `CreateAssessmentsPackagesType$Outbound` instead. */
  export type Outbound = CreateAssessmentsPackagesType$Outbound;
}

export function createAssessmentsPackagesTypeToJSON(
  createAssessmentsPackagesType: CreateAssessmentsPackagesType,
): string {
  return JSON.stringify(
    CreateAssessmentsPackagesType$outboundSchema.parse(
      createAssessmentsPackagesType,
    ),
  );
}

export function createAssessmentsPackagesTypeFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssessmentsPackagesType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAssessmentsPackagesType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssessmentsPackagesType' from JSON`,
  );
}

/** @internal */
export const CreateAssessmentsPackages$inboundSchema: z.ZodType<
  CreateAssessmentsPackages,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CreateAssessmentsPackagesType$inboundSchema))
    .optional(),
});

/** @internal */
export type CreateAssessmentsPackages$Outbound = {
  description?: string | null | undefined;
  name?: string | null | undefined;
  type?: CreateAssessmentsPackagesType$Outbound | null | undefined;
};

/** @internal */
export const CreateAssessmentsPackages$outboundSchema: z.ZodType<
  CreateAssessmentsPackages$Outbound,
  z.ZodTypeDef,
  CreateAssessmentsPackages
> = z.object({
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CreateAssessmentsPackagesType$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackages$ {
  /** @deprecated use `CreateAssessmentsPackages$inboundSchema` instead. */
  export const inboundSchema = CreateAssessmentsPackages$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackages$outboundSchema` instead. */
  export const outboundSchema = CreateAssessmentsPackages$outboundSchema;
  /** @deprecated use `CreateAssessmentsPackages$Outbound` instead. */
  export type Outbound = CreateAssessmentsPackages$Outbound;
}

export function createAssessmentsPackagesToJSON(
  createAssessmentsPackages: CreateAssessmentsPackages,
): string {
  return JSON.stringify(
    CreateAssessmentsPackages$outboundSchema.parse(createAssessmentsPackages),
  );
}

export function createAssessmentsPackagesFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssessmentsPackages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAssessmentsPackages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssessmentsPackages' from JSON`,
  );
}
