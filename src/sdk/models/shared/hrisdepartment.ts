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

export type HRISDepartment4 = {};

export type HRISDepartmentSourceValue =
  | HRISDepartment4
  | string
  | number
  | boolean
  | Array<any>;

export enum HRISDepartmentValue {
  Department = "department",
  Company = "company",
  Division = "division",
  Group = "group",
  Project = "project",
  Team = "team",
  UnmappedValue = "unmapped_value",
}
export type HRISDepartmentValueOpen = OpenEnum<typeof HRISDepartmentValue>;

/**
 * The type of the department group
 */
export type HRISDepartmentType = {
  sourceValue?:
    | HRISDepartment4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: HRISDepartmentValueOpen | null | undefined;
};

export type HRISDepartment = {
  /**
   * The id of the company that the group belongs to
   */
  companyId?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The name of the group
   */
  name?: string | null | undefined;
  /**
   * The list of group owner ids of the given group
   */
  ownerIds?: Array<string> | null | undefined;
  /**
   * The list of parent group ids of the given group
   */
  parentIds?: Array<string> | null | undefined;
  /**
   * Provider's id of the company that the group belongs to
   */
  remoteCompanyId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The list of remote group owner ids of the given group
   */
  remoteOwnerIds?: Array<string> | null | undefined;
  /**
   * Provider's list of parent group remote ids of the given group
   */
  remoteParentIds?: Array<string> | null | undefined;
  /**
   * The type of the department group
   */
  type?: HRISDepartmentType | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISDepartment4$inboundSchema: z.ZodType<
  HRISDepartment4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HRISDepartment4$Outbound = {};

/** @internal */
export const HRISDepartment4$outboundSchema: z.ZodType<
  HRISDepartment4$Outbound,
  z.ZodTypeDef,
  HRISDepartment4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISDepartment4$ {
  /** @deprecated use `HRISDepartment4$inboundSchema` instead. */
  export const inboundSchema = HRISDepartment4$inboundSchema;
  /** @deprecated use `HRISDepartment4$outboundSchema` instead. */
  export const outboundSchema = HRISDepartment4$outboundSchema;
  /** @deprecated use `HRISDepartment4$Outbound` instead. */
  export type Outbound = HRISDepartment4$Outbound;
}

export function hrisDepartment4ToJSON(
  hrisDepartment4: HRISDepartment4,
): string {
  return JSON.stringify(HRISDepartment4$outboundSchema.parse(hrisDepartment4));
}

export function hrisDepartment4FromJSON(
  jsonString: string,
): SafeParseResult<HRISDepartment4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISDepartment4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISDepartment4' from JSON`,
  );
}

/** @internal */
export const HRISDepartmentSourceValue$inboundSchema: z.ZodType<
  HRISDepartmentSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HRISDepartment4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type HRISDepartmentSourceValue$Outbound =
  | HRISDepartment4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const HRISDepartmentSourceValue$outboundSchema: z.ZodType<
  HRISDepartmentSourceValue$Outbound,
  z.ZodTypeDef,
  HRISDepartmentSourceValue
> = z.union([
  z.lazy(() => HRISDepartment4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISDepartmentSourceValue$ {
  /** @deprecated use `HRISDepartmentSourceValue$inboundSchema` instead. */
  export const inboundSchema = HRISDepartmentSourceValue$inboundSchema;
  /** @deprecated use `HRISDepartmentSourceValue$outboundSchema` instead. */
  export const outboundSchema = HRISDepartmentSourceValue$outboundSchema;
  /** @deprecated use `HRISDepartmentSourceValue$Outbound` instead. */
  export type Outbound = HRISDepartmentSourceValue$Outbound;
}

export function hrisDepartmentSourceValueToJSON(
  hrisDepartmentSourceValue: HRISDepartmentSourceValue,
): string {
  return JSON.stringify(
    HRISDepartmentSourceValue$outboundSchema.parse(hrisDepartmentSourceValue),
  );
}

export function hrisDepartmentSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<HRISDepartmentSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISDepartmentSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISDepartmentSourceValue' from JSON`,
  );
}

/** @internal */
export const HRISDepartmentValue$inboundSchema: z.ZodType<
  HRISDepartmentValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(HRISDepartmentValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const HRISDepartmentValue$outboundSchema: z.ZodType<
  HRISDepartmentValueOpen,
  z.ZodTypeDef,
  HRISDepartmentValueOpen
> = z.union([
  z.nativeEnum(HRISDepartmentValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISDepartmentValue$ {
  /** @deprecated use `HRISDepartmentValue$inboundSchema` instead. */
  export const inboundSchema = HRISDepartmentValue$inboundSchema;
  /** @deprecated use `HRISDepartmentValue$outboundSchema` instead. */
  export const outboundSchema = HRISDepartmentValue$outboundSchema;
}

/** @internal */
export const HRISDepartmentType$inboundSchema: z.ZodType<
  HRISDepartmentType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => HRISDepartment4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISDepartmentValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type HRISDepartmentType$Outbound = {
  source_value?:
    | HRISDepartment4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const HRISDepartmentType$outboundSchema: z.ZodType<
  HRISDepartmentType$Outbound,
  z.ZodTypeDef,
  HRISDepartmentType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => HRISDepartment4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISDepartmentValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISDepartmentType$ {
  /** @deprecated use `HRISDepartmentType$inboundSchema` instead. */
  export const inboundSchema = HRISDepartmentType$inboundSchema;
  /** @deprecated use `HRISDepartmentType$outboundSchema` instead. */
  export const outboundSchema = HRISDepartmentType$outboundSchema;
  /** @deprecated use `HRISDepartmentType$Outbound` instead. */
  export type Outbound = HRISDepartmentType$Outbound;
}

export function hrisDepartmentTypeToJSON(
  hrisDepartmentType: HRISDepartmentType,
): string {
  return JSON.stringify(
    HRISDepartmentType$outboundSchema.parse(hrisDepartmentType),
  );
}

export function hrisDepartmentTypeFromJSON(
  jsonString: string,
): SafeParseResult<HRISDepartmentType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISDepartmentType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISDepartmentType' from JSON`,
  );
}

/** @internal */
export const HRISDepartment$inboundSchema: z.ZodType<
  HRISDepartment,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  owner_ids: z.nullable(z.array(z.string())).optional(),
  parent_ids: z.nullable(z.array(z.string())).optional(),
  remote_company_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_owner_ids: z.nullable(z.array(z.string())).optional(),
  remote_parent_ids: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(z.lazy(() => HRISDepartmentType$inboundSchema)).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "owner_ids": "ownerIds",
    "parent_ids": "parentIds",
    "remote_company_id": "remoteCompanyId",
    "remote_id": "remoteId",
    "remote_owner_ids": "remoteOwnerIds",
    "remote_parent_ids": "remoteParentIds",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type HRISDepartment$Outbound = {
  company_id?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  owner_ids?: Array<string> | null | undefined;
  parent_ids?: Array<string> | null | undefined;
  remote_company_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_owner_ids?: Array<string> | null | undefined;
  remote_parent_ids?: Array<string> | null | undefined;
  type?: HRISDepartmentType$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISDepartment$outboundSchema: z.ZodType<
  HRISDepartment$Outbound,
  z.ZodTypeDef,
  HRISDepartment
> = z.object({
  companyId: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  ownerIds: z.nullable(z.array(z.string())).optional(),
  parentIds: z.nullable(z.array(z.string())).optional(),
  remoteCompanyId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteOwnerIds: z.nullable(z.array(z.string())).optional(),
  remoteParentIds: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(z.lazy(() => HRISDepartmentType$outboundSchema)).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    ownerIds: "owner_ids",
    parentIds: "parent_ids",
    remoteCompanyId: "remote_company_id",
    remoteId: "remote_id",
    remoteOwnerIds: "remote_owner_ids",
    remoteParentIds: "remote_parent_ids",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISDepartment$ {
  /** @deprecated use `HRISDepartment$inboundSchema` instead. */
  export const inboundSchema = HRISDepartment$inboundSchema;
  /** @deprecated use `HRISDepartment$outboundSchema` instead. */
  export const outboundSchema = HRISDepartment$outboundSchema;
  /** @deprecated use `HRISDepartment$Outbound` instead. */
  export type Outbound = HRISDepartment$Outbound;
}

export function hrisDepartmentToJSON(hrisDepartment: HRISDepartment): string {
  return JSON.stringify(HRISDepartment$outboundSchema.parse(hrisDepartment));
}

export function hrisDepartmentFromJSON(
  jsonString: string,
): SafeParseResult<HRISDepartment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISDepartment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISDepartment' from JSON`,
  );
}
