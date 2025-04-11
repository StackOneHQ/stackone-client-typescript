/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TicketingContent,
  TicketingContent$inboundSchema,
  TicketingContent$Outbound,
  TicketingContent$outboundSchema,
} from "./ticketingcontent.js";

export type TicketingComment = {
  /**
   * Array of content associated with the comment
   */
  content?: Array<TicketingContent> | null | undefined;
  /**
   * The timestamp when the record was created
   */
  createdAt?: Date | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Whether the comment is internal
   */
  internal?: boolean | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The ticket ID associated with the comment
   */
  ticketId: string;
  /**
   * The timestamp when the record was last updated
   */
  updatedAt?: Date | null | undefined;
  /**
   * The user who created the comment
   */
  userId?: string | null | undefined;
};

/** @internal */
export const TicketingComment$inboundSchema: z.ZodType<
  TicketingComment,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.array(TicketingContent$inboundSchema)).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  internal: z.nullable(z.boolean()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  ticket_id: z.string(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "remote_id": "remoteId",
    "ticket_id": "ticketId",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type TicketingComment$Outbound = {
  content?: Array<TicketingContent$Outbound> | null | undefined;
  created_at?: string | null | undefined;
  id?: string | null | undefined;
  internal?: boolean | null | undefined;
  remote_id?: string | null | undefined;
  ticket_id: string;
  updated_at?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const TicketingComment$outboundSchema: z.ZodType<
  TicketingComment$Outbound,
  z.ZodTypeDef,
  TicketingComment
> = z.object({
  content: z.nullable(z.array(TicketingContent$outboundSchema)).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  id: z.nullable(z.string()).optional(),
  internal: z.nullable(z.boolean()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  ticketId: z.string(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    remoteId: "remote_id",
    ticketId: "ticket_id",
    updatedAt: "updated_at",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingComment$ {
  /** @deprecated use `TicketingComment$inboundSchema` instead. */
  export const inboundSchema = TicketingComment$inboundSchema;
  /** @deprecated use `TicketingComment$outboundSchema` instead. */
  export const outboundSchema = TicketingComment$outboundSchema;
  /** @deprecated use `TicketingComment$Outbound` instead. */
  export type Outbound = TicketingComment$Outbound;
}

export function ticketingCommentToJSON(
  ticketingComment: TicketingComment,
): string {
  return JSON.stringify(
    TicketingComment$outboundSchema.parse(ticketingComment),
  );
}

export function ticketingCommentFromJSON(
  jsonString: string,
): SafeParseResult<TicketingComment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingComment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingComment' from JSON`,
  );
}
