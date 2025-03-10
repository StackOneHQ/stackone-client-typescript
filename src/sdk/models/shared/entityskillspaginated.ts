/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EntitySkills,
  EntitySkills$inboundSchema,
  EntitySkills$Outbound,
  EntitySkills$outboundSchema,
} from "./entityskills.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type EntitySkillsPaginated = {
  data: Array<EntitySkills>;
  next?: string | null | undefined;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const EntitySkillsPaginated$inboundSchema: z.ZodType<
  EntitySkillsPaginated,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(EntitySkills$inboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type EntitySkillsPaginated$Outbound = {
  data: Array<EntitySkills$Outbound>;
  next?: string | null | undefined;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const EntitySkillsPaginated$outboundSchema: z.ZodType<
  EntitySkillsPaginated$Outbound,
  z.ZodTypeDef,
  EntitySkillsPaginated
> = z.object({
  data: z.array(EntitySkills$outboundSchema),
  next: z.nullable(z.string()).optional(),
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntitySkillsPaginated$ {
  /** @deprecated use `EntitySkillsPaginated$inboundSchema` instead. */
  export const inboundSchema = EntitySkillsPaginated$inboundSchema;
  /** @deprecated use `EntitySkillsPaginated$outboundSchema` instead. */
  export const outboundSchema = EntitySkillsPaginated$outboundSchema;
  /** @deprecated use `EntitySkillsPaginated$Outbound` instead. */
  export type Outbound = EntitySkillsPaginated$Outbound;
}

export function entitySkillsPaginatedToJSON(
  entitySkillsPaginated: EntitySkillsPaginated,
): string {
  return JSON.stringify(
    EntitySkillsPaginated$outboundSchema.parse(entitySkillsPaginated),
  );
}

export function entitySkillsPaginatedFromJSON(
  jsonString: string,
): SafeParseResult<EntitySkillsPaginated, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EntitySkillsPaginated$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EntitySkillsPaginated' from JSON`,
  );
}
