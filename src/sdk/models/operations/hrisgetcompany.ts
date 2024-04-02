/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type HrisGetCompanyRequest = {
    /**
     * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    id: string;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
     */
    proxy?: Record<string, any> | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetCompanyResponse = {
    /**
     * The Company with the given identifier was retrieved.
     */
    companyResult?: shared.CompanyResult | undefined;
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
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
export namespace HrisGetCompanyRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<HrisGetCompanyRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw: boolean | null;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetCompanyRequest> = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisGetCompanyResponse$ {
    export type Inbound = {
        CompanyResult?: shared.CompanyResult$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<HrisGetCompanyResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CompanyResult: shared.CompanyResult$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CompanyResult === undefined ? null : { companyResult: v.CompanyResult }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CompanyResult?: shared.CompanyResult$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetCompanyResponse> = z
        .object({
            companyResult: shared.CompanyResult$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.companyResult === undefined ? null : { CompanyResult: v.companyResult }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
