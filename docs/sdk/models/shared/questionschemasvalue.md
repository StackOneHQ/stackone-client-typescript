# QuestionSchemasValue

The type of the question's condition

## Example Usage

```typescript
import { QuestionSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: QuestionSchemasValue = QuestionSchemasValue.EqualsTo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `EqualsTo`             | equals_to              |
| `Contains`             | contains               |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |