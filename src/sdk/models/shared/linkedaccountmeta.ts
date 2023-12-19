/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export enum Category {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Marketing = "marketing",
    Stackone = "stackone",
}

export type Models = {};

export type LinkedAccountMeta = {
    category: Category;
    models: Models;
    provider: string;
};

/** @internal */
export const Category$ = z.nativeEnum(Category);

/** @internal */
export namespace Models$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Models, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Models> = z.object({});
}

/** @internal */
export namespace LinkedAccountMeta$ {
    export type Inbound = {
        category: Category;
        models: Models$.Inbound;
        provider: string;
    };

    export const inboundSchema: z.ZodType<LinkedAccountMeta, z.ZodTypeDef, Inbound> = z
        .object({
            category: Category$,
            models: z.lazy(() => Models$.inboundSchema),
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
        category: Category;
        models: Models$.Outbound;
        provider: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkedAccountMeta> = z
        .object({
            category: Category$,
            models: z.lazy(() => Models$.outboundSchema),
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
