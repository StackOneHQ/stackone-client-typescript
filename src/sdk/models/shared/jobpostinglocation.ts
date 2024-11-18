/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type JobPostingLocation = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

/** @internal */
export const JobPostingLocation$inboundSchema: z.ZodType<
  JobPostingLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type JobPostingLocation$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const JobPostingLocation$outboundSchema: z.ZodType<
  JobPostingLocation$Outbound,
  z.ZodTypeDef,
  JobPostingLocation
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobPostingLocation$ {
  /** @deprecated use `JobPostingLocation$inboundSchema` instead. */
  export const inboundSchema = JobPostingLocation$inboundSchema;
  /** @deprecated use `JobPostingLocation$outboundSchema` instead. */
  export const outboundSchema = JobPostingLocation$outboundSchema;
  /** @deprecated use `JobPostingLocation$Outbound` instead. */
  export type Outbound = JobPostingLocation$Outbound;
}

export function jobPostingLocationToJSON(
  jobPostingLocation: JobPostingLocation,
): string {
  return JSON.stringify(
    JobPostingLocation$outboundSchema.parse(jobPostingLocation),
  );
}

export function jobPostingLocationFromJSON(
  jsonString: string,
): SafeParseResult<JobPostingLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobPostingLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobPostingLocation' from JSON`,
  );
}
