# TimeOffPoliciesType

The type of this policy

## Example Usage

```typescript
import { TimeOffPoliciesSchemasValue, TimeOffPoliciesType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffPoliciesType = {
  value: TimeOffPoliciesSchemasValue.Holiday,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                              | *shared.TimeOffPoliciesSchemasSourceValue*                                                                                                 | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `value`                                                                                                                                    | [shared.TimeOffPoliciesSchemasValue](../../../sdk/models/shared/timeoffpoliciesschemasvalue.md)                                            | :heavy_minus_sign:                                                                                                                         | The unified value for the type of the time off policy. If the provider does not specify this unit, the value will be set to unmapped_value | holiday                                                                                                                                    |