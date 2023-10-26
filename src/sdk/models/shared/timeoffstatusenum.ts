/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TimeOffStatusEnumValue {
    Approved = "approved",
    UnmappedValue = "unmapped_value",
}

export class TimeOffStatusEnum extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: TimeOffStatusEnumValue;
}