/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type AtsGetApplicationScorecardRequest = {
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

export type AtsGetApplicationScorecardResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The scorecard related to the application with the given identifiers was retrieved.
     */
    scorecardsResult?: shared.ScorecardsResult | undefined;
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
export namespace AtsGetApplicationScorecardRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        id: string;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        subResourceId: string;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<
        AtsGetApplicationScorecardRequest,
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
        AtsGetApplicationScorecardRequest
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
export namespace AtsGetApplicationScorecardResponse$ {
    export type Inbound = {
        ContentType: string;
        ScorecardsResult?: shared.ScorecardsResult$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        AtsGetApplicationScorecardResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ScorecardsResult: shared.ScorecardsResult$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ScorecardsResult === undefined
                    ? null
                    : { scorecardsResult: v.ScorecardsResult }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ScorecardsResult?: shared.ScorecardsResult$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AtsGetApplicationScorecardResponse
    > = z
        .object({
            contentType: z.string(),
            scorecardsResult: shared.ScorecardsResult$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.scorecardsResult === undefined
                    ? null
                    : { ScorecardsResult: v.scorecardsResult }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
