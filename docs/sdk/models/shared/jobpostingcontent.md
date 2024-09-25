# JobPostingContent

## Example Usage

```typescript
import { JobPostingContent, JobPostingContentSectionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingContent = {
  html: "<p>This is an HTML description</p>",
  plain: "This is a plain text description",
  sections: [
    {
      content: "This is a plain description",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      label: "Key Responsibilities",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        sourceValue: "key_responsibilities",
        value: JobPostingContentSectionValue.Responsibilities,
      },
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `html`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `plain`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `sections`                                                                                  | [shared.JobPostingContentSection](../../../sdk/models/shared/jobpostingcontentsection.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |