/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ChannelsEnum, ChannelsEnum$ } from "./channelsenum";
import { Message, Message$ } from "./message";
import * as z from "zod";

export type Campaign4 = {};

/**
 * The source value of the schedule type.
 */
export type CampaignSourceValue = Campaign4 | string | number | boolean;

/**
 * The schedule type of the campaign.
 */
export enum CampaignValue {
    Immediate = "immediate",
    Scheduled = "scheduled",
    Recurring = "recurring",
    Custom = "custom",
    Triggered = "triggered",
}

/**
 * The schedule type
 */
export type ScheduleType = {
    /**
     * The source value of the schedule type.
     */
    sourceValue?: Campaign4 | string | number | boolean | null | undefined;
    /**
     * The schedule type of the campaign.
     */
    value?: CampaignValue | null | undefined;
};

export type CampaignSchemas4 = {};

/**
 * The source value of the Status.
 */
export type CampaignSchemasSourceValue = CampaignSchemas4 | string | number | boolean;

/**
 * The Status of the campaign.
 */
export enum CampaignSchemasValue {
    Draft = "draft",
    Archived = "archived",
    Live = "live",
}

/**
 * Status of the Campaign
 */
export type Status = {
    /**
     * The source value of the Status.
     */
    sourceValue?: CampaignSchemas4 | string | number | boolean | null | undefined;
    /**
     * The Status of the campaign.
     */
    value?: CampaignSchemasValue | null | undefined;
};

export type Campaign = {
    archived?: boolean | null | undefined;
    /**
     * channels of the Campaign
     */
    channels?: Array<ChannelsEnum> | null | undefined;
    /**
     * The created_at date
     */
    createdAt?: Date | null | undefined;
    description?: string | null | undefined;
    draft?: boolean | null | undefined;
    /**
     * The first_sent_at date
     */
    firstSentAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The last_sent_at date
     */
    lastSentAt?: Date | null | undefined;
    messages?: Array<Message> | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The schedule type
     */
    scheduleType?: ScheduleType | null | undefined;
    /**
     * Status of the Campaign
     */
    status?: Status | null | undefined;
    tags?: Array<string> | null | undefined;
    /**
     * The updated_at date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Campaign4$ {
    export const inboundSchema: z.ZodType<Campaign4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Campaign4> = z.object({});
}

/** @internal */
export namespace CampaignSourceValue$ {
    export const inboundSchema: z.ZodType<CampaignSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Campaign4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = Campaign4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CampaignSourceValue> = z.union([
        z.lazy(() => Campaign4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace CampaignValue$ {
    export const inboundSchema = z.nativeEnum(CampaignValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ScheduleType$ {
    export const inboundSchema: z.ZodType<ScheduleType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Campaign4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CampaignValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: Campaign4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScheduleType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Campaign4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CampaignValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace CampaignSchemas4$ {
    export const inboundSchema: z.ZodType<CampaignSchemas4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CampaignSchemas4> = z.object({});
}

/** @internal */
export namespace CampaignSchemasSourceValue$ {
    export const inboundSchema: z.ZodType<CampaignSchemasSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => CampaignSchemas4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = CampaignSchemas4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CampaignSchemasSourceValue> =
        z.union([
            z.lazy(() => CampaignSchemas4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace CampaignSchemasValue$ {
    export const inboundSchema = z.nativeEnum(CampaignSchemasValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Status$ {
    export const inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => CampaignSchemas4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CampaignSchemasValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: CampaignSchemas4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Status> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => CampaignSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CampaignSchemasValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace Campaign$ {
    export const inboundSchema: z.ZodType<Campaign, z.ZodTypeDef, unknown> = z
        .object({
            archived: z.nullable(z.boolean()).optional(),
            channels: z.nullable(z.array(ChannelsEnum$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            draft: z.nullable(z.boolean()).optional(),
            first_sent_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            last_sent_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            messages: z.nullable(z.array(Message$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            schedule_type: z.nullable(z.lazy(() => ScheduleType$.inboundSchema)).optional(),
            status: z.nullable(z.lazy(() => Status$.inboundSchema)).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
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
            return {
                ...(v.archived === undefined ? null : { archived: v.archived }),
                ...(v.channels === undefined ? null : { channels: v.channels }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.draft === undefined ? null : { draft: v.draft }),
                ...(v.first_sent_at === undefined ? null : { firstSentAt: v.first_sent_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.last_sent_at === undefined ? null : { lastSentAt: v.last_sent_at }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.schedule_type === undefined ? null : { scheduleType: v.schedule_type }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        archived?: boolean | null | undefined;
        channels?: Array<ChannelsEnum$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        draft?: boolean | null | undefined;
        first_sent_at?: string | null | undefined;
        id?: string | null | undefined;
        last_sent_at?: string | null | undefined;
        messages?: Array<Message$.Outbound> | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        schedule_type?: ScheduleType$.Outbound | null | undefined;
        status?: Status$.Outbound | null | undefined;
        tags?: Array<string> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Campaign> = z
        .object({
            archived: z.nullable(z.boolean()).optional(),
            channels: z.nullable(z.array(ChannelsEnum$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            draft: z.nullable(z.boolean()).optional(),
            firstSentAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            lastSentAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            messages: z.nullable(z.array(Message$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            scheduleType: z.nullable(z.lazy(() => ScheduleType$.outboundSchema)).optional(),
            status: z.nullable(z.lazy(() => Status$.outboundSchema)).optional(),
            tags: z.nullable(z.array(z.string())).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.archived === undefined ? null : { archived: v.archived }),
                ...(v.channels === undefined ? null : { channels: v.channels }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.draft === undefined ? null : { draft: v.draft }),
                ...(v.firstSentAt === undefined ? null : { first_sent_at: v.firstSentAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lastSentAt === undefined ? null : { last_sent_at: v.lastSentAt }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.scheduleType === undefined ? null : { schedule_type: v.scheduleType }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
