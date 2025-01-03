/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Content,
  Content$inboundSchema,
  Content$Outbound,
  Content$outboundSchema,
} from "./content.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type ContentResult = {
  data: Content;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const ContentResult$inboundSchema: z.ZodType<
  ContentResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Content$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type ContentResult$Outbound = {
  data: Content$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const ContentResult$outboundSchema: z.ZodType<
  ContentResult$Outbound,
  z.ZodTypeDef,
  ContentResult
> = z.object({
  data: Content$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentResult$ {
  /** @deprecated use `ContentResult$inboundSchema` instead. */
  export const inboundSchema = ContentResult$inboundSchema;
  /** @deprecated use `ContentResult$outboundSchema` instead. */
  export const outboundSchema = ContentResult$outboundSchema;
  /** @deprecated use `ContentResult$Outbound` instead. */
  export type Outbound = ContentResult$Outbound;
}

export function contentResultToJSON(contentResult: ContentResult): string {
  return JSON.stringify(ContentResult$outboundSchema.parse(contentResult));
}

export function contentResultFromJSON(
  jsonString: string,
): SafeParseResult<ContentResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContentResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContentResult' from JSON`,
  );
}
