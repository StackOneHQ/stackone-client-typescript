/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type JobHiringTeam = {
  /**
   * Email of the hiring team member.
   */
  email?: string | null | undefined;
  /**
   * First name of the hiring team member.
   */
  firstName?: string | null | undefined;
  /**
   * Last name of the hiring team member.
   */
  lastName?: string | null | undefined;
  /**
   * Provider's unique identifier of the user
   */
  remoteUserId?: string | null | undefined;
  /**
   * Role of the hiring team member.
   */
  role?: string | null | undefined;
  /**
   * User ID of the hiring team member.
   */
  userId?: string | null | undefined;
};

/** @internal */
export const JobHiringTeam$inboundSchema: z.ZodType<
  JobHiringTeam,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  remote_user_id: z.nullable(z.string()).optional(),
  role: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "remote_user_id": "remoteUserId",
    "user_id": "userId",
  });
});

/** @internal */
export type JobHiringTeam$Outbound = {
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  remote_user_id?: string | null | undefined;
  role?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const JobHiringTeam$outboundSchema: z.ZodType<
  JobHiringTeam$Outbound,
  z.ZodTypeDef,
  JobHiringTeam
> = z.object({
  email: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  remoteUserId: z.nullable(z.string()).optional(),
  role: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    remoteUserId: "remote_user_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobHiringTeam$ {
  /** @deprecated use `JobHiringTeam$inboundSchema` instead. */
  export const inboundSchema = JobHiringTeam$inboundSchema;
  /** @deprecated use `JobHiringTeam$outboundSchema` instead. */
  export const outboundSchema = JobHiringTeam$outboundSchema;
  /** @deprecated use `JobHiringTeam$Outbound` instead. */
  export type Outbound = JobHiringTeam$Outbound;
}

export function jobHiringTeamToJSON(jobHiringTeam: JobHiringTeam): string {
  return JSON.stringify(JobHiringTeam$outboundSchema.parse(jobHiringTeam));
}

export function jobHiringTeamFromJSON(
  jsonString: string,
): SafeParseResult<JobHiringTeam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => JobHiringTeam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'JobHiringTeam' from JSON`,
  );
}
