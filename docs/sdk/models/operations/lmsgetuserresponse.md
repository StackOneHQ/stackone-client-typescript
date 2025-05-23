# LmsGetUserResponse

## Example Usage

```typescript
import { LmsGetUserResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsGetUserResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 503,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  userResult: {
    data: {
      active: true,
      createdAt: new Date("2021-01-01T01:01:01.000Z"),
      email: "john@dew.com",
      externalReference: "al60043",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "John Dew",
      phoneNumber: "+1234567890",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `userResult`                                                          | [shared.UserResult](../../../sdk/models/shared/userresult.md)         | :heavy_minus_sign:                                                    | The user with the given identifier was retrieved.                     |