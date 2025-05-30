/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  TicketingCollection,
  TicketingCollection$inboundSchema,
  TicketingCollection$Outbound,
  TicketingCollection$outboundSchema,
} from "./ticketingcollection.js";
import {
  TicketingContent,
  TicketingContent$inboundSchema,
  TicketingContent$Outbound,
  TicketingContent$outboundSchema,
} from "./ticketingcontent.js";

/**
 * Organization associated with the ticket
 */
export type Organization = {
  /**
   * The domain of the organization
   */
  domain?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * The name of the organization
   */
  name?: string | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
};

export type TicketingReadTicket4 = {};

/**
 * The source value of the ticket priority.
 */
export type TicketingReadTicketSourceValue =
  | TicketingReadTicket4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The priority of the ticket.
 */
export enum TicketingReadTicketValue {
  Lowest = "lowest",
  Low = "low",
  Medium = "medium",
  High = "high",
  Highest = "highest",
  UnmappedValue = "unmapped_value",
}
/**
 * The priority of the ticket.
 */
export type TicketingReadTicketValueOpen = OpenEnum<
  typeof TicketingReadTicketValue
>;

/**
 * Priority of the ticket
 */
export type Priority = {
  /**
   * The id of the ticket priority.
   */
  id?: string | null | undefined;
  /**
   * The source value of the ticket priority.
   */
  sourceValue?:
    | TicketingReadTicket4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The priority of the ticket.
   */
  value?: TicketingReadTicketValueOpen | null | undefined;
};

export type TicketingReadTicketSchemas4 = {};

/**
 * The source value of this status type
 */
export type TicketingReadTicketSchemasSourceValue =
  | TicketingReadTicketSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The type of this status
 */
export enum TicketingReadTicketSchemasValue {
  ToDo = "to-do",
  InProgress = "in-progress",
  Closed = "closed",
  UnmappedValue = "unmapped_value",
}
/**
 * The type of this status
 */
export type TicketingReadTicketSchemasValueOpen = OpenEnum<
  typeof TicketingReadTicketSchemasValue
>;

/**
 * The type of this status
 */
export type TicketingReadTicketSchemasType = {
  /**
   * The source value of this status type
   */
  sourceValue?:
    | TicketingReadTicketSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The type of this status
   */
  value?: TicketingReadTicketSchemasValueOpen | null | undefined;
};

/**
 * Current status of the ticket
 */
export type TicketingReadTicketStatus = {
  /**
   * The id of the ticket status.
   */
  id?: string | null | undefined;
  /**
   * The name of the ticket status.
   */
  name?: string | null | undefined;
  /**
   * The type of this status
   */
  type?: TicketingReadTicketSchemasType | null | undefined;
};

/**
 * The type of the ticket
 */
export type TicketingReadTicketType = {
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

export type TicketingReadTicket = {
  /**
   * Agents assigned to the ticket
   */
  assignees?: Array<string> | null | undefined;
  /**
   * The date the ticket was closed
   */
  closedAt?: Date | null | undefined;
  /**
   * Collections the ticket belongs to
   */
  collections?: Array<TicketingCollection> | null | undefined;
  /**
   * Array of content associated with the ticket
   */
  content?: Array<TicketingContent> | null | undefined;
  /**
   * The timestamp when the record was created
   */
  createdAt?: Date | null | undefined;
  /**
   * The creator of the ticket
   */
  creatorId?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Organization associated with the ticket
   */
  organization?: Organization | null | undefined;
  /**
   * ID of the parent ticket if this is a sub-ticket
   */
  parentId?: string | null | undefined;
  /**
   * Priority of the ticket
   */
  priority?: Priority | null | undefined;
  /**
   * Provider's unique identifier
   */
  remoteId?: string | null | undefined;
  /**
   * Users who reported the ticket
   */
  reporters?: Array<string> | null | undefined;
  /**
   * Current status of the ticket
   */
  status?: TicketingReadTicketStatus | null | undefined;
  /**
   * The tags of the ticket
   */
  tags?: Array<string> | null | undefined;
  /**
   * The unique ticket number or reference ID
   */
  ticketNumber?: string | null | undefined;
  /**
   * URL to view the ticket in the source system
   */
  ticketUrl?: string | null | undefined;
  /**
   * The title or subject of the ticket
   */
  title?: string | null | undefined;
  /**
   * The type of the ticket
   */
  type?: TicketingReadTicketType | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
  /**
   * The timestamp when the record was last updated
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const Organization$inboundSchema: z.ZodType<
  Organization,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "remote_id": "remoteId",
  });
});

/** @internal */
export type Organization$Outbound = {
  domain?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  remote_id?: string | null | undefined;
};

/** @internal */
export const Organization$outboundSchema: z.ZodType<
  Organization$Outbound,
  z.ZodTypeDef,
  Organization
> = z.object({
  domain: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    remoteId: "remote_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Organization$ {
  /** @deprecated use `Organization$inboundSchema` instead. */
  export const inboundSchema = Organization$inboundSchema;
  /** @deprecated use `Organization$outboundSchema` instead. */
  export const outboundSchema = Organization$outboundSchema;
  /** @deprecated use `Organization$Outbound` instead. */
  export type Outbound = Organization$Outbound;
}

export function organizationToJSON(organization: Organization): string {
  return JSON.stringify(Organization$outboundSchema.parse(organization));
}

export function organizationFromJSON(
  jsonString: string,
): SafeParseResult<Organization, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Organization$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Organization' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicket4$inboundSchema: z.ZodType<
  TicketingReadTicket4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TicketingReadTicket4$Outbound = {};

/** @internal */
export const TicketingReadTicket4$outboundSchema: z.ZodType<
  TicketingReadTicket4$Outbound,
  z.ZodTypeDef,
  TicketingReadTicket4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicket4$ {
  /** @deprecated use `TicketingReadTicket4$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicket4$inboundSchema;
  /** @deprecated use `TicketingReadTicket4$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicket4$outboundSchema;
  /** @deprecated use `TicketingReadTicket4$Outbound` instead. */
  export type Outbound = TicketingReadTicket4$Outbound;
}

export function ticketingReadTicket4ToJSON(
  ticketingReadTicket4: TicketingReadTicket4,
): string {
  return JSON.stringify(
    TicketingReadTicket4$outboundSchema.parse(ticketingReadTicket4),
  );
}

export function ticketingReadTicket4FromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicket4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicket4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicket4' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketSourceValue$inboundSchema: z.ZodType<
  TicketingReadTicketSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => TicketingReadTicket4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type TicketingReadTicketSourceValue$Outbound =
  | TicketingReadTicket4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const TicketingReadTicketSourceValue$outboundSchema: z.ZodType<
  TicketingReadTicketSourceValue$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketSourceValue
> = z.union([
  z.lazy(() => TicketingReadTicket4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketSourceValue$ {
  /** @deprecated use `TicketingReadTicketSourceValue$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketSourceValue$inboundSchema;
  /** @deprecated use `TicketingReadTicketSourceValue$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketSourceValue$outboundSchema;
  /** @deprecated use `TicketingReadTicketSourceValue$Outbound` instead. */
  export type Outbound = TicketingReadTicketSourceValue$Outbound;
}

export function ticketingReadTicketSourceValueToJSON(
  ticketingReadTicketSourceValue: TicketingReadTicketSourceValue,
): string {
  return JSON.stringify(
    TicketingReadTicketSourceValue$outboundSchema.parse(
      ticketingReadTicketSourceValue,
    ),
  );
}

export function ticketingReadTicketSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicketSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketSourceValue' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketValue$inboundSchema: z.ZodType<
  TicketingReadTicketValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TicketingReadTicketValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TicketingReadTicketValue$outboundSchema: z.ZodType<
  TicketingReadTicketValueOpen,
  z.ZodTypeDef,
  TicketingReadTicketValueOpen
> = z.union([
  z.nativeEnum(TicketingReadTicketValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketValue$ {
  /** @deprecated use `TicketingReadTicketValue$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketValue$inboundSchema;
  /** @deprecated use `TicketingReadTicketValue$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketValue$outboundSchema;
}

/** @internal */
export const Priority$inboundSchema: z.ZodType<
  Priority,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  source_value: z.nullable(
    z.union([
      z.lazy(() => TicketingReadTicket4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(TicketingReadTicketValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type Priority$Outbound = {
  id?: string | null | undefined;
  source_value?:
    | TicketingReadTicket4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const Priority$outboundSchema: z.ZodType<
  Priority$Outbound,
  z.ZodTypeDef,
  Priority
> = z.object({
  id: z.nullable(z.string()).optional(),
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => TicketingReadTicket4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(TicketingReadTicketValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Priority$ {
  /** @deprecated use `Priority$inboundSchema` instead. */
  export const inboundSchema = Priority$inboundSchema;
  /** @deprecated use `Priority$outboundSchema` instead. */
  export const outboundSchema = Priority$outboundSchema;
  /** @deprecated use `Priority$Outbound` instead. */
  export type Outbound = Priority$Outbound;
}

export function priorityToJSON(priority: Priority): string {
  return JSON.stringify(Priority$outboundSchema.parse(priority));
}

export function priorityFromJSON(
  jsonString: string,
): SafeParseResult<Priority, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Priority$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Priority' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketSchemas4$inboundSchema: z.ZodType<
  TicketingReadTicketSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TicketingReadTicketSchemas4$Outbound = {};

/** @internal */
export const TicketingReadTicketSchemas4$outboundSchema: z.ZodType<
  TicketingReadTicketSchemas4$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketSchemas4$ {
  /** @deprecated use `TicketingReadTicketSchemas4$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketSchemas4$inboundSchema;
  /** @deprecated use `TicketingReadTicketSchemas4$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketSchemas4$outboundSchema;
  /** @deprecated use `TicketingReadTicketSchemas4$Outbound` instead. */
  export type Outbound = TicketingReadTicketSchemas4$Outbound;
}

export function ticketingReadTicketSchemas4ToJSON(
  ticketingReadTicketSchemas4: TicketingReadTicketSchemas4,
): string {
  return JSON.stringify(
    TicketingReadTicketSchemas4$outboundSchema.parse(
      ticketingReadTicketSchemas4,
    ),
  );
}

export function ticketingReadTicketSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicketSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketSchemas4' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketSchemasSourceValue$inboundSchema: z.ZodType<
  TicketingReadTicketSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => TicketingReadTicketSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type TicketingReadTicketSchemasSourceValue$Outbound =
  | TicketingReadTicketSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const TicketingReadTicketSchemasSourceValue$outboundSchema: z.ZodType<
  TicketingReadTicketSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketSchemasSourceValue
> = z.union([
  z.lazy(() => TicketingReadTicketSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketSchemasSourceValue$ {
  /** @deprecated use `TicketingReadTicketSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    TicketingReadTicketSchemasSourceValue$inboundSchema;
  /** @deprecated use `TicketingReadTicketSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    TicketingReadTicketSchemasSourceValue$outboundSchema;
  /** @deprecated use `TicketingReadTicketSchemasSourceValue$Outbound` instead. */
  export type Outbound = TicketingReadTicketSchemasSourceValue$Outbound;
}

export function ticketingReadTicketSchemasSourceValueToJSON(
  ticketingReadTicketSchemasSourceValue: TicketingReadTicketSchemasSourceValue,
): string {
  return JSON.stringify(
    TicketingReadTicketSchemasSourceValue$outboundSchema.parse(
      ticketingReadTicketSchemasSourceValue,
    ),
  );
}

export function ticketingReadTicketSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingReadTicketSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketSchemasValue$inboundSchema: z.ZodType<
  TicketingReadTicketSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TicketingReadTicketSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TicketingReadTicketSchemasValue$outboundSchema: z.ZodType<
  TicketingReadTicketSchemasValueOpen,
  z.ZodTypeDef,
  TicketingReadTicketSchemasValueOpen
> = z.union([
  z.nativeEnum(TicketingReadTicketSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketSchemasValue$ {
  /** @deprecated use `TicketingReadTicketSchemasValue$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketSchemasValue$inboundSchema;
  /** @deprecated use `TicketingReadTicketSchemasValue$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketSchemasValue$outboundSchema;
}

/** @internal */
export const TicketingReadTicketSchemasType$inboundSchema: z.ZodType<
  TicketingReadTicketSchemasType,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => TicketingReadTicketSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(TicketingReadTicketSchemasValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type TicketingReadTicketSchemasType$Outbound = {
  source_value?:
    | TicketingReadTicketSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const TicketingReadTicketSchemasType$outboundSchema: z.ZodType<
  TicketingReadTicketSchemasType$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketSchemasType
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => TicketingReadTicketSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(TicketingReadTicketSchemasValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketSchemasType$ {
  /** @deprecated use `TicketingReadTicketSchemasType$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketSchemasType$inboundSchema;
  /** @deprecated use `TicketingReadTicketSchemasType$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketSchemasType$outboundSchema;
  /** @deprecated use `TicketingReadTicketSchemasType$Outbound` instead. */
  export type Outbound = TicketingReadTicketSchemasType$Outbound;
}

export function ticketingReadTicketSchemasTypeToJSON(
  ticketingReadTicketSchemasType: TicketingReadTicketSchemasType,
): string {
  return JSON.stringify(
    TicketingReadTicketSchemasType$outboundSchema.parse(
      ticketingReadTicketSchemasType,
    ),
  );
}

export function ticketingReadTicketSchemasTypeFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketSchemasType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicketSchemasType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketSchemasType' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketStatus$inboundSchema: z.ZodType<
  TicketingReadTicketStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => TicketingReadTicketSchemasType$inboundSchema))
    .optional(),
});

/** @internal */
export type TicketingReadTicketStatus$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  type?: TicketingReadTicketSchemasType$Outbound | null | undefined;
};

/** @internal */
export const TicketingReadTicketStatus$outboundSchema: z.ZodType<
  TicketingReadTicketStatus$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketStatus
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => TicketingReadTicketSchemasType$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicketStatus$ {
  /** @deprecated use `TicketingReadTicketStatus$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketStatus$inboundSchema;
  /** @deprecated use `TicketingReadTicketStatus$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketStatus$outboundSchema;
  /** @deprecated use `TicketingReadTicketStatus$Outbound` instead. */
  export type Outbound = TicketingReadTicketStatus$Outbound;
}

export function ticketingReadTicketStatusToJSON(
  ticketingReadTicketStatus: TicketingReadTicketStatus,
): string {
  return JSON.stringify(
    TicketingReadTicketStatus$outboundSchema.parse(ticketingReadTicketStatus),
  );
}

export function ticketingReadTicketStatusFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicketStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketStatus' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicketType$inboundSchema: z.ZodType<
  TicketingReadTicketType,
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
export type TicketingReadTicketType$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  parent_collection_id?: string | null | undefined;
};

/** @internal */
export const TicketingReadTicketType$outboundSchema: z.ZodType<
  TicketingReadTicketType$Outbound,
  z.ZodTypeDef,
  TicketingReadTicketType
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
export namespace TicketingReadTicketType$ {
  /** @deprecated use `TicketingReadTicketType$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicketType$inboundSchema;
  /** @deprecated use `TicketingReadTicketType$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicketType$outboundSchema;
  /** @deprecated use `TicketingReadTicketType$Outbound` instead. */
  export type Outbound = TicketingReadTicketType$Outbound;
}

export function ticketingReadTicketTypeToJSON(
  ticketingReadTicketType: TicketingReadTicketType,
): string {
  return JSON.stringify(
    TicketingReadTicketType$outboundSchema.parse(ticketingReadTicketType),
  );
}

export function ticketingReadTicketTypeFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicketType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicketType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicketType' from JSON`,
  );
}

/** @internal */
export const TicketingReadTicket$inboundSchema: z.ZodType<
  TicketingReadTicket,
  z.ZodTypeDef,
  unknown
> = z.object({
  assignees: z.nullable(z.array(z.string())).optional(),
  closed_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  collections: z.nullable(z.array(TicketingCollection$inboundSchema))
    .optional(),
  content: z.nullable(z.array(TicketingContent$inboundSchema)).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  creator_id: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  organization: z.nullable(z.lazy(() => Organization$inboundSchema)).optional(),
  parent_id: z.nullable(z.string()).optional(),
  priority: z.nullable(z.lazy(() => Priority$inboundSchema)).optional(),
  remote_id: z.nullable(z.string()).optional(),
  reporters: z.nullable(z.array(z.string())).optional(),
  status: z.nullable(z.lazy(() => TicketingReadTicketStatus$inboundSchema))
    .optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  ticket_number: z.nullable(z.string()).optional(),
  ticket_url: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => TicketingReadTicketType$inboundSchema))
    .optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "closed_at": "closedAt",
    "created_at": "createdAt",
    "creator_id": "creatorId",
    "parent_id": "parentId",
    "remote_id": "remoteId",
    "ticket_number": "ticketNumber",
    "ticket_url": "ticketUrl",
    "unified_custom_fields": "unifiedCustomFields",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type TicketingReadTicket$Outbound = {
  assignees?: Array<string> | null | undefined;
  closed_at?: string | null | undefined;
  collections?: Array<TicketingCollection$Outbound> | null | undefined;
  content?: Array<TicketingContent$Outbound> | null | undefined;
  created_at?: string | null | undefined;
  creator_id?: string | null | undefined;
  id?: string | null | undefined;
  organization?: Organization$Outbound | null | undefined;
  parent_id?: string | null | undefined;
  priority?: Priority$Outbound | null | undefined;
  remote_id?: string | null | undefined;
  reporters?: Array<string> | null | undefined;
  status?: TicketingReadTicketStatus$Outbound | null | undefined;
  tags?: Array<string> | null | undefined;
  ticket_number?: string | null | undefined;
  ticket_url?: string | null | undefined;
  title?: string | null | undefined;
  type?: TicketingReadTicketType$Outbound | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const TicketingReadTicket$outboundSchema: z.ZodType<
  TicketingReadTicket$Outbound,
  z.ZodTypeDef,
  TicketingReadTicket
> = z.object({
  assignees: z.nullable(z.array(z.string())).optional(),
  closedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  collections: z.nullable(z.array(TicketingCollection$outboundSchema))
    .optional(),
  content: z.nullable(z.array(TicketingContent$outboundSchema)).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  creatorId: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  organization: z.nullable(z.lazy(() => Organization$outboundSchema))
    .optional(),
  parentId: z.nullable(z.string()).optional(),
  priority: z.nullable(z.lazy(() => Priority$outboundSchema)).optional(),
  remoteId: z.nullable(z.string()).optional(),
  reporters: z.nullable(z.array(z.string())).optional(),
  status: z.nullable(z.lazy(() => TicketingReadTicketStatus$outboundSchema))
    .optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  ticketNumber: z.nullable(z.string()).optional(),
  ticketUrl: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  type: z.nullable(z.lazy(() => TicketingReadTicketType$outboundSchema))
    .optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    closedAt: "closed_at",
    createdAt: "created_at",
    creatorId: "creator_id",
    parentId: "parent_id",
    remoteId: "remote_id",
    ticketNumber: "ticket_number",
    ticketUrl: "ticket_url",
    unifiedCustomFields: "unified_custom_fields",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingReadTicket$ {
  /** @deprecated use `TicketingReadTicket$inboundSchema` instead. */
  export const inboundSchema = TicketingReadTicket$inboundSchema;
  /** @deprecated use `TicketingReadTicket$outboundSchema` instead. */
  export const outboundSchema = TicketingReadTicket$outboundSchema;
  /** @deprecated use `TicketingReadTicket$Outbound` instead. */
  export type Outbound = TicketingReadTicket$Outbound;
}

export function ticketingReadTicketToJSON(
  ticketingReadTicket: TicketingReadTicket,
): string {
  return JSON.stringify(
    TicketingReadTicket$outboundSchema.parse(ticketingReadTicket),
  );
}

export function ticketingReadTicketFromJSON(
  jsonString: string,
): SafeParseResult<TicketingReadTicket, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingReadTicket$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingReadTicket' from JSON`,
  );
}
