/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Category, Category$ } from "./category.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type CategoryResult = {
    data: Category;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace CategoryResult$ {
    export const inboundSchema: z.ZodType<CategoryResult, z.ZodTypeDef, unknown> = z.object({
        data: Category$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Category$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CategoryResult> = z.object({
        data: Category$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}