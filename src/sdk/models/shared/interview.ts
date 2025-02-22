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

export type InterviewInterviewStage = {
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

export type Interview4 = {};

/**
 * The source value of the interview status.
 */
export type InterviewSourceValue =
  | Interview4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the interview.
 */
export enum InterviewValue {
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
export type InterviewValueOpen = OpenEnum<typeof InterviewValue>;

export type InterviewStatus = {
  /**
   * The source value of the interview status.
   */
  sourceValue?:
    | Interview4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the interview.
   */
  value?: InterviewValueOpen | null | undefined;
};

export type Interview = {
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
  interviewStage?: InterviewInterviewStage | null | undefined;
  interviewStageId?: string | null | undefined;
  interviewStatus?: InterviewStatus | null | undefined;
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
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * Interview updated date
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const InterviewInterviewStage$inboundSchema: z.ZodType<
  InterviewInterviewStage,
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
export type InterviewInterviewStage$Outbound = {
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  order?: number | null | undefined;
  remote_id?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const InterviewInterviewStage$outboundSchema: z.ZodType<
  InterviewInterviewStage$Outbound,
  z.ZodTypeDef,
  InterviewInterviewStage
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
export namespace InterviewInterviewStage$ {
  /** @deprecated use `InterviewInterviewStage$inboundSchema` instead. */
  export const inboundSchema = InterviewInterviewStage$inboundSchema;
  /** @deprecated use `InterviewInterviewStage$outboundSchema` instead. */
  export const outboundSchema = InterviewInterviewStage$outboundSchema;
  /** @deprecated use `InterviewInterviewStage$Outbound` instead. */
  export type Outbound = InterviewInterviewStage$Outbound;
}

export function interviewInterviewStageToJSON(
  interviewInterviewStage: InterviewInterviewStage,
): string {
  return JSON.stringify(
    InterviewInterviewStage$outboundSchema.parse(interviewInterviewStage),
  );
}

export function interviewInterviewStageFromJSON(
  jsonString: string,
): SafeParseResult<InterviewInterviewStage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewInterviewStage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewInterviewStage' from JSON`,
  );
}

/** @internal */
export const Interview4$inboundSchema: z.ZodType<
  Interview4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Interview4$Outbound = {};

/** @internal */
export const Interview4$outboundSchema: z.ZodType<
  Interview4$Outbound,
  z.ZodTypeDef,
  Interview4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interview4$ {
  /** @deprecated use `Interview4$inboundSchema` instead. */
  export const inboundSchema = Interview4$inboundSchema;
  /** @deprecated use `Interview4$outboundSchema` instead. */
  export const outboundSchema = Interview4$outboundSchema;
  /** @deprecated use `Interview4$Outbound` instead. */
  export type Outbound = Interview4$Outbound;
}

export function interview4ToJSON(interview4: Interview4): string {
  return JSON.stringify(Interview4$outboundSchema.parse(interview4));
}

export function interview4FromJSON(
  jsonString: string,
): SafeParseResult<Interview4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Interview4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Interview4' from JSON`,
  );
}

/** @internal */
export const InterviewSourceValue$inboundSchema: z.ZodType<
  InterviewSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Interview4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type InterviewSourceValue$Outbound =
  | Interview4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const InterviewSourceValue$outboundSchema: z.ZodType<
  InterviewSourceValue$Outbound,
  z.ZodTypeDef,
  InterviewSourceValue
> = z.union([
  z.lazy(() => Interview4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewSourceValue$ {
  /** @deprecated use `InterviewSourceValue$inboundSchema` instead. */
  export const inboundSchema = InterviewSourceValue$inboundSchema;
  /** @deprecated use `InterviewSourceValue$outboundSchema` instead. */
  export const outboundSchema = InterviewSourceValue$outboundSchema;
  /** @deprecated use `InterviewSourceValue$Outbound` instead. */
  export type Outbound = InterviewSourceValue$Outbound;
}

export function interviewSourceValueToJSON(
  interviewSourceValue: InterviewSourceValue,
): string {
  return JSON.stringify(
    InterviewSourceValue$outboundSchema.parse(interviewSourceValue),
  );
}

export function interviewSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<InterviewSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewSourceValue' from JSON`,
  );
}

/** @internal */
export const InterviewValue$inboundSchema: z.ZodType<
  InterviewValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(InterviewValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const InterviewValue$outboundSchema: z.ZodType<
  InterviewValueOpen,
  z.ZodTypeDef,
  InterviewValueOpen
> = z.union([
  z.nativeEnum(InterviewValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewValue$ {
  /** @deprecated use `InterviewValue$inboundSchema` instead. */
  export const inboundSchema = InterviewValue$inboundSchema;
  /** @deprecated use `InterviewValue$outboundSchema` instead. */
  export const outboundSchema = InterviewValue$outboundSchema;
}

/** @internal */
export const InterviewStatus$inboundSchema: z.ZodType<
  InterviewStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Interview4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(InterviewValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type InterviewStatus$Outbound = {
  source_value?:
    | Interview4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const InterviewStatus$outboundSchema: z.ZodType<
  InterviewStatus$Outbound,
  z.ZodTypeDef,
  InterviewStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Interview4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(InterviewValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InterviewStatus$ {
  /** @deprecated use `InterviewStatus$inboundSchema` instead. */
  export const inboundSchema = InterviewStatus$inboundSchema;
  /** @deprecated use `InterviewStatus$outboundSchema` instead. */
  export const outboundSchema = InterviewStatus$outboundSchema;
  /** @deprecated use `InterviewStatus$Outbound` instead. */
  export type Outbound = InterviewStatus$Outbound;
}

export function interviewStatusToJSON(
  interviewStatus: InterviewStatus,
): string {
  return JSON.stringify(InterviewStatus$outboundSchema.parse(interviewStatus));
}

export function interviewStatusFromJSON(
  jsonString: string,
): SafeParseResult<InterviewStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InterviewStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InterviewStatus' from JSON`,
  );
}

/** @internal */
export const Interview$inboundSchema: z.ZodType<
  Interview,
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
    z.lazy(() => InterviewInterviewStage$inboundSchema),
  ).optional(),
  interview_stage_id: z.nullable(z.string()).optional(),
  interview_status: z.nullable(z.lazy(() => InterviewStatus$inboundSchema))
    .optional(),
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
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
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
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Interview$Outbound = {
  application_id?: string | null | undefined;
  created_at?: string | null | undefined;
  end_at?: string | null | undefined;
  id?: string | null | undefined;
  interview_parts?: Array<InterviewPart$Outbound> | null | undefined;
  interview_stage?: InterviewInterviewStage$Outbound | null | undefined;
  interview_stage_id?: string | null | undefined;
  interview_status?: InterviewStatus$Outbound | null | undefined;
  interviewer_ids?: Array<string> | null | undefined;
  interviewers?: Array<Interviewer$Outbound> | null | undefined;
  meeting_url?: string | null | undefined;
  remote_application_id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_interview_stage_id?: string | null | undefined;
  remote_interviewer_ids?: Array<string> | null | undefined;
  start_at?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const Interview$outboundSchema: z.ZodType<
  Interview$Outbound,
  z.ZodTypeDef,
  Interview
> = z.object({
  applicationId: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  interviewParts: z.nullable(z.array(InterviewPart$outboundSchema)).optional(),
  interviewStage: z.nullable(
    z.lazy(() => InterviewInterviewStage$outboundSchema),
  ).optional(),
  interviewStageId: z.nullable(z.string()).optional(),
  interviewStatus: z.nullable(z.lazy(() => InterviewStatus$outboundSchema))
    .optional(),
  interviewerIds: z.nullable(z.array(z.string())).optional(),
  interviewers: z.nullable(z.array(Interviewer$outboundSchema)).optional(),
  meetingUrl: z.nullable(z.string()).optional(),
  remoteApplicationId: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteInterviewStageId: z.nullable(z.string()).optional(),
  remoteInterviewerIds: z.nullable(z.array(z.string())).optional(),
  startAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
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
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interview$ {
  /** @deprecated use `Interview$inboundSchema` instead. */
  export const inboundSchema = Interview$inboundSchema;
  /** @deprecated use `Interview$outboundSchema` instead. */
  export const outboundSchema = Interview$outboundSchema;
  /** @deprecated use `Interview$Outbound` instead. */
  export type Outbound = Interview$Outbound;
}

export function interviewToJSON(interview: Interview): string {
  return JSON.stringify(Interview$outboundSchema.parse(interview));
}

export function interviewFromJSON(
  jsonString: string,
): SafeParseResult<Interview, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Interview$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Interview' from JSON`,
  );
}
