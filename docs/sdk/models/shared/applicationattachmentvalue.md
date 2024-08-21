# ApplicationAttachmentValue

The content type of the attachment.

## Example Usage

```typescript
import { ApplicationAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationAttachmentValue = ApplicationAttachmentValue.Text;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Text`                 | text                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |