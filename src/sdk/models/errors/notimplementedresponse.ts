/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { StackOneError } from "./stackoneerror.js";

export type NotImplementedResponseData = {
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

export class NotImplementedResponse extends StackOneError {
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;

  /** The original data that was passed to this error instance. */
  data$: NotImplementedResponseData;

  constructor(
    err: NotImplementedResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.timestamp = err.timestamp;

    this.name = "NotImplementedResponse";
  }
}

/** @internal */
export const NotImplementedResponse$inboundSchema: z.ZodType<
  NotImplementedResponse,
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
    return new NotImplementedResponse(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type NotImplementedResponse$Outbound = {
  message: string;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const NotImplementedResponse$outboundSchema: z.ZodType<
  NotImplementedResponse$Outbound,
  z.ZodTypeDef,
  NotImplementedResponse
> = z.instanceof(NotImplementedResponse)
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
export namespace NotImplementedResponse$ {
  /** @deprecated use `NotImplementedResponse$inboundSchema` instead. */
  export const inboundSchema = NotImplementedResponse$inboundSchema;
  /** @deprecated use `NotImplementedResponse$outboundSchema` instead. */
  export const outboundSchema = NotImplementedResponse$outboundSchema;
  /** @deprecated use `NotImplementedResponse$Outbound` instead. */
  export type Outbound = NotImplementedResponse$Outbound;
}
