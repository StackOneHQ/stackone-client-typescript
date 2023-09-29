# Accounts
(*accounts*)

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
import { AccountsDeleteResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsDelete({
  id: "<ID>",
}).then((res: AccountsDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AccountsDeleteRequest](../../models/operations/accountsdeleterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AccountsDeleteResponse](../../models/operations/accountsdeleteresponse.md)>**


## accountsGet

Get Account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsGetResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsGet({
  id: "<ID>",
}).then((res: AccountsGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.AccountsGetRequest](../../models/operations/accountsgetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.AccountsGetResponse](../../models/operations/accountsgetresponse.md)>**


## accountsList

List Accounts

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsListResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsList({
  originOwnerId: "budgetary Incredible THX",
  provider: "parse",
}).then((res: AccountsListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AccountsListRequest](../../models/operations/accountslistrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AccountsListResponse](../../models/operations/accountslistresponse.md)>**


## accountsMetaGet

Get meta information of the account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { AccountsMetaGetResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.accounts.accountsMetaGet({
  id: "<ID>",
}).then((res: AccountsMetaGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AccountsMetaGetRequest](../../models/operations/accountsmetagetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AccountsMetaGetResponse](../../models/operations/accountsmetagetresponse.md)>**

