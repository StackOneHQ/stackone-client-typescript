# AtsJobJobStatus

Status of the job

## Example Usage

```typescript
import { AtsJobJobStatus, AtsJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsJobJobStatus = {
  sourceValue: "Published",
  value: AtsJobValue.Published,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `sourceValue`                                                   | *shared.AtsJobSourceValue*                                      | :heavy_minus_sign:                                              | The source value of the job status.                             | Published                                                       |
| `value`                                                         | [shared.AtsJobValue](../../../sdk/models/shared/atsjobvalue.md) | :heavy_minus_sign:                                              | The status of the job.                                          | published                                                       |