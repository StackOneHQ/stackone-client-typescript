/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum ConnectSessionTokenAuthLinkCategories {
  Ats = "ats",
  Hris = "hris",
  HrisLegacy = "hris-legacy",
  Crm = "crm",
  Iam = "iam",
  Marketing = "marketing",
  Lms = "lms",
  Stackone = "stackone",
  Documents = "documents",
  Ticketing = "ticketing",
  Screening = "screening",
}

/**
 * Arbitrary set of key and values defined during the session token creation. This can be used to tag an account (eg. based on their pricing plan)
 */
export type ConnectSessionTokenAuthLinkMetadata = {};

export type ConnectSessionTokenAuthLink = {
  accountId?: string | null | undefined;
  authLinkUrl: string;
  categories?: Array<ConnectSessionTokenAuthLinkCategories> | null | undefined;
  createdAt: Date;
  id: number;
  label?: string | null | undefined;
  /**
   * Arbitrary set of key and values defined during the session token creation. This can be used to tag an account (eg. based on their pricing plan)
   */
  metadata?: ConnectSessionTokenAuthLinkMetadata | null | undefined;
  organizationId: number;
  originOwnerId: string;
  originOwnerName: string;
  originUsername?: string | null | undefined;
  projectId: string;
  provider?: string | null | undefined;
  token: string;
};

/** @internal */
export const ConnectSessionTokenAuthLinkCategories$inboundSchema:
  z.ZodNativeEnum<typeof ConnectSessionTokenAuthLinkCategories> = z.nativeEnum(
    ConnectSessionTokenAuthLinkCategories,
  );

/** @internal */
export const ConnectSessionTokenAuthLinkCategories$outboundSchema:
  z.ZodNativeEnum<typeof ConnectSessionTokenAuthLinkCategories> =
    ConnectSessionTokenAuthLinkCategories$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectSessionTokenAuthLinkCategories$ {
  /** @deprecated use `ConnectSessionTokenAuthLinkCategories$inboundSchema` instead. */
  export const inboundSchema =
    ConnectSessionTokenAuthLinkCategories$inboundSchema;
  /** @deprecated use `ConnectSessionTokenAuthLinkCategories$outboundSchema` instead. */
  export const outboundSchema =
    ConnectSessionTokenAuthLinkCategories$outboundSchema;
}

/** @internal */
export const ConnectSessionTokenAuthLinkMetadata$inboundSchema: z.ZodType<
  ConnectSessionTokenAuthLinkMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ConnectSessionTokenAuthLinkMetadata$Outbound = {};

/** @internal */
export const ConnectSessionTokenAuthLinkMetadata$outboundSchema: z.ZodType<
  ConnectSessionTokenAuthLinkMetadata$Outbound,
  z.ZodTypeDef,
  ConnectSessionTokenAuthLinkMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectSessionTokenAuthLinkMetadata$ {
  /** @deprecated use `ConnectSessionTokenAuthLinkMetadata$inboundSchema` instead. */
  export const inboundSchema =
    ConnectSessionTokenAuthLinkMetadata$inboundSchema;
  /** @deprecated use `ConnectSessionTokenAuthLinkMetadata$outboundSchema` instead. */
  export const outboundSchema =
    ConnectSessionTokenAuthLinkMetadata$outboundSchema;
  /** @deprecated use `ConnectSessionTokenAuthLinkMetadata$Outbound` instead. */
  export type Outbound = ConnectSessionTokenAuthLinkMetadata$Outbound;
}

export function connectSessionTokenAuthLinkMetadataToJSON(
  connectSessionTokenAuthLinkMetadata: ConnectSessionTokenAuthLinkMetadata,
): string {
  return JSON.stringify(
    ConnectSessionTokenAuthLinkMetadata$outboundSchema.parse(
      connectSessionTokenAuthLinkMetadata,
    ),
  );
}

export function connectSessionTokenAuthLinkMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ConnectSessionTokenAuthLinkMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConnectSessionTokenAuthLinkMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectSessionTokenAuthLinkMetadata' from JSON`,
  );
}

/** @internal */
export const ConnectSessionTokenAuthLink$inboundSchema: z.ZodType<
  ConnectSessionTokenAuthLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.nullable(z.string()).optional(),
  auth_link_url: z.string(),
  categories: z.nullable(
    z.array(ConnectSessionTokenAuthLinkCategories$inboundSchema),
  ).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.number(),
  label: z.nullable(z.string()).optional(),
  metadata: z.nullable(
    z.lazy(() => ConnectSessionTokenAuthLinkMetadata$inboundSchema),
  ).optional(),
  organization_id: z.number(),
  origin_owner_id: z.string(),
  origin_owner_name: z.string(),
  origin_username: z.nullable(z.string()).optional(),
  project_id: z.string(),
  provider: z.nullable(z.string()).optional(),
  token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "auth_link_url": "authLinkUrl",
    "created_at": "createdAt",
    "organization_id": "organizationId",
    "origin_owner_id": "originOwnerId",
    "origin_owner_name": "originOwnerName",
    "origin_username": "originUsername",
    "project_id": "projectId",
  });
});

/** @internal */
export type ConnectSessionTokenAuthLink$Outbound = {
  account_id?: string | null | undefined;
  auth_link_url: string;
  categories?: Array<string> | null | undefined;
  created_at: string;
  id: number;
  label?: string | null | undefined;
  metadata?: ConnectSessionTokenAuthLinkMetadata$Outbound | null | undefined;
  organization_id: number;
  origin_owner_id: string;
  origin_owner_name: string;
  origin_username?: string | null | undefined;
  project_id: string;
  provider?: string | null | undefined;
  token: string;
};

/** @internal */
export const ConnectSessionTokenAuthLink$outboundSchema: z.ZodType<
  ConnectSessionTokenAuthLink$Outbound,
  z.ZodTypeDef,
  ConnectSessionTokenAuthLink
> = z.object({
  accountId: z.nullable(z.string()).optional(),
  authLinkUrl: z.string(),
  categories: z.nullable(
    z.array(ConnectSessionTokenAuthLinkCategories$outboundSchema),
  ).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  id: z.number(),
  label: z.nullable(z.string()).optional(),
  metadata: z.nullable(
    z.lazy(() => ConnectSessionTokenAuthLinkMetadata$outboundSchema),
  ).optional(),
  organizationId: z.number(),
  originOwnerId: z.string(),
  originOwnerName: z.string(),
  originUsername: z.nullable(z.string()).optional(),
  projectId: z.string(),
  provider: z.nullable(z.string()).optional(),
  token: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    authLinkUrl: "auth_link_url",
    createdAt: "created_at",
    organizationId: "organization_id",
    originOwnerId: "origin_owner_id",
    originOwnerName: "origin_owner_name",
    originUsername: "origin_username",
    projectId: "project_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectSessionTokenAuthLink$ {
  /** @deprecated use `ConnectSessionTokenAuthLink$inboundSchema` instead. */
  export const inboundSchema = ConnectSessionTokenAuthLink$inboundSchema;
  /** @deprecated use `ConnectSessionTokenAuthLink$outboundSchema` instead. */
  export const outboundSchema = ConnectSessionTokenAuthLink$outboundSchema;
  /** @deprecated use `ConnectSessionTokenAuthLink$Outbound` instead. */
  export type Outbound = ConnectSessionTokenAuthLink$Outbound;
}

export function connectSessionTokenAuthLinkToJSON(
  connectSessionTokenAuthLink: ConnectSessionTokenAuthLink,
): string {
  return JSON.stringify(
    ConnectSessionTokenAuthLink$outboundSchema.parse(
      connectSessionTokenAuthLink,
    ),
  );
}

export function connectSessionTokenAuthLinkFromJSON(
  jsonString: string,
): SafeParseResult<ConnectSessionTokenAuthLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectSessionTokenAuthLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectSessionTokenAuthLink' from JSON`,
  );
}
