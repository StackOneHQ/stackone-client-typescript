/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ListTypeEnumValue {
    Contacts = "contacts",
    Companies = "companies",
    UnmappedValue = "unmapped_value",
}

export class ListTypeEnum extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: ListTypeEnumValue;
}