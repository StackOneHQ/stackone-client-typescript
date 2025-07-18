# AtsUpdateBackgroundCheckResultResponse

## Example Usage

```typescript
import { AtsUpdateBackgroundCheckResultResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateBackgroundCheckResultResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 532031,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `headers`                                                             | Record<string, *string*[]>                                            | :heavy_check_mark:                                                    | N/A                                                                   |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `updateResult`                                                        | [shared.UpdateResult](../../../sdk/models/shared/updateresult.md)     | :heavy_minus_sign:                                                    | The result update of the background check for candidate.              |