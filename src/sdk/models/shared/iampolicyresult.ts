/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    IamPolicy,
    IamPolicy$inboundSchema,
    IamPolicy$Outbound,
    IamPolicy$outboundSchema,
} from "./iampolicy.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type IamPolicyResult = {
    data: IamPolicy;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const IamPolicyResult$inboundSchema: z.ZodType<IamPolicyResult, z.ZodTypeDef, unknown> =
    z.object({
        data: IamPolicy$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type IamPolicyResult$Outbound = {
    data: IamPolicy$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const IamPolicyResult$outboundSchema: z.ZodType<
    IamPolicyResult$Outbound,
    z.ZodTypeDef,
    IamPolicyResult
> = z.object({
    data: IamPolicy$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamPolicyResult$ {
    /** @deprecated use `IamPolicyResult$inboundSchema` instead. */
    export const inboundSchema = IamPolicyResult$inboundSchema;
    /** @deprecated use `IamPolicyResult$outboundSchema` instead. */
    export const outboundSchema = IamPolicyResult$outboundSchema;
    /** @deprecated use `IamPolicyResult$Outbound` instead. */
    export type Outbound = IamPolicyResult$Outbound;
}
