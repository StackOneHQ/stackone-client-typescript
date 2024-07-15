/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
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
import * as z from "zod";

/**
 * Confidential status of the job
 */
export enum JobConfidential {
    True = "true",
    False = "false",
}
/**
 * Confidential status of the job
 */
export type JobConfidentialOpen = OpenEnum<typeof JobConfidential>;

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
    Deleted = "deleted",
    UnmappedValue = "unmapped_value",
}
/**
 * The status of the job.
 */
export type JobValueOpen = OpenEnum<typeof JobValue>;

/**
 * Status of the job
 */
export type JobStatus = {
    /**
     * The source value of the job status.
     */
    sourceValue?: Job4 | string | number | boolean | null | undefined;
    /**
     * The status of the job.
     */
    value?: JobValueOpen | null | undefined;
};

export type Job = {
    /**
     * Code of the job
     */
    code?: string | null | undefined;
    /**
     * Confidential status of the job
     */
    confidential?: JobConfidentialOpen | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    /**
     * Department ids of the job
     */
    departmentIds?: Array<string> | null | undefined;
    /**
     * Hiring team for the job.
     */
    hiringTeam?: Array<JobHiringTeam> | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Interview stages for the job.
     */
    interviewStages?: Array<InterviewStage> | null | undefined;
    /**
     * Status of the job
     */
    jobStatus?: JobStatus | null | undefined;
    /**
     * Location ids of the job
     */
    locationIds?: Array<string> | null | undefined;
    /**
     * Provider's department ids of the job
     */
    remoteDepartmentIds?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's location ids of the job
     */
    remoteLocationIds?: string | null | undefined;
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
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const JobConfidential$inboundSchema: z.ZodType<JobConfidentialOpen, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(JobConfidential), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const JobConfidential$outboundSchema: z.ZodType<
    JobConfidentialOpen,
    z.ZodTypeDef,
    JobConfidentialOpen
> = z.union([z.nativeEnum(JobConfidential), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobConfidential$ {
    /** @deprecated use `JobConfidential$inboundSchema` instead. */
    export const inboundSchema = JobConfidential$inboundSchema;
    /** @deprecated use `JobConfidential$outboundSchema` instead. */
    export const outboundSchema = JobConfidential$outboundSchema;
}

/** @internal */
export const Job4$inboundSchema: z.ZodType<Job4, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Job4$Outbound = {};

/** @internal */
export const Job4$outboundSchema: z.ZodType<Job4$Outbound, z.ZodTypeDef, Job4> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Job4$ {
    /** @deprecated use `Job4$inboundSchema` instead. */
    export const inboundSchema = Job4$inboundSchema;
    /** @deprecated use `Job4$outboundSchema` instead. */
    export const outboundSchema = Job4$outboundSchema;
    /** @deprecated use `Job4$Outbound` instead. */
    export type Outbound = Job4$Outbound;
}

/** @internal */
export const JobSourceValue$inboundSchema: z.ZodType<JobSourceValue, z.ZodTypeDef, unknown> =
    z.union([z.lazy(() => Job4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type JobSourceValue$Outbound = Job4$Outbound | string | number | boolean;

/** @internal */
export const JobSourceValue$outboundSchema: z.ZodType<
    JobSourceValue$Outbound,
    z.ZodTypeDef,
    JobSourceValue
> = z.union([z.lazy(() => Job4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobSourceValue$ {
    /** @deprecated use `JobSourceValue$inboundSchema` instead. */
    export const inboundSchema = JobSourceValue$inboundSchema;
    /** @deprecated use `JobSourceValue$outboundSchema` instead. */
    export const outboundSchema = JobSourceValue$outboundSchema;
    /** @deprecated use `JobSourceValue$Outbound` instead. */
    export type Outbound = JobSourceValue$Outbound;
}

/** @internal */
export const JobValue$inboundSchema: z.ZodType<JobValueOpen, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(JobValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const JobValue$outboundSchema: z.ZodType<JobValueOpen, z.ZodTypeDef, JobValueOpen> = z.union(
    [z.nativeEnum(JobValue), z.string().and(z.custom<Unrecognized<string>>())]
);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobValue$ {
    /** @deprecated use `JobValue$inboundSchema` instead. */
    export const inboundSchema = JobValue$inboundSchema;
    /** @deprecated use `JobValue$outboundSchema` instead. */
    export const outboundSchema = JobValue$outboundSchema;
}

/** @internal */
export const JobStatus$inboundSchema: z.ZodType<JobStatus, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([z.lazy(() => Job4$inboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(JobValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type JobStatus$Outbound = {
    source_value?: Job4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const JobStatus$outboundSchema: z.ZodType<JobStatus$Outbound, z.ZodTypeDef, JobStatus> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([z.lazy(() => Job4$outboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(JobValue$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceValue: "source_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobStatus$ {
    /** @deprecated use `JobStatus$inboundSchema` instead. */
    export const inboundSchema = JobStatus$inboundSchema;
    /** @deprecated use `JobStatus$outboundSchema` instead. */
    export const outboundSchema = JobStatus$outboundSchema;
    /** @deprecated use `JobStatus$Outbound` instead. */
    export type Outbound = JobStatus$Outbound;
}

/** @internal */
export const Job$inboundSchema: z.ZodType<Job, z.ZodTypeDef, unknown> = z
    .object({
        code: z.nullable(z.string()).optional(),
        confidential: z.nullable(JobConfidential$inboundSchema).optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        department_ids: z.nullable(z.array(z.string())).optional(),
        hiring_team: z.nullable(z.array(JobHiringTeam$inboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        interview_stages: z.nullable(z.array(InterviewStage$inboundSchema)).optional(),
        job_status: z.nullable(z.lazy(() => JobStatus$inboundSchema)).optional(),
        location_ids: z.nullable(z.array(z.string())).optional(),
        remote_department_ids: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_location_ids: z.nullable(z.string()).optional(),
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
        return remap$(v, {
            created_at: "createdAt",
            department_ids: "departmentIds",
            hiring_team: "hiringTeam",
            interview_stages: "interviewStages",
            job_status: "jobStatus",
            location_ids: "locationIds",
            remote_department_ids: "remoteDepartmentIds",
            remote_id: "remoteId",
            remote_location_ids: "remoteLocationIds",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type Job$Outbound = {
    code?: string | null | undefined;
    confidential?: string | null | undefined;
    created_at?: string | null | undefined;
    department_ids?: Array<string> | null | undefined;
    hiring_team?: Array<JobHiringTeam$Outbound> | null | undefined;
    id?: string | null | undefined;
    interview_stages?: Array<InterviewStage$Outbound> | null | undefined;
    job_status?: JobStatus$Outbound | null | undefined;
    location_ids?: Array<string> | null | undefined;
    remote_department_ids?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_location_ids?: string | null | undefined;
    status?: string | null | undefined;
    title?: string | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const Job$outboundSchema: z.ZodType<Job$Outbound, z.ZodTypeDef, Job> = z
    .object({
        code: z.nullable(z.string()).optional(),
        confidential: z.nullable(JobConfidential$outboundSchema).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        departmentIds: z.nullable(z.array(z.string())).optional(),
        hiringTeam: z.nullable(z.array(JobHiringTeam$outboundSchema)).optional(),
        id: z.nullable(z.string()).optional(),
        interviewStages: z.nullable(z.array(InterviewStage$outboundSchema)).optional(),
        jobStatus: z.nullable(z.lazy(() => JobStatus$outboundSchema)).optional(),
        locationIds: z.nullable(z.array(z.string())).optional(),
        remoteDepartmentIds: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteLocationIds: z.nullable(z.string()).optional(),
        status: z.nullable(z.string()).optional(),
        title: z.nullable(z.string()).optional(),
        updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            departmentIds: "department_ids",
            hiringTeam: "hiring_team",
            interviewStages: "interview_stages",
            jobStatus: "job_status",
            locationIds: "location_ids",
            remoteDepartmentIds: "remote_department_ids",
            remoteId: "remote_id",
            remoteLocationIds: "remote_location_ids",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Job$ {
    /** @deprecated use `Job$inboundSchema` instead. */
    export const inboundSchema = Job$inboundSchema;
    /** @deprecated use `Job$outboundSchema` instead. */
    export const outboundSchema = Job$outboundSchema;
    /** @deprecated use `Job$Outbound` instead. */
    export type Outbound = Job$Outbound;
}
