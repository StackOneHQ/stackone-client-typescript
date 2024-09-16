# JobPostingContentSection

## Example Usage

```typescript
import { JobPostingContentSection, JobPostingContentSectionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingContentSection = {
  content: "This is a plain description",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  label: "Key Responsibilities",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "key_responsibilities",
    value: JobPostingContentSectionValue.Responsibilities,
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `content`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | This is a plain description                                                                       |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Unique identifier                                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                              |
| `label`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | Key Responsibilities                                                                              |
| `remoteId`                                                                                        | *string*                                                                                          | :heavy_minus_sign:                                                                                | Provider's unique identifier                                                                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                              |
| `type`                                                                                            | [shared.JobPostingContentSectionType](../../../sdk/models/shared/jobpostingcontentsectiontype.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |