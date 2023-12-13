/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Interview } from "./interview";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class InterviewsPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Interview })
    @Expose({ name: "data" })
    @Type(() => Interview)
    data: Interview[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
