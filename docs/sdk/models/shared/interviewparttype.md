# InterviewPartType

## Example Usage

```typescript
import { InterviewPartType, InterviewPartValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InterviewPartType = {
  sourceValue: "Onsite Interview",
  value: InterviewPartValue.OnSite,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.InterviewPartSourceValue*                                             | :heavy_minus_sign:                                                            | The source value of the interview type.                                       | Onsite Interview                                                              |
| `value`                                                                       | [shared.InterviewPartValue](../../../sdk/models/shared/interviewpartvalue.md) | :heavy_minus_sign:                                                            | The type of the interview.                                                    | on_site                                                                       |