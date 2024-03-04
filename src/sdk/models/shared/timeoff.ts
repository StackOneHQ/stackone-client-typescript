/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type TimeOff4 = {};

export type TimeOffSourceValue = TimeOff4 | string | number | boolean;

export enum TimeOffValue {
    Approved = "approved",
    Cancelled = "cancelled",
    Rejected = "rejected",
    Pending = "pending",
    UnmappedValue = "unmapped_value",
}

/**
 * The status of the time off request
 */
export type TimeOffStatus = {
    sourceValue?: TimeOff4 | string | number | boolean | null | undefined;
    value?: TimeOffValue | null | undefined;
};

export type TimeOffSchemas4 = {};

export type TimeOffSchemasSourceValue = TimeOffSchemas4 | string | number | boolean;

export enum TimeOffSchemasValue {
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
export type TimeOffType = {
    sourceValue?: TimeOffSchemas4 | string | number | boolean | null | undefined;
    value?: TimeOffSchemasValue | null | undefined;
};

export type TimeOff = {
    /**
     * The approver ID
     */
    approverId?: string | null | undefined;
    /**
     * The created date of the time off request
     */
    createdDate?: Date | null | undefined;
    /**
     * The employee ID
     */
    employeeId?: string | null | undefined;
    /**
     * The end date of the time off request
     */
    endDate?: Date | null | undefined;
    /**
     * The unique ID of the time off request
     */
    id?: string | null | undefined;
    /**
     * The start date of the time off request
     */
    startDate?: Date | null | undefined;
    /**
     * The status of the time off request
     */
    status?: TimeOffStatus | null | undefined;
    /**
     * The type of the time off request
     */
    type?: TimeOffType | null | undefined;
    /**
     * The updated date of the time off request
     */
    updatedDate?: Date | null | undefined;
};

/** @internal */
export namespace TimeOff4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TimeOff4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOff4> = z.object({});
}

/** @internal */
export namespace TimeOffSourceValue$ {
    export type Inbound = TimeOff4$.Inbound | string | number | boolean;

    export type Outbound = TimeOff4$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<TimeOffSourceValue, z.ZodTypeDef, Inbound> = z.union([
        z.lazy(() => TimeOff4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffSourceValue> = z.union([
        z.lazy(() => TimeOff4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export const TimeOffValue$ = z.nativeEnum(TimeOffValue);

/** @internal */
export namespace TimeOffStatus$ {
    export type Inbound = {
        source_value?: TimeOff4$.Inbound | string | number | boolean | null | undefined;
        value?: TimeOffValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<TimeOffStatus, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => TimeOff4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(TimeOffValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: TimeOff4$.Outbound | string | number | boolean | null | undefined;
        value?: TimeOffValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => TimeOff4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(TimeOffValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace TimeOffSchemas4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<TimeOffSchemas4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffSchemas4> = z.object({});
}

/** @internal */
export namespace TimeOffSchemasSourceValue$ {
    export type Inbound = TimeOffSchemas4$.Inbound | string | number | boolean;

    export type Outbound = TimeOffSchemas4$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<TimeOffSchemasSourceValue, z.ZodTypeDef, Inbound> =
        z.union([
            z.lazy(() => TimeOffSchemas4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffSchemasSourceValue> =
        z.union([
            z.lazy(() => TimeOffSchemas4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export const TimeOffSchemasValue$ = z.nativeEnum(TimeOffSchemasValue);

/** @internal */
export namespace TimeOffType$ {
    export type Inbound = {
        source_value?: TimeOffSchemas4$.Inbound | string | number | boolean | null | undefined;
        value?: TimeOffSchemasValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<TimeOffType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => TimeOffSchemas4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(TimeOffSchemasValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: TimeOffSchemas4$.Outbound | string | number | boolean | null | undefined;
        value?: TimeOffSchemasValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOffType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => TimeOffSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(TimeOffSchemasValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace TimeOff$ {
    export type Inbound = {
        approver_id?: string | null | undefined;
        created_date?: string | null | undefined;
        employee_id?: string | null | undefined;
        end_date?: string | null | undefined;
        id?: string | null | undefined;
        start_date?: string | null | undefined;
        status?: TimeOffStatus$.Inbound | null | undefined;
        type?: TimeOffType$.Inbound | null | undefined;
        updated_date?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<TimeOff, z.ZodTypeDef, Inbound> = z
        .object({
            approver_id: z.nullable(z.string()).optional(),
            created_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            employee_id: z.nullable(z.string()).optional(),
            end_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            start_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            status: z.nullable(z.lazy(() => TimeOffStatus$.inboundSchema)).optional(),
            type: z.nullable(z.lazy(() => TimeOffType$.inboundSchema)).optional(),
            updated_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.approver_id === undefined ? null : { approverId: v.approver_id }),
                ...(v.created_date === undefined ? null : { createdDate: v.created_date }),
                ...(v.employee_id === undefined ? null : { employeeId: v.employee_id }),
                ...(v.end_date === undefined ? null : { endDate: v.end_date }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.start_date === undefined ? null : { startDate: v.start_date }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updated_date === undefined ? null : { updatedDate: v.updated_date }),
            };
        });

    export type Outbound = {
        approver_id?: string | null | undefined;
        created_date?: string | null | undefined;
        employee_id?: string | null | undefined;
        end_date?: string | null | undefined;
        id?: string | null | undefined;
        start_date?: string | null | undefined;
        status?: TimeOffStatus$.Outbound | null | undefined;
        type?: TimeOffType$.Outbound | null | undefined;
        updated_date?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TimeOff> = z
        .object({
            approverId: z.nullable(z.string()).optional(),
            createdDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            employeeId: z.nullable(z.string()).optional(),
            endDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            status: z.nullable(z.lazy(() => TimeOffStatus$.outboundSchema)).optional(),
            type: z.nullable(z.lazy(() => TimeOffType$.outboundSchema)).optional(),
            updatedDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.approverId === undefined ? null : { approver_id: v.approverId }),
                ...(v.createdDate === undefined ? null : { created_date: v.createdDate }),
                ...(v.employeeId === undefined ? null : { employee_id: v.employeeId }),
                ...(v.endDate === undefined ? null : { end_date: v.endDate }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.startDate === undefined ? null : { start_date: v.startDate }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.updatedDate === undefined ? null : { updated_date: v.updatedDate }),
            };
        });
}
