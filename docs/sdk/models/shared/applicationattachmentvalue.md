# ApplicationAttachmentValue

The content type of the attachment.

## Example Usage

```typescript
import { ApplicationAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationAttachmentValue = ApplicationAttachmentValue.Text;

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