# HrisListTimeEntriesQueryParamFilter

HRIS Time Entries filters

## Example Usage

```typescript
import { HrisListTimeEntriesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeEntriesQueryParamFilter = {
  endTime: "2020-01-01T00:00:00.000Z",
  startTime: "2020-01-01T00:00:00.000Z",
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `employeeId`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select time entries by employee_id                                  |                                                                               |
| `endTime`                                                                     | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select time entries before a given time                             | 2020-01-01T00:00:00.000Z                                                      |
| `startTime`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select time entries after a given time                              | 2020-01-01T00:00:00.000Z                                                      |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |