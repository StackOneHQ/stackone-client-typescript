# HrisGetCostCenterGroupResponse

## Example Usage

```typescript
import { HrisGetCostCenterGroupResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetCostCenterGroupResponse = {
  contentType: "<value>",
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  statusCode: 396224,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `hrisCostCenterResult`                                                            | [shared.HRISCostCenterResult](../../../sdk/models/shared/hriscostcenterresult.md) | :heavy_minus_sign:                                                                | The cost center group with the given identifier was retrieved.                    |
| `headers`                                                                         | Record<string, *string*[]>                                                        | :heavy_check_mark:                                                                | N/A                                                                               |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |