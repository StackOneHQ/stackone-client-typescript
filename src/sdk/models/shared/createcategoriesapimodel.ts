/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCategoriesApiModel4 = {};

export type CreateCategoriesApiModelSourceValue =
  | CreateCategoriesApiModel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateCategoriesApiModelValue {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}
export type CreateCategoriesApiModelValueOpen = OpenEnum<
  typeof CreateCategoriesApiModelValue
>;

/**
 * The hierarchal level of the category
 */
export type CreateCategoriesApiModelHierarchy = {
  sourceValue?:
    | CreateCategoriesApiModel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateCategoriesApiModelValueOpen | null | undefined;
};

export type CreateCategoriesApiModelSchemas4 = {};

export type CreateCategoriesApiModelSchemasSourceValue =
  | CreateCategoriesApiModelSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The Locale Code of the language
 */
export enum CreateCategoriesApiModelSchemasValue {
  ARAR = "ar_AR",
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
  EsLA = "es_LA",
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
  GuIN = "gu_IN",
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
  MrIN = "mr_IN",
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
  SESE = "se_SE",
  SgCF = "sg_CF",
  SiLK = "si_LK",
  SKSK = "sk_SK",
  SlSI = "sl_SI",
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
  TeIN = "te_IN",
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
export type CreateCategoriesApiModelSchemasValueOpen = OpenEnum<
  typeof CreateCategoriesApiModelSchemasValue
>;

/**
 * The language associated with this category
 */
export type CreateCategoriesApiModelLanguage = {
  sourceValue?:
    | CreateCategoriesApiModelSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The Locale Code of the language
   */
  value?: CreateCategoriesApiModelSchemasValueOpen | null | undefined;
};

export type CreateCategoriesApiModelSchemasLevel4 = {};

export type CreateCategoriesApiModelSchemasLevelSourceValue =
  | CreateCategoriesApiModelSchemasLevel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateCategoriesApiModelSchemasLevelValue {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}
export type CreateCategoriesApiModelSchemasLevelValueOpen = OpenEnum<
  typeof CreateCategoriesApiModelSchemasLevelValue
>;

/**
 * The hierarchal level of the category
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type CreateCategoriesApiModelLevel = {
  sourceValue?:
    | CreateCategoriesApiModelSchemasLevel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateCategoriesApiModelSchemasLevelValueOpen | null | undefined;
};

export type CreateCategoriesApiModel = {
  /**
   * The hierarchal level of the category
   */
  hierarchy?: CreateCategoriesApiModelHierarchy | null | undefined;
  /**
   * The ID associated with this category
   */
  id?: string | null | undefined;
  /**
   * The language associated with this category
   */
  language?: CreateCategoriesApiModelLanguage | null | undefined;
  /**
   * The hierarchal level of the category
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  level?: CreateCategoriesApiModelLevel | null | undefined;
  /**
   * The name associated with this category
   */
  name?: string | null | undefined;
  /**
   * Custom Unified Fields configured in your StackOne project
   */
  unifiedCustomFields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel4$inboundSchema: z.ZodType<
  CreateCategoriesApiModel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateCategoriesApiModel4$Outbound = {};

/** @internal */
export const CreateCategoriesApiModel4$outboundSchema: z.ZodType<
  CreateCategoriesApiModel4$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModel4$ {
  /** @deprecated use `CreateCategoriesApiModel4$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModel4$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModel4$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModel4$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModel4$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModel4$Outbound;
}

export function createCategoriesApiModel4ToJSON(
  createCategoriesApiModel4: CreateCategoriesApiModel4,
): string {
  return JSON.stringify(
    CreateCategoriesApiModel4$outboundSchema.parse(createCategoriesApiModel4),
  );
}

export function createCategoriesApiModel4FromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModel4' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSourceValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateCategoriesApiModel4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateCategoriesApiModelSourceValue$Outbound =
  | CreateCategoriesApiModel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateCategoriesApiModelSourceValue$outboundSchema: z.ZodType<
  CreateCategoriesApiModelSourceValue$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelSourceValue
> = z.union([
  z.lazy(() => CreateCategoriesApiModel4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSourceValue$ {
  /** @deprecated use `CreateCategoriesApiModelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSourceValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSourceValue$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSourceValue$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelSourceValue$Outbound;
}

export function createCategoriesApiModelSourceValueToJSON(
  createCategoriesApiModelSourceValue: CreateCategoriesApiModelSourceValue,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSourceValue$outboundSchema.parse(
      createCategoriesApiModelSourceValue,
    ),
  );
}

export function createCategoriesApiModelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCategoriesApiModelSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateCategoriesApiModelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateCategoriesApiModelValue$outboundSchema: z.ZodType<
  CreateCategoriesApiModelValueOpen,
  z.ZodTypeDef,
  CreateCategoriesApiModelValueOpen
> = z.union([
  z.nativeEnum(CreateCategoriesApiModelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelValue$ {
  /** @deprecated use `CreateCategoriesApiModelValue$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelValue$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelValue$outboundSchema;
}

/** @internal */
export const CreateCategoriesApiModelHierarchy$inboundSchema: z.ZodType<
  CreateCategoriesApiModelHierarchy,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateCategoriesApiModelHierarchy$Outbound = {
  source_value?:
    | CreateCategoriesApiModel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModelHierarchy$outboundSchema: z.ZodType<
  CreateCategoriesApiModelHierarchy$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelHierarchy
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelHierarchy$ {
  /** @deprecated use `CreateCategoriesApiModelHierarchy$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelHierarchy$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelHierarchy$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelHierarchy$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelHierarchy$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelHierarchy$Outbound;
}

export function createCategoriesApiModelHierarchyToJSON(
  createCategoriesApiModelHierarchy: CreateCategoriesApiModelHierarchy,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelHierarchy$outboundSchema.parse(
      createCategoriesApiModelHierarchy,
    ),
  );
}

export function createCategoriesApiModelHierarchyFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelHierarchy, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModelHierarchy$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelHierarchy' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemas4$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateCategoriesApiModelSchemas4$Outbound = {};

/** @internal */
export const CreateCategoriesApiModelSchemas4$outboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemas4$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemas4$ {
  /** @deprecated use `CreateCategoriesApiModelSchemas4$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelSchemas4$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemas4$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelSchemas4$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemas4$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelSchemas4$Outbound;
}

export function createCategoriesApiModelSchemas4ToJSON(
  createCategoriesApiModelSchemas4: CreateCategoriesApiModelSchemas4,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSchemas4$outboundSchema.parse(
      createCategoriesApiModelSchemas4,
    ),
  );
}

export function createCategoriesApiModelSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModelSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelSchemas4' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemasSourceValue$inboundSchema:
  z.ZodType<CreateCategoriesApiModelSchemasSourceValue, z.ZodTypeDef, unknown> =
    z.union([
      z.lazy(() => CreateCategoriesApiModelSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]);

/** @internal */
export type CreateCategoriesApiModelSchemasSourceValue$Outbound =
  | CreateCategoriesApiModelSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateCategoriesApiModelSchemasSourceValue$outboundSchema:
  z.ZodType<
    CreateCategoriesApiModelSchemasSourceValue$Outbound,
    z.ZodTypeDef,
    CreateCategoriesApiModelSchemasSourceValue
  > = z.union([
    z.lazy(() => CreateCategoriesApiModelSchemas4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemasSourceValue$ {
  /** @deprecated use `CreateCategoriesApiModelSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSchemasSourceValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSchemasSourceValue$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasSourceValue$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelSchemasSourceValue$Outbound;
}

export function createCategoriesApiModelSchemasSourceValueToJSON(
  createCategoriesApiModelSchemasSourceValue:
    CreateCategoriesApiModelSchemasSourceValue,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSchemasSourceValue$outboundSchema.parse(
      createCategoriesApiModelSchemasSourceValue,
    ),
  );
}

export function createCategoriesApiModelSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateCategoriesApiModelSchemasSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCategoriesApiModelSchemasSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateCategoriesApiModelSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemasValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateCategoriesApiModelSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateCategoriesApiModelSchemasValue$outboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemasValueOpen,
  z.ZodTypeDef,
  CreateCategoriesApiModelSchemasValueOpen
> = z.union([
  z.nativeEnum(CreateCategoriesApiModelSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemasValue$ {
  /** @deprecated use `CreateCategoriesApiModelSchemasValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSchemasValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSchemasValue$outboundSchema;
}

/** @internal */
export const CreateCategoriesApiModelLanguage$inboundSchema: z.ZodType<
  CreateCategoriesApiModelLanguage,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModelSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelSchemasValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateCategoriesApiModelLanguage$Outbound = {
  source_value?:
    | CreateCategoriesApiModelSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModelLanguage$outboundSchema: z.ZodType<
  CreateCategoriesApiModelLanguage$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelLanguage
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModelSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelSchemasValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelLanguage$ {
  /** @deprecated use `CreateCategoriesApiModelLanguage$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelLanguage$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLanguage$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelLanguage$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLanguage$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelLanguage$Outbound;
}

export function createCategoriesApiModelLanguageToJSON(
  createCategoriesApiModelLanguage: CreateCategoriesApiModelLanguage,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelLanguage$outboundSchema.parse(
      createCategoriesApiModelLanguage,
    ),
  );
}

export function createCategoriesApiModelLanguageFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelLanguage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModelLanguage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelLanguage' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemasLevel4$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemasLevel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateCategoriesApiModelSchemasLevel4$Outbound = {};

/** @internal */
export const CreateCategoriesApiModelSchemasLevel4$outboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemasLevel4$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelSchemasLevel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemasLevel4$ {
  /** @deprecated use `CreateCategoriesApiModelSchemasLevel4$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSchemasLevel4$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasLevel4$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSchemasLevel4$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasLevel4$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelSchemasLevel4$Outbound;
}

export function createCategoriesApiModelSchemasLevel4ToJSON(
  createCategoriesApiModelSchemasLevel4: CreateCategoriesApiModelSchemasLevel4,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSchemasLevel4$outboundSchema.parse(
      createCategoriesApiModelSchemasLevel4,
    ),
  );
}

export function createCategoriesApiModelSchemasLevel4FromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelSchemasLevel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCategoriesApiModelSchemasLevel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelSchemasLevel4' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemasLevelSourceValue$inboundSchema:
  z.ZodType<
    CreateCategoriesApiModelSchemasLevelSourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => CreateCategoriesApiModelSchemasLevel4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type CreateCategoriesApiModelSchemasLevelSourceValue$Outbound =
  | CreateCategoriesApiModelSchemasLevel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateCategoriesApiModelSchemasLevelSourceValue$outboundSchema:
  z.ZodType<
    CreateCategoriesApiModelSchemasLevelSourceValue$Outbound,
    z.ZodTypeDef,
    CreateCategoriesApiModelSchemasLevelSourceValue
  > = z.union([
    z.lazy(() => CreateCategoriesApiModelSchemasLevel4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemasLevelSourceValue$ {
  /** @deprecated use `CreateCategoriesApiModelSchemasLevelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSchemasLevelSourceValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasLevelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSchemasLevelSourceValue$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasLevelSourceValue$Outbound` instead. */
  export type Outbound =
    CreateCategoriesApiModelSchemasLevelSourceValue$Outbound;
}

export function createCategoriesApiModelSchemasLevelSourceValueToJSON(
  createCategoriesApiModelSchemasLevelSourceValue:
    CreateCategoriesApiModelSchemasLevelSourceValue,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelSchemasLevelSourceValue$outboundSchema.parse(
      createCategoriesApiModelSchemasLevelSourceValue,
    ),
  );
}

export function createCategoriesApiModelSchemasLevelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateCategoriesApiModelSchemasLevelSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateCategoriesApiModelSchemasLevelSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateCategoriesApiModelSchemasLevelSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModelSchemasLevelValue$inboundSchema: z.ZodType<
  CreateCategoriesApiModelSchemasLevelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateCategoriesApiModelSchemasLevelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateCategoriesApiModelSchemasLevelValue$outboundSchema:
  z.ZodType<
    CreateCategoriesApiModelSchemasLevelValueOpen,
    z.ZodTypeDef,
    CreateCategoriesApiModelSchemasLevelValueOpen
  > = z.union([
    z.nativeEnum(CreateCategoriesApiModelSchemasLevelValue),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelSchemasLevelValue$ {
  /** @deprecated use `CreateCategoriesApiModelSchemasLevelValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateCategoriesApiModelSchemasLevelValue$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelSchemasLevelValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateCategoriesApiModelSchemasLevelValue$outboundSchema;
}

/** @internal */
export const CreateCategoriesApiModelLevel$inboundSchema: z.ZodType<
  CreateCategoriesApiModelLevel,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModelSchemasLevel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelSchemasLevelValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateCategoriesApiModelLevel$Outbound = {
  source_value?:
    | CreateCategoriesApiModelSchemasLevel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModelLevel$outboundSchema: z.ZodType<
  CreateCategoriesApiModelLevel$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModelLevel
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateCategoriesApiModelSchemasLevel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateCategoriesApiModelSchemasLevelValue$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModelLevel$ {
  /** @deprecated use `CreateCategoriesApiModelLevel$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModelLevel$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLevel$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModelLevel$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModelLevel$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModelLevel$Outbound;
}

export function createCategoriesApiModelLevelToJSON(
  createCategoriesApiModelLevel: CreateCategoriesApiModelLevel,
): string {
  return JSON.stringify(
    CreateCategoriesApiModelLevel$outboundSchema.parse(
      createCategoriesApiModelLevel,
    ),
  );
}

export function createCategoriesApiModelLevelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModelLevel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModelLevel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModelLevel' from JSON`,
  );
}

/** @internal */
export const CreateCategoriesApiModel$inboundSchema: z.ZodType<
  CreateCategoriesApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  hierarchy: z.nullable(
    z.lazy(() => CreateCategoriesApiModelHierarchy$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  language: z.nullable(
    z.lazy(() => CreateCategoriesApiModelLanguage$inboundSchema),
  ).optional(),
  level: z.nullable(z.lazy(() => CreateCategoriesApiModelLevel$inboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
  unified_custom_fields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_custom_fields": "unifiedCustomFields",
  });
});

/** @internal */
export type CreateCategoriesApiModel$Outbound = {
  hierarchy?: CreateCategoriesApiModelHierarchy$Outbound | null | undefined;
  id?: string | null | undefined;
  language?: CreateCategoriesApiModelLanguage$Outbound | null | undefined;
  level?: CreateCategoriesApiModelLevel$Outbound | null | undefined;
  name?: string | null | undefined;
  unified_custom_fields?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCategoriesApiModel$outboundSchema: z.ZodType<
  CreateCategoriesApiModel$Outbound,
  z.ZodTypeDef,
  CreateCategoriesApiModel
> = z.object({
  hierarchy: z.nullable(
    z.lazy(() => CreateCategoriesApiModelHierarchy$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  language: z.nullable(
    z.lazy(() => CreateCategoriesApiModelLanguage$outboundSchema),
  ).optional(),
  level: z.nullable(z.lazy(() => CreateCategoriesApiModelLevel$outboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
  unifiedCustomFields: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedCustomFields: "unified_custom_fields",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCategoriesApiModel$ {
  /** @deprecated use `CreateCategoriesApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateCategoriesApiModel$inboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateCategoriesApiModel$outboundSchema;
  /** @deprecated use `CreateCategoriesApiModel$Outbound` instead. */
  export type Outbound = CreateCategoriesApiModel$Outbound;
}

export function createCategoriesApiModelToJSON(
  createCategoriesApiModel: CreateCategoriesApiModel,
): string {
  return JSON.stringify(
    CreateCategoriesApiModel$outboundSchema.parse(createCategoriesApiModel),
  );
}

export function createCategoriesApiModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateCategoriesApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCategoriesApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCategoriesApiModel' from JSON`,
  );
}
