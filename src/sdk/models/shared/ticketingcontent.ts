/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TicketingContent = {
  /**
   * The HTML content of the ticket
   */
  html?: string | null | undefined;
  /**
   * The content of the ticket
   */
  plain?: string | null | undefined;
};

/** @internal */
export const TicketingContent$inboundSchema: z.ZodType<
  TicketingContent,
  z.ZodTypeDef,
  unknown
> = z.object({
  html: z.nullable(z.string()).optional(),
  plain: z.nullable(z.string()).optional(),
});

/** @internal */
export type TicketingContent$Outbound = {
  html?: string | null | undefined;
  plain?: string | null | undefined;
};

/** @internal */
export const TicketingContent$outboundSchema: z.ZodType<
  TicketingContent$Outbound,
  z.ZodTypeDef,
  TicketingContent
> = z.object({
  html: z.nullable(z.string()).optional(),
  plain: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingContent$ {
  /** @deprecated use `TicketingContent$inboundSchema` instead. */
  export const inboundSchema = TicketingContent$inboundSchema;
  /** @deprecated use `TicketingContent$outboundSchema` instead. */
  export const outboundSchema = TicketingContent$outboundSchema;
  /** @deprecated use `TicketingContent$Outbound` instead. */
  export type Outbound = TicketingContent$Outbound;
}

export function ticketingContentToJSON(
  ticketingContent: TicketingContent,
): string {
  return JSON.stringify(
    TicketingContent$outboundSchema.parse(ticketingContent),
  );
}

export function ticketingContentFromJSON(
  jsonString: string,
): SafeParseResult<TicketingContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingContent' from JSON`,
  );
}
