/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The status of the application.
 */
export enum ApplicationStatusEnumApiModelValue {
    Active = "active",
    Converted = "converted",
    Hired = "hired",
    Lead = "lead",
    Rejected = "rejected",
    UnmappedValue = "unmapped_value",
}

export class ApplicationStatusEnumApiModel extends SpeakeasyBase {
    /**
     * The source value of the application status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    /**
     * The status of the application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: ApplicationStatusEnumApiModelValue;
}