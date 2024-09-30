/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export type IamMfaTypeEnum4 = {};

export type IamMfaTypeEnumSourceValue =
  | IamMfaTypeEnum4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The unified value for the type of multi-factor authentication. If the provider does not send back a type but does specify that MFA is set-up for this user, the value will be set to 'unknown'.'
 */
export enum IamMfaTypeEnumValue {
  Sms = "sms",
  Email = "email",
  Push = "push",
  Totp = "totp",
  PhoneCall = "phone_call",
  Question = "question",
  SoftwareToken = "software_token",
  HardwareToken = "hardware_token",
  Web = "web",
  Unknown = "unknown",
  UnmappedValue = "unmapped_value",
}
/**
 * The unified value for the type of multi-factor authentication. If the provider does not send back a type but does specify that MFA is set-up for this user, the value will be set to 'unknown'.'
 */
export type IamMfaTypeEnumValueOpen = OpenEnum<typeof IamMfaTypeEnumValue>;

export type IamMfaTypeEnum = {
  sourceValue?:
    | IamMfaTypeEnum4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The unified value for the type of multi-factor authentication. If the provider does not send back a type but does specify that MFA is set-up for this user, the value will be set to 'unknown'.'
   */
  value?: IamMfaTypeEnumValueOpen | null | undefined;
};

/** @internal */
export const IamMfaTypeEnum4$inboundSchema: z.ZodType<
  IamMfaTypeEnum4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type IamMfaTypeEnum4$Outbound = {};

/** @internal */
export const IamMfaTypeEnum4$outboundSchema: z.ZodType<
  IamMfaTypeEnum4$Outbound,
  z.ZodTypeDef,
  IamMfaTypeEnum4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamMfaTypeEnum4$ {
  /** @deprecated use `IamMfaTypeEnum4$inboundSchema` instead. */
  export const inboundSchema = IamMfaTypeEnum4$inboundSchema;
  /** @deprecated use `IamMfaTypeEnum4$outboundSchema` instead. */
  export const outboundSchema = IamMfaTypeEnum4$outboundSchema;
  /** @deprecated use `IamMfaTypeEnum4$Outbound` instead. */
  export type Outbound = IamMfaTypeEnum4$Outbound;
}

/** @internal */
export const IamMfaTypeEnumSourceValue$inboundSchema: z.ZodType<
  IamMfaTypeEnumSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => IamMfaTypeEnum4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type IamMfaTypeEnumSourceValue$Outbound =
  | IamMfaTypeEnum4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const IamMfaTypeEnumSourceValue$outboundSchema: z.ZodType<
  IamMfaTypeEnumSourceValue$Outbound,
  z.ZodTypeDef,
  IamMfaTypeEnumSourceValue
> = z.union([
  z.lazy(() => IamMfaTypeEnum4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamMfaTypeEnumSourceValue$ {
  /** @deprecated use `IamMfaTypeEnumSourceValue$inboundSchema` instead. */
  export const inboundSchema = IamMfaTypeEnumSourceValue$inboundSchema;
  /** @deprecated use `IamMfaTypeEnumSourceValue$outboundSchema` instead. */
  export const outboundSchema = IamMfaTypeEnumSourceValue$outboundSchema;
  /** @deprecated use `IamMfaTypeEnumSourceValue$Outbound` instead. */
  export type Outbound = IamMfaTypeEnumSourceValue$Outbound;
}

/** @internal */
export const IamMfaTypeEnumValue$inboundSchema: z.ZodType<
  IamMfaTypeEnumValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(IamMfaTypeEnumValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const IamMfaTypeEnumValue$outboundSchema: z.ZodType<
  IamMfaTypeEnumValueOpen,
  z.ZodTypeDef,
  IamMfaTypeEnumValueOpen
> = z.union([
  z.nativeEnum(IamMfaTypeEnumValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamMfaTypeEnumValue$ {
  /** @deprecated use `IamMfaTypeEnumValue$inboundSchema` instead. */
  export const inboundSchema = IamMfaTypeEnumValue$inboundSchema;
  /** @deprecated use `IamMfaTypeEnumValue$outboundSchema` instead. */
  export const outboundSchema = IamMfaTypeEnumValue$outboundSchema;
}

/** @internal */
export const IamMfaTypeEnum$inboundSchema: z.ZodType<
  IamMfaTypeEnum,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => IamMfaTypeEnum4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamMfaTypeEnumValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type IamMfaTypeEnum$Outbound = {
  source_value?:
    | IamMfaTypeEnum4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const IamMfaTypeEnum$outboundSchema: z.ZodType<
  IamMfaTypeEnum$Outbound,
  z.ZodTypeDef,
  IamMfaTypeEnum
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => IamMfaTypeEnum4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(IamMfaTypeEnumValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamMfaTypeEnum$ {
  /** @deprecated use `IamMfaTypeEnum$inboundSchema` instead. */
  export const inboundSchema = IamMfaTypeEnum$inboundSchema;
  /** @deprecated use `IamMfaTypeEnum$outboundSchema` instead. */
  export const outboundSchema = IamMfaTypeEnum$outboundSchema;
  /** @deprecated use `IamMfaTypeEnum$Outbound` instead. */
  export type Outbound = IamMfaTypeEnum$Outbound;
}
