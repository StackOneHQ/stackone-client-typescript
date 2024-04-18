/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "./models/errors";
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
        input: operations.IamGetGroupRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetGroupResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamGetGroupRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/groups/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamGetGroupResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamGroupResult: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get Policy
     */
    async getPolicy(
        input: operations.IamGetPolicyRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetPolicyResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamGetPolicyRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/policies/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamGetPolicyResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamPolicyResult: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get Role
     */
    async getRole(
        input: operations.IamGetRoleRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetRoleResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamGetRoleRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/roles/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamGetRoleResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamRoleResult: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get User
     */
    async getUser(
        input: operations.IamGetUserRequest,
        options?: RequestOptions
    ): Promise<operations.IamGetUserResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamGetUserRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/unified/iam/users/{id}")(pathParams$);

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamGetUserResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamUserResult: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Groups
     */
    async listGroups(
        input: operations.IamListGroupsRequest,
        options?: RequestOptions
    ): Promise<operations.IamListGroupsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamListGroupsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/groups")();

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("filter[updated_after]", payload$["filter[updated_after]"], {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("next", payload$.next, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page_size", payload$.page_size, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("updated_after", payload$.updated_after, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamListGroupsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamGroupsPaginated: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Policies
     */
    async listPolicies(
        input: operations.IamListPoliciesRequest,
        options?: RequestOptions
    ): Promise<operations.IamListPoliciesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamListPoliciesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/policies")();

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("filter[updated_after]", payload$["filter[updated_after]"], {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("next", payload$.next, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page_size", payload$.page_size, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("updated_after", payload$.updated_after, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamListPoliciesResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamPoliciesPaginated: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Roles
     */
    async listRoles(
        input: operations.IamListRolesRequest,
        options?: RequestOptions
    ): Promise<operations.IamListRolesResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamListRolesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/roles")();

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("filter[updated_after]", payload$["filter[updated_after]"], {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("next", payload$.next, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page_size", payload$.page_size, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("updated_after", payload$.updated_after, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamListRolesResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamRolesPaginated: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List Users
     */
    async listUsers(
        input: operations.IamListUsersRequest,
        options?: RequestOptions
    ): Promise<operations.IamListUsersResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.IamListUsersRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/unified/iam/users")();

        const query$ = [
            enc$.encodeForm("expand", payload$.expand, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("fields", payload$.fields, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("filter[updated_after]", payload$["filter[updated_after]"], {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("next", payload$.next, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page_size", payload$.page_size, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeDeepObject("proxy", payload$.proxy, { charEncoding: "percent" }),
            enc$.encodeForm("raw", payload$.raw, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("updated_after", payload$.updated_after, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        headers$.set(
            "x-account-id",
            enc$.encodeSimple("x-account-id", payload$["x-account-id"], {
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
        const request = this.createRequest$(
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

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.IamListUsersResponse$.inboundSchema.parse({
                        ...responseFields$,
                        IamUsersPaginated: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
