/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class MarketingCreateEmailTemplateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    marketingCreateEmailTemplateRequestDto: shared.MarketingCreateEmailTemplateRequestDto;

    /**
     * The account identifier
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-account-id" })
    xAccountId: string;
}

export class MarketingCreateEmailTemplateResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Record created successfully.
     */
    @SpeakeasyMetadata()
    createTemplateResult?: shared.CreateTemplateResult;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
