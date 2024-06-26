/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

/**
 * The provider service category
 */
export enum ConnectorsMetaCategory {
    Ats = "ats",
    Hris = "hris",
    HrisLegacy = "hris-legacy",
    Crm = "crm",
    Iam = "iam",
    Marketing = "marketing",
    Lms = "lms",
    Stackone = "stackone",
}
/**
 * The provider service category
 */
export type ConnectorsMetaCategoryOpen = OpenEnum<typeof ConnectorsMetaCategory>;

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
    category: ConnectorsMetaCategoryOpen;
    models: { [k: string]: any };
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
export namespace ConnectorsMetaCategory$ {
    export const inboundSchema: z.ZodType<ConnectorsMetaCategoryOpen, z.ZodTypeDef, unknown> =
        z.union([
            z.nativeEnum(ConnectorsMetaCategory),
            z.string().transform(catchUnrecognizedEnum),
        ]);

    export const outboundSchema: z.ZodType<
        ConnectorsMetaCategoryOpen,
        z.ZodTypeDef,
        ConnectorsMetaCategoryOpen
    > = z.union([
        z.nativeEnum(ConnectorsMetaCategory),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace Images$ {
    export const inboundSchema: z.ZodType<Images, z.ZodTypeDef, unknown> = z
        .object({
            logo_url: z.nullable(z.string()).optional(),
            original_logo_horizontal_url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                logo_url: "logoUrl",
                original_logo_horizontal_url: "originalLogoHorizontalUrl",
            });
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
            return remap$(v, {
                logoUrl: "logo_url",
                originalLogoHorizontalUrl: "original_logo_horizontal_url",
            });
        });
}

/** @internal */
export namespace Resources$ {
    export const inboundSchema: z.ZodType<Resources, z.ZodTypeDef, unknown> = z.object({
        images: z.nullable(z.lazy(() => Images$.inboundSchema)).optional(),
    });

    export type Outbound = {
        images?: Images$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Resources> = z.object({
        images: z.nullable(z.lazy(() => Images$.outboundSchema)).optional(),
    });
}

/** @internal */
export namespace ConnectorsMeta$ {
    export const inboundSchema: z.ZodType<ConnectorsMeta, z.ZodTypeDef, unknown> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            category: ConnectorsMetaCategory$.inboundSchema,
            models: z.record(z.any()),
            provider: z.string(),
            provider_name: z.string(),
            resources: z.nullable(z.lazy(() => Resources$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                provider_name: "providerName",
            });
        });

    export type Outbound = {
        active?: boolean | null | undefined;
        category: string;
        models: { [k: string]: any };
        provider: string;
        provider_name: string;
        resources?: Resources$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectorsMeta> = z
        .object({
            active: z.nullable(z.boolean()).optional(),
            category: ConnectorsMetaCategory$.outboundSchema,
            models: z.record(z.any()),
            provider: z.string(),
            providerName: z.string(),
            resources: z.nullable(z.lazy(() => Resources$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                providerName: "provider_name",
            });
        });
}
