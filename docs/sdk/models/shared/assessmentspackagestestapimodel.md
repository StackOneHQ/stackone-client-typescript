# AssessmentsPackagesTestApiModel

## Example Usage

```typescript
import { AssessmentsPackagesTestApiModel, AssessmentsPackagesTestApiModelValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentsPackagesTestApiModel = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Test 1",
  type: {
    sourceValue: "key_responsibilities",
    value: AssessmentsPackagesTestApiModelValue.Responsibilities,
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Package description                                                                                             | Skills test to gauge a candidate's proficiency in job-specific skills                                           |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Unique identifier                                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                            |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Package name                                                                                                    | Test 1                                                                                                          |
| `type`                                                                                                          | [shared.AssessmentsPackagesTestApiModelType](../../../sdk/models/shared/assessmentspackagestestapimodeltype.md) | :heavy_minus_sign:                                                                                              | Package type                                                                                                    |                                                                                                                 |