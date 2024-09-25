# ScheduledInterviewInterviewStatus

## Example Usage

```typescript
import { ScheduledInterviewInterviewStatus, ScheduledInterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScheduledInterviewInterviewStatus = {
  sourceValue: "Unscheduled",
  value: ScheduledInterviewValue.Unscheduled,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `sourceValue`                                                                           | *shared.ScheduledInterviewSourceValue*                                                  | :heavy_minus_sign:                                                                      | The source value of the interview status.                                               | Unscheduled                                                                             |
| `value`                                                                                 | [shared.ScheduledInterviewValue](../../../sdk/models/shared/scheduledinterviewvalue.md) | :heavy_minus_sign:                                                                      | The status of the interview.                                                            | unscheduled                                                                             |