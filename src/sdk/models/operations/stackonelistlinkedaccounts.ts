/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type StackoneListLinkedAccountsRequest = {
    /**
     * The origin owner identifier of the results to fetch
     */
    originOwnerId?: string | undefined;
    /**
     * The provider of the results to fetch
     */
    provider?: string | undefined;
};

export type StackoneListLinkedAccountsResponse = {
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
     * The list of accounts was retrieved.
     */
    classes?: Array<shared.LinkedAccount> | undefined;
};

/** @internal */
export namespace StackoneListLinkedAccountsRequest$ {
    export type Inbound = {
        origin_owner_id?: string | undefined;
        provider?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        StackoneListLinkedAccountsRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            origin_owner_id: z.string().optional(),
            provider: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.origin_owner_id === undefined ? null : { originOwnerId: v.origin_owner_id }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });

    export type Outbound = {
        origin_owner_id?: string | undefined;
        provider?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListLinkedAccountsRequest
    > = z
        .object({
            originOwnerId: z.string().optional(),
            provider: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.originOwnerId === undefined ? null : { origin_owner_id: v.originOwnerId }),
                ...(v.provider === undefined ? null : { provider: v.provider }),
            };
        });
}

/** @internal */
export namespace StackoneListLinkedAccountsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.LinkedAccount$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        StackoneListLinkedAccountsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.LinkedAccount$.inboundSchema).optional(),
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
        classes?: Array<shared.LinkedAccount$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        StackoneListLinkedAccountsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.LinkedAccount$.outboundSchema).optional(),
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
