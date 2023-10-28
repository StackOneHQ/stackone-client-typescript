# Crm
(*crm*)

### Available Operations

* [createContact](#createcontact) - Creates a new Contact
* [getAccount](#getaccount) - Get Account
* [getContact](#getcontact) - Get Contact
* [getList](#getlist) - Get List
* [listAccounts](#listaccounts) - List Accounts
* [listContacts](#listcontacts) - List Contacts
* [listLists](#listlists) - Get all Lists
* [updateContact](#updatecontact) - Update Contact (early access)

## createContact

Creates a new Contact

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

  const res = await sdk.crm.createContact({
    crmCreateContactRequestDto: {
      accountIds: [
        "account-123",
        "account-456",
      ],
      companyName: "Apple Inc.",
      dealIds: [
        "deal-001",
        "deal-002",
      ],
      emails: [
        "steve@apple.com",
      ],
      firstName: "Steve",
      lastName: "Wozniak",
      phoneNumbers: [
        "123-456-7890",
      ],
    },
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CrmCreateContactRequest](../../models/operations/crmcreatecontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CrmCreateContactResponse](../../models/operations/crmcreatecontactresponse.md)>**


## getAccount

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

  const res = await sdk.crm.getAccount({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CrmGetAccountRequest](../../models/operations/crmgetaccountrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CrmGetAccountResponse](../../models/operations/crmgetaccountresponse.md)>**


## getContact

Get Contact

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

  const res = await sdk.crm.getContact({
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CrmGetContactRequest](../../models/operations/crmgetcontactrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CrmGetContactResponse](../../models/operations/crmgetcontactresponse.md)>**


## getList

Get List

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

  const res = await sdk.crm.getList({
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

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CrmGetListRequest](../../models/operations/crmgetlistrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CrmGetListResponse](../../models/operations/crmgetlistresponse.md)>**


## listAccounts

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

  const res = await sdk.crm.listAccounts({
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
| `request`                                                                              | [operations.CrmListAccountsRequest](../../models/operations/crmlistaccountsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmListAccountsResponse](../../models/operations/crmlistaccountsresponse.md)>**


## listContacts

List Contacts

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

  const res = await sdk.crm.listContacts({
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
| `request`                                                                              | [operations.CrmListContactsRequest](../../models/operations/crmlistcontactsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CrmListContactsResponse](../../models/operations/crmlistcontactsresponse.md)>**


## listLists

Get all Lists

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

  const res = await sdk.crm.listLists({
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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CrmListListsRequest](../../models/operations/crmlistlistsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CrmListListsResponse](../../models/operations/crmlistlistsresponse.md)>**


## updateContact

Update Contact (early access)

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

  const res = await sdk.crm.updateContact({
    crmCreateContactRequestDto: {
      accountIds: [
        "account-123",
        "account-456",
      ],
      companyName: "Apple Inc.",
      dealIds: [
        "deal-001",
        "deal-002",
      ],
      emails: [
        "steve@apple.com",
      ],
      firstName: "Steve",
      lastName: "Wozniak",
      phoneNumbers: [
        "123-456-7890",
      ],
    },
    id: "<ID>",
    xAccountId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CrmUpdateContactRequest](../../models/operations/crmupdatecontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CrmUpdateContactResponse](../../models/operations/crmupdatecontactresponse.md)>**

