# FieldType

The type of the field

## Example Usage

```typescript
import { FieldType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: FieldType = FieldType.Boolean;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ShortText`            | short_text             |
| `LongText`             | long_text              |
| `MultiSelect`          | multi_select           |
| `SingleSelect`         | single_select          |
| `Boolean`              | boolean                |
| `Number`               | number                 |
| `Date`                 | date                   |
| `Phone`                | phone                  |
| `Email`                | email                  |
| `Score`                | score                  |
| `Location`             | location               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |