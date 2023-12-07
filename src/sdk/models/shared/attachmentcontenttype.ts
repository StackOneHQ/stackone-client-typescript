/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The content type of the attachment.
 */
export enum AttachmentContentTypeValue {
    Text = "text",
    UnmappedValue = "unmapped_value",
}

export class AttachmentContentType extends SpeakeasyBase {
    /**
     * The source value of the content type.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_value" })
    sourceValue?: string;

    /**
     * The content type of the attachment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: AttachmentContentTypeValue;
}