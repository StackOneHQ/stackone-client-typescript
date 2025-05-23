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

export type HRISCostCenter4 = {};

export type HRISCostCenterSourceValue =
  | HRISCostCenter4
  | string
  | number
  | boolean
  | Array<any>;

export enum HRISCostCenterValue {
  Workspace = "workspace",
  Team = "team",
  Department = "department",
  Group = "group",
  Organization = "organization",
  UnmappedValue = "unmapped_value",
  CostCenter = "cost_center",
}
export type HRISCostCenterValueOpen = OpenEnum<typeof HRISCostCenterValue>;

/**
 * The type of the group
 */
export type HRISCostCenterType = {
  sourceValue?:
    | HRISCostCenter4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: HRISCostCenterValueOpen | null | undefined;
};

export type HRISCostCenter = {
  /**
   * The id of the company that the group belongs to
   */
  companyId?: string | null | undefined;
  /**
   * The distribution percentage for cost_center
   */
  distributionPercentage?: number | null | undefined;
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
  type?: HRISCostCenterType | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISCostCenter4$inboundSchema: z.ZodType<
  HRISCostCenter4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HRISCostCenter4$Outbound = {};

/** @internal */
export const HRISCostCenter4$outboundSchema: z.ZodType<
  HRISCostCenter4$Outbound,
  z.ZodTypeDef,
  HRISCostCenter4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISCostCenter4$ {
  /** @deprecated use `HRISCostCenter4$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenter4$inboundSchema;
  /** @deprecated use `HRISCostCenter4$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenter4$outboundSchema;
  /** @deprecated use `HRISCostCenter4$Outbound` instead. */
  export type Outbound = HRISCostCenter4$Outbound;
}

export function hrisCostCenter4ToJSON(
  hrisCostCenter4: HRISCostCenter4,
): string {
  return JSON.stringify(HRISCostCenter4$outboundSchema.parse(hrisCostCenter4));
}

export function hrisCostCenter4FromJSON(
  jsonString: string,
): SafeParseResult<HRISCostCenter4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISCostCenter4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISCostCenter4' from JSON`,
  );
}

/** @internal */
export const HRISCostCenterSourceValue$inboundSchema: z.ZodType<
  HRISCostCenterSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HRISCostCenter4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type HRISCostCenterSourceValue$Outbound =
  | HRISCostCenter4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const HRISCostCenterSourceValue$outboundSchema: z.ZodType<
  HRISCostCenterSourceValue$Outbound,
  z.ZodTypeDef,
  HRISCostCenterSourceValue
> = z.union([
  z.lazy(() => HRISCostCenter4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISCostCenterSourceValue$ {
  /** @deprecated use `HRISCostCenterSourceValue$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenterSourceValue$inboundSchema;
  /** @deprecated use `HRISCostCenterSourceValue$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenterSourceValue$outboundSchema;
  /** @deprecated use `HRISCostCenterSourceValue$Outbound` instead. */
  export type Outbound = HRISCostCenterSourceValue$Outbound;
}

export function hrisCostCenterSourceValueToJSON(
  hrisCostCenterSourceValue: HRISCostCenterSourceValue,
): string {
  return JSON.stringify(
    HRISCostCenterSourceValue$outboundSchema.parse(hrisCostCenterSourceValue),
  );
}

export function hrisCostCenterSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<HRISCostCenterSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISCostCenterSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISCostCenterSourceValue' from JSON`,
  );
}

/** @internal */
export const HRISCostCenterValue$inboundSchema: z.ZodType<
  HRISCostCenterValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(HRISCostCenterValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const HRISCostCenterValue$outboundSchema: z.ZodType<
  HRISCostCenterValueOpen,
  z.ZodTypeDef,
  HRISCostCenterValueOpen
> = z.union([
  z.nativeEnum(HRISCostCenterValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISCostCenterValue$ {
  /** @deprecated use `HRISCostCenterValue$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenterValue$inboundSchema;
  /** @deprecated use `HRISCostCenterValue$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenterValue$outboundSchema;
}

/** @internal */
export const HRISCostCenterType$inboundSchema: z.ZodType<
  HRISCostCenterType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => HRISCostCenter4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISCostCenterValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type HRISCostCenterType$Outbound = {
  source_value?:
    | HRISCostCenter4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const HRISCostCenterType$outboundSchema: z.ZodType<
  HRISCostCenterType$Outbound,
  z.ZodTypeDef,
  HRISCostCenterType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => HRISCostCenter4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISCostCenterValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISCostCenterType$ {
  /** @deprecated use `HRISCostCenterType$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenterType$inboundSchema;
  /** @deprecated use `HRISCostCenterType$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenterType$outboundSchema;
  /** @deprecated use `HRISCostCenterType$Outbound` instead. */
  export type Outbound = HRISCostCenterType$Outbound;
}

export function hrisCostCenterTypeToJSON(
  hrisCostCenterType: HRISCostCenterType,
): string {
  return JSON.stringify(
    HRISCostCenterType$outboundSchema.parse(hrisCostCenterType),
  );
}

export function hrisCostCenterTypeFromJSON(
  jsonString: string,
): SafeParseResult<HRISCostCenterType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISCostCenterType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISCostCenterType' from JSON`,
  );
}

/** @internal */
export const HRISCostCenter$inboundSchema: z.ZodType<
  HRISCostCenter,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_id: z.nullable(z.string()).optional(),
  distribution_percentage: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  owner_ids: z.nullable(z.array(z.string())).optional(),
  parent_ids: z.nullable(z.array(z.string())).optional(),
  remote_company_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_owner_ids: z.nullable(z.array(z.string())).optional(),
  remote_parent_ids: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(z.lazy(() => HRISCostCenterType$inboundSchema)).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_id": "companyId",
    "distribution_percentage": "distributionPercentage",
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
export type HRISCostCenter$Outbound = {
  company_id?: string | null | undefined;
  distribution_percentage?: number | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  owner_ids?: Array<string> | null | undefined;
  parent_ids?: Array<string> | null | undefined;
  remote_company_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_owner_ids?: Array<string> | null | undefined;
  remote_parent_ids?: Array<string> | null | undefined;
  type?: HRISCostCenterType$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISCostCenter$outboundSchema: z.ZodType<
  HRISCostCenter$Outbound,
  z.ZodTypeDef,
  HRISCostCenter
> = z.object({
  companyId: z.nullable(z.string()).optional(),
  distributionPercentage: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  ownerIds: z.nullable(z.array(z.string())).optional(),
  parentIds: z.nullable(z.array(z.string())).optional(),
  remoteCompanyId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteOwnerIds: z.nullable(z.array(z.string())).optional(),
  remoteParentIds: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(z.lazy(() => HRISCostCenterType$outboundSchema)).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    distributionPercentage: "distribution_percentage",
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
export namespace HRISCostCenter$ {
  /** @deprecated use `HRISCostCenter$inboundSchema` instead. */
  export const inboundSchema = HRISCostCenter$inboundSchema;
  /** @deprecated use `HRISCostCenter$outboundSchema` instead. */
  export const outboundSchema = HRISCostCenter$outboundSchema;
  /** @deprecated use `HRISCostCenter$Outbound` instead. */
  export type Outbound = HRISCostCenter$Outbound;
}

export function hrisCostCenterToJSON(hrisCostCenter: HRISCostCenter): string {
  return JSON.stringify(HRISCostCenter$outboundSchema.parse(hrisCostCenter));
}

export function hrisCostCenterFromJSON(
  jsonString: string,
): SafeParseResult<HRISCostCenter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISCostCenter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISCostCenter' from JSON`,
  );
}
