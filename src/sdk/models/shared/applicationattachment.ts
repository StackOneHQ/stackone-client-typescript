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

export type ApplicationAttachment4 = {};

/**
 * The source value of the content type.
 */
export type ApplicationAttachmentSourceValue =
  | ApplicationAttachment4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The content type of the attachment.
 */
export enum ApplicationAttachmentValue {
  Text = "text",
  UnmappedValue = "unmapped_value",
}
/**
 * The content type of the attachment.
 */
export type ApplicationAttachmentValueOpen = OpenEnum<
  typeof ApplicationAttachmentValue
>;

export type ContentType = {
  /**
   * The source value of the content type.
   */
  sourceValue?:
    | ApplicationAttachment4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The content type of the attachment.
   */
  value?: ApplicationAttachmentValueOpen | null | undefined;
};

export type ApplicationAttachment = {
  /**
   * The content of the attachment.
   */
  content?: string | null | undefined;
  contentType?: ContentType | null | undefined;
  /**
   * The file name of the attachment.
   */
  fileName?: string | null | undefined;
  /**
   * The URL of the attachment.
   */
  url?: string | null | undefined;
};

/** @internal */
export const ApplicationAttachment4$inboundSchema: z.ZodType<
  ApplicationAttachment4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ApplicationAttachment4$Outbound = {};

/** @internal */
export const ApplicationAttachment4$outboundSchema: z.ZodType<
  ApplicationAttachment4$Outbound,
  z.ZodTypeDef,
  ApplicationAttachment4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationAttachment4$ {
  /** @deprecated use `ApplicationAttachment4$inboundSchema` instead. */
  export const inboundSchema = ApplicationAttachment4$inboundSchema;
  /** @deprecated use `ApplicationAttachment4$outboundSchema` instead. */
  export const outboundSchema = ApplicationAttachment4$outboundSchema;
  /** @deprecated use `ApplicationAttachment4$Outbound` instead. */
  export type Outbound = ApplicationAttachment4$Outbound;
}

/** @internal */
export const ApplicationAttachmentSourceValue$inboundSchema: z.ZodType<
  ApplicationAttachmentSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ApplicationAttachment4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type ApplicationAttachmentSourceValue$Outbound =
  | ApplicationAttachment4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const ApplicationAttachmentSourceValue$outboundSchema: z.ZodType<
  ApplicationAttachmentSourceValue$Outbound,
  z.ZodTypeDef,
  ApplicationAttachmentSourceValue
> = z.union([
  z.lazy(() => ApplicationAttachment4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationAttachmentSourceValue$ {
  /** @deprecated use `ApplicationAttachmentSourceValue$inboundSchema` instead. */
  export const inboundSchema = ApplicationAttachmentSourceValue$inboundSchema;
  /** @deprecated use `ApplicationAttachmentSourceValue$outboundSchema` instead. */
  export const outboundSchema = ApplicationAttachmentSourceValue$outboundSchema;
  /** @deprecated use `ApplicationAttachmentSourceValue$Outbound` instead. */
  export type Outbound = ApplicationAttachmentSourceValue$Outbound;
}

/** @internal */
export const ApplicationAttachmentValue$inboundSchema: z.ZodType<
  ApplicationAttachmentValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ApplicationAttachmentValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ApplicationAttachmentValue$outboundSchema: z.ZodType<
  ApplicationAttachmentValueOpen,
  z.ZodTypeDef,
  ApplicationAttachmentValueOpen
> = z.union([
  z.nativeEnum(ApplicationAttachmentValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationAttachmentValue$ {
  /** @deprecated use `ApplicationAttachmentValue$inboundSchema` instead. */
  export const inboundSchema = ApplicationAttachmentValue$inboundSchema;
  /** @deprecated use `ApplicationAttachmentValue$outboundSchema` instead. */
  export const outboundSchema = ApplicationAttachmentValue$outboundSchema;
}

/** @internal */
export const ContentType$inboundSchema: z.ZodType<
  ContentType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => ApplicationAttachment4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ApplicationAttachmentValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type ContentType$Outbound = {
  source_value?:
    | ApplicationAttachment4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const ContentType$outboundSchema: z.ZodType<
  ContentType$Outbound,
  z.ZodTypeDef,
  ContentType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => ApplicationAttachment4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(ApplicationAttachmentValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentType$ {
  /** @deprecated use `ContentType$inboundSchema` instead. */
  export const inboundSchema = ContentType$inboundSchema;
  /** @deprecated use `ContentType$outboundSchema` instead. */
  export const outboundSchema = ContentType$outboundSchema;
  /** @deprecated use `ContentType$Outbound` instead. */
  export type Outbound = ContentType$Outbound;
}

/** @internal */
export const ApplicationAttachment$inboundSchema: z.ZodType<
  ApplicationAttachment,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  content_type: z.nullable(z.lazy(() => ContentType$inboundSchema)).optional(),
  file_name: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "content_type": "contentType",
    "file_name": "fileName",
  });
});

/** @internal */
export type ApplicationAttachment$Outbound = {
  content?: string | null | undefined;
  content_type?: ContentType$Outbound | null | undefined;
  file_name?: string | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const ApplicationAttachment$outboundSchema: z.ZodType<
  ApplicationAttachment$Outbound,
  z.ZodTypeDef,
  ApplicationAttachment
> = z.object({
  content: z.nullable(z.string()).optional(),
  contentType: z.nullable(z.lazy(() => ContentType$outboundSchema)).optional(),
  fileName: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "content_type",
    fileName: "file_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationAttachment$ {
  /** @deprecated use `ApplicationAttachment$inboundSchema` instead. */
  export const inboundSchema = ApplicationAttachment$inboundSchema;
  /** @deprecated use `ApplicationAttachment$outboundSchema` instead. */
  export const outboundSchema = ApplicationAttachment$outboundSchema;
  /** @deprecated use `ApplicationAttachment$Outbound` instead. */
  export type Outbound = ApplicationAttachment$Outbound;
}
