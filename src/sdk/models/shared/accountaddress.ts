/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type AccountAddressSchemas4 = {};

/**
 * The source value of the ISO 3166-1 alpha-2 code of the country.
 */
export type AccountAddressSchemasSourceValue = AccountAddressSchemas4 | string | number | boolean;

/**
 * The ISO 3166-1 alpha-2 code of the country.
 */
export enum AccountAddressSchemasValue {
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
}
/**
 * The ISO 3166-1 alpha-2 code of the country.
 */
export type AccountAddressSchemasValueOpen = OpenEnum<typeof AccountAddressSchemasValue>;

/**
 * The country code
 */
export type Country = {
    /**
     * The source value of the ISO 3166-1 alpha-2 code of the country.
     */
    sourceValue?: AccountAddressSchemas4 | string | number | boolean | null | undefined;
    /**
     * The ISO 3166-1 alpha-2 code of the country.
     */
    value?: AccountAddressSchemasValueOpen | null | undefined;
};

export type AccountAddress4 = {};

/**
 * The source value of the location type.
 */
export type AccountAddressSourceValue = AccountAddress4 | string | number | boolean;

/**
 * The type of the location.
 */
export enum AccountAddressValue {
    Home = "home",
    Work = "work",
    UnmappedValue = "unmapped_value",
}
/**
 * The type of the location.
 */
export type AccountAddressValueOpen = OpenEnum<typeof AccountAddressValue>;

/**
 * The location type
 */
export type LocationType = {
    /**
     * The source value of the location type.
     */
    sourceValue?: AccountAddress4 | string | number | boolean | null | undefined;
    /**
     * The type of the location.
     */
    value?: AccountAddressValueOpen | null | undefined;
};

export type AccountAddress = {
    city?: string | null | undefined;
    /**
     * The country code
     */
    country?: Country | null | undefined;
    /**
     * The location type
     */
    locationType?: LocationType | null | undefined;
    state?: string | null | undefined;
    street1?: string | null | undefined;
    street2?: string | null | undefined;
    zipCode?: string | null | undefined;
};

/** @internal */
export const AccountAddressSchemas4$inboundSchema: z.ZodType<
    AccountAddressSchemas4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type AccountAddressSchemas4$Outbound = {};

/** @internal */
export const AccountAddressSchemas4$outboundSchema: z.ZodType<
    AccountAddressSchemas4$Outbound,
    z.ZodTypeDef,
    AccountAddressSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressSchemas4$ {
    /** @deprecated use `AccountAddressSchemas4$inboundSchema` instead. */
    export const inboundSchema = AccountAddressSchemas4$inboundSchema;
    /** @deprecated use `AccountAddressSchemas4$outboundSchema` instead. */
    export const outboundSchema = AccountAddressSchemas4$outboundSchema;
    /** @deprecated use `AccountAddressSchemas4$Outbound` instead. */
    export type Outbound = AccountAddressSchemas4$Outbound;
}

/** @internal */
export const AccountAddressSchemasSourceValue$inboundSchema: z.ZodType<
    AccountAddressSchemasSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => AccountAddressSchemas4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type AccountAddressSchemasSourceValue$Outbound =
    | AccountAddressSchemas4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const AccountAddressSchemasSourceValue$outboundSchema: z.ZodType<
    AccountAddressSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    AccountAddressSchemasSourceValue
> = z.union([
    z.lazy(() => AccountAddressSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressSchemasSourceValue$ {
    /** @deprecated use `AccountAddressSchemasSourceValue$inboundSchema` instead. */
    export const inboundSchema = AccountAddressSchemasSourceValue$inboundSchema;
    /** @deprecated use `AccountAddressSchemasSourceValue$outboundSchema` instead. */
    export const outboundSchema = AccountAddressSchemasSourceValue$outboundSchema;
    /** @deprecated use `AccountAddressSchemasSourceValue$Outbound` instead. */
    export type Outbound = AccountAddressSchemasSourceValue$Outbound;
}

/** @internal */
export const AccountAddressSchemasValue$inboundSchema: z.ZodType<
    AccountAddressSchemasValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.nativeEnum(AccountAddressSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const AccountAddressSchemasValue$outboundSchema: z.ZodType<
    AccountAddressSchemasValueOpen,
    z.ZodTypeDef,
    AccountAddressSchemasValueOpen
> = z.union([
    z.nativeEnum(AccountAddressSchemasValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressSchemasValue$ {
    /** @deprecated use `AccountAddressSchemasValue$inboundSchema` instead. */
    export const inboundSchema = AccountAddressSchemasValue$inboundSchema;
    /** @deprecated use `AccountAddressSchemasValue$outboundSchema` instead. */
    export const outboundSchema = AccountAddressSchemasValue$outboundSchema;
}

/** @internal */
export const Country$inboundSchema: z.ZodType<Country, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => AccountAddressSchemas4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(AccountAddressSchemasValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type Country$Outbound = {
    source_value?: AccountAddressSchemas4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const Country$outboundSchema: z.ZodType<Country$Outbound, z.ZodTypeDef, Country> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => AccountAddressSchemas4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(AccountAddressSchemasValue$outboundSchema).optional(),
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
export namespace Country$ {
    /** @deprecated use `Country$inboundSchema` instead. */
    export const inboundSchema = Country$inboundSchema;
    /** @deprecated use `Country$outboundSchema` instead. */
    export const outboundSchema = Country$outboundSchema;
    /** @deprecated use `Country$Outbound` instead. */
    export type Outbound = Country$Outbound;
}

/** @internal */
export const AccountAddress4$inboundSchema: z.ZodType<AccountAddress4, z.ZodTypeDef, unknown> =
    z.object({});

/** @internal */
export type AccountAddress4$Outbound = {};

/** @internal */
export const AccountAddress4$outboundSchema: z.ZodType<
    AccountAddress4$Outbound,
    z.ZodTypeDef,
    AccountAddress4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddress4$ {
    /** @deprecated use `AccountAddress4$inboundSchema` instead. */
    export const inboundSchema = AccountAddress4$inboundSchema;
    /** @deprecated use `AccountAddress4$outboundSchema` instead. */
    export const outboundSchema = AccountAddress4$outboundSchema;
    /** @deprecated use `AccountAddress4$Outbound` instead. */
    export type Outbound = AccountAddress4$Outbound;
}

/** @internal */
export const AccountAddressSourceValue$inboundSchema: z.ZodType<
    AccountAddressSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => AccountAddress4$inboundSchema), z.string(), z.number(), z.boolean()]);

/** @internal */
export type AccountAddressSourceValue$Outbound =
    | AccountAddress4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const AccountAddressSourceValue$outboundSchema: z.ZodType<
    AccountAddressSourceValue$Outbound,
    z.ZodTypeDef,
    AccountAddressSourceValue
> = z.union([z.lazy(() => AccountAddress4$outboundSchema), z.string(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressSourceValue$ {
    /** @deprecated use `AccountAddressSourceValue$inboundSchema` instead. */
    export const inboundSchema = AccountAddressSourceValue$inboundSchema;
    /** @deprecated use `AccountAddressSourceValue$outboundSchema` instead. */
    export const outboundSchema = AccountAddressSourceValue$outboundSchema;
    /** @deprecated use `AccountAddressSourceValue$Outbound` instead. */
    export type Outbound = AccountAddressSourceValue$Outbound;
}

/** @internal */
export const AccountAddressValue$inboundSchema: z.ZodType<
    AccountAddressValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(AccountAddressValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const AccountAddressValue$outboundSchema: z.ZodType<
    AccountAddressValueOpen,
    z.ZodTypeDef,
    AccountAddressValueOpen
> = z.union([z.nativeEnum(AccountAddressValue), z.string().and(z.custom<Unrecognized<string>>())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddressValue$ {
    /** @deprecated use `AccountAddressValue$inboundSchema` instead. */
    export const inboundSchema = AccountAddressValue$inboundSchema;
    /** @deprecated use `AccountAddressValue$outboundSchema` instead. */
    export const outboundSchema = AccountAddressValue$outboundSchema;
}

/** @internal */
export const LocationType$inboundSchema: z.ZodType<LocationType, z.ZodTypeDef, unknown> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => AccountAddress4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(AccountAddressValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type LocationType$Outbound = {
    source_value?: AccountAddress4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const LocationType$outboundSchema: z.ZodType<
    LocationType$Outbound,
    z.ZodTypeDef,
    LocationType
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => AccountAddress4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(AccountAddressValue$outboundSchema).optional(),
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
export namespace LocationType$ {
    /** @deprecated use `LocationType$inboundSchema` instead. */
    export const inboundSchema = LocationType$inboundSchema;
    /** @deprecated use `LocationType$outboundSchema` instead. */
    export const outboundSchema = LocationType$outboundSchema;
    /** @deprecated use `LocationType$Outbound` instead. */
    export type Outbound = LocationType$Outbound;
}

/** @internal */
export const AccountAddress$inboundSchema: z.ZodType<AccountAddress, z.ZodTypeDef, unknown> = z
    .object({
        city: z.nullable(z.string()).optional(),
        country: z.nullable(z.lazy(() => Country$inboundSchema)).optional(),
        location_type: z.nullable(z.lazy(() => LocationType$inboundSchema)).optional(),
        state: z.nullable(z.string()).optional(),
        street_1: z.nullable(z.string()).optional(),
        street_2: z.nullable(z.string()).optional(),
        zip_code: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            location_type: "locationType",
            street_1: "street1",
            street_2: "street2",
            zip_code: "zipCode",
        });
    });

/** @internal */
export type AccountAddress$Outbound = {
    city?: string | null | undefined;
    country?: Country$Outbound | null | undefined;
    location_type?: LocationType$Outbound | null | undefined;
    state?: string | null | undefined;
    street_1?: string | null | undefined;
    street_2?: string | null | undefined;
    zip_code?: string | null | undefined;
};

/** @internal */
export const AccountAddress$outboundSchema: z.ZodType<
    AccountAddress$Outbound,
    z.ZodTypeDef,
    AccountAddress
> = z
    .object({
        city: z.nullable(z.string()).optional(),
        country: z.nullable(z.lazy(() => Country$outboundSchema)).optional(),
        locationType: z.nullable(z.lazy(() => LocationType$outboundSchema)).optional(),
        state: z.nullable(z.string()).optional(),
        street1: z.nullable(z.string()).optional(),
        street2: z.nullable(z.string()).optional(),
        zipCode: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            locationType: "location_type",
            street1: "street_1",
            street2: "street_2",
            zipCode: "zip_code",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountAddress$ {
    /** @deprecated use `AccountAddress$inboundSchema` instead. */
    export const inboundSchema = AccountAddress$inboundSchema;
    /** @deprecated use `AccountAddress$outboundSchema` instead. */
    export const outboundSchema = AccountAddress$outboundSchema;
    /** @deprecated use `AccountAddress$Outbound` instead. */
    export type Outbound = AccountAddress$Outbound;
}
