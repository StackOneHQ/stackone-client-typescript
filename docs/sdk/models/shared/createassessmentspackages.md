# CreateAssessmentsPackages

## Example Usage

```typescript
import { CreateAssessmentsPackages, CreateAssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateAssessmentsPackages = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  name: "Test 1",
  type: {
    sourceValue: "key_responsibilities",
    value: CreateAssessmentsPackagesValue.Responsibilities,
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Package description                                                                                 | Skills test to gauge a candidate's proficiency in job-specific skills                               |
| `name`                                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Package name                                                                                        | Test 1                                                                                              |
| `type`                                                                                              | [shared.CreateAssessmentsPackagesType](../../../sdk/models/shared/createassessmentspackagestype.md) | :heavy_minus_sign:                                                                                  | Package type                                                                                        |                                                                                                     |