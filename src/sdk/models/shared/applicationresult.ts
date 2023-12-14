/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Application } from "./application";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class ApplicationResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Application)
    data: Application;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
