/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import * as z from "zod";

export type ContentLanguageEnum4 = {};

export type ContentLanguageEnumSourceValue = ContentLanguageEnum4 | string | number | boolean;

/**
 * The Locale Code of the language
 */
export enum ContentLanguageEnumValue {
    AaER = "aa_ER",
    AfNA = "af_NA",
    AfZA = "af_ZA",
    AmET = "am_ET",
    ArAE = "ar_AE",
    ArBH = "ar_BH",
    ArDJ = "ar_DJ",
    ArDZ = "ar_DZ",
    ArEG = "ar_EG",
    ArER = "ar_ER",
    ArIQ = "ar_IQ",
    ArJO = "ar_JO",
    ArKM = "ar_KM",
    ArKW = "ar_KW",
    ArLB = "ar_LB",
    ArLY = "ar_LY",
    ArMA = "ar_MA",
    ArMR = "ar_MR",
    ArOM = "ar_OM",
    ArPS = "ar_PS",
    ArQA = "ar_QA",
    ArSA = "ar_SA",
    ArSD = "ar_SD",
    ArSY = "ar_SY",
    ArTD = "ar_TD",
    ArTN = "ar_TN",
    ArYE = "ar_YE",
    AyBO = "ay_BO",
    AyPE = "ay_PE",
    AZAZ = "az_AZ",
    AzIR = "az_IR",
    BeBY = "be_BY",
    BGBG = "bg_BG",
    BiVU = "bi_VU",
    BnBD = "bn_BD",
    BnIN = "bn_IN",
    BsBA = "bs_BA",
    BsME = "bs-ME",
    BynER = "byn_ER",
    CaAD = "ca_AD",
    CaES = "ca_ES",
    CaFR = "ca_FR",
    CaIT = "ca_IT",
    ChGU = "ch_GU",
    CsCZ = "cs_CZ",
    DaDK = "da_DK",
    DeAT = "de_AT",
    DeBE = "de_BE",
    DeCH = "de_CH",
    DEDE = "de_DE",
    DeLI = "de_LI",
    DeLU = "de_LU",
    DeVA = "de_VA",
    DeMV = "de_MV",
    DvMV = "dv_MV",
    DzBT = "dz_BT",
    ElCY = "el_CY",
    ElGR = "el_GR",
    EnAG = "en_AG",
    EnAI = "en_AI",
    EnAS = "en_AS",
    EnAU = "en_AU",
    EnBB = "en_BB",
    EnBE = "en_BE",
    EnBM = "en_BM",
    EnBS = "en_BS",
    EnBW = "en_BW",
    EnBZ = "en_BZ",
    EnCA = "en_CA",
    EnCC = "en_CC",
    EnCK = "en_CK",
    EnCM = "en_CM",
    EnCW = "en_CW",
    EnCX = "en_CX",
    EnDG = "en_DG",
    EnDM = "en_DM",
    EnER = "en_ER",
    EnFJ = "en_FJ",
    EnFK = "en_FK",
    EnFM = "en_FM",
    EnGB = "en_GB",
    EnGD = "en_GD",
    EnGG = "en_GG",
    EnGH = "en_GH",
    EnGI = "en_GI",
    EnGM = "en_GM",
    EnGS = "en_GS",
    EnGU = "en_GU",
    EnGY = "en_GY",
    EnHK = "en_HK",
    EnIE = "en_IE",
    EnIM = "en_IM",
    EnIN = "en_IN",
    EnIO = "en_IO",
    EnJE = "en_JE",
    EnJM = "en_JM",
    EnKE = "en_KE",
    EnKI = "en_KI",
    EnKN = "en_KN",
    EnKY = "en_KY",
    EnLC = "en_LC",
    EnLR = "en_LR",
    EnLS = "en_LS",
    EnMF = "en_MF",
    EnMG = "en_MG",
    EnMH = "en_MH",
    EnMO = "en_MO",
    EnMP = "en_MP",
    EnMS = "en_MS",
    EnMT = "en_MT",
    EnMU = "en_MU",
    EnMW = "en_MW",
    EnMY = "en_MY",
    EnNA = "en_NA",
    EnNF = "en_NF",
    EnNG = "en_NG",
    EnNL = "en_NL",
    EnNR = "en_NR",
    EnNU = "en_NU",
    EnNZ = "en_NZ",
    EnPG = "en_PG",
    EnPH = "en_PH",
    EnPK = "en_PK",
    EnPN = "en_PN",
    EnPR = "en_PR",
    EnPW = "en_PW",
    EnRW = "en_RW",
    EnSB = "en_SB",
    EnSC = "en_SC",
    EnSD = "en_SD",
    EnSG = "en_SG",
    EnSH = "en_SH",
    EnSL = "en_SL",
    EnSS = "en_SS",
    EnSX = "en_SX",
    EnSZ = "en_SZ",
    EnTC = "en_TC",
    EnTK = "en_TK",
    EnTO = "en_TO",
    EnTT = "en_TT",
    EnTV = "en_TV",
    EnTZ = "en_TZ",
    EnUG = "en_UG",
    EnUM = "en_UM",
    EnUS = "en_US",
    EnVC = "en_VC",
    EnVG = "en_VG",
    EnVI = "en_VI",
    EnVU = "en_VU",
    EnWS = "en_WS",
    EnZA = "en_ZA",
    EnZM = "en_ZM",
    EnZW = "en_ZW",
    EsAR = "es_AR",
    EsBO = "es_BO",
    EsBZ = "es_BZ",
    EsCL = "es_CL",
    EsCO = "es_CO",
    EsCR = "es_CR",
    EsCU = "es_CU",
    EsDO = "es_DO",
    EsEA = "es_EA",
    EsEC = "es_EC",
    EsEH = "es_EH",
    ESES = "es_ES",
    EsGQ = "es_GQ",
    EsGT = "es_GT",
    EsHN = "es_HN",
    EsIC = "es_IC",
    EsMX = "es_MX",
    EsNI = "es_NI",
    EsPA = "es_PA",
    EsPE = "es_PE",
    EsPH = "es_PH",
    EsPR = "es_PR",
    EsPY = "es_PY",
    EsSV = "es_SV",
    EsUS = "es_US",
    EsUY = "es_UY",
    EsVE = "es_VE",
    EtEE = "et_EE",
    FaAF = "fa_AF",
    FaIR = "fa_IR",
    FanGA = "fan_GA",
    FfCM = "ff_CM",
    FfGN = "ff_GN",
    FfMR = "ff_MR",
    FfSN = "ff_SN",
    FfBF = "ff_BF",
    FIFI = "fi_FI",
    FJFJ = "fj_FJ",
    FOFO = "fo_FO",
    FrBE = "fr_BE",
    FrBF = "fr_BF",
    FrBI = "fr_BI",
    FrBJ = "fr_BJ",
    FrBL = "fr_BL",
    FrCA = "fr_CA",
    FrCD = "fr_CD",
    FrCF = "fr_CF",
    FrCG = "fr_CG",
    FrCH = "fr_CH",
    FrCI = "fr_CI",
    FrCM = "fr_CM",
    FrDJ = "fr_DJ",
    FrDZ = "fr_DZ",
    FRFR = "fr_FR",
    FrGA = "fr_GA",
    FrGF = "fr_GF",
    FrGG = "fr_GG",
    FrGN = "fr_GN",
    FrGP = "fr_GP",
    FrGQ = "fr_GQ",
    FrHT = "fr_HT",
    FrKM = "fr_KM",
    FrJE = "fr_JE",
    FrLU = "fr_LU",
    FrLB = "fr_LB",
    FrMA = "fr_MA",
    FrMC = "fr_MC",
    FrMF = "fr_MF",
    FrMG = "fr_MG",
    FrML = "fr_ML",
    FrMQ = "fr_MQ",
    FrMR = "fr_MR",
    FrMU = "fr_MU",
    FrNC = "fr_NC",
    FrNE = "fr_NE",
    FrPF = "fr_PF",
    FrPM = "fr_PM",
    FrRE = "fr_RE",
    FrRW = "fr_RW",
    FrSC = "fr_SC",
    FrSN = "fr_SN",
    FrSY = "fr_SY",
    FrTD = "fr_TD",
    FrTF = "fr_TF",
    FrTG = "fr_TG",
    FrTN = "fr_TN",
    FrVU = "fr_VU",
    FrVA = "fr_VA",
    FrWF = "fr_WF",
    FrYT = "fr_YT",
    GaIE = "ga_IE",
    GnPY = "gn_PY",
    GnAR = "gn_AR",
    GvIM = "gv_IM",
    HeIL = "he_IL",
    HiIN = "hi_IN",
    HrBA = "hr_BA",
    HRHR = "hr_HR",
    HrME = "hr_ME",
    HTHT = "ht_HT",
    HUHU = "hu_HU",
    HyAM = "hy_AM",
    HyCY = "hy_CY",
    IDID = "id_ID",
    ISIS = "is_IS",
    ItCH = "it_CH",
    ITIT = "it_IT",
    ItSM = "it_SM",
    ItVA = "it_VA",
    JaJP = "ja_JP",
    KaGE = "ka_GE",
    KgCD = "kg_CD",
    KkKZ = "kk_KZ",
    KlGL = "kl_GL",
    KmKH = "km_KH",
    KoKP = "ko_KP",
    KoKR = "ko_KR",
    KuIQ = "ku_IQ",
    KyKG = "ky_KG",
    LaVA = "la_VA",
    LbLU = "lb_LU",
    LnAO = "ln_AO",
    LnCD = "ln_CD",
    LnCF = "ln_CF",
    LnCG = "ln_CG",
    LoLA = "lo_LA",
    LTLT = "lt_LT",
    LuCD = "lu_CD",
    LVLV = "lv_LV",
    MGMG = "mg_MG",
    MHMH = "mh_MH",
    MiNZ = "mi_NZ",
    MKMK = "mk_MK",
    MNMN = "mn_MN",
    MsBN = "ms_BN",
    MsMY = "ms_MY",
    MsSG = "ms_SG",
    MTMT = "mt_MT",
    MyMM = "my_MM",
    NbNO = "nb_NO",
    NbBV = "nb_BV",
    NbZW = "nb_ZW",
    NeNP = "ne_NP",
    NlAW = "nl_AW",
    NlBE = "nl_BE",
    NlBQ = "nl_BQ",
    NlCW = "nl_CW",
    NLNL = "nl_NL",
    NlSR = "nl_SR",
    NlSX = "nl_SX",
    NlMF = "nl_MF",
    NnNO = "nn_NO",
    NnBV = "nn_BV",
    NONO = "no_NO",
    NoBV = "no_BV",
    NoSJ = "no_SJ",
    NrZA = "nr_ZA",
    NyMW = "ny_MW",
    PaIN = "pa_IN",
    PaPK = "pa_PK",
    PLPL = "pl_PL",
    PsAF = "ps_AF",
    PtAO = "pt_AO",
    PtBR = "pt_BR",
    PtCH = "pt_CH",
    PtCV = "pt_CV",
    PtGQ = "pt_GQ",
    PtGW = "pt_GW",
    PtLU = "pt_LU",
    PtMO = "pt_MO",
    PtMZ = "pt_MZ",
    PTPT = "pt_PT",
    PtST = "pt_ST",
    PtTL = "pt_TL",
    QuBO = "qu_BO",
    QuEC = "qu_EC",
    QuPE = "qu_PE",
    RarCK = "rar_CK",
    RmCH = "rm_CH",
    RupMK = "rup_MK",
    RoMD = "ro_MD",
    RORO = "ro_RO",
    RuBY = "ru_BY",
    RuKG = "ru_KG",
    RuKZ = "ru_KZ",
    RuMD = "ru_MD",
    RURU = "ru_RU",
    RuUA = "ru_UA",
    RuAQ = "ru_AQ",
    RuTJ = "ru_TJ",
    RuTM = "ru_TM",
    RuUZ = "ru_UZ",
    RWRW = "rw_RW",
    SgCF = "sg_CF",
    SiLK = "si_LK",
    SKSK = "sk_SK",
    SmAS = "sm_AS",
    SmWS = "sm_WS",
    SnZW = "sn_ZW",
    SoDJ = "so_DJ",
    SoET = "so_ET",
    SoKE = "so_KE",
    SOSO = "so_SO",
    SqAL = "sq_AL",
    SqME = "sq_ME",
    SqXK = "sq_XK",
    SrBA = "sr_BA",
    SrME = "sr_ME",
    SrRS = "sr_RS",
    SrXK = "sr_XK",
    SsSZ = "ss_SZ",
    SsZA = "ss_ZA",
    SvAX = "sv_AX",
    SvFI = "sv_FI",
    SvSE = "sv_SE",
    SwKE = "sw_KE",
    SwTZ = "sw_TZ",
    SwUG = "sw_UG",
    SwCD = "sw_CD",
    TaIN = "ta_IN",
    TaMY = "ta_MY",
    TaSG = "ta_SG",
    TaLK = "ta_LK",
    TgTJ = "tg_TJ",
    THTH = "th_TH",
    TiER = "ti_ER",
    TiET = "ti_ET",
    TigER = "tig_ER",
    TkTM = "tk_TM",
    TkAF = "tk_AF",
    TnBW = "tn_BW",
    TnZA = "tn_ZA",
    TOTO = "to_TO",
    TrCY = "tr_CY",
    TRTR = "tr_TR",
    TsZA = "ts_ZA",
    UkUA = "uk_UA",
    UrIN = "ur_IN",
    UrPK = "ur_PK",
    UzAF = "uz_AF",
    UZUZ = "uz_UZ",
    VeZA = "ve_ZA",
    ViVN = "vi_VN",
    XhZA = "xh_ZA",
    ZhCN = "zh_CN",
    ZhHK = "zh_HK",
    ZhMO = "zh_MO",
    ZhSG = "zh_SG",
    ZhTW = "zh_TW",
    ZuZA = "zu_ZA",
}
/**
 * The Locale Code of the language
 */
