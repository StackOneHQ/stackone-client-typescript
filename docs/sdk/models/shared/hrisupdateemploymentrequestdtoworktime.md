# HrisUpdateEmploymentRequestDtoWorkTime

## Example Usage

```typescript
import {
  HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue,
  HrisUpdateEmploymentRequestDtoWorkTime,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmploymentRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  period: {
    value: HrisUpdateEmploymentRequestDtoSchemasWorkTimeValue.Month,
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The work time duration in ISO 8601 duration format                                                                | P0Y0M0DT8H0M0S                                                                                                    |
| `period`                                                                                                          | [shared.HrisUpdateEmploymentRequestDtoPeriod](../../../sdk/models/shared/hrisupdateemploymentrequestdtoperiod.md) | :heavy_minus_sign:                                                                                                | The period of the work time                                                                                       | month                                                                                                             |