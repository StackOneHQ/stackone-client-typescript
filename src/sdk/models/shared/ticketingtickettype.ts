/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TicketingTicketType = {
  /**
   * The id of the ticket type.
   */
  id?: string | null | undefined;
  /**
   * The name of the ticket type.
   */
  name?: string | null | undefined;
  /**
   * The collection the ticket type belongs to.
   */
  parentCollectionId?: string | null | undefined;
};

/** @internal */
export const TicketingTicketType$inboundSchema: z.ZodType<
  TicketingTicketType,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  parent_collection_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "parent_collection_id": "parentCollectionId",
  });
});

/** @internal */
export type TicketingTicketType$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  parent_collection_id?: string | null | undefined;
};

/** @internal */
export const TicketingTicketType$outboundSchema: z.ZodType<
  TicketingTicketType$Outbound,
  z.ZodTypeDef,
  TicketingTicketType
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  parentCollectionId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    parentCollectionId: "parent_collection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingTicketType$ {
  /** @deprecated use `TicketingTicketType$inboundSchema` instead. */
  export const inboundSchema = TicketingTicketType$inboundSchema;
  /** @deprecated use `TicketingTicketType$outboundSchema` instead. */
  export const outboundSchema = TicketingTicketType$outboundSchema;
  /** @deprecated use `TicketingTicketType$Outbound` instead. */
  export type Outbound = TicketingTicketType$Outbound;
}

export function ticketingTicketTypeToJSON(
  ticketingTicketType: TicketingTicketType,
): string {
  return JSON.stringify(
    TicketingTicketType$outboundSchema.parse(ticketingTicketType),
  );
}

export function ticketingTicketTypeFromJSON(
  jsonString: string,
): SafeParseResult<TicketingTicketType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingTicketType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingTicketType' from JSON`,
  );
}
