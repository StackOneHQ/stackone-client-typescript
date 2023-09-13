# accounts

### Available Operations

* [accountsDelete](#accountsdelete) - Delete Account
* [accountsGet](#accountsget) - Get Account
* [accountsList](#accountslist) - List Accounts
* [accountsMetaGet](#accountsmetaget) - Get meta information of the account

## accountsDelete

Delete Account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsDeleteResponse, AccountsDeleteSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne();
const operationSecurity: AccountsDeleteSecurity = {
  password: "",
  username: "",
};

sdk.accounts.accountsDelete({
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
}, operationSecurity).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AccountsDeleteRequest](../../models/operations/accountsdeleterequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.AccountsDeleteSecurity](../../models/operations/accountsdeletesecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AccountsDeleteResponse](../../models/operations/accountsdeleteresponse.md)>**


## accountsGet

Get Account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsGetResponse, AccountsGetSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne();
const operationSecurity: AccountsGetSecurity = {
  password: "",
  username: "",
};

sdk.accounts.accountsGet({
  id: "cb739205-9293-496f-aa75-96eb10faaa23",
}, operationSecurity).then((res: AccountsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AccountsGetRequest](../../models/operations/accountsgetrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.AccountsGetSecurity](../../models/operations/accountsgetsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AccountsGetResponse](../../models/operations/accountsgetresponse.md)>**


## accountsList

List Accounts

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsListResponse, AccountsListSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne();
const operationSecurity: AccountsListSecurity = {
  password: "",
  username: "",
};

sdk.accounts.accountsList({
  originOwnerId: "corporis",
  provider: "explicabo",
}, operationSecurity).then((res: AccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AccountsListRequest](../../models/operations/accountslistrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.AccountsListSecurity](../../models/operations/accountslistsecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AccountsListResponse](../../models/operations/accountslistresponse.md)>**


## accountsMetaGet

Get meta information of the account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsMetaGetResponse, AccountsMetaGetSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne();
const operationSecurity: AccountsMetaGetSecurity = {
  password: "",
  username: "",
};

sdk.accounts.accountsMetaGet({
  id: "c5955907-aff1-4a3a-afa9-467739251aa5",
}, operationSecurity).then((res: AccountsMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AccountsMetaGetRequest](../../models/operations/accountsmetagetrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.AccountsMetaGetSecurity](../../models/operations/accountsmetagetsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AccountsMetaGetResponse](../../models/operations/accountsmetagetresponse.md)>**

