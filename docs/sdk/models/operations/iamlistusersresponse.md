# IamListUsersResponse

## Example Usage

```typescript
import { IamListUsersResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamListUsersResponse = {
    contentType: "<value>",
    iamUsersPaginated: {
        data: [],
    },
    statusCode: 537023,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `iamUsersPaginated`                                                         | [shared.IamUsersPaginated](../../../sdk/models/shared/iamuserspaginated.md) | :heavy_minus_sign:                                                          | The list of users was retrieved.                                            |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |