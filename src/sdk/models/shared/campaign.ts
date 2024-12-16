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
  ChannelsEnum,
  ChannelsEnum$inboundSchema,
  ChannelsEnum$Outbound,
  ChannelsEnum$outboundSchema,
} from "./channelsenum.js";
import {
  Message,
  Message$inboundSchema,
  Message$Outbound,
  Message$outboundSchema,
} from "./createmessage.js";

export enum Two {
  True = "true",
  False = "false",
}

export type Archived = boolean | Two;

export enum Campaign2 {
  True = "true",
  False = "false",
}

export type Draft = boolean | Campaign2;

export type Campaign4 = {};

/**
 * The source value of the schedule type.
 */
export type CampaignSourceValue =
  | Campaign4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The schedule type of the campaign.
 */
export enum CampaignValue {
  Immediate = "immediate",
  Scheduled = "scheduled",
  Recurring = "recurring",
  Custom = "custom",
  Triggered = "triggered",
}
/**
 * The schedule type of the campaign.
 */
export type CampaignValueOpen = OpenEnum<typeof CampaignValue>;

/**
 * The schedule type
 */
export type ScheduleType = {
  /**
   * The source value of the schedule type.
   */
  sourceValue?:
    | Campaign4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The schedule type of the campaign.
   */
  value?: CampaignValueOpen | null | undefined;
};

export type CampaignSchemas4 = {};

/**
 * The source value of the Status.
 */
export type CampaignSchemasSourceValue =
  | CampaignSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The Status of the campaign.
 */
export enum CampaignSchemasValue {
  Draft = "draft",
  Archived = "archived",
  Live = "live",
}
/**
 * The Status of the campaign.
 */
export type CampaignSchemasValueOpen = OpenEnum<typeof CampaignSchemasValue>;

/**
 * Status of the Campaign
 */
export type CampaignStatus = {
  /**
   * The source value of the Status.
   */
  sourceValue?:
    | CampaignSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The Status of the campaign.
   */
  value?: CampaignSchemasValueOpen | null | undefined;
};

export type Campaign = {
  archived?: boolean | Two | null | undefined;
  /**
   * channels of the Campaign
   */
  channels?: Array<ChannelsEnum> | null | undefined;
  /**
   * The created_at date
   */
  createdAt?: Date | null | undefined;
  description?: string | null | undefined;
  draft?: boolean | Campaign2 | null | undefined;
  /**
   * The first_sent_at date
   */
  firstSentAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The last_sent_at date
   */
  lastSentAt?: Date | null | undefined;
  messages?: Array<Message> | null | undefined;
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The schedule type
   */
  scheduleType?: ScheduleType | null | undefined;
  /**
   * Status of the Campaign
   */
  status?: CampaignStatus | null | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * The updated_at date
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const Two$inboundSchema: z.ZodNativeEnum<typeof Two> = z.nativeEnum(Two);

/** @internal */
export const Two$outboundSchema: z.ZodNativeEnum<typeof Two> =
  Two$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
}

/** @internal */
export const Archived$inboundSchema: z.ZodType<
  Archived,
  z.ZodTypeDef,
  unknown
> = z.union([z.boolean(), Two$inboundSchema]);

/** @internal */
export type Archived$Outbound = boolean | string;

/** @internal */
export const Archived$outboundSchema: z.ZodType<
  Archived$Outbound,
  z.ZodTypeDef,
  Archived
> = z.union([z.boolean(), Two$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Archived$ {
  /** @deprecated use `Archived$inboundSchema` instead. */
  export const inboundSchema = Archived$inboundSchema;
  /** @deprecated use `Archived$outboundSchema` instead. */
  export const outboundSchema = Archived$outboundSchema;
  /** @deprecated use `Archived$Outbound` instead. */
  export type Outbound = Archived$Outbound;
}

export function archivedToJSON(archived: Archived): string {
  return JSON.stringify(Archived$outboundSchema.parse(archived));
}

export function archivedFromJSON(
  jsonString: string,
): SafeParseResult<Archived, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Archived$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Archived' from JSON`,
  );
}

/** @internal */
export const Campaign2$inboundSchema: z.ZodNativeEnum<typeof Campaign2> = z
  .nativeEnum(Campaign2);

/** @internal */
export const Campaign2$outboundSchema: z.ZodNativeEnum<typeof Campaign2> =
  Campaign2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Campaign2$ {
  /** @deprecated use `Campaign2$inboundSchema` instead. */
  export const inboundSchema = Campaign2$inboundSchema;
  /** @deprecated use `Campaign2$outboundSchema` instead. */
  export const outboundSchema = Campaign2$outboundSchema;
}

/** @internal */
export const Draft$inboundSchema: z.ZodType<Draft, z.ZodTypeDef, unknown> = z
  .union([z.boolean(), Campaign2$inboundSchema]);

/** @internal */
export type Draft$Outbound = boolean | string;

/** @internal */
export const Draft$outboundSchema: z.ZodType<
  Draft$Outbound,
  z.ZodTypeDef,
  Draft
> = z.union([z.boolean(), Campaign2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Draft$ {
  /** @deprecated use `Draft$inboundSchema` instead. */
  export const inboundSchema = Draft$inboundSchema;
  /** @deprecated use `Draft$outboundSchema` instead. */
  export const outboundSchema = Draft$outboundSchema;
  /** @deprecated use `Draft$Outbound` instead. */
  export type Outbound = Draft$Outbound;
}

export function draftToJSON(draft: Draft): string {
  return JSON.stringify(Draft$outboundSchema.parse(draft));
}

export function draftFromJSON(
  jsonString: string,
): SafeParseResult<Draft, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Draft$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Draft' from JSON`,
  );
}

/** @internal */
export const Campaign4$inboundSchema: z.ZodType<
  Campaign4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Campaign4$Outbound = {};

/** @internal */
export const Campaign4$outboundSchema: z.ZodType<
  Campaign4$Outbound,
  z.ZodTypeDef,
  Campaign4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Campaign4$ {
  /** @deprecated use `Campaign4$inboundSchema` instead. */
  export const inboundSchema = Campaign4$inboundSchema;
  /** @deprecated use `Campaign4$outboundSchema` instead. */
  export const outboundSchema = Campaign4$outboundSchema;
  /** @deprecated use `Campaign4$Outbound` instead. */
  export type Outbound = Campaign4$Outbound;
}

export function campaign4ToJSON(campaign4: Campaign4): string {
  return JSON.stringify(Campaign4$outboundSchema.parse(campaign4));
}

export function campaign4FromJSON(
  jsonString: string,
): SafeParseResult<Campaign4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Campaign4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Campaign4' from JSON`,
  );
}

/** @internal */
export const CampaignSourceValue$inboundSchema: z.ZodType<
  CampaignSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Campaign4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CampaignSourceValue$Outbound =
  | Campaign4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CampaignSourceValue$outboundSchema: z.ZodType<
  CampaignSourceValue$Outbound,
  z.ZodTypeDef,
  CampaignSourceValue
> = z.union([
  z.lazy(() => Campaign4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignSourceValue$ {
  /** @deprecated use `CampaignSourceValue$inboundSchema` instead. */
  export const inboundSchema = CampaignSourceValue$inboundSchema;
  /** @deprecated use `CampaignSourceValue$outboundSchema` instead. */
  export const outboundSchema = CampaignSourceValue$outboundSchema;
  /** @deprecated use `CampaignSourceValue$Outbound` instead. */
  export type Outbound = CampaignSourceValue$Outbound;
}

export function campaignSourceValueToJSON(
  campaignSourceValue: CampaignSourceValue,
): string {
  return JSON.stringify(
    CampaignSourceValue$outboundSchema.parse(campaignSourceValue),
  );
}

export function campaignSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CampaignSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CampaignSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CampaignSourceValue' from JSON`,
  );
}

/** @internal */
export const CampaignValue$inboundSchema: z.ZodType<
  CampaignValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CampaignValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CampaignValue$outboundSchema: z.ZodType<
  CampaignValueOpen,
  z.ZodTypeDef,
  CampaignValueOpen
> = z.union([
  z.nativeEnum(CampaignValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignValue$ {
  /** @deprecated use `CampaignValue$inboundSchema` instead. */
  export const inboundSchema = CampaignValue$inboundSchema;
  /** @deprecated use `CampaignValue$outboundSchema` instead. */
  export const outboundSchema = CampaignValue$outboundSchema;
}

/** @internal */
export const ScheduleType$inboundSchema: z.ZodType<
  ScheduleType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Campaign4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CampaignValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ScheduleType$Outbound = {
  source_value?:
    | Campaign4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ScheduleType$outboundSchema: z.ZodType<
  ScheduleType$Outbound,
  z.ZodTypeDef,
  ScheduleType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Campaign4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CampaignValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduleType$ {
  /** @deprecated use `ScheduleType$inboundSchema` instead. */
  export const inboundSchema = ScheduleType$inboundSchema;
  /** @deprecated use `ScheduleType$outboundSchema` instead. */
  export const outboundSchema = ScheduleType$outboundSchema;
  /** @deprecated use `ScheduleType$Outbound` instead. */
  export type Outbound = ScheduleType$Outbound;
}

export function scheduleTypeToJSON(scheduleType: ScheduleType): string {
  return JSON.stringify(ScheduleType$outboundSchema.parse(scheduleType));
}

export function scheduleTypeFromJSON(
  jsonString: string,
): SafeParseResult<ScheduleType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ScheduleType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ScheduleType' from JSON`,
  );
}

/** @internal */
export const CampaignSchemas4$inboundSchema: z.ZodType<
  CampaignSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CampaignSchemas4$Outbound = {};

/** @internal */
export const CampaignSchemas4$outboundSchema: z.ZodType<
  CampaignSchemas4$Outbound,
  z.ZodTypeDef,
  CampaignSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignSchemas4$ {
  /** @deprecated use `CampaignSchemas4$inboundSchema` instead. */
  export const inboundSchema = CampaignSchemas4$inboundSchema;
  /** @deprecated use `CampaignSchemas4$outboundSchema` instead. */
  export const outboundSchema = CampaignSchemas4$outboundSchema;
  /** @deprecated use `CampaignSchemas4$Outbound` instead. */
  export type Outbound = CampaignSchemas4$Outbound;
}

export function campaignSchemas4ToJSON(
  campaignSchemas4: CampaignSchemas4,
): string {
  return JSON.stringify(
    CampaignSchemas4$outboundSchema.parse(campaignSchemas4),
  );
}

export function campaignSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<CampaignSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CampaignSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CampaignSchemas4' from JSON`,
  );
}

/** @internal */
export const CampaignSchemasSourceValue$inboundSchema: z.ZodType<
  CampaignSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CampaignSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CampaignSchemasSourceValue$Outbound =
  | CampaignSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CampaignSchemasSourceValue$outboundSchema: z.ZodType<
  CampaignSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  CampaignSchemasSourceValue
> = z.union([
  z.lazy(() => CampaignSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignSchemasSourceValue$ {
  /** @deprecated use `CampaignSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema = CampaignSchemasSourceValue$inboundSchema;
  /** @deprecated use `CampaignSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema = CampaignSchemasSourceValue$outboundSchema;
  /** @deprecated use `CampaignSchemasSourceValue$Outbound` instead. */
  export type Outbound = CampaignSchemasSourceValue$Outbound;
}

export function campaignSchemasSourceValueToJSON(
  campaignSchemasSourceValue: CampaignSchemasSourceValue,
): string {
  return JSON.stringify(
    CampaignSchemasSourceValue$outboundSchema.parse(campaignSchemasSourceValue),
  );
}

export function campaignSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CampaignSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CampaignSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CampaignSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const CampaignSchemasValue$inboundSchema: z.ZodType<
  CampaignSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CampaignSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CampaignSchemasValue$outboundSchema: z.ZodType<
  CampaignSchemasValueOpen,
  z.ZodTypeDef,
  CampaignSchemasValueOpen
> = z.union([
  z.nativeEnum(CampaignSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignSchemasValue$ {
  /** @deprecated use `CampaignSchemasValue$inboundSchema` instead. */
  export const inboundSchema = CampaignSchemasValue$inboundSchema;
  /** @deprecated use `CampaignSchemasValue$outboundSchema` instead. */
  export const outboundSchema = CampaignSchemasValue$outboundSchema;
}

/** @internal */
export const CampaignStatus$inboundSchema: z.ZodType<
  CampaignStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CampaignSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CampaignSchemasValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CampaignStatus$Outbound = {
  source_value?:
    | CampaignSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CampaignStatus$outboundSchema: z.ZodType<
  CampaignStatus$Outbound,
  z.ZodTypeDef,
  CampaignStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CampaignSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CampaignSchemasValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignStatus$ {
  /** @deprecated use `CampaignStatus$inboundSchema` instead. */
  export const inboundSchema = CampaignStatus$inboundSchema;
  /** @deprecated use `CampaignStatus$outboundSchema` instead. */
  export const outboundSchema = CampaignStatus$outboundSchema;
  /** @deprecated use `CampaignStatus$Outbound` instead. */
  export type Outbound = CampaignStatus$Outbound;
}

export function campaignStatusToJSON(campaignStatus: CampaignStatus): string {
  return JSON.stringify(CampaignStatus$outboundSchema.parse(campaignStatus));
}

export function campaignStatusFromJSON(
  jsonString: string,
): SafeParseResult<CampaignStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CampaignStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CampaignStatus' from JSON`,
  );
}

/** @internal */
export const Campaign$inboundSchema: z.ZodType<
  Campaign,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived: z.nullable(z.union([z.boolean(), Two$inboundSchema])).optional(),
  channels: z.nullable(z.array(ChannelsEnum$inboundSchema)).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  description: z.nullable(z.string()).optional(),
  draft: z.nullable(z.union([z.boolean(), Campaign2$inboundSchema])).optional(),
  first_sent_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  last_sent_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  messages: z.nullable(z.array(Message$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  schedule_type: z.nullable(z.lazy(() => ScheduleType$inboundSchema))
    .optional(),
  status: z.nullable(z.lazy(() => CampaignStatus$inboundSchema)).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "first_sent_at": "firstSentAt",
    "last_sent_at": "lastSentAt",
    "remote_id": "remoteId",
    "schedule_type": "scheduleType",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Campaign$Outbound = {
  archived?: boolean | string | null | undefined;
  channels?: Array<ChannelsEnum$Outbound> | null | undefined;
  created_at?: string | null | undefined;
  description?: string | null | undefined;
  draft?: boolean | string | null | undefined;
  first_sent_at?: string | null | undefined;
  id?: string | null | undefined;
  last_sent_at?: string | null | undefined;
  messages?: Array<Message$Outbound> | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  schedule_type?: ScheduleType$Outbound | null | undefined;
  status?: CampaignStatus$Outbound | null | undefined;
  tags?: Array<string> | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const Campaign$outboundSchema: z.ZodType<
  Campaign$Outbound,
  z.ZodTypeDef,
  Campaign
> = z.object({
  archived: z.nullable(z.union([z.boolean(), Two$outboundSchema])).optional(),
  channels: z.nullable(z.array(ChannelsEnum$outboundSchema)).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  description: z.nullable(z.string()).optional(),
  draft: z.nullable(z.union([z.boolean(), Campaign2$outboundSchema]))
    .optional(),
  firstSentAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  lastSentAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  messages: z.nullable(z.array(Message$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  scheduleType: z.nullable(z.lazy(() => ScheduleType$outboundSchema))
    .optional(),
  status: z.nullable(z.lazy(() => CampaignStatus$outboundSchema)).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    firstSentAt: "first_sent_at",
    lastSentAt: "last_sent_at",
    remoteId: "remote_id",
    scheduleType: "schedule_type",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Campaign$ {
  /** @deprecated use `Campaign$inboundSchema` instead. */
  export const inboundSchema = Campaign$inboundSchema;
  /** @deprecated use `Campaign$outboundSchema` instead. */
  export const outboundSchema = Campaign$outboundSchema;
  /** @deprecated use `Campaign$Outbound` instead. */
  export type Outbound = Campaign$Outbound;
}

export function campaignToJSON(campaign: Campaign): string {
  return JSON.stringify(Campaign$outboundSchema.parse(campaign));
}

export function campaignFromJSON(
  jsonString: string,
): SafeParseResult<Campaign, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Campaign$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Campaign' from JSON`,
  );
}
