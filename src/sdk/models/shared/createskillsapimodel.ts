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

export type CreateSkillsApiModel4 = {};

export type CreateSkillsApiModelSourceValue =
  | CreateSkillsApiModel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateSkillsApiModelValue {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  UnmappedValue = "unmapped_value",
}
export type CreateSkillsApiModelValueOpen = OpenEnum<
  typeof CreateSkillsApiModelValue
>;

/**
 * The hierarchal level of the skill
 */
export type CreateSkillsApiModelHierarchy = {
  sourceValue?:
    | CreateSkillsApiModel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateSkillsApiModelValueOpen | null | undefined;
};

export type CreateSkillsApiModelSchemas4 = {};

export type CreateSkillsApiModelSchemasSourceValue =
  | CreateSkillsApiModelSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The Locale Code of the language
 */
export enum CreateSkillsApiModelSchemasValue {
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
  UnmappedValue = "unmapped_value",
}
/**
 * The Locale Code of the language
 */
export type CreateSkillsApiModelSchemasValueOpen = OpenEnum<
  typeof CreateSkillsApiModelSchemasValue
>;

/**
 * The language associated with this skill
 */
export type CreateSkillsApiModelLanguage = {
  sourceValue?:
    | CreateSkillsApiModelSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The Locale Code of the language
   */
  value?: CreateSkillsApiModelSchemasValueOpen | null | undefined;
};

export type CreateSkillsApiModelSchemasLevel4 = {};

export type CreateSkillsApiModelSchemasLevelSourceValue =
  | CreateSkillsApiModelSchemasLevel4
  | string
  | number
  | boolean
  | Array<any>;

export enum CreateSkillsApiModelSchemasLevelValue {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  UnmappedValue = "unmapped_value",
}
export type CreateSkillsApiModelSchemasLevelValueOpen = OpenEnum<
  typeof CreateSkillsApiModelSchemasLevelValue
>;

/**
 * The hierarchal level of the skill
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type CreateSkillsApiModelLevel = {
  sourceValue?:
    | CreateSkillsApiModelSchemasLevel4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: CreateSkillsApiModelSchemasLevelValueOpen | null | undefined;
};

export type CreateSkillsApiModel = {
  /**
   * The hierarchal level of the skill
   */
  hierarchy?: CreateSkillsApiModelHierarchy | null | undefined;
  /**
   * The ID associated with this skill
   */
  id?: string | null | undefined;
  /**
   * The language associated with this skill
   */
  language?: CreateSkillsApiModelLanguage | null | undefined;
  /**
   * The hierarchal level of the skill
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  level?: CreateSkillsApiModelLevel | null | undefined;
  /**
   * The name associated with this skill
   */
  name?: string | null | undefined;
};

/** @internal */
export const CreateSkillsApiModel4$inboundSchema: z.ZodType<
  CreateSkillsApiModel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateSkillsApiModel4$Outbound = {};

/** @internal */
export const CreateSkillsApiModel4$outboundSchema: z.ZodType<
  CreateSkillsApiModel4$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModel4$ {
  /** @deprecated use `CreateSkillsApiModel4$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModel4$inboundSchema;
  /** @deprecated use `CreateSkillsApiModel4$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModel4$outboundSchema;
  /** @deprecated use `CreateSkillsApiModel4$Outbound` instead. */
  export type Outbound = CreateSkillsApiModel4$Outbound;
}

export function createSkillsApiModel4ToJSON(
  createSkillsApiModel4: CreateSkillsApiModel4,
): string {
  return JSON.stringify(
    CreateSkillsApiModel4$outboundSchema.parse(createSkillsApiModel4),
  );
}

export function createSkillsApiModel4FromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModel4' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSourceValue$inboundSchema: z.ZodType<
  CreateSkillsApiModelSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateSkillsApiModel4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateSkillsApiModelSourceValue$Outbound =
  | CreateSkillsApiModel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateSkillsApiModelSourceValue$outboundSchema: z.ZodType<
  CreateSkillsApiModelSourceValue$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelSourceValue
> = z.union([
  z.lazy(() => CreateSkillsApiModel4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSourceValue$ {
  /** @deprecated use `CreateSkillsApiModelSourceValue$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelSourceValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSourceValue$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelSourceValue$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelSourceValue$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelSourceValue$Outbound;
}

export function createSkillsApiModelSourceValueToJSON(
  createSkillsApiModelSourceValue: CreateSkillsApiModelSourceValue,
): string {
  return JSON.stringify(
    CreateSkillsApiModelSourceValue$outboundSchema.parse(
      createSkillsApiModelSourceValue,
    ),
  );
}

export function createSkillsApiModelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelValue$inboundSchema: z.ZodType<
  CreateSkillsApiModelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateSkillsApiModelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateSkillsApiModelValue$outboundSchema: z.ZodType<
  CreateSkillsApiModelValueOpen,
  z.ZodTypeDef,
  CreateSkillsApiModelValueOpen
> = z.union([
  z.nativeEnum(CreateSkillsApiModelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelValue$ {
  /** @deprecated use `CreateSkillsApiModelValue$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelValue$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelValue$outboundSchema;
}

/** @internal */
export const CreateSkillsApiModelHierarchy$inboundSchema: z.ZodType<
  CreateSkillsApiModelHierarchy,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateSkillsApiModelHierarchy$Outbound = {
  source_value?:
    | CreateSkillsApiModel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateSkillsApiModelHierarchy$outboundSchema: z.ZodType<
  CreateSkillsApiModelHierarchy$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelHierarchy
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelHierarchy$ {
  /** @deprecated use `CreateSkillsApiModelHierarchy$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelHierarchy$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelHierarchy$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelHierarchy$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelHierarchy$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelHierarchy$Outbound;
}

export function createSkillsApiModelHierarchyToJSON(
  createSkillsApiModelHierarchy: CreateSkillsApiModelHierarchy,
): string {
  return JSON.stringify(
    CreateSkillsApiModelHierarchy$outboundSchema.parse(
      createSkillsApiModelHierarchy,
    ),
  );
}

export function createSkillsApiModelHierarchyFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelHierarchy, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelHierarchy$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelHierarchy' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemas4$inboundSchema: z.ZodType<
  CreateSkillsApiModelSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateSkillsApiModelSchemas4$Outbound = {};

/** @internal */
export const CreateSkillsApiModelSchemas4$outboundSchema: z.ZodType<
  CreateSkillsApiModelSchemas4$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemas4$ {
  /** @deprecated use `CreateSkillsApiModelSchemas4$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelSchemas4$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemas4$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelSchemas4$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemas4$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelSchemas4$Outbound;
}

export function createSkillsApiModelSchemas4ToJSON(
  createSkillsApiModelSchemas4: CreateSkillsApiModelSchemas4,
): string {
  return JSON.stringify(
    CreateSkillsApiModelSchemas4$outboundSchema.parse(
      createSkillsApiModelSchemas4,
    ),
  );
}

export function createSkillsApiModelSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelSchemas4' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemasSourceValue$inboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateSkillsApiModelSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type CreateSkillsApiModelSchemasSourceValue$Outbound =
  | CreateSkillsApiModelSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateSkillsApiModelSchemasSourceValue$outboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelSchemasSourceValue
> = z.union([
  z.lazy(() => CreateSkillsApiModelSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemasSourceValue$ {
  /** @deprecated use `CreateSkillsApiModelSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateSkillsApiModelSchemasSourceValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateSkillsApiModelSchemasSourceValue$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasSourceValue$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelSchemasSourceValue$Outbound;
}

export function createSkillsApiModelSchemasSourceValueToJSON(
  createSkillsApiModelSchemasSourceValue:
    CreateSkillsApiModelSchemasSourceValue,
): string {
  return JSON.stringify(
    CreateSkillsApiModelSchemasSourceValue$outboundSchema.parse(
      createSkillsApiModelSchemasSourceValue,
    ),
  );
}

export function createSkillsApiModelSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSkillsApiModelSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemasValue$inboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateSkillsApiModelSchemasValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateSkillsApiModelSchemasValue$outboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasValueOpen,
  z.ZodTypeDef,
  CreateSkillsApiModelSchemasValueOpen
> = z.union([
  z.nativeEnum(CreateSkillsApiModelSchemasValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemasValue$ {
  /** @deprecated use `CreateSkillsApiModelSchemasValue$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelSchemasValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasValue$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelSchemasValue$outboundSchema;
}

/** @internal */
export const CreateSkillsApiModelLanguage$inboundSchema: z.ZodType<
  CreateSkillsApiModelLanguage,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModelSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelSchemasValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateSkillsApiModelLanguage$Outbound = {
  source_value?:
    | CreateSkillsApiModelSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateSkillsApiModelLanguage$outboundSchema: z.ZodType<
  CreateSkillsApiModelLanguage$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelLanguage
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModelSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelSchemasValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelLanguage$ {
  /** @deprecated use `CreateSkillsApiModelLanguage$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelLanguage$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelLanguage$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelLanguage$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelLanguage$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelLanguage$Outbound;
}

export function createSkillsApiModelLanguageToJSON(
  createSkillsApiModelLanguage: CreateSkillsApiModelLanguage,
): string {
  return JSON.stringify(
    CreateSkillsApiModelLanguage$outboundSchema.parse(
      createSkillsApiModelLanguage,
    ),
  );
}

export function createSkillsApiModelLanguageFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelLanguage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelLanguage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelLanguage' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemasLevel4$inboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasLevel4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CreateSkillsApiModelSchemasLevel4$Outbound = {};

/** @internal */
export const CreateSkillsApiModelSchemasLevel4$outboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasLevel4$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelSchemasLevel4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemasLevel4$ {
  /** @deprecated use `CreateSkillsApiModelSchemasLevel4$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelSchemasLevel4$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasLevel4$outboundSchema` instead. */
  export const outboundSchema =
    CreateSkillsApiModelSchemasLevel4$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasLevel4$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelSchemasLevel4$Outbound;
}

export function createSkillsApiModelSchemasLevel4ToJSON(
  createSkillsApiModelSchemasLevel4: CreateSkillsApiModelSchemasLevel4,
): string {
  return JSON.stringify(
    CreateSkillsApiModelSchemasLevel4$outboundSchema.parse(
      createSkillsApiModelSchemasLevel4,
    ),
  );
}

export function createSkillsApiModelSchemasLevel4FromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelSchemasLevel4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelSchemasLevel4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelSchemasLevel4' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemasLevelSourceValue$inboundSchema:
  z.ZodType<
    CreateSkillsApiModelSchemasLevelSourceValue,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => CreateSkillsApiModelSchemasLevel4$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/** @internal */
export type CreateSkillsApiModelSchemasLevelSourceValue$Outbound =
  | CreateSkillsApiModelSchemasLevel4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const CreateSkillsApiModelSchemasLevelSourceValue$outboundSchema:
  z.ZodType<
    CreateSkillsApiModelSchemasLevelSourceValue$Outbound,
    z.ZodTypeDef,
    CreateSkillsApiModelSchemasLevelSourceValue
  > = z.union([
    z.lazy(() => CreateSkillsApiModelSchemasLevel4$outboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.any()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemasLevelSourceValue$ {
  /** @deprecated use `CreateSkillsApiModelSchemasLevelSourceValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateSkillsApiModelSchemasLevelSourceValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasLevelSourceValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateSkillsApiModelSchemasLevelSourceValue$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasLevelSourceValue$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelSchemasLevelSourceValue$Outbound;
}

export function createSkillsApiModelSchemasLevelSourceValueToJSON(
  createSkillsApiModelSchemasLevelSourceValue:
    CreateSkillsApiModelSchemasLevelSourceValue,
): string {
  return JSON.stringify(
    CreateSkillsApiModelSchemasLevelSourceValue$outboundSchema.parse(
      createSkillsApiModelSchemasLevelSourceValue,
    ),
  );
}

export function createSkillsApiModelSchemasLevelSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateSkillsApiModelSchemasLevelSourceValue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateSkillsApiModelSchemasLevelSourceValue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateSkillsApiModelSchemasLevelSourceValue' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModelSchemasLevelValue$inboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasLevelValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CreateSkillsApiModelSchemasLevelValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CreateSkillsApiModelSchemasLevelValue$outboundSchema: z.ZodType<
  CreateSkillsApiModelSchemasLevelValueOpen,
  z.ZodTypeDef,
  CreateSkillsApiModelSchemasLevelValueOpen
> = z.union([
  z.nativeEnum(CreateSkillsApiModelSchemasLevelValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModelSchemasLevelValue$ {
  /** @deprecated use `CreateSkillsApiModelSchemasLevelValue$inboundSchema` instead. */
  export const inboundSchema =
    CreateSkillsApiModelSchemasLevelValue$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelSchemasLevelValue$outboundSchema` instead. */
  export const outboundSchema =
    CreateSkillsApiModelSchemasLevelValue$outboundSchema;
}

/** @internal */
export const CreateSkillsApiModelLevel$inboundSchema: z.ZodType<
  CreateSkillsApiModelLevel,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModelSchemasLevel4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelSchemasLevelValue$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type CreateSkillsApiModelLevel$Outbound = {
  source_value?:
    | CreateSkillsApiModelSchemasLevel4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const CreateSkillsApiModelLevel$outboundSchema: z.ZodType<
  CreateSkillsApiModelLevel$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModelLevel
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => CreateSkillsApiModelSchemasLevel4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(CreateSkillsApiModelSchemasLevelValue$outboundSchema)
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
export namespace CreateSkillsApiModelLevel$ {
  /** @deprecated use `CreateSkillsApiModelLevel$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModelLevel$inboundSchema;
  /** @deprecated use `CreateSkillsApiModelLevel$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModelLevel$outboundSchema;
  /** @deprecated use `CreateSkillsApiModelLevel$Outbound` instead. */
  export type Outbound = CreateSkillsApiModelLevel$Outbound;
}

export function createSkillsApiModelLevelToJSON(
  createSkillsApiModelLevel: CreateSkillsApiModelLevel,
): string {
  return JSON.stringify(
    CreateSkillsApiModelLevel$outboundSchema.parse(createSkillsApiModelLevel),
  );
}

export function createSkillsApiModelLevelFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModelLevel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModelLevel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModelLevel' from JSON`,
  );
}

/** @internal */
export const CreateSkillsApiModel$inboundSchema: z.ZodType<
  CreateSkillsApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  hierarchy: z.nullable(
    z.lazy(() => CreateSkillsApiModelHierarchy$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  language: z.nullable(z.lazy(() => CreateSkillsApiModelLanguage$inboundSchema))
    .optional(),
  level: z.nullable(z.lazy(() => CreateSkillsApiModelLevel$inboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateSkillsApiModel$Outbound = {
  hierarchy?: CreateSkillsApiModelHierarchy$Outbound | null | undefined;
  id?: string | null | undefined;
  language?: CreateSkillsApiModelLanguage$Outbound | null | undefined;
  level?: CreateSkillsApiModelLevel$Outbound | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CreateSkillsApiModel$outboundSchema: z.ZodType<
  CreateSkillsApiModel$Outbound,
  z.ZodTypeDef,
  CreateSkillsApiModel
> = z.object({
  hierarchy: z.nullable(
    z.lazy(() => CreateSkillsApiModelHierarchy$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  language: z.nullable(
    z.lazy(() => CreateSkillsApiModelLanguage$outboundSchema),
  ).optional(),
  level: z.nullable(z.lazy(() => CreateSkillsApiModelLevel$outboundSchema))
    .optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSkillsApiModel$ {
  /** @deprecated use `CreateSkillsApiModel$inboundSchema` instead. */
  export const inboundSchema = CreateSkillsApiModel$inboundSchema;
  /** @deprecated use `CreateSkillsApiModel$outboundSchema` instead. */
  export const outboundSchema = CreateSkillsApiModel$outboundSchema;
  /** @deprecated use `CreateSkillsApiModel$Outbound` instead. */
  export type Outbound = CreateSkillsApiModel$Outbound;
}

export function createSkillsApiModelToJSON(
  createSkillsApiModel: CreateSkillsApiModel,
): string {
  return JSON.stringify(
    CreateSkillsApiModel$outboundSchema.parse(createSkillsApiModel),
  );
}

export function createSkillsApiModelFromJSON(
  jsonString: string,
): SafeParseResult<CreateSkillsApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSkillsApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSkillsApiModel' from JSON`,
  );
}
