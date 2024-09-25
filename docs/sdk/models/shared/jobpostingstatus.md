# JobPostingStatus

## Example Usage

```typescript
import { JobPostingSchemasStatusValue, JobPostingStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingStatus = {
  sourceValue: "Live",
  value: JobPostingSchemasStatusValue.Live,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                     | *shared.JobPostingSchemasStatusSourceValue*                                                       | :heavy_minus_sign:                                                                                | The source value of the job postings status.                                                      | Live                                                                                              |
| `value`                                                                                           | [shared.JobPostingSchemasStatusValue](../../../sdk/models/shared/jobpostingschemasstatusvalue.md) | :heavy_minus_sign:                                                                                | The status of the job postings.                                                                   | live                                                                                              |