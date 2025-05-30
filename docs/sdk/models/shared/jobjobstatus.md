# JobJobStatus

Status of the job

## Example Usage

```typescript
import { JobJobStatus, JobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobJobStatus = {
  sourceValue: "Published",
  value: JobValue.Published,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `sourceValue`                                             | *shared.JobSourceValue*                                   | :heavy_minus_sign:                                        | The source value of the job status.                       | Published                                                 |
| `value`                                                   | [shared.JobValue](../../../sdk/models/shared/jobvalue.md) | :heavy_minus_sign:                                        | The status of the job.                                    | published                                                 |