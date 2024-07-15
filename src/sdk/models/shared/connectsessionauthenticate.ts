/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ConnectSessionAuthenticate = {
    /**
     * The token to authenticate with
     */
    token: string;
};

/** @internal */
export const ConnectSessionAuthenticate$inboundSchema: z.ZodType<
    ConnectSessionAuthenticate,
    z.ZodTypeDef,
    unknown
> = z.object({
    token: z.string(),
});

/** @internal */
export type ConnectSessionAuthenticate$Outbound = {
    token: string;
};

/** @internal */
export const ConnectSessionAuthenticate$outboundSchema: z.ZodType<
    ConnectSessionAuthenticate$Outbound,
    z.ZodTypeDef,
    ConnectSessionAuthenticate
> = z.object({
    token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectSessionAuthenticate$ {
    /** @deprecated use `ConnectSessionAuthenticate$inboundSchema` instead. */
    export const inboundSchema = ConnectSessionAuthenticate$inboundSchema;
    /** @deprecated use `ConnectSessionAuthenticate$outboundSchema` instead. */
    export const outboundSchema = ConnectSessionAuthenticate$outboundSchema;
    /** @deprecated use `ConnectSessionAuthenticate$Outbound` instead. */
    export type Outbound = ConnectSessionAuthenticate$Outbound;
}
