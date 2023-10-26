/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Ats } from "./ats";
import { ConnectSessions } from "./connectsessions";
import { Crm } from "./crm";
import { Hris } from "./hris";
import { Marketing } from "./marketing";
import * as shared from "./models/shared";
import { Proxy } from "./proxy";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.stackone-dev.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.10.0";
    genVersion = "2.172.0";
    userAgent = "speakeasy-sdk/typescript 0.10.0 2.172.0 1.0.0 @stackone/stackone-client-ts";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Marketing: The documentation for the StackOne Unified API - MARKETING
 */
export class StackOne {
    public accounts: Accounts;
    public connectSessions: ConnectSessions;
    public proxy: Proxy;
    public ats: Ats;
    public crm: Crm;
    public hris: Hris;
    public marketing: Marketing;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.connectSessions = new ConnectSessions(this.sdkConfiguration);
        this.proxy = new Proxy(this.sdkConfiguration);
        this.ats = new Ats(this.sdkConfiguration);
        this.crm = new Crm(this.sdkConfiguration);
        this.hris = new Hris(this.sdkConfiguration);
        this.marketing = new Marketing(this.sdkConfiguration);
    }
}
