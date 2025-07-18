# HrisGetPositionRequest

## Example Usage

```typescript
import { HrisGetPositionRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisGetPositionRequest = {
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `fields`                                                                                                                             | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The comma separated list of fields to return in the response (if empty, all fields are returned)                                     |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `proxy`                                                                                                                              | Record<string, *any*>                                                                                                                | :heavy_minus_sign:                                                                                                                   | Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key |
| `raw`                                                                                                                                | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | Indicates that the raw request result should be returned in addition to the mapped result (default value is false)                   |
| `xAccountId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The account identifier                                                                                                               |