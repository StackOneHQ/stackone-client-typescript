# AtsListJobsQueryParamFilter

ATS Jobs filters

## Example Usage

```typescript
import { AtsListJobsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListJobsQueryParamFilter = {
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `status`                                                                      | [operations.Status](../../../sdk/models/operations/status.md)                 | :heavy_minus_sign:                                                            | The status of the job                                                         |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |