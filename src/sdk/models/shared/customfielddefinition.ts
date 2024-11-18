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

export type CustomFieldDefinition4 = {};

export type Options =
  | CustomFieldDefinition4
  | string
  | number
  | boolean
  | Array<any>;

export type CustomFieldDefinitionSchemas4 = {};

export type CustomFieldDefinitionSourceValue =
  | CustomFieldDefinitionSchemas4
  | string
  | number
  | boolean
  | Array<any>;

export enum CustomFieldDefinitionValue {
  Date = "date",
  Float = "float",
  Integer = "integer",
  List = "list",
  Checkbox = "checkbox",
  Text = "text",
  Boolean = "boolean",
  SingleSelect = "single_select",
  MultiSelect = "multi_select",
  Url = "url",
  Other = "other",
}
export type CustomFieldDefinitionValueOpen = OpenEnum<
  typeof CustomFieldDefinitionValue
>;

/**
 * The type of the custom field.
 */
export type CustomFieldDefinitionType = {
  sourceValue?:
    | CustomFieldDefinitionSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CustomFieldDefinitionValueOpen | null | undefined;
};

export type CustomFieldDefinition = {
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * An array of possible options for the custom field.
   */
  options?:
    | Array<CustomFieldDefinition4 | string | number | boolean | Array<any>>
    | null
    | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The type of the custom field.
   */
  type?: CustomFieldDefinitionType | null | undefined;
};

/** @internal */
export const CustomFieldDefinition4$inboundSchema: z.ZodType<
  CustomFieldDefinition4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomFieldDefinition4$Outbound = {};

/** @internal */
export const CustomFieldDefinition4$outboundSchema: z.ZodType<
  CustomFieldDefinition4$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinition4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDefinition4$ {
  /** @deprecated use `CustomFieldDefinition4$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinition4$inboundSchema;
  /** @deprecated use `CustomFieldDefinition4$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinition4$outboundSchema;
  /** @deprecated use `CustomFieldDefinition4$Outbound` instead. */
  export type Outbound = CustomFieldDefinition4$Outbound;
}

export function customFieldDefinition4ToJSON(
  customFieldDefinition4: CustomFieldDefinition4,
): string {
  return JSON.stringify(
    CustomFieldDefinition4$outboundSchema.parse(customFieldDefinition4),
  );
}

export function customFieldDefinition4FromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinition4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinition4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinition4' from JSON`,
  );
}

