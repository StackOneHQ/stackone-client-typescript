/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The Status of the campaign.
 */
export enum StatusEnumValue {
    Draft = "draft",
    Archived = "archived",
    Live = "live",
}

export class StatusEnum extends SpeakeasyBase {
    /**
     * The source value of the Status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    /**
     * The Status of the campaign.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: StatusEnumValue;
}