# QuestionSchemasValue

The type of the question's condition

## Example Usage

```typescript
import { QuestionSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: QuestionSchemasValue = QuestionSchemasValue.EqualsTo;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `EqualsTo`             | equals_to              |
| `Contains`             | contains               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |