/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Note, Note$ } from "./note";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type NoteResult = {
    data: Note;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace NoteResult$ {
    export const inboundSchema: z.ZodType<NoteResult, z.ZodTypeDef, unknown> = z
        .object({
            data: Note$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Note$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteResult> = z
        .object({
            data: Note$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
