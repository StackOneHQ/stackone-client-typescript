# NoteVisibility

Visibility of the note

## Example Usage

```typescript
import { NoteValue, NoteVisibility } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: NoteVisibility = {
  sourceValue: "Public",
  value: NoteValue.Public,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `sourceValue`                                               | *shared.NoteSourceValue*                                    | :heavy_minus_sign:                                          | The source value of the notes visibility.                   | Public                                                      |
| `value`                                                     | [shared.NoteValue](../../../sdk/models/shared/notevalue.md) | :heavy_minus_sign:                                          | The visibility of the notes.                                | public                                                      |