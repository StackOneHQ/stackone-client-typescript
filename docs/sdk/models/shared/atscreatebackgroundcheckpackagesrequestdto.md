# AtsCreateBackgroundCheckPackagesRequestDto

## Example Usage

```typescript
import { AtsCreateBackgroundCheckPackagesRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AtsCreateBackgroundCheckPackagesRequestDto = {
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
| `tests`                                                               | [shared.CreatePackage](../../../sdk/models/shared/createpackage.md)[] | :heavy_minus_sign:                                                    | Package tests                                                         |                                                                       |