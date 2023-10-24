# Accounts
(*accounts*)

### Available Operations

* [accountsDelete](#accountsdelete) - Delete Account
* [accountsGet](#accountsget) - Get Account
* [accountsList](#accountslist) - List Accounts
* [accountsMetaGet](#accountsmetaget) - Get meta information of the account
* [crmAccountsGet](#crmaccountsget) - Get Account
* [crmAccountsList](#crmaccountslist) - List Accounts

## accountsDelete

Delete Account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.accountsDelete({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.accountsGet({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.accountsList({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.accountsMetaGet({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.AccountsMetaGetRequest](../../models/operations/accountsmetagetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.AccountsMetaGetResponse](../../models/operations/accountsmetagetresponse.md)>**


## crmAccountsGet

Get Account

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.crmAccountsGet({
    id: "<ID>",
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CrmAccountsGetRequest](../../models/operations/crmaccountsgetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CrmAccountsGetResponse](../../models/operations/crmaccountsgetresponse.md)>**


## crmAccountsList

List Accounts

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

(async() => {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.accounts.crmAccountsList({
    proxy: {
      "key": "string",
    },
    xAccountId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CrmAccountsListRequest](../../models/operations/crmaccountslistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmAccountsListResponse](../../models/operations/crmaccountslistresponse.md)>**

