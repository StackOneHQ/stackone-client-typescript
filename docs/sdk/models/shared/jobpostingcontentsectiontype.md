# JobPostingContentSectionType

## Example Usage

```typescript
import { JobPostingContentSectionType, JobPostingContentSectionValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: JobPostingContentSectionType = {
  sourceValue: "key_responsibilities",
  value: JobPostingContentSectionValue.Responsibilities,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `sourceValue`                                                                                       | *shared.JobPostingContentSectionSourceValue*                                                        | :heavy_minus_sign:                                                                                  | The source value of the description type.                                                           | key_responsibilities                                                                                |
| `value`                                                                                             | [shared.JobPostingContentSectionValue](../../../sdk/models/shared/jobpostingcontentsectionvalue.md) | :heavy_minus_sign:                                                                                  | The type of the description.                                                                        | responsibilities                                                                                    |