/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type HrisGetEmployeesTimeOffRequestRequest = {
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
    subResourceId: string;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type HrisGetEmployeesTimeOffRequestResponse = {
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
    /**
     * The time off request related to the employee with the given identifiers was retrieved.
     */
    timeOffResult?: shared.TimeOffResult | undefined;
};

/** @internal */
export namespace HrisGetEmployeesTimeOffRequestRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        HrisGetEmployeesTimeOffRequestRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                subResourceId: v.subResourceId,
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw: boolean | null;
        subResourceId: string;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeesTimeOffRequestRequest
    > = z
        .object({
            fields: z.nullable(z.string()).optional(),
            id: z.string(),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            subResourceId: z.string(),
            xAccountId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                id: v.id,
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                raw: v.raw,
                subResourceId: v.subResourceId,
                "x-account-id": v.xAccountId,
            };
        });
}

/** @internal */
export namespace HrisGetEmployeesTimeOffRequestResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        TimeOffResult?: shared.TimeOffResult$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        HrisGetEmployeesTimeOffRequestResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TimeOffResult: shared.TimeOffResult$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TimeOffResult === undefined ? null : { timeOffResult: v.TimeOffResult }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        TimeOffResult?: shared.TimeOffResult$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisGetEmployeesTimeOffRequestResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            timeOffResult: shared.TimeOffResult$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.timeOffResult === undefined ? null : { TimeOffResult: v.timeOffResult }),
            };
        });
}
