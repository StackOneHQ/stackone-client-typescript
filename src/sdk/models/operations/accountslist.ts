/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AccountsListSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=password" })
    password: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic;name=username" })
    username: string;
}

export class AccountsListRequest extends SpeakeasyBase {
    /**
     * The origin owner identifier of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin_owner_id" })
    originOwnerId?: string;

    /**
     * The provider of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provider" })
    provider?: string;
}

export class AccountsListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The list of accounts was retrieved.
     */
    @SpeakeasyMetadata({ elemType: shared.LinkedAccount })
    linkedAccounts?: shared.LinkedAccount[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}