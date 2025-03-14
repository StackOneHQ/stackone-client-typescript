# AtsUpdateBackgroundCheckPackagesRequestDto

## Example Usage

```typescript
import { AtsUpdateBackgroundCheckPackagesRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsUpdateBackgroundCheckPackagesRequestDto = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  name: "Test 1",
  passthrough: {
    "other_known_names": "John Doe",
  },
  tests: [
    {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Package description                                                   | Skills test to gauge a candidate's proficiency in job-specific skills |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Package name                                                          | Test 1                                                                |
| `passthrough`                                                         | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | Value to pass through to the provider                                 | {<br/>"other_known_names": "John Doe"<br/>}                           |
| `tests`                                                               | [shared.UpdatePackage](../../../sdk/models/shared/updatepackage.md)[] | :heavy_minus_sign:                                                    | Package tests                                                         |                                                                       |