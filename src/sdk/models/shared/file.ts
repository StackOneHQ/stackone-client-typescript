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
import {
  Content,
  Content$inboundSchema,
  Content$Outbound,
  Content$outboundSchema,
} from "./content.js";

export type File4 = {};

export type FileSourceValue = File4 | string | number | boolean | Array<any>;

/**
 * The category of the file
 */
export type FileCategory = {
  sourceValue?:
    | File4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The category of the file
   */
  value?: string | null | undefined;
};

export type FileSchemas4 = {};

export type FileSchemasSourceValue =
  | FileSchemas4
  | string
  | number
  | boolean
  | Array<any>;

/**
 * The file format of the file, expressed as a file extension
 */
export enum FileValue {
  UnmappedValue = "unmapped_value",
  Ez = "ez",
  Aw = "aw",
  Atom = "atom",
  Atomcat = "atomcat",
  Atomdeleted = "atomdeleted",
  Atomsvc = "atomsvc",
  Dwd = "dwd",
  Held = "held",
  Rsat = "rsat",
  Bdoc = "bdoc",
  Xcs = "xcs",
  Ccxml = "ccxml",
  Cdfx = "cdfx",
  Cdmia = "cdmia",
  Cdmic = "cdmic",
  Cdmid = "cdmid",
  Cdmio = "cdmio",
  Cdmiq = "cdmiq",
  Cu = "cu",
  Mpd = "mpd",
  Davmount = "davmount",
  Dbk = "dbk",
  Dssc = "dssc",
  Xdssc = "xdssc",
  Es = "es",
  Ecma = "ecma",
  Emma = "emma",
  Emotionml = "emotionml",
  Epub = "epub",
  Exi = "exi",
  Exp = "exp",
  Fdt = "fdt",
  Pfr = "pfr",
  Geojson = "geojson",
  Gml = "gml",
  Gpx = "gpx",
  Gxf = "gxf",
  Gz = "gz",
  Hjson = "hjson",
  Stk = "stk",
  Ink = "ink",
  Inkml = "inkml",
  Ipfix = "ipfix",
  Its = "its",
  Jar = "jar",
  War = "war",
  Ear = "ear",
  Ser = "ser",
  Class = "class",
  Js = "js",
  Mjs = "mjs",
  Json = "json",
  Map = "map",
  Json5 = "json5",
  Jsonml = "jsonml",
  Jsonld = "jsonld",
  Lgr = "lgr",
  Lostxml = "lostxml",
  Hqx = "hqx",
  Cpt = "cpt",
  Mads = "mads",
  Webmanifest = "webmanifest",
  Mrc = "mrc",
  Mrcx = "mrcx",
  Ma = "ma",
  Nb = "nb",
  Mb = "mb",
  Mathml = "mathml",
  Mbox = "mbox",
  Mscml = "mscml",
  Metalink = "metalink",
  Meta4 = "meta4",
  Mets = "mets",
  Maei = "maei",
  Musd = "musd",
  Mods = "mods",
  M21 = "m21",
  Mp21 = "mp21",
  Mp4s = "mp4s",
  M4p = "m4p",
  Doc = "doc",
  Dot = "dot",
  Mxf = "mxf",
  Nq = "nq",
  Nt = "nt",
  Cjs = "cjs",
  Bin = "bin",
  Dms = "dms",
  Lrf = "lrf",
  Mar = "mar",
  So = "so",
  Dist = "dist",
  Distz = "distz",
  Pkg = "pkg",
  Bpk = "bpk",
  Dump = "dump",
  Elc = "elc",
  Deploy = "deploy",
  Exe = "exe",
  Dll = "dll",
  Deb = "deb",
  Dmg = "dmg",
  Iso = "iso",
  Img = "img",
  Msi = "msi",
  Msp = "msp",
  Msm = "msm",
  Buffer = "buffer",
  Oda = "oda",
  Opf = "opf",
  Ogx = "ogx",
  Omdoc = "omdoc",
  Onetoc = "onetoc",
  Onetoc2 = "onetoc2",
  Onetmp = "onetmp",
  Onepkg = "onepkg",
  Oxps = "oxps",
  Relo = "relo",
  Xer = "xer",
  Pdf = "pdf",
  Pgp = "pgp",
  Asc = "asc",
  Sig = "sig",
  Prf = "prf",
  P10 = "p10",
  P7m = "p7m",
  P7c = "p7c",
  P7s = "p7s",
  P8 = "p8",
  Ac = "ac",
  Cer = "cer",
  Crl = "crl",
  Pkipath = "pkipath",
  Pki = "pki",
  Pls = "pls",
  Ai = "ai",
  Eps = "eps",
  Ps = "ps",
  Provx = "provx",
  Pskcxml = "pskcxml",
  Raml = "raml",
  Rdf = "rdf",
  Owl = "owl",
  Rif = "rif",
  Rnc = "rnc",
  Rl = "rl",
  Rld = "rld",
  Rs = "rs",
  Rapd = "rapd",
  Sls = "sls",
  Rusd = "rusd",
  Gbr = "gbr",
  Mft = "mft",
  Roa = "roa",
  Rsd = "rsd",
  Rss = "rss",
  Rtf = "rtf",
  Sbml = "sbml",
  Scq = "scq",
  Scs = "scs",
  Spq = "spq",
  Spp = "spp",
  Sdp = "sdp",
  Senmlx = "senmlx",
  Sensmlx = "sensmlx",
  Setpay = "setpay",
  Setreg = "setreg",
  Shf = "shf",
  Siv = "siv",
  Sieve = "sieve",
  Smi = "smi",
  Smil = "smil",
  Rq = "rq",
  Srx = "srx",
  Gram = "gram",
  Grxml = "grxml",
  Sru = "sru",
  Ssdl = "ssdl",
  Ssml = "ssml",
  Swidtag = "swidtag",
  Tei = "tei",
  Teicorpus = "teicorpus",
  Tfi = "tfi",
  Tsd = "tsd",
  Toml = "toml",
  Trig = "trig",
  Ttml = "ttml",
  Ubj = "ubj",
  Rsheet = "rsheet",
  Td = "td",
  Vxml = "vxml",
  Wasm = "wasm",
  Wgt = "wgt",
  Hlp = "hlp",
  Wsdl = "wsdl",
  Wspolicy = "wspolicy",
  Xaml = "xaml",
  Xav = "xav",
  Xca = "xca",
  Xdf = "xdf",
  Xel = "xel",
  Xns = "xns",
  Xenc = "xenc",
  Xhtml = "xhtml",
  Xht = "xht",
  Xlf = "xlf",
  Xml = "xml",
  Xsl = "xsl",
  Xsd = "xsd",
  Rng = "rng",
  Dtd = "dtd",
  Xop = "xop",
  Xpl = "xpl",
  WildcardXsl = "*xsl",
  Xslt = "xslt",
  Xspf = "xspf",
  Mxml = "mxml",
  Xhvml = "xhvml",
  Xvml = "xvml",
  Xvm = "xvm",
  Yang = "yang",
  Yin = "yin",
  Zip = "zip",
  Wildcard3gpp = "*3gpp",
  Adp = "adp",
  Amr = "amr",
  Au = "au",
  Snd = "snd",
  Mid = "mid",
  Midi = "midi",
  Kar = "kar",
  Rmi = "rmi",
  Mxmf = "mxmf",
  WildcardMp3 = "*mp3",
  M4a = "m4a",
  Mp4a = "mp4a",
  Mpga = "mpga",
  Mp2 = "mp2",
  Mp2a = "mp2a",
  Mp3 = "mp3",
  M2a = "m2a",
  M3a = "m3a",
  Oga = "oga",
  Ogg = "ogg",
  Spx = "spx",
  Opus = "opus",
  S3m = "s3m",
  Sil = "sil",
  Wav = "wav",
  WildcardWav = "*wav",
  Weba = "weba",
  Xm = "xm",
  Ttc = "ttc",
  Otf = "otf",
  Ttf = "ttf",
  Woff = "woff",
  Woff2 = "woff2",
  Exr = "exr",
  Apng = "apng",
  Avif = "avif",
  Bmp = "bmp",
  Cgm = "cgm",
  Drle = "drle",
  Emf = "emf",
  Fits = "fits",
  G3 = "g3",
  Gif = "gif",
  Heic = "heic",
  Heics = "heics",
  Heif = "heif",
  Heifs = "heifs",
  Hej2 = "hej2",
  Hsj2 = "hsj2",
  Ief = "ief",
  Jls = "jls",
  Jp2 = "jp2",
  Jpg2 = "jpg2",
  Jpeg = "jpeg",
  Jpg = "jpg",
  Jpe = "jpe",
  Jph = "jph",
  Jhc = "jhc",
  Jpm = "jpm",
  Jpx = "jpx",
  Jpf = "jpf",
  Jxr = "jxr",
  Jxra = "jxra",
  Jxrs = "jxrs",
  Jxs = "jxs",
  Jxsc = "jxsc",
  Jxsi = "jxsi",
  Jxss = "jxss",
  Ktx = "ktx",
  Ktx2 = "ktx2",
  Png = "png",
  Sgi = "sgi",
  Svg = "svg",
  Svgz = "svgz",
  T38 = "t38",
  Tif = "tif",
  Tiff = "tiff",
  Tfx = "tfx",
  Webp = "webp",
  Wmf = "wmf",
  DispositionNotification = "disposition-notification",
  U8msg = "u8msg",
  U8dsn = "u8dsn",
  U8mdn = "u8mdn",
  U8hdr = "u8hdr",
  Eml = "eml",
  Mime = "mime",
  Threemf = "3mf",
  Gltf = "gltf",
  Glb = "glb",
  Igs = "igs",
  Iges = "iges",
  Msh = "msh",
  Mesh = "mesh",
  Silo = "silo",
  Mtl = "mtl",
  Obj = "obj",
  Stpx = "stpx",
  Stpz = "stpz",
  Stpxz = "stpxz",
  Stl = "stl",
  Wrl = "wrl",
  Vrml = "vrml",
  WildcardX3db = "*x3db",
  X3dbz = "x3dbz",
  X3db = "x3db",
  WildcardX3dv = "*x3dv",
  X3dvz = "x3dvz",
  X3d = "x3d",
  X3dz = "x3dz",
  X3dv = "x3dv",
  Appcache = "appcache",
  Manifest = "manifest",
  Ics = "ics",
  Ifb = "ifb",
  Coffee = "coffee",
  Litcoffee = "litcoffee",
  Css = "css",
  Csv = "csv",
  Html = "html",
  Htm = "htm",
  Shtml = "shtml",
  Jade = "jade",
  Jsx = "jsx",
  Less = "less",
  Markdown = "markdown",
  Md = "md",
  Mml = "mml",
  Mdx = "mdx",
  N3 = "n3",
  Txt = "txt",
  Text = "text",
  Conf = "conf",
  Def = "def",
  List = "list",
  Log = "log",
  In = "in",
  Ini = "ini",
  Rtx = "rtx",
  WildcardRtf = "*rtf",
  Sgml = "sgml",
  Sgm = "sgm",
  Shex = "shex",
  Slim = "slim",
  Slm = "slm",
  Spdx = "spdx",
  Stylus = "stylus",
  Styl = "styl",
  Tsv = "tsv",
  T = "t",
  Tr = "tr",
  Roff = "roff",
  Man = "man",
  Me = "me",
  Ms = "ms",
  Ttl = "ttl",
  Uri = "uri",
  Uris = "uris",
  Urls = "urls",
  Vcard = "vcard",
  Vtt = "vtt",
  WildcardXml = "*xml",
  Yaml = "yaml",
  Yml = "yml",
  Threegp = "3gp",
  Threegpp = "3gpp",
  Threeg2 = "3g2",
  H261 = "h261",
  H263 = "h263",
  H264 = "h264",
  M4s = "m4s",
  Jpgv = "jpgv",
  WildcardJpm = "*jpm",
  Jpgm = "jpgm",
  Mj2 = "mj2",
  Mjp2 = "mjp2",
  Ts = "ts",
  Mp4 = "mp4",
  Mp4v = "mp4v",
  Mpg4 = "mpg4",
  Mpeg = "mpeg",
  Mpg = "mpg",
  Mpe = "mpe",
  M1v = "m1v",
  M2v = "m2v",
  Ogv = "ogv",
  Qt = "qt",
  Mov = "mov",
  Webm = "webm",
  Cww = "cww",
  Onekm = "1km",
  Plb = "plb",
  Psb = "psb",
  Pvb = "pvb",
  Tcap = "tcap",
  Pwn = "pwn",
  Aso = "aso",
  Imp = "imp",
  Acu = "acu",
  Atc = "atc",
  Acutc = "acutc",
  Air = "air",
  Fcdt = "fcdt",
  Fxp = "fxp",
  Fxpl = "fxpl",
  Xdp = "xdp",
  Xfdf = "xfdf",
  Ahead = "ahead",
  Azf = "azf",
  Azs = "azs",
  Azw = "azw",
  Acc = "acc",
  Ami = "ami",
  Apk = "apk",
  Cii = "cii",
  Fti = "fti",
  Atx = "atx",
  Mpkg = "mpkg",
  Key = "key",
  M3u8 = "m3u8",
  Numbers = "numbers",
  Pages = "pages",
  Pkpass = "pkpass",
  Swi = "swi",
  Iota = "iota",
  Aep = "aep",
  Bmml = "bmml",
  Mpm = "mpm",
  Bmi = "bmi",
  Rep = "rep",
  Cdxml = "cdxml",
  Mmd = "mmd",
  Cdy = "cdy",
  Csl = "csl",
  Cla = "cla",
  Rp9 = "rp9",
  C4g = "c4g",
  C4d = "c4d",
  C4f = "c4f",
  C4p = "c4p",
  C4u = "c4u",
  C11amc = "c11amc",
  C11amz = "c11amz",
  Csp = "csp",
  Cdbcmsg = "cdbcmsg",
  Cmc = "cmc",
  Clkx = "clkx",
  Clkk = "clkk",
  Clkp = "clkp",
  Clkt = "clkt",
  Clkw = "clkw",
  Wbs = "wbs",
  Pml = "pml",
  Ppd = "ppd",
  Car = "car",
  Pcurl = "pcurl",
  Dart = "dart",
  Rdz = "rdz",
  Dbf = "dbf",
  Uvf = "uvf",
  Uvvf = "uvvf",
  Uvd = "uvd",
  Uvvd = "uvvd",
  Uvt = "uvt",
  Uvvt = "uvvt",
  Uvx = "uvx",
  Uvvx = "uvvx",
  Uvz = "uvz",
  Uvvz = "uvvz",
  FeLaunch = "fe_launch",
  Dna = "dna",
  Mlp = "mlp",
  Mle = "mle",
  Dpg = "dpg",
  Dfac = "dfac",
  Kpxx = "kpxx",
  Ait = "ait",
  Svc = "svc",
  Geo = "geo",
  Mag = "mag",
  Nml = "nml",
  Esf = "esf",
  Msf = "msf",
  Qam = "qam",
  Slt = "slt",
  Ssf = "ssf",
  Es3 = "es3",
  Et3 = "et3",
  Ez2 = "ez2",
  Ez3 = "ez3",
  Fdf = "fdf",
  Mseed = "mseed",
  Seed = "seed",
  Dataless = "dataless",
  Gph = "gph",
  Ftc = "ftc",
  Fm = "fm",
  Frame = "frame",
  Maker = "maker",
  Book = "book",
  Fnc = "fnc",
  Ltf = "ltf",
  Fsc = "fsc",
  Oas = "oas",
  Oa2 = "oa2",
  Oa3 = "oa3",
  Fg5 = "fg5",
  Bh2 = "bh2",
  Ddd = "ddd",
  Xdw = "xdw",
  Xbd = "xbd",
  Fzs = "fzs",
  Txd = "txd",
  Ggb = "ggb",
  Ggt = "ggt",
  Gex = "gex",
  Gre = "gre",
  Gxt = "gxt",
  G2w = "g2w",
  G3w = "g3w",
  Gmx = "gmx",
  Gdoc = "gdoc",
  Gslides = "gslides",
  Gsheet = "gsheet",
  Kml = "kml",
  Kmz = "kmz",
  Gqf = "gqf",
  Gqs = "gqs",
  Gac = "gac",
  Ghf = "ghf",
  Gim = "gim",
  Grv = "grv",
  Gtm = "gtm",
  Tpl = "tpl",
  Vcg = "vcg",
  Hal = "hal",
  Zmm = "zmm",
  Hbci = "hbci",
  Les = "les",
  Hpgl = "hpgl",
  Hpid = "hpid",
  Hps = "hps",
  Jlt = "jlt",
  Pcl = "pcl",
  Pclxl = "pclxl",
  SfdHdstx = "sfd-hdstx",
  Mpy = "mpy",
  Afp = "afp",
  Listafp = "listafp",
  List3820 = "list3820",
  Irm = "irm",
  Sc = "sc",
  Icc = "icc",
  Icm = "icm",
  Igl = "igl",
  Ivp = "ivp",
  Ivu = "ivu",
  Igm = "igm",
  Xpw = "xpw",
  Xpx = "xpx",
  I2g = "i2g",
  Qbo = "qbo",
  Qfx = "qfx",
  Rcprofile = "rcprofile",
  Irp = "irp",
  Xpr = "xpr",
  Fcs = "fcs",
  Jam = "jam",
  Rms = "rms",
  Jisp = "jisp",
  Joda = "joda",
  Ktz = "ktz",
  Ktr = "ktr",
  Karbon = "karbon",
  Chrt = "chrt",
  Kfo = "kfo",
  Flw = "flw",
  Kon = "kon",
  Kpr = "kpr",
  Kpt = "kpt",
  Ksp = "ksp",
  Kwd = "kwd",
  Kwt = "kwt",
  Htke = "htke",
  Kia = "kia",
  Kne = "kne",
  Knp = "knp",
  Skp = "skp",
  Skd = "skd",
  Skt = "skt",
  Skm = "skm",
  Sse = "sse",
  Lasxml = "lasxml",
  Lbd = "lbd",
  Lbe = "lbe",
  Apr = "apr",
  Pre = "pre",
  Nsf = "nsf",
  Org = "org",
  Scm = "scm",
  Lwp = "lwp",
  Portpkg = "portpkg",
  Mvt = "mvt",
  Mcd = "mcd",
  Mc1 = "mc1",
  Cdkey = "cdkey",
  Mwf = "mwf",
  Mfm = "mfm",
  Flo = "flo",
  Igx = "igx",
  Mif = "mif",
  Daf = "daf",
  Dis = "dis",
  Mbk = "mbk",
  Mqy = "mqy",
  Msl = "msl",
  Plc = "plc",
  Txf = "txf",
  Mpn = "mpn",
  Mpc = "mpc",
  Xul = "xul",
  Cil = "cil",
  Cab = "cab",
  Xls = "xls",
  Xlm = "xlm",
  Xla = "xla",
  Xlc = "xlc",
  Xlt = "xlt",
  Xlw = "xlw",
  Xlam = "xlam",
  Xlsb = "xlsb",
  Xlsm = "xlsm",
  Xltm = "xltm",
  Eot = "eot",
  Chm = "chm",
  Ims = "ims",
  Lrm = "lrm",
  Thmx = "thmx",
  Msg = "msg",
  Cat = "cat",
  WildcardStl = "*stl",
  Ppt = "ppt",
  Pps = "pps",
  Pot = "pot",
  Ppam = "ppam",
  Pptm = "pptm",
  Sldm = "sldm",
  Ppsm = "ppsm",
  Potm = "potm",
  Mpp = "mpp",
  Mpt = "mpt",
  Docm = "docm",
  Dotm = "dotm",
  Wps = "wps",
  Wks = "wks",
  Wcm = "wcm",
  Wdb = "wdb",
  Wpl = "wpl",
  Xps = "xps",
  Mseq = "mseq",
  Mus = "mus",
  Msty = "msty",
  Taglet = "taglet",
  Nlu = "nlu",
  Ntf = "ntf",
  Nitf = "nitf",
  Nnd = "nnd",
  Nns = "nns",
  Nnw = "nnw",
  WildcardAc = "*ac",
  Ngdat = "ngdat",
  NGage = "n-gage",
  Rpst = "rpst",
  Rpss = "rpss",
  Edm = "edm",
  Edx = "edx",
  Ext = "ext",
  Odc = "odc",
  Otc = "otc",
  Odb = "odb",
  Odf = "odf",
  Odft = "odft",
  Odg = "odg",
  Otg = "otg",
  Odi = "odi",
  Oti = "oti",
  Odp = "odp",
  Otp = "otp",
  Ods = "ods",
  Ots = "ots",
  Odt = "odt",
  Odm = "odm",
  Ott = "ott",
  Oth = "oth",
  Xo = "xo",
  Dd2 = "dd2",
  Obgx = "obgx",
  Oxt = "oxt",
  Osm = "osm",
  Pptx = "pptx",
  Sldx = "sldx",
  Ppsx = "ppsx",
  Potx = "potx",
  Xlsx = "xlsx",
  Xltx = "xltx",
  Docx = "docx",
  Dotx = "dotx",
  Mgp = "mgp",
  Dp = "dp",
  Esa = "esa",
  Pdb = "pdb",
  Pqa = "pqa",
  Oprc = "oprc",
  Paw = "paw",
  Str = "str",
  Ei6 = "ei6",
  Efif = "efif",
  Wg = "wg",
  Plf = "plf",
  Pbd = "pbd",
  Box = "box",
  Mgz = "mgz",
  Qps = "qps",
  Ptid = "ptid",
  Qxd = "qxd",
  Qxt = "qxt",
  Qwd = "qwd",
  Qwt = "qwt",
  Qxl = "qxl",
  Qxb = "qxb",
  Rar = "rar",
  Bed = "bed",
  Mxl = "mxl",
  Musicxml = "musicxml",
  Cryptonote = "cryptonote",
  Cod = "cod",
  Rm = "rm",
  Rmvb = "rmvb",
  Link66 = "link66",
  St = "st",
  See = "see",
  Sema = "sema",
  Semd = "semd",
  Semf = "semf",
  Ifm = "ifm",
  Itp = "itp",
  Iif = "iif",
  Ipk = "ipk",
  Twd = "twd",
  Twds = "twds",
  Mmf = "mmf",
  Teacher = "teacher",
  Fo = "fo",
  Sdkm = "sdkm",
  Sdkd = "sdkd",
  Dxp = "dxp",
  Sfs = "sfs",
  Sdc = "sdc",
  Sda = "sda",
  Sdd = "sdd",
  Smf = "smf",
  Sdw = "sdw",
  Vor = "vor",
  Sgl = "sgl",
  Smzip = "smzip",
  Sm = "sm",
  Wadl = "wadl",
  Sxc = "sxc",
  Stc = "stc",
  Sxd = "sxd",
  Std = "std",
  Sxi = "sxi",
  Sti = "sti",
  Sxm = "sxm",
  Sxw = "sxw",
  Sxg = "sxg",
  Stw = "stw",
  Sus = "sus",
  Susp = "susp",
  Svd = "svd",
  Sis = "sis",
  Sisx = "sisx",
  Xsm = "xsm",
  Bdm = "bdm",
  Xdm = "xdm",
  Ddf = "ddf",
  Tao = "tao",
  Pcap = "pcap",
  Cap = "cap",
  Dmp = "dmp",
  Tmo = "tmo",
  Tpt = "tpt",
  Mxs = "mxs",
  Tra = "tra",
  Ufd = "ufd",
  Ufdl = "ufdl",
  Utz = "utz",
  Umj = "umj",
  Unityweb = "unityweb",
  Uoml = "uoml",
  Vcx = "vcx",
  Vsd = "vsd",
  Vst = "vst",
  Vss = "vss",
  Vsw = "vsw",
  Vis = "vis",
  Vsf = "vsf",
  Wbxml = "wbxml",
  Wmlc = "wmlc",
  Wmlsc = "wmlsc",
  Wtb = "wtb",
  Nbp = "nbp",
  Wpd = "wpd",
  Wqd = "wqd",
  Stf = "stf",
  Xar = "xar",
  Xfdl = "xfdl",
  Hvd = "hvd",
  Hvs = "hvs",
  Hvp = "hvp",
  Osf = "osf",
  Osfpvg = "osfpvg",
  Saf = "saf",
  Spf = "spf",
  Cmp = "cmp",
  Zir = "zir",
  Zirz = "zirz",
  Zaz = "zaz",
  Sevenz = "7z",
  Abw = "abw",
  Ace = "ace",
  WildcardDmg = "*dmg",
  Arj = "arj",
  Aab = "aab",
  X32 = "x32",
  U32 = "u32",
  Vox = "vox",
  Aam = "aam",
  Aas = "aas",
  Bcpio = "bcpio",
  WildcardBdoc = "*bdoc",
  Torrent = "torrent",
  Blb = "blb",
  Blorb = "blorb",
  Bz = "bz",
  Bz2 = "bz2",
  Boz = "boz",
  Cbr = "cbr",
  Cba = "cba",
  Cbt = "cbt",
  Cbz = "cbz",
  Cb7 = "cb7",
  Vcd = "vcd",
  Cfs = "cfs",
  Chat = "chat",
  Pgn = "pgn",
  Crx = "crx",
  Cco = "cco",
  Nsc = "nsc",
  Cpio = "cpio",
  Csh = "csh",
  WildcardDeb = "*deb",
  Udeb = "udeb",
  Dgc = "dgc",
  Dir = "dir",
  Dcr = "dcr",
  Dxr = "dxr",
  Cst = "cst",
  Cct = "cct",
  Cxt = "cxt",
  W3d = "w3d",
  Fgd = "fgd",
  Swa = "swa",
  Wad = "wad",
  Ncx = "ncx",
  Dtb = "dtb",
  Res = "res",
  Dvi = "dvi",
  Evy = "evy",
  Eva = "eva",
  Bdf = "bdf",
  Gsf = "gsf",
  Psf = "psf",
  Pcf = "pcf",
  Snf = "snf",
  Pfa = "pfa",
  Pfb = "pfb",
  Pfm = "pfm",
  Afm = "afm",
  Arc = "arc",
  Spl = "spl",
  Gca = "gca",
  Ulx = "ulx",
  Gnumeric = "gnumeric",
  Gramps = "gramps",
  Gtar = "gtar",
  Hdf = "hdf",
  Php = "php",
  Install = "install",
  WildcardIso = "*iso",
  WildcardKey = "*key",
  WildcardNumbers = "*numbers",
  WildcardPages = "*pages",
  Jardiff = "jardiff",
  Jnlp = "jnlp",
  Kdbx = "kdbx",
  Latex = "latex",
  Luac = "luac",
  Lzh = "lzh",
  Lha = "lha",
  Run = "run",
  Mie = "mie",
  Prc = "prc",
  Mobi = "mobi",
  Application = "application",
  Lnk = "lnk",
  Wmd = "wmd",
  Wmz = "wmz",
  Xbap = "xbap",
  Mdb = "mdb",
  Obd = "obd",
  Crd = "crd",
  Clp = "clp",
  WildcardExe = "*exe",
  WildcardDll = "*dll",
  Com = "com",
  Bat = "bat",
  WildcardMsi = "*msi",
  Mvb = "mvb",
  M13 = "m13",
  M14 = "m14",
  WildcardWmf = "*wmf",
  WildcardWmz = "*wmz",
  WildcardEmf = "*emf",
  Emz = "emz",
  Mny = "mny",
  Pub = "pub",
  Scd = "scd",
  Trm = "trm",
  Wri = "wri",
  Nc = "nc",
  Cdf = "cdf",
  Pac = "pac",
  Nzb = "nzb",
  Pl = "pl",
  Pm = "pm",
  WildcardPrc = "*prc",
  WildcardPdb = "*pdb",
  P12 = "p12",
  Pfx = "pfx",
  P7b = "p7b",
  Spc = "spc",
  P7r = "p7r",
  WildcardRar = "*rar",
  Rpm = "rpm",
  Ris = "ris",
  Sea = "sea",
  Sh = "sh",
  Shar = "shar",
  Swf = "swf",
  Xap = "xap",
  Sql = "sql",
  Sit = "sit",
  Sitx = "sitx",
  Srt = "srt",
  Sv4cpio = "sv4cpio",
  Sv4crc = "sv4crc",
  T3 = "t3",
  Gam = "gam",
  Tar = "tar",
  Tcl = "tcl",
  Tk = "tk",
  Tex = "tex",
  Tfm = "tfm",
  Texinfo = "texinfo",
  Texi = "texi",
  WildcardObj = "*obj",
  Ustar = "ustar",
  Hdd = "hdd",
  Ova = "ova",
  Ovf = "ovf",
  Vbox = "vbox",
  VboxExtpack = "vbox-extpack",
  Vdi = "vdi",
  Vhd = "vhd",
  Vmdk = "vmdk",
  Src = "src",
  Webapp = "webapp",
  Der = "der",
  Crt = "crt",
  Pem = "pem",
  Fig = "fig",
  WildcardXlf = "*xlf",
  Xpi = "xpi",
  Xz = "xz",
  Z1 = "z1",
  Z2 = "z2",
  Z3 = "z3",
  Z4 = "z4",
  Z5 = "z5",
  Z6 = "z6",
  Z7 = "z7",
  Z8 = "z8",
  Uva = "uva",
  Uvva = "uvva",
  Eol = "eol",
  Dra = "dra",
  Dts = "dts",
  Dtshd = "dtshd",
  Lvp = "lvp",
  Pya = "pya",
  Ecelp4800 = "ecelp4800",
  Ecelp7470 = "ecelp7470",
  Ecelp9600 = "ecelp9600",
  Rip = "rip",
  Aac = "aac",
  Aif = "aif",
  Aiff = "aiff",
  Aifc = "aifc",
  Caf = "caf",
  Flac = "flac",
  WildcardM4a = "*m4a",
  Mka = "mka",
  M3u = "m3u",
  Wax = "wax",
  Wma = "wma",
  Ram = "ram",
  Ra = "ra",
  Rmp = "rmp",
  WildcardRa = "*ra",
  Cdx = "cdx",
  Cif = "cif",
  Cmdf = "cmdf",
  Cml = "cml",
  Csml = "csml",
  Xyz = "xyz",
  Btif = "btif",
  Pti = "pti",
  Psd = "psd",
  Azv = "azv",
  Uvi = "uvi",
  Uvvi = "uvvi",
  Uvg = "uvg",
  Uvvg = "uvvg",
  Djvu = "djvu",
  Djv = "djv",
  WildcardSub = "*sub",
  Dwg = "dwg",
  Dxf = "dxf",
  Fbs = "fbs",
  Fpx = "fpx",
  Fst = "fst",
  Mmr = "mmr",
  Rlc = "rlc",
  Ico = "ico",
  Dds = "dds",
  Mdi = "mdi",
  Wdp = "wdp",
  Npx = "npx",
  B16 = "b16",
  Tap = "tap",
  Vtf = "vtf",
  Wbmp = "wbmp",
  Xif = "xif",
  Pcx = "pcx",
  Threeds = "3ds",
  Ras = "ras",
  Cmx = "cmx",
  Fh = "fh",
  Fhc = "fhc",
  Fh4 = "fh4",
  Fh5 = "fh5",
  Fh7 = "fh7",
  WildcardIco = "*ico",
  Jng = "jng",
  Sid = "sid",
  WildcardBmp = "*bmp",
  WildcardPcx = "*pcx",
  Pic = "pic",
  Pct = "pct",
  Pnm = "pnm",
  Pbm = "pbm",
  Pgm = "pgm",
  Ppm = "ppm",
  Rgb = "rgb",
  Tga = "tga",
  Xbm = "xbm",
  Xpm = "xpm",
  Xwd = "xwd",
  Wsc = "wsc",
  Dae = "dae",
  Dwf = "dwf",
  Gdl = "gdl",
  Gtw = "gtw",
  Mts = "mts",
  Ogex = "ogex",
  XB = "x_b",
  XT = "x_t",
  Vds = "vds",
  Usdz = "usdz",
  Bsp = "bsp",
  Vtu = "vtu",
  Dsc = "dsc",
  Curl = "curl",
  Dcurl = "dcurl",
  Mcurl = "mcurl",
  Scurl = "scurl",
  Sub = "sub",
  Fly = "fly",
  Flx = "flx",
  Gv = "gv",
  Threedml = "3dml",
  Spot = "spot",
  Jad = "jad",
  Wml = "wml",
  Wmls = "wmls",
  S = "s",
  Asm = "asm",
  C = "c",
  Cc = "cc",
  Cxx = "cxx",
  Cpp = "cpp",
  H = "h",
  Hh = "hh",
  Dic = "dic",
  Htc = "htc",
  F = "f",
  For = "for",
  F77 = "f77",
  F90 = "f90",
  Hbs = "hbs",
  Java = "java",
  Lua = "lua",
  Mkd = "mkd",
  Nfo = "nfo",
  Opml = "opml",
  WildcardOrg = "*org",
  P = "p",
  Pas = "pas",
  Pde = "pde",
  Sass = "sass",
  Scss = "scss",
  Etx = "etx",
  Sfv = "sfv",
  Ymp = "ymp",
  Uu = "uu",
  Vcs = "vcs",
  Vcf = "vcf",
  Uvh = "uvh",
  Uvvh = "uvvh",
  Uvm = "uvm",
  Uvvm = "uvvm",
  Uvp = "uvp",
  Uvvp = "uvvp",
  Uvs = "uvs",
  Uvvs = "uvvs",
  Uvv = "uvv",
  Uvvv = "uvvv",
  Dvb = "dvb",
  Fvt = "fvt",
  Mxu = "mxu",
  M4u = "m4u",
  Pyv = "pyv",
  Uvu = "uvu",
  Uvvu = "uvvu",
  Viv = "viv",
  F4v = "f4v",
  Fli = "fli",
  Flv = "flv",
  M4v = "m4v",
  Mkv = "mkv",
  Mk3d = "mk3d",
  Mks = "mks",
  Mng = "mng",
  Asf = "asf",
  Asx = "asx",
  Vob = "vob",
  Wm = "wm",
  Wmv = "wmv",
  Wmx = "wmx",
  Wvx = "wvx",
  Avi = "avi",
  Movie = "movie",
  Smv = "smv",
  Ice = "ice",
  Mht = "mht",
}
/**
 * The file format of the file, expressed as a file extension
 */
export type FileValueOpen = OpenEnum<typeof FileValue>;

/**
 * The file format of the file
 */
export type FileFileFormat = {
  sourceValue?:
    | FileSchemas4
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  /**
   * The file format of the file, expressed as a file extension
   */
  value?: FileValueOpen | null | undefined;
};

export type FileT = {
  /**
   * The category of the file
   */
  category?: FileCategory | null | undefined;
  /**
   * The categoryId of the documents
   */
  categoryId?: string | null | undefined;
  /**
   * The content of the file. Deprecated, use `url` and `file_format` one level up instead
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  contents?: Array<Content> | null | undefined;
  /**
   * The creation date of the file
   */
  createdAt?: Date | null | undefined;
  /**
   * The file format of the file
   */
  fileFormat?: FileFileFormat | null | undefined;
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
   * URL where the file content is located
   */
  remoteUrl?: string | null | undefined;
  /**
   * The update date of the file
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const File4$inboundSchema: z.ZodType<File4, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type File4$Outbound = {};

/** @internal */
export const File4$outboundSchema: z.ZodType<
  File4$Outbound,
  z.ZodTypeDef,
  File4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace File4$ {
  /** @deprecated use `File4$inboundSchema` instead. */
  export const inboundSchema = File4$inboundSchema;
  /** @deprecated use `File4$outboundSchema` instead. */
  export const outboundSchema = File4$outboundSchema;
  /** @deprecated use `File4$Outbound` instead. */
  export type Outbound = File4$Outbound;
}

export function file4ToJSON(file4: File4): string {
  return JSON.stringify(File4$outboundSchema.parse(file4));
}

export function file4FromJSON(
  jsonString: string,
): SafeParseResult<File4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => File4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'File4' from JSON`,
  );
}

/** @internal */
export const FileSourceValue$inboundSchema: z.ZodType<
  FileSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => File4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type FileSourceValue$Outbound =
  | File4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const FileSourceValue$outboundSchema: z.ZodType<
  FileSourceValue$Outbound,
  z.ZodTypeDef,
  FileSourceValue
> = z.union([
  z.lazy(() => File4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileSourceValue$ {
  /** @deprecated use `FileSourceValue$inboundSchema` instead. */
  export const inboundSchema = FileSourceValue$inboundSchema;
  /** @deprecated use `FileSourceValue$outboundSchema` instead. */
  export const outboundSchema = FileSourceValue$outboundSchema;
  /** @deprecated use `FileSourceValue$Outbound` instead. */
  export type Outbound = FileSourceValue$Outbound;
}

export function fileSourceValueToJSON(
  fileSourceValue: FileSourceValue,
): string {
  return JSON.stringify(FileSourceValue$outboundSchema.parse(fileSourceValue));
}

export function fileSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<FileSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileSourceValue' from JSON`,
  );
}

/** @internal */
export const FileCategory$inboundSchema: z.ZodType<
  FileCategory,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => File4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type FileCategory$Outbound = {
  source_value?:
    | File4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const FileCategory$outboundSchema: z.ZodType<
  FileCategory$Outbound,
  z.ZodTypeDef,
  FileCategory
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => File4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileCategory$ {
  /** @deprecated use `FileCategory$inboundSchema` instead. */
  export const inboundSchema = FileCategory$inboundSchema;
  /** @deprecated use `FileCategory$outboundSchema` instead. */
  export const outboundSchema = FileCategory$outboundSchema;
  /** @deprecated use `FileCategory$Outbound` instead. */
  export type Outbound = FileCategory$Outbound;
}

export function fileCategoryToJSON(fileCategory: FileCategory): string {
  return JSON.stringify(FileCategory$outboundSchema.parse(fileCategory));
}

export function fileCategoryFromJSON(
  jsonString: string,
): SafeParseResult<FileCategory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileCategory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileCategory' from JSON`,
  );
}

/** @internal */
export const FileSchemas4$inboundSchema: z.ZodType<
  FileSchemas4,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type FileSchemas4$Outbound = {};

/** @internal */
export const FileSchemas4$outboundSchema: z.ZodType<
  FileSchemas4$Outbound,
  z.ZodTypeDef,
  FileSchemas4
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileSchemas4$ {
  /** @deprecated use `FileSchemas4$inboundSchema` instead. */
  export const inboundSchema = FileSchemas4$inboundSchema;
  /** @deprecated use `FileSchemas4$outboundSchema` instead. */
  export const outboundSchema = FileSchemas4$outboundSchema;
  /** @deprecated use `FileSchemas4$Outbound` instead. */
  export type Outbound = FileSchemas4$Outbound;
}

export function fileSchemas4ToJSON(fileSchemas4: FileSchemas4): string {
  return JSON.stringify(FileSchemas4$outboundSchema.parse(fileSchemas4));
}

export function fileSchemas4FromJSON(
  jsonString: string,
): SafeParseResult<FileSchemas4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileSchemas4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileSchemas4' from JSON`,
  );
}

/** @internal */
export const FileSchemasSourceValue$inboundSchema: z.ZodType<
  FileSchemasSourceValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => FileSchemas4$inboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/** @internal */
export type FileSchemasSourceValue$Outbound =
  | FileSchemas4$Outbound
  | string
  | number
  | boolean
  | Array<any>;

/** @internal */
export const FileSchemasSourceValue$outboundSchema: z.ZodType<
  FileSchemasSourceValue$Outbound,
  z.ZodTypeDef,
  FileSchemasSourceValue
> = z.union([
  z.lazy(() => FileSchemas4$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileSchemasSourceValue$ {
  /** @deprecated use `FileSchemasSourceValue$inboundSchema` instead. */
  export const inboundSchema = FileSchemasSourceValue$inboundSchema;
  /** @deprecated use `FileSchemasSourceValue$outboundSchema` instead. */
  export const outboundSchema = FileSchemasSourceValue$outboundSchema;
  /** @deprecated use `FileSchemasSourceValue$Outbound` instead. */
  export type Outbound = FileSchemasSourceValue$Outbound;
}

export function fileSchemasSourceValueToJSON(
  fileSchemasSourceValue: FileSchemasSourceValue,
): string {
  return JSON.stringify(
    FileSchemasSourceValue$outboundSchema.parse(fileSchemasSourceValue),
  );
}

export function fileSchemasSourceValueFromJSON(
  jsonString: string,
): SafeParseResult<FileSchemasSourceValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileSchemasSourceValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileSchemasSourceValue' from JSON`,
  );
}

/** @internal */
export const FileValue$inboundSchema: z.ZodType<
  FileValueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(FileValue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const FileValue$outboundSchema: z.ZodType<
  FileValueOpen,
  z.ZodTypeDef,
  FileValueOpen
> = z.union([
  z.nativeEnum(FileValue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileValue$ {
  /** @deprecated use `FileValue$inboundSchema` instead. */
  export const inboundSchema = FileValue$inboundSchema;
  /** @deprecated use `FileValue$outboundSchema` instead. */
  export const outboundSchema = FileValue$outboundSchema;
}

/** @internal */
export const FileFileFormat$inboundSchema: z.ZodType<
  FileFileFormat,
  z.ZodTypeDef,
  unknown
> = z.object({
  source_value: z.nullable(
    z.union([
      z.lazy(() => FileSchemas4$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(FileValue$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "source_value": "sourceValue",
  });
});

/** @internal */
export type FileFileFormat$Outbound = {
  source_value?:
    | FileSchemas4$Outbound
    | string
    | number
    | boolean
    | Array<any>
    | null
    | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const FileFileFormat$outboundSchema: z.ZodType<
  FileFileFormat$Outbound,
  z.ZodTypeDef,
  FileFileFormat
> = z.object({
  sourceValue: z.nullable(
    z.union([
      z.lazy(() => FileSchemas4$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.any()),
    ]),
  ).optional(),
  value: z.nullable(FileValue$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    sourceValue: "source_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileFileFormat$ {
  /** @deprecated use `FileFileFormat$inboundSchema` instead. */
  export const inboundSchema = FileFileFormat$inboundSchema;
  /** @deprecated use `FileFileFormat$outboundSchema` instead. */
  export const outboundSchema = FileFileFormat$outboundSchema;
  /** @deprecated use `FileFileFormat$Outbound` instead. */
  export type Outbound = FileFileFormat$Outbound;
}

export function fileFileFormatToJSON(fileFileFormat: FileFileFormat): string {
  return JSON.stringify(FileFileFormat$outboundSchema.parse(fileFileFormat));
}

export function fileFileFormatFromJSON(
  jsonString: string,
): SafeParseResult<FileFileFormat, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileFileFormat$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileFileFormat' from JSON`,
  );
}

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    category: z.nullable(z.lazy(() => FileCategory$inboundSchema)).optional(),
    category_id: z.nullable(z.string()).optional(),
    contents: z.nullable(z.array(Content$inboundSchema)).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    file_format: z.nullable(z.lazy(() => FileFileFormat$inboundSchema))
      .optional(),
    id: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    path: z.nullable(z.string()).optional(),
    remote_id: z.nullable(z.string()).optional(),
    remote_url: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "category_id": "categoryId",
      "created_at": "createdAt",
      "file_format": "fileFormat",
      "remote_id": "remoteId",
      "remote_url": "remoteUrl",
      "updated_at": "updatedAt",
    });
  });

/** @internal */
export type FileT$Outbound = {
  category?: FileCategory$Outbound | null | undefined;
  category_id?: string | null | undefined;
  contents?: Array<Content$Outbound> | null | undefined;
  created_at?: string | null | undefined;
  file_format?: FileFileFormat$Outbound | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  path?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_url?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  category: z.nullable(z.lazy(() => FileCategory$outboundSchema)).optional(),
  categoryId: z.nullable(z.string()).optional(),
  contents: z.nullable(z.array(Content$outboundSchema)).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  fileFormat: z.nullable(z.lazy(() => FileFileFormat$outboundSchema))
    .optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  path: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteUrl: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    categoryId: "category_id",
    createdAt: "created_at",
    fileFormat: "file_format",
    remoteId: "remote_id",
    remoteUrl: "remote_url",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

export function fileToJSON(fileT: FileT): string {
  return JSON.stringify(FileT$outboundSchema.parse(fileT));
}

export function fileFromJSON(
  jsonString: string,
): SafeParseResult<FileT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileT' from JSON`,
  );
}
