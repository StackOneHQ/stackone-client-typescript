# AttachmentContentType

## Example Usage

```typescript
import { AttachmentContentType, AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AttachmentContentType = {
  sourceValue: "Text",
  value: AttachmentValue.Text,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `sourceValue`                                                           | *shared.AttachmentSourceValue*                                          | :heavy_minus_sign:                                                      | The source value of the content type.                                   | Text                                                                    |
| `value`                                                                 | [shared.AttachmentValue](../../../sdk/models/shared/attachmentvalue.md) | :heavy_minus_sign:                                                      | The content type of the attachment.                                     | text                                                                    |