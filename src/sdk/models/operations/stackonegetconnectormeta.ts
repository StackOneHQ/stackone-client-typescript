/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type StackoneGetConnectorMetaRequest = {
    /**
     * The comma separated list of data that will be included in the response
     */
    include?: string | null | undefined;
    provider: string;
};

export type StackoneGetConnectorMetaResponse = {
    /**
     * The connector meta information was retrieved
     */
    connectorsMeta?: shared.ConnectorsMeta | undefined;
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
export namespace StackoneGetConnectorMetaRequest$ {
    export type Inbound = {
        include?: string | null | undefined;
        provider: string;
    };

    export const inboundSchema: z.ZodType<StackoneGetConnectorMetaRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                include: z.nullable(z.string()).optional(),
                provider: z.string(),
            })
            .transform((v) => {
                return {
                    ...(v.include === undefined ? null : { include: v.include }),
                    provider: v.provider,
                };
            });

    export type Outbound = {
        include?: string | null | undefined;
        provider: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneGetConnectorMetaRequest
    > = z
        .object({
            include: z.nullable(z.string()).optional(),
            provider: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.include === undefined ? null : { include: v.include }),
                provider: v.provider,
            };
        });
}

/** @internal */
export namespace StackoneGetConnectorMetaResponse$ {
    export type Inbound = {
        ConnectorsMeta?: shared.ConnectorsMeta$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<StackoneGetConnectorMetaResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ConnectorsMeta: shared.ConnectorsMeta$.inboundSchema.optional(),
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
            })
            .transform((v) => {
                return {
                    ...(v.ConnectorsMeta === undefined
                        ? null
                        : { connectorsMeta: v.ConnectorsMeta }),
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                };
            });

    export type Outbound = {
        ConnectorsMeta?: shared.ConnectorsMeta$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneGetConnectorMetaResponse
    > = z
        .object({
            connectorsMeta: shared.ConnectorsMeta$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.connectorsMeta === undefined ? null : { ConnectorsMeta: v.connectorsMeta }),
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}