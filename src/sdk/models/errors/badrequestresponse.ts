/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as shared from "../shared/index.js";
import { SDKValidationError } from "./sdkvalidationerror.js";
import { StackOneError } from "./stackoneerror.js";

/**
 * Response headers
 */
export type Headers = {};

/**
 * Error details
 */
export type Data = {
  /**
   * Response headers
   */
  headers?: Headers | null | undefined;
  /**
   * Error message
   */
  message?: string | null | undefined;
  /**
   * HTTP status code
   */
  statusCode?: number | null | undefined;
};

export type BadRequestResponseData = {
  /**
   * Error details
   */
  data?: Data | null | undefined;
  /**
   * Error message
   */
  message: string;
  /**
   * List of provider-specific errors
   */
  providerErrors?: Array<shared.ProviderError> | null | undefined;
  /**
   * HTTP status code
   */
  statusCode: number;
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;
};

export class BadRequestResponse extends StackOneError {
  /**
   * Error details
   */
  data?: Data | null | undefined;
  /**
   * List of provider-specific errors
   */
  providerErrors?: Array<shared.ProviderError> | null | undefined;
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;

  /** The original data that was passed to this error instance. */
  data$: BadRequestResponseData;

  constructor(
    err: BadRequestResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.data != null) this.data = err.data;
    if (err.providerErrors != null) this.providerErrors = err.providerErrors;
    this.timestamp = err.timestamp;

    this.name = "BadRequestResponse";
  }
}

/** @internal */
export const Headers$inboundSchema: z.ZodType<Headers, z.ZodTypeDef, unknown> =
  z.object({});

/** @internal */
export type Headers$Outbound = {};

/** @internal */
export const Headers$outboundSchema: z.ZodType<
  Headers$Outbound,
  z.ZodTypeDef,
  Headers
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Headers$ {
  /** @deprecated use `Headers$inboundSchema` instead. */
  export const inboundSchema = Headers$inboundSchema;
  /** @deprecated use `Headers$outboundSchema` instead. */
  export const outboundSchema = Headers$outboundSchema;
  /** @deprecated use `Headers$Outbound` instead. */
  export type Outbound = Headers$Outbound;
}

export function headersToJSON(headers: Headers): string {
  return JSON.stringify(Headers$outboundSchema.parse(headers));
}

export function headersFromJSON(
  jsonString: string,
): SafeParseResult<Headers, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Headers$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Headers' from JSON`,
  );
}

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    headers: z.nullable(z.lazy(() => Headers$inboundSchema)).optional(),
    message: z.nullable(z.string()).optional(),
    statusCode: z.nullable(z.number()).optional(),
  });

/** @internal */
export type Data$Outbound = {
  headers?: Headers$Outbound | null | undefined;
  message?: string | null | undefined;
  statusCode?: number | null | undefined;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    headers: z.nullable(z.lazy(() => Headers$outboundSchema)).optional(),
    message: z.nullable(z.string()).optional(),
    statusCode: z.nullable(z.number()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const BadRequestResponse$inboundSchema: z.ZodType<
  BadRequestResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.nullable(z.lazy(() => Data$inboundSchema)).optional(),
  message: z.string(),
  provider_errors: z.nullable(z.array(shared.ProviderError$inboundSchema))
    .optional(),
  statusCode: z.number(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "provider_errors": "providerErrors",
    });

    return new BadRequestResponse(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type BadRequestResponse$Outbound = {
  data?: Data$Outbound | null | undefined;
  message: string;
  provider_errors?: Array<shared.ProviderError$Outbound> | null | undefined;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const BadRequestResponse$outboundSchema: z.ZodType<
  BadRequestResponse$Outbound,
  z.ZodTypeDef,
  BadRequestResponse
> = z.instanceof(BadRequestResponse)
  .transform(v => v.data$)
  .pipe(
    z.object({
      data: z.nullable(z.lazy(() => Data$outboundSchema)).optional(),
      message: z.string(),
      providerErrors: z.nullable(z.array(shared.ProviderError$outboundSchema))
        .optional(),
      statusCode: z.number(),
      timestamp: z.date().transform(v => v.toISOString()),
    }).transform((v) => {
      return remap$(v, {
        providerErrors: "provider_errors",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequestResponse$ {
  /** @deprecated use `BadRequestResponse$inboundSchema` instead. */
  export const inboundSchema = BadRequestResponse$inboundSchema;
  /** @deprecated use `BadRequestResponse$outboundSchema` instead. */
  export const outboundSchema = BadRequestResponse$outboundSchema;
  /** @deprecated use `BadRequestResponse$Outbound` instead. */
  export type Outbound = BadRequestResponse$Outbound;
}
