/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PushMessages, PushMessages$ } from "./pushmessages";
import { z } from "zod";

export type MarketingCreatePushTemplateRequestDto = {
    id?: string | undefined;
    messages?: Array<PushMessages> | undefined;
    name?: string | undefined;
    tags?: Array<string> | undefined;
};

/** @internal */
export namespace MarketingCreatePushTemplateRequestDto$ {
    export type Inbound = {
        id?: string | undefined;
        messages?: Array<PushMessages$.Inbound> | undefined;
        name?: string | undefined;
        tags?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<
        MarketingCreatePushTemplateRequestDto,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.string().optional(),
            messages: z.array(PushMessages$.inboundSchema).optional(),
            name: z.string().optional(),
            tags: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        messages?: Array<PushMessages$.Outbound> | undefined;
        name?: string | undefined;
        tags?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        MarketingCreatePushTemplateRequestDto
    > = z
        .object({
            id: z.string().optional(),
            messages: z.array(PushMessages$.outboundSchema).optional(),
            name: z.string().optional(),
            tags: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.messages === undefined ? null : { messages: v.messages }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
            };
        });
}
