# ContentType

## Example Usage

```typescript
import { ApplicationAttachmentValue, ContentType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ContentType = {
  sourceValue: "Text",
  value: ApplicationAttachmentValue.Text,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.ApplicationAttachmentSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the content type.                                                         | Text                                                                                          |
| `value`                                                                                       | [shared.ApplicationAttachmentValue](../../../sdk/models/shared/applicationattachmentvalue.md) | :heavy_minus_sign:                                                                            | The content type of the attachment.                                                           | text                                                                                          |