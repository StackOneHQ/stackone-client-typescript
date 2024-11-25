# BackgroundCheckPackage

## Example Usage

```typescript
import { AssessmentsPackagesValue, BackgroundCheckPackage } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckPackage = {
  description: "Standard background package for hires",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Standard Background Check",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  tests: [
    {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      type: {
        sourceValue: "key_responsibilities",
        value: AssessmentsPackagesValue.Responsibilities,
      },
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Package description                                                               | Standard background package for hires                                             |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier                                                                 | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                              |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Package name                                                                      | Standard Background Check                                                         |
| `remoteId`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | Provider's unique identifier                                                      | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                              |
| `tests`                                                                           | [shared.AssessmentsPackages](../../../sdk/models/shared/assessmentspackages.md)[] | :heavy_minus_sign:                                                                | Package tests                                                                     |                                                                                   |