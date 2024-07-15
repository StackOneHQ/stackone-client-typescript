/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import {
    JobPostingCompensation,
    JobPostingCompensation$inboundSchema,
    JobPostingCompensation$Outbound,
    JobPostingCompensation$outboundSchema,
} from "./jobpostingcompensation.js";
import {
    JobPostingLocation,
    JobPostingLocation$inboundSchema,
    JobPostingLocation$Outbound,
    JobPostingLocation$outboundSchema,
} from "./jobpostinglocation.js";
import {
    JobPostingQuestionnaire,
    JobPostingQuestionnaire$inboundSchema,
    JobPostingQuestionnaire$Outbound,
    JobPostingQuestionnaire$outboundSchema,
} from "./jobpostingquestionnaire.js";
import * as z from "zod";

export type JobPostingContent = {
    html?: string | null | undefined;
    plain?: string | null | undefined;
};

export type JobPosting4 = {};

/**
 * The source value of the employment contract type.
 */
export type JobPostingSourceValue = JobPosting4 | string | number | boolean;

/**
 * The employment contract type.
 */
export enum JobPostingValue {
    FullTime = "full_time",
    Shifts = "shifts",
    PartTime = "part_time",
    UnmappedValue = "unmapped_value",
}
/**
 * The employment contract type.
 */
export type JobPostingValueOpen = OpenEnum<typeof JobPostingValue>;

export type JobPostingEmploymentContractType = {
    /**
     * The source value of the employment contract type.
     */
    sourceValue?: JobPosting4 | string | number | boolean | null | undefined;
    /**
     * The employment contract type.
     */
    value?: JobPostingValueOpen | null | undefined;
};

export type JobPostingSchemas4 = {};

/**
 * The source value of the employment type.
 */
export type JobPostingSchemasSourceValue = JobPostingSchemas4 | string | number | boolean;

/**
 * The type of the employment.
 */
export enum JobPostingSchemasValue {
    Contractor = "contractor",
    Intern = "intern",
    Permanent = "permanent",
    Apprentice = "apprentice",
    Freelance = "freelance",
    Terminated = "terminated",
    Temporary = "temporary",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    Probation = "probation",
    Internal = "internal",
    External = "external",
    Expatriate = "expatriate",
    EmployerOfRecord = "employer_of_record",
    Casual = "casual",
    Programme = "Programme",
    UnmappedValue = "unmapped_value",
}
/**
 * The type of the employment.
 */
export type JobPostingSchemasValueOpen = OpenEnum<typeof JobPostingSchemasValue>;

export type JobPostingEmploymentType = {
    /**
     * The source value of the employment type.
     */
    sourceValue?: JobPostingSchemas4 | string | number | boolean | null | undefined;
    /**
     * The type of the employment.
     */
    value?: JobPostingSchemasValueOpen | null | undefined;
};

export enum Internal {
    True = "true",
    False = "false",
}
export type InternalOpen = OpenEnum<typeof Internal>;

export type JobPostingSchemasStatus4 = {};

/**
 * The source value of the job postings status.
 */
export type JobPostingSchemasStatusSourceValue =
    | JobPostingSchemasStatus4
    | string
    | number
    | boolean;

/**
 * The status of the job postings.
 */
export enum JobPostingSchemasStatusValue {
    Live = "live",
    Draft = "draft",
    Pending = "pending",
    Internal = "internal",
    Rejected = "rejected",
    Closed = "closed",
    Archived = "archived",
    UnmappedValue = "unmapped_value",
}
/**
 * The status of the job postings.
 */
export type JobPostingSchemasStatusValueOpen = OpenEnum<typeof JobPostingSchemasStatusValue>;

export type JobPostingStatus = {
    /**
     * The source value of the job postings status.
     */
    sourceValue?: JobPostingSchemasStatus4 | string | number | boolean | null | undefined;
    /**
     * The status of the job postings.
     */
    value?: JobPostingSchemasStatusValueOpen | null | undefined;
};

export type JobPosting = {
    compensation?: Array<JobPostingCompensation> | null | undefined;
    content?: JobPostingContent | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    employmentContractType?: JobPostingEmploymentContractType | null | undefined;
    employmentType?: JobPostingEmploymentType | null | undefined;
    externalApplyUrl?: string | null | undefined;
    externalUrl?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    internal?: InternalOpen | null | undefined;
    jobId?: string | null | undefined;
    locations?: Array<JobPostingLocation> | null | undefined;
    questionnaires?: Array<JobPostingQuestionnaire> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's unique identifier of the job posting
     */
    remoteJobPostingId?: string | null | undefined;
    status?: JobPostingStatus | null | undefined;
    title?: string | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const JobPostingContent$inboundSchema: z.ZodType<JobPostingContent, z.ZodTypeDef, unknown> =
    z.object({
        html: z.nullable(z.string()).optional(),
        plain: z.nullable(z.string()).optional(),
    });

/** @internal */
export type JobPostingContent$Outbound = {
    html?: string | null | undefined;
    plain?: string | null | undefined;
};

/** @internal */
export const JobPostingContent$outboundSchema: z.ZodType<
    JobPostingContent$Outbound,
    z.ZodTypeDef,
    JobPostingContent
> = z.object({
    html: z.nullable(z.string()).optional(),
    plain: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingContent$ {
    /** @deprecated use `JobPostingContent$inboundSchema` instead. */
    export const inboundSchema = JobPostingContent$inboundSchema;
    /** @deprecated use `JobPostingContent$outboundSchema` instead. */
    export const outboundSchema = JobPostingContent$outboundSchema;
    /** @deprecated use `JobPostingContent$Outbound` instead. */
    export type Outbound = JobPostingContent$Outbound;
}

/** @internal */
export const JobPosting4$inboundSchema: z.ZodType<JobPosting4, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type JobPosting4$Outbound = {};

/** @internal */
export const JobPosting4$outboundSchema: z.ZodType<
    JobPosting4$Outbound,
    z.ZodTypeDef,
    JobPosting4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPosting4$ {
    /** @deprecated use `JobPosting4$inboundSchema` instead. */
    export const inboundSchema = JobPosting4$inboundSchema;
    /** @deprecated use `JobPosting4$outboundSchema` instead. */
    export const outboundSchema = JobPosting4$outboundSchema;
    /** @deprecated use `JobPosting4$Outbound` instead. */
    export type Outbound = JobPosting4$Outbound;
}

/** @internal */
export const JobPostingSourceValue$inboundSchema: z.ZodType<
    JobPostingSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => JobPosting4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type JobPostingSourceValue$Outbound = JobPosting4$Outbound | string | number | boolean;

/** @internal */
export const JobPostingSourceValue$outboundSchema: z.ZodType<
    JobPostingSourceValue$Outbound,
    z.ZodTypeDef,
    JobPostingSourceValue
> = z.union([z.lazy(() => JobPosting4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSourceValue$ {
    /** @deprecated use `JobPostingSourceValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingSourceValue$inboundSchema;
    /** @deprecated use `JobPostingSourceValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingSourceValue$outboundSchema;
    /** @deprecated use `JobPostingSourceValue$Outbound` instead. */
    export type Outbound = JobPostingSourceValue$Outbound;
}

/** @internal */
export const JobPostingValue$inboundSchema: z.ZodType<JobPostingValueOpen, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(JobPostingValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const JobPostingValue$outboundSchema: z.ZodType<
    JobPostingValueOpen,
    z.ZodTypeDef,
    JobPostingValueOpen
> = z.union([z.nativeEnum(JobPostingValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingValue$ {
    /** @deprecated use `JobPostingValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingValue$inboundSchema;
    /** @deprecated use `JobPostingValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingValue$outboundSchema;
}

/** @internal */
export const JobPostingEmploymentContractType$inboundSchema: z.ZodType<
    JobPostingEmploymentContractType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => JobPosting4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type JobPostingEmploymentContractType$Outbound = {
    source_value?: JobPosting4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const JobPostingEmploymentContractType$outboundSchema: z.ZodType<
    JobPostingEmploymentContractType$Outbound,
    z.ZodTypeDef,
    JobPostingEmploymentContractType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => JobPosting4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingValue$outboundSchema).optional(),
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
export namespace JobPostingEmploymentContractType$ {
    /** @deprecated use `JobPostingEmploymentContractType$inboundSchema` instead. */
    export const inboundSchema = JobPostingEmploymentContractType$inboundSchema;
    /** @deprecated use `JobPostingEmploymentContractType$outboundSchema` instead. */
    export const outboundSchema = JobPostingEmploymentContractType$outboundSchema;
    /** @deprecated use `JobPostingEmploymentContractType$Outbound` instead. */
    export type Outbound = JobPostingEmploymentContractType$Outbound;
}

/** @internal */
export const JobPostingSchemas4$inboundSchema: z.ZodType<
    JobPostingSchemas4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type JobPostingSchemas4$Outbound = {};

/** @internal */
export const JobPostingSchemas4$outboundSchema: z.ZodType<
    JobPostingSchemas4$Outbound,
    z.ZodTypeDef,
    JobPostingSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemas4$ {
    /** @deprecated use `JobPostingSchemas4$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemas4$inboundSchema;
    /** @deprecated use `JobPostingSchemas4$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemas4$outboundSchema;
    /** @deprecated use `JobPostingSchemas4$Outbound` instead. */
    export type Outbound = JobPostingSchemas4$Outbound;
}

/** @internal */
export const JobPostingSchemasSourceValue$inboundSchema: z.ZodType<
    JobPostingSchemasSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => JobPostingSchemas4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type JobPostingSchemasSourceValue$Outbound =
    | JobPostingSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const JobPostingSchemasSourceValue$outboundSchema: z.ZodType<
    JobPostingSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    JobPostingSchemasSourceValue
> = z.union([z.lazy(() => JobPostingSchemas4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemasSourceValue$ {
    /** @deprecated use `JobPostingSchemasSourceValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemasSourceValue$inboundSchema;
    /** @deprecated use `JobPostingSchemasSourceValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemasSourceValue$outboundSchema;
    /** @deprecated use `JobPostingSchemasSourceValue$Outbound` instead. */
    export type Outbound = JobPostingSchemasSourceValue$Outbound;
}

/** @internal */
export const JobPostingSchemasValue$inboundSchema: z.ZodType<
    JobPostingSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(JobPostingSchemasValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const JobPostingSchemasValue$outboundSchema: z.ZodType<
    JobPostingSchemasValueOpen,
    z.ZodTypeDef,
    JobPostingSchemasValueOpen
> = z.union([
    z.nativeEnum(JobPostingSchemasValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemasValue$ {
    /** @deprecated use `JobPostingSchemasValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemasValue$inboundSchema;
    /** @deprecated use `JobPostingSchemasValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemasValue$outboundSchema;
}

/** @internal */
export const JobPostingEmploymentType$inboundSchema: z.ZodType<
    JobPostingEmploymentType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => JobPostingSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type JobPostingEmploymentType$Outbound = {
    source_value?: JobPostingSchemas4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const JobPostingEmploymentType$outboundSchema: z.ZodType<
    JobPostingEmploymentType$Outbound,
    z.ZodTypeDef,
    JobPostingEmploymentType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => JobPostingSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingSchemasValue$outboundSchema).optional(),
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
export namespace JobPostingEmploymentType$ {
    /** @deprecated use `JobPostingEmploymentType$inboundSchema` instead. */
    export const inboundSchema = JobPostingEmploymentType$inboundSchema;
    /** @deprecated use `JobPostingEmploymentType$outboundSchema` instead. */
    export const outboundSchema = JobPostingEmploymentType$outboundSchema;
    /** @deprecated use `JobPostingEmploymentType$Outbound` instead. */
    export type Outbound = JobPostingEmploymentType$Outbound;
}

/** @internal */
export const Internal$inboundSchema: z.ZodType<InternalOpen, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(Internal),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const Internal$outboundSchema: z.ZodType<InternalOpen, z.ZodTypeDef, InternalOpen> = z.union(
    [z.nativeEnum(Internal), z.string().and(z.custom<Unrecognized<string>>())]
);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Internal$ {
    /** @deprecated use `Internal$inboundSchema` instead. */
    export const inboundSchema = Internal$inboundSchema;
    /** @deprecated use `Internal$outboundSchema` instead. */
    export const outboundSchema = Internal$outboundSchema;
}

/** @internal */
export const JobPostingSchemasStatus4$inboundSchema: z.ZodType<
    JobPostingSchemasStatus4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type JobPostingSchemasStatus4$Outbound = {};

/** @internal */
export const JobPostingSchemasStatus4$outboundSchema: z.ZodType<
    JobPostingSchemasStatus4$Outbound,
    z.ZodTypeDef,
    JobPostingSchemasStatus4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemasStatus4$ {
    /** @deprecated use `JobPostingSchemasStatus4$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemasStatus4$inboundSchema;
    /** @deprecated use `JobPostingSchemasStatus4$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemasStatus4$outboundSchema;
    /** @deprecated use `JobPostingSchemasStatus4$Outbound` instead. */
    export type Outbound = JobPostingSchemasStatus4$Outbound;
}

/** @internal */
export const JobPostingSchemasStatusSourceValue$inboundSchema: z.ZodType<
    JobPostingSchemasStatusSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => JobPostingSchemasStatus4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type JobPostingSchemasStatusSourceValue$Outbound =
    | JobPostingSchemasStatus4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const JobPostingSchemasStatusSourceValue$outboundSchema: z.ZodType<
    JobPostingSchemasStatusSourceValue$Outbound,
    z.ZodTypeDef,
    JobPostingSchemasStatusSourceValue
> = z.union([
    z.lazy(() => JobPostingSchemasStatus4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemasStatusSourceValue$ {
    /** @deprecated use `JobPostingSchemasStatusSourceValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemasStatusSourceValue$inboundSchema;
    /** @deprecated use `JobPostingSchemasStatusSourceValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemasStatusSourceValue$outboundSchema;
    /** @deprecated use `JobPostingSchemasStatusSourceValue$Outbound` instead. */
    export type Outbound = JobPostingSchemasStatusSourceValue$Outbound;
}

/** @internal */
export const JobPostingSchemasStatusValue$inboundSchema: z.ZodType<
    JobPostingSchemasStatusValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(JobPostingSchemasStatusValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const JobPostingSchemasStatusValue$outboundSchema: z.ZodType<
    JobPostingSchemasStatusValueOpen,
    z.ZodTypeDef,
    JobPostingSchemasStatusValueOpen
> = z.union([
    z.nativeEnum(JobPostingSchemasStatusValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingSchemasStatusValue$ {
    /** @deprecated use `JobPostingSchemasStatusValue$inboundSchema` instead. */
    export const inboundSchema = JobPostingSchemasStatusValue$inboundSchema;
    /** @deprecated use `JobPostingSchemasStatusValue$outboundSchema` instead. */
    export const outboundSchema = JobPostingSchemasStatusValue$outboundSchema;
}

/** @internal */
export const JobPostingStatus$inboundSchema: z.ZodType<JobPostingStatus, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => JobPostingSchemasStatus4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingSchemasStatusValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type JobPostingStatus$Outbound = {
    source_value?: JobPostingSchemasStatus4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const JobPostingStatus$outboundSchema: z.ZodType<
    JobPostingStatus$Outbound,
    z.ZodTypeDef,
    JobPostingStatus
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => JobPostingSchemasStatus4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(JobPostingSchemasStatusValue$outboundSchema).optional(),
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
export namespace JobPostingStatus$ {
    /** @deprecated use `JobPostingStatus$inboundSchema` instead. */
    export const inboundSchema = JobPostingStatus$inboundSchema;
    /** @deprecated use `JobPostingStatus$outboundSchema` instead. */
    export const outboundSchema = JobPostingStatus$outboundSchema;
    /** @deprecated use `JobPostingStatus$Outbound` instead. */
    export type Outbound = JobPostingStatus$Outbound;
}

/** @internal */
export const JobPosting$inboundSchema: z.ZodType<JobPosting, z.ZodTypeDef, unknown> = z
    .object({
        compensation: z.nullable(z.array(JobPostingCompensation$inboundSchema)).optional(),
        content: z.nullable(z.lazy(() => JobPostingContent$inboundSchema)).optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        employment_contract_type: z
            .nullable(z.lazy(() => JobPostingEmploymentContractType$inboundSchema))
            .optional(),
        employment_type: z
            .nullable(z.lazy(() => JobPostingEmploymentType$inboundSchema))
            .optional(),
        external_apply_url: z.nullable(z.string()).optional(),
        external_url: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        internal: z.nullable(Internal$inboundSchema).optional(),
        job_id: z.nullable(z.string()).optional(),
        locations: z.nullable(z.array(JobPostingLocation$inboundSchema)).optional(),
        questionnaires: z.nullable(z.array(JobPostingQuestionnaire$inboundSchema)).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_job_posting_id: z.nullable(z.string()).optional(),
        status: z.nullable(z.lazy(() => JobPostingStatus$inboundSchema)).optional(),
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
            employment_contract_type: "employmentContractType",
            employment_type: "employmentType",
            external_apply_url: "externalApplyUrl",
            external_url: "externalUrl",
            job_id: "jobId",
            remote_id: "remoteId",
            remote_job_posting_id: "remoteJobPostingId",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type JobPosting$Outbound = {
    compensation?: Array<JobPostingCompensation$Outbound> | null | undefined;
    content?: JobPostingContent$Outbound | null | undefined;
    created_at?: string | null | undefined;
    employment_contract_type?: JobPostingEmploymentContractType$Outbound | null | undefined;
    employment_type?: JobPostingEmploymentType$Outbound | null | undefined;
    external_apply_url?: string | null | undefined;
    external_url?: string | null | undefined;
    id?: string | null | undefined;
    internal?: string | null | undefined;
    job_id?: string | null | undefined;
    locations?: Array<JobPostingLocation$Outbound> | null | undefined;
    questionnaires?: Array<JobPostingQuestionnaire$Outbound> | null | undefined;
    remote_id?: string | null | undefined;
    remote_job_posting_id?: string | null | undefined;
    status?: JobPostingStatus$Outbound | null | undefined;
    title?: string | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const JobPosting$outboundSchema: z.ZodType<JobPosting$Outbound, z.ZodTypeDef, JobPosting> = z
    .object({
        compensation: z.nullable(z.array(JobPostingCompensation$outboundSchema)).optional(),
        content: z.nullable(z.lazy(() => JobPostingContent$outboundSchema)).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        employmentContractType: z
            .nullable(z.lazy(() => JobPostingEmploymentContractType$outboundSchema))
            .optional(),
        employmentType: z
            .nullable(z.lazy(() => JobPostingEmploymentType$outboundSchema))
            .optional(),
        externalApplyUrl: z.nullable(z.string()).optional(),
        externalUrl: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        internal: z.nullable(Internal$outboundSchema).optional(),
        jobId: z.nullable(z.string()).optional(),
        locations: z.nullable(z.array(JobPostingLocation$outboundSchema)).optional(),
        questionnaires: z.nullable(z.array(JobPostingQuestionnaire$outboundSchema)).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteJobPostingId: z.nullable(z.string()).optional(),
        status: z.nullable(z.lazy(() => JobPostingStatus$outboundSchema)).optional(),
        title: z.nullable(z.string()).optional(),
        updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            employmentContractType: "employment_contract_type",
            employmentType: "employment_type",
            externalApplyUrl: "external_apply_url",
            externalUrl: "external_url",
            jobId: "job_id",
            remoteId: "remote_id",
            remoteJobPostingId: "remote_job_posting_id",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPosting$ {
    /** @deprecated use `JobPosting$inboundSchema` instead. */
    export const inboundSchema = JobPosting$inboundSchema;
    /** @deprecated use `JobPosting$outboundSchema` instead. */
    export const outboundSchema = JobPosting$outboundSchema;
    /** @deprecated use `JobPosting$Outbound` instead. */
    export type Outbound = JobPosting$Outbound;
}
