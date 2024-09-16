/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  IamPolicy,
  IamPolicy$inboundSchema,
  IamPolicy$Outbound,
  IamPolicy$outboundSchema,
} from "./iampolicy.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type IamPoliciesPaginated = {
  data: Array<IamPolicy>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const IamPoliciesPaginated$inboundSchema: z.ZodType<
  IamPoliciesPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(IamPolicy$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type IamPoliciesPaginated$Outbound = {
  data: Array<IamPolicy$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const IamPoliciesPaginated$outboundSchema: z.ZodType<
  IamPoliciesPaginated$Outbound,
  z.ZodTypeDef,
  IamPoliciesPaginated
> = z.object({
  data: z.array(IamPolicy$outboundSchema),
  next: z.nullable(z.string()).optional(),
  nextPage: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    nextPage: "next_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPoliciesPaginated$ {
  /** @deprecated use `IamPoliciesPaginated$inboundSchema` instead. */
  export const inboundSchema = IamPoliciesPaginated$inboundSchema;
  /** @deprecated use `IamPoliciesPaginated$outboundSchema` instead. */
  export const outboundSchema = IamPoliciesPaginated$outboundSchema;
  /** @deprecated use `IamPoliciesPaginated$Outbound` instead. */
  export type Outbound = IamPoliciesPaginated$Outbound;
}
