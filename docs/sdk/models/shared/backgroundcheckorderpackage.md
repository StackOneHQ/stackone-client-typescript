# BackgroundCheckOrderPackage

## Example Usage

```typescript
import { AssessmentsPackagesTestApiModelValue, BackgroundCheckOrderPackage } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckOrderPackage = {
  description: "Standard background package for hires",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Standard Background Check",
  tests: [
    {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
      type: {
        sourceValue: "key_responsibilities",
        value: AssessmentsPackagesTestApiModelValue.Responsibilities,
      },
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `description`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Package description                                                                                       | Standard background package for hires                                                                     |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Unique identifier                                                                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                      |
| `name`                                                                                                    | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Package name                                                                                              | Standard Background Check                                                                                 |
| `tests`                                                                                                   | [shared.AssessmentsPackagesTestApiModel](../../../sdk/models/shared/assessmentspackagestestapimodel.md)[] | :heavy_minus_sign:                                                                                        | Package tests                                                                                             |                                                                                                           |