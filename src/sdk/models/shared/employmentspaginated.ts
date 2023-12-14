/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Employment } from "./employment";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class EmploymentsPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Employment })
    @Expose({ name: "data" })
    @Type(() => Employment)
    data: Employment[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
