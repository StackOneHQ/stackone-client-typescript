/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type QuestionMultipleChoiceAnswers = {
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    text?: string | null | undefined;
};

/** @internal */
export namespace QuestionMultipleChoiceAnswers$ {
    export const inboundSchema: z.ZodType<QuestionMultipleChoiceAnswers, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            text: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_id: "remoteId",
            });
        });

    export type Outbound = {
        id?: string | null | undefined;
        remote_id?: string | null | undefined;
        text?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QuestionMultipleChoiceAnswers> =
        z
            .object({
                id: z.nullable(z.string()).optional(),
                remoteId: z.nullable(z.string()).optional(),
                text: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    remoteId: "remote_id",
                });
            });
}
