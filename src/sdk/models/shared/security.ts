/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Security = {
    password: string;
    username: string;
};

/** @internal */
export const Security$inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z.object({
    password: z.string(),
    username: z.string(),
});

/** @internal */
export type Security$Outbound = {
    password: string;
    username: string;
};

/** @internal */
export const Security$outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security> =
    z.object({
        password: z.string(),
        username: z.string(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Security$ {
    /** @deprecated use `Security$inboundSchema` instead. */
    export const inboundSchema = Security$inboundSchema;
    /** @deprecated use `Security$outboundSchema` instead. */
    export const outboundSchema = Security$outboundSchema;
    /** @deprecated use `Security$Outbound` instead. */
    export type Outbound = Security$Outbound;
}
