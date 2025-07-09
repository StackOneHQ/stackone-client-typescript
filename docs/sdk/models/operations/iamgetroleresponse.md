# IamGetRoleResponse

## Example Usage

```typescript
import { IamGetRoleResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: IamGetRoleResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
  },
  statusCode: 99251,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `iamRoleResult`                                                       | [shared.IamRoleResult](../../../sdk/models/shared/iamroleresult.md)   | :heavy_minus_sign:                                                    | The role with the given identifier was retrieved.                     |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |