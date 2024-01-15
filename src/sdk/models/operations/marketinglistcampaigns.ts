/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type MarketingListCampaignsRequest = {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    fields?: string | null | undefined;
    /**
     * The unified cursor
     */
    next?: string | null | undefined;
    /**
     * The page number of the results to fetch
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    page?: string | null | undefined;
    /**
     * The number of results per page
     */
    pageSize?: string | null | undefined;
    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
     */
    proxy?: Record<string, any> | null | undefined;
    /**
     * Indicates that the raw request result is returned
     */
    raw?: boolean | null | undefined;
    /**
     * The sync token to select the only updated results
     */
    syncToken?: string | null | undefined;
    /**
     * Use a string with a date to only select results updated after that given date
     */
    updatedAfter?: string | null | undefined;
    /**
     * The account identifier
     */
    xAccountId: string;
};

export type MarketingListCampaignsResponse = {
    /**
     * The list of campaigns was retrieved.
     */
    campaignsPaginated?: shared.CampaignsPaginated | undefined;
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
export namespace MarketingListCampaignsRequest$ {
    export type Inbound = {
        fields?: string | null | undefined;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size?: string | null | undefined;
        proxy?: Record<string, any> | null | undefined;
        raw?: boolean | null | undefined;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const inboundSchema: z.ZodType<MarketingListCampaignsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fields: z.nullable(z.string().default("")),
            next: z.nullable(z.string()).optional(),
            page: z.nullable(z.string()).optional(),
            page_size: z.nullable(z.string().default("25")),
            proxy: z.nullable(z.record(z.any())).optional(),
            raw: z.nullable(z.boolean().default(false)),
            sync_token: z.nullable(z.string()).optional(),
            updated_after: z.nullable(z.string()).optional(),
            "x-account-id": z.string(),
        })
        .transform((v) => {
            return {
                ...(v.fields === undefined ? null : { fields: v.fields }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.page === undefined ? null : { page: v.page }),
                ...(v.page_size === undefined ? null : { pageSize: v.page_size }),
                ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                ...(v.raw === undefined ? null : { raw: v.raw }),
                ...(v.sync_token === undefined ? null : { syncToken: v.sync_token }),
                ...(v.updated_after === undefined ? null : { updatedAfter: v.updated_after }),
                xAccountId: v["x-account-id"],
            };
        });

    export type Outbound = {
        fields: string | null;
        next?: string | null | undefined;
        page?: string | null | undefined;
        page_size: string | null;
        proxy?: Record<string, any> | null | undefined;
        raw: boolean | null;
        sync_token?: string | null | undefined;
        updated_after?: string | null | undefined;
        "x-account-id": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarketingListCampaignsRequest> =
        z
            .object({
                fields: z.nullable(z.string().default("")),
                next: z.nullable(z.string()).optional(),
                page: z.nullable(z.string()).optional(),
                pageSize: z.nullable(z.string().default("25")),
                proxy: z.nullable(z.record(z.any())).optional(),
                raw: z.nullable(z.boolean().default(false)),
                syncToken: z.nullable(z.string()).optional(),
                updatedAfter: z.nullable(z.string()).optional(),
                xAccountId: z.string(),
            })
            .transform((v) => {
                return {
                    fields: v.fields,
                    ...(v.next === undefined ? null : { next: v.next }),
                    ...(v.page === undefined ? null : { page: v.page }),
                    page_size: v.pageSize,
                    ...(v.proxy === undefined ? null : { proxy: v.proxy }),
                    raw: v.raw,
                    ...(v.syncToken === undefined ? null : { sync_token: v.syncToken }),
                    ...(v.updatedAfter === undefined ? null : { updated_after: v.updatedAfter }),
                    "x-account-id": v.xAccountId,
                };
            });
}

/** @internal */
export namespace MarketingListCampaignsResponse$ {
    export type Inbound = {
        CampaignsPaginated?: shared.CampaignsPaginated$.Inbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<MarketingListCampaignsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CampaignsPaginated: shared.CampaignsPaginated$.inboundSchema.optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CampaignsPaginated === undefined
                    ? null
                    : { campaignsPaginated: v.CampaignsPaginated }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CampaignsPaginated?: shared.CampaignsPaginated$.Outbound | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MarketingListCampaignsResponse> =
        z
            .object({
                campaignsPaginated: shared.CampaignsPaginated$.outboundSchema.optional(),
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.campaignsPaginated === undefined
                        ? null
                        : { CampaignsPaginated: v.campaignsPaginated }),
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
