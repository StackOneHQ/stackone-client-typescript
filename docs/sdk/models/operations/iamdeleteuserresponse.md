# IamDeleteUserResponse

## Example Usage

```typescript
import { IamDeleteUserResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamDeleteUserResponse = {
  contentType: "<value>",
  deleteResult: {
    message: "Record deleted successfully.",
    statusCode: 204,
    timestamp: new Date("2021-01-01T01:01:01.000Z"),
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 205,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `deleteResult`                                                        | [shared.DeleteResult](../../../sdk/models/shared/deleteresult.md)     | :heavy_minus_sign:                                                    | The user was deleted successfully.                                    |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |