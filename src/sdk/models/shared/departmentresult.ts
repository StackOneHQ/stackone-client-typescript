/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    Department,
    Department$inboundSchema,
    Department$Outbound,
    Department$outboundSchema,
} from "./department.js";
import {
    RawResponse,
    RawResponse$inboundSchema,
    RawResponse$Outbound,
    RawResponse$outboundSchema,
} from "./rawresponse.js";
import * as z from "zod";

export type DepartmentResult = {
    data: Department;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const DepartmentResult$inboundSchema: z.ZodType<DepartmentResult, z.ZodTypeDef, unknown> =
    z.object({
        data: Department$inboundSchema,
        raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
    });

/** @internal */
export type DepartmentResult$Outbound = {
    data: Department$Outbound;
    raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const DepartmentResult$outboundSchema: z.ZodType<
    DepartmentResult$Outbound,
    z.ZodTypeDef,
    DepartmentResult
> = z.object({
    data: Department$outboundSchema,
    raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DepartmentResult$ {
    /** @deprecated use `DepartmentResult$inboundSchema` instead. */
    export const inboundSchema = DepartmentResult$inboundSchema;
    /** @deprecated use `DepartmentResult$outboundSchema` instead. */
    export const outboundSchema = DepartmentResult$outboundSchema;
    /** @deprecated use `DepartmentResult$Outbound` instead. */
    export type Outbound = DepartmentResult$Outbound;
}
