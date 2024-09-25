# AssessmentsPackages

## Example Usage

```typescript
import { AssessmentsPackages, AssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackages = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Skill Assessment",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  type: {
    sourceValue: "key_responsibilities",
    value: AssessmentsPackagesValue.Responsibilities,
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Assessment description                                                                  | Skills test to gauge a candidate's proficiency in job-specific skills                   |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | Unique identifier                                                                       | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                    |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | Assessment name                                                                         | Skill Assessment                                                                        |
| `remoteId`                                                                              | *string*                                                                                | :heavy_minus_sign:                                                                      | Provider's unique identifier                                                            | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                    |
| `type`                                                                                  | [shared.AssessmentsPackagesType](../../../sdk/models/shared/assessmentspackagestype.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |