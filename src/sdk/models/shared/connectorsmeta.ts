/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The provider service category
 */
export enum Category {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Iam = "iam",
    Marketing = "marketing",
    Stackone = "stackone",
}

/**
 * Image assets for this provider
 */
export type Images = {
    /**
     * URL of the square logo designed and used by StackOne for this provider
     */
    logoUrl?: string | null | undefined;
    /**
     * URL of the original provider logo (with logo and/or name aligned horizontally)
     */
    originalLogoHorizontalUrl?: string | null | undefined;
};

/**
 * Resources for this provider, such as image assets
 */
export type Resources = {
    /**
     * Image assets for this provider
     */
    images?: Images | null | undefined;
};

export type ConnectorsMeta = {
    /**
     * Whether this provider has been enabled on the integrations page for the current project
     */
    active?: boolean | null | undefined;
    /**
     * The provider service category
     */
    category: Category;
    models: Record<string, any>;
    /**
     * The provider key
     */
    provider: string;
    /**
     * The provider human-readable label
     */
    providerName: string;
    /**
     * Resources for this provider, such as image assets
     */
    resources?: Resources | null | undefined;
};

/** @internal */
export const Category$ = z.nativeEnum(Category);

/** @internal */
export namespace Images$ {
    export type Inbound = {
        logo_url?: string | null | undefined;
        original_logo_horizontal_url?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Images, z.ZodTypeDef, Inbound> = z
        .object({
            logo_url: z.nullable(z.string()).optional(),
            original_logo_horizontal_url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.logo_url === undefined ? null : { logoUrl: v.logo_url }),
                ...(v.original_logo_horizontal_url === undefined
                    ? null
                    : { originalLogoHorizontalUrl: v.original_logo_horizontal_url }),
            };
        });

    export type Outbound = {
        logo_url?: string | null | undefined;
        original_logo_horizontal_url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Images> = z
        .object({
            logoUrl: z.nullable(z.string()).optional(),
            originalLogoHorizontalUrl: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.logoUrl === undefined ? null : { logo_url: v.logoUrl }),
                ...(v.originalLogoHorizontalUrl === undefined
                    ? null
                    : { original_logo_horizontal_url: v.originalLogoHorizontalUrl }),
            };
        });
}

/** @internal */
export namespace Resources$ {
    export type Inbound = {
        images?: Images$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<Resources, z.ZodTypeDef, Inbound> = z
        .object({
            images: z.nullable(z.lazy(() => Images$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.images === undefined ? null : { images: v.images }),
            };
        });

    export type Outbound = {
        images?: Images$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Resources> = z
        .object({
            images: z.nullable(z.lazy(() => Images$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.images === undefined ? null : { images: v.images }),
            };
        });
}

/** @internal */
export namespace ConnectorsMeta$ {
    export type Inbound = {
        active?: boolean | null | undefined;
        category: Category;
        models: Record<string, any>;
        provider: string;
        provider_name: string;
        resources?: Resources$.Inbound | null | undefined;
    };

    export const inboundSchema: z.ZodType<ConnectorsMeta, z.ZodTypeDef, Inbound> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            category: Category$,
            models: z.record(z.any()),
            provider: z.string(),
            provider_name: z.string(),
            resources: z.nullable(z.lazy(() => Resources$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.active === undefined ? null : { active: v.active }),
                category: v.category,
                models: v.models,
                provider: v.provider,
                providerName: v.provider_name,
                ...(v.resources === undefined ? null : { resources: v.resources }),
            };
        });

    export type Outbound = {
        active?: boolean | null | undefined;
        category: Category;
        models: Record<string, any>;
        provider: string;
        provider_name: string;
        resources?: Resources$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorsMeta> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            category: Category$,
            models: z.record(z.any()),
            provider: z.string(),
            providerName: z.string(),
            resources: z.nullable(z.lazy(() => Resources$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.active === undefined ? null : { active: v.active }),
                category: v.category,
                models: v.models,
                provider: v.provider,
                provider_name: v.providerName,
                ...(v.resources === undefined ? null : { resources: v.resources }),
            };
        });
}
