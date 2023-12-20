/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The pay frequency of the job postings.
 */
export enum CompensationValue {
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

export type PayFrequency = {
    /**
     * The source value of the pay frequency.
     */
    sourceValue: string;
    /**
     * The pay frequency of the job postings.
     */
    value: CompensationValue;
};

/**
 * The pay period of the job postings.
 */
export enum CompensationSchemasValue {
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

export type PayPeriod = {
    /**
     * The source value of the pay period.
     */
    sourceValue: string;
    /**
     * The pay period of the job postings.
     */
    value: CompensationSchemasValue;
};

/**
 * The type of the compensation.
 */
export enum CompensationSchemasTypeValue {
    Salary = "salary",
    Hourly = "hourly",
    Commission = "commission",
    Bonus = "bonus",
    Equity = "equity",
    Other = "other",
    UnmappedValue = "unmapped_value",
}

export type CompensationType = {
    /**
     * The source value of the compensation type.
     */
    sourceValue: string;
    /**
     * The type of the compensation.
     */
    value: CompensationSchemasTypeValue;
};

export type Compensation = {
    currency?: string | null | undefined;
    maxValue?: string | null | undefined;
    minValue?: string | null | undefined;
    name?: string | null | undefined;
    payFrequency?: PayFrequency | null | undefined;
    payPeriod?: PayPeriod | null | undefined;
    type?: CompensationType | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const CompensationValue$ = z.nativeEnum(CompensationValue);

/** @internal */
export namespace PayFrequency$ {
    export type Inbound = {
        source_value: string;
        value: CompensationValue;
    };

    export const inboundSchema: z.ZodType<PayFrequency, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: CompensationValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: CompensationValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayFrequency> = z
        .object({
            sourceValue: z.string(),
            value: CompensationValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const CompensationSchemasValue$ = z.nativeEnum(CompensationSchemasValue);

/** @internal */
export namespace PayPeriod$ {
    export type Inbound = {
        source_value: string;
        value: CompensationSchemasValue;
    };

    export const inboundSchema: z.ZodType<PayPeriod, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: CompensationSchemasValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: CompensationSchemasValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PayPeriod> = z
        .object({
            sourceValue: z.string(),
            value: CompensationSchemasValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export const CompensationSchemasTypeValue$ = z.nativeEnum(CompensationSchemasTypeValue);

/** @internal */
export namespace CompensationType$ {
    export type Inbound = {
        source_value: string;
        value: CompensationSchemasTypeValue;
    };

    export const inboundSchema: z.ZodType<CompensationType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: CompensationSchemasTypeValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: CompensationSchemasTypeValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompensationType> = z
        .object({
            sourceValue: z.string(),
            value: CompensationSchemasTypeValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}

/** @internal */
export namespace Compensation$ {
    export type Inbound = {
        currency?: string | null | undefined;
        max_value?: string | null | undefined;
        min_value?: string | null | undefined;
        name?: string | null | undefined;
        pay_frequency?: PayFrequency$.Inbound | null | undefined;
        pay_period?: PayPeriod$.Inbound | null | undefined;
        type?: CompensationType$.Inbound | null | undefined;
        value?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Compensation, z.ZodTypeDef, Inbound> = z
        .object({
            currency: z.string().nullable().optional(),
            max_value: z.string().nullable().optional(),
            min_value: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            pay_frequency: z
                .lazy(() => PayFrequency$.inboundSchema)
                .nullable()
                .optional(),
            pay_period: z
                .lazy(() => PayPeriod$.inboundSchema)
                .nullable()
                .optional(),
            type: z
                .lazy(() => CompensationType$.inboundSchema)
                .nullable()
                .optional(),
            value: z.string().nullable().optional(),
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
        pay_frequency?: PayFrequency$.Outbound | null | undefined;
        pay_period?: PayPeriod$.Outbound | null | undefined;
        type?: CompensationType$.Outbound | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Compensation> = z
        .object({
            currency: z.string().nullable().optional(),
            maxValue: z.string().nullable().optional(),
            minValue: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            payFrequency: z
                .lazy(() => PayFrequency$.outboundSchema)
                .nullable()
                .optional(),
            payPeriod: z
                .lazy(() => PayPeriod$.outboundSchema)
                .nullable()
                .optional(),
            type: z
                .lazy(() => CompensationType$.outboundSchema)
                .nullable()
                .optional(),
            value: z.string().nullable().optional(),
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
