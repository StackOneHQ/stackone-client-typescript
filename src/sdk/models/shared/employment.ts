/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum EmploymentValue {
    FullTime = "full_time",
    Shifts = "shifts",
    PartTime = "part_time",
    UnmappedValue = "unmapped_value",
}

/**
 * The employment work schedule type (e.g., full-time, part-time)
 */
export type EmploymentEmploymentContractType = {
    sourceValue: string;
    value: EmploymentValue;
};

/**
 * The type of the employment.
 */
export enum EmploymentSchemasValue {
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

/**
 * The type of employment (e.g., contractor, permanent)
 */
export type EmploymentEmploymentType = {
    /**
     * The source value of the employment type.
     */
    sourceValue: string;
    /**
     * The type of the employment.
     */
    value: EmploymentSchemasValue;
};

/**
 * The pay frequency of the job postings.
 */
export enum EmploymentSchemasPayFrequencyValue {
    Hourly = "hourly",
    Weekly = "weekly",
    BiWeekly = "bi_weekly",
    FourWeekly = "four_weekly",
    SemiMonthly = "semi_monthly",
    Monthly = "monthly",
    BiMonthly = "bi_monthly",
    Quarterly = "quarterly",
    SemiAnnually = "semi_annually",
    Yearly = "yearly",
    ThirteenMonthly = "thirteen_monthly",
    ProRata = "pro_rata",
    UnmappedValue = "unmapped_value",
    HalfYearly = "half_yearly",
}

/**
 * The pay frequency
 */
export type PayFrequency = {
    /**
     * The source value of the pay frequency.
     */
    sourceValue: string;
    /**
     * The pay frequency of the job postings.
     */
    value: EmploymentSchemasPayFrequencyValue;
};

/**
 * The pay period of the job postings.
 */
export enum EmploymentSchemasPayPeriodValue {
    Hour = "hour",
    Day = "day",
    Week = "week",
    EveryTwoWeeks = "every_two_weeks",
    Month = "month",
    Quarter = "quarter",
    EverySixMonths = "every_six_months",
    Year = "year",
    None = "none",
    UnmappedValue = "unmapped_value",
}

/**
 * The pay period
 */
export type PayPeriod = {
    /**
     * The source value of the pay period.
     */
    sourceValue: string;
    /**
     * The pay period of the job postings.
     */
    value: EmploymentSchemasPayPeriodValue;
};

export type Employment = {
    /**
     * The created_at date
     */
    createdAt?: Date | undefined;
    /**
     * The effective date of the employment contract
     */
    effectiveDate?: Date | undefined;
    /**
     * The employee ID associated with this employment
     */
    employeeId: string;
    /**
     * The employment work schedule type (e.g., full-time, part-time)
     */
    employmentContractType?: EmploymentEmploymentContractType | undefined;
    /**
     * The type of employment (e.g., contractor, permanent)
     */
    employmentType?: EmploymentEmploymentType | undefined;
    /**
     * The unique ID of the employment
     */
    id?: string | undefined;
    /**
     * The job title of the employee
     */
    jobTitle?: string | undefined;
    /**
     * The currency used for pay
     */
    payCurrency?: string | undefined;
    /**
     * The pay frequency
     */
    payFrequency?: PayFrequency | undefined;
    /**
     * The pay period
     */
    payPeriod?: PayPeriod | undefined;
    /**
     * The pay rate for the employee
     */
    payRate?: string | undefined;
    /**
     * The updated_at date
     */
    updatedAt?: Date | undefined;
};

/** @internal */
export const EmploymentValue$ = z.nativeEnum(EmploymentValue);

/** @internal */
export namespace EmploymentEmploymentContractType$ {
    export type Inbound = {
        source_value: string;
        value: EmploymentValue;
    };

    export const inboundSchema: z.ZodType<EmploymentEmploymentContractType, z.ZodTypeDef, Inbound> =
        z
            .object({
                source_value: z.string(),
                value: EmploymentValue$,
            })
            .transform((v) => {
                return {
                    sourceValue: v.source_value,
                    value: v.value,
                };
            });

    export type Outbound = {
        source_value: string;
        value: EmploymentValue;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EmploymentEmploymentContractType
    > = z
        .object({
            sourceValue: z.string(),
            value: EmploymentValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const EmploymentSchemasValue$ = z.nativeEnum(EmploymentSchemasValue);

/** @internal */
export namespace EmploymentEmploymentType$ {
    export type Inbound = {
        source_value: string;
        value: EmploymentSchemasValue;
    };

    export const inboundSchema: z.ZodType<EmploymentEmploymentType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: EmploymentSchemasValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: EmploymentSchemasValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmploymentEmploymentType> = z
        .object({
            sourceValue: z.string(),
            value: EmploymentSchemasValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const EmploymentSchemasPayFrequencyValue$ = z.nativeEnum(EmploymentSchemasPayFrequencyValue);

/** @internal */
export namespace PayFrequency$ {
    export type Inbound = {
        source_value: string;
        value: EmploymentSchemasPayFrequencyValue;
    };

    export const inboundSchema: z.ZodType<PayFrequency, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: EmploymentSchemasPayFrequencyValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: EmploymentSchemasPayFrequencyValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayFrequency> = z
        .object({
            sourceValue: z.string(),
            value: EmploymentSchemasPayFrequencyValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const EmploymentSchemasPayPeriodValue$ = z.nativeEnum(EmploymentSchemasPayPeriodValue);

/** @internal */
export namespace PayPeriod$ {
    export type Inbound = {
        source_value: string;
        value: EmploymentSchemasPayPeriodValue;
    };

    export const inboundSchema: z.ZodType<PayPeriod, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: EmploymentSchemasPayPeriodValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: EmploymentSchemasPayPeriodValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayPeriod> = z
        .object({
            sourceValue: z.string(),
            value: EmploymentSchemasPayPeriodValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export namespace Employment$ {
    export type Inbound = {
        created_at?: string | undefined;
        effective_date?: string | undefined;
        employee_id: string;
        employment_contract_type?: EmploymentEmploymentContractType$.Inbound | undefined;
        employment_type?: EmploymentEmploymentType$.Inbound | undefined;
        id?: string | undefined;
        job_title?: string | undefined;
        pay_currency?: string | undefined;
        pay_frequency?: PayFrequency$.Inbound | undefined;
        pay_period?: PayPeriod$.Inbound | undefined;
        pay_rate?: string | undefined;
        updated_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Employment, z.ZodTypeDef, Inbound> = z
        .object({
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            effective_date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            employee_id: z.string(),
            employment_contract_type: z
                .lazy(() => EmploymentEmploymentContractType$.inboundSchema)
                .optional(),
            employment_type: z.lazy(() => EmploymentEmploymentType$.inboundSchema).optional(),
            id: z.string().optional(),
            job_title: z.string().optional(),
            pay_currency: z.string().optional(),
            pay_frequency: z.lazy(() => PayFrequency$.inboundSchema).optional(),
            pay_period: z.lazy(() => PayPeriod$.inboundSchema).optional(),
            pay_rate: z.string().optional(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.effective_date === undefined ? null : { effectiveDate: v.effective_date }),
                employeeId: v.employee_id,
                ...(v.employment_contract_type === undefined
                    ? null
                    : { employmentContractType: v.employment_contract_type }),
                ...(v.employment_type === undefined ? null : { employmentType: v.employment_type }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.job_title === undefined ? null : { jobTitle: v.job_title }),
                ...(v.pay_currency === undefined ? null : { payCurrency: v.pay_currency }),
                ...(v.pay_frequency === undefined ? null : { payFrequency: v.pay_frequency }),
                ...(v.pay_period === undefined ? null : { payPeriod: v.pay_period }),
                ...(v.pay_rate === undefined ? null : { payRate: v.pay_rate }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | undefined;
        effective_date?: string | undefined;
        employee_id: string;
        employment_contract_type?: EmploymentEmploymentContractType$.Outbound | undefined;
        employment_type?: EmploymentEmploymentType$.Outbound | undefined;
        id?: string | undefined;
        job_title?: string | undefined;
        pay_currency?: string | undefined;
        pay_frequency?: PayFrequency$.Outbound | undefined;
        pay_period?: PayPeriod$.Outbound | undefined;
        pay_rate?: string | undefined;
        updated_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Employment> = z
        .object({
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            effectiveDate: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            employeeId: z.string(),
            employmentContractType: z
                .lazy(() => EmploymentEmploymentContractType$.outboundSchema)
                .optional(),
            employmentType: z.lazy(() => EmploymentEmploymentType$.outboundSchema).optional(),
            id: z.string().optional(),
            jobTitle: z.string().optional(),
            payCurrency: z.string().optional(),
            payFrequency: z.lazy(() => PayFrequency$.outboundSchema).optional(),
            payPeriod: z.lazy(() => PayPeriod$.outboundSchema).optional(),
            payRate: z.string().optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.effectiveDate === undefined ? null : { effective_date: v.effectiveDate }),
                employee_id: v.employeeId,
                ...(v.employmentContractType === undefined
                    ? null
                    : { employment_contract_type: v.employmentContractType }),
                ...(v.employmentType === undefined ? null : { employment_type: v.employmentType }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.jobTitle === undefined ? null : { job_title: v.jobTitle }),
                ...(v.payCurrency === undefined ? null : { pay_currency: v.payCurrency }),
                ...(v.payFrequency === undefined ? null : { pay_frequency: v.payFrequency }),
                ...(v.payPeriod === undefined ? null : { pay_period: v.payPeriod }),
                ...(v.payRate === undefined ? null : { pay_rate: v.payRate }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
