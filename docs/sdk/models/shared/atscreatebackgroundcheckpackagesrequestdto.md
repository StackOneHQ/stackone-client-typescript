# AtsCreateBackgroundCheckPackagesRequestDto

## Example Usage

```typescript
import { AtsCreateBackgroundCheckPackagesRequestDto, CreateAssessmentsPackagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateBackgroundCheckPackagesRequestDto = {
  description: "Standard background package for hires",
  name: "Standard Background Check",
  passthrough: {
    "other_known_names": "John Doe",
  },
  tests: [
    {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      name: "Test 1",
      type: {
        sourceValue: "key_responsibilities",
        value: CreateAssessmentsPackagesValue.Responsibilities,
      },
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Package description                                                                           | Standard background package for hires                                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Package name                                                                                  | Standard Background Check                                                                     |
| `passthrough`                                                                                 | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Value to pass through to the provider                                                         | {<br/>"other_known_names": "John Doe"<br/>}                                                   |
| `tests`                                                                                       | [shared.CreateAssessmentsPackages](../../../sdk/models/shared/createassessmentspackages.md)[] | :heavy_minus_sign:                                                                            | Package tests                                                                                 |                                                                                               |