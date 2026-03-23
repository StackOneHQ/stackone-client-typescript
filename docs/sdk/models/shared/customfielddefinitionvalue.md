# CustomFieldDefinitionValue

## Example Usage

```typescript
import { CustomFieldDefinitionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomFieldDefinitionValue = CustomFieldDefinitionValue.Checkbox;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Date`                 | date                   |
| `Float`                | float                  |
| `Integer`              | integer                |
| `List`                 | list                   |
| `Checkbox`             | checkbox               |
| `Text`                 | text                   |
| `Boolean`              | boolean                |
| `SingleSelect`         | single_select          |
| `MultiSelect`          | multi_select           |
| `Url`                  | url                    |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |