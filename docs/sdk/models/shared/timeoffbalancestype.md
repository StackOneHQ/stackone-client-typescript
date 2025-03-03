# TimeOffBalancesType

The type of this policy

## Example Usage

```typescript
import { TimeOffBalancesType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesType = {};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                              | *shared.TimeOffBalancesSchemasSourceValue*                                                                                                 | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `value`                                                                                                                                    | [shared.TimeOffBalancesSchemasValue](../../../sdk/models/shared/timeoffbalancesschemasvalue.md)                                            | :heavy_minus_sign:                                                                                                                         | The unified value for the type of the time off policy. If the provider does not specify this unit, the value will be set to unmapped_value | holiday                                                                                                                                    |