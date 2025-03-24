# IamUpdateUserResponse

## Example Usage

```typescript
import { IamUpdateUserResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { UpdateUserApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: IamUpdateUserResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  updateUserApiModel: {
    firstName: "Han",
    isBotUser: true,
    lastName: "Solo",
    name: "Han Solo",
    passthrough: {
      "other_known_names": "John Doe",
    },
    primaryEmailAddress: "han@stackone.com",
    status: {
      value: UpdateUserApiModelValue.Enabled,
    },
    username: "hansolo1977",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `contentType`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | HTTP response content type for this operation                                 |
| `headers`                                                                     | Record<string, *string*[]>                                                    | :heavy_check_mark:                                                            | N/A                                                                           |
| `statusCode`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | HTTP response status code for this operation                                  |
| `rawResponse`                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)         | :heavy_check_mark:                                                            | Raw HTTP response; suitable for custom response parsing                       |
| `updateUserApiModel`                                                          | [shared.UpdateUserApiModel](../../../sdk/models/shared/updateuserapimodel.md) | :heavy_minus_sign:                                                            | Record updated successfully.                                                  |