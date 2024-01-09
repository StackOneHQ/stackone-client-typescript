/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Employee, Employee$ } from "./employee";
import { RawResponse, RawResponse$ } from "./rawresponse";
import { z } from "zod";

export type EmployeeResult = {
    data: Employee;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace EmployeeResult$ {
    export type Inbound = {
        data: Employee$.Inbound;
        raw?: Array<RawResponse$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<EmployeeResult, z.ZodTypeDef, Inbound> = z
        .object({
            data: Employee$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });

    export type Outbound = {
        data: Employee$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmployeeResult> = z
        .object({
            data: Employee$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                data: v.data,
                ...(v.raw === undefined ? null : { raw: v.raw }),
            };
        });
}
