/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StepLogPartial,
  StepLogPartial$inboundSchema,
  StepLogPartial$Outbound,
  StepLogPartial$outboundSchema,
} from "./steplogpartial.js";

export type UnifiedLogsPartial = {
  /**
   * The account ID of the request
   */
  accountId?: string | null | undefined;
  /**
   * The requested action
   */
  action?: string | null | undefined;
  /**
   * The requested child resource
   */
  childResource?: string | null | undefined;
  /**
   * The request duration in milliseconds
   */
  duration?: number | null | undefined;
  /**
   * The request end time ISO8601 date string
   */
  endTime?: Date | null | undefined;
  /**
   * The event ISO8601 date string
   */
  eventDatetime?: Date | null | undefined;
  /**
   * The requested HTTP method
   */
  httpMethod?: string | null | undefined;
  /**
   * The asynchronous worker flag
   */
  isWorker?: boolean | null | undefined;
  /**
   * The requested path
   */
  path?: string | null | undefined;
  /**
   * The project ID of the request
   */
  projectId?: string | null | undefined;
  /**
   * The requested provider
   */
  provider?: string | null | undefined;
  /**
   * The request ID
   */
  requestId?: string | null | undefined;
  /**
   * The requested resource
   */
  resource?: string | null | undefined;
  /**
   * The requested service
   */
  service?: string | null | undefined;
  /**
   * The requests source ID
   */
  sourceId?: string | null | undefined;
  /**
   * The requests source type
   */
  sourceType?: string | null | undefined;
  /**
   * The requests source value
   */
  sourceValue?: string | null | undefined;
  /**
   * The request start time ISO8601 date string
   */
  startTime?: Date | null | undefined;
  /**
   * The requests response status code
   */
  status?: number | null | undefined;
  /**
   * The list of provider requests
   */
  stepRequests?: Array<StepLogPartial> | null | undefined;
  /**
   * The requested sub resource
   */
  subResource?: string | null | undefined;
  /**
   * The request success flag
   */
  success?: boolean | null | undefined;
  /**
   * The requested URL
   */
  url?: string | null | undefined;
};

/** @internal */
export const UnifiedLogsPartial$inboundSchema: z.ZodType<
  UnifiedLogsPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.nullable(z.string()).optional(),
  action: z.nullable(z.string()).optional(),
  child_resource: z.nullable(z.string()).optional(),
  duration: z.nullable(z.number()).optional(),
  end_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  event_datetime: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  http_method: z.nullable(z.string()).optional(),
  is_worker: z.nullable(z.boolean()).optional(),
  path: z.nullable(z.string()).optional(),
  project_id: z.nullable(z.string()).optional(),
  provider: z.nullable(z.string()).optional(),
  request_id: z.nullable(z.string()).optional(),
  resource: z.nullable(z.string()).optional(),
  service: z.nullable(z.string()).optional(),
  source_id: z.nullable(z.string()).optional(),
  source_type: z.nullable(z.string()).optional(),
  source_value: z.nullable(z.string()).optional(),
  start_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  status: z.nullable(z.number()).optional(),
  step_requests: z.nullable(z.array(StepLogPartial$inboundSchema)).optional(),
  sub_resource: z.nullable(z.string()).optional(),
  success: z.nullable(z.boolean()).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "child_resource": "childResource",
    "end_time": "endTime",
    "event_datetime": "eventDatetime",
    "http_method": "httpMethod",
    "is_worker": "isWorker",
    "project_id": "projectId",
    "request_id": "requestId",
    "source_id": "sourceId",
    "source_type": "sourceType",
    "source_value": "sourceValue",
    "start_time": "startTime",
    "step_requests": "stepRequests",
    "sub_resource": "subResource",
  });
});

/** @internal */
export type UnifiedLogsPartial$Outbound = {
  account_id?: string | null | undefined;
  action?: string | null | undefined;
  child_resource?: string | null | undefined;
  duration?: number | null | undefined;
  end_time?: string | null | undefined;
  event_datetime?: string | null | undefined;
  http_method?: string | null | undefined;
  is_worker?: boolean | null | undefined;
  path?: string | null | undefined;
  project_id?: string | null | undefined;
  provider?: string | null | undefined;
  request_id?: string | null | undefined;
  resource?: string | null | undefined;
  service?: string | null | undefined;
  source_id?: string | null | undefined;
  source_type?: string | null | undefined;
  source_value?: string | null | undefined;
  start_time?: string | null | undefined;
  status?: number | null | undefined;
  step_requests?: Array<StepLogPartial$Outbound> | null | undefined;
  sub_resource?: string | null | undefined;
  success?: boolean | null | undefined;
  url?: string | null | undefined;
};

/** @internal */
export const UnifiedLogsPartial$outboundSchema: z.ZodType<
  UnifiedLogsPartial$Outbound,
  z.ZodTypeDef,
  UnifiedLogsPartial
> = z.object({
  accountId: z.nullable(z.string()).optional(),
  action: z.nullable(z.string()).optional(),
  childResource: z.nullable(z.string()).optional(),
  duration: z.nullable(z.number()).optional(),
  endTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  eventDatetime: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  httpMethod: z.nullable(z.string()).optional(),
  isWorker: z.nullable(z.boolean()).optional(),
  path: z.nullable(z.string()).optional(),
  projectId: z.nullable(z.string()).optional(),
  provider: z.nullable(z.string()).optional(),
  requestId: z.nullable(z.string()).optional(),
  resource: z.nullable(z.string()).optional(),
  service: z.nullable(z.string()).optional(),
  sourceId: z.nullable(z.string()).optional(),
  sourceType: z.nullable(z.string()).optional(),
  sourceValue: z.nullable(z.string()).optional(),
  startTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  status: z.nullable(z.number()).optional(),
  stepRequests: z.nullable(z.array(StepLogPartial$outboundSchema)).optional(),
  subResource: z.nullable(z.string()).optional(),
  success: z.nullable(z.boolean()).optional(),
  url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    childResource: "child_resource",
    endTime: "end_time",
    eventDatetime: "event_datetime",
    httpMethod: "http_method",
    isWorker: "is_worker",
    projectId: "project_id",
    requestId: "request_id",
    sourceId: "source_id",
    sourceType: "source_type",
    sourceValue: "source_value",
    startTime: "start_time",
    stepRequests: "step_requests",
    subResource: "sub_resource",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedLogsPartial$ {
  /** @deprecated use `UnifiedLogsPartial$inboundSchema` instead. */
  export const inboundSchema = UnifiedLogsPartial$inboundSchema;
  /** @deprecated use `UnifiedLogsPartial$outboundSchema` instead. */
  export const outboundSchema = UnifiedLogsPartial$outboundSchema;
  /** @deprecated use `UnifiedLogsPartial$Outbound` instead. */
  export type Outbound = UnifiedLogsPartial$Outbound;
}

export function unifiedLogsPartialToJSON(
  unifiedLogsPartial: UnifiedLogsPartial,
): string {
  return JSON.stringify(
    UnifiedLogsPartial$outboundSchema.parse(unifiedLogsPartial),
  );
}

export function unifiedLogsPartialFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedLogsPartial, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedLogsPartial$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedLogsPartial' from JSON`,
  );
}
