/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type JobPostingCompensation4 = {};

/**
 * The source value of the pay frequency.
 */
export type JobPostingCompensationSourceValue = JobPostingCompensation4 | string | number | boolean;

/**
 * The pay frequency of the job postings.
 */
export enum JobPostingCompensationValue {
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

export type JobPostingCompensationPayFrequency = {
    /**
     * The source value of the pay frequency.
     */
    sourceValue?: JobPostingCompensation4 | string | number | boolean | null | undefined;
    /**
     * The pay frequency of the job postings.
     */
    value?: JobPostingCompensationValue | null | undefined;
};

export type JobPostingCompensationSchemas4 = {};

/**
 * The source value of the pay period.
 */
export type JobPostingCompensationSchemasSourceValue =
    | JobPostingCompensationSchemas4
    | string
    | number
    | boolean;

/**
 * The pay period of the job postings.
 */
export enum JobPostingCompensationSchemasValue {
    Hour = "hour",
    Day = "day",
    Week = "week",
    EveryTwoWeeks = "every_two_weeks",
    Month = "month",
    TwiceAMonth = "twice_a_month",
    EveryTwoMonths = "every_two_months",
    Quarter = "quarter",
    EverySixMonths = "every_six_months",
    Year = "year",
    OneOff = "one_off",
    None = "none",
    UnmappedValue = "unmapped_value",
}

export type JobPostingCompensationPayPeriod = {
    /**
     * The source value of the pay period.
     */
    sourceValue?: JobPostingCompensationSchemas4 | string | number | boolean | null | undefined;
    /**
     * The pay period of the job postings.
     */
    value?: JobPostingCompensationSchemasValue | null | undefined;
};

export type JobPostingCompensationSchemasType4 = {};

/**
 * The source value of the compensation type.
 */
export type JobPostingCompensationSchemasTypeSourceValue =
    | JobPostingCompensationSchemasType4
    | string
    | number
    | boolean;

/**
 * The type of the compensation.
 */
export enum JobPostingCompensationSchemasTypeValue {
    Salary = "salary",
    Hourly = "hourly",
    Commission = "commission",
    Bonus = "bonus",
    Equity = "equity",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

export type JobPostingCompensationType = {
    /**
     * The source value of the compensation type.
     */
    sourceValue?: JobPostingCompensationSchemasType4 | string | number | boolean | null | undefined;
    /**
     * The type of the compensation.
     */
    value?: JobPostingCompensationSchemasTypeValue | null | undefined;
};

export type JobPostingCompensation = {
    currency?: string | null | undefined;
    maxValue?: string | null | undefined;
    minValue?: string | null | undefined;
    name?: string | null | undefined;
    payFrequency?: JobPostingCompensationPayFrequency | null | undefined;
    payPeriod?: JobPostingCompensationPayPeriod | null | undefined;
    type?: JobPostingCompensationType | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export namespace JobPostingCompensation4$ {
    export const inboundSchema: z.ZodType<JobPostingCompensation4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingCompensation4> =
        z.object({});
}

/** @internal */
export namespace JobPostingCompensationSourceValue$ {
    export const inboundSchema: z.ZodType<
        JobPostingCompensationSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => JobPostingCompensation4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = JobPostingCompensation4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationSourceValue
    > = z.union([
        z.lazy(() => JobPostingCompensation4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const JobPostingCompensationValue$: z.ZodNativeEnum<typeof JobPostingCompensationValue> =
    z.nativeEnum(JobPostingCompensationValue);

/** @internal */
export namespace JobPostingCompensationPayFrequency$ {
    export const inboundSchema: z.ZodType<
        JobPostingCompensationPayFrequency,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => JobPostingCompensation4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobPostingCompensationValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | JobPostingCompensation4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: JobPostingCompensationValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationPayFrequency
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => JobPostingCompensation4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobPostingCompensationValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace JobPostingCompensationSchemas4$ {
    export const inboundSchema: z.ZodType<JobPostingCompensationSchemas4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingCompensationSchemas4> =
        z.object({});
}

/** @internal */
export namespace JobPostingCompensationSchemasSourceValue$ {
    export const inboundSchema: z.ZodType<
        JobPostingCompensationSchemasSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => JobPostingCompensationSchemas4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = JobPostingCompensationSchemas4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationSchemasSourceValue
    > = z.union([
        z.lazy(() => JobPostingCompensationSchemas4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const JobPostingCompensationSchemasValue$: z.ZodNativeEnum<
    typeof JobPostingCompensationSchemasValue
> = z.nativeEnum(JobPostingCompensationSchemasValue);

/** @internal */
export namespace JobPostingCompensationPayPeriod$ {
    export const inboundSchema: z.ZodType<JobPostingCompensationPayPeriod, z.ZodTypeDef, unknown> =
        z
            .object({
                source_value: z
                    .nullable(
                        z.union([
                            z.lazy(() => JobPostingCompensationSchemas4$.inboundSchema),
                            z.string(),
                            z.number(),
                            z.boolean(),
                        ])
                    )
                    .optional(),
                value: z.nullable(JobPostingCompensationSchemasValue$).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                    ...(v.value === undefined ? null : { value: v.value }),
                };
            });

    export type Outbound = {
        source_value?:
            | JobPostingCompensationSchemas4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: JobPostingCompensationSchemasValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationPayPeriod
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => JobPostingCompensationSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobPostingCompensationSchemasValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace JobPostingCompensationSchemasType4$ {
    export const inboundSchema: z.ZodType<
        JobPostingCompensationSchemasType4,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationSchemasType4
    > = z.object({});
}

/** @internal */
export namespace JobPostingCompensationSchemasTypeSourceValue$ {
    export const inboundSchema: z.ZodType<
        JobPostingCompensationSchemasTypeSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => JobPostingCompensationSchemasType4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = JobPostingCompensationSchemasType4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        JobPostingCompensationSchemasTypeSourceValue
    > = z.union([
        z.lazy(() => JobPostingCompensationSchemasType4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const JobPostingCompensationSchemasTypeValue$: z.ZodNativeEnum<
    typeof JobPostingCompensationSchemasTypeValue
> = z.nativeEnum(JobPostingCompensationSchemasTypeValue);

/** @internal */
export namespace JobPostingCompensationType$ {
    export const inboundSchema: z.ZodType<JobPostingCompensationType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => JobPostingCompensationSchemasType4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobPostingCompensationSchemasTypeValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | JobPostingCompensationSchemasType4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: JobPostingCompensationSchemasTypeValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingCompensationType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => JobPostingCompensationSchemasType4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(JobPostingCompensationSchemasTypeValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace JobPostingCompensation$ {
    export const inboundSchema: z.ZodType<JobPostingCompensation, z.ZodTypeDef, unknown> = z
        .object({
            currency: z.nullable(z.string()).optional(),
            max_value: z.nullable(z.string()).optional(),
            min_value: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            pay_frequency: z
                .nullable(z.lazy(() => JobPostingCompensationPayFrequency$.inboundSchema))
                .optional(),
            pay_period: z
                .nullable(z.lazy(() => JobPostingCompensationPayPeriod$.inboundSchema))
                .optional(),
            type: z.nullable(z.lazy(() => JobPostingCompensationType$.inboundSchema)).optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.max_value === undefined ? null : { maxValue: v.max_value }),
                ...(v.min_value === undefined ? null : { minValue: v.min_value }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.pay_frequency === undefined ? null : { payFrequency: v.pay_frequency }),
                ...(v.pay_period === undefined ? null : { payPeriod: v.pay_period }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        currency?: string | null | undefined;
        max_value?: string | null | undefined;
        min_value?: string | null | undefined;
        name?: string | null | undefined;
        pay_frequency?: JobPostingCompensationPayFrequency$.Outbound | null | undefined;
        pay_period?: JobPostingCompensationPayPeriod$.Outbound | null | undefined;
        type?: JobPostingCompensationType$.Outbound | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingCompensation> = z
        .object({
            currency: z.nullable(z.string()).optional(),
            maxValue: z.nullable(z.string()).optional(),
            minValue: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            payFrequency: z
                .nullable(z.lazy(() => JobPostingCompensationPayFrequency$.outboundSchema))
                .optional(),
            payPeriod: z
                .nullable(z.lazy(() => JobPostingCompensationPayPeriod$.outboundSchema))
                .optional(),
            type: z.nullable(z.lazy(() => JobPostingCompensationType$.outboundSchema)).optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.maxValue === undefined ? null : { max_value: v.maxValue }),
                ...(v.minValue === undefined ? null : { min_value: v.minValue }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.payFrequency === undefined ? null : { pay_frequency: v.payFrequency }),
                ...(v.payPeriod === undefined ? null : { pay_period: v.payPeriod }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
