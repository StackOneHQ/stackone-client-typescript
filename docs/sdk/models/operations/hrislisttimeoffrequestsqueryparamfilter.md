# HrisListTimeOffRequestsQueryParamFilter

HRIS Time Off filters

## Example Usage

```typescript
import { HrisListTimeOffRequestsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeOffRequestsQueryParamFilter = {
  endDate: new Date("2020-01-01T00:00:00.000Z"),
  startDate: new Date("2020-01-01T00:00:00.000Z"),
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter to include time off requests that end on or before this date.                          | 2020-01-01T00:00:00.000Z                                                                      |
| `policyIds`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of time off policy ids to filter by.                                                     |                                                                                               |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter to include time off requests that start on or after this date.                         | 2020-01-01T00:00:00.000Z                                                                      |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |