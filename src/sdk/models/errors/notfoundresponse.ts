/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type NotFoundResponseData = {
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

export class NotFoundResponse extends Error {
  /**
   * HTTP status code
   */
  statusCode: number;
  /**
   * Timestamp when the error occurred
   */
  timestamp: Date;

  /** The original data that was passed to this error instance. */
  data$: NotFoundResponseData;

  constructor(err: NotFoundResponseData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.statusCode = err.statusCode;
    this.timestamp = err.timestamp;

    this.name = "NotFoundResponse";
  }
}

/** @internal */
export const NotFoundResponse$inboundSchema: z.ZodType<
  NotFoundResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  statusCode: z.number(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
})
  .transform((v) => {
    return new NotFoundResponse(v);
  });

/** @internal */
export type NotFoundResponse$Outbound = {
  message: string;
  statusCode: number;
  timestamp: string;
};

/** @internal */
export const NotFoundResponse$outboundSchema: z.ZodType<
  NotFoundResponse$Outbound,
  z.ZodTypeDef,
  NotFoundResponse
> = z.instanceof(NotFoundResponse)
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
export namespace NotFoundResponse$ {
  /** @deprecated use `NotFoundResponse$inboundSchema` instead. */
  export const inboundSchema = NotFoundResponse$inboundSchema;
  /** @deprecated use `NotFoundResponse$outboundSchema` instead. */
  export const outboundSchema = NotFoundResponse$outboundSchema;
  /** @deprecated use `NotFoundResponse$Outbound` instead. */
  export type Outbound = NotFoundResponse$Outbound;
}
