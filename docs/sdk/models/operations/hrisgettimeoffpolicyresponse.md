# HrisGetTimeOffPolicyResponse

## Example Usage

```typescript
import { HrisGetTimeOffPolicyResponse } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetTimeOffPolicyResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `headers`                                                                       | Record<string, *string*[]>                                                      | :heavy_check_mark:                                                              | N/A                                                                             |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `timeOffPolicyResult`                                                           | [shared.TimeOffPolicyResult](../../../sdk/models/shared/timeoffpolicyresult.md) | :heavy_minus_sign:                                                              | The time off policy with the given identifier was retrieved.                    |