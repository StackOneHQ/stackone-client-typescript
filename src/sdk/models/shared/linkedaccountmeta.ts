/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum LinkedAccountMetaCategory {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Iam = "iam",
    Marketing = "marketing",
    Lms = "lms",
    Stackone = "stackone",
}

export type LinkedAccountMeta = {
    category: LinkedAccountMetaCategory;
    models: { [k: string]: any };
    provider: string;
};

/** @internal */
export namespace LinkedAccountMetaCategory$ {
    export const inboundSchema = z.nativeEnum(LinkedAccountMetaCategory);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace LinkedAccountMeta$ {
    export const inboundSchema: z.ZodType<LinkedAccountMeta, z.ZodTypeDef, unknown> = z
        .object({
            category: LinkedAccountMetaCategory$.inboundSchema,
            models: z.record(z.any()),
            provider: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                models: v.models,
                provider: v.provider,
            };
        });

    export type Outbound = {
        category: string;
        models: { [k: string]: any };
        provider: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedAccountMeta> = z
        .object({
            category: LinkedAccountMetaCategory$.outboundSchema,
            models: z.record(z.any()),
            provider: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                models: v.models,
                provider: v.provider,
            };
        });
}
