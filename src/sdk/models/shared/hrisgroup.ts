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

export type HRISGroup4 = {};

export type HRISGroupSourceValue =
  | HRISGroup4
  | string
  | number
  | boolean
  | Array<any>;

export enum HRISGroupValue {
  Workspace = "workspace",
  Team = "team",
  Department = "department",
  Group = "group",
  Organization = "organization",
  UnmappedValue = "unmapped_value",
  CostCenter = "cost_center",
}
export type HRISGroupValueOpen = OpenEnum<typeof HRISGroupValue>;

/**
 * The type of the group
 */
export type HRISGroupType = {
  sourceValue?:
    | HRISGroup4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: HRISGroupValueOpen | null | undefined;
};

export type HRISGroup = {
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
   * The type of the group
   */
  type?: HRISGroupType | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISGroup4$inboundSchema: z.ZodType<
  HRISGroup4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HRISGroup4$Outbound = {};

/** @internal */
export const HRISGroup4$outboundSchema: z.ZodType<
  HRISGroup4$Outbound,
  z.ZodTypeDef,
  HRISGroup4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISGroup4$ {
  /** @deprecated use `HRISGroup4$inboundSchema` instead. */
  export const inboundSchema = HRISGroup4$inboundSchema;
  /** @deprecated use `HRISGroup4$outboundSchema` instead. */
  export const outboundSchema = HRISGroup4$outboundSchema;
  /** @deprecated use `HRISGroup4$Outbound` instead. */
  export type Outbound = HRISGroup4$Outbound;
}

export function hrisGroup4ToJSON(hrisGroup4: HRISGroup4): string {
  return JSON.stringify(HRISGroup4$outboundSchema.parse(hrisGroup4));
}

export function hrisGroup4FromJSON(
  jsonString: string,
): SafeParseResult<HRISGroup4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISGroup4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISGroup4' from JSON`,
  );
}

/** @internal */
export const HRISGroupSourceValue$inboundSchema: z.ZodType<
  HRISGroupSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HRISGroup4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type HRISGroupSourceValue$Outbound =
  | HRISGroup4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const HRISGroupSourceValue$outboundSchema: z.ZodType<
  HRISGroupSourceValue$Outbound,
  z.ZodTypeDef,
  HRISGroupSourceValue
> = z.union([
  z.lazy(() => HRISGroup4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISGroupSourceValue$ {
  /** @deprecated use `HRISGroupSourceValue$inboundSchema` instead. */
  export const inboundSchema = HRISGroupSourceValue$inboundSchema;
  /** @deprecated use `HRISGroupSourceValue$outboundSchema` instead. */
  export const outboundSchema = HRISGroupSourceValue$outboundSchema;
  /** @deprecated use `HRISGroupSourceValue$Outbound` instead. */
  export type Outbound = HRISGroupSourceValue$Outbound;
}

export function hrisGroupSourceValueToJSON(
  hrisGroupSourceValue: HRISGroupSourceValue,
): string {
  return JSON.stringify(
    HRISGroupSourceValue$outboundSchema.parse(hrisGroupSourceValue),
  );
}

export function hrisGroupSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<HRISGroupSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISGroupSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISGroupSourceValue' from JSON`,
  );
}

/** @internal */
export const HRISGroupValue$inboundSchema: z.ZodType<
  HRISGroupValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(HRISGroupValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const HRISGroupValue$outboundSchema: z.ZodType<
  HRISGroupValueOpen,
  z.ZodTypeDef,
  HRISGroupValueOpen
> = z.union([
  z.nativeEnum(HRISGroupValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISGroupValue$ {
  /** @deprecated use `HRISGroupValue$inboundSchema` instead. */
  export const inboundSchema = HRISGroupValue$inboundSchema;
  /** @deprecated use `HRISGroupValue$outboundSchema` instead. */
  export const outboundSchema = HRISGroupValue$outboundSchema;
}

/** @internal */
export const HRISGroupType$inboundSchema: z.ZodType<
  HRISGroupType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => HRISGroup4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISGroupValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type HRISGroupType$Outbound = {
  source_value?:
    | HRISGroup4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const HRISGroupType$outboundSchema: z.ZodType<
  HRISGroupType$Outbound,
  z.ZodTypeDef,
  HRISGroupType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => HRISGroup4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISGroupValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISGroupType$ {
  /** @deprecated use `HRISGroupType$inboundSchema` instead. */
  export const inboundSchema = HRISGroupType$inboundSchema;
  /** @deprecated use `HRISGroupType$outboundSchema` instead. */
  export const outboundSchema = HRISGroupType$outboundSchema;
  /** @deprecated use `HRISGroupType$Outbound` instead. */
  export type Outbound = HRISGroupType$Outbound;
}

export function hrisGroupTypeToJSON(hrisGroupType: HRISGroupType): string {
  return JSON.stringify(HRISGroupType$outboundSchema.parse(hrisGroupType));
}

export function hrisGroupTypeFromJSON(
  jsonString: string,
): SafeParseResult<HRISGroupType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISGroupType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISGroupType' from JSON`,
  );
}

/** @internal */
export const HRISGroup$inboundSchema: z.ZodType<
  HRISGroup,
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
  type: z.nullable(z.lazy(() => HRISGroupType$inboundSchema)).optional(),
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
export type HRISGroup$Outbound = {
  company_id?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  owner_ids?: Array<string> | null | undefined;
  parent_ids?: Array<string> | null | undefined;
  remote_company_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_owner_ids?: Array<string> | null | undefined;
  remote_parent_ids?: Array<string> | null | undefined;
  type?: HRISGroupType$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISGroup$outboundSchema: z.ZodType<
  HRISGroup$Outbound,
  z.ZodTypeDef,
  HRISGroup
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
  type: z.nullable(z.lazy(() => HRISGroupType$outboundSchema)).optional(),
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
export namespace HRISGroup$ {
  /** @deprecated use `HRISGroup$inboundSchema` instead. */
  export const inboundSchema = HRISGroup$inboundSchema;
  /** @deprecated use `HRISGroup$outboundSchema` instead. */
  export const outboundSchema = HRISGroup$outboundSchema;
  /** @deprecated use `HRISGroup$Outbound` instead. */
  export type Outbound = HRISGroup$Outbound;
}

export function hrisGroupToJSON(hrisGroup: HRISGroup): string {
  return JSON.stringify(HRISGroup$outboundSchema.parse(hrisGroup));
}

export function hrisGroupFromJSON(
  jsonString: string,
): SafeParseResult<HRISGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISGroup' from JSON`,
  );
}
