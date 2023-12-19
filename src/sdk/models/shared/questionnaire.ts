/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Answer, Answer$ } from "./answer";
import { z } from "zod";

export type Questionnaire = {
    answers: Array<Answer>;
    /**
     * Unique identifier of the questionnaire
     */
    id?: string | undefined;
};

/** @internal */
export namespace Questionnaire$ {
    export type Inbound = {
        answers: Array<Answer$.Inbound>;
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Questionnaire, z.ZodTypeDef, Inbound> = z
        .object({
            answers: z.array(Answer$.inboundSchema),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                answers: v.answers,
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        answers: Array<Answer$.Outbound>;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Questionnaire> = z
        .object({
            answers: z.array(Answer$.outboundSchema),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                answers: v.answers,
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
