/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Package,
  Package$inboundSchema,
  Package$Outbound,
  Package$outboundSchema,
} from "./package.js";

export type BackgroundCheckPackage = {
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
  tests?: Array<Package> | null | undefined;
};

/** @internal */
export const BackgroundCheckPackage$inboundSchema: z.ZodType<
  BackgroundCheckPackage,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  tests: z.nullable(z.array(Package$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type BackgroundCheckPackage$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
  tests?: Array<Package$Outbound> | null | undefined;
};

/** @internal */
export const BackgroundCheckPackage$outboundSchema: z.ZodType<
  BackgroundCheckPackage$Outbound,
  z.ZodTypeDef,
  BackgroundCheckPackage
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  tests: z.nullable(z.array(Package$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackgroundCheckPackage$ {
  /** @deprecated use `BackgroundCheckPackage$inboundSchema` instead. */
  export const inboundSchema = BackgroundCheckPackage$inboundSchema;
  /** @deprecated use `BackgroundCheckPackage$outboundSchema` instead. */
  export const outboundSchema = BackgroundCheckPackage$outboundSchema;
  /** @deprecated use `BackgroundCheckPackage$Outbound` instead. */
  export type Outbound = BackgroundCheckPackage$Outbound;
}

export function backgroundCheckPackageToJSON(
  backgroundCheckPackage: BackgroundCheckPackage,
): string {
  return JSON.stringify(
    BackgroundCheckPackage$outboundSchema.parse(backgroundCheckPackage),
  );
}

export function backgroundCheckPackageFromJSON(
  jsonString: string,
): SafeParseResult<BackgroundCheckPackage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BackgroundCheckPackage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BackgroundCheckPackage' from JSON`,
  );
}
