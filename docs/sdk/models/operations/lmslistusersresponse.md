# LmsListUsersResponse

## Example Usage

```typescript
import { LmsListUsersResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: LmsListUsersResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 208601,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `usersPaginated`                                                      | [shared.UsersPaginated](../../../sdk/models/shared/userspaginated.md) | :heavy_minus_sign:                                                    | The list of users was retrieved.                                      |