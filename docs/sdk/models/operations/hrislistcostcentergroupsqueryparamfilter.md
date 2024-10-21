# HrisListCostCenterGroupsQueryParamFilter

Filter parameters that allow greater customisation of the list response

## Example Usage

```typescript
import { HrisListCostCenterGroupsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: HrisListCostCenterGroupsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |