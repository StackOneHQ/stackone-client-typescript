/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type AtsGetDepartmentRequest = {
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

export type AtsGetDepartmentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The department with the given identifier was retrieved.
     */
    departmentResult?: shared.DepartmentResult | undefined;
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
export namespace AtsGetDepartmentRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<AtsGetDepartmentRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetDepartmentRequest> = z
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
export namespace AtsGetDepartmentResponse$ {
    export type Inbound = {
        ContentType: string;
        DepartmentResult?: shared.DepartmentResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<AtsGetDepartmentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DepartmentResult: shared.DepartmentResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DepartmentResult === undefined
                    ? null
                    : { departmentResult: v.DepartmentResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DepartmentResult?: shared.DepartmentResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsGetDepartmentResponse> = z
        .object({
            contentType: z.string(),
            departmentResult: shared.DepartmentResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.departmentResult === undefined
                    ? null
                    : { DepartmentResult: v.departmentResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
