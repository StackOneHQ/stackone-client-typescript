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
  IamRole,
  IamRole$inboundSchema,
  IamRole$Outbound,
  IamRole$outboundSchema,
} from "./iamrole.js";

export type IamGroup4 = {};

export type IamGroupSourceValue =
  | IamGroup4
  | string
  | number
  | boolean
  | Array<any>;

export enum IamGroupValue {
  Workspace = "workspace",
  Team = "team",
  Department = "department",
  Group = "group",
  Organization = "organization",
  UnmappedValue = "unmapped_value",
  CostCenter = "cost_center",
}
export type IamGroupValueOpen = OpenEnum<typeof IamGroupValue>;

export type IamGroupType = {
  sourceValue?:
    | IamGroup4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: IamGroupValueOpen | null | undefined;
};

export type IamGroup = {
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * The parent group id for when a group belongs to another group.
   */
  parentId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Provider's unique identifier of the parent group id for when a group belongs to another group.
   */
  remoteParentId?: string | null | undefined;
  roles?: Array<IamRole> | null | undefined;
  type?: IamGroupType | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const IamGroup4$inboundSchema: z.ZodType<
  IamGroup4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type IamGroup4$Outbound = {};

/** @internal */
export const IamGroup4$outboundSchema: z.ZodType<
  IamGroup4$Outbound,
  z.ZodTypeDef,
  IamGroup4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroup4$ {
  /** @deprecated use `IamGroup4$inboundSchema` instead. */
  export const inboundSchema = IamGroup4$inboundSchema;
  /** @deprecated use `IamGroup4$outboundSchema` instead. */
  export const outboundSchema = IamGroup4$outboundSchema;
  /** @deprecated use `IamGroup4$Outbound` instead. */
  export type Outbound = IamGroup4$Outbound;
}

export function iamGroup4ToJSON(iamGroup4: IamGroup4): string {
  return JSON.stringify(IamGroup4$outboundSchema.parse(iamGroup4));
}

export function iamGroup4FromJSON(
  jsonString: string,
): SafeParseResult<IamGroup4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGroup4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGroup4' from JSON`,
  );
}

/** @internal */
export const IamGroupSourceValue$inboundSchema: z.ZodType<
  IamGroupSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => IamGroup4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type IamGroupSourceValue$Outbound =
  | IamGroup4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const IamGroupSourceValue$outboundSchema: z.ZodType<
  IamGroupSourceValue$Outbound,
  z.ZodTypeDef,
  IamGroupSourceValue
> = z.union([
  z.lazy(() => IamGroup4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroupSourceValue$ {
  /** @deprecated use `IamGroupSourceValue$inboundSchema` instead. */
  export const inboundSchema = IamGroupSourceValue$inboundSchema;
  /** @deprecated use `IamGroupSourceValue$outboundSchema` instead. */
  export const outboundSchema = IamGroupSourceValue$outboundSchema;
  /** @deprecated use `IamGroupSourceValue$Outbound` instead. */
  export type Outbound = IamGroupSourceValue$Outbound;
}

export function iamGroupSourceValueToJSON(
  iamGroupSourceValue: IamGroupSourceValue,
): string {
  return JSON.stringify(
    IamGroupSourceValue$outboundSchema.parse(iamGroupSourceValue),
  );
}

export function iamGroupSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<IamGroupSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGroupSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGroupSourceValue' from JSON`,
  );
}

/** @internal */
export const IamGroupValue$inboundSchema: z.ZodType<
  IamGroupValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(IamGroupValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const IamGroupValue$outboundSchema: z.ZodType<
  IamGroupValueOpen,
  z.ZodTypeDef,
  IamGroupValueOpen
> = z.union([
  z.nativeEnum(IamGroupValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroupValue$ {
  /** @deprecated use `IamGroupValue$inboundSchema` instead. */
  export const inboundSchema = IamGroupValue$inboundSchema;
  /** @deprecated use `IamGroupValue$outboundSchema` instead. */
  export const outboundSchema = IamGroupValue$outboundSchema;
}

/** @internal */
export const IamGroupType$inboundSchema: z.ZodType<
  IamGroupType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => IamGroup4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamGroupValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type IamGroupType$Outbound = {
  source_value?:
    | IamGroup4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const IamGroupType$outboundSchema: z.ZodType<
  IamGroupType$Outbound,
  z.ZodTypeDef,
  IamGroupType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => IamGroup4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamGroupValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroupType$ {
  /** @deprecated use `IamGroupType$inboundSchema` instead. */
  export const inboundSchema = IamGroupType$inboundSchema;
  /** @deprecated use `IamGroupType$outboundSchema` instead. */
  export const outboundSchema = IamGroupType$outboundSchema;
  /** @deprecated use `IamGroupType$Outbound` instead. */
  export type Outbound = IamGroupType$Outbound;
}

export function iamGroupTypeToJSON(iamGroupType: IamGroupType): string {
  return JSON.stringify(IamGroupType$outboundSchema.parse(iamGroupType));
}

export function iamGroupTypeFromJSON(
  jsonString: string,
): SafeParseResult<IamGroupType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGroupType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGroupType' from JSON`,
  );
}

/** @internal */
export const IamGroup$inboundSchema: z.ZodType<
  IamGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  parent_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_parent_id: z.nullable(z.string()).optional(),
  roles: z.nullable(z.array(IamRole$inboundSchema)).optional(),
  type: z.nullable(z.lazy(() => IamGroupType$inboundSchema)).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "parent_id": "parentId",
    "remote_id": "remoteId",
    "remote_parent_id": "remoteParentId",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type IamGroup$Outbound = {
  created_at?: string | null | undefined;
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  parent_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_parent_id?: string | null | undefined;
  roles?: Array<IamRole$Outbound> | null | undefined;
  type?: IamGroupType$Outbound | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const IamGroup$outboundSchema: z.ZodType<
  IamGroup$Outbound,
  z.ZodTypeDef,
  IamGroup
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  parentId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteParentId: z.nullable(z.string()).optional(),
  roles: z.nullable(z.array(IamRole$outboundSchema)).optional(),
  type: z.nullable(z.lazy(() => IamGroupType$outboundSchema)).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    parentId: "parent_id",
    remoteId: "remote_id",
    remoteParentId: "remote_parent_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGroup$ {
  /** @deprecated use `IamGroup$inboundSchema` instead. */
  export const inboundSchema = IamGroup$inboundSchema;
  /** @deprecated use `IamGroup$outboundSchema` instead. */
  export const outboundSchema = IamGroup$outboundSchema;
  /** @deprecated use `IamGroup$Outbound` instead. */
  export type Outbound = IamGroup$Outbound;
}

export function iamGroupToJSON(iamGroup: IamGroup): string {
  return JSON.stringify(IamGroup$outboundSchema.parse(iamGroup));
}

export function iamGroupFromJSON(
  jsonString: string,
): SafeParseResult<IamGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGroup' from JSON`,
  );
}
