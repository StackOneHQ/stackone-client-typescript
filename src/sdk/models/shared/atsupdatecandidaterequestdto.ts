/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { CandidateEmail, CandidateEmail$ } from "./candidateemail.js";
import { PhoneNumber, PhoneNumber$ } from "./phonenumber.js";
import { SocialLink, SocialLink$ } from "./sociallink.js";
import * as z from "zod";

export type AtsUpdateCandidateRequestDto = {
    /**
     * List of candidate application IDs
     */
    applicationIds?: Array<string> | null | undefined;
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
     * List of candidate emails
     */
    emails?: Array<CandidateEmail> | null | undefined;
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
     * Candidate phone number
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    phone?: string | null | undefined;
    /**
     * List of candidate phone numbers including the type of the number when available
     */
    phoneNumbers?: Array<PhoneNumber> | null | undefined;
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
export namespace AtsUpdateCandidateRequestDto$ {
    export const inboundSchema: z.ZodType<AtsUpdateCandidateRequestDto, z.ZodTypeDef, unknown> = z
        .object({
            application_ids: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.inboundSchema)).optional(),
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
            phone: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(PhoneNumber$.inboundSchema)).optional(),
            social_links: z.nullable(z.array(SocialLink$.inboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                application_ids: "applicationIds",
                first_name: "firstName",
                hired_at: "hiredAt",
                last_name: "lastName",
                phone_numbers: "phoneNumbers",
                social_links: "socialLinks",
            });
        });

    export type Outbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        country?: string | null | undefined;
        email?: string | null | undefined;
        emails?: Array<CandidateEmail$.Outbound> | null | undefined;
        first_name?: string | null | undefined;
        hired_at?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        passthrough?: { [k: string]: any } | null | undefined;
        phone?: string | null | undefined;
        phone_numbers?: Array<PhoneNumber$.Outbound> | null | undefined;
        social_links?: Array<SocialLink$.Outbound> | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsUpdateCandidateRequestDto> = z
        .object({
            applicationIds: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            country: z.nullable(z.string()).optional(),
            email: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.outboundSchema)).optional(),
            firstName: z.nullable(z.string()).optional(),
            hiredAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            passthrough: z.nullable(z.record(z.any())).optional(),
            phone: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(PhoneNumber$.outboundSchema)).optional(),
            socialLinks: z.nullable(z.array(SocialLink$.outboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                applicationIds: "application_ids",
                firstName: "first_name",
                hiredAt: "hired_at",
                lastName: "last_name",
                phoneNumbers: "phone_numbers",
                socialLinks: "social_links",
            });
        });
}
