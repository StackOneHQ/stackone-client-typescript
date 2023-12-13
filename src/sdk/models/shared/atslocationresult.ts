/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ATSLocation } from "./atslocation";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class ATSLocationResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => ATSLocation)
    data: ATSLocation;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
