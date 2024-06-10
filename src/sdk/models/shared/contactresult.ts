/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Contact, Contact$ } from "./contact";
import { RawResponse, RawResponse$ } from "./rawresponse";
import * as z from "zod";

export type ContactResult = {
    data: Contact;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace ContactResult$ {
    export const inboundSchema: z.ZodType<ContactResult, z.ZodTypeDef, unknown> = z.object({
        data: Contact$.inboundSchema,
        raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
    });

    export type Outbound = {
        data: Contact$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContactResult> = z.object({
        data: Contact$.outboundSchema,
        raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
    });
}
