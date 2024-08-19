# NoteValue

The visibility of the notes.

## Example Usage

```typescript
import { NoteValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NoteValue = NoteValue.Public;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Private`              | private                |
| `Public`               | public                 |
| -                      | `Unrecognized<string>` |