/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types";
import { Interviewer, Interviewer$ } from "./interviewer";
import { InterviewPart, InterviewPart$ } from "./interviewpart";
import * as z from "zod";

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
     * Interview Stage updated date
     */
    updatedAt?: Date | null | undefined;
};

export type Interview4 = {};

/**
 * The source value of the interview status.
 */
export type InterviewSourceValue = Interview4 | string | number | boolean;

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
    sourceValue?: Interview4 | string | number | boolean | null | undefined;
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
     * Interview updated date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace InterviewInterviewStage$ {
    export const inboundSchema: z.ZodType<InterviewInterviewStage, z.ZodTypeDef, unknown> = z
        .object({
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            order: z.nullable(z.number()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                created_at: "createdAt",
                remote_id: "remoteId",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        order?: number | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewInterviewStage> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            order: z.nullable(z.number()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                createdAt: "created_at",
                remoteId: "remote_id",
                updatedAt: "updated_at",
            });
        });
}

/** @internal */
export namespace Interview4$ {
    export const inboundSchema: z.ZodType<Interview4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Interview4> = z.object({});
}

/** @internal */
export namespace InterviewSourceValue$ {
    export const inboundSchema: z.ZodType<InterviewSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Interview4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = Interview4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewSourceValue> = z.union([
        z.lazy(() => Interview4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace InterviewValue$ {
    export const inboundSchema: z.ZodType<InterviewValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(InterviewValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema = z.union([
        z.nativeEnum(InterviewValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace InterviewStatus$ {
    export const inboundSchema: z.ZodType<InterviewStatus, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Interview4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(InterviewValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?: Interview4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Interview4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(InterviewValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace Interview$ {
    export const inboundSchema: z.ZodType<Interview, z.ZodTypeDef, unknown> = z
        .object({
            application_id: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            end_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            interview_parts: z.nullable(z.array(InterviewPart$.inboundSchema)).optional(),
            interview_stage: z
                .nullable(z.lazy(() => InterviewInterviewStage$.inboundSchema))
                .optional(),
            interview_stage_id: z.nullable(z.string()).optional(),
            interview_status: z.nullable(z.lazy(() => InterviewStatus$.inboundSchema)).optional(),
            interviewer_ids: z.nullable(z.array(z.string())).optional(),
            interviewers: z.nullable(z.array(Interviewer$.inboundSchema)).optional(),
            meeting_url: z.nullable(z.string()).optional(),
            remote_application_id: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            remote_interview_stage_id: z.nullable(z.string()).optional(),
            remote_interviewer_ids: z.nullable(z.array(z.string())).optional(),
            start_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                application_id: "applicationId",
                created_at: "createdAt",
                end_at: "endAt",
                interview_parts: "interviewParts",
                interview_stage: "interviewStage",
                interview_stage_id: "interviewStageId",
                interview_status: "interviewStatus",
                interviewer_ids: "interviewerIds",
                meeting_url: "meetingUrl",
                remote_application_id: "remoteApplicationId",
                remote_id: "remoteId",
                remote_interview_stage_id: "remoteInterviewStageId",
                remote_interviewer_ids: "remoteInterviewerIds",
                start_at: "startAt",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        application_id?: string | null | undefined;
        created_at?: string | null | undefined;
        end_at?: string | null | undefined;
        id?: string | null | undefined;
        interview_parts?: Array<InterviewPart$.Outbound> | null | undefined;
        interview_stage?: InterviewInterviewStage$.Outbound | null | undefined;
        interview_stage_id?: string | null | undefined;
        interview_status?: InterviewStatus$.Outbound | null | undefined;
        interviewer_ids?: Array<string> | null | undefined;
        interviewers?: Array<Interviewer$.Outbound> | null | undefined;
        meeting_url?: string | null | undefined;
        remote_application_id?: string | null | undefined;
        remote_id?: string | null | undefined;
        remote_interview_stage_id?: string | null | undefined;
        remote_interviewer_ids?: Array<string> | null | undefined;
        start_at?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Interview> = z
        .object({
            applicationId: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            endAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            interviewParts: z.nullable(z.array(InterviewPart$.outboundSchema)).optional(),
            interviewStage: z
                .nullable(z.lazy(() => InterviewInterviewStage$.outboundSchema))
                .optional(),
            interviewStageId: z.nullable(z.string()).optional(),
            interviewStatus: z.nullable(z.lazy(() => InterviewStatus$.outboundSchema)).optional(),
            interviewerIds: z.nullable(z.array(z.string())).optional(),
            interviewers: z.nullable(z.array(Interviewer$.outboundSchema)).optional(),
            meetingUrl: z.nullable(z.string()).optional(),
            remoteApplicationId: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            remoteInterviewStageId: z.nullable(z.string()).optional(),
            remoteInterviewerIds: z.nullable(z.array(z.string())).optional(),
            startAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
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
}
