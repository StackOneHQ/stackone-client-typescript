# connectSessions

### Available Operations

* [connectSessionsAuthenticate](#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](#connectsessionscreate) - Create Session

## connectSessionsAuthenticate

Authenticate Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionsAuthenticateResponse, ConnectSessionsAuthenticateSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne();
const operationSecurity: ConnectSessionsAuthenticateSecurity = {
  password: "",
  username: "",
};

sdk.connectSessions.connectSessionsAuthenticate({
  token: "odit",
}, operationSecurity).then((res: ConnectSessionsAuthenticateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [shared.ConnectSessionAuthenticate](../../models/shared/connectsessionauthenticate.md)                           | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `security`                                                                                                       | [operations.ConnectSessionsAuthenticateSecurity](../../models/operations/connectsessionsauthenticatesecurity.md) | :heavy_check_mark:                                                                                               | The security requirements to use for the request.                                                                |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.ConnectSessionsAuthenticateResponse](../../models/operations/connectsessionsauthenticateresponse.md)>**


## connectSessionsCreate

Create Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionsCreateResponse, ConnectSessionsCreateSecurity } from "@stackone/stackone-client-ts/dist/sdk/models/operations";
import { ConnectSessionCreateCategories } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

const sdk = new StackOne();
const operationSecurity: ConnectSessionsCreateSecurity = {
  password: "",
  username: "",
};

sdk.connectSessions.connectSessionsCreate({
  categories: [
    ConnectSessionCreateCategories.Marketing,
  ],
  expiresIn: 1965.82,
  metadata: {},
  originOwnerId: "tenetur",
  originOwnerName: "ipsam",
  originUsername: "id",
  provider: "possimus",
}, operationSecurity).then((res: ConnectSessionsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [shared.ConnectSessionCreate](../../models/shared/connectsessioncreate.md)                           | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ConnectSessionsCreateSecurity](../../models/operations/connectsessionscreatesecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ConnectSessionsCreateResponse](../../models/operations/connectsessionscreateresponse.md)>**

