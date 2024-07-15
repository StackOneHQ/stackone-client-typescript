/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type Employment4 = {};

export type EmploymentSourceValue = Employment4 | string | number | boolean;

export enum EmploymentValue {
    FullTime = "full_time",
    Shifts = "shifts",
    PartTime = "part_time",
    UnmappedValue = "unmapped_value",
}
export type EmploymentValueOpen = OpenEnum<typeof EmploymentValue>;

/**
 * The employment work schedule type (e.g., full-time, part-time)
 */
export type EmploymentEmploymentContractType = {
    sourceValue?: Employment4 | string | number | boolean | null | undefined;
    value?: EmploymentValueOpen | null | undefined;
};

export type EmploymentSchemas4 = {};

/**
 * The source value of the employment type.
 */
export type EmploymentSchemasSourceValue = EmploymentSchemas4 | string | number | boolean;

/**
 * The type of the employment.
 */
export enum EmploymentSchemasValue {
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
export type EmploymentSchemasValueOpen = OpenEnum<typeof EmploymentSchemasValue>;

/**
 * The type of employment (e.g., contractor, permanent)
 */
export type EmploymentEmploymentType = {
    /**
     * The source value of the employment type.
     */
    sourceValue?: EmploymentSchemas4 | string | number | boolean | null | undefined;
    /**
     * The type of the employment.
     */
    value?: EmploymentSchemasValueOpen | null | undefined;
};

export type EmploymentSchemasPayFrequency4 = {};

/**
 * The source value of the pay frequency.
 */
export type EmploymentSchemasPayFrequencySourceValue =
    | EmploymentSchemasPayFrequency4
    | string
    | number
    | boolean;

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
    Daily = "daily",
}
/**
 * The pay frequency of the job postings.
 */
export type EmploymentSchemasPayFrequencyValueOpen = OpenEnum<
    typeof EmploymentSchemasPayFrequencyValue
>;

/**
 * The pay frequency
 */
export type PayFrequency = {
    /**
     * The source value of the pay frequency.
     */
    sourceValue?: EmploymentSchemasPayFrequency4 | string | number | boolean | null | undefined;
    /**
     * The pay frequency of the job postings.
     */
    value?: EmploymentSchemasPayFrequencyValueOpen | null | undefined;
};

export type EmploymentSchemasPayPeriod4 = {};

/**
 * The source value of the pay period.
 */
export type EmploymentSchemasPayPeriodSourceValue =
    | EmploymentSchemasPayPeriod4
    | string
    | number
    | boolean;

/**
 * The pay period of the job postings.
 */
export enum EmploymentSchemasPayPeriodValue {
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
/**
 * The pay period of the job postings.
 */
export type EmploymentSchemasPayPeriodValueOpen = OpenEnum<typeof EmploymentSchemasPayPeriodValue>;

/**
 * The pay period
 */
export type PayPeriod = {
    /**
     * The source value of the pay period.
     */
    sourceValue?: EmploymentSchemasPayPeriod4 | string | number | boolean | null | undefined;
    /**
     * The pay period of the job postings.
     */
    value?: EmploymentSchemasPayPeriodValueOpen | null | undefined;
};

export type Employment = {
    /**
     * The created_at date
     */
    createdAt?: Date | null | undefined;
    /**
     * The effective date of the employment contract
     */
    effectiveDate?: Date | null | undefined;
    /**
     * The employee ID associated with this employment
     */
    employeeId?: string | null | undefined;
    /**
     * The employment work schedule type (e.g., full-time, part-time)
     */
    employmentContractType?: EmploymentEmploymentContractType | null | undefined;
    /**
     * The type of employment (e.g., contractor, permanent)
     */
    employmentType?: EmploymentEmploymentType | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The job title of the employee
     */
    jobTitle?: string | null | undefined;
    /**
     * The currency used for pay
     */
    payCurrency?: string | null | undefined;
    /**
     * The pay frequency
     */
    payFrequency?: PayFrequency | null | undefined;
    /**
     * The pay period
     */
    payPeriod?: PayPeriod | null | undefined;
    /**
     * The pay rate for the employee
     */
    payRate?: string | null | undefined;
    /**
     * Provider's unique identifier of the employee associated with this employment
     */
    remoteEmployeeId?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The updated_at date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const Employment4$inboundSchema: z.ZodType<Employment4, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type Employment4$Outbound = {};

/** @internal */
export const Employment4$outboundSchema: z.ZodType<
    Employment4$Outbound,
    z.ZodTypeDef,
    Employment4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Employment4$ {
    /** @deprecated use `Employment4$inboundSchema` instead. */
    export const inboundSchema = Employment4$inboundSchema;
    /** @deprecated use `Employment4$outboundSchema` instead. */
    export const outboundSchema = Employment4$outboundSchema;
    /** @deprecated use `Employment4$Outbound` instead. */
    export type Outbound = Employment4$Outbound;
}

/** @internal */
export const EmploymentSourceValue$inboundSchema: z.ZodType<
    EmploymentSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => Employment4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type EmploymentSourceValue$Outbound = Employment4$Outbound | string | number | boolean;

/** @internal */
export const EmploymentSourceValue$outboundSchema: z.ZodType<
    EmploymentSourceValue$Outbound,
    z.ZodTypeDef,
    EmploymentSourceValue
> = z.union([z.lazy(() => Employment4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSourceValue$ {
    /** @deprecated use `EmploymentSourceValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSourceValue$inboundSchema;
    /** @deprecated use `EmploymentSourceValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSourceValue$outboundSchema;
    /** @deprecated use `EmploymentSourceValue$Outbound` instead. */
    export type Outbound = EmploymentSourceValue$Outbound;
}

/** @internal */
export const EmploymentValue$inboundSchema: z.ZodType<EmploymentValueOpen, z.ZodTypeDef, unknown> =
    z.union([z.nativeEnum(EmploymentValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const EmploymentValue$outboundSchema: z.ZodType<
    EmploymentValueOpen,
    z.ZodTypeDef,
    EmploymentValueOpen
> = z.union([z.nativeEnum(EmploymentValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentValue$ {
    /** @deprecated use `EmploymentValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentValue$inboundSchema;
    /** @deprecated use `EmploymentValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentValue$outboundSchema;
}

/** @internal */
export const EmploymentEmploymentContractType$inboundSchema: z.ZodType<
    EmploymentEmploymentContractType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => Employment4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type EmploymentEmploymentContractType$Outbound = {
    source_value?: Employment4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const EmploymentEmploymentContractType$outboundSchema: z.ZodType<
    EmploymentEmploymentContractType$Outbound,
    z.ZodTypeDef,
    EmploymentEmploymentContractType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => Employment4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentValue$outboundSchema).optional(),
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
export namespace EmploymentEmploymentContractType$ {
    /** @deprecated use `EmploymentEmploymentContractType$inboundSchema` instead. */
    export const inboundSchema = EmploymentEmploymentContractType$inboundSchema;
    /** @deprecated use `EmploymentEmploymentContractType$outboundSchema` instead. */
    export const outboundSchema = EmploymentEmploymentContractType$outboundSchema;
    /** @deprecated use `EmploymentEmploymentContractType$Outbound` instead. */
    export type Outbound = EmploymentEmploymentContractType$Outbound;
}

/** @internal */
export const EmploymentSchemas4$inboundSchema: z.ZodType<
    EmploymentSchemas4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type EmploymentSchemas4$Outbound = {};

/** @internal */
export const EmploymentSchemas4$outboundSchema: z.ZodType<
    EmploymentSchemas4$Outbound,
    z.ZodTypeDef,
    EmploymentSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemas4$ {
    /** @deprecated use `EmploymentSchemas4$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemas4$inboundSchema;
    /** @deprecated use `EmploymentSchemas4$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemas4$outboundSchema;
    /** @deprecated use `EmploymentSchemas4$Outbound` instead. */
    export type Outbound = EmploymentSchemas4$Outbound;
}

/** @internal */
export const EmploymentSchemasSourceValue$inboundSchema: z.ZodType<
    EmploymentSchemasSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => EmploymentSchemas4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type EmploymentSchemasSourceValue$Outbound =
    | EmploymentSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const EmploymentSchemasSourceValue$outboundSchema: z.ZodType<
    EmploymentSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    EmploymentSchemasSourceValue
> = z.union([z.lazy(() => EmploymentSchemas4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasSourceValue$ {
    /** @deprecated use `EmploymentSchemasSourceValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasSourceValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasSourceValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasSourceValue$outboundSchema;
    /** @deprecated use `EmploymentSchemasSourceValue$Outbound` instead. */
    export type Outbound = EmploymentSchemasSourceValue$Outbound;
}

/** @internal */
export const EmploymentSchemasValue$inboundSchema: z.ZodType<
    EmploymentSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(EmploymentSchemasValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const EmploymentSchemasValue$outboundSchema: z.ZodType<
    EmploymentSchemasValueOpen,
    z.ZodTypeDef,
    EmploymentSchemasValueOpen
> = z.union([
    z.nativeEnum(EmploymentSchemasValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasValue$ {
    /** @deprecated use `EmploymentSchemasValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasValue$outboundSchema;
}

/** @internal */
export const EmploymentEmploymentType$inboundSchema: z.ZodType<
    EmploymentEmploymentType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type EmploymentEmploymentType$Outbound = {
    source_value?: EmploymentSchemas4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const EmploymentEmploymentType$outboundSchema: z.ZodType<
    EmploymentEmploymentType$Outbound,
    z.ZodTypeDef,
    EmploymentEmploymentType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasValue$outboundSchema).optional(),
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
export namespace EmploymentEmploymentType$ {
    /** @deprecated use `EmploymentEmploymentType$inboundSchema` instead. */
    export const inboundSchema = EmploymentEmploymentType$inboundSchema;
    /** @deprecated use `EmploymentEmploymentType$outboundSchema` instead. */
    export const outboundSchema = EmploymentEmploymentType$outboundSchema;
    /** @deprecated use `EmploymentEmploymentType$Outbound` instead. */
    export type Outbound = EmploymentEmploymentType$Outbound;
}

/** @internal */
export const EmploymentSchemasPayFrequency4$inboundSchema: z.ZodType<
    EmploymentSchemasPayFrequency4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type EmploymentSchemasPayFrequency4$Outbound = {};

/** @internal */
export const EmploymentSchemasPayFrequency4$outboundSchema: z.ZodType<
    EmploymentSchemasPayFrequency4$Outbound,
    z.ZodTypeDef,
    EmploymentSchemasPayFrequency4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayFrequency4$ {
    /** @deprecated use `EmploymentSchemasPayFrequency4$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayFrequency4$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayFrequency4$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayFrequency4$outboundSchema;
    /** @deprecated use `EmploymentSchemasPayFrequency4$Outbound` instead. */
    export type Outbound = EmploymentSchemasPayFrequency4$Outbound;
}

/** @internal */
export const EmploymentSchemasPayFrequencySourceValue$inboundSchema: z.ZodType<
    EmploymentSchemasPayFrequencySourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => EmploymentSchemasPayFrequency4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type EmploymentSchemasPayFrequencySourceValue$Outbound =
    | EmploymentSchemasPayFrequency4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const EmploymentSchemasPayFrequencySourceValue$outboundSchema: z.ZodType<
    EmploymentSchemasPayFrequencySourceValue$Outbound,
    z.ZodTypeDef,
    EmploymentSchemasPayFrequencySourceValue
> = z.union([
    z.lazy(() => EmploymentSchemasPayFrequency4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayFrequencySourceValue$ {
    /** @deprecated use `EmploymentSchemasPayFrequencySourceValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayFrequencySourceValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayFrequencySourceValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayFrequencySourceValue$outboundSchema;
    /** @deprecated use `EmploymentSchemasPayFrequencySourceValue$Outbound` instead. */
    export type Outbound = EmploymentSchemasPayFrequencySourceValue$Outbound;
}

/** @internal */
export const EmploymentSchemasPayFrequencyValue$inboundSchema: z.ZodType<
    EmploymentSchemasPayFrequencyValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(EmploymentSchemasPayFrequencyValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const EmploymentSchemasPayFrequencyValue$outboundSchema: z.ZodType<
    EmploymentSchemasPayFrequencyValueOpen,
    z.ZodTypeDef,
    EmploymentSchemasPayFrequencyValueOpen
> = z.union([
    z.nativeEnum(EmploymentSchemasPayFrequencyValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayFrequencyValue$ {
    /** @deprecated use `EmploymentSchemasPayFrequencyValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayFrequencyValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayFrequencyValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayFrequencyValue$outboundSchema;
}

/** @internal */
export const PayFrequency$inboundSchema: z.ZodType<PayFrequency, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemasPayFrequency4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasPayFrequencyValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type PayFrequency$Outbound = {
    source_value?:
        | EmploymentSchemasPayFrequency4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const PayFrequency$outboundSchema: z.ZodType<
    PayFrequency$Outbound,
    z.ZodTypeDef,
    PayFrequency
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemasPayFrequency4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasPayFrequencyValue$outboundSchema).optional(),
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
export namespace PayFrequency$ {
    /** @deprecated use `PayFrequency$inboundSchema` instead. */
    export const inboundSchema = PayFrequency$inboundSchema;
    /** @deprecated use `PayFrequency$outboundSchema` instead. */
    export const outboundSchema = PayFrequency$outboundSchema;
    /** @deprecated use `PayFrequency$Outbound` instead. */
    export type Outbound = PayFrequency$Outbound;
}

/** @internal */
export const EmploymentSchemasPayPeriod4$inboundSchema: z.ZodType<
    EmploymentSchemasPayPeriod4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type EmploymentSchemasPayPeriod4$Outbound = {};

/** @internal */
export const EmploymentSchemasPayPeriod4$outboundSchema: z.ZodType<
    EmploymentSchemasPayPeriod4$Outbound,
    z.ZodTypeDef,
    EmploymentSchemasPayPeriod4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayPeriod4$ {
    /** @deprecated use `EmploymentSchemasPayPeriod4$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayPeriod4$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayPeriod4$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayPeriod4$outboundSchema;
    /** @deprecated use `EmploymentSchemasPayPeriod4$Outbound` instead. */
    export type Outbound = EmploymentSchemasPayPeriod4$Outbound;
}

/** @internal */
export const EmploymentSchemasPayPeriodSourceValue$inboundSchema: z.ZodType<
    EmploymentSchemasPayPeriodSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => EmploymentSchemasPayPeriod4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type EmploymentSchemasPayPeriodSourceValue$Outbound =
    | EmploymentSchemasPayPeriod4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const EmploymentSchemasPayPeriodSourceValue$outboundSchema: z.ZodType<
    EmploymentSchemasPayPeriodSourceValue$Outbound,
    z.ZodTypeDef,
    EmploymentSchemasPayPeriodSourceValue
> = z.union([
    z.lazy(() => EmploymentSchemasPayPeriod4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayPeriodSourceValue$ {
    /** @deprecated use `EmploymentSchemasPayPeriodSourceValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayPeriodSourceValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayPeriodSourceValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayPeriodSourceValue$outboundSchema;
    /** @deprecated use `EmploymentSchemasPayPeriodSourceValue$Outbound` instead. */
    export type Outbound = EmploymentSchemasPayPeriodSourceValue$Outbound;
}

/** @internal */
export const EmploymentSchemasPayPeriodValue$inboundSchema: z.ZodType<
    EmploymentSchemasPayPeriodValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(EmploymentSchemasPayPeriodValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const EmploymentSchemasPayPeriodValue$outboundSchema: z.ZodType<
    EmploymentSchemasPayPeriodValueOpen,
    z.ZodTypeDef,
    EmploymentSchemasPayPeriodValueOpen
> = z.union([
    z.nativeEnum(EmploymentSchemasPayPeriodValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentSchemasPayPeriodValue$ {
    /** @deprecated use `EmploymentSchemasPayPeriodValue$inboundSchema` instead. */
    export const inboundSchema = EmploymentSchemasPayPeriodValue$inboundSchema;
    /** @deprecated use `EmploymentSchemasPayPeriodValue$outboundSchema` instead. */
    export const outboundSchema = EmploymentSchemasPayPeriodValue$outboundSchema;
}

/** @internal */
export const PayPeriod$inboundSchema: z.ZodType<PayPeriod, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemasPayPeriod4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasPayPeriodValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type PayPeriod$Outbound = {
    source_value?:
        | EmploymentSchemasPayPeriod4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const PayPeriod$outboundSchema: z.ZodType<PayPeriod$Outbound, z.ZodTypeDef, PayPeriod> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => EmploymentSchemasPayPeriod4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(EmploymentSchemasPayPeriodValue$outboundSchema).optional(),
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
export namespace PayPeriod$ {
    /** @deprecated use `PayPeriod$inboundSchema` instead. */
    export const inboundSchema = PayPeriod$inboundSchema;
    /** @deprecated use `PayPeriod$outboundSchema` instead. */
    export const outboundSchema = PayPeriod$outboundSchema;
    /** @deprecated use `PayPeriod$Outbound` instead. */
    export type Outbound = PayPeriod$Outbound;
}

/** @internal */
export const Employment$inboundSchema: z.ZodType<Employment, z.ZodTypeDef, unknown> = z
    .object({
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        effective_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        employee_id: z.nullable(z.string()).optional(),
        employment_contract_type: z
            .nullable(z.lazy(() => EmploymentEmploymentContractType$inboundSchema))
            .optional(),
        employment_type: z
            .nullable(z.lazy(() => EmploymentEmploymentType$inboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        job_title: z.nullable(z.string()).optional(),
        pay_currency: z.nullable(z.string()).optional(),
        pay_frequency: z.nullable(z.lazy(() => PayFrequency$inboundSchema)).optional(),
        pay_period: z.nullable(z.lazy(() => PayPeriod$inboundSchema)).optional(),
        pay_rate: z.nullable(z.string()).optional(),
        remote_employee_id: z.nullable(z.string()).optional(),
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
            effective_date: "effectiveDate",
            employee_id: "employeeId",
            employment_contract_type: "employmentContractType",
            employment_type: "employmentType",
            job_title: "jobTitle",
            pay_currency: "payCurrency",
            pay_frequency: "payFrequency",
            pay_period: "payPeriod",
            pay_rate: "payRate",
            remote_employee_id: "remoteEmployeeId",
            remote_id: "remoteId",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type Employment$Outbound = {
    created_at?: string | null | undefined;
    effective_date?: string | null | undefined;
    employee_id?: string | null | undefined;
    employment_contract_type?: EmploymentEmploymentContractType$Outbound | null | undefined;
    employment_type?: EmploymentEmploymentType$Outbound | null | undefined;
    id?: string | null | undefined;
    job_title?: string | null | undefined;
    pay_currency?: string | null | undefined;
    pay_frequency?: PayFrequency$Outbound | null | undefined;
    pay_period?: PayPeriod$Outbound | null | undefined;
    pay_rate?: string | null | undefined;
    remote_employee_id?: string | null | undefined;
    remote_id?: string | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const Employment$outboundSchema: z.ZodType<Employment$Outbound, z.ZodTypeDef, Employment> = z
    .object({
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        effectiveDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        employeeId: z.nullable(z.string()).optional(),
        employmentContractType: z
            .nullable(z.lazy(() => EmploymentEmploymentContractType$outboundSchema))
            .optional(),
        employmentType: z
            .nullable(z.lazy(() => EmploymentEmploymentType$outboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        jobTitle: z.nullable(z.string()).optional(),
        payCurrency: z.nullable(z.string()).optional(),
        payFrequency: z.nullable(z.lazy(() => PayFrequency$outboundSchema)).optional(),
        payPeriod: z.nullable(z.lazy(() => PayPeriod$outboundSchema)).optional(),
        payRate: z.nullable(z.string()).optional(),
        remoteEmployeeId: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            effectiveDate: "effective_date",
            employeeId: "employee_id",
            employmentContractType: "employment_contract_type",
            employmentType: "employment_type",
            jobTitle: "job_title",
            payCurrency: "pay_currency",
            payFrequency: "pay_frequency",
            payPeriod: "pay_period",
            payRate: "pay_rate",
            remoteEmployeeId: "remote_employee_id",
            remoteId: "remote_id",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Employment$ {
    /** @deprecated use `Employment$inboundSchema` instead. */
    export const inboundSchema = Employment$inboundSchema;
    /** @deprecated use `Employment$outboundSchema` instead. */
    export const outboundSchema = Employment$outboundSchema;
    /** @deprecated use `Employment$Outbound` instead. */
    export type Outbound = Employment$Outbound;
}
