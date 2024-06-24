/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Accounts } from "./accounts.js";
import { Ats } from "./ats.js";
import { Connectors } from "./connectors.js";
import { ConnectSessions } from "./connectsessions.js";
import { Crm } from "./crm.js";
import { Hris } from "./hris.js";
import { Iam } from "./iam.js";
import { Lms } from "./lms.js";
import { Marketing } from "./marketing.js";
import { Proxy } from "./proxy.js";

export class StackOne extends ClientSDK {
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

    private _accounts?: Accounts;
    get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this.options$));
    }

    private _connectSessions?: ConnectSessions;
    get connectSessions(): ConnectSessions {
        return (this._connectSessions ??= new ConnectSessions(this.options$));
    }

    private _connectors?: Connectors;
    get connectors(): Connectors {
        return (this._connectors ??= new Connectors(this.options$));
    }

    private _ats?: Ats;
    get ats(): Ats {
        return (this._ats ??= new Ats(this.options$));
    }

    private _crm?: Crm;
    get crm(): Crm {
        return (this._crm ??= new Crm(this.options$));
    }

    private _hris?: Hris;
    get hris(): Hris {
        return (this._hris ??= new Hris(this.options$));
    }

    private _iam?: Iam;
    get iam(): Iam {
        return (this._iam ??= new Iam(this.options$));
    }

    private _lms?: Lms;
    get lms(): Lms {
        return (this._lms ??= new Lms(this.options$));
    }

    private _marketing?: Marketing;
    get marketing(): Marketing {
        return (this._marketing ??= new Marketing(this.options$));
    }

    private _proxy?: Proxy;
    get proxy(): Proxy {
        return (this._proxy ??= new Proxy(this.options$));
    }
}
