/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { CandidateEmail, CandidateEmail$ } from "./candidateemail";
import { z } from "zod";

export type AtsUpdateCandidatesRequestDto = {
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
    emails?: Array<CandidateEmail> | undefined;
    /**
     * Candidate first name
     */
    firstName?: string | undefined;
    /**
     * The ID of the candidate to update.
     */
    id?: string | null | undefined;
    /**
     * Candidate last name
     */
    lastName?: string | undefined;
    /**
     * Candidate name
     */
    name?: string | undefined;
    /**
     * Candidate phone number
     */
    phone?: string | null | undefined;
    /**
     * Candidate title
     */
    title?: string | undefined;
};

/** @internal */
export namespace AtsUpdateCandidatesRequestDto$ {
    export type Inbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        emails?: Array<CandidateEmail$.Inbound> | undefined;
        first_name?: string | undefined;
        id?: string | null | undefined;
        last_name?: string | undefined;
        name?: string | undefined;
        phone?: string | null | undefined;
        title?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AtsUpdateCandidatesRequestDto, z.ZodTypeDef, Inbound> = z
        .object({
            application_ids: z.nullable(z.array(z.string())).optional(),
            company: z.nullable(z.string()).optional(),
            emails: z.array(CandidateEmail$.inboundSchema).optional(),
            first_name: z.string().optional(),
            id: z.nullable(z.string().default("")),
            last_name: z.string().optional(),
            name: z.string().optional(),
            phone: z.nullable(z.string()).optional(),
            title: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.application_ids === undefined ? null : { applicationIds: v.application_ids }),
                ...(v.company === undefined ? null : { company: v.company }),
                ...(v.emails === undefined ? null : { emails: v.emails }),
                ...(v.first_name === undefined ? null : { firstName: v.first_name }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.last_name === undefined ? null : { lastName: v.last_name }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
                ...(v.title === undefined ? null : { title: v.title }),
            };
        });

    export type Outbound = {
        application_ids?: Array<string> | null | undefined;
        company?: string | null | undefined;
        emails?: Array<CandidateEmail$.Outbound> | undefined;
        first_name?: string | undefined;
        id: string | null;
        last_name?: string | undefined;
        name?: string | undefined;
        phone?: string | null | undefined;
        title?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AtsUpdateCandidatesRequestDto> =
        z
            .object({
                applicationIds: z.nullable(z.array(z.string())).optional(),
                company: z.nullable(z.string()).optional(),
                emails: z.array(CandidateEmail$.outboundSchema).optional(),
                firstName: z.string().optional(),
                id: z.nullable(z.string().default("")),
                lastName: z.string().optional(),
                name: z.string().optional(),
                phone: z.nullable(z.string()).optional(),
                title: z.string().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.applicationIds === undefined
                        ? null
                        : { application_ids: v.applicationIds }),
                    ...(v.company === undefined ? null : { company: v.company }),
                    ...(v.emails === undefined ? null : { emails: v.emails }),
                    ...(v.firstName === undefined ? null : { first_name: v.firstName }),
                    id: v.id,
                    ...(v.lastName === undefined ? null : { last_name: v.lastName }),
                    ...(v.name === undefined ? null : { name: v.name }),
                    ...(v.phone === undefined ? null : { phone: v.phone }),
                    ...(v.title === undefined ? null : { title: v.title }),
                };
            });
}
