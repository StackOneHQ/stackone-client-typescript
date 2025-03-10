# AtsUpdateBackgroundCheckPackageRequest

## Example Usage

```typescript
import { AtsUpdateBackgroundCheckPackageRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsUpdateBackgroundCheckPackageRequest = {
  atsUpdateBackgroundCheckPackagesRequestDto: {
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `atsUpdateBackgroundCheckPackagesRequestDto`                                                                                  | [shared.AtsUpdateBackgroundCheckPackagesRequestDto](../../../sdk/models/shared/atsupdatebackgroundcheckpackagesrequestdto.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `xAccountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The account identifier                                                                                                        |