/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { StackOneError } from "./stackoneerror.js";

export type PreconditionFailedResponseData = {
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

export class PreconditionFailedResponse extends StackOneError {
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;

  /** The original data that was passed to this error instance. */
  data$: PreconditionFailedResponseData;

  constructor(
    err: PreconditionFailedResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.timestamp = err.timestamp;

    this.name = "PreconditionFailedResponse";
  }
}

/** @internal */
export const PreconditionFailedResponse$inboundSchema: z.ZodType<
  PreconditionFailedResponse,
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
    return new PreconditionFailedResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type PreconditionFailedResponse$Outbound = {
  message: string;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const PreconditionFailedResponse$outboundSchema: z.ZodType<
  PreconditionFailedResponse$Outbound,
  z.ZodTypeDef,
  PreconditionFailedResponse
> = z.instanceof(PreconditionFailedResponse)
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
export namespace PreconditionFailedResponse$ {
  /** @deprecated use `PreconditionFailedResponse$inboundSchema` instead. */
  export const inboundSchema = PreconditionFailedResponse$inboundSchema;
  /** @deprecated use `PreconditionFailedResponse$outboundSchema` instead. */
  export const outboundSchema = PreconditionFailedResponse$outboundSchema;
  /** @deprecated use `PreconditionFailedResponse$Outbound` instead. */
  export type Outbound = PreconditionFailedResponse$Outbound;
}