export type ContentLanguageEnumValueOpen = OpenEnum<typeof ContentLanguageEnumValue>;

export type ContentLanguageEnum = {
    sourceValue?: ContentLanguageEnum4 | string | number | boolean | null | undefined;
    /**
     * The Locale Code of the language
     */
    value?: ContentLanguageEnumValueOpen | null | undefined;
};

/** @internal */
export const ContentLanguageEnum4$inboundSchema: z.ZodType<
    ContentLanguageEnum4,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type ContentLanguageEnum4$Outbound = {};

/** @internal */
export const ContentLanguageEnum4$outboundSchema: z.ZodType<
    ContentLanguageEnum4$Outbound,
    z.ZodTypeDef,
    ContentLanguageEnum4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentLanguageEnum4$ {
    /** @deprecated use `ContentLanguageEnum4$inboundSchema` instead. */
    export const inboundSchema = ContentLanguageEnum4$inboundSchema;
    /** @deprecated use `ContentLanguageEnum4$outboundSchema` instead. */
    export const outboundSchema = ContentLanguageEnum4$outboundSchema;
    /** @deprecated use `ContentLanguageEnum4$Outbound` instead. */
    export type Outbound = ContentLanguageEnum4$Outbound;
}

/** @internal */
export const ContentLanguageEnumSourceValue$inboundSchema: z.ZodType<
    ContentLanguageEnumSourceValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => ContentLanguageEnum4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/** @internal */
export type ContentLanguageEnumSourceValue$Outbound =
    | ContentLanguageEnum4$Outbound
    | string
    | number
    | boolean;

/** @internal */
export const ContentLanguageEnumSourceValue$outboundSchema: z.ZodType<
    ContentLanguageEnumSourceValue$Outbound,
    z.ZodTypeDef,
    ContentLanguageEnumSourceValue
> = z.union([
    z.lazy(() => ContentLanguageEnum4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentLanguageEnumSourceValue$ {
    /** @deprecated use `ContentLanguageEnumSourceValue$inboundSchema` instead. */
    export const inboundSchema = ContentLanguageEnumSourceValue$inboundSchema;
    /** @deprecated use `ContentLanguageEnumSourceValue$outboundSchema` instead. */
    export const outboundSchema = ContentLanguageEnumSourceValue$outboundSchema;
    /** @deprecated use `ContentLanguageEnumSourceValue$Outbound` instead. */
    export type Outbound = ContentLanguageEnumSourceValue$Outbound;
}

/** @internal */
export const ContentLanguageEnumValue$inboundSchema: z.ZodType<
    ContentLanguageEnumValueOpen,
    z.ZodTypeDef,
    unknown
> = z.union([z.nativeEnum(ContentLanguageEnumValue), z.string().transform(catchUnrecognizedEnum)]);

/** @internal */
export const ContentLanguageEnumValue$outboundSchema: z.ZodType<
    ContentLanguageEnumValueOpen,
    z.ZodTypeDef,
    ContentLanguageEnumValueOpen
> = z.union([
    z.nativeEnum(ContentLanguageEnumValue),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContentLanguageEnumValue$ {
    /** @deprecated use `ContentLanguageEnumValue$inboundSchema` instead. */
    export const inboundSchema = ContentLanguageEnumValue$inboundSchema;
    /** @deprecated use `ContentLanguageEnumValue$outboundSchema` instead. */
    export const outboundSchema = ContentLanguageEnumValue$outboundSchema;
}

/** @internal */
export const ContentLanguageEnum$inboundSchema: z.ZodType<
    ContentLanguageEnum,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        source_value: z
            .nullable(
                z.union([
                    z.lazy(() => ContentLanguageEnum4$inboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(ContentLanguageEnumValue$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_value: "sourceValue",
        });
    });

/** @internal */
export type ContentLanguageEnum$Outbound = {
    source_value?: ContentLanguageEnum4$Outbound | string | number | boolean | null | undefined;
    value?: string | null | undefined;
};

/** @internal */
export const ContentLanguageEnum$outboundSchema: z.ZodType<
    ContentLanguageEnum$Outbound,
    z.ZodTypeDef,
    ContentLanguageEnum
> = z
    .object({
        sourceValue: z
            .nullable(
                z.union([
                    z.lazy(() => ContentLanguageEnum4$outboundSchema),
                    z.string(),
                    z.number(),
                    z.boolean(),
                ])
            )
            .optional(),
        value: z.nullable(ContentLanguageEnumValue$outboundSchema).optional(),
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
export namespace ContentLanguageEnum$ {
    /** @deprecated use `ContentLanguageEnum$inboundSchema` instead. */
    export const inboundSchema = ContentLanguageEnum$inboundSchema;
    /** @deprecated use `ContentLanguageEnum$outboundSchema` instead. */
    export const outboundSchema = ContentLanguageEnum$outboundSchema;
    /** @deprecated use `ContentLanguageEnum$Outbound` instead. */
    export type Outbound = ContentLanguageEnum$Outbound;
}
