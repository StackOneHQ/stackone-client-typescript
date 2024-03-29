/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type QuestionMultipleChoiceAnswers = {
    id?: string | null | undefined;
    text?: string | null | undefined;
};

/** @internal */
export namespace QuestionMultipleChoiceAnswers$ {
    export type Inbound = {
        id?: string | null | undefined;
        text?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<QuestionMultipleChoiceAnswers, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.nullable(z.string()).optional(),
            text: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.text === undefined ? null : { text: v.text }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        text?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QuestionMultipleChoiceAnswers> =
        z
            .object({
                id: z.nullable(z.string()).optional(),
                text: z.nullable(z.string()).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.id === undefined ? null : { id: v.id }),
                    ...(v.text === undefined ? null : { text: v.text }),
                };
            });
}
