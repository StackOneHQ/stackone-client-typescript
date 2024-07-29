/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type CandidateCustomFields4 = {};

export type CandidateCustomFieldsOptions = CandidateCustomFields4 | string | number | boolean;

export type CandidateCustomFieldsSchemasType4 = {};

export type CandidateCustomFieldsSourceValue =
    | CandidateCustomFieldsSchemasType4
    | string
    | number
    | boolean;

export enum CandidateCustomFieldsSchemasValue {
    Date = "date",
    Float = "float",
    Integer = "integer",
    List = "list",
    Checkbox = "checkbox",
    Text = "text",
}
export type CandidateCustomFieldsSchemasValueOpen = OpenEnum<
    typeof CandidateCustomFieldsSchemasValue
>;

/**
 * The type of the custom field.
 */
export type CandidateCustomFieldsType = {
    sourceValue?: CandidateCustomFieldsSchemasType4 | string | number | boolean | null | undefined;
    value?: CandidateCustomFieldsSchemasValueOpen | null | undefined;
};

export type CandidateCustomFieldsSchemas4 = {};

/**
 * The value associated with the custom field.
 */
export type CandidateCustomFieldsValue = CandidateCustomFieldsSchemas4 | string | number | boolean;

export type CandidateCustomFields = {
    /**
     * The description of the custom field.
     */
    description?: string | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the custom field.
     */
    name?: string | null | undefined;
    /**
     * An array of possible options for the custom field.
     */
    options?: Array<CandidateCustomFields4 | string | number | boolean> | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * Provider's unique identifier for the value of the custom field.
     */
    remoteValueId?: string | null | undefined;
    /**
     * The type of the custom field.
     */
    type?: CandidateCustomFieldsType | null | undefined;
    /**
     * The value associated with the custom field.
     */
    value?: CandidateCustomFieldsSchemas4 | string | number | boolean | null | undefined;
    /**
     * The unique identifier for the value of the custom field.
     */
    valueId?: string | null | undefined;
};

/** @internal */
export const CandidateCustomFields4$inboundSchema: z.ZodType<
    CandidateCustomFields4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type CandidateCustomFields4$Outbound = {};

/** @internal */
export const CandidateCustomFields4$outboundSchema: z.ZodType<
    CandidateCustomFields4$Outbound,
    z.ZodTypeDef,
    CandidateCustomFields4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFields4$ {
    /** @deprecated use `CandidateCustomFields4$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFields4$inboundSchema;
    /** @deprecated use `CandidateCustomFields4$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFields4$outboundSchema;
    /** @deprecated use `CandidateCustomFields4$Outbound` instead. */
    export type Outbound = CandidateCustomFields4$Outbound;
}

/** @internal */
export const CandidateCustomFieldsOptions$inboundSchema: z.ZodType<
    CandidateCustomFieldsOptions,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CandidateCustomFields4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type CandidateCustomFieldsOptions$Outbound =
    | CandidateCustomFields4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const CandidateCustomFieldsOptions$outboundSchema: z.ZodType<
    CandidateCustomFieldsOptions$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsOptions
> = z.union([
    z.lazy(() => CandidateCustomFields4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsOptions$ {
    /** @deprecated use `CandidateCustomFieldsOptions$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsOptions$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsOptions$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsOptions$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsOptions$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsOptions$Outbound;
}

/** @internal */
export const CandidateCustomFieldsSchemasType4$inboundSchema: z.ZodType<
    CandidateCustomFieldsSchemasType4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type CandidateCustomFieldsSchemasType4$Outbound = {};

/** @internal */
export const CandidateCustomFieldsSchemasType4$outboundSchema: z.ZodType<
    CandidateCustomFieldsSchemasType4$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsSchemasType4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsSchemasType4$ {
    /** @deprecated use `CandidateCustomFieldsSchemasType4$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsSchemasType4$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsSchemasType4$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsSchemasType4$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsSchemasType4$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsSchemasType4$Outbound;
}

/** @internal */
export const CandidateCustomFieldsSourceValue$inboundSchema: z.ZodType<
    CandidateCustomFieldsSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CandidateCustomFieldsSchemasType4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type CandidateCustomFieldsSourceValue$Outbound =
    | CandidateCustomFieldsSchemasType4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const CandidateCustomFieldsSourceValue$outboundSchema: z.ZodType<
    CandidateCustomFieldsSourceValue$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsSourceValue
> = z.union([
    z.lazy(() => CandidateCustomFieldsSchemasType4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsSourceValue$ {
    /** @deprecated use `CandidateCustomFieldsSourceValue$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsSourceValue$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsSourceValue$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsSourceValue$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsSourceValue$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsSourceValue$Outbound;
}

/** @internal */
export const CandidateCustomFieldsSchemasValue$inboundSchema: z.ZodType<
    CandidateCustomFieldsSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(CandidateCustomFieldsSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const CandidateCustomFieldsSchemasValue$outboundSchema: z.ZodType<
    CandidateCustomFieldsSchemasValueOpen,
    z.ZodTypeDef,
    CandidateCustomFieldsSchemasValueOpen
> = z.union([
    z.nativeEnum(CandidateCustomFieldsSchemasValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsSchemasValue$ {
    /** @deprecated use `CandidateCustomFieldsSchemasValue$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsSchemasValue$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsSchemasValue$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsSchemasValue$outboundSchema;
}

/** @internal */
export const CandidateCustomFieldsType$inboundSchema: z.ZodType<
    CandidateCustomFieldsType,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => CandidateCustomFieldsSchemasType4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(CandidateCustomFieldsSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type CandidateCustomFieldsType$Outbound = {
    source_value?:
        | CandidateCustomFieldsSchemasType4$Outbound
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const CandidateCustomFieldsType$outboundSchema: z.ZodType<
    CandidateCustomFieldsType$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => CandidateCustomFieldsSchemasType4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(CandidateCustomFieldsSchemasValue$outboundSchema).optional(),
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
export namespace CandidateCustomFieldsType$ {
    /** @deprecated use `CandidateCustomFieldsType$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsType$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsType$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsType$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsType$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsType$Outbound;
}

/** @internal */
export const CandidateCustomFieldsSchemas4$inboundSchema: z.ZodType<
    CandidateCustomFieldsSchemas4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type CandidateCustomFieldsSchemas4$Outbound = {};

/** @internal */
export const CandidateCustomFieldsSchemas4$outboundSchema: z.ZodType<
    CandidateCustomFieldsSchemas4$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsSchemas4$ {
    /** @deprecated use `CandidateCustomFieldsSchemas4$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsSchemas4$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsSchemas4$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsSchemas4$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsSchemas4$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsSchemas4$Outbound;
}

/** @internal */
export const CandidateCustomFieldsValue$inboundSchema: z.ZodType<
    CandidateCustomFieldsValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => CandidateCustomFieldsSchemas4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type CandidateCustomFieldsValue$Outbound =
    | CandidateCustomFieldsSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const CandidateCustomFieldsValue$outboundSchema: z.ZodType<
    CandidateCustomFieldsValue$Outbound,
    z.ZodTypeDef,
    CandidateCustomFieldsValue
> = z.union([
    z.lazy(() => CandidateCustomFieldsSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFieldsValue$ {
    /** @deprecated use `CandidateCustomFieldsValue$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFieldsValue$inboundSchema;
    /** @deprecated use `CandidateCustomFieldsValue$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFieldsValue$outboundSchema;
    /** @deprecated use `CandidateCustomFieldsValue$Outbound` instead. */
    export type Outbound = CandidateCustomFieldsValue$Outbound;
}

/** @internal */
export const CandidateCustomFields$inboundSchema: z.ZodType<
    CandidateCustomFields,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        description: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        options: z
            .nullable(
                z.array(
                    z.union([
                        z.lazy(() => CandidateCustomFields4$inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
            )
            .optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_value_id: z.nullable(z.string()).optional(),
        type: z.nullable(z.lazy(() => CandidateCustomFieldsType$inboundSchema)).optional(),
        value: z
            .nullable(
                z.union([
                    z.lazy(() => CandidateCustomFieldsSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remote_id: "remoteId",
            remote_value_id: "remoteValueId",
            value_id: "valueId",
        });
    });

/** @internal */
export type CandidateCustomFields$Outbound = {
    description?: string | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    options?: Array<CandidateCustomFields4$Outbound | string | number | boolean> | null | undefined;
    remote_id?: string | null | undefined;
    remote_value_id?: string | null | undefined;
    type?: CandidateCustomFieldsType$Outbound | null | undefined;
    value?: CandidateCustomFieldsSchemas4$Outbound | string | number | boolean | null | undefined;
    value_id?: string | null | undefined;
};

/** @internal */
export const CandidateCustomFields$outboundSchema: z.ZodType<
    CandidateCustomFields$Outbound,
    z.ZodTypeDef,
    CandidateCustomFields
> = z
    .object({
        description: z.nullable(z.string()).optional(),
        id: z.nullable(z.string()).optional(),
        name: z.nullable(z.string()).optional(),
        options: z
            .nullable(
                z.array(
                    z.union([
                        z.lazy(() => CandidateCustomFields4$outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
            )
            .optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteValueId: z.nullable(z.string()).optional(),
        type: z.nullable(z.lazy(() => CandidateCustomFieldsType$outboundSchema)).optional(),
        value: z
            .nullable(
                z.union([
                    z.lazy(() => CandidateCustomFieldsSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        valueId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            remoteId: "remote_id",
            remoteValueId: "remote_value_id",
            valueId: "value_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CandidateCustomFields$ {
    /** @deprecated use `CandidateCustomFields$inboundSchema` instead. */
    export const inboundSchema = CandidateCustomFields$inboundSchema;
    /** @deprecated use `CandidateCustomFields$outboundSchema` instead. */
    export const outboundSchema = CandidateCustomFields$outboundSchema;
    /** @deprecated use `CandidateCustomFields$Outbound` instead. */
    export type Outbound = CandidateCustomFields$Outbound;
}
