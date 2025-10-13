# CreateSkillsApiModelSchemasLevelValue

The unified skill level. For write operations: provide one of the listed enum values, or omit/set to "unmapped_value" to use source_value instead.

## Example Usage

```typescript
import { CreateSkillsApiModelSchemasLevelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateSkillsApiModelSchemasLevelValue =
  CreateSkillsApiModelSchemasLevelValue.UnmappedValue;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Primary`              | primary                |
| `Secondary`            | secondary              |
| `Tertiary`             | tertiary               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |