# ConnectSessions
(*connectSessions*)

### Available Operations

* [authenticateConnectSession](#authenticateconnectsession) - Authenticate Connect Session
* [createConnectSession](#createconnectsession) - Create Connect Session

## authenticateConnectSession

Authenticate Connect Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.connectSessions.authenticateConnectSession({
    token: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.ConnectSessionAuthenticate](../../sdk/models/shared/connectsessionauthenticate.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.StackoneAuthenticateConnectSessionResponse](../../sdk/models/operations/stackoneauthenticateconnectsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createConnectSession

Create Connect Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionCreateCategories } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

async function run() {
  const sdk = new StackOne({
    security: {
      password: "",
      username: "",
    },
  });

  const res = await sdk.connectSessions.createConnectSession({
    categories: [
      ConnectSessionCreateCategories.Ats,
      ConnectSessionCreateCategories.Hris,
      ConnectSessionCreateCategories.HrisLegacy,
      ConnectSessionCreateCategories.Crm,
      ConnectSessionCreateCategories.Marketing,
      ConnectSessionCreateCategories.Stackone,
    ],
    metadata: {},
    originOwnerId: "string",
    originOwnerName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.ConnectSessionCreate](../../sdk/models/shared/connectsessioncreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.StackoneCreateConnectSessionResponse](../../sdk/models/operations/stackonecreateconnectsessionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
