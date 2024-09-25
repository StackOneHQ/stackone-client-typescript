# AtsUpdateJobRequestDtoJobStatus

Status of the job

## Example Usage

```typescript
import { AtsUpdateJobRequestDtoJobStatus, AtsUpdateJobRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateJobRequestDtoJobStatus = {
  sourceValue: "Published",
  value: AtsUpdateJobRequestDtoValue.Published,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                   | *shared.AtsUpdateJobRequestDtoSourceValue*                                                      | :heavy_minus_sign:                                                                              | The source value of the job status.                                                             | Published                                                                                       |
| `value`                                                                                         | [shared.AtsUpdateJobRequestDtoValue](../../../sdk/models/shared/atsupdatejobrequestdtovalue.md) | :heavy_minus_sign:                                                                              | The status of the job.                                                                          | published                                                                                       |