# TimeOffDurationUnit

The duration unit of the current policy

## Example Usage

```typescript
import { TimeOffDurationUnit, TimeOffSchemasPolicyValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TimeOffDurationUnit = {
  value: TimeOffSchemasPolicyValue.Hours,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                                         | *shared.TimeOffSchemasPolicySourceValue*                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `value`                                                                                                               | [shared.TimeOffSchemasPolicyValue](../../../sdk/models/shared/timeoffschemaspolicyvalue.md)                           | :heavy_minus_sign:                                                                                                    | The unified value for the duration unit. If the provider does not specify this unit, the value will be set to unknown | hours                                                                                                                 |