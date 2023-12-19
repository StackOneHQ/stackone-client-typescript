/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RawResponse, RawResponse$ } from "./rawresponse";
import { User, User$ } from "./user";
import { z } from "zod";

export type UserResult = {
    data: User;
    raw: Array<RawResponse>;
};

/** @internal */
export namespace UserResult$ {
    export type Inbound = {
        data: User$.Inbound;
        raw: Array<RawResponse$.Inbound>;
    };

    export const inboundSchema: z.ZodType<UserResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: User$.inboundSchema,
            raw: z.array(RawResponse$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
                raw: v.raw,
            };
        });

    export type Outbound = {
        data: User$.Outbound;
        raw: Array<RawResponse$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserResult> = z
        .object({
            data: User$.outboundSchema,
            raw: z.array(RawResponse$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
                raw: v.raw,
            };
        });
}
