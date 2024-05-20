/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type IamGetRoleRequest = {
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

export type IamGetRoleResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The role with the given identifier was retrieved.
     */
    iamRoleResult?: shared.IamRoleResult | undefined;
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
export namespace IamGetRoleRequest$ {
    export const inboundSchema: z.ZodType<IamGetRoleRequest, z.ZodTypeDef, unknown> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        expand?: string | null | undefined;
        fields?: string | null | undefined;
        id: string;
        proxy?: { [k: string]: any } | null | undefined;
        raw: boolean | null;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamGetRoleRequest> = z
        .object({
            expand: z.nullable(z.string()).optional(),
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.expand === undefined ? null : { expand: v.expand }),
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace IamGetRoleResponse$ {
    export const inboundSchema: z.ZodType<IamGetRoleResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            IamRoleResult: shared.IamRoleResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.IamRoleResult === undefined ? null : { iamRoleResult: v.IamRoleResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        IamRoleResult?: shared.IamRoleResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamGetRoleResponse> = z
        .object({
            contentType: z.string(),
            iamRoleResult: shared.IamRoleResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.iamRoleResult === undefined ? null : { IamRoleResult: v.iamRoleResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
