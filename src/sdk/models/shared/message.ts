/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type PushMessageContentsSchemas = {
    body?: string | null | undefined;
};

export type Schemas = {
    body?: string | null | undefined;
    from?: string | null | undefined;
    preheader?: string | null | undefined;
    replyTo?: string | null | undefined;
    subject?: string | null | undefined;
};

export type SmsMessageContentsSchemas = {
    body?: string | null | undefined;
    from?: string | null | undefined;
};

export type MessageMessageContent =
    | PushMessageContentsSchemas
    | SmsMessageContentsSchemas
    | Schemas;

export type Message4 = {};

/**
 * The original value from the provider used to derive the unified message type.
 */
export type MessageSourceValue = Message4 | string | number | boolean;

/**
 * The unified message type.
 */
export type MessageValue = {};

/**
 * Stackone enum identifying the type of message associated with the content.
 */
export type MessageMessageType = {
    /**
     * The original value from the provider used to derive the unified message type.
     */
    sourceValue?: Message4 | string | number | boolean | null | undefined;
    /**
     * The unified message type.
     */
    value?: MessageValue | null | undefined;
};

export type Message = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    messageContent?:
        | PushMessageContentsSchemas
        | SmsMessageContentsSchemas
        | Schemas
        | null
        | undefined;
    /**
     * Stackone enum identifying the type of message associated with the content.
     */
    messageType?: MessageMessageType | null | undefined;
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export const PushMessageContentsSchemas$inboundSchema: z.ZodType<
    PushMessageContentsSchemas,
    z.ZodTypeDef,
    unknown
> = z.object({
    body: z.nullable(z.string()).optional(),
});

/** @internal */
export type PushMessageContentsSchemas$Outbound = {
    body?: string | null | undefined;
};

/** @internal */
export const PushMessageContentsSchemas$outboundSchema: z.ZodType<
    PushMessageContentsSchemas$Outbound,
    z.ZodTypeDef,
    PushMessageContentsSchemas
> = z.object({
    body: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PushMessageContentsSchemas$ {
    /** @deprecated use `PushMessageContentsSchemas$inboundSchema` instead. */
    export const inboundSchema = PushMessageContentsSchemas$inboundSchema;
    /** @deprecated use `PushMessageContentsSchemas$outboundSchema` instead. */
    export const outboundSchema = PushMessageContentsSchemas$outboundSchema;
    /** @deprecated use `PushMessageContentsSchemas$Outbound` instead. */
    export type Outbound = PushMessageContentsSchemas$Outbound;
}

/** @internal */
export const Schemas$inboundSchema: z.ZodType<Schemas, z.ZodTypeDef, unknown> = z
    .object({
        body: z.nullable(z.string()).optional(),
        from: z.nullable(z.string()).optional(),
        preheader: z.nullable(z.string()).optional(),
        "reply-to": z.nullable(z.string()).optional(),
        subject: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "reply-to": "replyTo",
        });
    });

/** @internal */
export type Schemas$Outbound = {
    body?: string | null | undefined;
    from?: string | null | undefined;
    preheader?: string | null | undefined;
    "reply-to"?: string | null | undefined;
    subject?: string | null | undefined;
};

/** @internal */
export const Schemas$outboundSchema: z.ZodType<Schemas$Outbound, z.ZodTypeDef, Schemas> = z
    .object({
        body: z.nullable(z.string()).optional(),
        from: z.nullable(z.string()).optional(),
        preheader: z.nullable(z.string()).optional(),
        replyTo: z.nullable(z.string()).optional(),
        subject: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            replyTo: "reply-to",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Schemas$ {
    /** @deprecated use `Schemas$inboundSchema` instead. */
    export const inboundSchema = Schemas$inboundSchema;
    /** @deprecated use `Schemas$outboundSchema` instead. */
    export const outboundSchema = Schemas$outboundSchema;
    /** @deprecated use `Schemas$Outbound` instead. */
    export type Outbound = Schemas$Outbound;
}

/** @internal */
export const SmsMessageContentsSchemas$inboundSchema: z.ZodType<
    SmsMessageContentsSchemas,
    z.ZodTypeDef,
    unknown
> = z.object({
    body: z.nullable(z.string()).optional(),
    from: z.nullable(z.string()).optional(),
});

/** @internal */
export type SmsMessageContentsSchemas$Outbound = {
    body?: string | null | undefined;
    from?: string | null | undefined;
};

/** @internal */
export const SmsMessageContentsSchemas$outboundSchema: z.ZodType<
    SmsMessageContentsSchemas$Outbound,
    z.ZodTypeDef,
    SmsMessageContentsSchemas
> = z.object({
    body: z.nullable(z.string()).optional(),
    from: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsMessageContentsSchemas$ {
    /** @deprecated use `SmsMessageContentsSchemas$inboundSchema` instead. */
    export const inboundSchema = SmsMessageContentsSchemas$inboundSchema;
    /** @deprecated use `SmsMessageContentsSchemas$outboundSchema` instead. */
    export const outboundSchema = SmsMessageContentsSchemas$outboundSchema;
    /** @deprecated use `SmsMessageContentsSchemas$Outbound` instead. */
    export type Outbound = SmsMessageContentsSchemas$Outbound;
}

/** @internal */
export const MessageMessageContent$inboundSchema: z.ZodType<
    MessageMessageContent,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => PushMessageContentsSchemas$inboundSchema),
    z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
    z.lazy(() => Schemas$inboundSchema),
]);

/** @internal */
export type MessageMessageContent$Outbound =
    | PushMessageContentsSchemas$Outbound
    | SmsMessageContentsSchemas$Outbound
    | Schemas$Outbound;

/** @internal */
export const MessageMessageContent$outboundSchema: z.ZodType<
    MessageMessageContent$Outbound,
    z.ZodTypeDef,
    MessageMessageContent
> = z.union([
    z.lazy(() => PushMessageContentsSchemas$outboundSchema),
    z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
    z.lazy(() => Schemas$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageMessageContent$ {
    /** @deprecated use `MessageMessageContent$inboundSchema` instead. */
    export const inboundSchema = MessageMessageContent$inboundSchema;
    /** @deprecated use `MessageMessageContent$outboundSchema` instead. */
    export const outboundSchema = MessageMessageContent$outboundSchema;
    /** @deprecated use `MessageMessageContent$Outbound` instead. */
    export type Outbound = MessageMessageContent$Outbound;
}

/** @internal */
export const Message4$inboundSchema: z.ZodType<Message4, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Message4$Outbound = {};

/** @internal */
export const Message4$outboundSchema: z.ZodType<Message4$Outbound, z.ZodTypeDef, Message4> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Message4$ {
    /** @deprecated use `Message4$inboundSchema` instead. */
    export const inboundSchema = Message4$inboundSchema;
    /** @deprecated use `Message4$outboundSchema` instead. */
    export const outboundSchema = Message4$outboundSchema;
    /** @deprecated use `Message4$Outbound` instead. */
    export type Outbound = Message4$Outbound;
}

/** @internal */
export const MessageSourceValue$inboundSchema: z.ZodType<
    MessageSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => Message4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type MessageSourceValue$Outbound = Message4$Outbound | string | number | boolean;

/** @internal */
export const MessageSourceValue$outboundSchema: z.ZodType<
    MessageSourceValue$Outbound,
    z.ZodTypeDef,
    MessageSourceValue
> = z.union([z.lazy(() => Message4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageSourceValue$ {
    /** @deprecated use `MessageSourceValue$inboundSchema` instead. */
    export const inboundSchema = MessageSourceValue$inboundSchema;
    /** @deprecated use `MessageSourceValue$outboundSchema` instead. */
    export const outboundSchema = MessageSourceValue$outboundSchema;
    /** @deprecated use `MessageSourceValue$Outbound` instead. */
    export type Outbound = MessageSourceValue$Outbound;
}

/** @internal */
export const MessageValue$inboundSchema: z.ZodType<MessageValue, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type MessageValue$Outbound = {};

/** @internal */
export const MessageValue$outboundSchema: z.ZodType<
    MessageValue$Outbound,
    z.ZodTypeDef,
    MessageValue
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageValue$ {
    /** @deprecated use `MessageValue$inboundSchema` instead. */
    export const inboundSchema = MessageValue$inboundSchema;
    /** @deprecated use `MessageValue$outboundSchema` instead. */
    export const outboundSchema = MessageValue$outboundSchema;
    /** @deprecated use `MessageValue$Outbound` instead. */
    export type Outbound = MessageValue$Outbound;
}

/** @internal */
export const MessageMessageType$inboundSchema: z.ZodType<
    MessageMessageType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([z.lazy(() => Message4$inboundSchema), z.string(), z.number(), z.boolean()])
            )
            .optional(),
        value: z.nullable(z.lazy(() => MessageValue$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type MessageMessageType$Outbound = {
    source_value?: Message4$Outbound | string | number | boolean | null | undefined;
    value?: MessageValue$Outbound | null | undefined;
};

/** @internal */
export const MessageMessageType$outboundSchema: z.ZodType<
    MessageMessageType$Outbound,
    z.ZodTypeDef,
    MessageMessageType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => Message4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(z.lazy(() => MessageValue$outboundSchema)).optional(),
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
export namespace MessageMessageType$ {
    /** @deprecated use `MessageMessageType$inboundSchema` instead. */
    export const inboundSchema = MessageMessageType$inboundSchema;
    /** @deprecated use `MessageMessageType$outboundSchema` instead. */
    export const outboundSchema = MessageMessageType$outboundSchema;
    /** @deprecated use `MessageMessageType$Outbound` instead. */
    export type Outbound = MessageMessageType$Outbound;
}

/** @internal */
export const Message$inboundSchema: z.ZodType<Message, z.ZodTypeDef, unknown> = z
    .object({
        id: z.nullable(z.string()).optional(),
        message_content: z
            .nullable(
                z.union([
                    z.lazy(() => PushMessageContentsSchemas$inboundSchema),
                    z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
                    z.lazy(() => Schemas$inboundSchema),
                ])
            )
            .optional(),
        message_type: z.nullable(z.lazy(() => MessageMessageType$inboundSchema)).optional(),
        name: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            message_content: "messageContent",
            message_type: "messageType",
            remote_id: "remoteId",
        });
    });

/** @internal */
export type Message$Outbound = {
    id?: string | null | undefined;
    message_content?:
        | PushMessageContentsSchemas$Outbound
        | SmsMessageContentsSchemas$Outbound
        | Schemas$Outbound
        | null
        | undefined;
    message_type?: MessageMessageType$Outbound | null | undefined;
    name?: string | null | undefined;
    remote_id?: string | null | undefined;
};

/** @internal */
export const Message$outboundSchema: z.ZodType<Message$Outbound, z.ZodTypeDef, Message> = z
    .object({
        id: z.nullable(z.string()).optional(),
        messageContent: z
            .nullable(
                z.union([
                    z.lazy(() => PushMessageContentsSchemas$outboundSchema),
                    z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
                    z.lazy(() => Schemas$outboundSchema),
                ])
            )
            .optional(),
        messageType: z.nullable(z.lazy(() => MessageMessageType$outboundSchema)).optional(),
        name: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            messageContent: "message_content",
            messageType: "message_type",
            remoteId: "remote_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Message$ {
    /** @deprecated use `Message$inboundSchema` instead. */
    export const inboundSchema = Message$inboundSchema;
    /** @deprecated use `Message$outboundSchema` instead. */
    export const outboundSchema = Message$outboundSchema;
    /** @deprecated use `Message$Outbound` instead. */
    export type Outbound = Message$Outbound;
}
