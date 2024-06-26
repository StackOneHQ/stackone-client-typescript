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
export namespace ConnectSessionAuthenticate$ {
    export const inboundSchema: z.ZodType<ConnectSessionAuthenticate, z.ZodTypeDef, unknown> =
        z.object({
            token: z.string(),
        });

    export type Outbound = {
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConnectSessionAuthenticate> =
        z.object({
            token: z.string(),
        });
}
