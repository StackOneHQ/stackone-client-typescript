/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CountryCodeEnum4 = {};

export type CountryCodeEnumSourceValue = CountryCodeEnum4 | string | number | boolean;

/**
 * The ISO3166-1 Alpha2 Code of the Country
 */
export enum CountryCodeEnumValue {
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

export type CountryCodeEnum = {
    sourceValue?: CountryCodeEnum4 | string | number | boolean | null | undefined;
    /**
     * The ISO3166-1 Alpha2 Code of the Country
     */
    value?: CountryCodeEnumValue | null | undefined;
};

/** @internal */
export namespace CountryCodeEnum4$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<CountryCodeEnum4, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CountryCodeEnum4> = z.object({});
}

/** @internal */
export namespace CountryCodeEnumSourceValue$ {
    export type Inbound = CountryCodeEnum4$.Inbound | string | number | boolean;

    export type Outbound = CountryCodeEnum4$.Outbound | string | number | boolean;

    export const inboundSchema: z.ZodType<CountryCodeEnumSourceValue, z.ZodTypeDef, Inbound> =
        z.union([
            z.lazy(() => CountryCodeEnum4$.inboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CountryCodeEnumSourceValue> =
        z.union([
            z.lazy(() => CountryCodeEnum4$.outboundSchema),
            z.string(),
            z.number(),
            z.boolean(),
        ]);
}

/** @internal */
export const CountryCodeEnumValue$ = z.nativeEnum(CountryCodeEnumValue);

/** @internal */
export namespace CountryCodeEnum$ {
    export type Inbound = {
        source_value?: CountryCodeEnum4$.Inbound | string | number | boolean | null | undefined;
        value?: CountryCodeEnumValue | null | undefined;
    };

    export const inboundSchema: z.ZodType<CountryCodeEnum, z.ZodTypeDef, Inbound> = z
        .object({
            source_value: z
                .nullable(
                    z.union([
                        z.lazy(() => CountryCodeEnum4$.inboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CountryCodeEnumValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.source_value === undefined ? null : { sourceValue: v.source_value }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        source_value?: CountryCodeEnum4$.Outbound | string | number | boolean | null | undefined;
        value?: CountryCodeEnumValue | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CountryCodeEnum> = z
        .object({
            sourceValue: z
                .nullable(
                    z.union([
                        z.lazy(() => CountryCodeEnum4$.outboundSchema),
                        z.string(),
                        z.number(),
                        z.boolean(),
                    ])
                )
                .optional(),
            value: z.nullable(CountryCodeEnumValue$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.sourceValue === undefined ? null : { source_value: v.sourceValue }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
