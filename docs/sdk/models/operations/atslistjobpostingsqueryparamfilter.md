# AtsListJobPostingsQueryParamFilter

ATS Job Postings Filter

## Example Usage

```typescript
import { AtsListJobPostingsQueryParamFilter } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsListJobPostingsQueryParamFilter = {
  createdAfter: "2020-01-01T00:00:00.000Z",
  updatedAfter: "2020-01-01T00:00:00.000Z",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `createdAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results created after that given date | 2020-01-01T00:00:00.000Z                                                      |
| `updatedAfter`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Use a string with a date to only select results updated after that given date | 2020-01-01T00:00:00.000Z                                                      |