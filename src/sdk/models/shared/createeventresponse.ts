/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type CreateEventResponse = {
  /**
   * The event name
   */
  event: string;
  /**
   * The message associated with the operation result
   */
  message?: string | null | undefined;
  /**
   * The record id associated with the event
   */
  recordId: string;
  /**
   * The response http status code
   */
  status: number;
};

/** @internal */
export const CreateEventResponse$inboundSchema: z.ZodType<
  CreateEventResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: z.string(),
  message: z.nullable(z.string()).optional(),
  record_id: z.string(),
  status: z.number(),
}).transform((v) => {
  return remap$(v, {
    "record_id": "recordId",
  });
});

/** @internal */
export type CreateEventResponse$Outbound = {
  event: string;
  message?: string | null | undefined;
  record_id: string;
  status: number;
};

/** @internal */
export const CreateEventResponse$outboundSchema: z.ZodType<
  CreateEventResponse$Outbound,
  z.ZodTypeDef,
  CreateEventResponse
> = z.object({
  event: z.string(),
  message: z.nullable(z.string()).optional(),
  recordId: z.string(),
  status: z.number(),
}).transform((v) => {
  return remap$(v, {
    recordId: "record_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEventResponse$ {
  /** @deprecated use `CreateEventResponse$inboundSchema` instead. */
  export const inboundSchema = CreateEventResponse$inboundSchema;
  /** @deprecated use `CreateEventResponse$outboundSchema` instead. */
  export const outboundSchema = CreateEventResponse$outboundSchema;
  /** @deprecated use `CreateEventResponse$Outbound` instead. */
  export type Outbound = CreateEventResponse$Outbound;
}
