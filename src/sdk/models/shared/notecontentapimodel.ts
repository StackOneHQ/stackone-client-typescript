/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type NoteContentApiModel = {
    /**
     * Body of the note
     */
    body: string;
};

/** @internal */
export namespace NoteContentApiModel$ {
    export type Inbound = {
        body: string;
    };

    export const inboundSchema: z.ZodType<NoteContentApiModel, z.ZodTypeDef, Inbound> = z
        .object({
            body: z.string(),
        })
        .transform((v) => {
            return {
                body: v.body,
            };
        });

    export type Outbound = {
        body: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteContentApiModel> = z
        .object({
            body: z.string(),
        })
        .transform((v) => {
            return {
                body: v.body,
            };
        });
}
