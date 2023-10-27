/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ATSLocation } from "./atslocation";
import { Expose, Type } from "class-transformer";

export class ATSLocationsPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ATSLocation })
    @Expose({ name: "data" })
    @Type(() => ATSLocation)
    data: ATSLocation[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw?: string;
}