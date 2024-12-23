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
  AssessmentsPackagesTestApiModel,
  AssessmentsPackagesTestApiModel$inboundSchema,
  AssessmentsPackagesTestApiModel$Outbound,
  AssessmentsPackagesTestApiModel$outboundSchema,
} from "./assessmentspackagestestapimodel.js";
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

export type BackgroundCheckOrder4 = {};

/**
 * The source value of the application status.
 */
export type BackgroundCheckOrderSourceValue =
  | BackgroundCheckOrder4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The status of the application.
 */
export enum BackgroundCheckOrderValue {
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
export type BackgroundCheckOrderValueOpen = OpenEnum<
  typeof BackgroundCheckOrderValue
>;

export type BackgroundCheckOrderApplicationStatus = {
  /**
   * The source value of the application status.
   */
  sourceValue?:
    | BackgroundCheckOrder4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The status of the application.
   */
  value?: BackgroundCheckOrderValueOpen | null | undefined;
};

export type BackgroundCheckOrderApplication = {
  applicationStatus?: BackgroundCheckOrderApplicationStatus | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Value to pass through to the provider
   */
  passthrough?: { [k: string]: any } | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

export type BackgroundCheckOrderCandidate = {
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
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

export type BackgroundCheckOrderJob = {
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
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Title of the job
   */
  title?: string | null | undefined;
};

export type BackgroundCheckOrderPackage = {
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
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Package tests
   */
  tests?: Array<AssessmentsPackagesTestApiModel> | null | undefined;
};

export type BackgroundCheckOrderRequester = {
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

export type BackgroundCheckOrder = {
  application?: BackgroundCheckOrderApplication | null | undefined;
  candidate?: BackgroundCheckOrderCandidate | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  job?: BackgroundCheckOrderJob | null | undefined;
  package?: BackgroundCheckOrderPackage | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  requester?: BackgroundCheckOrderRequester | null | undefined;
  /**
   * Results update url
   */
  resultsUpdateUrl?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrder4$inboundSchema: z.ZodType<
  BackgroundCheckOrder4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type BackgroundCheckOrder4$Outbound = {};

/** @internal */
export const BackgroundCheckOrder4$outboundSchema: z.ZodType<
  BackgroundCheckOrder4$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrder4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrder4$ {
  /** @deprecated use `BackgroundCheckOrder4$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrder4$inboundSchema;
  /** @deprecated use `BackgroundCheckOrder4$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrder4$outboundSchema;
  /** @deprecated use `BackgroundCheckOrder4$Outbound` instead. */
  export type Outbound = BackgroundCheckOrder4$Outbound;
}

export function backgroundCheckOrder4ToJSON(
  backgroundCheckOrder4: BackgroundCheckOrder4,
): string {
  return JSON.stringify(
    BackgroundCheckOrder4$outboundSchema.parse(backgroundCheckOrder4),
  );
}

export function backgroundCheckOrder4FromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrder4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrder4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrder4' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderSourceValue$inboundSchema: z.ZodType<
  BackgroundCheckOrderSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => BackgroundCheckOrder4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type BackgroundCheckOrderSourceValue$Outbound =
  | BackgroundCheckOrder4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const BackgroundCheckOrderSourceValue$outboundSchema: z.ZodType<
  BackgroundCheckOrderSourceValue$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderSourceValue
> = z.union([
  z.lazy(() => BackgroundCheckOrder4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderSourceValue$ {
  /** @deprecated use `BackgroundCheckOrderSourceValue$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderSourceValue$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderSourceValue$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderSourceValue$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderSourceValue$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderSourceValue$Outbound;
}

export function backgroundCheckOrderSourceValueToJSON(
  backgroundCheckOrderSourceValue: BackgroundCheckOrderSourceValue,
): string {
  return JSON.stringify(
    BackgroundCheckOrderSourceValue$outboundSchema.parse(
      backgroundCheckOrderSourceValue,
    ),
  );
}

export function backgroundCheckOrderSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderSourceValue' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderValue$inboundSchema: z.ZodType<
  BackgroundCheckOrderValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BackgroundCheckOrderValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BackgroundCheckOrderValue$outboundSchema: z.ZodType<
  BackgroundCheckOrderValueOpen,
  z.ZodTypeDef,
  BackgroundCheckOrderValueOpen
> = z.union([
  z.nativeEnum(BackgroundCheckOrderValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderValue$ {
  /** @deprecated use `BackgroundCheckOrderValue$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderValue$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderValue$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderValue$outboundSchema;
}

/** @internal */
export const BackgroundCheckOrderApplicationStatus$inboundSchema: z.ZodType<
  BackgroundCheckOrderApplicationStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => BackgroundCheckOrder4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(BackgroundCheckOrderValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type BackgroundCheckOrderApplicationStatus$Outbound = {
  source_value?:
    | BackgroundCheckOrder4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderApplicationStatus$outboundSchema: z.ZodType<
  BackgroundCheckOrderApplicationStatus$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderApplicationStatus
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => BackgroundCheckOrder4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(BackgroundCheckOrderValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderApplicationStatus$ {
  /** @deprecated use `BackgroundCheckOrderApplicationStatus$inboundSchema` instead. */
  export const inboundSchema =
    BackgroundCheckOrderApplicationStatus$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderApplicationStatus$outboundSchema` instead. */
  export const outboundSchema =
    BackgroundCheckOrderApplicationStatus$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderApplicationStatus$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderApplicationStatus$Outbound;
}

export function backgroundCheckOrderApplicationStatusToJSON(
  backgroundCheckOrderApplicationStatus: BackgroundCheckOrderApplicationStatus,
): string {
  return JSON.stringify(
    BackgroundCheckOrderApplicationStatus$outboundSchema.parse(
      backgroundCheckOrderApplicationStatus,
    ),
  );
}

export function backgroundCheckOrderApplicationStatusFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderApplicationStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BackgroundCheckOrderApplicationStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderApplicationStatus' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderApplication$inboundSchema: z.ZodType<
  BackgroundCheckOrderApplication,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_status: z.nullable(
    z.lazy(() => BackgroundCheckOrderApplicationStatus$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "application_status": "applicationStatus",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type BackgroundCheckOrderApplication$Outbound = {
  application_status?:
    | BackgroundCheckOrderApplicationStatus$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderApplication$outboundSchema: z.ZodType<
  BackgroundCheckOrderApplication$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderApplication
> = z.object({
  applicationStatus: z.nullable(
    z.lazy(() => BackgroundCheckOrderApplicationStatus$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    applicationStatus: "application_status",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderApplication$ {
  /** @deprecated use `BackgroundCheckOrderApplication$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderApplication$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderApplication$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderApplication$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderApplication$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderApplication$Outbound;
}

export function backgroundCheckOrderApplicationToJSON(
  backgroundCheckOrderApplication: BackgroundCheckOrderApplication,
): string {
  return JSON.stringify(
    BackgroundCheckOrderApplication$outboundSchema.parse(
      backgroundCheckOrderApplication,
    ),
  );
}

export function backgroundCheckOrderApplicationFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderApplication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderApplication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderApplication' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderCandidate$inboundSchema: z.ZodType<
  BackgroundCheckOrderCandidate,
  z.ZodTypeDef,
  unknown
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$inboundSchema)).optional(),
  first_name: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  profile_url: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "profile_url": "profileUrl",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type BackgroundCheckOrderCandidate$Outbound = {
  emails?: Array<CandidateEmail$Outbound> | null | undefined;
  first_name?: string | null | undefined;
  id?: string | null | undefined;
  last_name?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  profile_url?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderCandidate$outboundSchema: z.ZodType<
  BackgroundCheckOrderCandidate$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderCandidate
> = z.object({
  emails: z.nullable(z.array(CandidateEmail$outboundSchema)).optional(),
  firstName: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  profileUrl: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    profileUrl: "profile_url",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderCandidate$ {
  /** @deprecated use `BackgroundCheckOrderCandidate$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderCandidate$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderCandidate$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderCandidate$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderCandidate$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderCandidate$Outbound;
}

export function backgroundCheckOrderCandidateToJSON(
  backgroundCheckOrderCandidate: BackgroundCheckOrderCandidate,
): string {
  return JSON.stringify(
    BackgroundCheckOrderCandidate$outboundSchema.parse(
      backgroundCheckOrderCandidate,
    ),
  );
}

export function backgroundCheckOrderCandidateFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderCandidate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderCandidate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderCandidate' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderJob$inboundSchema: z.ZodType<
  BackgroundCheckOrderJob,
  z.ZodTypeDef,
  unknown
> = z.object({
  hiring_team: z.nullable(
    z.array(AssessmentsRequestsJobHiringTeamApiModel$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  remote_id: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "hiring_team": "hiringTeam",
    "remote_id": "remoteId",
  });
});

/** @internal */
export type BackgroundCheckOrderJob$Outbound = {
  hiring_team?:
    | Array<AssessmentsRequestsJobHiringTeamApiModel$Outbound>
    | null
    | undefined;
  id?: string | null | undefined;
  passthrough?: { [k: string]: any } | null | undefined;
  remote_id?: string | null | undefined;
  title?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderJob$outboundSchema: z.ZodType<
  BackgroundCheckOrderJob$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderJob
> = z.object({
  hiringTeam: z.nullable(
    z.array(AssessmentsRequestsJobHiringTeamApiModel$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  passthrough: z.nullable(z.record(z.any())).optional(),
  remoteId: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    hiringTeam: "hiring_team",
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderJob$ {
  /** @deprecated use `BackgroundCheckOrderJob$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderJob$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderJob$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderJob$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderJob$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderJob$Outbound;
}

export function backgroundCheckOrderJobToJSON(
  backgroundCheckOrderJob: BackgroundCheckOrderJob,
): string {
  return JSON.stringify(
    BackgroundCheckOrderJob$outboundSchema.parse(backgroundCheckOrderJob),
  );
}

export function backgroundCheckOrderJobFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderJob, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderJob$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderJob' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderPackage$inboundSchema: z.ZodType<
  BackgroundCheckOrderPackage,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  tests: z.nullable(z.array(AssessmentsPackagesTestApiModel$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type BackgroundCheckOrderPackage$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  tests?: Array<AssessmentsPackagesTestApiModel$Outbound> | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderPackage$outboundSchema: z.ZodType<
  BackgroundCheckOrderPackage$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderPackage
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  tests: z.nullable(z.array(AssessmentsPackagesTestApiModel$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckOrderPackage$ {
  /** @deprecated use `BackgroundCheckOrderPackage$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderPackage$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderPackage$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderPackage$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderPackage$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderPackage$Outbound;
}

export function backgroundCheckOrderPackageToJSON(
  backgroundCheckOrderPackage: BackgroundCheckOrderPackage,
): string {
  return JSON.stringify(
    BackgroundCheckOrderPackage$outboundSchema.parse(
      backgroundCheckOrderPackage,
    ),
  );
}

export function backgroundCheckOrderPackageFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderPackage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderPackage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderPackage' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrderRequester$inboundSchema: z.ZodType<
  BackgroundCheckOrderRequester,
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
export type BackgroundCheckOrderRequester$Outbound = {
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  remote_user_id?: string | null | undefined;
  role?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrderRequester$outboundSchema: z.ZodType<
  BackgroundCheckOrderRequester$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrderRequester
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
export namespace BackgroundCheckOrderRequester$ {
  /** @deprecated use `BackgroundCheckOrderRequester$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrderRequester$inboundSchema;
  /** @deprecated use `BackgroundCheckOrderRequester$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrderRequester$outboundSchema;
  /** @deprecated use `BackgroundCheckOrderRequester$Outbound` instead. */
  export type Outbound = BackgroundCheckOrderRequester$Outbound;
}

export function backgroundCheckOrderRequesterToJSON(
  backgroundCheckOrderRequester: BackgroundCheckOrderRequester,
): string {
  return JSON.stringify(
    BackgroundCheckOrderRequester$outboundSchema.parse(
      backgroundCheckOrderRequester,
    ),
  );
}

export function backgroundCheckOrderRequesterFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrderRequester, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrderRequester$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrderRequester' from JSON`,
  );
}

/** @internal */
export const BackgroundCheckOrder$inboundSchema: z.ZodType<
  BackgroundCheckOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  application: z.nullable(
    z.lazy(() => BackgroundCheckOrderApplication$inboundSchema),
  ).optional(),
  candidate: z.nullable(
    z.lazy(() => BackgroundCheckOrderCandidate$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  job: z.nullable(z.lazy(() => BackgroundCheckOrderJob$inboundSchema))
    .optional(),
  package: z.nullable(z.lazy(() => BackgroundCheckOrderPackage$inboundSchema))
    .optional(),
  remote_id: z.nullable(z.string()).optional(),
  requester: z.nullable(
    z.lazy(() => BackgroundCheckOrderRequester$inboundSchema),
  ).optional(),
  results_update_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
    "results_update_url": "resultsUpdateUrl",
  });
});

/** @internal */
export type BackgroundCheckOrder$Outbound = {
  application?: BackgroundCheckOrderApplication$Outbound | null | undefined;
  candidate?: BackgroundCheckOrderCandidate$Outbound | null | undefined;
  id?: string | null | undefined;
  job?: BackgroundCheckOrderJob$Outbound | null | undefined;
  package?: BackgroundCheckOrderPackage$Outbound | null | undefined;
  remote_id?: string | null | undefined;
  requester?: BackgroundCheckOrderRequester$Outbound | null | undefined;
  results_update_url?: string | null | undefined;
};

/** @internal */
export const BackgroundCheckOrder$outboundSchema: z.ZodType<
  BackgroundCheckOrder$Outbound,
  z.ZodTypeDef,
  BackgroundCheckOrder
> = z.object({
  application: z.nullable(
    z.lazy(() => BackgroundCheckOrderApplication$outboundSchema),
  ).optional(),
  candidate: z.nullable(
    z.lazy(() => BackgroundCheckOrderCandidate$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  job: z.nullable(z.lazy(() => BackgroundCheckOrderJob$outboundSchema))
    .optional(),
  package: z.nullable(z.lazy(() => BackgroundCheckOrderPackage$outboundSchema))
    .optional(),
  remoteId: z.nullable(z.string()).optional(),
  requester: z.nullable(
    z.lazy(() => BackgroundCheckOrderRequester$outboundSchema),
  ).optional(),
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
export namespace BackgroundCheckOrder$ {
  /** @deprecated use `BackgroundCheckOrder$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckOrder$inboundSchema;
  /** @deprecated use `BackgroundCheckOrder$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckOrder$outboundSchema;
  /** @deprecated use `BackgroundCheckOrder$Outbound` instead. */
  export type Outbound = BackgroundCheckOrder$Outbound;
}

export function backgroundCheckOrderToJSON(
  backgroundCheckOrder: BackgroundCheckOrder,
): string {
  return JSON.stringify(
    BackgroundCheckOrder$outboundSchema.parse(backgroundCheckOrder),
  );
}

export function backgroundCheckOrderFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckOrder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckOrder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckOrder' from JSON`,
  );
}
