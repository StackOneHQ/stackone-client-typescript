# AtsCreateBackgroundCheckPackageRequest

## Example Usage

```typescript
import { AtsCreateBackgroundCheckPackageRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsCreateBackgroundCheckPackageRequest = {
  atsCreateBackgroundCheckPackagesRequestDto: {
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
      },
    ],
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `atsCreateBackgroundCheckPackagesRequestDto`                                                                                  | [shared.AtsCreateBackgroundCheckPackagesRequestDto](../../../sdk/models/shared/atscreatebackgroundcheckpackagesrequestdto.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `xAccountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The account identifier                                                                                                        |