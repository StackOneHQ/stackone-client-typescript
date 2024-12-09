/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AssessmentsRequestsJobHiringTeamApiModel,
  AssessmentsRequestsJobHiringTeamApiModel$inboundSchema,
  AssessmentsRequestsJobHiringTeamApiModel$Outbound,
  AssessmentsRequestsJobHiringTeamApiModel$outboundSchema,
} from "./assessmentsrequestsjobhiringteamapimodel.js";
import {
  CandidateEmail,
  CandidateEmail$inboundSchema,
  CandidateEmail$Outbound,
  CandidateEmail$outboundSchema,
} from "./candidateemail.js";

export type AssessmentsOrder4 = {};

/**
 * The source value of the application status.
 */
export type AssessmentsOrderSourceValue =
  | AssessmentsOrder4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the application.
 */
export enum AssessmentsOrderValue {
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
export type AssessmentsOrderValueOpen = OpenEnum<typeof AssessmentsOrderValue>;

export type AssessmentsOrderApplicationStatus = {
  /**
   * The source value of the application status.
   */
  sourceValue?:
    | AssessmentsOrder4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the application.
   */
  value?: AssessmentsOrderValueOpen | null | undefined;
};

export type AssessmentsOrderApplication = {
  applicationStatus?: AssessmentsOrderApplicationStatus | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
};

export type AssessmentsOrderCandidate = {
  /**
   * List of candidate emails
   */
  emails?: Array<CandidateEmail> | null | undefined;
  /**
   * Candidate first name
   */
  firstName?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Candidate last name
   */
  lastName?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Candidate profile url
   */
  profileUrl?: string | null | undefined;
};

export type AssessmentsOrderJob = {
  /**
   * Hiring team for the job.
   */
  hiringTeam?:
    | Array<AssessmentsRequestsJobHiringTeamApiModel>
    | null
    | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Title of the job
   */
  title?: string | null | undefined;
};

export type Package = {
  /**
   * Package description
   */
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Package name
   */
  name?: string | null | undefined;
};

export type Requester = {
  /**
   * List of candidate emails
   */
  emails?: Array<CandidateEmail> | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
};

export type AssessmentsOrder = {
  application?: AssessmentsOrderApplication | null | undefined;
  candidate?: AssessmentsOrderCandidate | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  job?: AssessmentsOrderJob | null | undefined;
  package?: Package | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  requester?: Requester | null | undefined;
  /**
   * Results update url
   */
  resultsUpdateUrl?: string | null | undefined;
};

/** @internal */
export const AssessmentsOrder4$inboundSchema: z.ZodType<
  AssessmentsOrder4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type AssessmentsOrder4$Outbound = {};

/** @internal */
export const AssessmentsOrder4$outboundSchema: z.ZodType<
  AssessmentsOrder4$Outbound,
  z.ZodTypeDef,
  AssessmentsOrder4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrder4$ {
  /** @deprecated use `AssessmentsOrder4$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrder4$inboundSchema;
  /** @deprecated use `AssessmentsOrder4$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrder4$outboundSchema;
  /** @deprecated use `AssessmentsOrder4$Outbound` instead. */
  export type Outbound = AssessmentsOrder4$Outbound;
}

export function assessmentsOrder4ToJSON(
  assessmentsOrder4: AssessmentsOrder4,
): string {
  return JSON.stringify(
    AssessmentsOrder4$outboundSchema.parse(assessmentsOrder4),
  );
}

export function assessmentsOrder4FromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrder4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrder4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrder4' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrderSourceValue$inboundSchema: z.ZodType<
  AssessmentsOrderSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => AssessmentsOrder4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type AssessmentsOrderSourceValue$Outbound =
  | AssessmentsOrder4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const AssessmentsOrderSourceValue$outboundSchema: z.ZodType<
  AssessmentsOrderSourceValue$Outbound,
  z.ZodTypeDef,
  AssessmentsOrderSourceValue
> = z.union([
  z.lazy(() => AssessmentsOrder4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderSourceValue$ {
  /** @deprecated use `AssessmentsOrderSourceValue$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderSourceValue$inboundSchema;
  /** @deprecated use `AssessmentsOrderSourceValue$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrderSourceValue$outboundSchema;
  /** @deprecated use `AssessmentsOrderSourceValue$Outbound` instead. */
  export type Outbound = AssessmentsOrderSourceValue$Outbound;
}

export function assessmentsOrderSourceValueToJSON(
  assessmentsOrderSourceValue: AssessmentsOrderSourceValue,
): string {
  return JSON.stringify(
    AssessmentsOrderSourceValue$outboundSchema.parse(
      assessmentsOrderSourceValue,
    ),
  );
}

export function assessmentsOrderSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrderSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrderSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrderSourceValue' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrderValue$inboundSchema: z.ZodType<
  AssessmentsOrderValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AssessmentsOrderValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AssessmentsOrderValue$outboundSchema: z.ZodType<
  AssessmentsOrderValueOpen,
  z.ZodTypeDef,
  AssessmentsOrderValueOpen
> = z.union([
  z.nativeEnum(AssessmentsOrderValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderValue$ {
  /** @deprecated use `AssessmentsOrderValue$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderValue$inboundSchema;
  /** @deprecated use `AssessmentsOrderValue$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrderValue$outboundSchema;
}

/** @internal */
export const AssessmentsOrderApplicationStatus$inboundSchema: z.ZodType<
  AssessmentsOrderApplicationStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => AssessmentsOrder4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsOrderValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type AssessmentsOrderApplicationStatus$Outbound = {
  source_value?:
    | AssessmentsOrder4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const AssessmentsOrderApplicationStatus$outboundSchema: z.ZodType<
  AssessmentsOrderApplicationStatus$Outbound,
  z.ZodTypeDef,
  AssessmentsOrderApplicationStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => AssessmentsOrder4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(AssessmentsOrderValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderApplicationStatus$ {
  /** @deprecated use `AssessmentsOrderApplicationStatus$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderApplicationStatus$inboundSchema;
  /** @deprecated use `AssessmentsOrderApplicationStatus$outboundSchema` instead. */
  export const outboundSchema =
    AssessmentsOrderApplicationStatus$outboundSchema;
  /** @deprecated use `AssessmentsOrderApplicationStatus$Outbound` instead. */
  export type Outbound = AssessmentsOrderApplicationStatus$Outbound;
}

export function assessmentsOrderApplicationStatusToJSON(
  assessmentsOrderApplicationStatus: AssessmentsOrderApplicationStatus,
): string {
  return JSON.stringify(
    AssessmentsOrderApplicationStatus$outboundSchema.parse(
      assessmentsOrderApplicationStatus,
    ),
  );
}

export function assessmentsOrderApplicationStatusFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrderApplicationStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrderApplicationStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrderApplicationStatus' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrderApplication$inboundSchema: z.ZodType<
  AssessmentsOrderApplication,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_status: z.nullable(
    z.lazy(() => AssessmentsOrderApplicationStatus$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_status": "applicationStatus",
  });
});

/** @internal */
export type AssessmentsOrderApplication$Outbound = {
  application_status?:
    | AssessmentsOrderApplicationStatus$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const AssessmentsOrderApplication$outboundSchema: z.ZodType<
  AssessmentsOrderApplication$Outbound,
  z.ZodTypeDef,
  AssessmentsOrderApplication
> = z.object({
  applicationStatus: z.nullable(
    z.lazy(() => AssessmentsOrderApplicationStatus$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationStatus: "application_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderApplication$ {
  /** @deprecated use `AssessmentsOrderApplication$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderApplication$inboundSchema;
  /** @deprecated use `AssessmentsOrderApplication$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrderApplication$outboundSchema;
  /** @deprecated use `AssessmentsOrderApplication$Outbound` instead. */
  export type Outbound = AssessmentsOrderApplication$Outbound;
}

export function assessmentsOrderApplicationToJSON(
  assessmentsOrderApplication: AssessmentsOrderApplication,
): string {
  return JSON.stringify(
    AssessmentsOrderApplication$outboundSchema.parse(
      assessmentsOrderApplication,
    ),
  );
}

export function assessmentsOrderApplicationFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrderApplication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrderApplication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrderApplication' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrderCandidate$inboundSchema: z.ZodType<
  AssessmentsOrderCandidate,
  z.ZodTypeDef,
  unknown
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$inboundSchema)).optional(),
  first_name: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  profile_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "profile_url": "profileUrl",
  });
});

/** @internal */
export type AssessmentsOrderCandidate$Outbound = {
  emails?: Array<CandidateEmail$Outbound> | null | undefined;
  first_name?: string | null | undefined;
  id?: string | null | undefined;
  last_name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  profile_url?: string | null | undefined;
};

/** @internal */
export const AssessmentsOrderCandidate$outboundSchema: z.ZodType<
  AssessmentsOrderCandidate$Outbound,
  z.ZodTypeDef,
  AssessmentsOrderCandidate
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$outboundSchema)).optional(),
  firstName: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  profileUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    profileUrl: "profile_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderCandidate$ {
  /** @deprecated use `AssessmentsOrderCandidate$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderCandidate$inboundSchema;
  /** @deprecated use `AssessmentsOrderCandidate$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrderCandidate$outboundSchema;
  /** @deprecated use `AssessmentsOrderCandidate$Outbound` instead. */
  export type Outbound = AssessmentsOrderCandidate$Outbound;
}

export function assessmentsOrderCandidateToJSON(
  assessmentsOrderCandidate: AssessmentsOrderCandidate,
): string {
  return JSON.stringify(
    AssessmentsOrderCandidate$outboundSchema.parse(assessmentsOrderCandidate),
  );
}

export function assessmentsOrderCandidateFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrderCandidate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrderCandidate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrderCandidate' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrderJob$inboundSchema: z.ZodType<
  AssessmentsOrderJob,
  z.ZodTypeDef,
  unknown
> = z.object({
  hiring_team: z.nullable(
    z.array(AssessmentsRequestsJobHiringTeamApiModel$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "hiring_team": "hiringTeam",
  });
});

/** @internal */
export type AssessmentsOrderJob$Outbound = {
  hiring_team?:
    | Array<AssessmentsRequestsJobHiringTeamApiModel$Outbound>
    | null
    | undefined;
  id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  title?: string | null | undefined;
};

/** @internal */
export const AssessmentsOrderJob$outboundSchema: z.ZodType<
  AssessmentsOrderJob$Outbound,
  z.ZodTypeDef,
  AssessmentsOrderJob
> = z.object({
  hiringTeam: z.nullable(
    z.array(AssessmentsRequestsJobHiringTeamApiModel$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hiringTeam: "hiring_team",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrderJob$ {
  /** @deprecated use `AssessmentsOrderJob$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrderJob$inboundSchema;
  /** @deprecated use `AssessmentsOrderJob$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrderJob$outboundSchema;
  /** @deprecated use `AssessmentsOrderJob$Outbound` instead. */
  export type Outbound = AssessmentsOrderJob$Outbound;
}

export function assessmentsOrderJobToJSON(
  assessmentsOrderJob: AssessmentsOrderJob,
): string {
  return JSON.stringify(
    AssessmentsOrderJob$outboundSchema.parse(assessmentsOrderJob),
  );
}

export function assessmentsOrderJobFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrderJob, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrderJob$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrderJob' from JSON`,
  );
}

/** @internal */
export const Package$inboundSchema: z.ZodType<Package, z.ZodTypeDef, unknown> =
  z.object({
    description: z.nullable(z.string()).optional(),
    id: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Package$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const Package$outboundSchema: z.ZodType<
  Package$Outbound,
  z.ZodTypeDef,
  Package
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Package$ {
  /** @deprecated use `Package$inboundSchema` instead. */
  export const inboundSchema = Package$inboundSchema;
  /** @deprecated use `Package$outboundSchema` instead. */
  export const outboundSchema = Package$outboundSchema;
  /** @deprecated use `Package$Outbound` instead. */
  export type Outbound = Package$Outbound;
}

export function packageToJSON(value: Package): string {
  return JSON.stringify(Package$outboundSchema.parse(value));
}

export function packageFromJSON(
  jsonString: string,
): SafeParseResult<Package, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Package$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Package' from JSON`,
  );
}

/** @internal */
export const Requester$inboundSchema: z.ZodType<
  Requester,
  z.ZodTypeDef,
  unknown
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$inboundSchema)).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type Requester$Outbound = {
  emails?: Array<CandidateEmail$Outbound> | null | undefined;
  id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Requester$outboundSchema: z.ZodType<
  Requester$Outbound,
  z.ZodTypeDef,
  Requester
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$outboundSchema)).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Requester$ {
  /** @deprecated use `Requester$inboundSchema` instead. */
  export const inboundSchema = Requester$inboundSchema;
  /** @deprecated use `Requester$outboundSchema` instead. */
  export const outboundSchema = Requester$outboundSchema;
  /** @deprecated use `Requester$Outbound` instead. */
  export type Outbound = Requester$Outbound;
}

export function requesterToJSON(requester: Requester): string {
  return JSON.stringify(Requester$outboundSchema.parse(requester));
}

export function requesterFromJSON(
  jsonString: string,
): SafeParseResult<Requester, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Requester$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Requester' from JSON`,
  );
}

/** @internal */
export const AssessmentsOrder$inboundSchema: z.ZodType<
  AssessmentsOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  application: z.nullable(
    z.lazy(() => AssessmentsOrderApplication$inboundSchema),
  ).optional(),
  candidate: z.nullable(z.lazy(() => AssessmentsOrderCandidate$inboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  job: z.nullable(z.lazy(() => AssessmentsOrderJob$inboundSchema)).optional(),
  package: z.nullable(z.lazy(() => Package$inboundSchema)).optional(),
  remote_id: z.nullable(z.string()).optional(),
  requester: z.nullable(z.lazy(() => Requester$inboundSchema)).optional(),
  results_update_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "results_update_url": "resultsUpdateUrl",
  });
});

/** @internal */
export type AssessmentsOrder$Outbound = {
  application?: AssessmentsOrderApplication$Outbound | null | undefined;
  candidate?: AssessmentsOrderCandidate$Outbound | null | undefined;
  id?: string | null | undefined;
  job?: AssessmentsOrderJob$Outbound | null | undefined;
  package?: Package$Outbound | null | undefined;
  remote_id?: string | null | undefined;
  requester?: Requester$Outbound | null | undefined;
  results_update_url?: string | null | undefined;
};

/** @internal */
export const AssessmentsOrder$outboundSchema: z.ZodType<
  AssessmentsOrder$Outbound,
  z.ZodTypeDef,
  AssessmentsOrder
> = z.object({
  application: z.nullable(
    z.lazy(() => AssessmentsOrderApplication$outboundSchema),
  ).optional(),
  candidate: z.nullable(z.lazy(() => AssessmentsOrderCandidate$outboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  job: z.nullable(z.lazy(() => AssessmentsOrderJob$outboundSchema)).optional(),
  package: z.nullable(z.lazy(() => Package$outboundSchema)).optional(),
  remoteId: z.nullable(z.string()).optional(),
  requester: z.nullable(z.lazy(() => Requester$outboundSchema)).optional(),
  resultsUpdateUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
    resultsUpdateUrl: "results_update_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsOrder$ {
  /** @deprecated use `AssessmentsOrder$inboundSchema` instead. */
  export const inboundSchema = AssessmentsOrder$inboundSchema;
  /** @deprecated use `AssessmentsOrder$outboundSchema` instead. */
  export const outboundSchema = AssessmentsOrder$outboundSchema;
  /** @deprecated use `AssessmentsOrder$Outbound` instead. */
  export type Outbound = AssessmentsOrder$Outbound;
}

export function assessmentsOrderToJSON(
  assessmentsOrder: AssessmentsOrder,
): string {
  return JSON.stringify(
    AssessmentsOrder$outboundSchema.parse(assessmentsOrder),
  );
}

export function assessmentsOrderFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsOrder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsOrder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsOrder' from JSON`,
  );
}
