/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types";
import * as z from "zod";

export type HRISBenefit4 = {};

export type HRISBenefitSourceValue = HRISBenefit4 | string | number | boolean;

/**
 * The type of the benefit
 */
export enum HRISBenefitValue {
    RetirementSavings = "retirement_savings",
    HealthSavings = "health_savings",
    Other = "other",
    HealthInsurance = "health_insurance",
    Insurance = "insurance",
}
/**
 * The type of the benefit
 */
export type HRISBenefitValueOpen = OpenEnum<typeof HRISBenefitValue>;

/**
 * The type of the benefit
 */
export type BenefitType = {
    sourceValue?: HRISBenefit4 | string | number | boolean | null | undefined;
    /**
     * The type of the benefit
     */
    value?: HRISBenefitValueOpen | null | undefined;
};

export type HRISBenefit = {
    /**
     * The type of the benefit
     */
    benefitType?: BenefitType | null | undefined;
    /**
     * The date and time the benefit was created
     */
    createdAt?: Date | null | undefined;
    /**
     * The description of the benefit
     */
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the benefit
     */
    name?: string | null | undefined;
    /**
     * The provider of the benefit
     */
    provider?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The date and time the benefit was last updated
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace HRISBenefit4$ {
    export const inboundSchema: z.ZodType<HRISBenefit4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISBenefit4> = z.object({});
}

/** @internal */
export namespace HRISBenefitSourceValue$ {
    export const inboundSchema: z.ZodType<HRISBenefitSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => HRISBenefit4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = HRISBenefit4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISBenefitSourceValue> =
        z.union([z.lazy(() => HRISBenefit4$.outboundSchema), z.string(), z.number(), z.boolean()]);
}

/** @internal */
export namespace HRISBenefitValue$ {
    export const inboundSchema: z.ZodType<HRISBenefitValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(HRISBenefitValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema = z.union([
        z.nativeEnum(HRISBenefitValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace BenefitType$ {
    export const inboundSchema: z.ZodType<BenefitType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => HRISBenefit4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HRISBenefitValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: HRISBenefit4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BenefitType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HRISBenefit4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HRISBenefitValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HRISBenefit$ {
    export const inboundSchema: z.ZodType<HRISBenefit, z.ZodTypeDef, unknown> = z
        .object({
            benefit_type: z.nullable(z.lazy(() => BenefitType$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            provider: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            updated_at: z
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
                ...(v.benefit_type === undefined ? null : { benefitType: v.benefit_type }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        benefit_type?: BenefitType$.Outbound | null | undefined;
        created_at?: string | null | undefined;
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        provider?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HRISBenefit> = z
        .object({
            benefitType: z.nullable(z.lazy(() => BenefitType$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            provider: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.benefitType === undefined ? null : { benefit_type: v.benefitType }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
