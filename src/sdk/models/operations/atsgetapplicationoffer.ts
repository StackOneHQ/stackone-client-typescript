/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type AtsGetApplicationOfferRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: { [k: string]: any } | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type AtsGetApplicationOfferResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The offer related to the application with the given identifiers was retrieved.
     */
    offersResult?: shared.OffersResult | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace AtsGetApplicationOfferRequest$ {
    export const inboundSchema: z.ZodType<AtsGetApplicationOfferRequest, z.ZodTypeDef, unknown> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        subResourceId: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetApplicationOfferRequest> =
        z
            .object({
                fields: z.nullable(z.string()).optional(),
                id: z.string(),
                proxy: z.nullable(z.record(z.any())).optional(),
                raw: z.nullable(z.boolean().default(false)),
                subResourceId: z.string(),
                xAccountId: z.string(),
            })
            .transform((v) => {
                return remap$(v, {
                    xAccountId: "x-account-id",
                });
            });
}

/** @internal */
export namespace AtsGetApplicationOfferResponse$ {
    export const inboundSchema: z.ZodType<AtsGetApplicationOfferResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            OffersResult: shared.OffersResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                OffersResult: "offersResult",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        OffersResult?: shared.OffersResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetApplicationOfferResponse> =
        z
            .object({
                contentType: z.string(),
                offersResult: shared.OffersResult$.outboundSchema.optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return remap$(v, {
                    contentType: "ContentType",
                    offersResult: "OffersResult",
                    statusCode: "StatusCode",
                    rawResponse: "RawResponse",
                });
            });
}
