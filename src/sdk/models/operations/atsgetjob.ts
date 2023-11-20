/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class AtsGetJobRequest extends SpeakeasyBase {
    /**
     * The comma separated list of fields to return in the response (if empty, all fields are returned)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
    fields?: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * The page number of the results to fetch
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: string;

    /**
     * The number of results per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: string;

    /**
     * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with "proxy" key
     */
    @SpeakeasyMetadata({ data: "queryParam, style=deepObject;explode=true;name=proxy" })
    proxy?: Record<string, any>;

    /**
     * Indicates that the raw request result is returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=raw" })
    raw?: boolean;

    /**
     * The sync token to select the only updated results
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sync_token" })
    syncToken?: string;

    /**
     * Use a string with a date to only select results updated after that given date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_after" })
    updatedAfter?: string;

    /**
     * The account identifier
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-account-id" })
    xAccountId: string;
}

export class AtsGetJobResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The job with the given identifier was retrieved.
     */
    @SpeakeasyMetadata()
    jobResult?: shared.JobResult;

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
