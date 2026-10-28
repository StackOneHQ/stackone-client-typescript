# AssignmentValue

The StackOne unified learning object type.

## Example Usage

```typescript
import { AssignmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentValue = AssignmentValue.Content;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Content`              | content                |
| `Course`               | course                 |
| `Collection`           | collection             |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |