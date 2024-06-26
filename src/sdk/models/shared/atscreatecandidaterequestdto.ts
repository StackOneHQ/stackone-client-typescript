/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { SocialLink, SocialLink$ } from "./sociallink.js";
import * as z from "zod";

export type AtsCreateCandidateRequestDto = {
    /**
     * Candidate company
     */
    company?: string | null | undefined;
    /**
     * Candidate country
     */
    country?: string | null | undefined;
    /**
     * Candidate email
     */
    email?: string | null | undefined;
    /**
     * Candidate first name
     */
    firstName?: string | null | undefined;
    /**
     * Candidate hired date
     */
    hiredAt?: Date | null | undefined;
    /**
     * Candidate last name
     */
    lastName?: string | null | undefined;
    /**
     * Candidate name
     */
    name?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * The candidate personal phone number
     */
    phoneNumber?: string | null | undefined;
    /**
     * List of candidate social links
     */
    socialLinks?: Array<SocialLink> | null | undefined;
    /**
     * Candidate title
     */
    title?: string | null | undefined;
};

/** @internal */
export namespace AtsCreateCandidateRequestDto$ {
    export const inboundSchema: z.ZodType<AtsCreateCandidateRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            first_name: z.nullable(z.string()).optional(),
            hired_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            last_name: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            phone_number: z.nullable(z.string()).optional(),
            social_links: z.nullable(z.array(SocialLink$.inboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                first_name: "firstName",
                hired_at: "hiredAt",
                last_name: "lastName",
                phone_number: "phoneNumber",
                social_links: "socialLinks",
            });
        });

    export type Outbound = {
        company?: string | null | undefined;
        country?: string | null | undefined;
        email?: string | null | undefined;
        first_name?: string | null | undefined;
        hired_at?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        phone_number?: string | null | undefined;
        social_links?: Array<SocialLink$.Outbound> | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateRequestDto> = z
        .object({
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            firstName: z.nullable(z.string()).optional(),
            hiredAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            phoneNumber: z.nullable(z.string()).optional(),
            socialLinks: z.nullable(z.array(SocialLink$.outboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                firstName: "first_name",
                hiredAt: "hired_at",
                lastName: "last_name",
                phoneNumber: "phone_number",
                socialLinks: "social_links",
            });
        });
}
