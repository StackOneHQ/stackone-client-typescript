/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Candidate,
  Candidate$inboundSchema,
  Candidate$Outbound,
  Candidate$outboundSchema,
} from "./candidate.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type CandidatesPaginated = {
  data: Array<Candidate>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CandidatesPaginated$inboundSchema: z.ZodType<
  CandidatesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Candidate$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type CandidatesPaginated$Outbound = {
  data: Array<Candidate$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CandidatesPaginated$outboundSchema: z.ZodType<
  CandidatesPaginated$Outbound,
  z.ZodTypeDef,
  CandidatesPaginated
> = z.object({
  data: z.array(Candidate$outboundSchema),
  next: z.nullable(z.string()).optional(),
  nextPage: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    nextPage: "next_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidatesPaginated$ {
  /** @deprecated use `CandidatesPaginated$inboundSchema` instead. */
  export const inboundSchema = CandidatesPaginated$inboundSchema;
  /** @deprecated use `CandidatesPaginated$outboundSchema` instead. */
  export const outboundSchema = CandidatesPaginated$outboundSchema;
  /** @deprecated use `CandidatesPaginated$Outbound` instead. */
  export type Outbound = CandidatesPaginated$Outbound;
}

export function candidatesPaginatedToJSON(
  candidatesPaginated: CandidatesPaginated,
): string {
  return JSON.stringify(
    CandidatesPaginated$outboundSchema.parse(candidatesPaginated),
  );
}

export function candidatesPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<CandidatesPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CandidatesPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CandidatesPaginated' from JSON`,
  );
}
