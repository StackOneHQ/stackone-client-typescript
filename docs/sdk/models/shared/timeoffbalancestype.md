# TimeOffBalancesType

The type of this policy

## Example Usage

```typescript
import { TimeOffBalancesSchemasPolicyValue, TimeOffBalancesType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffBalancesType = {
  value: TimeOffBalancesSchemasPolicyValue.Holiday,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                              | *shared.TimeOffBalancesSchemasPolicySourceValue*                                                                                           | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `value`                                                                                                                                    | [shared.TimeOffBalancesSchemasPolicyValue](../../../sdk/models/shared/timeoffbalancesschemaspolicyvalue.md)                                | :heavy_minus_sign:                                                                                                                         | The unified value for the type of the time off policy. If the provider does not specify this unit, the value will be set to unmapped_value | holiday                                                                                                                                    |