/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PushMessageContentsSchemas = {
  body?: string | null | undefined;
  subtitle?: string | null | undefined;
  title?: string | null | undefined;
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

export type MessageContent =
  | SmsMessageContentsSchemas
  | PushMessageContentsSchemas
  | Schemas;

export type CreateMessage4 = {};

/**
 * The original value from the provider used to derive the unified message type.
 */
export type CreateMessageSourceValue =
  | CreateMessage4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The unified message type.
 */
export enum CreateMessageValue {
  Email = "email",
  Sms = "sms",
  Push = "push",
  WebPush = "web_push",
  IosPush = "ios_push",
  AndroidPush = "android_push",
  AppPush = "app_push",
  OmniChannel = "omni_channel",
  ContentBlock = "content_block",
  InApp = "in_app",
  Unknown = "unknown",
  UnmappedValue = "unmapped_value",
}
/**
 * The unified message type.
 */
export type CreateMessageValueOpen = OpenEnum<typeof CreateMessageValue>;

/**
 * Stackone enum identifying the type of message associated with the content.
 */
export type MessageType = {
  /**
   * The original value from the provider used to derive the unified message type.
   */
  sourceValue?:
    | CreateMessage4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The unified message type.
   */
  value?: CreateMessageValueOpen | null | undefined;
};

export type CreateMessage = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  messageContent?:
    | SmsMessageContentsSchemas
    | PushMessageContentsSchemas
    | Schemas
    | null
    | undefined;
  /**
   * Stackone enum identifying the type of message associated with the content.
   */
  messageType?: MessageType | null | undefined;
  name?: string | null | undefined;
};

export type MessageMessageContent =
  | SmsMessageContentsSchemas
  | PushMessageContentsSchemas
  | Schemas;

export type Message4 = {};

/**
 * The original value from the provider used to derive the unified message type.
 */
export type MessageSourceValue =
  | Message4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The unified message type.
 */
export enum MessageValue {
  Email = "email",
  Sms = "sms",
  Push = "push",
  WebPush = "web_push",
  IosPush = "ios_push",
  AndroidPush = "android_push",
  AppPush = "app_push",
  OmniChannel = "omni_channel",
  ContentBlock = "content_block",
  InApp = "in_app",
  Unknown = "unknown",
  UnmappedValue = "unmapped_value",
}
/**
 * The unified message type.
 */
export type MessageValueOpen = OpenEnum<typeof MessageValue>;

/**
 * Stackone enum identifying the type of message associated with the content.
 */
export type MessageMessageType = {
  /**
   * The original value from the provider used to derive the unified message type.
   */
  sourceValue?:
    | Message4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The unified message type.
   */
  value?: MessageValueOpen | null | undefined;
};

export type Message = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  messageContent?:
    | SmsMessageContentsSchemas
    | PushMessageContentsSchemas
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
  subtitle: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
});

/** @internal */
export type PushMessageContentsSchemas$Outbound = {
  body?: string | null | undefined;
  subtitle?: string | null | undefined;
  title?: string | null | undefined;
};

/** @internal */
export const PushMessageContentsSchemas$outboundSchema: z.ZodType<
  PushMessageContentsSchemas$Outbound,
  z.ZodTypeDef,
  PushMessageContentsSchemas
> = z.object({
  body: z.nullable(z.string()).optional(),
  subtitle: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
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

export function pushMessageContentsSchemasToJSON(
  pushMessageContentsSchemas: PushMessageContentsSchemas,
): string {
  return JSON.stringify(
    PushMessageContentsSchemas$outboundSchema.parse(pushMessageContentsSchemas),
  );
}

export function pushMessageContentsSchemasFromJSON(
  jsonString: string,
): SafeParseResult<PushMessageContentsSchemas, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PushMessageContentsSchemas$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PushMessageContentsSchemas' from JSON`,
  );
}

/** @internal */
export const Schemas$inboundSchema: z.ZodType<Schemas, z.ZodTypeDef, unknown> =
  z.object({
    body: z.nullable(z.string()).optional(),
    from: z.nullable(z.string()).optional(),
    preheader: z.nullable(z.string()).optional(),
    "reply-to": z.nullable(z.string()).optional(),
    subject: z.nullable(z.string()).optional(),
  }).transform((v) => {
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
export const Schemas$outboundSchema: z.ZodType<
  Schemas$Outbound,
  z.ZodTypeDef,
  Schemas
> = z.object({
  body: z.nullable(z.string()).optional(),
  from: z.nullable(z.string()).optional(),
  preheader: z.nullable(z.string()).optional(),
  replyTo: z.nullable(z.string()).optional(),
  subject: z.nullable(z.string()).optional(),
}).transform((v) => {
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

export function schemasToJSON(schemas: Schemas): string {
  return JSON.stringify(Schemas$outboundSchema.parse(schemas));
}

export function schemasFromJSON(
  jsonString: string,
): SafeParseResult<Schemas, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Schemas$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Schemas' from JSON`,
  );
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

export function smsMessageContentsSchemasToJSON(
  smsMessageContentsSchemas: SmsMessageContentsSchemas,
): string {
  return JSON.stringify(
    SmsMessageContentsSchemas$outboundSchema.parse(smsMessageContentsSchemas),
  );
}

export function smsMessageContentsSchemasFromJSON(
  jsonString: string,
): SafeParseResult<SmsMessageContentsSchemas, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmsMessageContentsSchemas$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmsMessageContentsSchemas' from JSON`,
  );
}

/** @internal */
export const MessageContent$inboundSchema: z.ZodType<
  MessageContent,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
  z.lazy(() => PushMessageContentsSchemas$inboundSchema),
  z.lazy(() => Schemas$inboundSchema),
]);

/** @internal */
export type MessageContent$Outbound =
  | SmsMessageContentsSchemas$Outbound
  | PushMessageContentsSchemas$Outbound
  | Schemas$Outbound;

/** @internal */
export const MessageContent$outboundSchema: z.ZodType<
  MessageContent$Outbound,
  z.ZodTypeDef,
  MessageContent
> = z.union([
  z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
  z.lazy(() => PushMessageContentsSchemas$outboundSchema),
  z.lazy(() => Schemas$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageContent$ {
  /** @deprecated use `MessageContent$inboundSchema` instead. */
  export const inboundSchema = MessageContent$inboundSchema;
  /** @deprecated use `MessageContent$outboundSchema` instead. */
  export const outboundSchema = MessageContent$outboundSchema;
  /** @deprecated use `MessageContent$Outbound` instead. */
  export type Outbound = MessageContent$Outbound;
}

export function messageContentToJSON(messageContent: MessageContent): string {
  return JSON.stringify(MessageContent$outboundSchema.parse(messageContent));
}

export function messageContentFromJSON(
  jsonString: string,
): SafeParseResult<MessageContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageContent' from JSON`,
  );
}

/** @internal */
export const CreateMessage4$inboundSchema: z.ZodType<
  CreateMessage4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateMessage4$Outbound = {};

/** @internal */
export const CreateMessage4$outboundSchema: z.ZodType<
  CreateMessage4$Outbound,
  z.ZodTypeDef,
  CreateMessage4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMessage4$ {
  /** @deprecated use `CreateMessage4$inboundSchema` instead. */
  export const inboundSchema = CreateMessage4$inboundSchema;
  /** @deprecated use `CreateMessage4$outboundSchema` instead. */
  export const outboundSchema = CreateMessage4$outboundSchema;
  /** @deprecated use `CreateMessage4$Outbound` instead. */
  export type Outbound = CreateMessage4$Outbound;
}

export function createMessage4ToJSON(createMessage4: CreateMessage4): string {
  return JSON.stringify(CreateMessage4$outboundSchema.parse(createMessage4));
}

export function createMessage4FromJSON(
  jsonString: string,
): SafeParseResult<CreateMessage4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMessage4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMessage4' from JSON`,
  );
}

/** @internal */
export const CreateMessageSourceValue$inboundSchema: z.ZodType<
  CreateMessageSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateMessage4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateMessageSourceValue$Outbound =
  | CreateMessage4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateMessageSourceValue$outboundSchema: z.ZodType<
  CreateMessageSourceValue$Outbound,
  z.ZodTypeDef,
  CreateMessageSourceValue
