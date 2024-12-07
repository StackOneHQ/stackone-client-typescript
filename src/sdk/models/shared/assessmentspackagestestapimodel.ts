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

export type AssessmentsPackagesTestApiModel4 = {};

/**
 * The source value of the description type.
 */
export type AssessmentsPackagesTestApiModelSourceValue =
  | AssessmentsPackagesTestApiModel4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the description.
 */
export enum AssessmentsPackagesTestApiModelValue {
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
export type AssessmentsPackagesTestApiModelValueOpen = OpenEnum<
  typeof AssessmentsPackagesTestApiModelValue
>;

/**
 * Package type
 */
export type AssessmentsPackagesTestApiModelType = {
  /**
   * The source value of the description type.
   */
  sourceValue?:
    | AssessmentsPackagesTestApiModel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the description.
   */
  value?: AssessmentsPackagesTestApiModelValueOpen | null | undefined;
};

export type AssessmentsPackagesTestApiModel = {
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
   * Package type
   */
  type?: AssessmentsPackagesTestApiModelType | null | undefined;
};

/** @internal */
export const AssessmentsPackagesTestApiModel4$inboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AssessmentsPackagesTestApiModel4$Outbound = {};

/** @internal */
export const AssessmentsPackagesTestApiModel4$outboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel4$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesTestApiModel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesTestApiModel4$ {
  /** @deprecated use `AssessmentsPackagesTestApiModel4$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesTestApiModel4$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel4$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesTestApiModel4$outboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel4$Outbound` instead. */
  export type Outbound = AssessmentsPackagesTestApiModel4$Outbound;
}

export function assessmentsPackagesTestApiModel4ToJSON(
  assessmentsPackagesTestApiModel4: AssessmentsPackagesTestApiModel4,
): string {
  return JSON.stringify(
    AssessmentsPackagesTestApiModel4$outboundSchema.parse(
      assessmentsPackagesTestApiModel4,
    ),
  );
}

export function assessmentsPackagesTestApiModel4FromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesTestApiModel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesTestApiModel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesTestApiModel4' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackagesTestApiModelSourceValue$inboundSchema:
  z.ZodType<AssessmentsPackagesTestApiModelSourceValue, z.ZodTypeDef, unknown> =
    z.union([
      z.lazy(() => AssessmentsPackagesTestApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]);

/** @internal */
export type AssessmentsPackagesTestApiModelSourceValue$Outbound =
  | AssessmentsPackagesTestApiModel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AssessmentsPackagesTestApiModelSourceValue$outboundSchema:
  z.ZodType<
    AssessmentsPackagesTestApiModelSourceValue$Outbound,
    z.ZodTypeDef,
    AssessmentsPackagesTestApiModelSourceValue
  > = z.union([
    z.lazy(() => AssessmentsPackagesTestApiModel4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesTestApiModelSourceValue$ {
  /** @deprecated use `AssessmentsPackagesTestApiModelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    AssessmentsPackagesTestApiModelSourceValue$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    AssessmentsPackagesTestApiModelSourceValue$outboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModelSourceValue$Outbound` instead. */
  export type Outbound = AssessmentsPackagesTestApiModelSourceValue$Outbound;
}

export function assessmentsPackagesTestApiModelSourceValueToJSON(
  assessmentsPackagesTestApiModelSourceValue:
    AssessmentsPackagesTestApiModelSourceValue,
): string {
  return JSON.stringify(
    AssessmentsPackagesTestApiModelSourceValue$outboundSchema.parse(
      assessmentsPackagesTestApiModelSourceValue,
    ),
  );
}

export function assessmentsPackagesTestApiModelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  AssessmentsPackagesTestApiModelSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AssessmentsPackagesTestApiModelSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AssessmentsPackagesTestApiModelSourceValue' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackagesTestApiModelValue$inboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AssessmentsPackagesTestApiModelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AssessmentsPackagesTestApiModelValue$outboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModelValueOpen,
  z.ZodTypeDef,
  AssessmentsPackagesTestApiModelValueOpen
> = z.union([
  z.nativeEnum(AssessmentsPackagesTestApiModelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesTestApiModelValue$ {
  /** @deprecated use `AssessmentsPackagesTestApiModelValue$inboundSchema` instead. */
  export const inboundSchema =
    AssessmentsPackagesTestApiModelValue$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModelValue$outboundSchema` instead. */
  export const outboundSchema =
    AssessmentsPackagesTestApiModelValue$outboundSchema;
}

/** @internal */
export const AssessmentsPackagesTestApiModelType$inboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModelType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => AssessmentsPackagesTestApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsPackagesTestApiModelValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AssessmentsPackagesTestApiModelType$Outbound = {
  source_value?:
    | AssessmentsPackagesTestApiModel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AssessmentsPackagesTestApiModelType$outboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModelType$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesTestApiModelType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => AssessmentsPackagesTestApiModel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsPackagesTestApiModelValue$outboundSchema)
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
export namespace AssessmentsPackagesTestApiModelType$ {
  /** @deprecated use `AssessmentsPackagesTestApiModelType$inboundSchema` instead. */
  export const inboundSchema =
    AssessmentsPackagesTestApiModelType$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModelType$outboundSchema` instead. */
  export const outboundSchema =
    AssessmentsPackagesTestApiModelType$outboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModelType$Outbound` instead. */
  export type Outbound = AssessmentsPackagesTestApiModelType$Outbound;
}

export function assessmentsPackagesTestApiModelTypeToJSON(
  assessmentsPackagesTestApiModelType: AssessmentsPackagesTestApiModelType,
): string {
  return JSON.stringify(
    AssessmentsPackagesTestApiModelType$outboundSchema.parse(
      assessmentsPackagesTestApiModelType,
    ),
  );
}

export function assessmentsPackagesTestApiModelTypeFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesTestApiModelType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AssessmentsPackagesTestApiModelType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesTestApiModelType' from JSON`,
  );
}

/** @internal */
export const AssessmentsPackagesTestApiModel$inboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.lazy(() => AssessmentsPackagesTestApiModelType$inboundSchema),
  ).optional(),
});

/** @internal */
export type AssessmentsPackagesTestApiModel$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  type?: AssessmentsPackagesTestApiModelType$Outbound | null | undefined;
};

/** @internal */
export const AssessmentsPackagesTestApiModel$outboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesTestApiModel
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(
    z.lazy(() => AssessmentsPackagesTestApiModelType$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesTestApiModel$ {
  /** @deprecated use `AssessmentsPackagesTestApiModel$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesTestApiModel$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesTestApiModel$outboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel$Outbound` instead. */
  export type Outbound = AssessmentsPackagesTestApiModel$Outbound;
}

export function assessmentsPackagesTestApiModelToJSON(
  assessmentsPackagesTestApiModel: AssessmentsPackagesTestApiModel,
): string {
  return JSON.stringify(
    AssessmentsPackagesTestApiModel$outboundSchema.parse(
      assessmentsPackagesTestApiModel,
    ),
  );
}

export function assessmentsPackagesTestApiModelFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesTestApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesTestApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesTestApiModel' from JSON`,
  );
}
