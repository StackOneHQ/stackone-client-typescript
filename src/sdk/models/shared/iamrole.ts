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
import {
  IamPolicy,
  IamPolicy$inboundSchema,
  IamPolicy$Outbound,
  IamPolicy$outboundSchema,
} from "./iampolicy.js";

export type IamRole4 = {};

export type IamRoleSourceValue =
  | IamRole4
  | string
  | number
  | boolean
  | Array<any>;

export enum IamRoleValue {
  Admin = "admin",
  Viewer = "viewer",
  Editor = "editor",
  Basic = "basic",
  Guest = "guest",
  Unassigned = "unassigned",
  Restricted = "restricted",
  UnmappedValue = "unmapped_value",
}
export type IamRoleValueOpen = OpenEnum<typeof IamRoleValue>;

export type IamRoleType = {
  sourceValue?:
    | IamRole4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: IamRoleValueOpen | null | undefined;
};

export type IamRole = {
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * The set of policies associated with the role.
   */
  policies?: Array<IamPolicy> | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  type?: IamRoleType | null | undefined;
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const IamRole4$inboundSchema: z.ZodType<
  IamRole4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type IamRole4$Outbound = {};

/** @internal */
export const IamRole4$outboundSchema: z.ZodType<
  IamRole4$Outbound,
  z.ZodTypeDef,
  IamRole4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRole4$ {
  /** @deprecated use `IamRole4$inboundSchema` instead. */
  export const inboundSchema = IamRole4$inboundSchema;
  /** @deprecated use `IamRole4$outboundSchema` instead. */
  export const outboundSchema = IamRole4$outboundSchema;
  /** @deprecated use `IamRole4$Outbound` instead. */
  export type Outbound = IamRole4$Outbound;
}

/** @internal */
export const IamRoleSourceValue$inboundSchema: z.ZodType<
  IamRoleSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => IamRole4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type IamRoleSourceValue$Outbound =
  | IamRole4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const IamRoleSourceValue$outboundSchema: z.ZodType<
  IamRoleSourceValue$Outbound,
  z.ZodTypeDef,
  IamRoleSourceValue
> = z.union([
  z.lazy(() => IamRole4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRoleSourceValue$ {
  /** @deprecated use `IamRoleSourceValue$inboundSchema` instead. */
  export const inboundSchema = IamRoleSourceValue$inboundSchema;
  /** @deprecated use `IamRoleSourceValue$outboundSchema` instead. */
  export const outboundSchema = IamRoleSourceValue$outboundSchema;
  /** @deprecated use `IamRoleSourceValue$Outbound` instead. */
  export type Outbound = IamRoleSourceValue$Outbound;
}

/** @internal */
export const IamRoleValue$inboundSchema: z.ZodType<
  IamRoleValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(IamRoleValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const IamRoleValue$outboundSchema: z.ZodType<
  IamRoleValueOpen,
  z.ZodTypeDef,
  IamRoleValueOpen
> = z.union([
  z.nativeEnum(IamRoleValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRoleValue$ {
  /** @deprecated use `IamRoleValue$inboundSchema` instead. */
  export const inboundSchema = IamRoleValue$inboundSchema;
  /** @deprecated use `IamRoleValue$outboundSchema` instead. */
  export const outboundSchema = IamRoleValue$outboundSchema;
}

/** @internal */
export const IamRoleType$inboundSchema: z.ZodType<
  IamRoleType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => IamRole4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamRoleValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type IamRoleType$Outbound = {
  source_value?:
    | IamRole4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const IamRoleType$outboundSchema: z.ZodType<
  IamRoleType$Outbound,
  z.ZodTypeDef,
  IamRoleType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => IamRole4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamRoleValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRoleType$ {
  /** @deprecated use `IamRoleType$inboundSchema` instead. */
  export const inboundSchema = IamRoleType$inboundSchema;
  /** @deprecated use `IamRoleType$outboundSchema` instead. */
  export const outboundSchema = IamRoleType$outboundSchema;
  /** @deprecated use `IamRoleType$Outbound` instead. */
  export type Outbound = IamRoleType$Outbound;
}

/** @internal */
export const IamRole$inboundSchema: z.ZodType<IamRole, z.ZodTypeDef, unknown> =
  z.object({
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    description: z.nullable(z.string()).optional(),
    id: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    policies: z.nullable(z.array(IamPolicy$inboundSchema)).optional(),
    remote_id: z.nullable(z.string()).optional(),
    type: z.nullable(z.lazy(() => IamRoleType$inboundSchema)).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "remote_id": "remoteId",
      "updated_at": "updatedAt",
    });
  });

/** @internal */
export type IamRole$Outbound = {
  created_at?: string | null | undefined;
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  policies?: Array<IamPolicy$Outbound> | null | undefined;
  remote_id?: string | null | undefined;
  type?: IamRoleType$Outbound | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const IamRole$outboundSchema: z.ZodType<
  IamRole$Outbound,
  z.ZodTypeDef,
  IamRole
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  policies: z.nullable(z.array(IamPolicy$outboundSchema)).optional(),
  remoteId: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => IamRoleType$outboundSchema)).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    remoteId: "remote_id",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRole$ {
  /** @deprecated use `IamRole$inboundSchema` instead. */
  export const inboundSchema = IamRole$inboundSchema;
  /** @deprecated use `IamRole$outboundSchema` instead. */
  export const outboundSchema = IamRole$outboundSchema;
  /** @deprecated use `IamRole$Outbound` instead. */
  export type Outbound = IamRole$Outbound;
}
