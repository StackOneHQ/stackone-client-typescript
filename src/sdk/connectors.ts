/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";

export class Connectors extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Get Connector Meta information for the given provider key
     */
    async getConnectorMeta(
        input: operations.StackoneGetConnectorMetaRequest,
        options?: RequestOptions
    ): Promise<operations.StackoneGetConnectorMetaResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.StackoneGetConnectorMetaRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            provider: enc$.encodeSimple("provider", payload$.provider, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/connectors/meta/{provider}")(pathParams$);

        const query$ = [
            enc$.encodeForm("include", payload$.include, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.StackoneGetConnectorMetaResponse$.inboundSchema.parse({
                ...responseFields$,
                ConnectorsMeta: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Connectors Meta Information for all providers
     */
    async listConnectorsMeta(
        input: operations.StackoneListConnectorsMetaRequest,
        options?: RequestOptions
    ): Promise<operations.StackoneListConnectorsMetaResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.StackoneListConnectorsMetaRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/connectors/meta")();

        const query$ = [
            enc$.encodeForm("include", payload$.include, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.StackoneListConnectorsMetaResponse$.inboundSchema.parse({
                ...responseFields$,
                classes: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
