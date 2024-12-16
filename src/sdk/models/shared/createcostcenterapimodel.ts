/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCostCenterApiModel = {
  distributionPercentage?: number | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CreateCostCenterApiModel$inboundSchema: z.ZodType<
  CreateCostCenterApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  distribution_percentage: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "distribution_percentage": "distributionPercentage",
  });
});

/** @internal */
export type CreateCostCenterApiModel$Outbound = {
  distribution_percentage?: number | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CreateCostCenterApiModel$outboundSchema: z.ZodType<
  CreateCostCenterApiModel$Outbound,
  z.ZodTypeDef,
  CreateCostCenterApiModel
> = z.object({
  distributionPercentage: z.nullable(z.number()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    distributionPercentage: "distribution_percentage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCostCenterApiModel$ {
  /** @deprecated use `CreateCostCenterApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateCostCenterApiModel$inboundSchema;
  /** @deprecated use `CreateCostCenterApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateCostCenterApiModel$outboundSchema;
  /** @deprecated use `CreateCostCenterApiModel$Outbound` instead. */
  export type Outbound = CreateCostCenterApiModel$Outbound;
}

export function createCostCenterApiModelToJSON(
  createCostCenterApiModel: CreateCostCenterApiModel,
): string {
  return JSON.stringify(
    CreateCostCenterApiModel$outboundSchema.parse(createCostCenterApiModel),
  );
}

export function createCostCenterApiModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCostCenterApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCostCenterApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCostCenterApiModel' from JSON`,
  );
}
