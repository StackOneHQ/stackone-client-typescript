/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreateResultDataApiModel,
  CreateResultDataApiModel$inboundSchema,
  CreateResultDataApiModel$Outbound,
  CreateResultDataApiModel$outboundSchema,
} from "./createresultdataapimodel.js";

export type MoveApplicationResult = {
  data: CreateResultDataApiModel;
  message: string;
  statusCode: number;
  timestamp: Date;
};

/** @internal */
export const MoveApplicationResult$inboundSchema: z.ZodType<
  MoveApplicationResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: CreateResultDataApiModel$inboundSchema,
  message: z.string(),
  statusCode: z.number(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
});

/** @internal */
export type MoveApplicationResult$Outbound = {
  data: CreateResultDataApiModel$Outbound;
  message: string;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const MoveApplicationResult$outboundSchema: z.ZodType<
  MoveApplicationResult$Outbound,
  z.ZodTypeDef,
  MoveApplicationResult
> = z.object({
  data: CreateResultDataApiModel$outboundSchema,
  message: z.string(),
  statusCode: z.number(),
  timestamp: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MoveApplicationResult$ {
  /** @deprecated use `MoveApplicationResult$inboundSchema` instead. */
  export const inboundSchema = MoveApplicationResult$inboundSchema;
  /** @deprecated use `MoveApplicationResult$outboundSchema` instead. */
  export const outboundSchema = MoveApplicationResult$outboundSchema;
  /** @deprecated use `MoveApplicationResult$Outbound` instead. */
  export type Outbound = MoveApplicationResult$Outbound;
}

export function moveApplicationResultToJSON(
  moveApplicationResult: MoveApplicationResult,
): string {
  return JSON.stringify(
    MoveApplicationResult$outboundSchema.parse(moveApplicationResult),
  );
}

export function moveApplicationResultFromJSON(
  jsonString: string,
): SafeParseResult<MoveApplicationResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MoveApplicationResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MoveApplicationResult' from JSON`,
  );
}
