/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CandidateEmail, CandidateEmail$ } from "./candidateemail";
import { PhoneNumber, PhoneNumber$ } from "./phonenumber";
import { SocialLink, SocialLink$ } from "./sociallink";
import * as z from "zod";

export type Candidate = {
    /**
     * List of candidate application IDs
     */
    applicationIds?: Array<string> | null | undefined;
    /**
     * Candidate company
     */
    company?: string | null | undefined;
    /**
     * Candidate created date
     */
    createdAt?: Date | null | undefined;
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
     * Candidate ID
     */
    id: string;
    /**
     * Candidate last name
     */
    lastName?: string | null | undefined;
    /**
     * Candidate name
     */
    name?: string | null | undefined;
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
    /**
     * Candidate updated date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export namespace Candidate$ {
    export type Inbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        created_at?: string | null | undefined;
        email?: string | null | undefined;
        emails?: Array<CandidateEmail$.Inbound> | null | undefined;
        first_name?: string | null | undefined;
        hired_at?: string | null | undefined;
        id: string;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        phone_numbers?: Array<PhoneNumber$.Inbound> | null | undefined;
        social_links?: Array<SocialLink$.Inbound> | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Candidate, z.ZodTypeDef, Inbound> = z
        .object({
            application_ids: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
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
            id: z.string(),
            last_name: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone: z.nullable(z.string()).optional(),
            phone_numbers: z.nullable(z.array(PhoneNumber$.inboundSchema)).optional(),
            social_links: z.nullable(z.array(SocialLink$.inboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
            updated_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.application_ids === undefined ? null : { applicationIds: v.application_ids }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.hired_at === undefined ? null : { hiredAt: v.hired_at }),
                id: v.id,
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.phone_numbers === undefined ? null : { phoneNumbers: v.phone_numbers }),
                ...(v.social_links === undefined ? null : { socialLinks: v.social_links }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        created_at?: string | null | undefined;
        email?: string | null | undefined;
        emails?: Array<CandidateEmail$.Outbound> | null | undefined;
        first_name?: string | null | undefined;
        hired_at?: string | null | undefined;
        id: string;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        phone_numbers?: Array<PhoneNumber$.Outbound> | null | undefined;
        social_links?: Array<SocialLink$.Outbound> | null | undefined;
        title?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Candidate> = z
        .object({
            applicationIds: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            email: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.outboundSchema)).optional(),
            firstName: z.nullable(z.string()).optional(),
            hiredAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.string(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone: z.nullable(z.string()).optional(),
            phoneNumbers: z.nullable(z.array(PhoneNumber$.outboundSchema)).optional(),
            socialLinks: z.nullable(z.array(SocialLink$.outboundSchema)).optional(),
            title: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.applicationIds === undefined ? null : { application_ids: v.applicationIds }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.hiredAt === undefined ? null : { hired_at: v.hiredAt }),
                id: v.id,
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.phoneNumbers === undefined ? null : { phone_numbers: v.phoneNumbers }),
                ...(v.socialLinks === undefined ? null : { social_links: v.socialLinks }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}
