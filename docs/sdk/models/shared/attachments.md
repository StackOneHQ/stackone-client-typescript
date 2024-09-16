# Attachments

## Example Usage

```typescript
import { AssessmentsResultsSchemasValue, Attachments } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Attachments = {
  contentType: {
    sourceValue: "Text",
    value: AssessmentsResultsSchemasValue.Text,
  },
  url: "http://example.com/resume.pdf",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | [shared.AssessmentsResultsContentType](../../../sdk/models/shared/assessmentsresultscontenttype.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `url`                                                                                               | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The URL of the attachment.                                                                          | http://example.com/resume.pdf                                                                       |