/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AssessmentsPackages, AssessmentsPackages$ } from "./assessmentspackages.js";
import { RawResponse, RawResponse$ } from "./rawresponse.js";
import * as z from "zod";

export type AssessmentsPackagesResult = {
    data: AssessmentsPackages;
    raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export namespace AssessmentsPackagesResult$ {
    export const inboundSchema: z.ZodType<AssessmentsPackagesResult, z.ZodTypeDef, unknown> =
        z.object({
            data: AssessmentsPackages$.inboundSchema,
            raw: z.nullable(z.array(RawResponse$.inboundSchema)).optional(),
        });

    export type Outbound = {
        data: AssessmentsPackages$.Outbound;
        raw?: Array<RawResponse$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AssessmentsPackagesResult> =
        z.object({
            data: AssessmentsPackages$.outboundSchema,
            raw: z.nullable(z.array(RawResponse$.outboundSchema)).optional(),
        });
}