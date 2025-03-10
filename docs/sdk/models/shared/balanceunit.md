# BalanceUnit

The duration unit of the current balance

## Example Usage

```typescript
import { BalanceUnit } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BalanceUnit = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.TimeOffBalancesSourceValue*                                                                                   | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `value`                                                                                                               | [shared.TimeOffBalancesValue](../../../sdk/models/shared/timeoffbalancesvalue.md)                                     | :heavy_minus_sign:                                                                                                    | The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown | hours                                                                                                                 |