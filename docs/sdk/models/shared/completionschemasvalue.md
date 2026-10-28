# CompletionSchemasValue

The StackOne unified result status.

## Example Usage

```typescript
import { CompletionSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CompletionSchemasValue = CompletionSchemasValue.UnmappedValue;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Pass`                 | Pass                   |
| `Fail`                 | Fail                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |