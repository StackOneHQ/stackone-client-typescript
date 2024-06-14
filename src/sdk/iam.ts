/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import {
    encodeDeepObjectQuery as encodeDeepObjectQuery$,
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
    queryJoin as queryJoin$,
} from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as operations from "./models/operations";

export class Iam extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get Group
     */
    async getGroup(
        request: operations.IamGetGroupRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetGroupResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamGetGroupRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/groups/{id}")(pathParams$);

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                raw: payload$.raw,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_get_group",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamGetGroupResponse>()
            .json(200, operations.IamGetGroupResponse$, { key: "IamGroupResult" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Policy
     */
    async getPolicy(
        request: operations.IamGetPolicyRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetPolicyResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamGetPolicyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/policies/{id}")(pathParams$);

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                raw: payload$.raw,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_get_policy",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamGetPolicyResponse>()
            .json(200, operations.IamGetPolicyResponse$, { key: "IamPolicyResult" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Role
     */
    async getRole(
        request: operations.IamGetRoleRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetRoleResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamGetRoleRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/roles/{id}")(pathParams$);

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                raw: payload$.raw,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_get_role",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamGetRoleResponse>()
            .json(200, operations.IamGetRoleResponse$, { key: "IamRoleResult" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get User
     */
    async getUser(
        request: operations.IamGetUserRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetUserResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamGetUserRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/users/{id}")(pathParams$);

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                raw: payload$.raw,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_get_user",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamGetUserResponse>()
            .json(200, operations.IamGetUserResponse$, { key: "IamUserResult" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List Groups
     */
    async listGroups(
        request: operations.IamListGroupsRequest,
        options?: RequestOptions
    ): Promise<operations.IamListGroupsResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamListGroupsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/groups")();

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                filter: payload$.filter,
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                next: payload$.next,
                page: payload$.page,
                page_size: payload$.page_size,
                raw: payload$.raw,
                updated_after: payload$.updated_after,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_list_groups",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamListGroupsResponse>()
            .json(200, operations.IamListGroupsResponse$, { key: "IamGroupsPaginated" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List Policies
     */
    async listPolicies(
        request: operations.IamListPoliciesRequest,
        options?: RequestOptions
    ): Promise<operations.IamListPoliciesResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamListPoliciesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/policies")();

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                filter: payload$.filter,
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                next: payload$.next,
                page: payload$.page,
                page_size: payload$.page_size,
                raw: payload$.raw,
                updated_after: payload$.updated_after,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_list_policies",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamListPoliciesResponse>()
            .json(200, operations.IamListPoliciesResponse$, { key: "IamPoliciesPaginated" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List Roles
     */
    async listRoles(
        request: operations.IamListRolesRequest,
        options?: RequestOptions
    ): Promise<operations.IamListRolesResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamListRolesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/roles")();

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                filter: payload$.filter,
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                next: payload$.next,
                page: payload$.page,
                page_size: payload$.page_size,
                raw: payload$.raw,
                updated_after: payload$.updated_after,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_list_roles",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamListRolesResponse>()
            .json(200, operations.IamListRolesResponse$, { key: "IamRolesPaginated" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List Users
     */
    async listUsers(
        request: operations.IamListUsersRequest,
        options?: RequestOptions
    ): Promise<operations.IamListUsersResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.IamListUsersRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/users")();

        const query$ = queryJoin$(
            encodeDeepObjectQuery$({
                filter: payload$.filter,
                proxy: payload$.proxy,
            }),
            encodeFormQuery$({
                expand: payload$.expand,
                fields: payload$.fields,
                next: payload$.next,
                page: payload$.page,
                page_size: payload$.page_size,
                raw: payload$.raw,
                updated_after: payload$.updated_after,
            })
        );

        headers$.set(
            "x-account-id",
            encodeSimple$("x-account-id", payload$["x-account-id"], {
                explode: false,
                charEncoding: "none",
            })
        );

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "iam_list_users",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "403", "412", "429", "4XX", "500", "501", "5XX"],
        };
        const request$ = this.createRequest$(
            context,
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

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.IamListUsersResponse>()
            .json(200, operations.IamListUsersResponse$, { key: "IamUsersPaginated" })
            .fail([400, 403, 412, 429, "4XX", 500, 501, "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
