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

export type MarketingCreateContentBlocksRequestDto4 = {};

/**
 * The source value of the type.
 */
export type MarketingCreateContentBlocksRequestDtoSourceValue =
  | MarketingCreateContentBlocksRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of the content blocks.
 */
export enum MarketingCreateContentBlocksRequestDtoValue {
  Text = "text",
  Html = "html",
  Image = "image",
  CodeSnippet = "code-snippet",
}
/**
 * The type of the content blocks.
 */
export type MarketingCreateContentBlocksRequestDtoValueOpen = OpenEnum<
  typeof MarketingCreateContentBlocksRequestDtoValue
>;

/**
 * Stackone enum identifying the type of content block.
 */
export type MarketingCreateContentBlocksRequestDtoType = {
  /**
   * The source value of the type.
   */
  sourceValue?:
    | MarketingCreateContentBlocksRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of the content blocks.
   */
  value?: MarketingCreateContentBlocksRequestDtoValueOpen | null | undefined;
};

export type MarketingCreateContentBlocksRequestDto = {
  content?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * Stackone enum identifying the type of content block.
   */
  type?: MarketingCreateContentBlocksRequestDtoType | null | undefined;
};

/** @internal */
export const MarketingCreateContentBlocksRequestDto4$inboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type MarketingCreateContentBlocksRequestDto4$Outbound = {};

/** @internal */
export const MarketingCreateContentBlocksRequestDto4$outboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto4$Outbound,
  z.ZodTypeDef,
  MarketingCreateContentBlocksRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDto4$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDto4$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDto4$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto4$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDto4$outboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto4$Outbound` instead. */
  export type Outbound = MarketingCreateContentBlocksRequestDto4$Outbound;
}

/** @internal */
export const MarketingCreateContentBlocksRequestDtoSourceValue$inboundSchema:
  z.ZodType<
    MarketingCreateContentBlocksRequestDtoSourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => MarketingCreateContentBlocksRequestDto4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type MarketingCreateContentBlocksRequestDtoSourceValue$Outbound =
  | MarketingCreateContentBlocksRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const MarketingCreateContentBlocksRequestDtoSourceValue$outboundSchema:
  z.ZodType<
    MarketingCreateContentBlocksRequestDtoSourceValue$Outbound,
    z.ZodTypeDef,
    MarketingCreateContentBlocksRequestDtoSourceValue
  > = z.union([
    z.lazy(() => MarketingCreateContentBlocksRequestDto4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDtoSourceValue$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoSourceValue$Outbound` instead. */
  export type Outbound =
    MarketingCreateContentBlocksRequestDtoSourceValue$Outbound;
}

/** @internal */
export const MarketingCreateContentBlocksRequestDtoValue$inboundSchema:
  z.ZodType<
    MarketingCreateContentBlocksRequestDtoValueOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(MarketingCreateContentBlocksRequestDtoValue),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const MarketingCreateContentBlocksRequestDtoValue$outboundSchema:
  z.ZodType<
    MarketingCreateContentBlocksRequestDtoValueOpen,
    z.ZodTypeDef,
    MarketingCreateContentBlocksRequestDtoValueOpen
  > = z.union([
    z.nativeEnum(MarketingCreateContentBlocksRequestDtoValue),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDtoValue$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDtoValue$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDtoValue$outboundSchema;
}

/** @internal */
export const MarketingCreateContentBlocksRequestDtoType$inboundSchema:
  z.ZodType<MarketingCreateContentBlocksRequestDtoType, z.ZodTypeDef, unknown> =
    z.object({
      source_value: z.nullable(
        z.union([
          z.lazy(() => MarketingCreateContentBlocksRequestDto4$inboundSchema),
          z.string(),
          z.number(),
          z.boolean(),
          z.array(z.any()),
        ]),
      ).optional(),
      value: z.nullable(
        MarketingCreateContentBlocksRequestDtoValue$inboundSchema,
      ).optional(),
    }).transform((v) => {
      return remap$(v, {
        "source_value": "sourceValue",
      });
    });

/** @internal */
export type MarketingCreateContentBlocksRequestDtoType$Outbound = {
  source_value?:
    | MarketingCreateContentBlocksRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const MarketingCreateContentBlocksRequestDtoType$outboundSchema:
  z.ZodType<
    MarketingCreateContentBlocksRequestDtoType$Outbound,
    z.ZodTypeDef,
    MarketingCreateContentBlocksRequestDtoType
  > = z.object({
    sourceValue: z.nullable(
      z.union([
        z.lazy(() => MarketingCreateContentBlocksRequestDto4$outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(
      MarketingCreateContentBlocksRequestDtoValue$outboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      sourceValue: "source_value",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDtoType$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoType$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDtoType$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoType$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDtoType$outboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDtoType$Outbound` instead. */
  export type Outbound = MarketingCreateContentBlocksRequestDtoType$Outbound;
}

/** @internal */
export const MarketingCreateContentBlocksRequestDto$inboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(
    z.lazy(() => MarketingCreateContentBlocksRequestDtoType$inboundSchema),
  ).optional(),
});

/** @internal */
export type MarketingCreateContentBlocksRequestDto$Outbound = {
  content?: string | null | undefined;
  name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  tags?: Array<string> | null | undefined;
  type?: MarketingCreateContentBlocksRequestDtoType$Outbound | null | undefined;
};

/** @internal */
export const MarketingCreateContentBlocksRequestDto$outboundSchema: z.ZodType<
  MarketingCreateContentBlocksRequestDto$Outbound,
  z.ZodTypeDef,
  MarketingCreateContentBlocksRequestDto
> = z.object({
  content: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  type: z.nullable(
    z.lazy(() => MarketingCreateContentBlocksRequestDtoType$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingCreateContentBlocksRequestDto$ {
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$inboundSchema` instead. */
  export const inboundSchema =
    MarketingCreateContentBlocksRequestDto$inboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$outboundSchema` instead. */
  export const outboundSchema =
    MarketingCreateContentBlocksRequestDto$outboundSchema;
  /** @deprecated use `MarketingCreateContentBlocksRequestDto$Outbound` instead. */
  export type Outbound = MarketingCreateContentBlocksRequestDto$Outbound;
}
