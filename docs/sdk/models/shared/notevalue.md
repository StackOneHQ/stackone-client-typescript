# NoteValue

The visibility of the notes.

## Example Usage

```typescript
import { NoteValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NoteValue = NoteValue.Public;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Private`              | private                |
| `Public`               | public                 |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |