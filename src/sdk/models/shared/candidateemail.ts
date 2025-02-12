/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CandidateEmail = {
  /**
   * Type of the email
   */
  type?: string | null | undefined;
  /**
   * Email value
   */
  value?: string | null | undefined;
};

/** @internal */
export const CandidateEmail$inboundSchema: z.ZodType<
  CandidateEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
});

/** @internal */
export type CandidateEmail$Outbound = {
  type?: string | null | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CandidateEmail$outboundSchema: z.ZodType<
  CandidateEmail$Outbound,
  z.ZodTypeDef,
  CandidateEmail
> = z.object({
  type: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateEmail$ {
  /** @deprecated use `CandidateEmail$inboundSchema` instead. */
  export const inboundSchema = CandidateEmail$inboundSchema;
  /** @deprecated use `CandidateEmail$outboundSchema` instead. */
  export const outboundSchema = CandidateEmail$outboundSchema;
  /** @deprecated use `CandidateEmail$Outbound` instead. */
  export type Outbound = CandidateEmail$Outbound;
}

export function candidateEmailToJSON(candidateEmail: CandidateEmail): string {
  return JSON.stringify(CandidateEmail$outboundSchema.parse(candidateEmail));
}

export function candidateEmailFromJSON(
  jsonString: string,
): SafeParseResult<CandidateEmail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CandidateEmail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CandidateEmail' from JSON`,
  );
}
