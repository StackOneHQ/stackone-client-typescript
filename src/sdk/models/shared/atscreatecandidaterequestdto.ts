/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CandidateEmail, CandidateEmail$ } from "./candidateemail";
import * as z from "zod";

export type AtsCreateCandidateRequestDto = {
    /**
     * List of candidate application IDs
     */
    applicationIds?: Array<string> | null | undefined;
    /**
     * Candidate company
     */
    company?: string | null | undefined;
    /**
     * List of candidate emails
     */
    emails?: Array<CandidateEmail> | null | undefined;
    /**
     * Candidate first name
     */
    firstName?: string | null | undefined;
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
     * Candidate title
     */
    title?: string | null | undefined;
};

/** @internal */
export namespace AtsCreateCandidateRequestDto$ {
    export type Inbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        emails?: Array<CandidateEmail$.Inbound> | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        title?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<AtsCreateCandidateRequestDto, z.ZodTypeDef, Inbound> = z
        .object({
            application_ids: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.inboundSchema)).optional(),
            first_name: z.nullable(z.string()).optional(),
            last_name: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.application_ids === undefined ? null : { applicationIds: v.application_ids }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        emails?: Array<CandidateEmail$.Outbound> | null | undefined;
        first_name?: string | null | undefined;
        last_name?: string | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        title?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsCreateCandidateRequestDto> = z
        .object({
            applicationIds: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            emails: z.nullable(z.array(CandidateEmail$.outboundSchema)).optional(),
            firstName: z.nullable(z.string()).optional(),
            lastName: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            phone: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.applicationIds === undefined ? null : { application_ids: v.applicationIds }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });
}
