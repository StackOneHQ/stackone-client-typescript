/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
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
export const StackoneGetConnectorMetaRequest$inboundSchema: z.ZodType<
    StackoneGetConnectorMetaRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    include: z.nullable(z.string()).optional(),
    provider: z.string(),
});

/** @internal */
export type StackoneGetConnectorMetaRequest$Outbound = {
    include?: string | null | undefined;
    provider: string;
};

/** @internal */
export const StackoneGetConnectorMetaRequest$outboundSchema: z.ZodType<
    StackoneGetConnectorMetaRequest$Outbound,
    z.ZodTypeDef,
    StackoneGetConnectorMetaRequest
> = z.object({
    include: z.nullable(z.string()).optional(),
    provider: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetConnectorMetaRequest$ {
    /** @deprecated use `StackoneGetConnectorMetaRequest$inboundSchema` instead. */
    export const inboundSchema = StackoneGetConnectorMetaRequest$inboundSchema;
    /** @deprecated use `StackoneGetConnectorMetaRequest$outboundSchema` instead. */
    export const outboundSchema = StackoneGetConnectorMetaRequest$outboundSchema;
    /** @deprecated use `StackoneGetConnectorMetaRequest$Outbound` instead. */
    export type Outbound = StackoneGetConnectorMetaRequest$Outbound;
}

/** @internal */
export const StackoneGetConnectorMetaResponse$inboundSchema: z.ZodType<
    StackoneGetConnectorMetaResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ConnectorsMeta: shared.ConnectorsMeta$inboundSchema.optional(),
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
    })
    .transform((v) => {
        return remap$(v, {
            ConnectorsMeta: "connectorsMeta",
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type StackoneGetConnectorMetaResponse$Outbound = {
    ConnectorsMeta?: shared.ConnectorsMeta$Outbound | undefined;
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
};

/** @internal */
export const StackoneGetConnectorMetaResponse$outboundSchema: z.ZodType<
    StackoneGetConnectorMetaResponse$Outbound,
    z.ZodTypeDef,
    StackoneGetConnectorMetaResponse
> = z
    .object({
        connectorsMeta: shared.ConnectorsMeta$outboundSchema.optional(),
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
    })
    .transform((v) => {
        return remap$(v, {
            connectorsMeta: "ConnectorsMeta",
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetConnectorMetaResponse$ {
    /** @deprecated use `StackoneGetConnectorMetaResponse$inboundSchema` instead. */
    export const inboundSchema = StackoneGetConnectorMetaResponse$inboundSchema;
    /** @deprecated use `StackoneGetConnectorMetaResponse$outboundSchema` instead. */
    export const outboundSchema = StackoneGetConnectorMetaResponse$outboundSchema;
    /** @deprecated use `StackoneGetConnectorMetaResponse$Outbound` instead. */
    export type Outbound = StackoneGetConnectorMetaResponse$Outbound;
}
