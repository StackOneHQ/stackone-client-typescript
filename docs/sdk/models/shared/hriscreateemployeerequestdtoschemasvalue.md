# HrisCreateEmployeeRequestDtoSchemasValue

## Example Usage

```typescript
import { HrisCreateEmployeeRequestDtoSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoSchemasValue =
  HrisCreateEmployeeRequestDtoSchemasValue.Terminated;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | active                 |
| `Pending`              | pending                |
| `Terminated`           | terminated             |
| `Leave`                | leave                  |
| `Inactive`             | inactive               |
| `Unknown`              | unknown                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |