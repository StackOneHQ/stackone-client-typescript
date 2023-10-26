/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

export class UsersPaginated extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: User })
    @Expose({ name: "data" })
    @Type(() => User)
    data: User[];

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: string;

    @SpeakeasyMetadata()
    @Expose({ name: "raw" })
    raw: string;
}