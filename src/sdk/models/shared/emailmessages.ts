/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type MessageContent = {
    body?: string | null | undefined;
    from?: string | null | undefined;
    preheader?: string | null | undefined;
    replyTo?: string | null | undefined;
    subject?: string | null | undefined;
};

export enum EmailMessagesValue {
    Email = "email",
    Sms = "sms",
    WebPush = "web_push",
    IosPush = "ios_push",
    AndroidPush = "android_push",
    AppPush = "app_push",
    OmniChannel = "omni_channel",
    Unknown = "unknown",
    UnmappedValue = "unmapped_value",
}

export type MessageType = {
    sourceValue?: string | null | undefined;
    value?: EmailMessagesValue | null | undefined;
};

export type EmailMessages = {
    id?: string | null | undefined;
    messageContent?: MessageContent | null | undefined;
    messageType?: MessageType | null | undefined;
    name?: string | null | undefined;
};

/** @internal */
export namespace MessageContent$ {
    export type Inbound = {
        body?: string | null | undefined;
        from?: string | null | undefined;
        preheader?: string | null | undefined;
        "reply-to"?: string | null | undefined;
        subject?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<MessageContent, z.ZodTypeDef, Inbound> = z
        .object({
            body: z.nullable(z.string()).optional(),
            from: z.nullable(z.string()).optional(),
            preheader: z.nullable(z.string()).optional(),
            "reply-to": z.nullable(z.string()).optional(),
            subject: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.body === undefined ? null : { body: v.body }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.preheader === undefined ? null : { preheader: v.preheader }),
                ...(v["reply-to"] === undefined ? null : { replyTo: v["reply-to"] }),
                ...(v.subject === undefined ? null : { subject: v.subject }),
            };
        });

    export type Outbound = {
        body?: string | null | undefined;
        from?: string | null | undefined;
        preheader?: string | null | undefined;
        "reply-to"?: string | null | undefined;
        subject?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MessageContent> = z
        .object({
            body: z.nullable(z.string()).optional(),
            from: z.nullable(z.string()).optional(),
            preheader: z.nullable(z.string()).optional(),
            replyTo: z.nullable(z.string()).optional(),
            subject: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.body === undefined ? null : { body: v.body }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.preheader === undefined ? null : { preheader: v.preheader }),
                ...(v.replyTo === undefined ? null : { "reply-to": v.replyTo }),
                ...(v.subject === undefined ? null : { subject: v.subject }),
            };
        });
}

/** @internal */
export const EmailMessagesValue$ = z.nativeEnum(EmailMessagesValue);

/** @internal */
export namespace MessageType$ {
    export type Inbound = {
        source_value?: string | null | undefined;
        value?: EmailMessagesValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<MessageType, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z.nullable(z.string()).optional(),
            value: z.nullable(EmailMessagesValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: string | null | undefined;
        value?: EmailMessagesValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MessageType> = z
        .object({
            sourceValue: z.nullable(z.string()).optional(),
            value: z.nullable(EmailMessagesValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace EmailMessages$ {
    export type Inbound = {
        id?: string | null | undefined;
        message_content?: MessageContent$.Inbound | null | undefined;
        message_type?: MessageType$.Inbound | null | undefined;
        name?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<EmailMessages, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
            message_content: z.nullable(z.lazy(() => MessageContent$.inboundSchema)).optional(),
            message_type: z.nullable(z.lazy(() => MessageType$.inboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.message_content === undefined ? null : { messageContent: v.message_content }),
                ...(v.message_type === undefined ? null : { messageType: v.message_type }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        message_content?: MessageContent$.Outbound | null | undefined;
        message_type?: MessageType$.Outbound | null | undefined;
        name?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailMessages> = z
        .object({
            id: z.nullable(z.string()).optional(),
            messageContent: z.nullable(z.lazy(() => MessageContent$.outboundSchema)).optional(),
            messageType: z.nullable(z.lazy(() => MessageType$.outboundSchema)).optional(),
            name: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.messageContent === undefined ? null : { message_content: v.messageContent }),
                ...(v.messageType === undefined ? null : { message_type: v.messageType }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
