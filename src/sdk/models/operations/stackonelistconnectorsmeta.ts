/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type StackoneListConnectorsMetaRequest = {
    /**
     * The comma separated list of data that will be included in the response
     */
    include?: string | null | undefined;
};

export type StackoneListConnectorsMetaResponse = {
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
     * The list of connectors meta information was retrieved.
     */
    classes?: Array<shared.ConnectorsMeta> | undefined;
};

/** @internal */
export namespace StackoneListConnectorsMetaRequest$ {
    export type Inbound = {
        include?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        StackoneListConnectorsMetaRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            include: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.include === undefined ? null : { include: v.include }),
            };
        });

    export type Outbound = {
        include?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListConnectorsMetaRequest
    > = z
        .object({
            include: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.include === undefined ? null : { include: v.include }),
            };
        });
}

/** @internal */
export namespace StackoneListConnectorsMetaResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.ConnectorsMeta$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        StackoneListConnectorsMetaResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.ConnectorsMeta$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<shared.ConnectorsMeta$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListConnectorsMetaResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.ConnectorsMeta$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
