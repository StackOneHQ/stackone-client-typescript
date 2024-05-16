/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OfferHistory, OfferHistory$ } from "./offerhistory";
import * as z from "zod";

export type AtsCreateOfferRequestDto4 = {};

/**
 * The source value of the offer status.
 */
export type AtsCreateOfferRequestDtoSourceValue =
    | AtsCreateOfferRequestDto4
    | string
    | number
    | boolean;

/**
 * The status of the offer.
 */
export enum AtsCreateOfferRequestDtoValue {
    Pending = "pending",
    Retracted = "retracted",
    Accepted = "accepted",
    Rejected = "rejected",
    Created = "created",
    Approved = "approved",
    NotApproved = "not_approved",
    UnmappedValue = "unmapped_value",
}

export type OfferStatus = {
    /**
     * The source value of the offer status.
     */
    sourceValue?: AtsCreateOfferRequestDto4 | string | number | boolean | null | undefined;
    /**
     * The status of the offer.
     */
    value?: AtsCreateOfferRequestDtoValue | null | undefined;
};

export type AtsCreateOfferRequestDto = {
    applicationId?: string | null | undefined;
    currency?: string | null | undefined;
    offerHistory?: Array<OfferHistory> | null | undefined;
    offerStatus?: OfferStatus | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: Record<string, any> | null | undefined;
    salary?: number | null | undefined;
    /**
     * Date of creation
     */
    startDate?: Date | null | undefined;
};

/** @internal */
export namespace AtsCreateOfferRequestDto4$ {
    export const inboundSchema: z.ZodType<AtsCreateOfferRequestDto4, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateOfferRequestDto4> =
        z.object({});
}

/** @internal */
export namespace AtsCreateOfferRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        AtsCreateOfferRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => AtsCreateOfferRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound = AtsCreateOfferRequestDto4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsCreateOfferRequestDtoSourceValue
    > = z.union([
        z.lazy(() => AtsCreateOfferRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace AtsCreateOfferRequestDtoValue$ {
    export const inboundSchema = z.nativeEnum(AtsCreateOfferRequestDtoValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace OfferStatus$ {
    export const inboundSchema: z.ZodType<OfferStatus, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateOfferRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateOfferRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | AtsCreateOfferRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferStatus> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AtsCreateOfferRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AtsCreateOfferRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace AtsCreateOfferRequestDto$ {
    export const inboundSchema: z.ZodType<AtsCreateOfferRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            application_id: z.nullable(z.string()).optional(),
            currency: z.nullable(z.string()).optional(),
            offer_history: z.nullable(z.array(OfferHistory$.inboundSchema)).optional(),
            offer_status: z.nullable(z.lazy(() => OfferStatus$.inboundSchema)).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            salary: z.nullable(z.number()).optional(),
            start_date: z
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
                ...(v.application_id === undefined ? null : { applicationId: v.application_id }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.offer_history === undefined ? null : { offerHistory: v.offer_history }),
                ...(v.offer_status === undefined ? null : { offerStatus: v.offer_status }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.salary === undefined ? null : { salary: v.salary }),
                ...(v.start_date === undefined ? null : { startDate: v.start_date }),
            };
        });

    export type Outbound = {
        application_id?: string | null | undefined;
        currency?: string | null | undefined;
        offer_history?: Array<OfferHistory$.Outbound> | null | undefined;
        offer_status?: OfferStatus$.Outbound | null | undefined;
        passthrough?: Record<string, any> | null | undefined;
        salary?: number | null | undefined;
        start_date?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateOfferRequestDto> = z
        .object({
            applicationId: z.nullable(z.string()).optional(),
            currency: z.nullable(z.string()).optional(),
            offerHistory: z.nullable(z.array(OfferHistory$.outboundSchema)).optional(),
            offerStatus: z.nullable(z.lazy(() => OfferStatus$.outboundSchema)).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            salary: z.nullable(z.number()).optional(),
            startDate: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.applicationId === undefined ? null : { application_id: v.applicationId }),
                ...(v.currency === undefined ? null : { currency: v.currency }),
                ...(v.offerHistory === undefined ? null : { offer_history: v.offerHistory }),
                ...(v.offerStatus === undefined ? null : { offer_status: v.offerStatus }),
                ...(v.passthrough === undefined ? null : { passthrough: v.passthrough }),
                ...(v.salary === undefined ? null : { salary: v.salary }),
                ...(v.startDate === undefined ? null : { start_date: v.startDate }),
            };
        });
}
