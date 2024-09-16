/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  LmsUser,
  LmsUser$inboundSchema,
  LmsUser$Outbound,
  LmsUser$outboundSchema,
} from "./lmsuser.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type UserResult = {
  data: LmsUser;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const UserResult$inboundSchema: z.ZodType<
  UserResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: LmsUser$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type UserResult$Outbound = {
  data: LmsUser$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const UserResult$outboundSchema: z.ZodType<
  UserResult$Outbound,
  z.ZodTypeDef,
  UserResult
> = z.object({
  data: LmsUser$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserResult$ {
  /** @deprecated use `UserResult$inboundSchema` instead. */
  export const inboundSchema = UserResult$inboundSchema;
  /** @deprecated use `UserResult$outboundSchema` instead. */
  export const outboundSchema = UserResult$outboundSchema;
  /** @deprecated use `UserResult$Outbound` instead. */
  export type Outbound = UserResult$Outbound;
}
