# StackoneCheckPermissionsResponse

## Example Usage

```typescript
import { StackoneCheckPermissionsResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: StackoneCheckPermissionsResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [],
  },
  statusCode: 936861,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `checkPermissionsResponse`                                                                | [shared.CheckPermissionsResponse](../../../sdk/models/shared/checkpermissionsresponse.md) | :heavy_minus_sign:                                                                        | Permission check result                                                                   |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |