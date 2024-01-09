/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Answer, Answer$ } from "./answer";
import { ApplicationAttachment, ApplicationAttachment$ } from "./applicationattachment";
import { ApplicationCandidate, ApplicationCandidate$ } from "./applicationcandidate";
import {
    ApplicationStatusEnumApiModel,
    ApplicationStatusEnumApiModel$,
} from "./applicationstatusenumapimodel";
import { InterviewStage, InterviewStage$ } from "./interviewstage";
import { RejectedReason, RejectedReason$ } from "./rejectedreason";
import { ResultLink, ResultLink$ } from "./resultlink";
import { z } from "zod";

/**
 * Questionnaire associated with the application
 */
export type ApplicationQuestionnaire = {
    answers: Array<Answer>;
    /**
     * Unique identifier of the questionnaire
     */
    id?: string | null | undefined;
};

export type Application = {
    applicationStatus: ApplicationStatusEnumApiModel;
    attachments?: Array<ApplicationAttachment> | null | undefined;
    candidate: ApplicationCandidate;
    /**
     * Unique identifier of the candidate
     */
    candidateId?: string | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier of the application
     */
    id?: string | null | undefined;
    interviewStage?: Array<InterviewStage> | null | undefined;
    /**
     * Unique identifier of the interview stage
     */
    interviewStageId?: string | null | undefined;
    /**
     * Unique identifier of the job
     */
    jobId?: string | null | undefined;
    /**
     * Unique identifier of the location
     */
    locationId?: string | null | undefined;
    /**
     * Unique identifiers of the locations
     */
    locationIds?: Array<string> | null | undefined;
    /**
     * Questionnaire associated with the application
     */
    questionnaire: ApplicationQuestionnaire;
    /**
     * Date of rejection
     */
    rejectedAt?: Date | null | undefined;
    /**
     * Unique identifiers of the rejection reasons
     */
    rejectedReasonIds?: Array<string> | null | undefined;
    rejectedReasons?: Array<RejectedReason> | null | undefined;
    resultLinks?: Array<ResultLink> | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace ApplicationQuestionnaire$ {
    export type Inbound = {
        answers: Array<Answer$.Inbound>;
        id?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<ApplicationQuestionnaire, z.ZodTypeDef, Inbound> = z
        .object({
            answers: z.array(Answer$.inboundSchema),
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                answers: v.answers,
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        answers: Array<Answer$.Outbound>;
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationQuestionnaire> = z
        .object({
            answers: z.array(Answer$.outboundSchema),
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                answers: v.answers,
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace Application$ {
    export type Inbound = {
        application_status: ApplicationStatusEnumApiModel$.Inbound;
        attachments?: Array<ApplicationAttachment$.Inbound> | null | undefined;
        candidate: ApplicationCandidate$.Inbound;
        candidate_id?: string | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        interview_stage?: Array<InterviewStage$.Inbound> | null | undefined;
        interview_stage_id?: string | null | undefined;
        job_id?: string | null | undefined;
        location_id?: string | null | undefined;
        location_ids?: Array<string> | null | undefined;
        questionnaire: ApplicationQuestionnaire$.Inbound;
        rejected_at?: string | null | undefined;
        rejected_reason_ids?: Array<string> | null | undefined;
        rejected_reasons?: Array<RejectedReason$.Inbound> | null | undefined;
        result_links?: Array<ResultLink$.Inbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Application, z.ZodTypeDef, Inbound> = z
        .object({
            application_status: ApplicationStatusEnumApiModel$.inboundSchema,
            attachments: z.nullable(z.array(ApplicationAttachment$.inboundSchema)).optional(),
            candidate: ApplicationCandidate$.inboundSchema,
            candidate_id: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            interview_stage: z.nullable(z.array(InterviewStage$.inboundSchema)).optional(),
            interview_stage_id: z.nullable(z.string()).optional(),
            job_id: z.nullable(z.string()).optional(),
            location_id: z.nullable(z.string()).optional(),
            location_ids: z.nullable(z.array(z.string())).optional(),
            questionnaire: z.lazy(() => ApplicationQuestionnaire$.inboundSchema),
            rejected_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            rejected_reason_ids: z.nullable(z.array(z.string())).optional(),
            rejected_reasons: z.nullable(z.array(RejectedReason$.inboundSchema)).optional(),
            result_links: z.nullable(z.array(ResultLink$.inboundSchema)).optional(),
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
            return {
                applicationStatus: v.application_status,
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                candidate: v.candidate,
                ...(v.candidate_id === undefined ? null : { candidateId: v.candidate_id }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interview_stage === undefined ? null : { interviewStage: v.interview_stage }),
                ...(v.interview_stage_id === undefined
                    ? null
                    : { interviewStageId: v.interview_stage_id }),
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.location_id === undefined ? null : { locationId: v.location_id }),
                ...(v.location_ids === undefined ? null : { locationIds: v.location_ids }),
                questionnaire: v.questionnaire,
                ...(v.rejected_at === undefined ? null : { rejectedAt: v.rejected_at }),
                ...(v.rejected_reason_ids === undefined
                    ? null
                    : { rejectedReasonIds: v.rejected_reason_ids }),
                ...(v.rejected_reasons === undefined
                    ? null
                    : { rejectedReasons: v.rejected_reasons }),
                ...(v.result_links === undefined ? null : { resultLinks: v.result_links }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        application_status: ApplicationStatusEnumApiModel$.Outbound;
        attachments?: Array<ApplicationAttachment$.Outbound> | null | undefined;
        candidate: ApplicationCandidate$.Outbound;
        candidate_id?: string | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        interview_stage?: Array<InterviewStage$.Outbound> | null | undefined;
        interview_stage_id?: string | null | undefined;
        job_id?: string | null | undefined;
        location_id?: string | null | undefined;
        location_ids?: Array<string> | null | undefined;
        questionnaire: ApplicationQuestionnaire$.Outbound;
        rejected_at?: string | null | undefined;
        rejected_reason_ids?: Array<string> | null | undefined;
        rejected_reasons?: Array<RejectedReason$.Outbound> | null | undefined;
        result_links?: Array<ResultLink$.Outbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Application> = z
        .object({
            applicationStatus: ApplicationStatusEnumApiModel$.outboundSchema,
            attachments: z.nullable(z.array(ApplicationAttachment$.outboundSchema)).optional(),
            candidate: ApplicationCandidate$.outboundSchema,
            candidateId: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            interviewStage: z.nullable(z.array(InterviewStage$.outboundSchema)).optional(),
            interviewStageId: z.nullable(z.string()).optional(),
            jobId: z.nullable(z.string()).optional(),
            locationId: z.nullable(z.string()).optional(),
            locationIds: z.nullable(z.array(z.string())).optional(),
            questionnaire: z.lazy(() => ApplicationQuestionnaire$.outboundSchema),
            rejectedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            rejectedReasonIds: z.nullable(z.array(z.string())).optional(),
            rejectedReasons: z.nullable(z.array(RejectedReason$.outboundSchema)).optional(),
            resultLinks: z.nullable(z.array(ResultLink$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                application_status: v.applicationStatus,
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                candidate: v.candidate,
                ...(v.candidateId === undefined ? null : { candidate_id: v.candidateId }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interviewStage === undefined ? null : { interview_stage: v.interviewStage }),
                ...(v.interviewStageId === undefined
                    ? null
                    : { interview_stage_id: v.interviewStageId }),
                ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                ...(v.locationId === undefined ? null : { location_id: v.locationId }),
                ...(v.locationIds === undefined ? null : { location_ids: v.locationIds }),
                questionnaire: v.questionnaire,
                ...(v.rejectedAt === undefined ? null : { rejected_at: v.rejectedAt }),
                ...(v.rejectedReasonIds === undefined
                    ? null
                    : { rejected_reason_ids: v.rejectedReasonIds }),
                ...(v.rejectedReasons === undefined
                    ? null
                    : { rejected_reasons: v.rejectedReasons }),
                ...(v.resultLinks === undefined ? null : { result_links: v.resultLinks }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
