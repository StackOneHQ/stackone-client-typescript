# HrisListTimeOffPoliciesQueryParamFilter

HRIS Time-Off Policies filters

## Example Usage

```typescript
import { HrisListTimeOffPoliciesQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListTimeOffPoliciesQueryParamFilter = {
  updatedAfter: new Date("2020-01-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [operations.QueryParamType](../../../sdk/models/operations/queryparamtype.md)                 | :heavy_minus_sign:                                                                            | Filter to select time-off policies by type                                                    |                                                                                               |
| `updatedAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Use a string with a date to only select results updated after that given date                 | 2020-01-01T00:00:00.000Z                                                                      |