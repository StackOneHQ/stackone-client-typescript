/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Account } from "./account";
import { RawResponse } from "./rawresponse";
import { Expose, Type } from "class-transformer";

export class AccountResult extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => Account)
    data: Account;

    @SpeakeasyMetadata({ elemType: RawResponse })
    @Expose({ name: "raw" })
    @Type(() => RawResponse)
    raw?: RawResponse[];
}
