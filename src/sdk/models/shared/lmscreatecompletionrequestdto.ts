/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type LmsCreateCompletionRequestDto4 = {};

export type LmsCreateCompletionRequestDtoSourceValue =
    | LmsCreateCompletionRequestDto4
    | string
    | number
    | boolean;

export enum LmsCreateCompletionRequestDtoValue {
    Pass = "Pass",
    Fail = "Fail",
}
export type LmsCreateCompletionRequestDtoValueOpen = OpenEnum<
    typeof LmsCreateCompletionRequestDtoValue
>;

/**
 * The result of the completion
 */
export type LmsCreateCompletionRequestDtoResult = {
    sourceValue?: LmsCreateCompletionRequestDto4 | string | number | boolean | null | undefined;
    value?: LmsCreateCompletionRequestDtoValueOpen | null | undefined;
};

export type LmsCreateCompletionRequestDto = {
    /**
     * The date the content was completed
     */
    completedAt?: string | null | undefined;
    /**
     * The content ID associated with this completion
     */
    contentId?: string | null | undefined;
    /**
     * The external ID associated with this completion
     */
    externalId?: string | null | undefined;
    /**
     * Value to pass through to the provider
     */
    passthrough?: { [k: string]: any } | null | undefined;
    /**
     * The result of the completion
     */
    result?: LmsCreateCompletionRequestDtoResult | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDto4$inboundSchema: z.ZodType<
    LmsCreateCompletionRequestDto4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type LmsCreateCompletionRequestDto4$Outbound = {};

/** @internal */
export const LmsCreateCompletionRequestDto4$outboundSchema: z.ZodType<
    LmsCreateCompletionRequestDto4$Outbound,
    z.ZodTypeDef,
    LmsCreateCompletionRequestDto4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDto4$ {
    /** @deprecated use `LmsCreateCompletionRequestDto4$inboundSchema` instead. */
    export const inboundSchema = LmsCreateCompletionRequestDto4$inboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDto4$outboundSchema` instead. */
    export const outboundSchema = LmsCreateCompletionRequestDto4$outboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDto4$Outbound` instead. */
    export type Outbound = LmsCreateCompletionRequestDto4$Outbound;
}

/** @internal */
export const LmsCreateCompletionRequestDtoSourceValue$inboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => LmsCreateCompletionRequestDto4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type LmsCreateCompletionRequestDtoSourceValue$Outbound =
    | LmsCreateCompletionRequestDto4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const LmsCreateCompletionRequestDtoSourceValue$outboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoSourceValue$Outbound,
    z.ZodTypeDef,
    LmsCreateCompletionRequestDtoSourceValue
> = z.union([
    z.lazy(() => LmsCreateCompletionRequestDto4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDtoSourceValue$ {
    /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$inboundSchema` instead. */
    export const inboundSchema = LmsCreateCompletionRequestDtoSourceValue$inboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$outboundSchema` instead. */
    export const outboundSchema = LmsCreateCompletionRequestDtoSourceValue$outboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDtoSourceValue$Outbound` instead. */
    export type Outbound = LmsCreateCompletionRequestDtoSourceValue$Outbound;
}

/** @internal */
export const LmsCreateCompletionRequestDtoValue$inboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(LmsCreateCompletionRequestDtoValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const LmsCreateCompletionRequestDtoValue$outboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoValueOpen,
    z.ZodTypeDef,
    LmsCreateCompletionRequestDtoValueOpen
> = z.union([
    z.nativeEnum(LmsCreateCompletionRequestDtoValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDtoValue$ {
    /** @deprecated use `LmsCreateCompletionRequestDtoValue$inboundSchema` instead. */
    export const inboundSchema = LmsCreateCompletionRequestDtoValue$inboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDtoValue$outboundSchema` instead. */
    export const outboundSchema = LmsCreateCompletionRequestDtoValue$outboundSchema;
}

/** @internal */
export const LmsCreateCompletionRequestDtoResult$inboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoResult,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => LmsCreateCompletionRequestDto4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(LmsCreateCompletionRequestDtoValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type LmsCreateCompletionRequestDtoResult$Outbound = {
    source_value?:
        | LmsCreateCompletionRequestDto4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDtoResult$outboundSchema: z.ZodType<
    LmsCreateCompletionRequestDtoResult$Outbound,
    z.ZodTypeDef,
    LmsCreateCompletionRequestDtoResult
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => LmsCreateCompletionRequestDto4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(LmsCreateCompletionRequestDtoValue$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceValue: "source_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDtoResult$ {
    /** @deprecated use `LmsCreateCompletionRequestDtoResult$inboundSchema` instead. */
    export const inboundSchema = LmsCreateCompletionRequestDtoResult$inboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDtoResult$outboundSchema` instead. */
    export const outboundSchema = LmsCreateCompletionRequestDtoResult$outboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDtoResult$Outbound` instead. */
    export type Outbound = LmsCreateCompletionRequestDtoResult$Outbound;
}

/** @internal */
export const LmsCreateCompletionRequestDto$inboundSchema: z.ZodType<
    LmsCreateCompletionRequestDto,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        completed_at: z.nullable(z.string()).optional(),
        content_id: z.nullable(z.string()).optional(),
        external_id: z.nullable(z.string()).optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        result: z
            .nullable(z.lazy(() => LmsCreateCompletionRequestDtoResult$inboundSchema))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            completed_at: "completedAt",
            content_id: "contentId",
            external_id: "externalId",
        });
    });

/** @internal */
export type LmsCreateCompletionRequestDto$Outbound = {
    completed_at?: string | null | undefined;
    content_id?: string | null | undefined;
    external_id?: string | null | undefined;
    passthrough?: { [k: string]: any } | null | undefined;
    result?: LmsCreateCompletionRequestDtoResult$Outbound | null | undefined;
};

/** @internal */
export const LmsCreateCompletionRequestDto$outboundSchema: z.ZodType<
    LmsCreateCompletionRequestDto$Outbound,
    z.ZodTypeDef,
    LmsCreateCompletionRequestDto
> = z
    .object({
        completedAt: z.nullable(z.string()).optional(),
        contentId: z.nullable(z.string()).optional(),
        externalId: z.nullable(z.string()).optional(),
        passthrough: z.nullable(z.record(z.any())).optional(),
        result: z
            .nullable(z.lazy(() => LmsCreateCompletionRequestDtoResult$outboundSchema))
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            completedAt: "completed_at",
            contentId: "content_id",
            externalId: "external_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCompletionRequestDto$ {
    /** @deprecated use `LmsCreateCompletionRequestDto$inboundSchema` instead. */
    export const inboundSchema = LmsCreateCompletionRequestDto$inboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDto$outboundSchema` instead. */
    export const outboundSchema = LmsCreateCompletionRequestDto$outboundSchema;
    /** @deprecated use `LmsCreateCompletionRequestDto$Outbound` instead. */
    export type Outbound = LmsCreateCompletionRequestDto$Outbound;
}
