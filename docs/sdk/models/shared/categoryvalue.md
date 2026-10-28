# CategoryValue

The unified category level. For write operations: provide one of the listed enum values, or omit/set to "unmapped_value" to use source_value instead.

## Example Usage

```typescript
import { CategoryValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CategoryValue = CategoryValue.Primary;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Primary`              | primary                |
| `Secondary`            | secondary              |
| `Tertiary`             | tertiary               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |