/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Question, Question$ } from "./question";
import * as z from "zod";

export type JobPostingQuestionnaire = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    internal?: boolean | null | undefined;
    name?: string | null | undefined;
    questions?: Array<Question> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
};

/** @internal */
export namespace JobPostingQuestionnaire$ {
    export const inboundSchema: z.ZodType<JobPostingQuestionnaire, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            internal: z.nullable(z.boolean()).optional(),
            name: z.nullable(z.string()).optional(),
            questions: z.nullable(z.array(Question$.inboundSchema)).optional(),
            remote_id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.questions === undefined ? null : { questions: v.questions }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        internal?: boolean | null | undefined;
        name?: string | null | undefined;
        questions?: Array<Question$.Outbound> | null | undefined;
        remote_id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobPostingQuestionnaire> = z
        .object({
            id: z.nullable(z.string()).optional(),
            internal: z.nullable(z.boolean()).optional(),
            name: z.nullable(z.string()).optional(),
            questions: z.nullable(z.array(Question$.outboundSchema)).optional(),
            remoteId: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.internal === undefined ? null : { internal: v.internal }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.questions === undefined ? null : { questions: v.questions }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
            };
        });
}
