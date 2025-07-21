# HrisShiftResultStatus

The status of the shift

## Example Usage

```typescript
import { HrisShiftResultSchemasValue, HrisShiftResultStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisShiftResultStatus = {
  sourceValue: "Confirmed",
  value: HrisShiftResultSchemasValue.Confirmed,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                   | *shared.HrisShiftResultSchemasSourceValue*                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             | Confirmed                                                                                       |
| `value`                                                                                         | [shared.HrisShiftResultSchemasValue](../../../sdk/models/shared/hrisshiftresultschemasvalue.md) | :heavy_minus_sign:                                                                              | The status of the shift                                                                         | confirmed                                                                                       |