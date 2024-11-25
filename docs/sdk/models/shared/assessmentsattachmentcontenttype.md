# AssessmentsAttachmentContentType

## Example Usage

```typescript
import { AssessmentsAttachmentContentType, AssessmentsAttachmentValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsAttachmentContentType = {
  sourceValue: "Text",
  value: AssessmentsAttachmentValue.Text,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                 | *shared.AssessmentsAttachmentSourceValue*                                                     | :heavy_minus_sign:                                                                            | The source value of the content type.                                                         | Text                                                                                          |
| `value`                                                                                       | [shared.AssessmentsAttachmentValue](../../../sdk/models/shared/assessmentsattachmentvalue.md) | :heavy_minus_sign:                                                                            | The content type of the attachment.                                                           | text                                                                                          |