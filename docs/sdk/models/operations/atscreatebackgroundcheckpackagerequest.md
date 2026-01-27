# AtsCreateBackgroundCheckPackageRequest

## Example Usage

```typescript
import { AtsCreateBackgroundCheckPackageRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: AtsCreateBackgroundCheckPackageRequest = {
  atsCreateBackgroundCheckPackagesRequestDto: {
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
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `atsCreateBackgroundCheckPackagesRequestDto`                                                                                                                             | [shared.AtsCreateBackgroundCheckPackagesRequestDto](../../../sdk/models/shared/atscreatebackgroundcheckpackagesrequestdto.md)                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |