/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

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

/**
 * The status of the time off request
 */
export type HrisCreateTimeOffRequestDtoStatus = {
    sourceValue?: HrisCreateTimeOffRequestDto4 | string | number | boolean | null | undefined;
    value?: HrisCreateTimeOffRequestDtoValue | null | undefined;
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
    ChildCareLeave = "child_care_leave",
}

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
    value?: HrisCreateTimeOffRequestDtoSchemasValue | null | undefined;
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
     * The start date of the time off request
     */
    startDate?: Date | null | undefined;
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
export namespace HrisCreateTimeOffRequestDto4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<HrisCreateTimeOffRequestDto4, z.ZodTypeDef, Inbound> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisCreateTimeOffRequestDto4> =
        z.object({});
}

/** @internal */
export namespace HrisCreateTimeOffRequestDtoSourceValue$ {
    export type Inbound = HrisCreateTimeOffRequestDto4$.Inbound | string | number | boolean;

    export type Outbound = HrisCreateTimeOffRequestDto4$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<
        HrisCreateTimeOffRequestDtoSourceValue,
        z.ZodTypeDef,
        Inbound
    > = z.union([
        z.lazy(() => HrisCreateTimeOffRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestDtoSourceValue
    > = z.union([
        z.lazy(() => HrisCreateTimeOffRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const HrisCreateTimeOffRequestDtoValue$ = z.nativeEnum(HrisCreateTimeOffRequestDtoValue);

/** @internal */
export namespace HrisCreateTimeOffRequestDtoStatus$ {
    export type Inbound = {
        source_value?:
            | HrisCreateTimeOffRequestDto4$.Inbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateTimeOffRequestDtoValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        HrisCreateTimeOffRequestDtoStatus,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateTimeOffRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateTimeOffRequestDtoValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | HrisCreateTimeOffRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateTimeOffRequestDtoValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestDtoStatus
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateTimeOffRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateTimeOffRequestDtoValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HrisCreateTimeOffRequestDtoSchemas4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<
        HrisCreateTimeOffRequestDtoSchemas4,
        z.ZodTypeDef,
        Inbound
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestDtoSchemas4
    > = z.object({});
}

/** @internal */
export namespace HrisCreateTimeOffRequestDtoSchemasSourceValue$ {
    export type Inbound = HrisCreateTimeOffRequestDtoSchemas4$.Inbound | string | number | boolean;

    export type Outbound =
        | HrisCreateTimeOffRequestDtoSchemas4$.Outbound
        | string
        | number
        | boolean;

    export const inboundSchema: z.ZodType<
        HrisCreateTimeOffRequestDtoSchemasSourceValue,
        z.ZodTypeDef,
        Inbound
    > = z.union([
        z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestDtoSchemasSourceValue
    > = z.union([
        z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const HrisCreateTimeOffRequestDtoSchemasValue$ = z.nativeEnum(
    HrisCreateTimeOffRequestDtoSchemasValue
);

/** @internal */
export namespace HrisCreateTimeOffRequestDtoType$ {
    export type Inbound = {
        source_value?:
            | HrisCreateTimeOffRequestDtoSchemas4$.Inbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateTimeOffRequestDtoSchemasValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<HrisCreateTimeOffRequestDtoType, z.ZodTypeDef, Inbound> =
        z
            .object({
                source_value: z
                    .nullable(
                        z.union([
                            z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$.inboundSchema),
                            z.string(),
                            z.number(),
                            z.boolean(),
                        ])
                    )
                    .optional(),
                value: z.nullable(HrisCreateTimeOffRequestDtoSchemasValue$).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                    ...(v.value === undefined ? null : { value: v.value }),
                };
            });

    export type Outbound = {
        source_value?:
            | HrisCreateTimeOffRequestDtoSchemas4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: HrisCreateTimeOffRequestDtoSchemasValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateTimeOffRequestDtoType
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateTimeOffRequestDtoSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateTimeOffRequestDtoSchemasValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HrisCreateTimeOffRequestDto$ {
    export type Inbound = {
        approver_id?: string | null | undefined;
        employee_id?: string | null | undefined;
        end_date?: string | null | undefined;
        start_date?: string | null | undefined;
        status?: HrisCreateTimeOffRequestDtoStatus$.Inbound | null | undefined;
        type?: HrisCreateTimeOffRequestDtoType$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<HrisCreateTimeOffRequestDto, z.ZodTypeDef, Inbound> = z
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
            start_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            status: z
                .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoStatus$.inboundSchema))
                .optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoType$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.approver_id === undefined ? null : { approverId: v.approver_id }),
                ...(v.employee_id === undefined ? null : { employeeId: v.employee_id }),
                ...(v.end_date === undefined ? null : { endDate: v.end_date }),
                ...(v.start_date === undefined ? null : { startDate: v.start_date }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        approver_id?: string | null | undefined;
        employee_id?: string | null | undefined;
        end_date?: string | null | undefined;
        start_date?: string | null | undefined;
        status?: HrisCreateTimeOffRequestDtoStatus$.Outbound | null | undefined;
        type?: HrisCreateTimeOffRequestDtoType$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisCreateTimeOffRequestDto> = z
        .object({
            approverId: z.nullable(z.string()).optional(),
            employeeId: z.nullable(z.string()).optional(),
            endDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            status: z
                .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoStatus$.outboundSchema))
                .optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateTimeOffRequestDtoType$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.approverId === undefined ? null : { approver_id: v.approverId }),
                ...(v.employeeId === undefined ? null : { employee_id: v.employeeId }),
                ...(v.endDate === undefined ? null : { end_date: v.endDate }),
                ...(v.startDate === undefined ? null : { start_date: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
