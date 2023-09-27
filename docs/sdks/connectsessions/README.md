# ConnectSessions
(*connectSessions*)

### Available Operations

* [connectSessionsAuthenticate](#connectsessionsauthenticate) - Authenticate Session
* [connectSessionsCreate](#connectsessionscreate) - Create Session

## connectSessionsAuthenticate

Authenticate Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionsAuthenticateResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.connectSessions.connectSessionsAuthenticate({
  token: "iusto",
}).then((res: ConnectSessionsAuthenticateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.ConnectSessionAuthenticate](../../models/shared/connectsessionauthenticate.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ConnectSessionsAuthenticateResponse](../../models/operations/connectsessionsauthenticateresponse.md)>**


## connectSessionsCreate

Create Session

### Example Usage

```typescript
import { StackOne } from "@stackone/stackone-client-ts";
import { ConnectSessionsCreateResponse } from "@stackone/stackone-client-ts/dist/sdk/models/operations";
import { ConnectSessionCreateCategories } from "@stackone/stackone-client-ts/dist/sdk/models/shared";

const sdk = new StackOne({
  security: {
    password: "",
    username: "",
  },
});

sdk.connectSessions.connectSessionsCreate({
  categories: [
    ConnectSessionCreateCategories.Ats,
  ],
  expiresIn: 6886.61,
  metadata: {},
  originOwnerId: "enim",
  originOwnerName: "accusamus",
  originUsername: "commodi",
  provider: "repudiandae",
}).then((res: ConnectSessionsCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.ConnectSessionCreate](../../models/shared/connectsessioncreate.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ConnectSessionsCreateResponse](../../models/operations/connectsessionscreateresponse.md)>**

