# DurationUnit

The duration unit of the current policy

## Example Usage

```typescript
import { DurationUnit, TimeOffPoliciesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DurationUnit = {
  value: TimeOffPoliciesValue.Hours,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.TimeOffPoliciesSourceValue*                                                                                   | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `value`                                                                                                               | [shared.TimeOffPoliciesValue](../../../sdk/models/shared/timeoffpoliciesvalue.md)                                     | :heavy_minus_sign:                                                                                                    | The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown | hours                                                                                                                 |