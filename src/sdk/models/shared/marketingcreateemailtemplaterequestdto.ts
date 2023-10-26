/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmailMessages } from "./emailmessages";
import { Expose, Type } from "class-transformer";

export class MarketingCreateEmailTemplateRequestDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata({ elemType: EmailMessages })
    @Expose({ name: "messages" })
    @Type(() => EmailMessages)
    messages?: EmailMessages[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];
}