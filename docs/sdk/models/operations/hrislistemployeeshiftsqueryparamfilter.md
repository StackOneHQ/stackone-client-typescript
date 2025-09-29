# HrisListEmployeeShiftsQueryParamFilter

HRIS Shifts filters

## Example Usage

```typescript
import { HrisListEmployeeShiftsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeShiftsQueryParamFilter = {
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endsBefore`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter shifts that end before this date                                                       |                                                                                               |
| `startsAfter`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter shifts that start after this date                                                      |                                                                                               |
| `status`                                                                                      | [operations.QueryParamStatus](../../../sdk/models/operations/queryparamstatus.md)             | :heavy_minus_sign:                                                                            | Filter to select shifts by status                                                             |                                                                                               |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |