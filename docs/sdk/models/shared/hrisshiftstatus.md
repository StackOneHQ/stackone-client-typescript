# HrisShiftStatus

The status of the shift

## Example Usage

```typescript
import { HrisShiftSchemasValue, HrisShiftStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftStatus = {
  sourceValue: "Confirmed",
  value: HrisShiftSchemasValue.Confirmed,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `sourceValue`                                                                       | *shared.HrisShiftSchemasSourceValue*                                                | :heavy_minus_sign:                                                                  | N/A                                                                                 | Confirmed                                                                           |
| `value`                                                                             | [shared.HrisShiftSchemasValue](../../../sdk/models/shared/hrisshiftschemasvalue.md) | :heavy_minus_sign:                                                                  | The status of the shift                                                             | confirmed                                                                           |