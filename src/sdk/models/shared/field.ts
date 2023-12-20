/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * The type of the field
 */
export enum FieldType {
    ShortText = "short_text",
    LongText = "long_text",
    MultiSelect = "multi_select",
    SingleSelect = "single_select",
    Boolean = "boolean",
    Number = "number",
    Date = "date",
    Phone = "phone",
    Email = "email",
    Score = "score",
    Location = "location",
    UnmappedValue = "unmapped_value",
}

export type Field = {
    /**
     * The ID of the field
     */
    id?: string | null | undefined;
    /**
     * The label of the field
     */
    label?: string | null | undefined;
    /**
     * Indicates if the field is required
     */
    required?: boolean | null | undefined;
    /**
     * The type of the field
     */
    type?: FieldType | null | undefined;
    /**
     * The possible values for the field
     */
    values?: Array<string> | null | undefined;
};

/** @internal */
export const FieldType$ = z.nativeEnum(FieldType);

/** @internal */
export namespace Field$ {
    export type Inbound = {
        id?: string | null | undefined;
        label?: string | null | undefined;
        required?: boolean | null | undefined;
        type?: FieldType | null | undefined;
        values?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<Field, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().nullable().optional(),
            label: z.string().nullable().optional(),
            required: z.boolean().nullable().optional(),
            type: FieldType$.nullable().optional(),
            values: z.array(z.string()).nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.label === undefined ? null : { label: v.label }),
                ...(v.required === undefined ? null : { required: v.required }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        label?: string | null | undefined;
        required?: boolean | null | undefined;
        type?: FieldType | null | undefined;
        values?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Field> = z
        .object({
            id: z.string().nullable().optional(),
            label: z.string().nullable().optional(),
            required: z.boolean().nullable().optional(),
            type: FieldType$.nullable().optional(),
            values: z.array(z.string()).nullable().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.label === undefined ? null : { label: v.label }),
                ...(v.required === undefined ? null : { required: v.required }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.values === undefined ? null : { values: v.values }),
            };
        });
}
