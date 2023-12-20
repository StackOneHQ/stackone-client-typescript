/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type OfferHistory = {
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    currency?: string | null | undefined;
    salary?: number | null | undefined;
    /**
     * Start Date of the offer
     */
    startDate: Date;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace OfferHistory$ {
    export type Inbound = {
        created_at?: string | null | undefined;
        currency?: string | null | undefined;
        salary?: number | null | undefined;
        start_date: string;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<OfferHistory, z.ZodTypeDef, Inbound> = z
        .object({
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable()
                .optional(),
            currency: z.string().nullable().optional(),
            salary: z.number().nullable().optional(),
            start_date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .nullable()
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.salary === undefined ? null : { salary: v.salary }),
                startDate: v.start_date,
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        created_at?: string | null | undefined;
        currency?: string | null | undefined;
        salary?: number | null | undefined;
        start_date: string;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferHistory> = z
        .object({
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable()
                .optional(),
            currency: z.string().nullable().optional(),
            salary: z.number().nullable().optional(),
            startDate: z.date().transform((v) => v.toISOString()),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .nullable()
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.salary === undefined ? null : { salary: v.salary }),
                start_date: v.startDate,
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