> = z.union([
  z.lazy(() => CreateMessage4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMessageSourceValue$ {
  /** @deprecated use `CreateMessageSourceValue$inboundSchema` instead. */
  export const inboundSchema = CreateMessageSourceValue$inboundSchema;
  /** @deprecated use `CreateMessageSourceValue$outboundSchema` instead. */
  export const outboundSchema = CreateMessageSourceValue$outboundSchema;
  /** @deprecated use `CreateMessageSourceValue$Outbound` instead. */
  export type Outbound = CreateMessageSourceValue$Outbound;
}

export function createMessageSourceValueToJSON(
  createMessageSourceValue: CreateMessageSourceValue,
): string {
  return JSON.stringify(
    CreateMessageSourceValue$outboundSchema.parse(createMessageSourceValue),
  );
}

export function createMessageSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateMessageSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMessageSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMessageSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateMessageValue$inboundSchema: z.ZodType<
  CreateMessageValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateMessageValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateMessageValue$outboundSchema: z.ZodType<
  CreateMessageValueOpen,
  z.ZodTypeDef,
  CreateMessageValueOpen
> = z.union([
  z.nativeEnum(CreateMessageValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMessageValue$ {
  /** @deprecated use `CreateMessageValue$inboundSchema` instead. */
  export const inboundSchema = CreateMessageValue$inboundSchema;
  /** @deprecated use `CreateMessageValue$outboundSchema` instead. */
  export const outboundSchema = CreateMessageValue$outboundSchema;
}

/** @internal */
export const MessageType$inboundSchema: z.ZodType<
  MessageType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateMessage4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateMessageValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type MessageType$Outbound = {
  source_value?:
    | CreateMessage4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const MessageType$outboundSchema: z.ZodType<
  MessageType$Outbound,
  z.ZodTypeDef,
  MessageType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateMessage4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateMessageValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageType$ {
  /** @deprecated use `MessageType$inboundSchema` instead. */
  export const inboundSchema = MessageType$inboundSchema;
  /** @deprecated use `MessageType$outboundSchema` instead. */
  export const outboundSchema = MessageType$outboundSchema;
  /** @deprecated use `MessageType$Outbound` instead. */
  export type Outbound = MessageType$Outbound;
}

export function messageTypeToJSON(messageType: MessageType): string {
  return JSON.stringify(MessageType$outboundSchema.parse(messageType));
}

export function messageTypeFromJSON(
  jsonString: string,
): SafeParseResult<MessageType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageType' from JSON`,
  );
}

/** @internal */
export const CreateMessage$inboundSchema: z.ZodType<
  CreateMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  message_content: z.nullable(
    z.union([
      z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
      z.lazy(() => PushMessageContentsSchemas$inboundSchema),
      z.lazy(() => Schemas$inboundSchema),
    ]),
  ).optional(),
  message_type: z.nullable(z.lazy(() => MessageType$inboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "message_content": "messageContent",
    "message_type": "messageType",
  });
});

/** @internal */
export type CreateMessage$Outbound = {
  id?: string | null | undefined;
  message_content?:
    | SmsMessageContentsSchemas$Outbound
    | PushMessageContentsSchemas$Outbound
    | Schemas$Outbound
    | null
    | undefined;
  message_type?: MessageType$Outbound | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CreateMessage$outboundSchema: z.ZodType<
  CreateMessage$Outbound,
  z.ZodTypeDef,
  CreateMessage
> = z.object({
  id: z.nullable(z.string()).optional(),
  messageContent: z.nullable(
    z.union([
      z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
      z.lazy(() => PushMessageContentsSchemas$outboundSchema),
      z.lazy(() => Schemas$outboundSchema),
    ]),
  ).optional(),
  messageType: z.nullable(z.lazy(() => MessageType$outboundSchema)).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    messageContent: "message_content",
    messageType: "message_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMessage$ {
  /** @deprecated use `CreateMessage$inboundSchema` instead. */
  export const inboundSchema = CreateMessage$inboundSchema;
  /** @deprecated use `CreateMessage$outboundSchema` instead. */
  export const outboundSchema = CreateMessage$outboundSchema;
  /** @deprecated use `CreateMessage$Outbound` instead. */
  export type Outbound = CreateMessage$Outbound;
}

export function createMessageToJSON(createMessage: CreateMessage): string {
  return JSON.stringify(CreateMessage$outboundSchema.parse(createMessage));
}

export function createMessageFromJSON(
  jsonString: string,
): SafeParseResult<CreateMessage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMessage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMessage' from JSON`,
  );
}

/** @internal */
export const MessageMessageContent$inboundSchema: z.ZodType<
  MessageMessageContent,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
  z.lazy(() => PushMessageContentsSchemas$inboundSchema),
  z.lazy(() => Schemas$inboundSchema),
]);

/** @internal */
export type MessageMessageContent$Outbound =
  | SmsMessageContentsSchemas$Outbound
  | PushMessageContentsSchemas$Outbound
  | Schemas$Outbound;

/** @internal */
export const MessageMessageContent$outboundSchema: z.ZodType<
  MessageMessageContent$Outbound,
  z.ZodTypeDef,
  MessageMessageContent
> = z.union([
  z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
  z.lazy(() => PushMessageContentsSchemas$outboundSchema),
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

export function messageMessageContentToJSON(
  messageMessageContent: MessageMessageContent,
): string {
  return JSON.stringify(
    MessageMessageContent$outboundSchema.parse(messageMessageContent),
  );
}

export function messageMessageContentFromJSON(
  jsonString: string,
): SafeParseResult<MessageMessageContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageMessageContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageMessageContent' from JSON`,
  );
}

/** @internal */
export const Message4$inboundSchema: z.ZodType<
  Message4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Message4$Outbound = {};

/** @internal */
export const Message4$outboundSchema: z.ZodType<
  Message4$Outbound,
  z.ZodTypeDef,
  Message4
> = z.object({});

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

export function message4ToJSON(message4: Message4): string {
  return JSON.stringify(Message4$outboundSchema.parse(message4));
}

export function message4FromJSON(
  jsonString: string,
): SafeParseResult<Message4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Message4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Message4' from JSON`,
  );
}

/** @internal */
export const MessageSourceValue$inboundSchema: z.ZodType<
  MessageSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => Message4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type MessageSourceValue$Outbound =
  | Message4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const MessageSourceValue$outboundSchema: z.ZodType<
  MessageSourceValue$Outbound,
  z.ZodTypeDef,
  MessageSourceValue
> = z.union([
  z.lazy(() => Message4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

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

export function messageSourceValueToJSON(
  messageSourceValue: MessageSourceValue,
): string {
  return JSON.stringify(
    MessageSourceValue$outboundSchema.parse(messageSourceValue),
  );
}

export function messageSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<MessageSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageSourceValue' from JSON`,
  );
}

/** @internal */
export const MessageValue$inboundSchema: z.ZodType<
  MessageValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(MessageValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const MessageValue$outboundSchema: z.ZodType<
  MessageValueOpen,
  z.ZodTypeDef,
  MessageValueOpen
> = z.union([
  z.nativeEnum(MessageValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageValue$ {
  /** @deprecated use `MessageValue$inboundSchema` instead. */
  export const inboundSchema = MessageValue$inboundSchema;
  /** @deprecated use `MessageValue$outboundSchema` instead. */
  export const outboundSchema = MessageValue$outboundSchema;
}

/** @internal */
export const MessageMessageType$inboundSchema: z.ZodType<
  MessageMessageType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => Message4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(MessageValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type MessageMessageType$Outbound = {
  source_value?:
    | Message4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const MessageMessageType$outboundSchema: z.ZodType<
  MessageMessageType$Outbound,
  z.ZodTypeDef,
  MessageMessageType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => Message4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(MessageValue$outboundSchema).optional(),
}).transform((v) => {
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

export function messageMessageTypeToJSON(
  messageMessageType: MessageMessageType,
): string {
  return JSON.stringify(
    MessageMessageType$outboundSchema.parse(messageMessageType),
  );
}

export function messageMessageTypeFromJSON(
  jsonString: string,
): SafeParseResult<MessageMessageType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageMessageType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageMessageType' from JSON`,
  );
}

/** @internal */
export const Message$inboundSchema: z.ZodType<Message, z.ZodTypeDef, unknown> =
  z.object({
    id: z.nullable(z.string()).optional(),
    message_content: z.nullable(
      z.union([
        z.lazy(() => SmsMessageContentsSchemas$inboundSchema),
        z.lazy(() => PushMessageContentsSchemas$inboundSchema),
        z.lazy(() => Schemas$inboundSchema),
      ]),
    ).optional(),
    message_type: z.nullable(z.lazy(() => MessageMessageType$inboundSchema))
      .optional(),
    name: z.nullable(z.string()).optional(),
    remote_id: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "message_content": "messageContent",
      "message_type": "messageType",
      "remote_id": "remoteId",
    });
  });

/** @internal */
export type Message$Outbound = {
  id?: string | null | undefined;
  message_content?:
    | SmsMessageContentsSchemas$Outbound
    | PushMessageContentsSchemas$Outbound
    | Schemas$Outbound
    | null
    | undefined;
  message_type?: MessageMessageType$Outbound | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const Message$outboundSchema: z.ZodType<
  Message$Outbound,
  z.ZodTypeDef,
  Message
> = z.object({
  id: z.nullable(z.string()).optional(),
  messageContent: z.nullable(
    z.union([
      z.lazy(() => SmsMessageContentsSchemas$outboundSchema),
      z.lazy(() => PushMessageContentsSchemas$outboundSchema),
      z.lazy(() => Schemas$outboundSchema),
    ]),
  ).optional(),
  messageType: z.nullable(z.lazy(() => MessageMessageType$outboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
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

export function messageToJSON(message: Message): string {
  return JSON.stringify(Message$outboundSchema.parse(message));
}

export function messageFromJSON(
  jsonString: string,
): SafeParseResult<Message, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Message$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Message' from JSON`,
  );
}
