# HrisListShiftsQueryParamFilter

HRIS Shifts filters

## Example Usage

```typescript
import { HrisListShiftsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListShiftsQueryParamFilter = {
  endsBefore: "2024-01-15T17:00",
  startsAfter: "2024-01-15T09:00",
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `endsBefore`                                                                                                  | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Filter shifts that end before this date                                                                       | 2024-01-15T17:00                                                                                              |
| `startsAfter`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Filter shifts that start after this date                                                                      | 2024-01-15T09:00                                                                                              |
| `status`                                                                                                      | [operations.HrisListShiftsQueryParamStatus](../../../sdk/models/operations/hrislistshiftsqueryparamstatus.md) | :heavy_minus_sign:                                                                                            | Filter to select shifts by status                                                                             |                                                                                                               |
| `updatedAfter`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | Use a string with a date to only select results updated after that given date                                 | 2020-01-01T00:00:00.000Z                                                                                      |