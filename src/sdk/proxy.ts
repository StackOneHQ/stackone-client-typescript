/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Proxy {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Proxy Request
     */
    async proxyRequestPost(
        req: operations.ProxyRequestPostRequest,
        security: operations.ProxyRequestPostSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.ProxyRequestPostResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProxyRequestPostRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/unified/proxy";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "proxyRequestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.ProxyRequestPostSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ProxyRequestPostResponse = new operations.ProxyRequestPostResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 400 ||
                httpRes?.status == 403 ||
                httpRes?.status == 412 ||
                httpRes?.status == 429 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                httpRes?.status == 501 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    httpRes?.data,
                    httpRes
                );
        }

        return res;
    }
}
