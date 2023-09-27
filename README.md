# @stackone/stackone-client-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/StackOneHQ/stackone-client-typescript.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @stackone/stackone-client-ts
```

### Yarn

```bash
yarn add @stackone/stackone-client-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsDeleteResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsDelete({
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
}).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [accountsDelete](docs/sdks/accounts/README.md#accountsdelete) - Delete Account
* [accountsGet](docs/sdks/accounts/README.md#accountsget) - Get Account
* [accountsList](docs/sdks/accounts/README.md#accountslist) - List Accounts
* [accountsMetaGet](docs/sdks/accounts/README.md#accountsmetaget) - Get meta information of the account

### [connectSessions](docs/sdks/connectsessions/README.md)

* [connectSessionsAuthenticate](docs/sdks/connectsessions/README.md#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](docs/sdks/connectsessions/README.md#connectsessionscreate) - Create Session

### [proxy](docs/sdks/proxy/README.md)

* [proxyRequestPost](docs/sdks/proxy/README.md#proxyrequestpost) - Proxy Request
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
