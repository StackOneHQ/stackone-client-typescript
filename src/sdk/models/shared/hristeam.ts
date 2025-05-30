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

export type HRISTeam4 = {};

export type HRISTeamSourceValue =
  | HRISTeam4
  | string
  | number
  | boolean
  | Array<any>;

export enum HRISTeamValue {
  Team = "team",
  UnmappedValue = "unmapped_value",
}
export type HRISTeamValueOpen = OpenEnum<typeof HRISTeamValue>;

/**
 * The type of the team group
 */
export type HRISTeamType = {
  sourceValue?:
    | HRISTeam4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: HRISTeamValueOpen | null | undefined;
};

export type HRISTeam = {
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
   * The type of the team group
   */
  type?: HRISTeamType | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISTeam4$inboundSchema: z.ZodType<
  HRISTeam4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type HRISTeam4$Outbound = {};

/** @internal */
export const HRISTeam4$outboundSchema: z.ZodType<
  HRISTeam4$Outbound,
  z.ZodTypeDef,
  HRISTeam4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISTeam4$ {
  /** @deprecated use `HRISTeam4$inboundSchema` instead. */
  export const inboundSchema = HRISTeam4$inboundSchema;
  /** @deprecated use `HRISTeam4$outboundSchema` instead. */
  export const outboundSchema = HRISTeam4$outboundSchema;
  /** @deprecated use `HRISTeam4$Outbound` instead. */
  export type Outbound = HRISTeam4$Outbound;
}

export function hrisTeam4ToJSON(hrisTeam4: HRISTeam4): string {
  return JSON.stringify(HRISTeam4$outboundSchema.parse(hrisTeam4));
}

export function hrisTeam4FromJSON(
  jsonString: string,
): SafeParseResult<HRISTeam4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISTeam4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISTeam4' from JSON`,
  );
}

/** @internal */
export const HRISTeamSourceValue$inboundSchema: z.ZodType<
  HRISTeamSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => HRISTeam4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type HRISTeamSourceValue$Outbound =
  | HRISTeam4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const HRISTeamSourceValue$outboundSchema: z.ZodType<
  HRISTeamSourceValue$Outbound,
  z.ZodTypeDef,
  HRISTeamSourceValue
> = z.union([
  z.lazy(() => HRISTeam4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISTeamSourceValue$ {
  /** @deprecated use `HRISTeamSourceValue$inboundSchema` instead. */
  export const inboundSchema = HRISTeamSourceValue$inboundSchema;
  /** @deprecated use `HRISTeamSourceValue$outboundSchema` instead. */
  export const outboundSchema = HRISTeamSourceValue$outboundSchema;
  /** @deprecated use `HRISTeamSourceValue$Outbound` instead. */
  export type Outbound = HRISTeamSourceValue$Outbound;
}

export function hrisTeamSourceValueToJSON(
  hrisTeamSourceValue: HRISTeamSourceValue,
): string {
  return JSON.stringify(
    HRISTeamSourceValue$outboundSchema.parse(hrisTeamSourceValue),
  );
}

export function hrisTeamSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<HRISTeamSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISTeamSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISTeamSourceValue' from JSON`,
  );
}

/** @internal */
export const HRISTeamValue$inboundSchema: z.ZodType<
  HRISTeamValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(HRISTeamValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const HRISTeamValue$outboundSchema: z.ZodType<
  HRISTeamValueOpen,
  z.ZodTypeDef,
  HRISTeamValueOpen
> = z.union([
  z.nativeEnum(HRISTeamValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISTeamValue$ {
  /** @deprecated use `HRISTeamValue$inboundSchema` instead. */
  export const inboundSchema = HRISTeamValue$inboundSchema;
  /** @deprecated use `HRISTeamValue$outboundSchema` instead. */
  export const outboundSchema = HRISTeamValue$outboundSchema;
}

/** @internal */
export const HRISTeamType$inboundSchema: z.ZodType<
  HRISTeamType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => HRISTeam4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISTeamValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type HRISTeamType$Outbound = {
  source_value?:
    | HRISTeam4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const HRISTeamType$outboundSchema: z.ZodType<
  HRISTeamType$Outbound,
  z.ZodTypeDef,
  HRISTeamType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => HRISTeam4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(HRISTeamValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HRISTeamType$ {
  /** @deprecated use `HRISTeamType$inboundSchema` instead. */
  export const inboundSchema = HRISTeamType$inboundSchema;
  /** @deprecated use `HRISTeamType$outboundSchema` instead. */
  export const outboundSchema = HRISTeamType$outboundSchema;
  /** @deprecated use `HRISTeamType$Outbound` instead. */
  export type Outbound = HRISTeamType$Outbound;
}

export function hrisTeamTypeToJSON(hrisTeamType: HRISTeamType): string {
  return JSON.stringify(HRISTeamType$outboundSchema.parse(hrisTeamType));
}

export function hrisTeamTypeFromJSON(
  jsonString: string,
): SafeParseResult<HRISTeamType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISTeamType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISTeamType' from JSON`,
  );
}

/** @internal */
export const HRISTeam$inboundSchema: z.ZodType<
  HRISTeam,
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
  type: z.nullable(z.lazy(() => HRISTeamType$inboundSchema)).optional(),
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
export type HRISTeam$Outbound = {
  company_id?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  owner_ids?: Array<string> | null | undefined;
  parent_ids?: Array<string> | null | undefined;
  remote_company_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_owner_ids?: Array<string> | null | undefined;
  remote_parent_ids?: Array<string> | null | undefined;
  type?: HRISTeamType$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const HRISTeam$outboundSchema: z.ZodType<
  HRISTeam$Outbound,
  z.ZodTypeDef,
  HRISTeam
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
  type: z.nullable(z.lazy(() => HRISTeamType$outboundSchema)).optional(),
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
export namespace HRISTeam$ {
  /** @deprecated use `HRISTeam$inboundSchema` instead. */
  export const inboundSchema = HRISTeam$inboundSchema;
  /** @deprecated use `HRISTeam$outboundSchema` instead. */
  export const outboundSchema = HRISTeam$outboundSchema;
  /** @deprecated use `HRISTeam$Outbound` instead. */
  export type Outbound = HRISTeam$Outbound;
}

export function hrisTeamToJSON(hrisTeam: HRISTeam): string {
  return JSON.stringify(HRISTeam$outboundSchema.parse(hrisTeam));
}

export function hrisTeamFromJSON(
  jsonString: string,
): SafeParseResult<HRISTeam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HRISTeam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HRISTeam' from JSON`,
  );
}
