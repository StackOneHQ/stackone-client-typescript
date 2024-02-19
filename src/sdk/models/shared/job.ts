/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InterviewStage, InterviewStage$ } from "./interviewstage";
import { JobHiringTeam, JobHiringTeam$ } from "./jobhiringteam";
import { z } from "zod";

export enum Confidential {
    True = "true",
    False = "false",
}

export type Job4 = {};

/**
 * The source value of the job status.
 */
export type JobSourceValue = Job4 | string | number | boolean;

/**
 * The status of the job.
 */
export enum JobValue {
    Published = "published",
    Draft = "draft",
    Pending = "pending",
    Internal = "internal",
    Archived = "archived",
    Closed = "closed",
    Open = "open",
    UnmappedValue = "unmapped_value",
}

export type JobStatus = {
    /**
     * The source value of the job status.
     */
    sourceValue?: Job4 | string | number | boolean | null | undefined;
    /**
     * The status of the job.
     */
    value?: JobValue | null | undefined;
};

export type Job = {
    code?: string | null | undefined;
    confidential?: Confidential | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    departmentIds?: Array<string> | null | undefined;
    hiringTeam?: Array<JobHiringTeam> | null | undefined;
    id?: string | null | undefined;
    /**
     * Interview stages for the job.
     */
    interviewStages?: Array<InterviewStage> | null | undefined;
    jobStatus?: JobStatus | null | undefined;
    locationIds?: Array<string> | null | undefined;
    status?: string | null | undefined;
    title?: string | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const Confidential$ = z.nativeEnum(Confidential);

/** @internal */
export namespace Job4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Job4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Job4> = z.object({});
}

/** @internal */
export namespace JobSourceValue$ {
    export type Inbound = Job4$.Inbound | string | number | boolean;

    export type Outbound = Job4$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<JobSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => Job4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobSourceValue> = z.union([
        z.lazy(() => Job4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const JobValue$ = z.nativeEnum(JobValue);

/** @internal */
export namespace JobStatus$ {
    export type Inbound = {
        source_value?: Job4$.Inbound | string | number | boolean | null | undefined;
        value?: JobValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<JobStatus, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Job4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: Job4$.Outbound | string | number | boolean | null | undefined;
        value?: JobValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Job4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace Job$ {
    export type Inbound = {
        code?: string | null | undefined;
        confidential?: Confidential | null | undefined;
        created_at?: string | null | undefined;
        department_ids?: Array<string> | null | undefined;
        hiring_team?: Array<JobHiringTeam$.Inbound> | null | undefined;
        id?: string | null | undefined;
        interview_stages?: Array<InterviewStage$.Inbound> | null | undefined;
        job_status?: JobStatus$.Inbound | null | undefined;
        location_ids?: Array<string> | null | undefined;
        status?: string | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Job, z.ZodTypeDef, Inbound> = z
        .object({
            code: z.nullable(z.string()).optional(),
            confidential: z.nullable(Confidential$).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            department_ids: z.nullable(z.array(z.string())).optional(),
            hiring_team: z.nullable(z.array(JobHiringTeam$.inboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            interview_stages: z.nullable(z.array(InterviewStage$.inboundSchema)).optional(),
            job_status: z.nullable(z.lazy(() => JobStatus$.inboundSchema)).optional(),
            location_ids: z.nullable(z.array(z.string())).optional(),
            status: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
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
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.confidential === undefined ? null : { confidential: v.confidential }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.department_ids === undefined ? null : { departmentIds: v.department_ids }),
                ...(v.hiring_team === undefined ? null : { hiringTeam: v.hiring_team }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interview_stages === undefined
                    ? null
                    : { interviewStages: v.interview_stages }),
                ...(v.job_status === undefined ? null : { jobStatus: v.job_status }),
                ...(v.location_ids === undefined ? null : { locationIds: v.location_ids }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        code?: string | null | undefined;
        confidential?: Confidential | null | undefined;
        created_at?: string | null | undefined;
        department_ids?: Array<string> | null | undefined;
        hiring_team?: Array<JobHiringTeam$.Outbound> | null | undefined;
        id?: string | null | undefined;
        interview_stages?: Array<InterviewStage$.Outbound> | null | undefined;
        job_status?: JobStatus$.Outbound | null | undefined;
        location_ids?: Array<string> | null | undefined;
        status?: string | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Job> = z
        .object({
            code: z.nullable(z.string()).optional(),
            confidential: z.nullable(Confidential$).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            departmentIds: z.nullable(z.array(z.string())).optional(),
            hiringTeam: z.nullable(z.array(JobHiringTeam$.outboundSchema)).optional(),
            id: z.nullable(z.string()).optional(),
            interviewStages: z.nullable(z.array(InterviewStage$.outboundSchema)).optional(),
            jobStatus: z.nullable(z.lazy(() => JobStatus$.outboundSchema)).optional(),
            locationIds: z.nullable(z.array(z.string())).optional(),
            status: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.confidential === undefined ? null : { confidential: v.confidential }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.departmentIds === undefined ? null : { department_ids: v.departmentIds }),
                ...(v.hiringTeam === undefined ? null : { hiring_team: v.hiringTeam }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interviewStages === undefined
                    ? null
                    : { interview_stages: v.interviewStages }),
                ...(v.jobStatus === undefined ? null : { job_status: v.jobStatus }),
                ...(v.locationIds === undefined ? null : { location_ids: v.locationIds }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
