# TimeOffSchemasType

The type of this policy

## Example Usage

```typescript
import { TimeOffSchemasPolicyTypeValue, TimeOffSchemasType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffSchemasType = {
  value: TimeOffSchemasPolicyTypeValue.Holiday,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceValue`                                                                                                                              | *shared.TimeOffSchemasPolicyTypeSourceValue*                                                                                               | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `value`                                                                                                                                    | [shared.TimeOffSchemasPolicyTypeValue](../../../sdk/models/shared/timeoffschemaspolicytypevalue.md)                                        | :heavy_minus_sign:                                                                                                                         | The unified value for the type of the time off policy. If the provider does not specify this unit, the value will be set to unmapped_value | holiday                                                                                                                                    |