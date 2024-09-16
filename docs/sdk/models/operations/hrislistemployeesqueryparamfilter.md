# HrisListEmployeesQueryParamFilter

HRIS Employees filters

## Example Usage

```typescript
import { HrisListEmployeesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeesQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `employeeNumber`                                                              | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select employees by employee_number                                 |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |