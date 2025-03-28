# HrisListTimeOffRequestsQueryParamFilter

HRIS Time Off filters

## Example Usage

```typescript
import { HrisListTimeOffRequestsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeOffRequestsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `typeIds`                                                                     | *string*[]                                                                    | :heavy_minus_sign:                                                            | List of time off type ids to filter by.                                       |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |