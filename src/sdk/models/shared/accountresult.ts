/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Account, Account$ } from "./account";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type AccountResult = {
    data: Account;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace AccountResult$ {
    export type Inbound = {
        data: Account$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AccountResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: Account$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Account$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AccountResult> = z
        .object({
            data: Account$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
