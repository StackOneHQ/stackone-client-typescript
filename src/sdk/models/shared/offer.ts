/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import { OfferHistory, OfferHistory$ } from "./offerhistory.js";
import * as z from "zod";

export type Offer4 = {};

/**
 * The source value of the offer status.
 */
export type OfferSourceValue = Offer4 | string | number | boolean;

/**
 * The status of the offer.
 */
export enum OfferValue {
    Pending = "pending",
    Retracted = "retracted",
    Accepted = "accepted",
    Rejected = "rejected",
    Created = "created",
    Approved = "approved",
    NotApproved = "not_approved",
    UnmappedValue = "unmapped_value",
}
/**
 * The status of the offer.
 */
export type OfferValueOpen = OpenEnum<typeof OfferValue>;

export type OfferOfferStatus = {
    /**
     * The source value of the offer status.
     */
    sourceValue?: Offer4 | string | number | boolean | null | undefined;
    /**
     * The status of the offer.
     */
    value?: OfferValueOpen | null | undefined;
};

export type Offer = {
    applicationId?: string | null | undefined;
    /**
     * Date of creation
     */
    createdAt?: Date | null | undefined;
    currency?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    offerHistory?: Array<OfferHistory> | null | undefined;
    offerStatus?: OfferOfferStatus | null | undefined;
    /**
     * Provider's unique identifier of the application
     */
    remoteApplicationId?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    salary?: number | null | undefined;
    /**
     * Date of creation
     */
    startDate?: Date | null | undefined;
    /**
     * Date of last update
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Offer4$ {
    export const inboundSchema: z.ZodType<Offer4, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Offer4> = z.object({});
}

/** @internal */
export namespace OfferSourceValue$ {
    export const inboundSchema: z.ZodType<OfferSourceValue, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Offer4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = Offer4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferSourceValue> = z.union([
        z.lazy(() => Offer4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace OfferValue$ {
    export const inboundSchema: z.ZodType<OfferValueOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(OfferValue),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema: z.ZodType<OfferValueOpen, z.ZodTypeDef, OfferValueOpen> = z.union([
        z.nativeEnum(OfferValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace OfferOfferStatus$ {
    export const inboundSchema: z.ZodType<OfferOfferStatus, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => Offer4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(OfferValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?: Offer4$.Outbound | string | number | boolean | null | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferOfferStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => Offer4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(OfferValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace Offer$ {
    export const inboundSchema: z.ZodType<Offer, z.ZodTypeDef, unknown> = z
        .object({
            application_id: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            currency: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            offer_history: z.nullable(z.array(OfferHistory$.inboundSchema)).optional(),
            offer_status: z.nullable(z.lazy(() => OfferOfferStatus$.inboundSchema)).optional(),
            remote_application_id: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            salary: z.nullable(z.number()).optional(),
            start_date: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
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
            return remap$(v, {
                application_id: "applicationId",
                created_at: "createdAt",
                offer_history: "offerHistory",
                offer_status: "offerStatus",
                remote_application_id: "remoteApplicationId",
                remote_id: "remoteId",
                start_date: "startDate",
                updated_at: "updatedAt",
            });
        });

    export type Outbound = {
        application_id?: string | null | undefined;
        created_at?: string | null | undefined;
        currency?: string | null | undefined;
        id?: string | null | undefined;
        offer_history?: Array<OfferHistory$.Outbound> | null | undefined;
        offer_status?: OfferOfferStatus$.Outbound | null | undefined;
        remote_application_id?: string | null | undefined;
        remote_id?: string | null | undefined;
        salary?: number | null | undefined;
        start_date?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Offer> = z
        .object({
            applicationId: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            currency: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            offerHistory: z.nullable(z.array(OfferHistory$.outboundSchema)).optional(),
            offerStatus: z.nullable(z.lazy(() => OfferOfferStatus$.outboundSchema)).optional(),
            remoteApplicationId: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            salary: z.nullable(z.number()).optional(),
            startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                applicationId: "application_id",
                createdAt: "created_at",
                offerHistory: "offer_history",
                offerStatus: "offer_status",
                remoteApplicationId: "remote_application_id",
                remoteId: "remote_id",
                startDate: "start_date",
                updatedAt: "updated_at",
            });
        });
}
