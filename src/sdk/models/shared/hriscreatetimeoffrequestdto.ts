/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export enum HrisCreateTimeOffRequestDto2 {
    True = "true",
    False = "false",
}

/**
 * True if the end of the time off request ends half way through the day
 */
export type EndHalfDay = boolean | HrisCreateTimeOffRequestDto2;

export enum HrisCreateTimeOffRequestDtoSchemas2 {
    True = "true",
    False = "false",
}

/**
 * True if the start of the time off request begins half way through the day
 */
export type StartHalfDay = boolean | HrisCreateTimeOffRequestDtoSchemas2;

export type HrisCreateTimeOffRequestDto4 = {};

export type HrisCreateTimeOffRequestDtoSourceValue =
    | HrisCreateTimeOffRequestDto4
    | string
    | number
    | boolean;

export enum HrisCreateTimeOffRequestDtoValue {
    Approved = "approved",
    Cancelled = "cancelled",
    Rejected = "rejected",
    Pending = "pending",
    UnmappedValue = "unmapped_value",
}
export type HrisCreateTimeOffRequestDtoValueOpen = OpenEnum<
    typeof HrisCreateTimeOffRequestDtoValue
>;

/**
 * The status of the time off request
 */
export type HrisCreateTimeOffRequestDtoStatus = {
    sourceValue?: HrisCreateTimeOffRequestDto4 | string | number | boolean | null | undefined;
    value?: HrisCreateTimeOffRequestDtoValueOpen | null | undefined;
};

export type HrisCreateTimeOffRequestDtoSchemas4 = {};

export type HrisCreateTimeOffRequestDtoSchemasSourceValue =
    | HrisCreateTimeOffRequestDtoSchemas4
    | string
    | number
    | boolean;

export enum HrisCreateTimeOffRequestDtoSchemasValue {
    Sick = "sick",
    UnmappedValue = "unmapped_value",
    Vacation = "vacation",
    LongTermDisability = "long_term_disability",
    ShortTermDisability = "short_term_disability",
    Absent = "absent",
    CompTime = "comp_time",
    Training = "training",
    AnnualLeave = "annual_leave",
    LeaveOfAbsence = "leave_of_absence",
    Break = "break",
    ChildCareLeave = "child_care_leave",
}
export type HrisCreateTimeOffRequestDtoSchemasValueOpen = OpenEnum<
    typeof HrisCreateTimeOffRequestDtoSchemasValue
>;

/**
 * The type of the time off request
 */
export type HrisCreateTimeOffRequestDtoType = {
    sourceValue?:
        | HrisCreateTimeOffRequestDtoSchemas4
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: HrisCreateTimeOffRequestDtoSchemasValueOpen | null | undefined;
};

export type HrisCreateTimeOffRequestDto = {
    /**
     * The approver ID
     */
    approverId?: string | null | undefined;
    /**
     * The employee ID
     */
    employeeId?: string | null | undefined;
    /**
     * The end date of the time off request
     */
    endDate?: Date | null | undefined;
    /**
     * True if the end of the time off request ends half way through the day
     */
    endHalfDay?: boolean | HrisCreateTimeOffRequestDto2 | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * The start date of the time off request
     */
    startDate?: Date | null | undefined;
    /**
     * True if the start of the time off request begins half way through the day
     */
    startHalfDay?: boolean | HrisCreateTimeOffRequestDtoSchemas2 | null | undefined;
    /**
     * The status of the time off request
     */
    status?: HrisCreateTimeOffRequestDtoStatus | null | undefined;
    /**
     * The type of the time off request
     */
    type?: HrisCreateTimeOffRequestDtoType | null | undefined;
};

/** @internal */
export const HrisCreateTimeOffRequestDto2$inboundSchema: z.ZodNativeEnum<
    typeof HrisCreateTimeOffRequestDto2
> = z.nativeEnum(HrisCreateTimeOffRequestDto2);

/** @internal */
export const HrisCreateTimeOffRequestDto2$outboundSchema: z.ZodNativeEnum<
    typeof HrisCreateTimeOffRequestDto2
> = HrisCreateTimeOffRequestDto2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDto2$ {
    /** @deprecated use `HrisCreateTimeOffRequestDto2$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDto2$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDto2$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDto2$outboundSchema;
}

/** @internal */
export const EndHalfDay$inboundSchema: z.ZodType<EndHalfDay, z.ZodTypeDef, unknown> = z.union([
    z.boolean(),
    HrisCreateTimeOffRequestDto2$inboundSchema,
]);

/** @internal */
export type EndHalfDay$Outbound = boolean | string;

/** @internal */
export const EndHalfDay$outboundSchema: z.ZodType<EndHalfDay$Outbound, z.ZodTypeDef, EndHalfDay> =
    z.union([z.boolean(), HrisCreateTimeOffRequestDto2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EndHalfDay$ {
    /** @deprecated use `EndHalfDay$inboundSchema` instead. */
    export const inboundSchema = EndHalfDay$inboundSchema;
    /** @deprecated use `EndHalfDay$outboundSchema` instead. */
    export const outboundSchema = EndHalfDay$outboundSchema;
    /** @deprecated use `EndHalfDay$Outbound` instead. */
    export type Outbound = EndHalfDay$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemas2$inboundSchema: z.ZodNativeEnum<
    typeof HrisCreateTimeOffRequestDtoSchemas2
> = z.nativeEnum(HrisCreateTimeOffRequestDtoSchemas2);

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemas2$outboundSchema: z.ZodNativeEnum<
    typeof HrisCreateTimeOffRequestDtoSchemas2
> = HrisCreateTimeOffRequestDtoSchemas2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoSchemas2$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemas2$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoSchemas2$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemas2$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoSchemas2$outboundSchema;
}

/** @internal */
export const StartHalfDay$inboundSchema: z.ZodType<StartHalfDay, z.ZodTypeDef, unknown> = z.union([
    z.boolean(),
    HrisCreateTimeOffRequestDtoSchemas2$inboundSchema,
]);

/** @internal */
export type StartHalfDay$Outbound = boolean | string;

/** @internal */
export const StartHalfDay$outboundSchema: z.ZodType<
    StartHalfDay$Outbound,
    z.ZodTypeDef,
    StartHalfDay
> = z.union([z.boolean(), HrisCreateTimeOffRequestDtoSchemas2$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartHalfDay$ {
    /** @deprecated use `StartHalfDay$inboundSchema` instead. */
    export const inboundSchema = StartHalfDay$inboundSchema;
    /** @deprecated use `StartHalfDay$outboundSchema` instead. */
    export const outboundSchema = StartHalfDay$outboundSchema;
    /** @deprecated use `StartHalfDay$Outbound` instead. */
    export type Outbound = StartHalfDay$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDto4$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDto4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type HrisCreateTimeOffRequestDto4$Outbound = {};

/** @internal */
export const HrisCreateTimeOffRequestDto4$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDto4$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDto4$ {
    /** @deprecated use `HrisCreateTimeOffRequestDto4$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDto4$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDto4$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDto4$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDto4$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDto4$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSourceValue$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => HrisCreateTimeOffRequestDto4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type HrisCreateTimeOffRequestDtoSourceValue$Outbound =
    | HrisCreateTimeOffRequestDto4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const HrisCreateTimeOffRequestDtoSourceValue$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSourceValue$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoSourceValue
> = z.union([
    z.lazy(() => HrisCreateTimeOffRequestDto4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoSourceValue$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoSourceValue$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoSourceValue$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSourceValue$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoSourceValue$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSourceValue$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDtoSourceValue$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoValue$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(HrisCreateTimeOffRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const HrisCreateTimeOffRequestDtoValue$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoValueOpen,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoValueOpen
> = z.union([
    z.nativeEnum(HrisCreateTimeOffRequestDtoValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoValue$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoValue$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoValue$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoValue$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoValue$outboundSchema;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoStatus$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoStatus,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => HrisCreateTimeOffRequestDto4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(HrisCreateTimeOffRequestDtoValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type HrisCreateTimeOffRequestDtoStatus$Outbound = {
    source_value?:
        | HrisCreateTimeOffRequestDto4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const HrisCreateTimeOffRequestDtoStatus$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoStatus$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoStatus
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => HrisCreateTimeOffRequestDto4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(HrisCreateTimeOffRequestDtoValue$outboundSchema).optional(),
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
export namespace HrisCreateTimeOffRequestDtoStatus$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoStatus$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoStatus$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoStatus$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoStatus$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoStatus$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDtoStatus$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemas4$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemas4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type HrisCreateTimeOffRequestDtoSchemas4$Outbound = {};

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemas4$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemas4$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoSchemas4$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemas4$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoSchemas4$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemas4$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoSchemas4$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemas4$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDtoSchemas4$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemasSourceValue$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemasSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type HrisCreateTimeOffRequestDtoSchemasSourceValue$Outbound =
    | HrisCreateTimeOffRequestDtoSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemasSourceValue$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoSchemasSourceValue
> = z.union([
    z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoSchemasSourceValue$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemasSourceValue$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoSchemasSourceValue$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemasSourceValue$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoSchemasSourceValue$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemasSourceValue$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDtoSchemasSourceValue$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemasValue$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(HrisCreateTimeOffRequestDtoSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemasValue$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoSchemasValueOpen,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoSchemasValueOpen
> = z.union([
    z.nativeEnum(HrisCreateTimeOffRequestDtoSchemasValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDtoSchemasValue$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemasValue$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoSchemasValue$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoSchemasValue$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoSchemasValue$outboundSchema;
}

/** @internal */
export const HrisCreateTimeOffRequestDtoType$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(HrisCreateTimeOffRequestDtoSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type HrisCreateTimeOffRequestDtoType$Outbound = {
    source_value?:
        | HrisCreateTimeOffRequestDtoSchemas4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const HrisCreateTimeOffRequestDtoType$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDtoType$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDtoType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(HrisCreateTimeOffRequestDtoSchemasValue$outboundSchema).optional(),
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
export namespace HrisCreateTimeOffRequestDtoType$ {
    /** @deprecated use `HrisCreateTimeOffRequestDtoType$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDtoType$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoType$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDtoType$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDtoType$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDtoType$Outbound;
}

/** @internal */
export const HrisCreateTimeOffRequestDto$inboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        approver_id: z.nullable(z.string()).optional(),
        employee_id: z.nullable(z.string()).optional(),
        end_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        end_half_day: z
            .nullable(z.union([z.boolean(), HrisCreateTimeOffRequestDto2$inboundSchema]))
            .optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        start_date: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        start_half_day: z
            .nullable(z.union([z.boolean(), HrisCreateTimeOffRequestDtoSchemas2$inboundSchema]))
            .optional(),
        status: z
            .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoStatus$inboundSchema))
            .optional(),
        type: z.nullable(z.lazy(() => HrisCreateTimeOffRequestDtoType$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            approver_id: "approverId",
            employee_id: "employeeId",
            end_date: "endDate",
            end_half_day: "endHalfDay",
            start_date: "startDate",
            start_half_day: "startHalfDay",
        });
    });

/** @internal */
export type HrisCreateTimeOffRequestDto$Outbound = {
    approver_id?: string | null | undefined;
    employee_id?: string | null | undefined;
    end_date?: string | null | undefined;
    end_half_day?: boolean | string | null | undefined;
    passthrough?: { [k: string]: any } | null | undefined;
    start_date?: string | null | undefined;
    start_half_day?: boolean | string | null | undefined;
    status?: HrisCreateTimeOffRequestDtoStatus$Outbound | null | undefined;
    type?: HrisCreateTimeOffRequestDtoType$Outbound | null | undefined;
};

/** @internal */
export const HrisCreateTimeOffRequestDto$outboundSchema: z.ZodType<
    HrisCreateTimeOffRequestDto$Outbound,
    z.ZodTypeDef,
    HrisCreateTimeOffRequestDto
> = z
    .object({
        approverId: z.nullable(z.string()).optional(),
        employeeId: z.nullable(z.string()).optional(),
        endDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        endHalfDay: z
            .nullable(z.union([z.boolean(), HrisCreateTimeOffRequestDto2$outboundSchema]))
            .optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        startHalfDay: z
            .nullable(z.union([z.boolean(), HrisCreateTimeOffRequestDtoSchemas2$outboundSchema]))
            .optional(),
        status: z
            .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoStatus$outboundSchema))
            .optional(),
        type: z.nullable(z.lazy(() => HrisCreateTimeOffRequestDtoType$outboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            approverId: "approver_id",
            employeeId: "employee_id",
            endDate: "end_date",
            endHalfDay: "end_half_day",
            startDate: "start_date",
            startHalfDay: "start_half_day",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestDto$ {
    /** @deprecated use `HrisCreateTimeOffRequestDto$inboundSchema` instead. */
    export const inboundSchema = HrisCreateTimeOffRequestDto$inboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDto$outboundSchema` instead. */
    export const outboundSchema = HrisCreateTimeOffRequestDto$outboundSchema;
    /** @deprecated use `HrisCreateTimeOffRequestDto$Outbound` instead. */
    export type Outbound = HrisCreateTimeOffRequestDto$Outbound;
}
