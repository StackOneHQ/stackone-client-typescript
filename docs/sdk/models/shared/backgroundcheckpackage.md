# BackgroundCheckPackage

## Example Usage

```typescript
import { BackgroundCheckPackage } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckPackage = {
  description:
    "Skills test to gauge a candidate's proficiency in job-specific skills",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  name: "Test 1",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  tests: [
    {
      description:
        "Skills test to gauge a candidate's proficiency in job-specific skills",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      name: "Test 1",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Package description                                                   | Skills test to gauge a candidate's proficiency in job-specific skills |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | Unique identifier                                                     | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Package name                                                          | Test 1                                                                |
| `remoteId`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | Provider's unique identifier                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                  |
| `tests`                                                               | [shared.Package](../../../sdk/models/shared/package.md)[]             | :heavy_minus_sign:                                                    | Package tests                                                         |                                                                       |