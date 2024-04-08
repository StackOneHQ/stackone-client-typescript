/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { IamGroup, IamGroup$ } from "./iamgroup";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type IamGroupResult = {
    data: IamGroup;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace IamGroupResult$ {
    export type Inbound = {
        data: IamGroup$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<IamGroupResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: IamGroup$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: IamGroup$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IamGroupResult> = z
        .object({
            data: IamGroup$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}