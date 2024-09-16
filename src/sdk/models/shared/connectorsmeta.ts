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

/**
 * The provider service category
 */
export enum ConnectorsMetaCategory {
  Ats = "ats",
  Hris = "hris",
  HrisLegacy = "hris-legacy",
  Crm = "crm",
  Iam = "iam",
  Marketing = "marketing",
  Lms = "lms",
  Stackone = "stackone",
}
/**
 * The provider service category
 */
export type ConnectorsMetaCategoryOpen = OpenEnum<
  typeof ConnectorsMetaCategory
>;

/**
 * Image assets for this provider
 */
export type Images = {
  /**
   * URL of the square logo designed and used by StackOne for this provider
   */
  logoUrl?: string | null | undefined;
  /**
   * URL of the original provider logo (with logo and/or name aligned horizontally)
   */
  originalLogoHorizontalUrl?: string | null | undefined;
};

/**
 * Resources for this provider, such as image assets
 */
export type Resources = {
  /**
   * Image assets for this provider
   */
  images?: Images | null | undefined;
};

export type ConnectorsMeta = {
  /**
   * Whether this provider has been enabled on the integrations page for the current project
   */
  active?: boolean | null | undefined;
  /**
   * The provider service category
   */
  category: ConnectorsMetaCategoryOpen;
  models: { [k: string]: any };
  /**
   * The provider key
   */
  provider: string;
  /**
   * The provider human-readable label
   */
  providerName: string;
  /**
   * Resources for this provider, such as image assets
   */
  resources?: Resources | null | undefined;
};

/** @internal */
export const ConnectorsMetaCategory$inboundSchema: z.ZodType<
  ConnectorsMetaCategoryOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(ConnectorsMetaCategory),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const ConnectorsMetaCategory$outboundSchema: z.ZodType<
  ConnectorsMetaCategoryOpen,
  z.ZodTypeDef,
  ConnectorsMetaCategoryOpen
> = z.union([
  z.nativeEnum(ConnectorsMetaCategory),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsMetaCategory$ {
  /** @deprecated use `ConnectorsMetaCategory$inboundSchema` instead. */
  export const inboundSchema = ConnectorsMetaCategory$inboundSchema;
  /** @deprecated use `ConnectorsMetaCategory$outboundSchema` instead. */
  export const outboundSchema = ConnectorsMetaCategory$outboundSchema;
}

/** @internal */
export const Images$inboundSchema: z.ZodType<Images, z.ZodTypeDef, unknown> = z
  .object({
    logo_url: z.nullable(z.string()).optional(),
    original_logo_horizontal_url: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "logo_url": "logoUrl",
      "original_logo_horizontal_url": "originalLogoHorizontalUrl",
    });
  });

/** @internal */
export type Images$Outbound = {
  logo_url?: string | null | undefined;
  original_logo_horizontal_url?: string | null | undefined;
};

/** @internal */
export const Images$outboundSchema: z.ZodType<
  Images$Outbound,
  z.ZodTypeDef,
  Images
> = z.object({
  logoUrl: z.nullable(z.string()).optional(),
  originalLogoHorizontalUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    logoUrl: "logo_url",
    originalLogoHorizontalUrl: "original_logo_horizontal_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Images$ {
  /** @deprecated use `Images$inboundSchema` instead. */
  export const inboundSchema = Images$inboundSchema;
  /** @deprecated use `Images$outboundSchema` instead. */
  export const outboundSchema = Images$outboundSchema;
  /** @deprecated use `Images$Outbound` instead. */
  export type Outbound = Images$Outbound;
}

/** @internal */
export const Resources$inboundSchema: z.ZodType<
  Resources,
  z.ZodTypeDef,
  unknown
> = z.object({
  images: z.nullable(z.lazy(() => Images$inboundSchema)).optional(),
});

/** @internal */
export type Resources$Outbound = {
  images?: Images$Outbound | null | undefined;
};

/** @internal */
export const Resources$outboundSchema: z.ZodType<
  Resources$Outbound,
  z.ZodTypeDef,
  Resources
> = z.object({
  images: z.nullable(z.lazy(() => Images$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Resources$ {
  /** @deprecated use `Resources$inboundSchema` instead. */
  export const inboundSchema = Resources$inboundSchema;
  /** @deprecated use `Resources$outboundSchema` instead. */
  export const outboundSchema = Resources$outboundSchema;
  /** @deprecated use `Resources$Outbound` instead. */
  export type Outbound = Resources$Outbound;
}

/** @internal */
export const ConnectorsMeta$inboundSchema: z.ZodType<
  ConnectorsMeta,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  category: ConnectorsMetaCategory$inboundSchema,
  models: z.record(z.any()),
  provider: z.string(),
  provider_name: z.string(),
  resources: z.nullable(z.lazy(() => Resources$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "provider_name": "providerName",
  });
});

/** @internal */
export type ConnectorsMeta$Outbound = {
  active?: boolean | null | undefined;
  category: string;
  models: { [k: string]: any };
  provider: string;
  provider_name: string;
  resources?: Resources$Outbound | null | undefined;
};

/** @internal */
export const ConnectorsMeta$outboundSchema: z.ZodType<
  ConnectorsMeta$Outbound,
  z.ZodTypeDef,
  ConnectorsMeta
> = z.object({
  active: z.nullable(z.boolean()).optional(),
  category: ConnectorsMetaCategory$outboundSchema,
  models: z.record(z.any()),
  provider: z.string(),
  providerName: z.string(),
  resources: z.nullable(z.lazy(() => Resources$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    providerName: "provider_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsMeta$ {
  /** @deprecated use `ConnectorsMeta$inboundSchema` instead. */
  export const inboundSchema = ConnectorsMeta$inboundSchema;
  /** @deprecated use `ConnectorsMeta$outboundSchema` instead. */
  export const outboundSchema = ConnectorsMeta$outboundSchema;
  /** @deprecated use `ConnectorsMeta$Outbound` instead. */
  export type Outbound = ConnectorsMeta$Outbound;
}
