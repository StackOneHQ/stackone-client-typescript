/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Compensation, Compensation$ } from "./compensation";
import { Location, Location$ } from "./location";
import { Questionnaire, Questionnaire$ } from "./questionnaire";
import { z } from "zod";

export type Content = {
    html?: string | null | undefined;
    plain?: string | null | undefined;
};

/**
 * The employment contract type.
 */
export enum JobPostingValue {
    FullTime = "full_time",
    Shifts = "shifts",
    PartTime = "part_time",
    UnmappedValue = "unmapped_value",
}

export type JobPostingEmploymentContractType = {
    /**
     * The source value of the employment contract type.
     */
    sourceValue: string;
    /**
     * The employment contract type.
     */
    value: JobPostingValue;
};

/**
 * The type of the employment.
 */
export enum JobPostingSchemasValue {
    Permanent = "permanent",
    Contractor = "contractor",
    Intern = "intern",
    Apprentice = "apprentice",
    Freelance = "freelance",
    Temporary = "temporary",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    UnmappedValue = "unmapped_value",
}

export type JobPostingEmploymentType = {
    /**
     * The source value of the employment type.
     */
    sourceValue: string;
    /**
     * The type of the employment.
     */
    value: JobPostingSchemasValue;
};

export enum Internal {
    True = "true",
    False = "false",
}

/**
 * The status of the job postings.
 */
export enum JobPostingSchemasStatusValue {
    Live = "live",
    Draft = "draft",
    Closed = "closed",
    UnmappedValue = "unmapped_value",
}

export type JobPostingStatus = {
    /**
     * The source value of the job postings status.
     */
    sourceValue: string;
    /**
     * The status of the job postings.
     */
    value: JobPostingSchemasStatusValue;
};

export type JobPosting = {
    compensation?: Array<Compensation> | null | undefined;
    content?: Content | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    employmentContractType?: JobPostingEmploymentContractType | null | undefined;
    employmentType?: JobPostingEmploymentType | null | undefined;
    externalApplyUrl?: string | null | undefined;
    externalUrl?: string | null | undefined;
    id: string;
    internal?: Internal | null | undefined;
    jobId?: string | null | undefined;
    locations?: Array<Location> | null | undefined;
    questionnaires?: Array<Questionnaire> | null | undefined;
    status?: JobPostingStatus | null | undefined;
    title?: string | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Content$ {
    export type Inbound = {
        html?: string | null | undefined;
        plain?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Content, z.ZodTypeDef, Inbound> = z
        .object({
            html: z.string().nullable().optional(),
            plain: z.string().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.html === undefined ? null : { html: v.html }),
                ...(v.plain === undefined ? null : { plain: v.plain }),
            };
        });

    export type Outbound = {
        html?: string | null | undefined;
        plain?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Content> = z
        .object({
            html: z.string().nullable().optional(),
            plain: z.string().nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.html === undefined ? null : { html: v.html }),
                ...(v.plain === undefined ? null : { plain: v.plain }),
            };
        });
}

/** @internal */
export const JobPostingValue$ = z.nativeEnum(JobPostingValue);

/** @internal */
export namespace JobPostingEmploymentContractType$ {
    export type Inbound = {
        source_value: string;
        value: JobPostingValue;
    };

    export const inboundSchema: z.ZodType<JobPostingEmploymentContractType, z.ZodTypeDef, Inbound> =
        z
            .object({
                source_value: z.string(),
                value: JobPostingValue$,
            })
            .transform((v) => {
                return {
                    sourceValue: v.source_value,
                    value: v.value,
                };
            });

    export type Outbound = {
        source_value: string;
        value: JobPostingValue;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingEmploymentContractType
    > = z
        .object({
            sourceValue: z.string(),
            value: JobPostingValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const JobPostingSchemasValue$ = z.nativeEnum(JobPostingSchemasValue);

/** @internal */
export namespace JobPostingEmploymentType$ {
    export type Inbound = {
        source_value: string;
        value: JobPostingSchemasValue;
    };

    export const inboundSchema: z.ZodType<JobPostingEmploymentType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: JobPostingSchemasValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: JobPostingSchemasValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingEmploymentType> = z
        .object({
            sourceValue: z.string(),
            value: JobPostingSchemasValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const Internal$ = z.nativeEnum(Internal);

/** @internal */
export const JobPostingSchemasStatusValue$ = z.nativeEnum(JobPostingSchemasStatusValue);

/** @internal */
export namespace JobPostingStatus$ {
    export type Inbound = {
        source_value: string;
        value: JobPostingSchemasStatusValue;
    };

    export const inboundSchema: z.ZodType<JobPostingStatus, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: JobPostingSchemasStatusValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: JobPostingSchemasStatusValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingStatus> = z
        .object({
            sourceValue: z.string(),
            value: JobPostingSchemasStatusValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export namespace JobPosting$ {
    export type Inbound = {
        compensation?: Array<Compensation$.Inbound> | null | undefined;
        content?: Content$.Inbound | null | undefined;
        created_at?: string | null | undefined;
        employment_contract_type?: JobPostingEmploymentContractType$.Inbound | null | undefined;
        employment_type?: JobPostingEmploymentType$.Inbound | null | undefined;
        external_apply_url?: string | null | undefined;
        external_url?: string | null | undefined;
        id: string;
        internal?: Internal | null | undefined;
        job_id?: string | null | undefined;
        locations?: Array<Location$.Inbound> | null | undefined;
        questionnaires?: Array<Questionnaire$.Inbound> | null | undefined;
        status?: JobPostingStatus$.Inbound | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<JobPosting, z.ZodTypeDef, Inbound> = z
        .object({
            compensation: z.array(Compensation$.inboundSchema).nullable().optional(),
            content: z
                .lazy(() => Content$.inboundSchema)
                .nullable()
                .optional(),
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable()
                .optional(),
            employment_contract_type: z
                .lazy(() => JobPostingEmploymentContractType$.inboundSchema)
                .nullable()
                .optional(),
            employment_type: z
                .lazy(() => JobPostingEmploymentType$.inboundSchema)
                .nullable()
                .optional(),
            external_apply_url: z.string().nullable().optional(),
            external_url: z.string().nullable().optional(),
            id: z.string(),
            internal: Internal$.nullable().optional(),
            job_id: z.string().nullable().optional(),
            locations: z.array(Location$.inboundSchema).nullable().optional(),
            questionnaires: z.array(Questionnaire$.inboundSchema).nullable().optional(),
            status: z
                .lazy(() => JobPostingStatus$.inboundSchema)
                .nullable()
                .optional(),
            title: z.string().nullable().optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable()
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.compensation === undefined ? null : { compensation: v.compensation }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.employment_contract_type === undefined
                    ? null
                    : { employmentContractType: v.employment_contract_type }),
                ...(v.employment_type === undefined ? null : { employmentType: v.employment_type }),
                ...(v.external_apply_url === undefined
                    ? null
                    : { externalApplyUrl: v.external_apply_url }),
                ...(v.external_url === undefined ? null : { externalUrl: v.external_url }),
                id: v.id,
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.job_id === undefined ? null : { jobId: v.job_id }),
                ...(v.locations === undefined ? null : { locations: v.locations }),
                ...(v.questionnaires === undefined ? null : { questionnaires: v.questionnaires }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        compensation?: Array<Compensation$.Outbound> | null | undefined;
        content?: Content$.Outbound | null | undefined;
        created_at?: string | null | undefined;
        employment_contract_type?: JobPostingEmploymentContractType$.Outbound | null | undefined;
        employment_type?: JobPostingEmploymentType$.Outbound | null | undefined;
        external_apply_url?: string | null | undefined;
        external_url?: string | null | undefined;
        id: string;
        internal?: Internal | null | undefined;
        job_id?: string | null | undefined;
        locations?: Array<Location$.Outbound> | null | undefined;
        questionnaires?: Array<Questionnaire$.Outbound> | null | undefined;
        status?: JobPostingStatus$.Outbound | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPosting> = z
        .object({
            compensation: z.array(Compensation$.outboundSchema).nullable().optional(),
            content: z
                .lazy(() => Content$.outboundSchema)
                .nullable()
                .optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable()
                .optional(),
            employmentContractType: z
                .lazy(() => JobPostingEmploymentContractType$.outboundSchema)
                .nullable()
                .optional(),
            employmentType: z
                .lazy(() => JobPostingEmploymentType$.outboundSchema)
                .nullable()
                .optional(),
            externalApplyUrl: z.string().nullable().optional(),
            externalUrl: z.string().nullable().optional(),
            id: z.string(),
            internal: Internal$.nullable().optional(),
            jobId: z.string().nullable().optional(),
            locations: z.array(Location$.outboundSchema).nullable().optional(),
            questionnaires: z.array(Questionnaire$.outboundSchema).nullable().optional(),
            status: z
                .lazy(() => JobPostingStatus$.outboundSchema)
                .nullable()
                .optional(),
            title: z.string().nullable().optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable()
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.compensation === undefined ? null : { compensation: v.compensation }),
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.employmentContractType === undefined
                    ? null
                    : { employment_contract_type: v.employmentContractType }),
                ...(v.employmentType === undefined ? null : { employment_type: v.employmentType }),
                ...(v.externalApplyUrl === undefined
                    ? null
                    : { external_apply_url: v.externalApplyUrl }),
                ...(v.externalUrl === undefined ? null : { external_url: v.externalUrl }),
                id: v.id,
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.jobId === undefined ? null : { job_id: v.jobId }),
                ...(v.locations === undefined ? null : { locations: v.locations }),
                ...(v.questionnaires === undefined ? null : { questionnaires: v.questionnaires }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
