# AtsDeleteBackgroundCheckPackageResponse

## Example Usage

```typescript
import { AtsDeleteBackgroundCheckPackageResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsDeleteBackgroundCheckPackageResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `deleteResult`                                                        | [shared.DeleteResult](../../../sdk/models/shared/deleteresult.md)     | :heavy_minus_sign:                                                    | Record deleted successfully.                                          |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |