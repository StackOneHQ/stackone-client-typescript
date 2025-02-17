# HrisListEmployeeTimeOffBalancesQueryParamFilter

HRIS Time Off Balance filters

## Example Usage

```typescript
import { HrisListEmployeeTimeOffBalancesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeTimeOffBalancesQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `policyIds`                                                                   | *string*[]                                                                    | :heavy_minus_sign:                                                            | List of policy ids to filter time off balances by.                            |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |