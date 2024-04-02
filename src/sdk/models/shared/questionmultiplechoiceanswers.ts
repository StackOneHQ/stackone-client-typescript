/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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
    export type Inbound = {
        id?: string | null | undefined;
        remote_id?: string | null | undefined;
        text?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<QuestionMultipleChoiceAnswers, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            text: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.text === undefined ? null : { text: v.text }),
            };
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
                return {
                    ...(v.id === undefined ? null : { id: v.id }),
                    ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                    ...(v.text === undefined ? null : { text: v.text }),
                };
            });
}
