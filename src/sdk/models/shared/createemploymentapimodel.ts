/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export type CreateEmploymentApiModel4 = {};

export type CreateEmploymentApiModelSourceValue =
  | CreateEmploymentApiModel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateEmploymentApiModelValue {
  FullTime = "full_time",
  Shifts = "shifts",
  PartTime = "part_time",
  UnmappedValue = "unmapped_value",
}
export type CreateEmploymentApiModelValueOpen = OpenEnum<
  typeof CreateEmploymentApiModelValue
>;

/**
 * The employment work schedule type (e.g., full-time, part-time)
 */
export type EmploymentContractType = {
  sourceValue?:
    | CreateEmploymentApiModel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateEmploymentApiModelValueOpen | null | undefined;
};

export type CreateEmploymentApiModelSchemas4 = {};

/**
 * The source value of the employment type.
 */
export type CreateEmploymentApiModelSchemasSourceValue =
  | CreateEmploymentApiModelSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the employment.
 */
export enum CreateEmploymentApiModelSchemasValue {
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
export type CreateEmploymentApiModelSchemasValueOpen = OpenEnum<
  typeof CreateEmploymentApiModelSchemasValue
>;

/**
 * The type of employment (e.g., contractor, permanent)
 */
export type EmploymentType = {
  /**
   * The source value of the employment type.
   */
  sourceValue?:
    | CreateEmploymentApiModelSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the employment.
   */
  value?: CreateEmploymentApiModelSchemasValueOpen | null | undefined;
};

export type CreateEmploymentApiModelSchemasPayFrequency4 = {};

/**
 * The source value of the pay frequency.
 */
export type CreateEmploymentApiModelSchemasPayFrequencySourceValue =
  | CreateEmploymentApiModelSchemasPayFrequency4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The pay frequency of the job postings.
 */
export enum CreateEmploymentApiModelSchemasPayFrequencyValue {
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
export type CreateEmploymentApiModelSchemasPayFrequencyValueOpen = OpenEnum<
  typeof CreateEmploymentApiModelSchemasPayFrequencyValue
>;

/**
 * The pay frequency
 */
export type PayFrequency = {
  /**
   * The source value of the pay frequency.
   */
  sourceValue?:
    | CreateEmploymentApiModelSchemasPayFrequency4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The pay frequency of the job postings.
   */
  value?:
    | CreateEmploymentApiModelSchemasPayFrequencyValueOpen
    | null
    | undefined;
};

export type CreateEmploymentApiModelSchemasPayPeriod4 = {};

/**
 * The source value of the pay period.
 */
export type CreateEmploymentApiModelSchemasPayPeriodSourceValue =
  | CreateEmploymentApiModelSchemasPayPeriod4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The pay period of the job postings.
 */
export enum CreateEmploymentApiModelSchemasPayPeriodValue {
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
export type CreateEmploymentApiModelSchemasPayPeriodValueOpen = OpenEnum<
  typeof CreateEmploymentApiModelSchemasPayPeriodValue
>;

/**
 * The pay period
 */
export type PayPeriod = {
  /**
   * The source value of the pay period.
   */
  sourceValue?:
    | CreateEmploymentApiModelSchemasPayPeriod4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The pay period of the job postings.
   */
  value?: CreateEmploymentApiModelSchemasPayPeriodValueOpen | null | undefined;
};

export type CreateEmploymentApiModel = {
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
  employmentContractType?: EmploymentContractType | null | undefined;
  /**
   * The type of employment (e.g., contractor, permanent)
   */
  employmentType?: EmploymentType | null | undefined;
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
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The updated_at date
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const CreateEmploymentApiModel4$inboundSchema: z.ZodType<
  CreateEmploymentApiModel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateEmploymentApiModel4$Outbound = {};

/** @internal */
export const CreateEmploymentApiModel4$outboundSchema: z.ZodType<
  CreateEmploymentApiModel4$Outbound,
  z.ZodTypeDef,
  CreateEmploymentApiModel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModel4$ {
  /** @deprecated use `CreateEmploymentApiModel4$inboundSchema` instead. */
  export const inboundSchema = CreateEmploymentApiModel4$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModel4$outboundSchema` instead. */
  export const outboundSchema = CreateEmploymentApiModel4$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModel4$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModel4$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSourceValue$inboundSchema: z.ZodType<
  CreateEmploymentApiModelSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateEmploymentApiModel4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateEmploymentApiModelSourceValue$Outbound =
  | CreateEmploymentApiModel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateEmploymentApiModelSourceValue$outboundSchema: z.ZodType<
  CreateEmploymentApiModelSourceValue$Outbound,
  z.ZodTypeDef,
  CreateEmploymentApiModelSourceValue
> = z.union([
  z.lazy(() => CreateEmploymentApiModel4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSourceValue$ {
  /** @deprecated use `CreateEmploymentApiModelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSourceValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSourceValue$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSourceValue$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModelSourceValue$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelValue$inboundSchema: z.ZodType<
  CreateEmploymentApiModelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateEmploymentApiModelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateEmploymentApiModelValue$outboundSchema: z.ZodType<
  CreateEmploymentApiModelValueOpen,
  z.ZodTypeDef,
  CreateEmploymentApiModelValueOpen
> = z.union([
  z.nativeEnum(CreateEmploymentApiModelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelValue$ {
  /** @deprecated use `CreateEmploymentApiModelValue$inboundSchema` instead. */
  export const inboundSchema = CreateEmploymentApiModelValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelValue$outboundSchema` instead. */
  export const outboundSchema = CreateEmploymentApiModelValue$outboundSchema;
}

/** @internal */
export const EmploymentContractType$inboundSchema: z.ZodType<
  EmploymentContractType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateEmploymentApiModelValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type EmploymentContractType$Outbound = {
  source_value?:
    | CreateEmploymentApiModel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const EmploymentContractType$outboundSchema: z.ZodType<
  EmploymentContractType$Outbound,
  z.ZodTypeDef,
  EmploymentContractType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateEmploymentApiModelValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentContractType$ {
  /** @deprecated use `EmploymentContractType$inboundSchema` instead. */
  export const inboundSchema = EmploymentContractType$inboundSchema;
  /** @deprecated use `EmploymentContractType$outboundSchema` instead. */
  export const outboundSchema = EmploymentContractType$outboundSchema;
  /** @deprecated use `EmploymentContractType$Outbound` instead. */
  export type Outbound = EmploymentContractType$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemas4$inboundSchema: z.ZodType<
  CreateEmploymentApiModelSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateEmploymentApiModelSchemas4$Outbound = {};

/** @internal */
export const CreateEmploymentApiModelSchemas4$outboundSchema: z.ZodType<
  CreateEmploymentApiModelSchemas4$Outbound,
  z.ZodTypeDef,
  CreateEmploymentApiModelSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemas4$ {
  /** @deprecated use `CreateEmploymentApiModelSchemas4$inboundSchema` instead. */
  export const inboundSchema = CreateEmploymentApiModelSchemas4$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemas4$outboundSchema` instead. */
  export const outboundSchema = CreateEmploymentApiModelSchemas4$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemas4$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModelSchemas4$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasSourceValue$inboundSchema:
  z.ZodType<CreateEmploymentApiModelSchemasSourceValue, z.ZodTypeDef, unknown> =
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]);

/** @internal */
export type CreateEmploymentApiModelSchemasSourceValue$Outbound =
  | CreateEmploymentApiModelSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateEmploymentApiModelSchemasSourceValue$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasSourceValue
  > = z.union([
    z.lazy(() => CreateEmploymentApiModelSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasSourceValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasSourceValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasSourceValue$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasSourceValue$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModelSchemasSourceValue$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasValue$inboundSchema: z.ZodType<
  CreateEmploymentApiModelSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateEmploymentApiModelSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateEmploymentApiModelSchemasValue$outboundSchema: z.ZodType<
  CreateEmploymentApiModelSchemasValueOpen,
  z.ZodTypeDef,
  CreateEmploymentApiModelSchemasValueOpen
> = z.union([
  z.nativeEnum(CreateEmploymentApiModelSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasValue$outboundSchema;
}

/** @internal */
export const EmploymentType$inboundSchema: z.ZodType<
  EmploymentType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateEmploymentApiModelSchemasValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type EmploymentType$Outbound = {
  source_value?:
    | CreateEmploymentApiModelSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const EmploymentType$outboundSchema: z.ZodType<
  EmploymentType$Outbound,
  z.ZodTypeDef,
  EmploymentType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateEmploymentApiModelSchemasValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentType$ {
  /** @deprecated use `EmploymentType$inboundSchema` instead. */
  export const inboundSchema = EmploymentType$inboundSchema;
  /** @deprecated use `EmploymentType$outboundSchema` instead. */
  export const outboundSchema = EmploymentType$outboundSchema;
  /** @deprecated use `EmploymentType$Outbound` instead. */
  export type Outbound = EmploymentType$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequency4$inboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequency4,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type CreateEmploymentApiModelSchemasPayFrequency4$Outbound = {};

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequency4$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequency4$Outbound,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayFrequency4
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayFrequency4$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequency4$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayFrequency4$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequency4$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayFrequency4$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequency4$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModelSchemasPayFrequency4$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequencySourceValue$inboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequencySourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => CreateEmploymentApiModelSchemasPayFrequency4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type CreateEmploymentApiModelSchemasPayFrequencySourceValue$Outbound =
  | CreateEmploymentApiModelSchemasPayFrequency4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequencySourceValue$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequencySourceValue$Outbound,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayFrequencySourceValue
  > = z.union([
    z.lazy(() => CreateEmploymentApiModelSchemasPayFrequency4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayFrequencySourceValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequencySourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayFrequencySourceValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequencySourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayFrequencySourceValue$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequencySourceValue$Outbound` instead. */
  export type Outbound =
    CreateEmploymentApiModelSchemasPayFrequencySourceValue$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequencyValue$inboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequencyValueOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(CreateEmploymentApiModelSchemasPayFrequencyValue),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const CreateEmploymentApiModelSchemasPayFrequencyValue$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayFrequencyValueOpen,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayFrequencyValueOpen
  > = z.union([
    z.nativeEnum(CreateEmploymentApiModelSchemasPayFrequencyValue),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayFrequencyValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequencyValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayFrequencyValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayFrequencyValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayFrequencyValue$outboundSchema;
}

/** @internal */
export const PayFrequency$inboundSchema: z.ZodType<
  PayFrequency,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemasPayFrequency4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(
    CreateEmploymentApiModelSchemasPayFrequencyValue$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type PayFrequency$Outbound = {
  source_value?:
    | CreateEmploymentApiModelSchemasPayFrequency4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const PayFrequency$outboundSchema: z.ZodType<
  PayFrequency$Outbound,
  z.ZodTypeDef,
  PayFrequency
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemasPayFrequency4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(
    CreateEmploymentApiModelSchemasPayFrequencyValue$outboundSchema,
  ).optional(),
}).transform((v) => {
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
export const CreateEmploymentApiModelSchemasPayPeriod4$inboundSchema: z.ZodType<
  CreateEmploymentApiModelSchemasPayPeriod4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateEmploymentApiModelSchemasPayPeriod4$Outbound = {};

/** @internal */
export const CreateEmploymentApiModelSchemasPayPeriod4$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayPeriod4$Outbound,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayPeriod4
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayPeriod4$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriod4$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayPeriod4$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriod4$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayPeriod4$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriod4$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModelSchemasPayPeriod4$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasPayPeriodSourceValue$inboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayPeriodSourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => CreateEmploymentApiModelSchemasPayPeriod4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type CreateEmploymentApiModelSchemasPayPeriodSourceValue$Outbound =
  | CreateEmploymentApiModelSchemasPayPeriod4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateEmploymentApiModelSchemasPayPeriodSourceValue$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayPeriodSourceValue$Outbound,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayPeriodSourceValue
  > = z.union([
    z.lazy(() => CreateEmploymentApiModelSchemasPayPeriod4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayPeriodSourceValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriodSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayPeriodSourceValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriodSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayPeriodSourceValue$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriodSourceValue$Outbound` instead. */
  export type Outbound =
    CreateEmploymentApiModelSchemasPayPeriodSourceValue$Outbound;
}

/** @internal */
export const CreateEmploymentApiModelSchemasPayPeriodValue$inboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayPeriodValueOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(CreateEmploymentApiModelSchemasPayPeriodValue),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const CreateEmploymentApiModelSchemasPayPeriodValue$outboundSchema:
  z.ZodType<
    CreateEmploymentApiModelSchemasPayPeriodValueOpen,
    z.ZodTypeDef,
    CreateEmploymentApiModelSchemasPayPeriodValueOpen
  > = z.union([
    z.nativeEnum(CreateEmploymentApiModelSchemasPayPeriodValue),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModelSchemasPayPeriodValue$ {
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriodValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmploymentApiModelSchemasPayPeriodValue$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModelSchemasPayPeriodValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmploymentApiModelSchemasPayPeriodValue$outboundSchema;
}

/** @internal */
export const PayPeriod$inboundSchema: z.ZodType<
  PayPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemasPayPeriod4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateEmploymentApiModelSchemasPayPeriodValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type PayPeriod$Outbound = {
  source_value?:
    | CreateEmploymentApiModelSchemasPayPeriod4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const PayPeriod$outboundSchema: z.ZodType<
  PayPeriod$Outbound,
  z.ZodTypeDef,
  PayPeriod
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateEmploymentApiModelSchemasPayPeriod4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(
    CreateEmploymentApiModelSchemasPayPeriodValue$outboundSchema,
  ).optional(),
}).transform((v) => {
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
export const CreateEmploymentApiModel$inboundSchema: z.ZodType<
  CreateEmploymentApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  effective_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  employee_id: z.nullable(z.string()).optional(),
  employment_contract_type: z.nullable(
    z.lazy(() => EmploymentContractType$inboundSchema),
  ).optional(),
  employment_type: z.nullable(z.lazy(() => EmploymentType$inboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  job_title: z.nullable(z.string()).optional(),
  pay_currency: z.nullable(z.string()).optional(),
  pay_frequency: z.nullable(z.lazy(() => PayFrequency$inboundSchema))
    .optional(),
  pay_period: z.nullable(z.lazy(() => PayPeriod$inboundSchema)).optional(),
  pay_rate: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "effective_date": "effectiveDate",
    "employee_id": "employeeId",
    "employment_contract_type": "employmentContractType",
    "employment_type": "employmentType",
    "job_title": "jobTitle",
    "pay_currency": "payCurrency",
    "pay_frequency": "payFrequency",
    "pay_period": "payPeriod",
    "pay_rate": "payRate",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type CreateEmploymentApiModel$Outbound = {
  created_at?: string | null | undefined;
  effective_date?: string | null | undefined;
  employee_id?: string | null | undefined;
  employment_contract_type?: EmploymentContractType$Outbound | null | undefined;
  employment_type?: EmploymentType$Outbound | null | undefined;
  id?: string | null | undefined;
  job_title?: string | null | undefined;
  pay_currency?: string | null | undefined;
  pay_frequency?: PayFrequency$Outbound | null | undefined;
  pay_period?: PayPeriod$Outbound | null | undefined;
  pay_rate?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const CreateEmploymentApiModel$outboundSchema: z.ZodType<
  CreateEmploymentApiModel$Outbound,
  z.ZodTypeDef,
  CreateEmploymentApiModel
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  effectiveDate: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  employeeId: z.nullable(z.string()).optional(),
  employmentContractType: z.nullable(
    z.lazy(() => EmploymentContractType$outboundSchema),
  ).optional(),
  employmentType: z.nullable(z.lazy(() => EmploymentType$outboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  jobTitle: z.nullable(z.string()).optional(),
  payCurrency: z.nullable(z.string()).optional(),
  payFrequency: z.nullable(z.lazy(() => PayFrequency$outboundSchema))
    .optional(),
  payPeriod: z.nullable(z.lazy(() => PayPeriod$outboundSchema)).optional(),
  payRate: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
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
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmploymentApiModel$ {
  /** @deprecated use `CreateEmploymentApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateEmploymentApiModel$inboundSchema;
  /** @deprecated use `CreateEmploymentApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateEmploymentApiModel$outboundSchema;
  /** @deprecated use `CreateEmploymentApiModel$Outbound` instead. */
  export type Outbound = CreateEmploymentApiModel$Outbound;
}