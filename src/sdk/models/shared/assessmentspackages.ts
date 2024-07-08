/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type AssessmentsPackages4 = {};

/**
 * The source value of the assessment type.
 */
export type AssessmentsPackagesSourceValue = AssessmentsPackages4 | string | number | boolean;

/**
 * The type of the assessment.
 */
export enum AssessmentsPackagesValue {
    VideoInterview = "video_interview",
    BehavioralAssessment = "behavioral_assessment",
    BackgroundCheck = "background_check",
    ReferenceCheck = "reference_check",
    SkillTest = "skill_test",
}
/**
 * The type of the assessment.
 */
export type AssessmentsPackagesValueOpen = OpenEnum<typeof AssessmentsPackagesValue>;

export type AssessmentsPackagesType = {
    /**
     * The source value of the assessment type.
     */
    sourceValue?: AssessmentsPackages4 | string | number | boolean | null | undefined;
    /**
     * The type of the assessment.
     */
    value?: AssessmentsPackagesValueOpen | null | undefined;
};

export type AssessmentsPackages = {
    /**
     * Assessment description
     */
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * Assessment name
     */
    name?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    type?: AssessmentsPackagesType | null | undefined;
};

/** @internal */
export namespace AssessmentsPackages4$ {
    export const inboundSchema: z.ZodType<AssessmentsPackages4, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssessmentsPackages4> = z.object(
        {}
    );
}

/** @internal */
export namespace AssessmentsPackagesSourceValue$ {
    export const inboundSchema: z.ZodType<AssessmentsPackagesSourceValue, z.ZodTypeDef, unknown> =
        z.union([
            z.lazy(() => AssessmentsPackages4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export type Outbound = AssessmentsPackages4$.Outbound | string | number | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssessmentsPackagesSourceValue> =
        z.union([
            z.lazy(() => AssessmentsPackages4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export namespace AssessmentsPackagesValue$ {
    export const inboundSchema: z.ZodType<AssessmentsPackagesValueOpen, z.ZodTypeDef, unknown> =
        z.union([
            z.nativeEnum(AssessmentsPackagesValue),
            z.string().transform(catchUnrecognizedEnum),
        ]);

    export const outboundSchema: z.ZodType<
        AssessmentsPackagesValueOpen,
        z.ZodTypeDef,
        AssessmentsPackagesValueOpen
    > = z.union([
        z.nativeEnum(AssessmentsPackagesValue),
        z.string().and(z.custom<Unrecognized<string>>()),
    ]);
}

/** @internal */
export namespace AssessmentsPackagesType$ {
    export const inboundSchema: z.ZodType<AssessmentsPackagesType, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => AssessmentsPackages4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AssessmentsPackagesValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                source_value: "sourceValue",
            });
        });

    export type Outbound = {
        source_value?:
            | AssessmentsPackages4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssessmentsPackagesType> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => AssessmentsPackages4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(AssessmentsPackagesValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                sourceValue: "source_value",
            });
        });
}

/** @internal */
export namespace AssessmentsPackages$ {
    export const inboundSchema: z.ZodType<AssessmentsPackages, z.ZodTypeDef, unknown> = z
        .object({
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => AssessmentsPackagesType$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_id: "remoteId",
            });
        });

    export type Outbound = {
        description?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        remote_id?: string | null | undefined;
        type?: AssessmentsPackagesType$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssessmentsPackages> = z
        .object({
            description: z.nullable(z.string()).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            type: z.nullable(z.lazy(() => AssessmentsPackagesType$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remoteId: "remote_id",
            });
        });
}