/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SocialLink extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}