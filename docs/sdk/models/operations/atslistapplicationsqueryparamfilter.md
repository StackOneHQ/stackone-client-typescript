# AtsListApplicationsQueryParamFilter

ATS Application Filter

## Example Usage

```typescript
import { AtsListApplicationsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListApplicationsQueryParamFilter = {
  createdAfter: "2020-01-01T00:00:00.000Z",
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `createdAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results created after that given date | 2020-01-01T00:00:00.000Z                                                      |
| `jobId`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select applications by job_id                                       |                                                                               |
| `stage`                                                                       | *string*                                                                      | :heavy_minus_sign:                                                            | Filter to select applications by stage and sub-stage                          |                                                                               |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |