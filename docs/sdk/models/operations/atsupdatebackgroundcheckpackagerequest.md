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
        id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
        name: "Test 1",
      },
    ],
  },
  prefer: "heartbeat",
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsUpdateBackgroundCheckPackagesRequestDto`                                                                                                                             | [shared.AtsUpdateBackgroundCheckPackagesRequestDto](../../../sdk/models/shared/atsupdatebackgroundcheckpackagesrequestdto.md)                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |