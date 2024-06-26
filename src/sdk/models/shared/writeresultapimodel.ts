/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { ProviderErrorApiModel, ProviderErrorApiModel$ } from "./providererrorapimodel.js";
import * as z from "zod";

export type WriteResultApiModel = {
    message?: string | null | undefined;
    providerErrors?: Array<ProviderErrorApiModel> | null | undefined;
    statusCode?: number | null | undefined;
    timestamp?: Date | null | undefined;
};

/** @internal */
export namespace WriteResultApiModel$ {
    export const inboundSchema: z.ZodType<WriteResultApiModel, z.ZodTypeDef, unknown> = z
        .object({
            message: z.nullable(z.string()).optional(),
            provider_errors: z.nullable(z.array(ProviderErrorApiModel$.inboundSchema)).optional(),
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
            return remap$(v, {
                provider_errors: "providerErrors",
            });
        });

    export type Outbound = {
        message?: string | null | undefined;
        provider_errors?: Array<ProviderErrorApiModel$.Outbound> | null | undefined;
        statusCode?: number | null | undefined;
        timestamp?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WriteResultApiModel> = z
        .object({
            message: z.nullable(z.string()).optional(),
            providerErrors: z.nullable(z.array(ProviderErrorApiModel$.outboundSchema)).optional(),
            statusCode: z.nullable(z.number()).optional(),
            timestamp: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                providerErrors: "provider_errors",
            });
        });
}
