/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types";
import * as z from "zod";

/**
 * Type of phone number
 */
export enum PhoneNumberType {
    Personal = "personal",
    Work = "work",
    Mobile = "mobile",
    Home = "home",
    Unknown = "unknown",
    Other = "other",
}
/**
 * Type of phone number
 */
export type PhoneNumberTypeOpen = OpenEnum<typeof PhoneNumberType>;

export type PhoneNumber = {
    /**
     * Phone number string
     */
    phone?: string | null | undefined;
    /**
     * Type of phone number
     */
    type?: PhoneNumberTypeOpen | null | undefined;
};

/** @internal */
export namespace PhoneNumberType$ {
    export const inboundSchema: z.ZodType<PhoneNumberTypeOpen, z.ZodTypeDef, unknown> = z.union([
        z.nativeEnum(PhoneNumberType),
        z.string().transform(catchUnrecognizedEnum),
    ]);

    export const outboundSchema = z.union([
        z.nativeEnum(PhoneNumberType),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace PhoneNumber$ {
    export const inboundSchema: z.ZodType<PhoneNumber, z.ZodTypeDef, unknown> = z.object({
        phone: z.nullable(z.string()).optional(),
        type: z.nullable(PhoneNumberType$.inboundSchema).optional(),
    });

    export type Outbound = {
        phone?: string | null | undefined;
        type?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PhoneNumber> = z.object({
        phone: z.nullable(z.string()).optional(),
        type: z.nullable(PhoneNumberType$.outboundSchema).optional(),
    });
}
