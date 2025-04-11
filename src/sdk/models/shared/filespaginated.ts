/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Files,
  Files$inboundSchema,
  Files$Outbound,
  Files$outboundSchema,
} from "./files.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type FilesPaginated = {
  data: Array<Files>;
  next?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const FilesPaginated$inboundSchema: z.ZodType<
  FilesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Files$inboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type FilesPaginated$Outbound = {
  data: Array<Files$Outbound>;
  next?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const FilesPaginated$outboundSchema: z.ZodType<
  FilesPaginated$Outbound,
  z.ZodTypeDef,
  FilesPaginated
> = z.object({
  data: z.array(Files$outboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesPaginated$ {
  /** @deprecated use `FilesPaginated$inboundSchema` instead. */
  export const inboundSchema = FilesPaginated$inboundSchema;
  /** @deprecated use `FilesPaginated$outboundSchema` instead. */
  export const outboundSchema = FilesPaginated$outboundSchema;
  /** @deprecated use `FilesPaginated$Outbound` instead. */
  export type Outbound = FilesPaginated$Outbound;
}

export function filesPaginatedToJSON(filesPaginated: FilesPaginated): string {
  return JSON.stringify(FilesPaginated$outboundSchema.parse(filesPaginated));
}

export function filesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<FilesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FilesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FilesPaginated' from JSON`,
  );
}
