# HrisJobStatus

Status of the job

## Example Usage

```typescript
import { HrisJobStatus, HrisJobValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisJobStatus = {
  value: HrisJobValue.Open,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `sourceValue`                                                     | *shared.HrisJobSourceValue*                                       | :heavy_minus_sign:                                                | The source value of the job status.                               |                                                                   |
| `value`                                                           | [shared.HrisJobValue](../../../sdk/models/shared/hrisjobvalue.md) | :heavy_minus_sign:                                                | The status of the job.                                            | open                                                              |