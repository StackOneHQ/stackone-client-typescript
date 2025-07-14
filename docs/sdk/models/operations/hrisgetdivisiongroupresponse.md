# HrisGetDivisionGroupResponse

## Example Usage

```typescript
import { HrisGetDivisionGroupResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetDivisionGroupResponse = {
  contentType: "<value>",
  headers: {},
  statusCode: 616613,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `hrisDivisionsResult`                                                           | [shared.HRISDivisionsResult](../../../sdk/models/shared/hrisdivisionsresult.md) | :heavy_minus_sign:                                                              | The division group with the given identifier was retrieved.                     |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |