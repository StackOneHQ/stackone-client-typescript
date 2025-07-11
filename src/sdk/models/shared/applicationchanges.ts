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
  ApplicationChangesDataModel,
  ApplicationChangesDataModel$inboundSchema,
  ApplicationChangesDataModel$Outbound,
  ApplicationChangesDataModel$outboundSchema,
} from "./applicationchangesdatamodel.js";

/**
 * The actor who made the change
 */
export type Actor = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

export type ApplicationChanges4 = {};

/**
 * The source value of the change type
 */
export type ApplicationChangesSourceValue =
  | ApplicationChanges4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of change that occurred to the application
 */
export enum ApplicationChangesValue {
  ApplicationStatus = "application_status",
  InterviewStage = "interview_stage",
  RejectedReasons = "rejected_reasons",
  UnmappedValue = "unmapped_value",
}
/**
 * The type of change that occurred to the application
 */
export type ApplicationChangesValueOpen = OpenEnum<
  typeof ApplicationChangesValue
>;

/**
 * The type of change that occurred to the application
 */
export type ChangeType = {
  /**
   * The source value of the change type
   */
  sourceValue?:
    | ApplicationChanges4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of change that occurred to the application
   */
  value?: ApplicationChangesValueOpen | null | undefined;
};

export type ApplicationChanges = {
  /**
   * The actor who made the change
   */
  actor?: Actor | null | undefined;
  /**
   * The type of change that occurred to the application
   */
  changeType?: ChangeType | null | undefined;
  /**
   * Timestamp when the change was created
   */
  createdAt: Date;
  /**
   * Timestamp when the change became effective
   */
  effectiveAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The new values for changed application properties. Only includes fields that commonly change over the application lifecycle.
   */
  newValues: ApplicationChangesDataModel;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

/** @internal */
export const Actor$inboundSchema: z.ZodType<Actor, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    remote_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "remote_id": "remoteId",
    });
  });

/** @internal */
export type Actor$Outbound = {
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const Actor$outboundSchema: z.ZodType<
  Actor$Outbound,
  z.ZodTypeDef,
  Actor
> = z.object({
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Actor$ {
  /** @deprecated use `Actor$inboundSchema` instead. */
  export const inboundSchema = Actor$inboundSchema;
  /** @deprecated use `Actor$outboundSchema` instead. */
  export const outboundSchema = Actor$outboundSchema;
  /** @deprecated use `Actor$Outbound` instead. */
  export type Outbound = Actor$Outbound;
}

export function actorToJSON(actor: Actor): string {
  return JSON.stringify(Actor$outboundSchema.parse(actor));
}

export function actorFromJSON(
  jsonString: string,
): SafeParseResult<Actor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Actor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Actor' from JSON`,
  );
}

/** @internal */
export const ApplicationChanges4$inboundSchema: z.ZodType<
  ApplicationChanges4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ApplicationChanges4$Outbound = {};

/** @internal */
export const ApplicationChanges4$outboundSchema: z.ZodType<
  ApplicationChanges4$Outbound,
  z.ZodTypeDef,
  ApplicationChanges4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationChanges4$ {
  /** @deprecated use `ApplicationChanges4$inboundSchema` instead. */
  export const inboundSchema = ApplicationChanges4$inboundSchema;
  /** @deprecated use `ApplicationChanges4$outboundSchema` instead. */
  export const outboundSchema = ApplicationChanges4$outboundSchema;
  /** @deprecated use `ApplicationChanges4$Outbound` instead. */
  export type Outbound = ApplicationChanges4$Outbound;
}

export function applicationChanges4ToJSON(
  applicationChanges4: ApplicationChanges4,
): string {
  return JSON.stringify(
    ApplicationChanges4$outboundSchema.parse(applicationChanges4),
  );
}

export function applicationChanges4FromJSON(
  jsonString: string,
): SafeParseResult<ApplicationChanges4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationChanges4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationChanges4' from JSON`,
  );
}

/** @internal */
export const ApplicationChangesSourceValue$inboundSchema: z.ZodType<
  ApplicationChangesSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ApplicationChanges4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type ApplicationChangesSourceValue$Outbound =
  | ApplicationChanges4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const ApplicationChangesSourceValue$outboundSchema: z.ZodType<
  ApplicationChangesSourceValue$Outbound,
  z.ZodTypeDef,
  ApplicationChangesSourceValue
> = z.union([
  z.lazy(() => ApplicationChanges4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationChangesSourceValue$ {
  /** @deprecated use `ApplicationChangesSourceValue$inboundSchema` instead. */
  export const inboundSchema = ApplicationChangesSourceValue$inboundSchema;
  /** @deprecated use `ApplicationChangesSourceValue$outboundSchema` instead. */
  export const outboundSchema = ApplicationChangesSourceValue$outboundSchema;
  /** @deprecated use `ApplicationChangesSourceValue$Outbound` instead. */
  export type Outbound = ApplicationChangesSourceValue$Outbound;
}

export function applicationChangesSourceValueToJSON(
  applicationChangesSourceValue: ApplicationChangesSourceValue,
): string {
  return JSON.stringify(
    ApplicationChangesSourceValue$outboundSchema.parse(
      applicationChangesSourceValue,
    ),
  );
}

export function applicationChangesSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationChangesSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationChangesSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationChangesSourceValue' from JSON`,
  );
}

/** @internal */
export const ApplicationChangesValue$inboundSchema: z.ZodType<
  ApplicationChangesValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ApplicationChangesValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ApplicationChangesValue$outboundSchema: z.ZodType<
  ApplicationChangesValueOpen,
  z.ZodTypeDef,
  ApplicationChangesValueOpen
> = z.union([
  z.nativeEnum(ApplicationChangesValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationChangesValue$ {
  /** @deprecated use `ApplicationChangesValue$inboundSchema` instead. */
  export const inboundSchema = ApplicationChangesValue$inboundSchema;
  /** @deprecated use `ApplicationChangesValue$outboundSchema` instead. */
  export const outboundSchema = ApplicationChangesValue$outboundSchema;
}

/** @internal */
export const ChangeType$inboundSchema: z.ZodType<
  ChangeType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => ApplicationChanges4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ApplicationChangesValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ChangeType$Outbound = {
  source_value?:
    | ApplicationChanges4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ChangeType$outboundSchema: z.ZodType<
  ChangeType$Outbound,
  z.ZodTypeDef,
  ChangeType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => ApplicationChanges4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ApplicationChangesValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChangeType$ {
  /** @deprecated use `ChangeType$inboundSchema` instead. */
  export const inboundSchema = ChangeType$inboundSchema;
  /** @deprecated use `ChangeType$outboundSchema` instead. */
  export const outboundSchema = ChangeType$outboundSchema;
  /** @deprecated use `ChangeType$Outbound` instead. */
  export type Outbound = ChangeType$Outbound;
}

export function changeTypeToJSON(changeType: ChangeType): string {
  return JSON.stringify(ChangeType$outboundSchema.parse(changeType));
}

export function changeTypeFromJSON(
  jsonString: string,
): SafeParseResult<ChangeType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChangeType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChangeType' from JSON`,
  );
}

/** @internal */
export const ApplicationChanges$inboundSchema: z.ZodType<
  ApplicationChanges,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.nullable(z.lazy(() => Actor$inboundSchema)).optional(),
  change_type: z.nullable(z.lazy(() => ChangeType$inboundSchema)).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  effective_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  new_values: ApplicationChangesDataModel$inboundSchema,
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "change_type": "changeType",
    "created_at": "createdAt",
    "effective_at": "effectiveAt",
    "new_values": "newValues",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type ApplicationChanges$Outbound = {
  actor?: Actor$Outbound | null | undefined;
  change_type?: ChangeType$Outbound | null | undefined;
  created_at: string;
  effective_at?: string | null | undefined;
  id?: string | null | undefined;
  new_values: ApplicationChangesDataModel$Outbound;
  remote_id?: string | null | undefined;
};

/** @internal */
export const ApplicationChanges$outboundSchema: z.ZodType<
  ApplicationChanges$Outbound,
  z.ZodTypeDef,
  ApplicationChanges
> = z.object({
  actor: z.nullable(z.lazy(() => Actor$outboundSchema)).optional(),
  changeType: z.nullable(z.lazy(() => ChangeType$outboundSchema)).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  effectiveAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  newValues: ApplicationChangesDataModel$outboundSchema,
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    changeType: "change_type",
    createdAt: "created_at",
    effectiveAt: "effective_at",
    newValues: "new_values",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationChanges$ {
  /** @deprecated use `ApplicationChanges$inboundSchema` instead. */
  export const inboundSchema = ApplicationChanges$inboundSchema;
  /** @deprecated use `ApplicationChanges$outboundSchema` instead. */
  export const outboundSchema = ApplicationChanges$outboundSchema;
  /** @deprecated use `ApplicationChanges$Outbound` instead. */
  export type Outbound = ApplicationChanges$Outbound;
}

export function applicationChangesToJSON(
  applicationChanges: ApplicationChanges,
): string {
  return JSON.stringify(
    ApplicationChanges$outboundSchema.parse(applicationChanges),
  );
}

export function applicationChangesFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationChanges, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationChanges$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationChanges' from JSON`,
  );
}
