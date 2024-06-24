/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type InterviewPart4 = {};

/**
 * The source value of the interview type.
 */
export type InterviewPartSourceValue = InterviewPart4 | string | number | boolean;

/**
 * The type of the interview.
 */
export enum InterviewPartValue {
    Screening = "screening",
    Lunch = "lunch",
    OnSite = "on_site",
    Presentation = "presentation",
    Sell = "sell",
    Culture = "culture",
    Informal = "informal",
    Test = "test",
    Phone = "phone",
    Video = "video",
    UnmappedValue = "unmapped_value",
}
/**
 * The type of the interview.
 */
export type InterviewPartValueOpen = OpenEnum<typeof InterviewPartValue>;

export type InterviewPartType = {
    /**
     * The source value of the interview type.
     */
    sourceValue?: InterviewPart4 | string | number | boolean | null | undefined;
    /**
     * The type of the interview.
     */
    value?: InterviewPartValueOpen | null | undefined;
};

export type InterviewPart = {
    /**
     * Interview part created date
     */
    createdAt?: Date | null | undefined;
    /**
     * The specific interview part's end date
     */
    endAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The user (interviewer) IDs taking part in this specific interview.
     */
    interviewerIds?: Array<string> | null | undefined;
    /**
     * The video meeting provider used for the interview.
     */
    meetingProvider?: string | null | undefined;
    /**
     * The meeting URL for the interview - this may be populated using the underlying location if the location string extracted is a valid url.
     */
    meetingUrl?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's user (interviewer) IDs taking part in this specific interview.
     */
    remoteInterviewerIds?: Array<string> | null | undefined;
    /**
     * The specific interview part's start date
     */
    startAt?: Date | null | undefined;
    /**
     * The title of interview, usually corresponding to the title of an associated calendar event
     */
    title?: string | null | undefined;
    type?: InterviewPartType | null | undefined;
    /**
     * Interview part updated date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace InterviewPart4$ {
    export const inboundSchema: z.ZodType<InterviewPart4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewPart4> = z.object({});
}

/** @internal */
export namespace InterviewPartSourceValue$ {
    export const inboundSchema: z.ZodType<InterviewPartSourceValue, z.ZodTypeDef, unknown> =
        z.union([z.lazy(() => InterviewPart4$.inboundSchema), z.string(), z.number(), z.boolean()]);

    export type Outbound = InterviewPart4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewPartSourceValue> =
        z.union([
            z.lazy(() => InterviewPart4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace InterviewPartValue$ {
    export const inboundSchema: z.ZodType<InterviewPartValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(InterviewPartValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema: z.ZodType<
        InterviewPartValueOpen,
        z.ZodTypeDef,
        InterviewPartValueOpen
    > = z.union([
        z.nativeEnum(InterviewPartValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace InterviewPartType$ {
    export const inboundSchema: z.ZodType<InterviewPartType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => InterviewPart4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(InterviewPartValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?: InterviewPart4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewPartType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => InterviewPart4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(InterviewPartValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace InterviewPart$ {
    export const inboundSchema: z.ZodType<InterviewPart, z.ZodTypeDef, unknown> = z
        .object({
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            end_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            interviewer_ids: z.nullable(z.array(z.string())).optional(),
            meeting_provider: z.nullable(z.string()).optional(),
            meeting_url: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            remote_interviewer_ids: z.nullable(z.array(z.string())).optional(),
            start_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            title: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => InterviewPartType$.inboundSchema)).optional(),
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
                end_at: "endAt",
                interviewer_ids: "interviewerIds",
                meeting_provider: "meetingProvider",
                meeting_url: "meetingUrl",
                remote_id: "remoteId",
                remote_interviewer_ids: "remoteInterviewerIds",
                start_at: "startAt",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        end_at?: string | null | undefined;
        id?: string | null | undefined;
        interviewer_ids?: Array<string> | null | undefined;
        meeting_provider?: string | null | undefined;
        meeting_url?: string | null | undefined;
        remote_id?: string | null | undefined;
        remote_interviewer_ids?: Array<string> | null | undefined;
        start_at?: string | null | undefined;
        title?: string | null | undefined;
        type?: InterviewPartType$.Outbound | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InterviewPart> = z
        .object({
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            endAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            interviewerIds: z.nullable(z.array(z.string())).optional(),
            meetingProvider: z.nullable(z.string()).optional(),
            meetingUrl: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            remoteInterviewerIds: z.nullable(z.array(z.string())).optional(),
            startAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            title: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => InterviewPartType$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                createdAt: "created_at",
                endAt: "end_at",
                interviewerIds: "interviewer_ids",
                meetingProvider: "meeting_provider",
                meetingUrl: "meeting_url",
                remoteId: "remote_id",
                remoteInterviewerIds: "remote_interviewer_ids",
                startAt: "start_at",
                updatedAt: "updated_at",
            });
        });
}
