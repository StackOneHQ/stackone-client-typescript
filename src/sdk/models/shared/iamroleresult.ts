/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    IamRole,
    IamRole$inboundSchema,
    IamRole$Outbound,
    IamRole$outboundSchema,
} from "./iamrole.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type IamRoleResult = {
    data: IamRole;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const IamRoleResult$inboundSchema: z.ZodType<IamRoleResult, z.ZodTypeDef, unknown> =
    z.object({
        data: IamRole$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type IamRoleResult$Outbound = {
    data: IamRole$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const IamRoleResult$outboundSchema: z.ZodType<
    IamRoleResult$Outbound,
    z.ZodTypeDef,
    IamRoleResult
> = z.object({
    data: IamRole$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamRoleResult$ {
    /** @deprecated use `IamRoleResult$inboundSchema` instead. */
    export const inboundSchema = IamRoleResult$inboundSchema;
    /** @deprecated use `IamRoleResult$outboundSchema` instead. */
    export const outboundSchema = IamRoleResult$outboundSchema;
    /** @deprecated use `IamRoleResult$Outbound` instead. */
    export type Outbound = IamRoleResult$Outbound;
}
