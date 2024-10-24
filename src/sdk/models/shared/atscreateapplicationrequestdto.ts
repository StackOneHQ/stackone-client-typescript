/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import {
  CandidateCustomFields,
  CandidateCustomFields$inboundSchema,
  CandidateCustomFields$Outbound,
  CandidateCustomFields$outboundSchema,
} from "./candidatecustomfields.js";
import {
  CreateQuestionnaire,
  CreateQuestionnaire$inboundSchema,
  CreateQuestionnaire$Outbound,
  CreateQuestionnaire$outboundSchema,
} from "./createquestionnaire.js";
import {
  SocialLink,
  SocialLink$inboundSchema,
  SocialLink$Outbound,
  SocialLink$outboundSchema,
} from "./sociallink.js";

export type AtsCreateApplicationRequestDto4 = {};

/**
 * The source value of the application status.
 */
export type AtsCreateApplicationRequestDtoSourceValue =
  | AtsCreateApplicationRequestDto4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the application.
 */
export enum AtsCreateApplicationRequestDtoValue {
  Active = "active",
  Assessment = "assessment",
  BackgroundCheck = "background_check",
  Converted = "converted",
  DeclinedByCandidate = "declined_by_candidate",
  Hired = "hired",
  Interview = "interview",
  Lead = "lead",
  Offer = "offer",
  ReferenceCheck = "reference_check",
  Rejected = "rejected",
  Review = "review",
  Screen = "screen",
  New = "new",
  Onboarding = "onboarding",
  Created = "created",
  Accepted = "accepted",
  ShortList = "short_list",
  Approved = "approved",
  UnmappedValue = "unmapped_value",
}
/**
 * The status of the application.
 */
export type AtsCreateApplicationRequestDtoValueOpen = OpenEnum<
  typeof AtsCreateApplicationRequestDtoValue
>;

export type AtsCreateApplicationRequestDtoApplicationStatus = {
  /**
   * The source value of the application status.
   */
  sourceValue?:
    | AtsCreateApplicationRequestDto4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the application.
   */
  value?: AtsCreateApplicationRequestDtoValueOpen | null | undefined;
};

/**
 * Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application.
 */
export type AtsCreateApplicationRequestDtoCandidate = {
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

export type AtsCreateApplicationRequestDtoSource = {
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The source of the application
   */
  name?: string | null | undefined;
};

export type AtsCreateApplicationRequestDto = {
  applicationStatus?:
    | AtsCreateApplicationRequestDtoApplicationStatus
    | null
    | undefined;
  /**
   * Candidate Properties. Provide this OR candidate_id, but not both. Providing this attempts to create a new candidate with the application.
   */
  candidate?: AtsCreateApplicationRequestDtoCandidate | null | undefined;
  /**
   * Unique identifier of the candidate. Provide this OR candidate, but not both.
   */
  candidateId?: string | null | undefined;
  /**
   * Unique identifier of the job
   */
  jobId?: string | null | undefined;
  /**
   * Unique identifier of the location
   */
  locationId?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Questionnaires associated with the application
   */
  questionnaires?: Array<CreateQuestionnaire> | null | undefined;
  source?: AtsCreateApplicationRequestDtoSource | null | undefined;
};

/** @internal */
export const AtsCreateApplicationRequestDto4$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDto4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AtsCreateApplicationRequestDto4$Outbound = {};

/** @internal */
export const AtsCreateApplicationRequestDto4$outboundSchema: z.ZodType<
  AtsCreateApplicationRequestDto4$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDto4$ {
  /** @deprecated use `AtsCreateApplicationRequestDto4$inboundSchema` instead. */
  export const inboundSchema = AtsCreateApplicationRequestDto4$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDto4$outboundSchema` instead. */
  export const outboundSchema = AtsCreateApplicationRequestDto4$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDto4$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequestDto4$Outbound;
}

/** @internal */
export const AtsCreateApplicationRequestDtoSourceValue$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AtsCreateApplicationRequestDto4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AtsCreateApplicationRequestDtoSourceValue$Outbound =
  | AtsCreateApplicationRequestDto4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AtsCreateApplicationRequestDtoSourceValue$outboundSchema:
  z.ZodType<
    AtsCreateApplicationRequestDtoSourceValue$Outbound,
    z.ZodTypeDef,
    AtsCreateApplicationRequestDtoSourceValue
  > = z.union([
    z.lazy(() => AtsCreateApplicationRequestDto4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDtoSourceValue$ {
  /** @deprecated use `AtsCreateApplicationRequestDtoSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    AtsCreateApplicationRequestDtoSourceValue$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    AtsCreateApplicationRequestDtoSourceValue$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoSourceValue$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequestDtoSourceValue$Outbound;
}

/** @internal */
export const AtsCreateApplicationRequestDtoValue$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AtsCreateApplicationRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AtsCreateApplicationRequestDtoValue$outboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoValueOpen,
  z.ZodTypeDef,
  AtsCreateApplicationRequestDtoValueOpen
> = z.union([
  z.nativeEnum(AtsCreateApplicationRequestDtoValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDtoValue$ {
  /** @deprecated use `AtsCreateApplicationRequestDtoValue$inboundSchema` instead. */
  export const inboundSchema =
    AtsCreateApplicationRequestDtoValue$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoValue$outboundSchema` instead. */
  export const outboundSchema =
    AtsCreateApplicationRequestDtoValue$outboundSchema;
}

/** @internal */
export const AtsCreateApplicationRequestDtoApplicationStatus$inboundSchema:
  z.ZodType<
    AtsCreateApplicationRequestDtoApplicationStatus,
    z.ZodTypeDef,
    unknown
  > = z.object({
    source_value: z.nullable(
      z.union([
        z.lazy(() => AtsCreateApplicationRequestDto4$inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(AtsCreateApplicationRequestDtoValue$inboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "source_value": "sourceValue",
    });
  });

/** @internal */
export type AtsCreateApplicationRequestDtoApplicationStatus$Outbound = {
  source_value?:
    | AtsCreateApplicationRequestDto4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AtsCreateApplicationRequestDtoApplicationStatus$outboundSchema:
  z.ZodType<
    AtsCreateApplicationRequestDtoApplicationStatus$Outbound,
    z.ZodTypeDef,
    AtsCreateApplicationRequestDtoApplicationStatus
  > = z.object({
    sourceValue: z.nullable(
      z.union([
        z.lazy(() => AtsCreateApplicationRequestDto4$outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
        z.array(z.any()),
      ]),
    ).optional(),
    value: z.nullable(AtsCreateApplicationRequestDtoValue$outboundSchema)
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      sourceValue: "source_value",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDtoApplicationStatus$ {
  /** @deprecated use `AtsCreateApplicationRequestDtoApplicationStatus$inboundSchema` instead. */
  export const inboundSchema =
    AtsCreateApplicationRequestDtoApplicationStatus$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoApplicationStatus$outboundSchema` instead. */
  export const outboundSchema =
    AtsCreateApplicationRequestDtoApplicationStatus$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoApplicationStatus$Outbound` instead. */
  export type Outbound =
    AtsCreateApplicationRequestDtoApplicationStatus$Outbound;
}

/** @internal */
export const AtsCreateApplicationRequestDtoCandidate$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoCandidate,
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
export type AtsCreateApplicationRequestDtoCandidate$Outbound = {
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
export const AtsCreateApplicationRequestDtoCandidate$outboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoCandidate$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationRequestDtoCandidate
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
export namespace AtsCreateApplicationRequestDtoCandidate$ {
  /** @deprecated use `AtsCreateApplicationRequestDtoCandidate$inboundSchema` instead. */
  export const inboundSchema =
    AtsCreateApplicationRequestDtoCandidate$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoCandidate$outboundSchema` instead. */
  export const outboundSchema =
    AtsCreateApplicationRequestDtoCandidate$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoCandidate$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequestDtoCandidate$Outbound;
}

/** @internal */
export const AtsCreateApplicationRequestDtoSource$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoSource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type AtsCreateApplicationRequestDtoSource$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const AtsCreateApplicationRequestDtoSource$outboundSchema: z.ZodType<
  AtsCreateApplicationRequestDtoSource$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationRequestDtoSource
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDtoSource$ {
  /** @deprecated use `AtsCreateApplicationRequestDtoSource$inboundSchema` instead. */
  export const inboundSchema =
    AtsCreateApplicationRequestDtoSource$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoSource$outboundSchema` instead. */
  export const outboundSchema =
    AtsCreateApplicationRequestDtoSource$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDtoSource$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequestDtoSource$Outbound;
}

/** @internal */
export const AtsCreateApplicationRequestDto$inboundSchema: z.ZodType<
  AtsCreateApplicationRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_status: z.nullable(
    z.lazy(() => AtsCreateApplicationRequestDtoApplicationStatus$inboundSchema),
  ).optional(),
  candidate: z.nullable(
    z.lazy(() => AtsCreateApplicationRequestDtoCandidate$inboundSchema),
  ).optional(),
  candidate_id: z.nullable(z.string()).optional(),
  job_id: z.nullable(z.string()).optional(),
  location_id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  questionnaires: z.nullable(z.array(CreateQuestionnaire$inboundSchema))
    .optional(),
  source: z.nullable(
    z.lazy(() => AtsCreateApplicationRequestDtoSource$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_status": "applicationStatus",
    "candidate_id": "candidateId",
    "job_id": "jobId",
    "location_id": "locationId",
  });
});

/** @internal */
export type AtsCreateApplicationRequestDto$Outbound = {
  application_status?:
    | AtsCreateApplicationRequestDtoApplicationStatus$Outbound
    | null
    | undefined;
  candidate?:
    | AtsCreateApplicationRequestDtoCandidate$Outbound
    | null
    | undefined;
  candidate_id?: string | null | undefined;
  job_id?: string | null | undefined;
  location_id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  questionnaires?: Array<CreateQuestionnaire$Outbound> | null | undefined;
  source?: AtsCreateApplicationRequestDtoSource$Outbound | null | undefined;
};

/** @internal */
export const AtsCreateApplicationRequestDto$outboundSchema: z.ZodType<
  AtsCreateApplicationRequestDto$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationRequestDto
> = z.object({
  applicationStatus: z.nullable(
    z.lazy(() =>
      AtsCreateApplicationRequestDtoApplicationStatus$outboundSchema
    ),
  ).optional(),
  candidate: z.nullable(
    z.lazy(() => AtsCreateApplicationRequestDtoCandidate$outboundSchema),
  ).optional(),
  candidateId: z.nullable(z.string()).optional(),
  jobId: z.nullable(z.string()).optional(),
  locationId: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  questionnaires: z.nullable(z.array(CreateQuestionnaire$outboundSchema))
    .optional(),
  source: z.nullable(
    z.lazy(() => AtsCreateApplicationRequestDtoSource$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationStatus: "application_status",
    candidateId: "candidate_id",
    jobId: "job_id",
    locationId: "location_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequestDto$ {
  /** @deprecated use `AtsCreateApplicationRequestDto$inboundSchema` instead. */
  export const inboundSchema = AtsCreateApplicationRequestDto$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDto$outboundSchema` instead. */
  export const outboundSchema = AtsCreateApplicationRequestDto$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequestDto$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequestDto$Outbound;
}
