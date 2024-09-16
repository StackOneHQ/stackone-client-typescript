/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  CandidateCustomFields,
  CandidateCustomFields$inboundSchema,
  CandidateCustomFields$Outbound,
  CandidateCustomFields$outboundSchema,
} from "./candidatecustomfields.js";
import {
  SocialLink,
  SocialLink$inboundSchema,
  SocialLink$Outbound,
  SocialLink$outboundSchema,
} from "./sociallink.js";

export type AtsCreateCandidateRequestDto = {
  /**
   * Candidate company
   */
  company?: string | null | undefined;
  /**
   * Candidate country
   */
  country?: string | null | undefined;
  /**
   * The candidate custom fields
   */
  customFields?: Array<CandidateCustomFields> | null | undefined;
  /**
   * Candidate email
   */
  email?: string | null | undefined;
  /**
   * Candidate first name
   */
  firstName?: string | null | undefined;
  /**
   * Candidate hired date
   */
  hiredAt?: Date | null | undefined;
  /**
   * Candidate last name
   */
  lastName?: string | null | undefined;
  /**
   * Candidate name
   */
  name?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * The candidate personal phone number
   */
  phoneNumber?: string | null | undefined;
  /**
   * List of candidate social links
   */
  socialLinks?: Array<SocialLink> | null | undefined;
  /**
   * Candidate title
   */
  title?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const AtsCreateCandidateRequestDto$inboundSchema: z.ZodType<
  AtsCreateCandidateRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  company: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  custom_fields: z.nullable(z.array(CandidateCustomFields$inboundSchema))
    .optional(),
  email: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  hired_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  last_name: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  phone_number: z.nullable(z.string()).optional(),
  social_links: z.nullable(z.array(SocialLink$inboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_fields": "customFields",
    "first_name": "firstName",
    "hired_at": "hiredAt",
    "last_name": "lastName",
    "phone_number": "phoneNumber",
    "social_links": "socialLinks",
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type AtsCreateCandidateRequestDto$Outbound = {
  company?: string | null | undefined;
  country?: string | null | undefined;
  custom_fields?: Array<CandidateCustomFields$Outbound> | null | undefined;
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  hired_at?: string | null | undefined;
  last_name?: string | null | undefined;
  name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  phone_number?: string | null | undefined;
  social_links?: Array<SocialLink$Outbound> | null | undefined;
  title?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const AtsCreateCandidateRequestDto$outboundSchema: z.ZodType<
  AtsCreateCandidateRequestDto$Outbound,
  z.ZodTypeDef,
  AtsCreateCandidateRequestDto
> = z.object({
  company: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  customFields: z.nullable(z.array(CandidateCustomFields$outboundSchema))
    .optional(),
  email: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  hiredAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  lastName: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  phoneNumber: z.nullable(z.string()).optional(),
  socialLinks: z.nullable(z.array(SocialLink$outboundSchema)).optional(),
  title: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    customFields: "custom_fields",
    firstName: "first_name",
    hiredAt: "hired_at",
    lastName: "last_name",
    phoneNumber: "phone_number",
    socialLinks: "social_links",
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateCandidateRequestDto$ {
  /** @deprecated use `AtsCreateCandidateRequestDto$inboundSchema` instead. */
  export const inboundSchema = AtsCreateCandidateRequestDto$inboundSchema;
  /** @deprecated use `AtsCreateCandidateRequestDto$outboundSchema` instead. */
  export const outboundSchema = AtsCreateCandidateRequestDto$outboundSchema;
  /** @deprecated use `AtsCreateCandidateRequestDto$Outbound` instead. */
  export type Outbound = AtsCreateCandidateRequestDto$Outbound;
}
