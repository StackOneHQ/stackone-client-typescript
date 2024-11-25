# AssessmentsAttachment

## Example Usage

```typescript
import { AssessmentsAttachment, AssessmentsAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsAttachment = {
  contentType: {
    sourceValue: "Text",
    value: AssessmentsAttachmentValue.Text,
  },
  url: "http://example.com/resume.pdf",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | [shared.AssessmentsAttachmentContentType](../../../sdk/models/shared/assessmentsattachmentcontenttype.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |
| `url`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The URL of the attachment.                                                                                | http://example.com/resume.pdf                                                                             |