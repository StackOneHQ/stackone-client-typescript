/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RejectedReason } from "./rejectedreason";
import { Expose, Type } from "class-transformer";

export class RejectedReasonResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => RejectedReason)
    data: RejectedReason;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}