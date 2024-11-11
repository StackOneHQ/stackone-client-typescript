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
  CustomFields,
  CustomFields$inboundSchema,
  CustomFields$Outbound,
  CustomFields$outboundSchema,
} from "./customfields.js";
import {
  InterviewStage,
  InterviewStage$inboundSchema,
  InterviewStage$Outbound,
  InterviewStage$outboundSchema,
} from "./interviewstage.js";
import {
  JobHiringTeam,
  JobHiringTeam$inboundSchema,
  JobHiringTeam$Outbound,
  JobHiringTeam$outboundSchema,
} from "./jobhiringteam.js";

/**
 * Confidential status of the job
 */
export enum AtsUpdateJobRequestDtoConfidential {
  True = "true",
  False = "false",
}
/**
 * Confidential status of the job
 */
export type AtsUpdateJobRequestDtoConfidentialOpen = OpenEnum<
  typeof AtsUpdateJobRequestDtoConfidential
>;

export type AtsUpdateJobRequestDto4 = {};

/**
 * The source value of the job status.
 */
export type AtsUpdateJobRequestDtoSourceValue =
  | AtsUpdateJobRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the job.
 */
export enum AtsUpdateJobRequestDtoValue {
  Published = "published",
  Draft = "draft",
  Pending = "pending",
  Internal = "internal",
  Archived = "archived",
  Closed = "closed",
  Open = "open",
  Deleted = "deleted",
  OnHold = "on_hold",
  UnmappedValue = "unmapped_value",
}
/**
 * The status of the job.
 */
export type AtsUpdateJobRequestDtoValueOpen = OpenEnum<
  typeof AtsUpdateJobRequestDtoValue
>;

/**
 * Status of the job
 */
export type AtsUpdateJobRequestDtoJobStatus = {
  /**
   * The source value of the job status.
   */
  sourceValue?:
    | AtsUpdateJobRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the job.
   */
  value?: AtsUpdateJobRequestDtoValueOpen | null | undefined;
};

export type AtsUpdateJobRequestDto = {
  /**
   * Code of the job
   */
  code?: string | null | undefined;
  /**
   * Confidential status of the job
   */
  confidential?: AtsUpdateJobRequestDtoConfidentialOpen | null | undefined;
  /**
   * The job custom fields
   */
  customFields?: Array<CustomFields> | null | undefined;
  /**
   * Department ids of the job
   */
  departmentIds?: Array<string> | null | undefined;
  /**
   * Hiring team for the job.
   */
  hiringTeam?: Array<JobHiringTeam> | null | undefined;
  /**
   * Interview stages for the job.
   */
  interviewStages?: Array<InterviewStage> | null | undefined;
  /**
   * Status of the job
   */
  jobStatus?: AtsUpdateJobRequestDtoJobStatus | null | undefined;
  /**
   * Location ids of the job
   */
  locationIds?: Array<string> | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Status of the job
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  status?: string | null | undefined;
  /**
   * Title of the job
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const AtsUpdateJobRequestDtoConfidential$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoConfidentialOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsUpdateJobRequestDtoConfidential),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsUpdateJobRequestDtoConfidential$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoConfidentialOpen,
  z.ZodTypeDef,
  AtsUpdateJobRequestDtoConfidentialOpen
> = z.union([
  z.nativeEnum(AtsUpdateJobRequestDtoConfidential),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDtoConfidential$ {
  /** @deprecated use `AtsUpdateJobRequestDtoConfidential$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDtoConfidential$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoConfidential$outboundSchema` instead. */
  export const outboundSchema =
    AtsUpdateJobRequestDtoConfidential$outboundSchema;
}

/** @internal */
export const AtsUpdateJobRequestDto4$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsUpdateJobRequestDto4$Outbound = {};

/** @internal */
export const AtsUpdateJobRequestDto4$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDto4$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDto4$ {
  /** @deprecated use `AtsUpdateJobRequestDto4$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDto4$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDto4$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobRequestDto4$outboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDto4$Outbound` instead. */
  export type Outbound = AtsUpdateJobRequestDto4$Outbound;
}

/** @internal */
export const AtsUpdateJobRequestDtoSourceValue$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AtsUpdateJobRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AtsUpdateJobRequestDtoSourceValue$Outbound =
  | AtsUpdateJobRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AtsUpdateJobRequestDtoSourceValue$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobRequestDtoSourceValue
> = z.union([
  z.lazy(() => AtsUpdateJobRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDtoSourceValue$ {
  /** @deprecated use `AtsUpdateJobRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    AtsUpdateJobRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = AtsUpdateJobRequestDtoSourceValue$Outbound;
}

/** @internal */
export const AtsUpdateJobRequestDtoValue$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsUpdateJobRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsUpdateJobRequestDtoValue$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoValueOpen,
  z.ZodTypeDef,
  AtsUpdateJobRequestDtoValueOpen
> = z.union([
  z.nativeEnum(AtsUpdateJobRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDtoValue$ {
  /** @deprecated use `AtsUpdateJobRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDtoValue$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobRequestDtoValue$outboundSchema;
}

/** @internal */
export const AtsUpdateJobRequestDtoJobStatus$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoJobStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => AtsUpdateJobRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AtsUpdateJobRequestDtoValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AtsUpdateJobRequestDtoJobStatus$Outbound = {
  source_value?:
    | AtsUpdateJobRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AtsUpdateJobRequestDtoJobStatus$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDtoJobStatus$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobRequestDtoJobStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => AtsUpdateJobRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AtsUpdateJobRequestDtoValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDtoJobStatus$ {
  /** @deprecated use `AtsUpdateJobRequestDtoJobStatus$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDtoJobStatus$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoJobStatus$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobRequestDtoJobStatus$outboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDtoJobStatus$Outbound` instead. */
  export type Outbound = AtsUpdateJobRequestDtoJobStatus$Outbound;
}

/** @internal */
export const AtsUpdateJobRequestDto$inboundSchema: z.ZodType<
  AtsUpdateJobRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.nullable(z.string()).optional(),
  confidential: z.nullable(AtsUpdateJobRequestDtoConfidential$inboundSchema)
    .optional(),
  custom_fields: z.nullable(z.array(CustomFields$inboundSchema)).optional(),
  department_ids: z.nullable(z.array(z.string())).optional(),
  hiring_team: z.nullable(z.array(JobHiringTeam$inboundSchema)).optional(),
  interview_stages: z.nullable(z.array(InterviewStage$inboundSchema))
    .optional(),
  job_status: z.nullable(
    z.lazy(() => AtsUpdateJobRequestDtoJobStatus$inboundSchema),
  ).optional(),
  location_ids: z.nullable(z.array(z.string())).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  status: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_fields": "customFields",
    "department_ids": "departmentIds",
    "hiring_team": "hiringTeam",
    "interview_stages": "interviewStages",
    "job_status": "jobStatus",
    "location_ids": "locationIds",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type AtsUpdateJobRequestDto$Outbound = {
  code?: string | null | undefined;
  confidential?: string | null | undefined;
  custom_fields?: Array<CustomFields$Outbound> | null | undefined;
  department_ids?: Array<string> | null | undefined;
  hiring_team?: Array<JobHiringTeam$Outbound> | null | undefined;
  interview_stages?: Array<InterviewStage$Outbound> | null | undefined;
  job_status?: AtsUpdateJobRequestDtoJobStatus$Outbound | null | undefined;
  location_ids?: Array<string> | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  status?: string | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const AtsUpdateJobRequestDto$outboundSchema: z.ZodType<
  AtsUpdateJobRequestDto$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobRequestDto
> = z.object({
  code: z.nullable(z.string()).optional(),
  confidential: z.nullable(AtsUpdateJobRequestDtoConfidential$outboundSchema)
    .optional(),
  customFields: z.nullable(z.array(CustomFields$outboundSchema)).optional(),
  departmentIds: z.nullable(z.array(z.string())).optional(),
  hiringTeam: z.nullable(z.array(JobHiringTeam$outboundSchema)).optional(),
  interviewStages: z.nullable(z.array(InterviewStage$outboundSchema))
    .optional(),
  jobStatus: z.nullable(
    z.lazy(() => AtsUpdateJobRequestDtoJobStatus$outboundSchema),
  ).optional(),
  locationIds: z.nullable(z.array(z.string())).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  status: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    customFields: "custom_fields",
    departmentIds: "department_ids",
    hiringTeam: "hiring_team",
    interviewStages: "interview_stages",
    jobStatus: "job_status",
    locationIds: "location_ids",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequestDto$ {
  /** @deprecated use `AtsUpdateJobRequestDto$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequestDto$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDto$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobRequestDto$outboundSchema;
  /** @deprecated use `AtsUpdateJobRequestDto$Outbound` instead. */
  export type Outbound = AtsUpdateJobRequestDto$Outbound;
}
