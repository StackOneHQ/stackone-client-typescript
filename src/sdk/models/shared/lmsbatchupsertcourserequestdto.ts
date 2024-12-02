/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LmsUpsertCourseRequestDto,
  LmsUpsertCourseRequestDto$inboundSchema,
  LmsUpsertCourseRequestDto$Outbound,
  LmsUpsertCourseRequestDto$outboundSchema,
} from "./lmsupsertcourserequestdto.js";

export type LmsBatchUpsertCourseRequestDto = {
  /**
   * The batch of items to upsert
   */
  items: Array<LmsUpsertCourseRequestDto>;
};

/** @internal */
export const LmsBatchUpsertCourseRequestDto$inboundSchema: z.ZodType<
  LmsBatchUpsertCourseRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(LmsUpsertCourseRequestDto$inboundSchema),
});

/** @internal */
export type LmsBatchUpsertCourseRequestDto$Outbound = {
  items: Array<LmsUpsertCourseRequestDto$Outbound>;
};

/** @internal */
export const LmsBatchUpsertCourseRequestDto$outboundSchema: z.ZodType<
  LmsBatchUpsertCourseRequestDto$Outbound,
  z.ZodTypeDef,
  LmsBatchUpsertCourseRequestDto
> = z.object({
  items: z.array(LmsUpsertCourseRequestDto$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsBatchUpsertCourseRequestDto$ {
  /** @deprecated use `LmsBatchUpsertCourseRequestDto$inboundSchema` instead. */
  export const inboundSchema = LmsBatchUpsertCourseRequestDto$inboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseRequestDto$outboundSchema` instead. */
  export const outboundSchema = LmsBatchUpsertCourseRequestDto$outboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseRequestDto$Outbound` instead. */
  export type Outbound = LmsBatchUpsertCourseRequestDto$Outbound;
}

export function lmsBatchUpsertCourseRequestDtoToJSON(
  lmsBatchUpsertCourseRequestDto: LmsBatchUpsertCourseRequestDto,
): string {
  return JSON.stringify(
    LmsBatchUpsertCourseRequestDto$outboundSchema.parse(
      lmsBatchUpsertCourseRequestDto,
    ),
  );
}

export function lmsBatchUpsertCourseRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<LmsBatchUpsertCourseRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsBatchUpsertCourseRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsBatchUpsertCourseRequestDto' from JSON`,
  );
}