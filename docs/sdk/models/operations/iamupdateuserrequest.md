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
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `iamUpdateUserRequestDto`                                                               | [shared.IamUpdateUserRequestDto](../../../sdk/models/shared/iamupdateuserrequestdto.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `xAccountId`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | The account identifier                                                                  |