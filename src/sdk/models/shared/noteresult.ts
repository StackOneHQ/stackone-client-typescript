/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Note,
  Note$inboundSchema,
  Note$Outbound,
  Note$outboundSchema,
} from "./note.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type NoteResult = {
  data: Note;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const NoteResult$inboundSchema: z.ZodType<
  NoteResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Note$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type NoteResult$Outbound = {
  data: Note$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const NoteResult$outboundSchema: z.ZodType<
  NoteResult$Outbound,
  z.ZodTypeDef,
  NoteResult
> = z.object({
  data: Note$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NoteResult$ {
  /** @deprecated use `NoteResult$inboundSchema` instead. */
  export const inboundSchema = NoteResult$inboundSchema;
  /** @deprecated use `NoteResult$outboundSchema` instead. */
  export const outboundSchema = NoteResult$outboundSchema;
  /** @deprecated use `NoteResult$Outbound` instead. */
  export type Outbound = NoteResult$Outbound;
}

export function noteResultToJSON(noteResult: NoteResult): string {
  return JSON.stringify(NoteResult$outboundSchema.parse(noteResult));
}

export function noteResultFromJSON(
  jsonString: string,
): SafeParseResult<NoteResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NoteResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NoteResult' from JSON`,
  );
}
