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
import {
  NoteContentApiModel,
  NoteContentApiModel$inboundSchema,
  NoteContentApiModel$Outbound,
  NoteContentApiModel$outboundSchema,
} from "./notecontentapimodel.js";

export type AtsUpdateNotesRequestDto4 = {};

/**
 * The source value of the notes visibility.
 */
export type AtsUpdateNotesRequestDtoSourceValue =
  | AtsUpdateNotesRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The visibility of the notes.
 */
export enum AtsUpdateNotesRequestDtoValue {
  Private = "private",
  Public = "public",
  UnmappedValue = "unmapped_value",
}
/**
 * The visibility of the notes.
 */
export type AtsUpdateNotesRequestDtoValueOpen = OpenEnum<
  typeof AtsUpdateNotesRequestDtoValue
>;

/**
 * Visibility of the note
 */
export type AtsUpdateNotesRequestDtoVisibility = {
  /**
   * The source value of the notes visibility.
   */
  sourceValue?:
    | AtsUpdateNotesRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The visibility of the notes.
   */
  value?: AtsUpdateNotesRequestDtoValueOpen | null | undefined;
};

export type AtsUpdateNotesRequestDto = {
  /**
   * Unique identifier of the author
   */
  authorId?: string | null | undefined;
  content?: Array<NoteContentApiModel> | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Visibility of the note
   */
  visibility?: AtsUpdateNotesRequestDtoVisibility | null | undefined;
};

/** @internal */
export const AtsUpdateNotesRequestDto4$inboundSchema: z.ZodType<
  AtsUpdateNotesRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsUpdateNotesRequestDto4$Outbound = {};

/** @internal */
export const AtsUpdateNotesRequestDto4$outboundSchema: z.ZodType<
  AtsUpdateNotesRequestDto4$Outbound,
  z.ZodTypeDef,
  AtsUpdateNotesRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateNotesRequestDto4$ {
  /** @deprecated use `AtsUpdateNotesRequestDto4$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateNotesRequestDto4$inboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDto4$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateNotesRequestDto4$outboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDto4$Outbound` instead. */
  export type Outbound = AtsUpdateNotesRequestDto4$Outbound;
}

export function atsUpdateNotesRequestDto4ToJSON(
  atsUpdateNotesRequestDto4: AtsUpdateNotesRequestDto4,
): string {
  return JSON.stringify(
    AtsUpdateNotesRequestDto4$outboundSchema.parse(atsUpdateNotesRequestDto4),
  );
}

export function atsUpdateNotesRequestDto4FromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateNotesRequestDto4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsUpdateNotesRequestDto4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateNotesRequestDto4' from JSON`,
  );
}

/** @internal */
export const AtsUpdateNotesRequestDtoSourceValue$inboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AtsUpdateNotesRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AtsUpdateNotesRequestDtoSourceValue$Outbound =
  | AtsUpdateNotesRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AtsUpdateNotesRequestDtoSourceValue$outboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoSourceValue$Outbound,
  z.ZodTypeDef,
  AtsUpdateNotesRequestDtoSourceValue
> = z.union([
  z.lazy(() => AtsUpdateNotesRequestDto4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateNotesRequestDtoSourceValue$ {
  /** @deprecated use `AtsUpdateNotesRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    AtsUpdateNotesRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    AtsUpdateNotesRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = AtsUpdateNotesRequestDtoSourceValue$Outbound;
}

export function atsUpdateNotesRequestDtoSourceValueToJSON(
  atsUpdateNotesRequestDtoSourceValue: AtsUpdateNotesRequestDtoSourceValue,
): string {
  return JSON.stringify(
    AtsUpdateNotesRequestDtoSourceValue$outboundSchema.parse(
      atsUpdateNotesRequestDtoSourceValue,
    ),
  );
}

export function atsUpdateNotesRequestDtoSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateNotesRequestDtoSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsUpdateNotesRequestDtoSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateNotesRequestDtoSourceValue' from JSON`,
  );
}

/** @internal */
export const AtsUpdateNotesRequestDtoValue$inboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsUpdateNotesRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsUpdateNotesRequestDtoValue$outboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoValueOpen,
  z.ZodTypeDef,
  AtsUpdateNotesRequestDtoValueOpen
> = z.union([
  z.nativeEnum(AtsUpdateNotesRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateNotesRequestDtoValue$ {
  /** @deprecated use `AtsUpdateNotesRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateNotesRequestDtoValue$inboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateNotesRequestDtoValue$outboundSchema;
}

/** @internal */
export const AtsUpdateNotesRequestDtoVisibility$inboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoVisibility,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => AtsUpdateNotesRequestDto4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AtsUpdateNotesRequestDtoValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AtsUpdateNotesRequestDtoVisibility$Outbound = {
  source_value?:
    | AtsUpdateNotesRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AtsUpdateNotesRequestDtoVisibility$outboundSchema: z.ZodType<
  AtsUpdateNotesRequestDtoVisibility$Outbound,
  z.ZodTypeDef,
  AtsUpdateNotesRequestDtoVisibility
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => AtsUpdateNotesRequestDto4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AtsUpdateNotesRequestDtoValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateNotesRequestDtoVisibility$ {
  /** @deprecated use `AtsUpdateNotesRequestDtoVisibility$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateNotesRequestDtoVisibility$inboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDtoVisibility$outboundSchema` instead. */
  export const outboundSchema =
    AtsUpdateNotesRequestDtoVisibility$outboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDtoVisibility$Outbound` instead. */
  export type Outbound = AtsUpdateNotesRequestDtoVisibility$Outbound;
}

export function atsUpdateNotesRequestDtoVisibilityToJSON(
  atsUpdateNotesRequestDtoVisibility: AtsUpdateNotesRequestDtoVisibility,
): string {
  return JSON.stringify(
    AtsUpdateNotesRequestDtoVisibility$outboundSchema.parse(
      atsUpdateNotesRequestDtoVisibility,
    ),
  );
}

export function atsUpdateNotesRequestDtoVisibilityFromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateNotesRequestDtoVisibility, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsUpdateNotesRequestDtoVisibility$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateNotesRequestDtoVisibility' from JSON`,
  );
}

/** @internal */
export const AtsUpdateNotesRequestDto$inboundSchema: z.ZodType<
  AtsUpdateNotesRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  author_id: z.nullable(z.string()).optional(),
  content: z.nullable(z.array(NoteContentApiModel$inboundSchema)).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  visibility: z.nullable(
    z.lazy(() => AtsUpdateNotesRequestDtoVisibility$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "author_id": "authorId",
  });
});

/** @internal */
export type AtsUpdateNotesRequestDto$Outbound = {
  author_id?: string | null | undefined;
  content?: Array<NoteContentApiModel$Outbound> | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  visibility?: AtsUpdateNotesRequestDtoVisibility$Outbound | null | undefined;
};

/** @internal */
export const AtsUpdateNotesRequestDto$outboundSchema: z.ZodType<
  AtsUpdateNotesRequestDto$Outbound,
  z.ZodTypeDef,
  AtsUpdateNotesRequestDto
> = z.object({
  authorId: z.nullable(z.string()).optional(),
  content: z.nullable(z.array(NoteContentApiModel$outboundSchema)).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  visibility: z.nullable(
    z.lazy(() => AtsUpdateNotesRequestDtoVisibility$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    authorId: "author_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateNotesRequestDto$ {
  /** @deprecated use `AtsUpdateNotesRequestDto$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateNotesRequestDto$inboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDto$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateNotesRequestDto$outboundSchema;
  /** @deprecated use `AtsUpdateNotesRequestDto$Outbound` instead. */
  export type Outbound = AtsUpdateNotesRequestDto$Outbound;
}

export function atsUpdateNotesRequestDtoToJSON(
  atsUpdateNotesRequestDto: AtsUpdateNotesRequestDto,
): string {
  return JSON.stringify(
    AtsUpdateNotesRequestDto$outboundSchema.parse(atsUpdateNotesRequestDto),
  );
}

export function atsUpdateNotesRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateNotesRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsUpdateNotesRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateNotesRequestDto' from JSON`,
  );
}
