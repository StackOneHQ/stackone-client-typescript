# ApplicationAttachment

## Example Usage

```typescript
import { ApplicationAttachment, ApplicationAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ApplicationAttachment = {
  content: "Base64 encoded content",
  contentType: {
    sourceValue: "Text",
    value: ApplicationAttachmentValue.Text,
  },
  fileName: "resume.pdf",
  url: "http://example.com/resume.pdf",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `content`                                                       | *string*                                                        | :heavy_minus_sign:                                              | The content of the attachment.                                  | Base64 encoded content                                          |
| `contentType`                                                   | [shared.ContentType](../../../sdk/models/shared/contenttype.md) | :heavy_minus_sign:                                              | N/A                                                             |                                                                 |
| `fileName`                                                      | *string*                                                        | :heavy_minus_sign:                                              | The file name of the attachment.                                | resume.pdf                                                      |
| `url`                                                           | *string*                                                        | :heavy_minus_sign:                                              | The URL of the attachment.                                      | http://example.com/resume.pdf                                   |