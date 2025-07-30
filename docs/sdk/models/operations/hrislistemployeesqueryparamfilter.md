# HrisListEmployeesQueryParamFilter

HRIS Employees filters

## Example Usage

```typescript
import { HrisListEmployeesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeesQueryParamFilter = {
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter to select employees by email                                                           |                                                                                               |
| `employeeNumber`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter to select employees by employee_number                                                 |                                                                                               |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |