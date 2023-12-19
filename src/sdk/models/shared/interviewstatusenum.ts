/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The status of the interview.
 */
export enum InterviewStatusEnumValue {
    Unscheduled = "unscheduled",
    Scheduled = "scheduled",
    Completed = "completed",
    Cancelled = "cancelled",
    PendingFeedback = "pending_feedback",
    UnmappedValue = "unmapped_value",
}

export type InterviewStatusEnum = {
    /**
     * The source value of the interview status.
     */
    sourceValue: string;
    /**
     * The status of the interview.
     */
    value: InterviewStatusEnumValue;
};

/** @internal */
export const InterviewStatusEnumValue$ = z.nativeEnum(InterviewStatusEnumValue);

/** @internal */
export namespace InterviewStatusEnum$ {
    export type Inbound = {
        source_value: string;
        value: InterviewStatusEnumValue;
    };

    export const inboundSchema: z.ZodType<InterviewStatusEnum, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.string(),
            value: InterviewStatusEnumValue$,
        })
        .transform((v) => {
            return {
                sourceValue: v.source_value,
                value: v.value,
            };
        });

    export type Outbound = {
        source_value: string;
        value: InterviewStatusEnumValue;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewStatusEnum> = z
        .object({
            sourceValue: z.string(),
            value: InterviewStatusEnumValue$,
        })
        .transform((v) => {
            return {
                source_value: v.sourceValue,
                value: v.value,
            };
        });
}
