# HrisGetBenefitResponse

## Example Usage

```typescript
import { HrisGetBenefitResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetBenefitResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 822508,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `hrisBenefitResult`                                                         | [shared.HRISBenefitResult](../../../sdk/models/shared/hrisbenefitresult.md) | :heavy_minus_sign:                                                          | The Benefit with the given identifier was retrieved.                        |
| `headers`                                                                   | Record<string, *string*[]>                                                  | :heavy_check_mark:                                                          | N/A                                                                         |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |