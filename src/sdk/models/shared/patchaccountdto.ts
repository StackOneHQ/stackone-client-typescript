/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PatchAccountDto = {};

/** @internal */
export namespace PatchAccountDto$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<PatchAccountDto, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchAccountDto> = z.object({});
}
