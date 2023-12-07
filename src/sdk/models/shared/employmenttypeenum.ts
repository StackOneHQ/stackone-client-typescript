/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of the employment.
 */
export enum EmploymentTypeEnumValue {
    Permanent = "permanent",
    Contractor = "contractor",
    Intern = "intern",
    Apprentice = "apprentice",
    Freelance = "freelance",
    Temporary = "temporary",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    UnmappedValue = "unmapped_value",
}

export class EmploymentTypeEnum extends SpeakeasyBase {
    /**
     * The source value of the employment type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    /**
     * The type of the employment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: EmploymentTypeEnumValue;
}