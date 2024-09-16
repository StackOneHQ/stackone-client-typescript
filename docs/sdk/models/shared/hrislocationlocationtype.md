# HRISLocationLocationType

The location type

## Example Usage

```typescript
import { HRISLocationLocationType, HRISLocationSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HRISLocationLocationType = {
  sourceValue: true,
  value: HRISLocationSchemasValue.Home,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceValue`                                                                             | *shared.HRISLocationSchemasSourceValue*                                                   | :heavy_minus_sign:                                                                        | The source value of the location type.                                                    | Home                                                                                      |
| `value`                                                                                   | [shared.HRISLocationSchemasValue](../../../sdk/models/shared/hrislocationschemasvalue.md) | :heavy_minus_sign:                                                                        | The type of the location.                                                                 | home                                                                                      |