# SkillsValue

## Example Usage

```typescript
import { SkillsValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SkillsValue = SkillsValue.Tertiary;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Primary`              | primary                |
| `Secondary`            | secondary              |
| `Tertiary`             | tertiary               |
| -                      | `Unrecognized<string>` |