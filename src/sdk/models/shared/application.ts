/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ApplicationAttachment, ApplicationAttachment$ } from "./applicationattachment";
import { AtsDocumentApiModel, AtsDocumentApiModel$ } from "./atsdocumentapimodel";
import { CandidateEmail, CandidateEmail$ } from "./candidateemail";
import { PhoneNumber, PhoneNumber$ } from "./phonenumber";
import { Questionnaire, Questionnaire$ } from "./questionnaire";
import { RejectedReason, RejectedReason$ } from "./rejectedreason";
import { ResultLink, ResultLink$ } from "./resultlink";
import { SocialLink, SocialLink$ } from "./sociallink";
import * as z from "zod";

export type Application4 = {};

/**
 * The source value of the application status.
 */
export type ApplicationSourceValue = Application4 | string | number | boolean;

/**
 * The status of the application.
 */
export enum ApplicationValue {
    Active = "active",
    Assessment = "assessment",
    BackgroundCheck = "background_check",
    Converted = "converted",
    DeclinedByCandidate = "declined_by_candidate",
    Hired = "hired",
    Interview = "interview",
    Lead = "lead",
    Offer = "offer",
    ReferenceCheck = "reference_check",
    Rejected = "rejected",
    Review = "review",
    Screen = "screen",
    New = "new",
    Onboarding = "onboarding",
    Created = "created",
    Accepted = "accepted",
    ShortList = "short_list",
    Approved = "approved",
    UnmappedValue = "unmapped_value",
}

export type ApplicationStatus = {
    /**
     * The source value of the application status.
     */
    sourceValue?: Application4 | string | number | boolean | null | undefined;
    /**
     * The status of the application.
     */
    value?: ApplicationValue | null | undefined;
};

export type ApplicationCandidate = {
    /**
     * Candidate company
     */
    company?: string | null | undefined;
    /**
     * Email of the candidate
     */
    email?: string | null | undefined;
    /**
     * List of candidate emails
     */
    emails?: Array<CandidateEmail> | null | undefined;
    /**
     * First name of the candidate
     */
    firstName?: string | null | undefined;
    /**
     * Last name of the candidate
     */
    lastName?: string | null | undefined;
    /**
     * Candidate name
     */
    name?: string | null | undefined;
    /**
     * List of candidate phone numbers including the type of the number when available
     */
    phoneNumbers?: Array<PhoneNumber> | null | undefined;
    /**
     * List of candidate social links
     */
    socialLinks?: Array<SocialLink> | null | undefined;
    /**
     * Candidate title
     */
    title?: string | null | undefined;
};

export type ApplicationInterviewStage = {
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

export type Source = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The source of the application
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

export type Application = {
    applicationStatus?: ApplicationStatus | null | undefined;
    /**
     * Use `documents` expand instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    attachments?: Array<ApplicationAttachment> | null | undefined;
    candidate?: ApplicationCandidate | null | undefined;
    /**
     * Unique identifier of the candidate
     */
    candidateId?: string | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    /**
     * The documents attached to this application (eg. resume, cover letter etc.)
     */
    documents?: Array<AtsDocumentApiModel> | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    interviewStage?: ApplicationInterviewStage | null | undefined;
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
     * Questionnaires associated with the application
     */
    questionnaires?: Array<Questionnaire> | null | undefined;
    /**
     * Date of rejection
     */
    rejectedAt?: Date | null | undefined;
    /**
     * Unique identifiers of the rejection reasons
     */
    rejectedReasonIds?: Array<string> | null | undefined;
    rejectedReasons?: Array<RejectedReason> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    resultLinks?: Array<ResultLink> | null | undefined;
    source?: Source | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Application4$ {
    export const inboundSchema: z.ZodType<Application4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Application4> = z.object({});
}

/** @internal */
export namespace ApplicationSourceValue$ {
    export const inboundSchema: z.ZodType<ApplicationSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Application4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = Application4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationSourceValue> =
        z.union([z.lazy(() => Application4$.outboundSchema), z.string(), z.number(), z.boolean()]);
}

/** @internal */
export namespace ApplicationValue$ {
    export const inboundSchema = z.nativeEnum(ApplicationValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ApplicationStatus$ {
    export const inboundSchema: z.ZodType<ApplicationStatus, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Application4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(ApplicationValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: Application4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Application4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(ApplicationValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace ApplicationCandidate$ {
    export const inboundSchema: z.ZodType<ApplicationCandidate, z.ZodTypeDef, unknown> = z
        .object({
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.inboundSchema)).optional(),
            first_name: z.nullable(z.string()).optional(),
            last_name: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(PhoneNumber$.inboundSchema)).optional(),
            social_links: z.nullable(z.array(SocialLink$.inboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone_numbers === undefined ? null : { phoneNumbers: v.phone_numbers }),
                ...(v.social_links === undefined ? null : { socialLinks: v.social_links }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        company?: string | null | undefined;
        email?: string | null | undefined;
        emails?: Array<CandidateEmail$.Outbound> | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        phone_numbers?: Array<PhoneNumber$.Outbound> | null | undefined;
        social_links?: Array<SocialLink$.Outbound> | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationCandidate> = z
        .object({
            company: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.outboundSchema)).optional(),
            firstName: z.nullable(z.string()).optional(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(PhoneNumber$.outboundSchema)).optional(),
            socialLinks: z.nullable(z.array(SocialLink$.outboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phoneNumbers === undefined ? null : { phone_numbers: v.phoneNumbers }),
                ...(v.socialLinks === undefined ? null : { social_links: v.socialLinks }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}

/** @internal */
export namespace ApplicationInterviewStage$ {
    export const inboundSchema: z.ZodType<ApplicationInterviewStage, z.ZodTypeDef, unknown> = z
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
            return {
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.order === undefined ? null : { order: v.order }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        order?: number | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApplicationInterviewStage> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            order: z.nullable(z.number()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.order === undefined ? null : { order: v.order }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace Source$ {
    export const inboundSchema: z.ZodType<Source, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Source> = z
        .object({
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
            };
        });
}

/** @internal */
export namespace Application$ {
    export const inboundSchema: z.ZodType<Application, z.ZodTypeDef, unknown> = z
        .object({
            application_status: z
                .nullable(z.lazy(() => ApplicationStatus$.inboundSchema))
                .optional(),
            attachments: z.nullable(z.array(ApplicationAttachment$.inboundSchema)).optional(),
            candidate: z.nullable(z.lazy(() => ApplicationCandidate$.inboundSchema)).optional(),
            candidate_id: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            documents: z.nullable(z.array(AtsDocumentApiModel$.inboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            interview_stage: z
                .nullable(z.lazy(() => ApplicationInterviewStage$.inboundSchema))
                .optional(),
            interview_stage_id: z.nullable(z.string()).optional(),
            job_id: z.nullable(z.string()).optional(),
            location_id: z.nullable(z.string()).optional(),
            location_ids: z.nullable(z.array(z.string())).optional(),
            questionnaires: z.nullable(z.array(Questionnaire$.inboundSchema)).optional(),
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
            remote_id: z.nullable(z.string()).optional(),
            result_links: z.nullable(z.array(ResultLink$.inboundSchema)).optional(),
            source: z.nullable(z.lazy(() => Source$.inboundSchema)).optional(),
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
                ...(v.application_status === undefined
                    ? null
                    : { applicationStatus: v.application_status }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.candidate === undefined ? null : { candidate: v.candidate }),
                ...(v.candidate_id === undefined ? null : { candidateId: v.candidate_id }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.documents === undefined ? null : { documents: v.documents }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interview_stage === undefined ? null : { interviewStage: v.interview_stage }),
                ...(v.interview_stage_id === undefined
                    ? null
                    : { interviewStageId: v.interview_stage_id }),
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.location_id === undefined ? null : { locationId: v.location_id }),
                ...(v.location_ids === undefined ? null : { locationIds: v.location_ids }),
                ...(v.questionnaires === undefined ? null : { questionnaires: v.questionnaires }),
                ...(v.rejected_at === undefined ? null : { rejectedAt: v.rejected_at }),
                ...(v.rejected_reason_ids === undefined
                    ? null
                    : { rejectedReasonIds: v.rejected_reason_ids }),
                ...(v.rejected_reasons === undefined
                    ? null
                    : { rejectedReasons: v.rejected_reasons }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.result_links === undefined ? null : { resultLinks: v.result_links }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        application_status?: ApplicationStatus$.Outbound | null | undefined;
        attachments?: Array<ApplicationAttachment$.Outbound> | null | undefined;
        candidate?: ApplicationCandidate$.Outbound | null | undefined;
        candidate_id?: string | null | undefined;
        created_at?: string | null | undefined;
        documents?: Array<AtsDocumentApiModel$.Outbound> | null | undefined;
        id?: string | null | undefined;
        interview_stage?: ApplicationInterviewStage$.Outbound | null | undefined;
        interview_stage_id?: string | null | undefined;
        job_id?: string | null | undefined;
        location_id?: string | null | undefined;
        location_ids?: Array<string> | null | undefined;
        questionnaires?: Array<Questionnaire$.Outbound> | null | undefined;
        rejected_at?: string | null | undefined;
        rejected_reason_ids?: Array<string> | null | undefined;
        rejected_reasons?: Array<RejectedReason$.Outbound> | null | undefined;
        remote_id?: string | null | undefined;
        result_links?: Array<ResultLink$.Outbound> | null | undefined;
        source?: Source$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Application> = z
        .object({
            applicationStatus: z
                .nullable(z.lazy(() => ApplicationStatus$.outboundSchema))
                .optional(),
            attachments: z.nullable(z.array(ApplicationAttachment$.outboundSchema)).optional(),
            candidate: z.nullable(z.lazy(() => ApplicationCandidate$.outboundSchema)).optional(),
            candidateId: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            documents: z.nullable(z.array(AtsDocumentApiModel$.outboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            interviewStage: z
                .nullable(z.lazy(() => ApplicationInterviewStage$.outboundSchema))
                .optional(),
            interviewStageId: z.nullable(z.string()).optional(),
            jobId: z.nullable(z.string()).optional(),
            locationId: z.nullable(z.string()).optional(),
            locationIds: z.nullable(z.array(z.string())).optional(),
            questionnaires: z.nullable(z.array(Questionnaire$.outboundSchema)).optional(),
            rejectedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            rejectedReasonIds: z.nullable(z.array(z.string())).optional(),
            rejectedReasons: z.nullable(z.array(RejectedReason$.outboundSchema)).optional(),
            remoteId: z.nullable(z.string()).optional(),
            resultLinks: z.nullable(z.array(ResultLink$.outboundSchema)).optional(),
            source: z.nullable(z.lazy(() => Source$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.applicationStatus === undefined
                    ? null
                    : { application_status: v.applicationStatus }),
                ...(v.attachments === undefined ? null : { attachments: v.attachments }),
                ...(v.candidate === undefined ? null : { candidate: v.candidate }),
                ...(v.candidateId === undefined ? null : { candidate_id: v.candidateId }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.documents === undefined ? null : { documents: v.documents }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interviewStage === undefined ? null : { interview_stage: v.interviewStage }),
                ...(v.interviewStageId === undefined
                    ? null
                    : { interview_stage_id: v.interviewStageId }),
                ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                ...(v.locationId === undefined ? null : { location_id: v.locationId }),
                ...(v.locationIds === undefined ? null : { location_ids: v.locationIds }),
                ...(v.questionnaires === undefined ? null : { questionnaires: v.questionnaires }),
                ...(v.rejectedAt === undefined ? null : { rejected_at: v.rejectedAt }),
                ...(v.rejectedReasonIds === undefined
                    ? null
                    : { rejected_reason_ids: v.rejectedReasonIds }),
                ...(v.rejectedReasons === undefined
                    ? null
                    : { rejected_reasons: v.rejectedReasons }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.resultLinks === undefined ? null : { result_links: v.resultLinks }),
                ...(v.source === undefined ? null : { source: v.source }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
