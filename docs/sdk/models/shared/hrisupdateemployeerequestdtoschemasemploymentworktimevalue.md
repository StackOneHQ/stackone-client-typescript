# HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue

The unified value for the period.

## Example Usage

```typescript
import { HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue =
  HrisUpdateEmployeeRequestDtoSchemasEmploymentWorkTimeValue.Month;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Day`                  | day                    |
| `Week`                 | week                   |
| `Month`                | month                  |
| `Year`                 | year                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |