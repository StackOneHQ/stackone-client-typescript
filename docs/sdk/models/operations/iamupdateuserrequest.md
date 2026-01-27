# IamUpdateUserRequest

## Example Usage

```typescript
import { IamUpdateUserRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { IamUpdateUserRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamUpdateUserRequest = {
  iamUpdateUserRequestDto: {
    firstName: "Han",
    isBotUser: true,
    lastName: "Solo",
    name: "Han Solo",
    passthrough: {
      "other_known_names": "John Doe",
    },
    primaryEmailAddress: "han@stackone.com",
    status: {
      value: IamUpdateUserRequestDtoValue.Enabled,
    },
    username: "hansolo1977",
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `iamUpdateUserRequestDto`                                                                                                                                                | [shared.IamUpdateUserRequestDto](../../../sdk/models/shared/iamupdateuserrequestdto.md)                                                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |