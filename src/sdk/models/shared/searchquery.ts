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

/**
 * The Operator of the query
 */
export enum Operator {
  Equal = "equal",
  NotEqual = "not_equal",
  Contain = "contain",
  LessThan = "less_than",
  GreaterThan = "greater_than",
  LessThanOrEqual = "less_than_or_equal",
  GreaterThanOrEqual = "greater_than_or_equal",
  And = "and",
  Or = "or",
  UnmappedValue = "unmapped_value",
}
/**
 * The Operator of the query
 */
export type OperatorOpen = OpenEnum<typeof Operator>;

export type SearchQuery4 = {};

/**
 * The value to search for
 */
export type SearchQueryValue =
  | SearchQuery4
  | string
  | number
  | boolean
  | Array<any>;

export type SearchQuery = {
  /**
   * The specific field to search within
   */
  field?: string | null | undefined;
  /**
   * The global search string to search in all text field
   */
  globalSearch?: string | null | undefined;
  /**
   * The Operator of the query
   */
  operator?: OperatorOpen | null | undefined;
  /**
   * Nested queries for complex search
   */
  queries?: Array<SearchQuery> | null | undefined;
  /**
   * The value to search for
   */
  value?:
    | SearchQuery4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
};

/** @internal */
export const Operator$inboundSchema: z.ZodType<
  OperatorOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(Operator),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Operator$outboundSchema: z.ZodType<
  OperatorOpen,
  z.ZodTypeDef,
  OperatorOpen
> = z.union([
  z.nativeEnum(Operator),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Operator$ {
  /** @deprecated use `Operator$inboundSchema` instead. */
  export const inboundSchema = Operator$inboundSchema;
  /** @deprecated use `Operator$outboundSchema` instead. */
  export const outboundSchema = Operator$outboundSchema;
}

/** @internal */
export const SearchQuery4$inboundSchema: z.ZodType<
  SearchQuery4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SearchQuery4$Outbound = {};

/** @internal */
export const SearchQuery4$outboundSchema: z.ZodType<
  SearchQuery4$Outbound,
  z.ZodTypeDef,
  SearchQuery4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchQuery4$ {
  /** @deprecated use `SearchQuery4$inboundSchema` instead. */
  export const inboundSchema = SearchQuery4$inboundSchema;
  /** @deprecated use `SearchQuery4$outboundSchema` instead. */
  export const outboundSchema = SearchQuery4$outboundSchema;
  /** @deprecated use `SearchQuery4$Outbound` instead. */
  export type Outbound = SearchQuery4$Outbound;
}

export function searchQuery4ToJSON(searchQuery4: SearchQuery4): string {
  return JSON.stringify(SearchQuery4$outboundSchema.parse(searchQuery4));
}

export function searchQuery4FromJSON(
  jsonString: string,
): SafeParseResult<SearchQuery4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchQuery4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchQuery4' from JSON`,
  );
}

/** @internal */
export const SearchQueryValue$inboundSchema: z.ZodType<
  SearchQueryValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => SearchQuery4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type SearchQueryValue$Outbound =
  | SearchQuery4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const SearchQueryValue$outboundSchema: z.ZodType<
  SearchQueryValue$Outbound,
  z.ZodTypeDef,
  SearchQueryValue
> = z.union([
  z.lazy(() => SearchQuery4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchQueryValue$ {
  /** @deprecated use `SearchQueryValue$inboundSchema` instead. */
  export const inboundSchema = SearchQueryValue$inboundSchema;
  /** @deprecated use `SearchQueryValue$outboundSchema` instead. */
  export const outboundSchema = SearchQueryValue$outboundSchema;
  /** @deprecated use `SearchQueryValue$Outbound` instead. */
  export type Outbound = SearchQueryValue$Outbound;
}

export function searchQueryValueToJSON(
  searchQueryValue: SearchQueryValue,
): string {
  return JSON.stringify(
    SearchQueryValue$outboundSchema.parse(searchQueryValue),
  );
}

export function searchQueryValueFromJSON(
  jsonString: string,
): SafeParseResult<SearchQueryValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchQueryValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchQueryValue' from JSON`,
  );
}

/** @internal */
export const SearchQuery$inboundSchema: z.ZodType<
  SearchQuery,
  z.ZodTypeDef,
  unknown
> = z.object({
  field: z.nullable(z.string()).optional(),
  global_search: z.nullable(z.string()).optional(),
  operator: z.nullable(Operator$inboundSchema).optional(),
  queries: z.nullable(z.array(z.lazy(() => SearchQuery$inboundSchema)))
    .optional(),
  value: z.nullable(
    z.union([
      z.lazy(() => SearchQuery4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "global_search": "globalSearch",
  });
});

/** @internal */
export type SearchQuery$Outbound = {
  field?: string | null | undefined;
  global_search?: string | null | undefined;
  operator?: string | null | undefined;
  queries?: Array<SearchQuery$Outbound> | null | undefined;
  value?:
    | SearchQuery4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
};

/** @internal */
export const SearchQuery$outboundSchema: z.ZodType<
  SearchQuery$Outbound,
  z.ZodTypeDef,
  SearchQuery
> = z.object({
  field: z.nullable(z.string()).optional(),
  globalSearch: z.nullable(z.string()).optional(),
  operator: z.nullable(Operator$outboundSchema).optional(),
  queries: z.nullable(z.array(z.lazy(() => SearchQuery$outboundSchema)))
    .optional(),
  value: z.nullable(
    z.union([
      z.lazy(() => SearchQuery4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    globalSearch: "global_search",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchQuery$ {
  /** @deprecated use `SearchQuery$inboundSchema` instead. */
  export const inboundSchema = SearchQuery$inboundSchema;
  /** @deprecated use `SearchQuery$outboundSchema` instead. */
  export const outboundSchema = SearchQuery$outboundSchema;
  /** @deprecated use `SearchQuery$Outbound` instead. */
  export type Outbound = SearchQuery$Outbound;
}

export function searchQueryToJSON(searchQuery: SearchQuery): string {
  return JSON.stringify(SearchQuery$outboundSchema.parse(searchQuery));
}

export function searchQueryFromJSON(
  jsonString: string,
): SafeParseResult<SearchQuery, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchQuery$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchQuery' from JSON`,
  );
}