/** @internal */
export const Options$inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown> =
  z.union([
    z.lazy(() => CustomFieldDefinition4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type Options$Outbound =
  | CustomFieldDefinition4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const Options$outboundSchema: z.ZodType<
  Options$Outbound,
  z.ZodTypeDef,
  Options
> = z.union([
  z.lazy(() => CustomFieldDefinition4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Options$ {
  /** @deprecated use `Options$inboundSchema` instead. */
  export const inboundSchema = Options$inboundSchema;
  /** @deprecated use `Options$outboundSchema` instead. */
  export const outboundSchema = Options$outboundSchema;
  /** @deprecated use `Options$Outbound` instead. */
  export type Outbound = Options$Outbound;
}

export function optionsToJSON(options: Options): string {
  return JSON.stringify(Options$outboundSchema.parse(options));
}

export function optionsFromJSON(
  jsonString: string,
): SafeParseResult<Options, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Options$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Options' from JSON`,
  );
}

/** @internal */
export const CustomFieldDefinitionSchemas4$inboundSchema: z.ZodType<
  CustomFieldDefinitionSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomFieldDefinitionSchemas4$Outbound = {};

/** @internal */
export const CustomFieldDefinitionSchemas4$outboundSchema: z.ZodType<
  CustomFieldDefinitionSchemas4$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinitionSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDefinitionSchemas4$ {
  /** @deprecated use `CustomFieldDefinitionSchemas4$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinitionSchemas4$inboundSchema;
  /** @deprecated use `CustomFieldDefinitionSchemas4$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinitionSchemas4$outboundSchema;
  /** @deprecated use `CustomFieldDefinitionSchemas4$Outbound` instead. */
  export type Outbound = CustomFieldDefinitionSchemas4$Outbound;
}

export function customFieldDefinitionSchemas4ToJSON(
  customFieldDefinitionSchemas4: CustomFieldDefinitionSchemas4,
): string {
  return JSON.stringify(
    CustomFieldDefinitionSchemas4$outboundSchema.parse(
      customFieldDefinitionSchemas4,
    ),
  );
}

export function customFieldDefinitionSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinitionSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinitionSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinitionSchemas4' from JSON`,
  );
}

/** @internal */
export const CustomFieldDefinitionSourceValue$inboundSchema: z.ZodType<
  CustomFieldDefinitionSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CustomFieldDefinitionSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CustomFieldDefinitionSourceValue$Outbound =
  | CustomFieldDefinitionSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CustomFieldDefinitionSourceValue$outboundSchema: z.ZodType<
  CustomFieldDefinitionSourceValue$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinitionSourceValue
> = z.union([
  z.lazy(() => CustomFieldDefinitionSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDefinitionSourceValue$ {
  /** @deprecated use `CustomFieldDefinitionSourceValue$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinitionSourceValue$inboundSchema;
  /** @deprecated use `CustomFieldDefinitionSourceValue$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinitionSourceValue$outboundSchema;
  /** @deprecated use `CustomFieldDefinitionSourceValue$Outbound` instead. */
  export type Outbound = CustomFieldDefinitionSourceValue$Outbound;
}

export function customFieldDefinitionSourceValueToJSON(
  customFieldDefinitionSourceValue: CustomFieldDefinitionSourceValue,
): string {
  return JSON.stringify(
    CustomFieldDefinitionSourceValue$outboundSchema.parse(
      customFieldDefinitionSourceValue,
    ),
  );
}

export function customFieldDefinitionSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinitionSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinitionSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinitionSourceValue' from JSON`,
  );
}

/** @internal */
export const CustomFieldDefinitionValue$inboundSchema: z.ZodType<
  CustomFieldDefinitionValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CustomFieldDefinitionValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CustomFieldDefinitionValue$outboundSchema: z.ZodType<
  CustomFieldDefinitionValueOpen,
  z.ZodTypeDef,
  CustomFieldDefinitionValueOpen
> = z.union([
  z.nativeEnum(CustomFieldDefinitionValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDefinitionValue$ {
  /** @deprecated use `CustomFieldDefinitionValue$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinitionValue$inboundSchema;
  /** @deprecated use `CustomFieldDefinitionValue$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinitionValue$outboundSchema;
}

/** @internal */
export const CustomFieldDefinitionType$inboundSchema: z.ZodType<
  CustomFieldDefinitionType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CustomFieldDefinitionSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CustomFieldDefinitionValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CustomFieldDefinitionType$Outbound = {
  source_value?:
    | CustomFieldDefinitionSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CustomFieldDefinitionType$outboundSchema: z.ZodType<
  CustomFieldDefinitionType$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinitionType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CustomFieldDefinitionSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CustomFieldDefinitionValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDefinitionType$ {
  /** @deprecated use `CustomFieldDefinitionType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinitionType$inboundSchema;
  /** @deprecated use `CustomFieldDefinitionType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinitionType$outboundSchema;
  /** @deprecated use `CustomFieldDefinitionType$Outbound` instead. */
  export type Outbound = CustomFieldDefinitionType$Outbound;
}

export function customFieldDefinitionTypeToJSON(
  customFieldDefinitionType: CustomFieldDefinitionType,
): string {
  return JSON.stringify(
    CustomFieldDefinitionType$outboundSchema.parse(customFieldDefinitionType),
  );
}

export function customFieldDefinitionTypeFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinitionType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinitionType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinitionType' from JSON`,
  );
}

/** @internal */
export const CustomFieldDefinition$inboundSchema: z.ZodType<
  CustomFieldDefinition,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  options: z.nullable(
    z.array(z.union([
      z.lazy(() => CustomFieldDefinition4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ])),
  ).optional(),
  remote_id: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CustomFieldDefinitionType$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type CustomFieldDefinition$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  options?:
    | Array<
      CustomFieldDefinition4$Outbound | string | number | boolean | Array<any>
    >
    | null
    | undefined;
  remote_id?: string | null | undefined;
  type?: CustomFieldDefinitionType$Outbound | null | undefined;
};

/** @internal */
export const CustomFieldDefinition$outboundSchema: z.ZodType<
  CustomFieldDefinition$Outbound,
  z.ZodTypeDef,
  CustomFieldDefinition
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  options: z.nullable(
    z.array(z.union([
      z.lazy(() => CustomFieldDefinition4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ])),
  ).optional(),
  remoteId: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => CustomFieldDefinitionType$outboundSchema))
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
export namespace CustomFieldDefinition$ {
  /** @deprecated use `CustomFieldDefinition$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDefinition$inboundSchema;
  /** @deprecated use `CustomFieldDefinition$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDefinition$outboundSchema;
  /** @deprecated use `CustomFieldDefinition$Outbound` instead. */
  export type Outbound = CustomFieldDefinition$Outbound;
}

export function customFieldDefinitionToJSON(
  customFieldDefinition: CustomFieldDefinition,
): string {
  return JSON.stringify(
    CustomFieldDefinition$outboundSchema.parse(customFieldDefinition),
  );
}

export function customFieldDefinitionFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDefinition, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDefinition$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDefinition' from JSON`,
  );
}
