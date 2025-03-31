# CustomFieldDefinitionValue

## Example Usage

```typescript
import { CustomFieldDefinitionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CustomFieldDefinitionValue = CustomFieldDefinitionValue.Date;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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
| -                      | `Unrecognized<string>` |