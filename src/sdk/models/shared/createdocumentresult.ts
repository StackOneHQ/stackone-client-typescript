/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateDocumentResult = {
    message?: string | null | undefined;
    statusCode?: number | null | undefined;
    timestamp?: Date | null | undefined;
};

/** @internal */
export namespace CreateDocumentResult$ {
    export type Inbound = {
        message?: string | null | undefined;
        statusCode?: number | null | undefined;
        timestamp?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<CreateDocumentResult, z.ZodTypeDef, Inbound> = z
        .object({
            message: z.nullable(z.string()).optional(),
            statusCode: z.nullable(z.number()).optional(),
            timestamp: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        message?: string | null | undefined;
        statusCode?: number | null | undefined;
        timestamp?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateDocumentResult> = z
        .object({
            message: z.nullable(z.string()).optional(),
            statusCode: z.nullable(z.number()).optional(),
            timestamp: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.statusCode === undefined ? null : { statusCode: v.statusCode }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}