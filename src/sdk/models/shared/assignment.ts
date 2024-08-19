/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    AssignmentStatusEnum,
    AssignmentStatusEnum$inboundSchema,
    AssignmentStatusEnum$Outbound,
    AssignmentStatusEnum$outboundSchema,
} from "./assignmentstatusenum.js";
import * as z from "zod";

export type Assignment = {
    /**
     * The course ID associated with this assignment
     */
    courseId?: string | null | undefined;
    /**
     * The date the assignment was created
     */
    createdAt?: string | null | undefined;
    /**
     * The date the assignment is due to be completed
     */
    dueDate?: string | null | undefined;
    /**
     * The external ID associated with this assignment
     */
    externalId?: string | null | undefined;
    /**
     * The ID associated with this assignment
     */
    id?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * Provider's unique identifier of the course related to the assignment
     */
    remoteCourseId?: string | null | undefined;
    /**
     * Provider's unique identifier of the assignment
     */
    remoteExternalId?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The status of the assignment
     */
    status?: Array<AssignmentStatusEnum> | null | undefined;
    /**
     * The date the assignment was last updated
     */
    updatedAt?: string | null | undefined;
};

/** @internal */
export const Assignment$inboundSchema: z.ZodType<Assignment, z.ZodTypeDef, unknown> = z
    .object({
        course_id: z.nullable(z.string()).optional(),
        created_at: z.nullable(z.string()).optional(),
        due_date: z.nullable(z.string()).optional(),
        external_id: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        remote_course_id: z.nullable(z.string()).optional(),
        remote_external_id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        status: z.nullable(z.array(AssignmentStatusEnum$inboundSchema)).optional(),
        updated_at: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            course_id: "courseId",
            created_at: "createdAt",
            due_date: "dueDate",
            external_id: "externalId",
            remote_course_id: "remoteCourseId",
            remote_external_id: "remoteExternalId",
            remote_id: "remoteId",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type Assignment$Outbound = {
    course_id?: string | null | undefined;
    created_at?: string | null | undefined;
    due_date?: string | null | undefined;
    external_id?: string | null | undefined;
    id?: string | null | undefined;
    passthrough?: { [k: string]: any } | null | undefined;
    remote_course_id?: string | null | undefined;
    remote_external_id?: string | null | undefined;
    remote_id?: string | null | undefined;
    status?: Array<AssignmentStatusEnum$Outbound> | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const Assignment$outboundSchema: z.ZodType<Assignment$Outbound, z.ZodTypeDef, Assignment> = z
    .object({
        courseId: z.nullable(z.string()).optional(),
        createdAt: z.nullable(z.string()).optional(),
        dueDate: z.nullable(z.string()).optional(),
        externalId: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        remoteCourseId: z.nullable(z.string()).optional(),
        remoteExternalId: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        status: z.nullable(z.array(AssignmentStatusEnum$outboundSchema)).optional(),
        updatedAt: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            courseId: "course_id",
            createdAt: "created_at",
            dueDate: "due_date",
            externalId: "external_id",
            remoteCourseId: "remote_course_id",
            remoteExternalId: "remote_external_id",
            remoteId: "remote_id",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Assignment$ {
    /** @deprecated use `Assignment$inboundSchema` instead. */
    export const inboundSchema = Assignment$inboundSchema;
    /** @deprecated use `Assignment$outboundSchema` instead. */
    export const outboundSchema = Assignment$outboundSchema;
    /** @deprecated use `Assignment$Outbound` instead. */
    export type Outbound = Assignment$Outbound;
}
