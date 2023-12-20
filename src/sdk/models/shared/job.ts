/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HiringTeam, HiringTeam$ } from "./hiringteam";
import { JobStatusEnum, JobStatusEnum$ } from "./jobstatusenum";
import { z } from "zod";

export enum Confidential {
    True = "true",
    False = "false",
}

export type Job = {
    code: string;
    companyId: string;
    confidential?: Confidential | null | undefined;
    /**
     * Date of creation
     */
    createdAt: Date;
    departmentIds: Array<string>;
    hiringTeam?: Array<HiringTeam> | null | undefined;
    id: string;
    jobStatus: JobStatusEnum;
    locationIds: Array<string>;
    title: string;
    /**
     * Date of last update
     */
    updatedAt: Date;
};

/** @internal */
export const Confidential$ = z.nativeEnum(Confidential);

/** @internal */
export namespace Job$ {
    export type Inbound = {
        code: string;
        company_id: string;
        confidential?: Confidential | null | undefined;
        created_at: string;
        department_ids: Array<string>;
        hiring_team?: Array<HiringTeam$.Inbound> | null | undefined;
        id: string;
        job_status: JobStatusEnum$.Inbound;
        location_ids: Array<string>;
        title: string;
        updated_at: string;
    };

    export const inboundSchema: z.ZodType<Job, z.ZodTypeDef, Inbound> = z
        .object({
            code: z.string(),
            company_id: z.string(),
            confidential: Confidential$.nullable().optional(),
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            department_ids: z.array(z.string()),
            hiring_team: z.array(HiringTeam$.inboundSchema).nullable().optional(),
            id: z.string(),
            job_status: JobStatusEnum$.inboundSchema,
            location_ids: z.array(z.string()),
            title: z.string(),
            updated_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                code: v.code,
                companyId: v.company_id,
                ...(v.confidential === undefined ? null : { confidential: v.confidential }),
                createdAt: v.created_at,
                departmentIds: v.department_ids,
                ...(v.hiring_team === undefined ? null : { hiringTeam: v.hiring_team }),
                id: v.id,
                jobStatus: v.job_status,
                locationIds: v.location_ids,
                title: v.title,
                updatedAt: v.updated_at,
            };
        });

    export type Outbound = {
        code: string;
        company_id: string;
        confidential?: Confidential | null | undefined;
        created_at: string;
        department_ids: Array<string>;
        hiring_team?: Array<HiringTeam$.Outbound> | null | undefined;
        id: string;
        job_status: JobStatusEnum$.Outbound;
        location_ids: Array<string>;
        title: string;
        updated_at: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Job> = z
        .object({
            code: z.string(),
            companyId: z.string(),
            confidential: Confidential$.nullable().optional(),
            createdAt: z.date().transform((v) => v.toISOString()),
            departmentIds: z.array(z.string()),
            hiringTeam: z.array(HiringTeam$.outboundSchema).nullable().optional(),
            id: z.string(),
            jobStatus: JobStatusEnum$.outboundSchema,
            locationIds: z.array(z.string()),
            title: z.string(),
            updatedAt: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                code: v.code,
                company_id: v.companyId,
                ...(v.confidential === undefined ? null : { confidential: v.confidential }),
                created_at: v.createdAt,
                department_ids: v.departmentIds,
                ...(v.hiringTeam === undefined ? null : { hiring_team: v.hiringTeam }),
                id: v.id,
                job_status: v.jobStatus,
                location_ids: v.locationIds,
                title: v.title,
                updated_at: v.updatedAt,
            };
        });
}
