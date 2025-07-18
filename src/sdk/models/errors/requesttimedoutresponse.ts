/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { StackOneError } from "./stackoneerror.js";

export type RequestTimedOutResponseData = {
  /**
   * Error message
   */
  message: string;
  /**
   * HTTP status code
   */
  statusCode: number;
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;
};

export class RequestTimedOutResponse extends StackOneError {
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;

  /** The original data that was passed to this error instance. */
  data$: RequestTimedOutResponseData;

  constructor(
    err: RequestTimedOutResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.timestamp = err.timestamp;

    this.name = "RequestTimedOutResponse";
  }
}

/** @internal */
export const RequestTimedOutResponse$inboundSchema: z.ZodType<
  RequestTimedOutResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  statusCode: z.number(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new RequestTimedOutResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type RequestTimedOutResponse$Outbound = {
  message: string;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const RequestTimedOutResponse$outboundSchema: z.ZodType<
  RequestTimedOutResponse$Outbound,
  z.ZodTypeDef,
  RequestTimedOutResponse
> = z.instanceof(RequestTimedOutResponse)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    statusCode: z.number(),
    timestamp: z.date().transform(v => v.toISOString()),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestTimedOutResponse$ {
  /** @deprecated use `RequestTimedOutResponse$inboundSchema` instead. */
  export const inboundSchema = RequestTimedOutResponse$inboundSchema;
  /** @deprecated use `RequestTimedOutResponse$outboundSchema` instead. */
  export const outboundSchema = RequestTimedOutResponse$outboundSchema;
  /** @deprecated use `RequestTimedOutResponse$Outbound` instead. */
  export type Outbound = RequestTimedOutResponse$Outbound;
}
