/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  JobPosting,
  JobPosting$inboundSchema,
  JobPosting$Outbound,
  JobPosting$outboundSchema,
} from "./jobposting.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type JobPostingsPaginated = {
  data: Array<JobPosting>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const JobPostingsPaginated$inboundSchema: z.ZodType<
  JobPostingsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(JobPosting$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type JobPostingsPaginated$Outbound = {
  data: Array<JobPosting$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const JobPostingsPaginated$outboundSchema: z.ZodType<
  JobPostingsPaginated$Outbound,
  z.ZodTypeDef,
  JobPostingsPaginated
> = z.object({
  data: z.array(JobPosting$outboundSchema),
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
export namespace JobPostingsPaginated$ {
  /** @deprecated use `JobPostingsPaginated$inboundSchema` instead. */
  export const inboundSchema = JobPostingsPaginated$inboundSchema;
  /** @deprecated use `JobPostingsPaginated$outboundSchema` instead. */
  export const outboundSchema = JobPostingsPaginated$outboundSchema;
  /** @deprecated use `JobPostingsPaginated$Outbound` instead. */
  export type Outbound = JobPostingsPaginated$Outbound;
}
