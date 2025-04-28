# HrisListEmployeeTimeOffPoliciesQueryParamFilter

HRIS Time-Off Policies filters

## Example Usage

```typescript
import { HrisListEmployeeTimeOffPoliciesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListEmployeeTimeOffPoliciesQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `type`                                                                        | [operations.Type](../../../sdk/models/operations/type.md)                     | :heavy_minus_sign:                                                            | Filter to select time-off policies by type                                    |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |