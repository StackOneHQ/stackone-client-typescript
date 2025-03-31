# TimeOffBalancesDurationUnit

The duration unit of the current policy

## Example Usage

```typescript
import { TimeOffBalancesDurationUnit, TimeOffBalancesSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesDurationUnit = {
  value: TimeOffBalancesSchemasValue.Hours,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.TimeOffBalancesSchemasSourceValue*                                                                            | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `value`                                                                                                               | [shared.TimeOffBalancesSchemasValue](../../../sdk/models/shared/timeoffbalancesschemasvalue.md)                       | :heavy_minus_sign:                                                                                                    | The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown | hours                                                                                                                 |