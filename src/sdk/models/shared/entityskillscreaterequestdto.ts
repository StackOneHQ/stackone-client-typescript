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

export type EntitySkillsCreateRequestDto4 = {};

export type EntitySkillsCreateRequestDtoSourceValue =
  | EntitySkillsCreateRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

export enum EntitySkillsCreateRequestDtoValue {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
}
export type EntitySkillsCreateRequestDtoValueOpen = OpenEnum<
  typeof EntitySkillsCreateRequestDtoValue
>;

/**
 * The proficiency level of the skill
 */
export type MaximumProficiency = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The name associated with this proficiency
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  sourceValue?:
    | EntitySkillsCreateRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: EntitySkillsCreateRequestDtoValueOpen | null | undefined;
};

export type EntitySkillsCreateRequestDtoSchemas4 = {};

export type EntitySkillsCreateRequestDtoSchemasSourceValue =
  | EntitySkillsCreateRequestDtoSchemas4
  | string
  | number
  | boolean
  | Array<any>;

export enum EntitySkillsCreateRequestDtoSchemasValue {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
}
export type EntitySkillsCreateRequestDtoSchemasValueOpen = OpenEnum<
  typeof EntitySkillsCreateRequestDtoSchemasValue
>;

/**
 * The proficiency level of the skill
 */
export type MinimumProficiency = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The name associated with this proficiency
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  sourceValue?:
    | EntitySkillsCreateRequestDtoSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: EntitySkillsCreateRequestDtoSchemasValueOpen | null | undefined;
};

export type EntitySkillsCreateRequestDto = {
  /**
   * The ID associated with this skill
   */
  id?: string | null | undefined;
  /**
   * The proficiency level of the skill
   */
  maximumProficiency?: MaximumProficiency | null | undefined;
  /**
   * The proficiency level of the skill
   */
  minimumProficiency?: MinimumProficiency | null | undefined;
  /**
   * The name associated with this skill
   */
  name?: string | null | undefined;
};

/** @internal */
export const EntitySkillsCreateRequestDto4$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type EntitySkillsCreateRequestDto4$Outbound = {};

/** @internal */
export const EntitySkillsCreateRequestDto4$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDto4$Outbound,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDto4$ {
  /** @deprecated use `EntitySkillsCreateRequestDto4$inboundSchema` instead. */
  export const inboundSchema = EntitySkillsCreateRequestDto4$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDto4$outboundSchema` instead. */
  export const outboundSchema = EntitySkillsCreateRequestDto4$outboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDto4$Outbound` instead. */
  export type Outbound = EntitySkillsCreateRequestDto4$Outbound;
}

export function entitySkillsCreateRequestDto4ToJSON(
  entitySkillsCreateRequestDto4: EntitySkillsCreateRequestDto4,
): string {
  return JSON.stringify(
    EntitySkillsCreateRequestDto4$outboundSchema.parse(
      entitySkillsCreateRequestDto4,
    ),
  );
}

export function entitySkillsCreateRequestDto4FromJSON(
  jsonString: string,
): SafeParseResult<EntitySkillsCreateRequestDto4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EntitySkillsCreateRequestDto4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntitySkillsCreateRequestDto4' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDtoSourceValue$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => EntitySkillsCreateRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type EntitySkillsCreateRequestDtoSourceValue$Outbound =
  | EntitySkillsCreateRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const EntitySkillsCreateRequestDtoSourceValue$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDtoSourceValue
> = z.union([
  z.lazy(() => EntitySkillsCreateRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDtoSourceValue$ {
  /** @deprecated use `EntitySkillsCreateRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    EntitySkillsCreateRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    EntitySkillsCreateRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = EntitySkillsCreateRequestDtoSourceValue$Outbound;
}

export function entitySkillsCreateRequestDtoSourceValueToJSON(
  entitySkillsCreateRequestDtoSourceValue:
    EntitySkillsCreateRequestDtoSourceValue,
): string {
  return JSON.stringify(
    EntitySkillsCreateRequestDtoSourceValue$outboundSchema.parse(
      entitySkillsCreateRequestDtoSourceValue,
    ),
  );
}

export function entitySkillsCreateRequestDtoSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  EntitySkillsCreateRequestDtoSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EntitySkillsCreateRequestDtoSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EntitySkillsCreateRequestDtoSourceValue' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDtoValue$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(EntitySkillsCreateRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const EntitySkillsCreateRequestDtoValue$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoValueOpen,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDtoValueOpen
> = z.union([
  z.nativeEnum(EntitySkillsCreateRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDtoValue$ {
  /** @deprecated use `EntitySkillsCreateRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = EntitySkillsCreateRequestDtoValue$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema =
    EntitySkillsCreateRequestDtoValue$outboundSchema;
}

/** @internal */
export const MaximumProficiency$inboundSchema: z.ZodType<
  MaximumProficiency,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  source_value: z.nullable(
    z.union([
      z.lazy(() => EntitySkillsCreateRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(EntitySkillsCreateRequestDtoValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "source_value": "sourceValue",
  });
});

/** @internal */
export type MaximumProficiency$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  source_value?:
    | EntitySkillsCreateRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const MaximumProficiency$outboundSchema: z.ZodType<
  MaximumProficiency$Outbound,
  z.ZodTypeDef,
  MaximumProficiency
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => EntitySkillsCreateRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(EntitySkillsCreateRequestDtoValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MaximumProficiency$ {
  /** @deprecated use `MaximumProficiency$inboundSchema` instead. */
  export const inboundSchema = MaximumProficiency$inboundSchema;
  /** @deprecated use `MaximumProficiency$outboundSchema` instead. */
  export const outboundSchema = MaximumProficiency$outboundSchema;
  /** @deprecated use `MaximumProficiency$Outbound` instead. */
  export type Outbound = MaximumProficiency$Outbound;
}

export function maximumProficiencyToJSON(
  maximumProficiency: MaximumProficiency,
): string {
  return JSON.stringify(
    MaximumProficiency$outboundSchema.parse(maximumProficiency),
  );
}

export function maximumProficiencyFromJSON(
  jsonString: string,
): SafeParseResult<MaximumProficiency, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MaximumProficiency$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MaximumProficiency' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDtoSchemas4$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type EntitySkillsCreateRequestDtoSchemas4$Outbound = {};

/** @internal */
export const EntitySkillsCreateRequestDtoSchemas4$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSchemas4$Outbound,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDtoSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDtoSchemas4$ {
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemas4$inboundSchema` instead. */
  export const inboundSchema =
    EntitySkillsCreateRequestDtoSchemas4$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemas4$outboundSchema` instead. */
  export const outboundSchema =
    EntitySkillsCreateRequestDtoSchemas4$outboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemas4$Outbound` instead. */
  export type Outbound = EntitySkillsCreateRequestDtoSchemas4$Outbound;
}

export function entitySkillsCreateRequestDtoSchemas4ToJSON(
  entitySkillsCreateRequestDtoSchemas4: EntitySkillsCreateRequestDtoSchemas4,
): string {
  return JSON.stringify(
    EntitySkillsCreateRequestDtoSchemas4$outboundSchema.parse(
      entitySkillsCreateRequestDtoSchemas4,
    ),
  );
}

export function entitySkillsCreateRequestDtoSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<EntitySkillsCreateRequestDtoSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EntitySkillsCreateRequestDtoSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntitySkillsCreateRequestDtoSchemas4' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDtoSchemasSourceValue$inboundSchema:
  z.ZodType<
    EntitySkillsCreateRequestDtoSchemasSourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => EntitySkillsCreateRequestDtoSchemas4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type EntitySkillsCreateRequestDtoSchemasSourceValue$Outbound =
  | EntitySkillsCreateRequestDtoSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const EntitySkillsCreateRequestDtoSchemasSourceValue$outboundSchema:
  z.ZodType<
    EntitySkillsCreateRequestDtoSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    EntitySkillsCreateRequestDtoSchemasSourceValue
  > = z.union([
    z.lazy(() => EntitySkillsCreateRequestDtoSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDtoSchemasSourceValue$ {
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    EntitySkillsCreateRequestDtoSchemasSourceValue$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    EntitySkillsCreateRequestDtoSchemasSourceValue$outboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemasSourceValue$Outbound` instead. */
  export type Outbound =
    EntitySkillsCreateRequestDtoSchemasSourceValue$Outbound;
}

export function entitySkillsCreateRequestDtoSchemasSourceValueToJSON(
  entitySkillsCreateRequestDtoSchemasSourceValue:
    EntitySkillsCreateRequestDtoSchemasSourceValue,
): string {
  return JSON.stringify(
    EntitySkillsCreateRequestDtoSchemasSourceValue$outboundSchema.parse(
      entitySkillsCreateRequestDtoSchemasSourceValue,
    ),
  );
}

export function entitySkillsCreateRequestDtoSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  EntitySkillsCreateRequestDtoSchemasSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      EntitySkillsCreateRequestDtoSchemasSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'EntitySkillsCreateRequestDtoSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDtoSchemasValue$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(EntitySkillsCreateRequestDtoSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const EntitySkillsCreateRequestDtoSchemasValue$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDtoSchemasValueOpen,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDtoSchemasValueOpen
> = z.union([
  z.nativeEnum(EntitySkillsCreateRequestDtoSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDtoSchemasValue$ {
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemasValue$inboundSchema` instead. */
  export const inboundSchema =
    EntitySkillsCreateRequestDtoSchemasValue$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDtoSchemasValue$outboundSchema` instead. */
  export const outboundSchema =
    EntitySkillsCreateRequestDtoSchemasValue$outboundSchema;
}

/** @internal */
export const MinimumProficiency$inboundSchema: z.ZodType<
  MinimumProficiency,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  source_value: z.nullable(
    z.union([
      z.lazy(() => EntitySkillsCreateRequestDtoSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(EntitySkillsCreateRequestDtoSchemasValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "source_value": "sourceValue",
  });
});

/** @internal */
export type MinimumProficiency$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  source_value?:
    | EntitySkillsCreateRequestDtoSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const MinimumProficiency$outboundSchema: z.ZodType<
  MinimumProficiency$Outbound,
  z.ZodTypeDef,
  MinimumProficiency
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => EntitySkillsCreateRequestDtoSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(EntitySkillsCreateRequestDtoSchemasValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MinimumProficiency$ {
  /** @deprecated use `MinimumProficiency$inboundSchema` instead. */
  export const inboundSchema = MinimumProficiency$inboundSchema;
  /** @deprecated use `MinimumProficiency$outboundSchema` instead. */
  export const outboundSchema = MinimumProficiency$outboundSchema;
  /** @deprecated use `MinimumProficiency$Outbound` instead. */
  export type Outbound = MinimumProficiency$Outbound;
}

export function minimumProficiencyToJSON(
  minimumProficiency: MinimumProficiency,
): string {
  return JSON.stringify(
    MinimumProficiency$outboundSchema.parse(minimumProficiency),
  );
}

export function minimumProficiencyFromJSON(
  jsonString: string,
): SafeParseResult<MinimumProficiency, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MinimumProficiency$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MinimumProficiency' from JSON`,
  );
}

/** @internal */
export const EntitySkillsCreateRequestDto$inboundSchema: z.ZodType<
  EntitySkillsCreateRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  maximum_proficiency: z.nullable(
    z.lazy(() => MaximumProficiency$inboundSchema),
  ).optional(),
  minimum_proficiency: z.nullable(
    z.lazy(() => MinimumProficiency$inboundSchema),
  ).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "maximum_proficiency": "maximumProficiency",
    "minimum_proficiency": "minimumProficiency",
  });
});

/** @internal */
export type EntitySkillsCreateRequestDto$Outbound = {
  id?: string | null | undefined;
  maximum_proficiency?: MaximumProficiency$Outbound | null | undefined;
  minimum_proficiency?: MinimumProficiency$Outbound | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const EntitySkillsCreateRequestDto$outboundSchema: z.ZodType<
  EntitySkillsCreateRequestDto$Outbound,
  z.ZodTypeDef,
  EntitySkillsCreateRequestDto
> = z.object({
  id: z.nullable(z.string()).optional(),
  maximumProficiency: z.nullable(
    z.lazy(() => MaximumProficiency$outboundSchema),
  ).optional(),
  minimumProficiency: z.nullable(
    z.lazy(() => MinimumProficiency$outboundSchema),
  ).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    maximumProficiency: "maximum_proficiency",
    minimumProficiency: "minimum_proficiency",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsCreateRequestDto$ {
  /** @deprecated use `EntitySkillsCreateRequestDto$inboundSchema` instead. */
  export const inboundSchema = EntitySkillsCreateRequestDto$inboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDto$outboundSchema` instead. */
  export const outboundSchema = EntitySkillsCreateRequestDto$outboundSchema;
  /** @deprecated use `EntitySkillsCreateRequestDto$Outbound` instead. */
  export type Outbound = EntitySkillsCreateRequestDto$Outbound;
}

export function entitySkillsCreateRequestDtoToJSON(
  entitySkillsCreateRequestDto: EntitySkillsCreateRequestDto,
): string {
  return JSON.stringify(
    EntitySkillsCreateRequestDto$outboundSchema.parse(
      entitySkillsCreateRequestDto,
    ),
  );
}

export function entitySkillsCreateRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<EntitySkillsCreateRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EntitySkillsCreateRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntitySkillsCreateRequestDto' from JSON`,
  );
}
