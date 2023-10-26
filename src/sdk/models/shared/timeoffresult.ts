/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeOff } from "./timeoff";
import { Expose, Type } from "class-transformer";

export class TimeOffResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => TimeOff)
    data: TimeOff;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}