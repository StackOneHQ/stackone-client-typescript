# AttachmentValue

The content type of the attachment.

## Example Usage

```typescript
import { AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AttachmentValue = AttachmentValue.Text;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Text`                 | text                   |
| `Pdf`                  | pdf                    |
| `Video`                | video                  |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |