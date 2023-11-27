/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The schedule type of the campaign.
 */
export enum ScheduleTypeEnumValue {
    Immediate = "immediate",
    Scheduled = "scheduled",
    Recurring = "recurring",
    Custom = "custom",
    Triggered = "triggered",
}

export class ScheduleTypeEnum extends SpeakeasyBase {
    /**
     * The source value of the schedule type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    /**
     * The schedule type of the campaign.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: ScheduleTypeEnumValue;
}
