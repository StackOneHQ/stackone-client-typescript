/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type HrisGetEmploymentRequest = {
    /**
     * The comma separated list of fields that will be expanded in the response
     */
    expand?: string | null | undefined;
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
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetEmploymentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The Employment with the given identifier was retrieved.
     */
    employmentResult?: shared.EmploymentResult | undefined;
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
export namespace HrisGetEmploymentRequest$ {
    export const inboundSchema: z.ZodType<HrisGetEmploymentRequest, z.ZodTypeDef, unknown> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-account-id": "xAccountId",
            });
        });

    export type Outbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetEmploymentRequest> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                xAccountId: "x-account-id",
            });
        });
}

/** @internal */
export namespace HrisGetEmploymentResponse$ {
    export const inboundSchema: z.ZodType<HrisGetEmploymentResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            EmploymentResult: shared.EmploymentResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                EmploymentResult: "employmentResult",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        EmploymentResult?: shared.EmploymentResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetEmploymentResponse> = z
        .object({
            contentType: z.string(),
            employmentResult: shared.EmploymentResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                employmentResult: "EmploymentResult",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
