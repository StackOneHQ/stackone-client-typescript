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

export type AssessmentsPackages4 = {};

/**
 * The source value of the description type.
 */
export type AssessmentsPackagesSourceValue =
  | AssessmentsPackages4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the description.
 */
export enum AssessmentsPackagesValue {
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
export type AssessmentsPackagesValueOpen = OpenEnum<
  typeof AssessmentsPackagesValue
>;

/**
 * Package type
 */
export type AssessmentsPackagesType = {
  /**
   * The source value of the description type.
   */
  sourceValue?:
    | AssessmentsPackages4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the description.
   */
  value?: AssessmentsPackagesValueOpen | null | undefined;
};

export type AssessmentsPackages = {
  /**
   * Package description
   */
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Package name
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Package type
   */
  type?: AssessmentsPackagesType | null | undefined;
};

/** @internal */
export const AssessmentsPackages4$inboundSchema: z.ZodType<
  AssessmentsPackages4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AssessmentsPackages4$Outbound = {};

/** @internal */
export const AssessmentsPackages4$outboundSchema: z.ZodType<
  AssessmentsPackages4$Outbound,
  z.ZodTypeDef,
  AssessmentsPackages4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackages4$ {
  /** @deprecated use `AssessmentsPackages4$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackages4$inboundSchema;
  /** @deprecated use `AssessmentsPackages4$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackages4$outboundSchema;
  /** @deprecated use `AssessmentsPackages4$Outbound` instead. */
  export type Outbound = AssessmentsPackages4$Outbound;
}

export function assessmentsPackages4ToJSON(
  assessmentsPackages4: AssessmentsPackages4,
): string {
  return JSON.stringify(
    AssessmentsPackages4$outboundSchema.parse(assessmentsPackages4),
  );
}

export function assessmentsPackages4FromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackages4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackages4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackages4' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackagesSourceValue$inboundSchema: z.ZodType<
  AssessmentsPackagesSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AssessmentsPackages4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AssessmentsPackagesSourceValue$Outbound =
  | AssessmentsPackages4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AssessmentsPackagesSourceValue$outboundSchema: z.ZodType<
  AssessmentsPackagesSourceValue$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesSourceValue
> = z.union([
  z.lazy(() => AssessmentsPackages4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesSourceValue$ {
  /** @deprecated use `AssessmentsPackagesSourceValue$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesSourceValue$inboundSchema;
  /** @deprecated use `AssessmentsPackagesSourceValue$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesSourceValue$outboundSchema;
  /** @deprecated use `AssessmentsPackagesSourceValue$Outbound` instead. */
  export type Outbound = AssessmentsPackagesSourceValue$Outbound;
}

export function assessmentsPackagesSourceValueToJSON(
  assessmentsPackagesSourceValue: AssessmentsPackagesSourceValue,
): string {
  return JSON.stringify(
    AssessmentsPackagesSourceValue$outboundSchema.parse(
      assessmentsPackagesSourceValue,
    ),
  );
}

export function assessmentsPackagesSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesSourceValue' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackagesValue$inboundSchema: z.ZodType<
  AssessmentsPackagesValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AssessmentsPackagesValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AssessmentsPackagesValue$outboundSchema: z.ZodType<
  AssessmentsPackagesValueOpen,
  z.ZodTypeDef,
  AssessmentsPackagesValueOpen
> = z.union([
  z.nativeEnum(AssessmentsPackagesValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesValue$ {
  /** @deprecated use `AssessmentsPackagesValue$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesValue$inboundSchema;
  /** @deprecated use `AssessmentsPackagesValue$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesValue$outboundSchema;
}

/** @internal */
export const AssessmentsPackagesType$inboundSchema: z.ZodType<
  AssessmentsPackagesType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => AssessmentsPackages4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsPackagesValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AssessmentsPackagesType$Outbound = {
  source_value?:
    | AssessmentsPackages4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AssessmentsPackagesType$outboundSchema: z.ZodType<
  AssessmentsPackagesType$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => AssessmentsPackages4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsPackagesValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesType$ {
  /** @deprecated use `AssessmentsPackagesType$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesType$inboundSchema;
  /** @deprecated use `AssessmentsPackagesType$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesType$outboundSchema;
  /** @deprecated use `AssessmentsPackagesType$Outbound` instead. */
  export type Outbound = AssessmentsPackagesType$Outbound;
}

export function assessmentsPackagesTypeToJSON(
  assessmentsPackagesType: AssessmentsPackagesType,
): string {
  return JSON.stringify(
    AssessmentsPackagesType$outboundSchema.parse(assessmentsPackagesType),
  );
}

export function assessmentsPackagesTypeFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesType' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackages$inboundSchema: z.ZodType<
  AssessmentsPackages,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => AssessmentsPackagesType$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type AssessmentsPackages$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  type?: AssessmentsPackagesType$Outbound | null | undefined;
};

/** @internal */
export const AssessmentsPackages$outboundSchema: z.ZodType<
  AssessmentsPackages$Outbound,
  z.ZodTypeDef,
  AssessmentsPackages
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => AssessmentsPackagesType$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackages$ {
  /** @deprecated use `AssessmentsPackages$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackages$inboundSchema;
  /** @deprecated use `AssessmentsPackages$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackages$outboundSchema;
  /** @deprecated use `AssessmentsPackages$Outbound` instead. */
  export type Outbound = AssessmentsPackages$Outbound;
}

export function assessmentsPackagesToJSON(
  assessmentsPackages: AssessmentsPackages,
): string {
  return JSON.stringify(
    AssessmentsPackages$outboundSchema.parse(assessmentsPackages),
  );
}

export function assessmentsPackagesFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackages' from JSON`,
  );
}
