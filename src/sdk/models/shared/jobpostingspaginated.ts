/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobPosting } from "./jobposting";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class JobPostingsPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: JobPosting })
    @Expose({ name: "data" })
    @Type(() => JobPosting)
    data: JobPosting[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
