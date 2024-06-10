/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type HrisGetGroupRequest = {
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

export type HrisGetGroupResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The group with the given identifier was retrieved.
     */
    hrisGroupsResult?: shared.HRISGroupsResult | undefined;
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
export namespace HrisGetGroupRequest$ {
    export const inboundSchema: z.ZodType<HrisGetGroupRequest, z.ZodTypeDef, unknown> = z
        .object({
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
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetGroupRequest> = z
        .object({
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
export namespace HrisGetGroupResponse$ {
    export const inboundSchema: z.ZodType<HrisGetGroupResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            HRISGroupsResult: shared.HRISGroupsResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                HRISGroupsResult: "hrisGroupsResult",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        HRISGroupsResult?: shared.HRISGroupsResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, HrisGetGroupResponse> = z
        .object({
            contentType: z.string(),
            hrisGroupsResult: shared.HRISGroupsResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                hrisGroupsResult: "HRISGroupsResult",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
