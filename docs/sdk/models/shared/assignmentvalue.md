# AssignmentValue

The StackOne unified learning object type.

## Example Usage

```typescript
import { AssignmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssignmentValue = AssignmentValue.Content;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Content`              | content                |
| `Course`               | course                 |
| `Collection`           | collection             |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |