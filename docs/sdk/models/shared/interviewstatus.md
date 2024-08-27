# InterviewStatus

## Example Usage

```typescript
import { InterviewStatus, InterviewValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewStatus = {
    sourceValue: {},
    value: InterviewValue.Unscheduled,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `sourceValue`                                                         | *shared.InterviewSourceValue*                                         | :heavy_minus_sign:                                                    | The source value of the interview status.                             | Unscheduled                                                           |
| `value`                                                               | [shared.InterviewValue](../../../sdk/models/shared/interviewvalue.md) | :heavy_minus_sign:                                                    | The status of the interview.                                          | unscheduled                                                           |