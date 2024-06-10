/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives";
import * as shared from "../shared";
import * as z from "zod";

export type StackoneCreateConnectSessionResponse = {
    /**
     * The details of the connect session created with token.
     */
    connectSessionToken?: shared.ConnectSessionToken | undefined;
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
export namespace StackoneCreateConnectSessionResponse$ {
    export const inboundSchema: z.ZodType<
        StackoneCreateConnectSessionResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ConnectSessionToken: shared.ConnectSessionToken$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return remap$(v, {
                ConnectSessionToken: "connectSessionToken",
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ConnectSessionToken?: shared.ConnectSessionToken$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneCreateConnectSessionResponse
    > = z
        .object({
            connectSessionToken: shared.ConnectSessionToken$.outboundSchema.optional(),
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return remap$(v, {
                connectSessionToken: "ConnectSessionToken",
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
