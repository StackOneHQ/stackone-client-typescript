/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import {
    CandidateCustomFields,
    CandidateCustomFields$inboundSchema,
    CandidateCustomFields$Outbound,
    CandidateCustomFields$outboundSchema,
} from "./candidatecustomfields.js";
import {
    CandidateEmail,
    CandidateEmail$inboundSchema,
    CandidateEmail$Outbound,
    CandidateEmail$outboundSchema,
} from "./candidateemail.js";
import {
    PhoneNumber,
    PhoneNumber$inboundSchema,
    PhoneNumber$Outbound,
    PhoneNumber$outboundSchema,
} from "./phonenumber.js";
import {
    SocialLink,
    SocialLink$inboundSchema,
    SocialLink$Outbound,
    SocialLink$outboundSchema,
} from "./sociallink.js";
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
     * Candidate country
     */
    country?: string | null | undefined;
    /**
     * Candidate created date
     */
    createdAt?: Date | null | undefined;
    /**
     * The candidate custom fields
     */
    customFields?: Array<CandidateCustomFields> | null | undefined;
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
     * Unique identifier
     */
    id?: string | null | undefined;
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
     * Provider's list of candidate application IDs
     */
    remoteApplicationIds?: Array<string> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * List of candidate social links
     */
    socialLinks?: Array<SocialLink> | null | undefined;
    /**
     * Candidate title
     */
    title?: string | null | undefined;
    /**
     * Custom Unified Fields configured in your StackOne project
     */
    unifiedCustomFields?: { [k: string]: any } | null | undefined;
    /**
     * Candidate updated date
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const Candidate$inboundSchema: z.ZodType<Candidate, z.ZodTypeDef, unknown> = z
    .object({
        application_ids: z.nullable(z.array(z.string())).optional(),
        company: z.nullable(z.string()).optional(),
        country: z.nullable(z.string()).optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        custom_fields: z.nullable(z.array(CandidateCustomFields$inboundSchema)).optional(),
        email: z.nullable(z.string()).optional(),
        emails: z.nullable(z.array(CandidateEmail$inboundSchema)).optional(),
        first_name: z.nullable(z.string()).optional(),
        hired_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        id: z.nullable(z.string()).optional(),
        last_name: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        phone: z.nullable(z.string()).optional(),
        phone_numbers: z.nullable(z.array(PhoneNumber$inboundSchema)).optional(),
        remote_application_ids: z.nullable(z.array(z.string())).optional(),
        remote_id: z.nullable(z.string()).optional(),
        social_links: z.nullable(z.array(SocialLink$inboundSchema)).optional(),
        title: z.nullable(z.string()).optional(),
        unified_custom_fields: z.nullable(z.record(z.any())).optional(),
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
        return remap$(v, {
            application_ids: "applicationIds",
            created_at: "createdAt",
            custom_fields: "customFields",
            first_name: "firstName",
            hired_at: "hiredAt",
            last_name: "lastName",
            phone_numbers: "phoneNumbers",
            remote_application_ids: "remoteApplicationIds",
            remote_id: "remoteId",
            social_links: "socialLinks",
            unified_custom_fields: "unifiedCustomFields",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type Candidate$Outbound = {
    application_ids?: Array<string> | null | undefined;
    company?: string | null | undefined;
    country?: string | null | undefined;
    created_at?: string | null | undefined;
    custom_fields?: Array<CandidateCustomFields$Outbound> | null | undefined;
    email?: string | null | undefined;
    emails?: Array<CandidateEmail$Outbound> | null | undefined;
    first_name?: string | null | undefined;
    hired_at?: string | null | undefined;
    id?: string | null | undefined;
    last_name?: string | null | undefined;
    name?: string | null | undefined;
    phone?: string | null | undefined;
    phone_numbers?: Array<PhoneNumber$Outbound> | null | undefined;
    remote_application_ids?: Array<string> | null | undefined;
    remote_id?: string | null | undefined;
    social_links?: Array<SocialLink$Outbound> | null | undefined;
    title?: string | null | undefined;
    unified_custom_fields?: { [k: string]: any } | null | undefined;
    updated_at?: string | null | undefined;
};

/** @internal */
export const Candidate$outboundSchema: z.ZodType<Candidate$Outbound, z.ZodTypeDef, Candidate> = z
    .object({
        applicationIds: z.nullable(z.array(z.string())).optional(),
        company: z.nullable(z.string()).optional(),
        country: z.nullable(z.string()).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        customFields: z.nullable(z.array(CandidateCustomFields$outboundSchema)).optional(),
        email: z.nullable(z.string()).optional(),
        emails: z.nullable(z.array(CandidateEmail$outboundSchema)).optional(),
        firstName: z.nullable(z.string()).optional(),
        hiredAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        id: z.nullable(z.string()).optional(),
        lastName: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        phone: z.nullable(z.string()).optional(),
        phoneNumbers: z.nullable(z.array(PhoneNumber$outboundSchema)).optional(),
        remoteApplicationIds: z.nullable(z.array(z.string())).optional(),
        remoteId: z.nullable(z.string()).optional(),
        socialLinks: z.nullable(z.array(SocialLink$outboundSchema)).optional(),
        title: z.nullable(z.string()).optional(),
        unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
        updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            applicationIds: "application_ids",
            createdAt: "created_at",
            customFields: "custom_fields",
            firstName: "first_name",
            hiredAt: "hired_at",
            lastName: "last_name",
            phoneNumbers: "phone_numbers",
            remoteApplicationIds: "remote_application_ids",
            remoteId: "remote_id",
            socialLinks: "social_links",
            unifiedCustomFields: "unified_custom_fields",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Candidate$ {
    /** @deprecated use `Candidate$inboundSchema` instead. */
    export const inboundSchema = Candidate$inboundSchema;
    /** @deprecated use `Candidate$outboundSchema` instead. */
    export const outboundSchema = Candidate$outboundSchema;
    /** @deprecated use `Candidate$Outbound` instead. */
    export type Outbound = Candidate$Outbound;
}
