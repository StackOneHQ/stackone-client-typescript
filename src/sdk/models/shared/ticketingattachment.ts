/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TicketingAttachment = {
  /**
   * The timestamp when the record was created
   */
  createdAt?: Date | null | undefined;
  /**
   * The name of the file
   */
  fileName?: string | null | undefined;
  /**
   * The type of the file
   */
  fileType?: string | null | undefined;
  /**
   * The resource URL of the file
   */
  fileUrl?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * The size of the file
   */
  size?: number | null | undefined;
  /**
   * The reference ticket ID the attachment belongs to
   */
  ticketId?: string | null | undefined;
  /**
   * The timestamp when the record was last updated
   */
  updatedAt?: Date | null | undefined;
  /**
   * The user who uploaded the file
   */
  userId?: string | null | undefined;
};

/** @internal */
export const TicketingAttachment$inboundSchema: z.ZodType<
  TicketingAttachment,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  file_name: z.nullable(z.string()).optional(),
  file_type: z.nullable(z.string()).optional(),
  file_url: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  size: z.nullable(z.number()).optional(),
  ticket_id: z.nullable(z.string()).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  user_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "file_name": "fileName",
    "file_type": "fileType",
    "file_url": "fileUrl",
    "remote_id": "remoteId",
    "ticket_id": "ticketId",
    "updated_at": "updatedAt",
    "user_id": "userId",
  });
});

/** @internal */
export type TicketingAttachment$Outbound = {
  created_at?: string | null | undefined;
  file_name?: string | null | undefined;
  file_type?: string | null | undefined;
  file_url?: string | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  size?: number | null | undefined;
  ticket_id?: string | null | undefined;
  updated_at?: string | null | undefined;
  user_id?: string | null | undefined;
};

/** @internal */
export const TicketingAttachment$outboundSchema: z.ZodType<
  TicketingAttachment$Outbound,
  z.ZodTypeDef,
  TicketingAttachment
> = z.object({
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  fileName: z.nullable(z.string()).optional(),
  fileType: z.nullable(z.string()).optional(),
  fileUrl: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  size: z.nullable(z.number()).optional(),
  ticketId: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  userId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    fileName: "file_name",
    fileType: "file_type",
    fileUrl: "file_url",
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
export namespace TicketingAttachment$ {
  /** @deprecated use `TicketingAttachment$inboundSchema` instead. */
  export const inboundSchema = TicketingAttachment$inboundSchema;
  /** @deprecated use `TicketingAttachment$outboundSchema` instead. */
  export const outboundSchema = TicketingAttachment$outboundSchema;
  /** @deprecated use `TicketingAttachment$Outbound` instead. */
  export type Outbound = TicketingAttachment$Outbound;
}

export function ticketingAttachmentToJSON(
  ticketingAttachment: TicketingAttachment,
): string {
  return JSON.stringify(
    TicketingAttachment$outboundSchema.parse(ticketingAttachment),
  );
}

export function ticketingAttachmentFromJSON(
  jsonString: string,
): SafeParseResult<TicketingAttachment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingAttachment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingAttachment' from JSON`,
  );
}
