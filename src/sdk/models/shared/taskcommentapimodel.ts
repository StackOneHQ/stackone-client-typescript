/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TaskCommentApiModel = {
  /**
   * The Employee ID of the author of the comment
   */
  authorEmployeeId?: string | null | undefined;
  /**
   * The text of the comment
   */
  comment?: string | null | undefined;
  /**
   * The creation date of this comment
   */
  createdAt?: Date | null | undefined;
};

/** @internal */
export const TaskCommentApiModel$inboundSchema: z.ZodType<
  TaskCommentApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  author_employee_id: z.nullable(z.string()).optional(),
  comment: z.nullable(z.string()).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "author_employee_id": "authorEmployeeId",
    "created_at": "createdAt",
  });
});

/** @internal */
export type TaskCommentApiModel$Outbound = {
  author_employee_id?: string | null | undefined;
  comment?: string | null | undefined;
  created_at?: string | null | undefined;
};

/** @internal */
export const TaskCommentApiModel$outboundSchema: z.ZodType<
  TaskCommentApiModel$Outbound,
  z.ZodTypeDef,
  TaskCommentApiModel
> = z.object({
  authorEmployeeId: z.nullable(z.string()).optional(),
  comment: z.nullable(z.string()).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    authorEmployeeId: "author_employee_id",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaskCommentApiModel$ {
  /** @deprecated use `TaskCommentApiModel$inboundSchema` instead. */
  export const inboundSchema = TaskCommentApiModel$inboundSchema;
  /** @deprecated use `TaskCommentApiModel$outboundSchema` instead. */
  export const outboundSchema = TaskCommentApiModel$outboundSchema;
  /** @deprecated use `TaskCommentApiModel$Outbound` instead. */
  export type Outbound = TaskCommentApiModel$Outbound;
}

export function taskCommentApiModelToJSON(
  taskCommentApiModel: TaskCommentApiModel,
): string {
  return JSON.stringify(
    TaskCommentApiModel$outboundSchema.parse(taskCommentApiModel),
  );
}

export function taskCommentApiModelFromJSON(
  jsonString: string,
): SafeParseResult<TaskCommentApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaskCommentApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaskCommentApiModel' from JSON`,
  );
}
