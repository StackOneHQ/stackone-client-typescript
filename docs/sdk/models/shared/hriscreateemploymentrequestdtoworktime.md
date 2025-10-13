# HrisCreateEmploymentRequestDtoWorkTime

## Example Usage

```typescript
import {
  HrisCreateEmploymentRequestDtoSchemasWorkTimeValue,
  HrisCreateEmploymentRequestDtoWorkTime,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmploymentRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: HrisCreateEmploymentRequestDtoSchemasWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The work time duration in ISO 8601 duration format                                                                | P0Y0M0DT8H0M0S                                                                                                    |
| `period`                                                                                                          | [shared.HrisCreateEmploymentRequestDtoPeriod](../../../sdk/models/shared/hriscreateemploymentrequestdtoperiod.md) | :heavy_minus_sign:                                                                                                | The period of the work time                                                                                       | month                                                                                                             |