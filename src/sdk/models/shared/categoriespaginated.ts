/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Category, Category$ } from "./category.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type CategoriesPaginated = {
    data: Array<Category>;
    next?: string | null | undefined;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace CategoriesPaginated$ {
    export const inboundSchema: z.ZodType<CategoriesPaginated, z.ZodTypeDef, unknown> = z.object({
        data: z.array(Category$.inboundSchema),
        next: z.nullable(z.string()).optional(),
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Array<Category$.Outbound>;
        next?: string | null | undefined;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CategoriesPaginated> = z.object({
        data: z.array(Category$.outboundSchema),
        next: z.nullable(z.string()).optional(),
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
