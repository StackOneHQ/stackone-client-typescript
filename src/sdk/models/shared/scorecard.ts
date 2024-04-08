/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ScorecardSection, ScorecardSection$ } from "./scorecardsection";
import * as z from "zod";

/**
 * The overall recommendation
 */
export enum OverallRecommendation {
    StrongYes = "strong_yes",
    Yes = "yes",
    No = "no",
    StrongNo = "strong_no",
    NoDecision = "no_decision",
    UnmappedValue = "unmapped_value",
}

export type Scorecard = {
    /**
     * The application ID associated with the scorecard
     */
    applicationId?: string | null | undefined;
    /**
     * The author ID of the scorecard
     */
    authorId?: string | null | undefined;
    /**
     * The candidate ID associated with the scorecard
     */
    candidateId?: string | null | undefined;
    /**
     * The creation date of the scorecard
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The interview ID associated with the scorecard
     */
    interviewId?: string | null | undefined;
    /**
     * The label of the scorecard
     */
    label?: string | null | undefined;
    /**
     * The overall recommendation
     */
    overallRecommendation?: OverallRecommendation | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The sections in the scorecard
     */
    sections?: Array<ScorecardSection> | null | undefined;
    /**
     * The update date of the scorecard
     */
    updatedAt?: Date | null | undefined;
};

/** @internal */
export const OverallRecommendation$ = z.nativeEnum(OverallRecommendation);

/** @internal */
export namespace Scorecard$ {
    export type Inbound = {
        application_id?: string | null | undefined;
        author_id?: string | null | undefined;
        candidate_id?: string | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        interview_id?: string | null | undefined;
        label?: string | null | undefined;
        overall_recommendation?: OverallRecommendation | null | undefined;
        remote_id?: string | null | undefined;
        sections?: Array<ScorecardSection$.Inbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<Scorecard, z.ZodTypeDef, Inbound> = z
        .object({
            application_id: z.nullable(z.string()).optional(),
            author_id: z.nullable(z.string()).optional(),
            candidate_id: z.nullable(z.string()).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            interview_id: z.nullable(z.string()).optional(),
            label: z.nullable(z.string()).optional(),
            overall_recommendation: z.nullable(OverallRecommendation$).optional(),
            remote_id: z.nullable(z.string()).optional(),
            sections: z.nullable(z.array(ScorecardSection$.inboundSchema)).optional(),
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
                ...(v.application_id === undefined ? null : { applicationId: v.application_id }),
                ...(v.author_id === undefined ? null : { authorId: v.author_id }),
                ...(v.candidate_id === undefined ? null : { candidateId: v.candidate_id }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interview_id === undefined ? null : { interviewId: v.interview_id }),
                ...(v.label === undefined ? null : { label: v.label }),
                ...(v.overall_recommendation === undefined
                    ? null
                    : { overallRecommendation: v.overall_recommendation }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.sections === undefined ? null : { sections: v.sections }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        application_id?: string | null | undefined;
        author_id?: string | null | undefined;
        candidate_id?: string | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        interview_id?: string | null | undefined;
        label?: string | null | undefined;
        overall_recommendation?: OverallRecommendation | null | undefined;
        remote_id?: string | null | undefined;
        sections?: Array<ScorecardSection$.Outbound> | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Scorecard> = z
        .object({
            applicationId: z.nullable(z.string()).optional(),
            authorId: z.nullable(z.string()).optional(),
            candidateId: z.nullable(z.string()).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            interviewId: z.nullable(z.string()).optional(),
            label: z.nullable(z.string()).optional(),
            overallRecommendation: z.nullable(OverallRecommendation$).optional(),
            remoteId: z.nullable(z.string()).optional(),
            sections: z.nullable(z.array(ScorecardSection$.outboundSchema)).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.applicationId === undefined ? null : { application_id: v.applicationId }),
                ...(v.authorId === undefined ? null : { author_id: v.authorId }),
                ...(v.candidateId === undefined ? null : { candidate_id: v.candidateId }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.interviewId === undefined ? null : { interview_id: v.interviewId }),
                ...(v.label === undefined ? null : { label: v.label }),
                ...(v.overallRecommendation === undefined
                    ? null
                    : { overall_recommendation: v.overallRecommendation }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.sections === undefined ? null : { sections: v.sections }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}