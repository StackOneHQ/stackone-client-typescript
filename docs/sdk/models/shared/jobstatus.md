# JobStatus

Status of the job

## Example Usage

```typescript
import { AtsCreateJobRequestDtoValue, JobStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobStatus = {
  sourceValue: "Published",
  value: AtsCreateJobRequestDtoValue.Published,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                   | *shared.AtsCreateJobRequestDtoSourceValue*                                                      | :heavy_minus_sign:                                                                              | The source value of the job status.                                                             | Published                                                                                       |
| `value`                                                                                         | [shared.AtsCreateJobRequestDtoValue](../../../sdk/models/shared/atscreatejobrequestdtovalue.md) | :heavy_minus_sign:                                                                              | The status of the job.                                                                          | published                                                                                       |