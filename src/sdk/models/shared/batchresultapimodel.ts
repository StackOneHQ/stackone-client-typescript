/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BatchResultApiModel = {
  errors?: Array<Array<string>> | null | undefined;
  message?: string | null | undefined;
  statusCode?: number | null | undefined;
  timestamp?: Date | null | undefined;
};

/** @internal */
export const BatchResultApiModel$inboundSchema: z.ZodType<
  BatchResultApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.nullable(z.array(z.array(z.string()))).optional(),
  message: z.nullable(z.string()).optional(),
  statusCode: z.nullable(z.number()).optional(),
  timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
});

/** @internal */
export type BatchResultApiModel$Outbound = {
  errors?: Array<Array<string>> | null | undefined;
  message?: string | null | undefined;
  statusCode?: number | null | undefined;
  timestamp?: string | null | undefined;
};

/** @internal */
export const BatchResultApiModel$outboundSchema: z.ZodType<
  BatchResultApiModel$Outbound,
  z.ZodTypeDef,
  BatchResultApiModel
> = z.object({
  errors: z.nullable(z.array(z.array(z.string()))).optional(),
  message: z.nullable(z.string()).optional(),
  statusCode: z.nullable(z.number()).optional(),
  timestamp: z.nullable(z.date().transform(v => v.toISOString())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BatchResultApiModel$ {
  /** @deprecated use `BatchResultApiModel$inboundSchema` instead. */
  export const inboundSchema = BatchResultApiModel$inboundSchema;
  /** @deprecated use `BatchResultApiModel$outboundSchema` instead. */
  export const outboundSchema = BatchResultApiModel$outboundSchema;
  /** @deprecated use `BatchResultApiModel$Outbound` instead. */
  export type Outbound = BatchResultApiModel$Outbound;
}
