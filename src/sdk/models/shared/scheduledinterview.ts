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
  Interviewer,
  Interviewer$inboundSchema,
  Interviewer$Outbound,
  Interviewer$outboundSchema,
} from "./interviewer.js";
import {
  InterviewPart,
  InterviewPart$inboundSchema,
  InterviewPart$Outbound,
  InterviewPart$outboundSchema,
} from "./interviewpart.js";

export type ScheduledInterviewInterviewStage = {
  /**
   * Interview Stage created date
   */
  createdAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
  order?: number | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * Interview Stage updated date
   */
  updatedAt?: Date | null | undefined;
};

export type ScheduledInterview4 = {};

/**
 * The source value of the interview status.
 */
export type ScheduledInterviewSourceValue =
  | ScheduledInterview4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the interview.
 */
export enum ScheduledInterviewValue {
  Unscheduled = "unscheduled",
  Scheduled = "scheduled",
  Completed = "completed",
  Cancelled = "cancelled",
  PendingFeedback = "pending_feedback",
  UnmappedValue = "unmapped_value",
}
/**
 * The status of the interview.
 */
export type ScheduledInterviewValueOpen = OpenEnum<
  typeof ScheduledInterviewValue
>;

export type ScheduledInterviewInterviewStatus = {
  /**
   * The source value of the interview status.
   */
  sourceValue?:
    | ScheduledInterview4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the interview.
   */
  value?: ScheduledInterviewValueOpen | null | undefined;
};

export type ScheduledInterview = {
  applicationId?: string | null | undefined;
  /**
   * Interview created date
   */
  createdAt?: Date | null | undefined;
  /**
   * Interview end date
   */
  endAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  interviewParts?: Array<InterviewPart> | null | undefined;
  interviewStage?: ScheduledInterviewInterviewStage | null | undefined;
  interviewStageId?: string | null | undefined;
  interviewStatus?: ScheduledInterviewInterviewStatus | null | undefined;
  interviewerIds?: Array<string> | null | undefined;
  interviewers?: Array<Interviewer> | null | undefined;
  meetingUrl?: string | null | undefined;
  /**
   * Provider's unique identifier of the application
   */
  remoteApplicationId?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Provider's unique identifier of the interview stage
   */
  remoteInterviewStageId?: string | null | undefined;
  /**
   * Provider's unique identifiers of the interviewers
   */
  remoteInterviewerIds?: Array<string> | null | undefined;
  /**
   * Interview start date
   */
  startAt?: Date | null | undefined;
  /**
   * Interview updated date
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const ScheduledInterviewInterviewStage$inboundSchema: z.ZodType<
  ScheduledInterviewInterviewStage,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "remote_id": "remoteId",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ScheduledInterviewInterviewStage$Outbound = {
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  order?: number | null | undefined;
  remote_id?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const ScheduledInterviewInterviewStage$outboundSchema: z.ZodType<
  ScheduledInterviewInterviewStage$Outbound,
  z.ZodTypeDef,
  ScheduledInterviewInterviewStage
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  order: z.nullable(z.number()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    remoteId: "remote_id",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterviewInterviewStage$ {
  /** @deprecated use `ScheduledInterviewInterviewStage$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterviewInterviewStage$inboundSchema;
  /** @deprecated use `ScheduledInterviewInterviewStage$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterviewInterviewStage$outboundSchema;
  /** @deprecated use `ScheduledInterviewInterviewStage$Outbound` instead. */
  export type Outbound = ScheduledInterviewInterviewStage$Outbound;
}

/** @internal */
export const ScheduledInterview4$inboundSchema: z.ZodType<
  ScheduledInterview4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ScheduledInterview4$Outbound = {};

/** @internal */
export const ScheduledInterview4$outboundSchema: z.ZodType<
  ScheduledInterview4$Outbound,
  z.ZodTypeDef,
  ScheduledInterview4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterview4$ {
  /** @deprecated use `ScheduledInterview4$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterview4$inboundSchema;
  /** @deprecated use `ScheduledInterview4$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterview4$outboundSchema;
  /** @deprecated use `ScheduledInterview4$Outbound` instead. */
  export type Outbound = ScheduledInterview4$Outbound;
}

/** @internal */
export const ScheduledInterviewSourceValue$inboundSchema: z.ZodType<
  ScheduledInterviewSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ScheduledInterview4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type ScheduledInterviewSourceValue$Outbound =
  | ScheduledInterview4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const ScheduledInterviewSourceValue$outboundSchema: z.ZodType<
  ScheduledInterviewSourceValue$Outbound,
  z.ZodTypeDef,
  ScheduledInterviewSourceValue
> = z.union([
  z.lazy(() => ScheduledInterview4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterviewSourceValue$ {
  /** @deprecated use `ScheduledInterviewSourceValue$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterviewSourceValue$inboundSchema;
  /** @deprecated use `ScheduledInterviewSourceValue$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterviewSourceValue$outboundSchema;
  /** @deprecated use `ScheduledInterviewSourceValue$Outbound` instead. */
  export type Outbound = ScheduledInterviewSourceValue$Outbound;
}

/** @internal */
export const ScheduledInterviewValue$inboundSchema: z.ZodType<
  ScheduledInterviewValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ScheduledInterviewValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ScheduledInterviewValue$outboundSchema: z.ZodType<
  ScheduledInterviewValueOpen,
  z.ZodTypeDef,
  ScheduledInterviewValueOpen
> = z.union([
  z.nativeEnum(ScheduledInterviewValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterviewValue$ {
  /** @deprecated use `ScheduledInterviewValue$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterviewValue$inboundSchema;
  /** @deprecated use `ScheduledInterviewValue$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterviewValue$outboundSchema;
}

/** @internal */
export const ScheduledInterviewInterviewStatus$inboundSchema: z.ZodType<
  ScheduledInterviewInterviewStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => ScheduledInterview4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ScheduledInterviewValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ScheduledInterviewInterviewStatus$Outbound = {
  source_value?:
    | ScheduledInterview4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ScheduledInterviewInterviewStatus$outboundSchema: z.ZodType<
  ScheduledInterviewInterviewStatus$Outbound,
  z.ZodTypeDef,
  ScheduledInterviewInterviewStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => ScheduledInterview4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ScheduledInterviewValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterviewInterviewStatus$ {
  /** @deprecated use `ScheduledInterviewInterviewStatus$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterviewInterviewStatus$inboundSchema;
  /** @deprecated use `ScheduledInterviewInterviewStatus$outboundSchema` instead. */
  export const outboundSchema =
    ScheduledInterviewInterviewStatus$outboundSchema;
  /** @deprecated use `ScheduledInterviewInterviewStatus$Outbound` instead. */
  export type Outbound = ScheduledInterviewInterviewStatus$Outbound;
}

/** @internal */
export const ScheduledInterview$inboundSchema: z.ZodType<
  ScheduledInterview,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.nullable(z.string()).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  end_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  interview_parts: z.nullable(z.array(InterviewPart$inboundSchema)).optional(),
  interview_stage: z.nullable(
    z.lazy(() => ScheduledInterviewInterviewStage$inboundSchema),
  ).optional(),
  interview_stage_id: z.nullable(z.string()).optional(),
  interview_status: z.nullable(
    z.lazy(() => ScheduledInterviewInterviewStatus$inboundSchema),
  ).optional(),
  interviewer_ids: z.nullable(z.array(z.string())).optional(),
  interviewers: z.nullable(z.array(Interviewer$inboundSchema)).optional(),
  meeting_url: z.nullable(z.string()).optional(),
  remote_application_id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_interview_stage_id: z.nullable(z.string()).optional(),
  remote_interviewer_ids: z.nullable(z.array(z.string())).optional(),
  start_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "created_at": "createdAt",
    "end_at": "endAt",
    "interview_parts": "interviewParts",
    "interview_stage": "interviewStage",
    "interview_stage_id": "interviewStageId",
    "interview_status": "interviewStatus",
    "interviewer_ids": "interviewerIds",
    "meeting_url": "meetingUrl",
    "remote_application_id": "remoteApplicationId",
    "remote_id": "remoteId",
    "remote_interview_stage_id": "remoteInterviewStageId",
    "remote_interviewer_ids": "remoteInterviewerIds",
    "start_at": "startAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ScheduledInterview$Outbound = {
  application_id?: string | null | undefined;
  created_at?: string | null | undefined;
  end_at?: string | null | undefined;
  id?: string | null | undefined;
  interview_parts?: Array<InterviewPart$Outbound> | null | undefined;
  interview_stage?:
    | ScheduledInterviewInterviewStage$Outbound
    | null
    | undefined;
  interview_stage_id?: string | null | undefined;
  interview_status?:
    | ScheduledInterviewInterviewStatus$Outbound
    | null
    | undefined;
  interviewer_ids?: Array<string> | null | undefined;
  interviewers?: Array<Interviewer$Outbound> | null | undefined;
  meeting_url?: string | null | undefined;
  remote_application_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_interview_stage_id?: string | null | undefined;
  remote_interviewer_ids?: Array<string> | null | undefined;
  start_at?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const ScheduledInterview$outboundSchema: z.ZodType<
  ScheduledInterview$Outbound,
  z.ZodTypeDef,
  ScheduledInterview
> = z.object({
  applicationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  interviewParts: z.nullable(z.array(InterviewPart$outboundSchema)).optional(),
  interviewStage: z.nullable(
    z.lazy(() => ScheduledInterviewInterviewStage$outboundSchema),
  ).optional(),
  interviewStageId: z.nullable(z.string()).optional(),
  interviewStatus: z.nullable(
    z.lazy(() => ScheduledInterviewInterviewStatus$outboundSchema),
  ).optional(),
  interviewerIds: z.nullable(z.array(z.string())).optional(),
  interviewers: z.nullable(z.array(Interviewer$outboundSchema)).optional(),
  meetingUrl: z.nullable(z.string()).optional(),
  remoteApplicationId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteInterviewStageId: z.nullable(z.string()).optional(),
  remoteInterviewerIds: z.nullable(z.array(z.string())).optional(),
  startAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    createdAt: "created_at",
    endAt: "end_at",
    interviewParts: "interview_parts",
    interviewStage: "interview_stage",
    interviewStageId: "interview_stage_id",
    interviewStatus: "interview_status",
    interviewerIds: "interviewer_ids",
    meetingUrl: "meeting_url",
    remoteApplicationId: "remote_application_id",
    remoteId: "remote_id",
    remoteInterviewStageId: "remote_interview_stage_id",
    remoteInterviewerIds: "remote_interviewer_ids",
    startAt: "start_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduledInterview$ {
  /** @deprecated use `ScheduledInterview$inboundSchema` instead. */
  export const inboundSchema = ScheduledInterview$inboundSchema;
  /** @deprecated use `ScheduledInterview$outboundSchema` instead. */
  export const outboundSchema = ScheduledInterview$outboundSchema;
  /** @deprecated use `ScheduledInterview$Outbound` instead. */
  export type Outbound = ScheduledInterview$Outbound;
}
