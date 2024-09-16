/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  HRISDepartment,
  HRISDepartment$inboundSchema,
  HRISDepartment$Outbound,
  HRISDepartment$outboundSchema,
} from "./hrisdepartment.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type HRISDepartmentsPaginated = {
  data: Array<HRISDepartment>;
  next?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  nextPage?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const HRISDepartmentsPaginated$inboundSchema: z.ZodType<
  HRISDepartmentsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(HRISDepartment$inboundSchema),
  next: z.nullable(z.string()).optional(),
  next_page: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page": "nextPage",
  });
});

/** @internal */
export type HRISDepartmentsPaginated$Outbound = {
  data: Array<HRISDepartment$Outbound>;
  next?: string | null | undefined;
  next_page?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const HRISDepartmentsPaginated$outboundSchema: z.ZodType<
  HRISDepartmentsPaginated$Outbound,
  z.ZodTypeDef,
  HRISDepartmentsPaginated
> = z.object({
  data: z.array(HRISDepartment$outboundSchema),
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
export namespace HRISDepartmentsPaginated$ {
  /** @deprecated use `HRISDepartmentsPaginated$inboundSchema` instead. */
  export const inboundSchema = HRISDepartmentsPaginated$inboundSchema;
  /** @deprecated use `HRISDepartmentsPaginated$outboundSchema` instead. */
  export const outboundSchema = HRISDepartmentsPaginated$outboundSchema;
  /** @deprecated use `HRISDepartmentsPaginated$Outbound` instead. */
  export type Outbound = HRISDepartmentsPaginated$Outbound;
}
