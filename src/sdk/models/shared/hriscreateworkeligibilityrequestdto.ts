/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Content, Content$ } from "./content";
import * as z from "zod";

export type HrisCreateWorkEligibilityRequestDtoSchemasDocument4 = {};

export type HrisCreateWorkEligibilityRequestDtoSchemasSourceValue =
    | HrisCreateWorkEligibilityRequestDtoSchemasDocument4
    | string
    | number
    | boolean;

/**
 * The category of the file
 */
export type HrisCreateWorkEligibilityRequestDtoCategory = {
    sourceValue?:
        | HrisCreateWorkEligibilityRequestDtoSchemasDocument4
        | string
        | number
        | boolean
        | null
        | undefined;
    /**
     * The category of the file
     */
    value?: string | null | undefined;
};

export type Document = {
    /**
     * The category of the file
     */
    category?: HrisCreateWorkEligibilityRequestDtoCategory | null | undefined;
    /**
     * The content of the file
     */
    contents?: Array<Content> | null | undefined;
    /**
     * The creation date of the file
     */
    createdAt?: Date | null | undefined;
    /**
     * Unique identifier
     */
    id?: string | null | undefined;
    /**
     * The name of the file
     */
    name?: string | null | undefined;
    /**
     * The path where the file is stored
     */
    path?: string | null | undefined;
    /**
     * Provider's unique identifier
     */
    remoteId?: string | null | undefined;
    /**
     * The update date of the file
     */
    updatedAt?: Date | null | undefined;
};

export type HrisCreateWorkEligibilityRequestDto4 = {};

export type HrisCreateWorkEligibilityRequestDtoSourceValue =
    | HrisCreateWorkEligibilityRequestDto4
    | string
    | number
    | boolean;

/**
 * The ISO3166-1 Alpha2 Code of the Country
 */
export enum HrisCreateWorkEligibilityRequestDtoValue {
    Af = "AF",
    Al = "AL",
    Dz = "DZ",
    As = "AS",
    Ad = "AD",
    Ao = "AO",
    Ai = "AI",
    Aq = "AQ",
    Ag = "AG",
    Ar = "AR",
    Am = "AM",
    Aw = "AW",
    Au = "AU",
    At = "AT",
    Az = "AZ",
    Bs = "BS",
    Bh = "BH",
    Bd = "BD",
    Bb = "BB",
    By = "BY",
    Be = "BE",
    Bz = "BZ",
    Bj = "BJ",
    Bm = "BM",
    Bt = "BT",
    Bo = "BO",
    Bq = "BQ",
    Ba = "BA",
    Bw = "BW",
    Bv = "BV",
    Br = "BR",
    Io = "IO",
    Bn = "BN",
    Bg = "BG",
    Bf = "BF",
    Bi = "BI",
    Kh = "KH",
    Cm = "CM",
    Ca = "CA",
    Cv = "CV",
    Ky = "KY",
    Cf = "CF",
    Td = "TD",
    Cl = "CL",
    Cn = "CN",
    Cx = "CX",
    Cc = "CC",
    Co = "CO",
    Km = "KM",
    Cg = "CG",
    Cd = "CD",
    Ck = "CK",
    Cr = "CR",
    Hr = "HR",
    Cu = "CU",
    Cw = "CW",
    Cy = "CY",
    Cz = "CZ",
    Ci = "CI",
    Dk = "DK",
    Dj = "DJ",
    Dm = "DM",
    Do = "DO",
    Ec = "EC",
    Eg = "EG",
    Sv = "SV",
    Gq = "GQ",
    Er = "ER",
    Ee = "EE",
    Et = "ET",
    Fk = "FK",
    Fo = "FO",
    Fj = "FJ",
    Fi = "FI",
    Fr = "FR",
    Gf = "GF",
    Pf = "PF",
    Tf = "TF",
    Ga = "GA",
    Gm = "GM",
    Ge = "GE",
    De = "DE",
    Gh = "GH",
    Gi = "GI",
    Gr = "GR",
    Gl = "GL",
    Gd = "GD",
    Gp = "GP",
    Gu = "GU",
    Gt = "GT",
    Gg = "GG",
    Gn = "GN",
    Gw = "GW",
    Gy = "GY",
    Ht = "HT",
    Hm = "HM",
    Va = "VA",
    Hn = "HN",
    Hk = "HK",
    Hu = "HU",
    Is = "IS",
    In = "IN",
    Id = "ID",
    Ir = "IR",
    Iq = "IQ",
    Ie = "IE",
    Im = "IM",
    Il = "IL",
    It = "IT",
    Jm = "JM",
    Jp = "JP",
    Je = "JE",
    Jo = "JO",
    Kz = "KZ",
    Ke = "KE",
    Ki = "KI",
    Kp = "KP",
    Kr = "KR",
    Kw = "KW",
    Kg = "KG",
    La = "LA",
    Lv = "LV",
    Lb = "LB",
    Ls = "LS",
    Lr = "LR",
    Ly = "LY",
    Li = "LI",
    Lt = "LT",
    Lu = "LU",
    Mo = "MO",
    Mk = "MK",
    Mg = "MG",
    Mw = "MW",
    My = "MY",
    Mv = "MV",
    Ml = "ML",
    Mt = "MT",
    Mh = "MH",
    Mq = "MQ",
    Mr = "MR",
    Mu = "MU",
    Yt = "YT",
    Mx = "MX",
    Fm = "FM",
    Md = "MD",
    Mc = "MC",
    Mn = "MN",
    Me = "ME",
    Ms = "MS",
    Ma = "MA",
    Mz = "MZ",
    Mm = "MM",
    Na = "NA",
    Nr = "NR",
    Np = "NP",
    Nl = "NL",
    Nc = "NC",
    Nz = "NZ",
    Ni = "NI",
    Ne = "NE",
    Ng = "NG",
    Nu = "NU",
    Nf = "NF",
    Mp = "MP",
    No = "NO",
    Om = "OM",
    Pk = "PK",
    Pw = "PW",
    Ps = "PS",
    Pa = "PA",
    Pg = "PG",
    Py = "PY",
    Pe = "PE",
    Ph = "PH",
    Pn = "PN",
    Pl = "PL",
    Pt = "PT",
    Pr = "PR",
    Qa = "QA",
    Ro = "RO",
    Ru = "RU",
    Rw = "RW",
    Re = "RE",
    Bl = "BL",
    Sh = "SH",
    Kn = "KN",
    Lc = "LC",
    Mf = "MF",
    Pm = "PM",
    Vc = "VC",
    Ws = "WS",
    Sm = "SM",
    St = "ST",
    Sa = "SA",
    Sn = "SN",
    Rs = "RS",
    Sc = "SC",
    Sl = "SL",
    Sg = "SG",
    Sx = "SX",
    Sk = "SK",
    Si = "SI",
    Sb = "SB",
    So = "SO",
    Za = "ZA",
    Gs = "GS",
    Ss = "SS",
    Es = "ES",
    Lk = "LK",
    Sd = "SD",
    Sr = "SR",
    Sj = "SJ",
    Sz = "SZ",
    Se = "SE",
    Ch = "CH",
    Sy = "SY",
    Tw = "TW",
    Tj = "TJ",
    Tz = "TZ",
    Th = "TH",
    Tl = "TL",
    Tg = "TG",
    Tk = "TK",
    To = "TO",
    Tt = "TT",
    Tn = "TN",
    Tr = "TR",
    Tm = "TM",
    Tc = "TC",
    Tv = "TV",
    Ug = "UG",
    Ua = "UA",
    Ae = "AE",
    Gb = "GB",
    Us = "US",
    Um = "UM",
    Uy = "UY",
    Uz = "UZ",
    Vu = "VU",
    Ve = "VE",
    Vn = "VN",
    Vg = "VG",
    Vi = "VI",
    Wf = "WF",
    Eh = "EH",
    Ye = "YE",
    Zm = "ZM",
    Zw = "ZW",
    UnmappedValue = "unmapped_value",
}

/**
 * The country code of the issued by authority
 */
export type IssuedBy = {
    sourceValue?:
        | HrisCreateWorkEligibilityRequestDto4
        | string
        | number
        | boolean
        | null
        | undefined;
    /**
     * The ISO3166-1 Alpha2 Code of the Country
     */
    value?: HrisCreateWorkEligibilityRequestDtoValue | null | undefined;
};

export type HrisCreateWorkEligibilityRequestDtoSchemas4 = {};

export type SourceType = HrisCreateWorkEligibilityRequestDtoSchemas4 | string | number | boolean;

export enum HrisCreateWorkEligibilityRequestDtoSchemasValue {
    Visa = "visa",
    Passport = "passport",
    DriverLicense = "driver_license",
    BirthCertificate = "birth_certificate",
    Other = "other",
}

export type HrisCreateWorkEligibilityRequestDtoType = {
    sourceType?:
        | HrisCreateWorkEligibilityRequestDtoSchemas4
        | string
        | number
        | boolean
        | null
        | undefined;
    value?: HrisCreateWorkEligibilityRequestDtoSchemasValue | null | undefined;
};

export type HrisCreateWorkEligibilityRequestDto = {
    document?: Document | null | undefined;
    /**
     * The country code of the issued by authority
     */
    issuedBy?: IssuedBy | null | undefined;
    number?: string | null | undefined;
    subType?: string | null | undefined;
    type?: HrisCreateWorkEligibilityRequestDtoType | null | undefined;
    validFrom?: Date | null | undefined;
    validTo?: Date | null | undefined;
};

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoSchemasDocument4$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoSchemasDocument4,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoSchemasDocument4
    > = z.object({});
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoSchemasSourceValue$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoSchemasSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound =
        | HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.Outbound
        | string
        | number
        | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoSchemasSourceValue
    > = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoCategory$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoCategory,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(
                            () => HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.inboundSchema
                        ),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoCategory
    > = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(
                            () =>
                                HrisCreateWorkEligibilityRequestDtoSchemasDocument4$.outboundSchema
                        ),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace Document$ {
    export const inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown> = z
        .object({
            category: z
                .nullable(z.lazy(() => HrisCreateWorkEligibilityRequestDtoCategory$.inboundSchema))
                .optional(),
            contents: z.nullable(z.array(Content$.inboundSchema)).optional(),
            created_at: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            path: z.nullable(z.string()).optional(),
            remote_id: z.nullable(z.string()).optional(),
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
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.remote_id === undefined ? null : { remoteId: v.remote_id }),
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
            };
        });

    export type Outbound = {
        category?: HrisCreateWorkEligibilityRequestDtoCategory$.Outbound | null | undefined;
        contents?: Array<Content$.Outbound> | null | undefined;
        created_at?: string | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        path?: string | null | undefined;
        remote_id?: string | null | undefined;
        updated_at?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Document> = z
        .object({
            category: z
                .nullable(z.lazy(() => HrisCreateWorkEligibilityRequestDtoCategory$.outboundSchema))
                .optional(),
            contents: z.nullable(z.array(Content$.outboundSchema)).optional(),
            createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            id: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            path: z.nullable(z.string()).optional(),
            remoteId: z.nullable(z.string()).optional(),
            updatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.category === undefined ? null : { category: v.category }),
                ...(v.contents === undefined ? null : { contents: v.contents }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.path === undefined ? null : { path: v.path }),
                ...(v.remoteId === undefined ? null : { remote_id: v.remoteId }),
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDto4$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDto4,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDto4
    > = z.object({});
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoSourceValue$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoSourceValue,
        z.ZodTypeDef,
        unknown
    > = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDto4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound =
        | HrisCreateWorkEligibilityRequestDto4$.Outbound
        | string
        | number
        | boolean;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoSourceValue
    > = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDto4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoValue$ {
    export const inboundSchema = z.nativeEnum(HrisCreateWorkEligibilityRequestDtoValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace IssuedBy$ {
    export const inboundSchema: z.ZodType<IssuedBy, z.ZodTypeDef, unknown> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateWorkEligibilityRequestDto4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateWorkEligibilityRequestDtoValue$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?:
            | HrisCreateWorkEligibilityRequestDto4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, IssuedBy> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateWorkEligibilityRequestDto4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(HrisCreateWorkEligibilityRequestDtoValue$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoSchemas4$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoSchemas4,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoSchemas4
    > = z.object({});
}

/** @internal */
export namespace SourceType$ {
    export const inboundSchema: z.ZodType<SourceType, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemas4$.inboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);

    export type Outbound =
        | HrisCreateWorkEligibilityRequestDtoSchemas4$.Outbound
        | string
        | number
        | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SourceType> = z.union([
        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemas4$.outboundSchema),
        z.string(),
        z.number(),
        z.boolean(),
    ]);
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoSchemasValue$ {
    export const inboundSchema = z.nativeEnum(HrisCreateWorkEligibilityRequestDtoSchemasValue);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDtoType$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDtoType,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            source_type: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemas4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z
                .nullable(HrisCreateWorkEligibilityRequestDtoSchemasValue$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_type === undefined ? null : { sourceType: v.source_type }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_type?:
            | HrisCreateWorkEligibilityRequestDtoSchemas4$.Outbound
            | string
            | number
            | boolean
            | null
            | undefined;
        value?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDtoType
    > = z
        .object({
            sourceType: z
                .nullable(
                    z.union([
                        z.lazy(() => HrisCreateWorkEligibilityRequestDtoSchemas4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z
                .nullable(HrisCreateWorkEligibilityRequestDtoSchemasValue$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceType === undefined ? null : { source_type: v.sourceType }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace HrisCreateWorkEligibilityRequestDto$ {
    export const inboundSchema: z.ZodType<
        HrisCreateWorkEligibilityRequestDto,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            document: z.nullable(z.lazy(() => Document$.inboundSchema)).optional(),
            issued_by: z.nullable(z.lazy(() => IssuedBy$.inboundSchema)).optional(),
            number: z.nullable(z.string()).optional(),
            sub_type: z.nullable(z.string()).optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateWorkEligibilityRequestDtoType$.inboundSchema))
                .optional(),
            valid_from: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            valid_to: z
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
                ...(v.document === undefined ? null : { document: v.document }),
                ...(v.issued_by === undefined ? null : { issuedBy: v.issued_by }),
                ...(v.number === undefined ? null : { number: v.number }),
                ...(v.sub_type === undefined ? null : { subType: v.sub_type }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.valid_from === undefined ? null : { validFrom: v.valid_from }),
                ...(v.valid_to === undefined ? null : { validTo: v.valid_to }),
            };
        });

    export type Outbound = {
        document?: Document$.Outbound | null | undefined;
        issued_by?: IssuedBy$.Outbound | null | undefined;
        number?: string | null | undefined;
        sub_type?: string | null | undefined;
        type?: HrisCreateWorkEligibilityRequestDtoType$.Outbound | null | undefined;
        valid_from?: string | null | undefined;
        valid_to?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        HrisCreateWorkEligibilityRequestDto
    > = z
        .object({
            document: z.nullable(z.lazy(() => Document$.outboundSchema)).optional(),
            issuedBy: z.nullable(z.lazy(() => IssuedBy$.outboundSchema)).optional(),
            number: z.nullable(z.string()).optional(),
            subType: z.nullable(z.string()).optional(),
            type: z
                .nullable(z.lazy(() => HrisCreateWorkEligibilityRequestDtoType$.outboundSchema))
                .optional(),
            validFrom: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            validTo: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.document === undefined ? null : { document: v.document }),
                ...(v.issuedBy === undefined ? null : { issued_by: v.issuedBy }),
                ...(v.number === undefined ? null : { number: v.number }),
                ...(v.subType === undefined ? null : { sub_type: v.subType }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.validFrom === undefined ? null : { valid_from: v.validFrom }),
                ...(v.validTo === undefined ? null : { valid_to: v.validTo }),
            };
        });
}
