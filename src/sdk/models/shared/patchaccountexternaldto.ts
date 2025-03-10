/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PatchAccountExternalDtoCredentials = {};

export type Label = {};

export type PatchAccountExternalDtoMetadata = {};

export type Secrets = {};

export type PatchAccountExternalDtoSetupInformation = {};

export type PatchAccountExternalDto = {
  authenticationConfigKey?: string | null | undefined;
  credentials?: PatchAccountExternalDtoCredentials | null | undefined;
  environment?: string | null | undefined;
  label?: Label | null | undefined;
  metadata?: PatchAccountExternalDtoMetadata | null | undefined;
  originOwnerId?: string | null | undefined;
  originOwnerName?: string | null | undefined;
  originUsername?: string | null | undefined;
  provider?: string | null | undefined;
  secrets?: Secrets | null | undefined;
  setupInformation?: PatchAccountExternalDtoSetupInformation | null | undefined;
};

/** @internal */
export const PatchAccountExternalDtoCredentials$inboundSchema: z.ZodType<
  PatchAccountExternalDtoCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PatchAccountExternalDtoCredentials$Outbound = {};

/** @internal */
export const PatchAccountExternalDtoCredentials$outboundSchema: z.ZodType<
  PatchAccountExternalDtoCredentials$Outbound,
  z.ZodTypeDef,
  PatchAccountExternalDtoCredentials
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountExternalDtoCredentials$ {
  /** @deprecated use `PatchAccountExternalDtoCredentials$inboundSchema` instead. */
  export const inboundSchema = PatchAccountExternalDtoCredentials$inboundSchema;
  /** @deprecated use `PatchAccountExternalDtoCredentials$outboundSchema` instead. */
  export const outboundSchema =
    PatchAccountExternalDtoCredentials$outboundSchema;
  /** @deprecated use `PatchAccountExternalDtoCredentials$Outbound` instead. */
  export type Outbound = PatchAccountExternalDtoCredentials$Outbound;
}

export function patchAccountExternalDtoCredentialsToJSON(
  patchAccountExternalDtoCredentials: PatchAccountExternalDtoCredentials,
): string {
  return JSON.stringify(
    PatchAccountExternalDtoCredentials$outboundSchema.parse(
      patchAccountExternalDtoCredentials,
    ),
  );
}

export function patchAccountExternalDtoCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<PatchAccountExternalDtoCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PatchAccountExternalDtoCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAccountExternalDtoCredentials' from JSON`,
  );
}

/** @internal */
export const Label$inboundSchema: z.ZodType<Label, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Label$Outbound = {};

/** @internal */
export const Label$outboundSchema: z.ZodType<
  Label$Outbound,
  z.ZodTypeDef,
  Label
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Label$ {
  /** @deprecated use `Label$inboundSchema` instead. */
  export const inboundSchema = Label$inboundSchema;
  /** @deprecated use `Label$outboundSchema` instead. */
  export const outboundSchema = Label$outboundSchema;
  /** @deprecated use `Label$Outbound` instead. */
  export type Outbound = Label$Outbound;
}

export function labelToJSON(label: Label): string {
  return JSON.stringify(Label$outboundSchema.parse(label));
}

export function labelFromJSON(
  jsonString: string,
): SafeParseResult<Label, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Label$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Label' from JSON`,
  );
}

/** @internal */
export const PatchAccountExternalDtoMetadata$inboundSchema: z.ZodType<
  PatchAccountExternalDtoMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PatchAccountExternalDtoMetadata$Outbound = {};

/** @internal */
export const PatchAccountExternalDtoMetadata$outboundSchema: z.ZodType<
  PatchAccountExternalDtoMetadata$Outbound,
  z.ZodTypeDef,
  PatchAccountExternalDtoMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountExternalDtoMetadata$ {
  /** @deprecated use `PatchAccountExternalDtoMetadata$inboundSchema` instead. */
  export const inboundSchema = PatchAccountExternalDtoMetadata$inboundSchema;
  /** @deprecated use `PatchAccountExternalDtoMetadata$outboundSchema` instead. */
  export const outboundSchema = PatchAccountExternalDtoMetadata$outboundSchema;
  /** @deprecated use `PatchAccountExternalDtoMetadata$Outbound` instead. */
  export type Outbound = PatchAccountExternalDtoMetadata$Outbound;
}

export function patchAccountExternalDtoMetadataToJSON(
  patchAccountExternalDtoMetadata: PatchAccountExternalDtoMetadata,
): string {
  return JSON.stringify(
    PatchAccountExternalDtoMetadata$outboundSchema.parse(
      patchAccountExternalDtoMetadata,
    ),
  );
}

export function patchAccountExternalDtoMetadataFromJSON(
  jsonString: string,
): SafeParseResult<PatchAccountExternalDtoMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAccountExternalDtoMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAccountExternalDtoMetadata' from JSON`,
  );
}

/** @internal */
export const Secrets$inboundSchema: z.ZodType<Secrets, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Secrets$Outbound = {};

/** @internal */
export const Secrets$outboundSchema: z.ZodType<
  Secrets$Outbound,
  z.ZodTypeDef,
  Secrets
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Secrets$ {
  /** @deprecated use `Secrets$inboundSchema` instead. */
  export const inboundSchema = Secrets$inboundSchema;
  /** @deprecated use `Secrets$outboundSchema` instead. */
  export const outboundSchema = Secrets$outboundSchema;
  /** @deprecated use `Secrets$Outbound` instead. */
  export type Outbound = Secrets$Outbound;
}

export function secretsToJSON(secrets: Secrets): string {
  return JSON.stringify(Secrets$outboundSchema.parse(secrets));
}

export function secretsFromJSON(
  jsonString: string,
): SafeParseResult<Secrets, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Secrets$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Secrets' from JSON`,
  );
}

/** @internal */
export const PatchAccountExternalDtoSetupInformation$inboundSchema: z.ZodType<
  PatchAccountExternalDtoSetupInformation,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PatchAccountExternalDtoSetupInformation$Outbound = {};

/** @internal */
export const PatchAccountExternalDtoSetupInformation$outboundSchema: z.ZodType<
  PatchAccountExternalDtoSetupInformation$Outbound,
  z.ZodTypeDef,
  PatchAccountExternalDtoSetupInformation
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountExternalDtoSetupInformation$ {
  /** @deprecated use `PatchAccountExternalDtoSetupInformation$inboundSchema` instead. */
  export const inboundSchema =
    PatchAccountExternalDtoSetupInformation$inboundSchema;
  /** @deprecated use `PatchAccountExternalDtoSetupInformation$outboundSchema` instead. */
  export const outboundSchema =
    PatchAccountExternalDtoSetupInformation$outboundSchema;
  /** @deprecated use `PatchAccountExternalDtoSetupInformation$Outbound` instead. */
  export type Outbound = PatchAccountExternalDtoSetupInformation$Outbound;
}

export function patchAccountExternalDtoSetupInformationToJSON(
  patchAccountExternalDtoSetupInformation:
    PatchAccountExternalDtoSetupInformation,
): string {
  return JSON.stringify(
    PatchAccountExternalDtoSetupInformation$outboundSchema.parse(
      patchAccountExternalDtoSetupInformation,
    ),
  );
}

export function patchAccountExternalDtoSetupInformationFromJSON(
  jsonString: string,
): SafeParseResult<
  PatchAccountExternalDtoSetupInformation,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      PatchAccountExternalDtoSetupInformation$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'PatchAccountExternalDtoSetupInformation' from JSON`,
  );
}

/** @internal */
export const PatchAccountExternalDto$inboundSchema: z.ZodType<
  PatchAccountExternalDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  authentication_config_key: z.nullable(z.string()).optional(),
  credentials: z.nullable(
    z.lazy(() => PatchAccountExternalDtoCredentials$inboundSchema),
  ).optional(),
  environment: z.nullable(z.string()).optional(),
  label: z.nullable(z.lazy(() => Label$inboundSchema)).optional(),
  metadata: z.nullable(
    z.lazy(() => PatchAccountExternalDtoMetadata$inboundSchema),
  ).optional(),
  origin_owner_id: z.nullable(z.string()).optional(),
  origin_owner_name: z.nullable(z.string()).optional(),
  origin_username: z.nullable(z.string()).optional(),
  provider: z.nullable(z.string()).optional(),
  secrets: z.nullable(z.lazy(() => Secrets$inboundSchema)).optional(),
  setup_information: z.nullable(
    z.lazy(() => PatchAccountExternalDtoSetupInformation$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "authentication_config_key": "authenticationConfigKey",
    "origin_owner_id": "originOwnerId",
    "origin_owner_name": "originOwnerName",
    "origin_username": "originUsername",
    "setup_information": "setupInformation",
  });
});

/** @internal */
export type PatchAccountExternalDto$Outbound = {
  authentication_config_key?: string | null | undefined;
  credentials?: PatchAccountExternalDtoCredentials$Outbound | null | undefined;
  environment?: string | null | undefined;
  label?: Label$Outbound | null | undefined;
  metadata?: PatchAccountExternalDtoMetadata$Outbound | null | undefined;
  origin_owner_id?: string | null | undefined;
  origin_owner_name?: string | null | undefined;
  origin_username?: string | null | undefined;
  provider?: string | null | undefined;
  secrets?: Secrets$Outbound | null | undefined;
  setup_information?:
    | PatchAccountExternalDtoSetupInformation$Outbound
    | null
    | undefined;
};

/** @internal */
export const PatchAccountExternalDto$outboundSchema: z.ZodType<
  PatchAccountExternalDto$Outbound,
  z.ZodTypeDef,
  PatchAccountExternalDto
> = z.object({
  authenticationConfigKey: z.nullable(z.string()).optional(),
  credentials: z.nullable(
    z.lazy(() => PatchAccountExternalDtoCredentials$outboundSchema),
  ).optional(),
  environment: z.nullable(z.string()).optional(),
  label: z.nullable(z.lazy(() => Label$outboundSchema)).optional(),
  metadata: z.nullable(
    z.lazy(() => PatchAccountExternalDtoMetadata$outboundSchema),
  ).optional(),
  originOwnerId: z.nullable(z.string()).optional(),
  originOwnerName: z.nullable(z.string()).optional(),
  originUsername: z.nullable(z.string()).optional(),
  provider: z.nullable(z.string()).optional(),
  secrets: z.nullable(z.lazy(() => Secrets$outboundSchema)).optional(),
  setupInformation: z.nullable(
    z.lazy(() => PatchAccountExternalDtoSetupInformation$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    authenticationConfigKey: "authentication_config_key",
    originOwnerId: "origin_owner_id",
    originOwnerName: "origin_owner_name",
    originUsername: "origin_username",
    setupInformation: "setup_information",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PatchAccountExternalDto$ {
  /** @deprecated use `PatchAccountExternalDto$inboundSchema` instead. */
  export const inboundSchema = PatchAccountExternalDto$inboundSchema;
  /** @deprecated use `PatchAccountExternalDto$outboundSchema` instead. */
  export const outboundSchema = PatchAccountExternalDto$outboundSchema;
  /** @deprecated use `PatchAccountExternalDto$Outbound` instead. */
  export type Outbound = PatchAccountExternalDto$Outbound;
}

export function patchAccountExternalDtoToJSON(
  patchAccountExternalDto: PatchAccountExternalDto,
): string {
  return JSON.stringify(
    PatchAccountExternalDto$outboundSchema.parse(patchAccountExternalDto),
  );
}

export function patchAccountExternalDtoFromJSON(
  jsonString: string,
): SafeParseResult<PatchAccountExternalDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PatchAccountExternalDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PatchAccountExternalDto' from JSON`,
  );
}
