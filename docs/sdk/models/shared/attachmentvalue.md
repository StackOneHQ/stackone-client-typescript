# AttachmentValue

The content type of the attachment.

## Example Usage

```typescript
import { AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AttachmentValue = AttachmentValue.Text;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Text`                 | text                   |
| `Pdf`                  | pdf                    |
| `Video`                | video                  |
| `Other`                | other                  |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |