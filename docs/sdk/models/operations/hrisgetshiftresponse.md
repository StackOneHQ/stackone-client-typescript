# HrisGetShiftResponse

## Example Usage

```typescript
import { HrisGetShiftResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetShiftResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 575703,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `headers`                                                               | Record<string, *string*[]>                                              | :heavy_check_mark:                                                      | N/A                                                                     |
| `hrisShiftResult`                                                       | [shared.HrisShiftResult](../../../sdk/models/shared/hrisshiftresult.md) | :heavy_minus_sign:                                                      | The shift with the given identifier was retrieved.                      |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)   | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |