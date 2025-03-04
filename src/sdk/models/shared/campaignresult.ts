/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Campaign,
  Campaign$inboundSchema,
  Campaign$Outbound,
  Campaign$outboundSchema,
} from "./campaign.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type CampaignResult = {
  data: Campaign;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const CampaignResult$inboundSchema: z.ZodType<
  CampaignResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Campaign$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type CampaignResult$Outbound = {
  data: Campaign$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const CampaignResult$outboundSchema: z.ZodType<
  CampaignResult$Outbound,
  z.ZodTypeDef,
  CampaignResult
> = z.object({
  data: Campaign$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CampaignResult$ {
  /** @deprecated use `CampaignResult$inboundSchema` instead. */
  export const inboundSchema = CampaignResult$inboundSchema;
  /** @deprecated use `CampaignResult$outboundSchema` instead. */
  export const outboundSchema = CampaignResult$outboundSchema;
  /** @deprecated use `CampaignResult$Outbound` instead. */
  export type Outbound = CampaignResult$Outbound;
}

export function campaignResultToJSON(campaignResult: CampaignResult): string {
  return JSON.stringify(CampaignResult$outboundSchema.parse(campaignResult));
}

export function campaignResultFromJSON(
  jsonString: string,
): SafeParseResult<CampaignResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CampaignResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CampaignResult' from JSON`,
  );
}
