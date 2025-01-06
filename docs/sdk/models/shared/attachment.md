# Attachment

## Example Usage

```typescript
import { Attachment, AttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Attachment = {
  contentType: {
    sourceValue: "Text",
    value: AttachmentValue.Text,
  },
  url: "http://example.com/resume.pdf",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | [shared.AttachmentContentType](../../../sdk/models/shared/attachmentcontenttype.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `url`                                                                               | *string*                                                                            | :heavy_minus_sign:                                                                  | The URL of the attachment.                                                          | http://example.com/resume.pdf                                                       |