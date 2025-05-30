# BackgroundCheckPackageResult

## Example Usage

```typescript
import { BackgroundCheckPackageResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: BackgroundCheckPackageResult = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.BackgroundCheckPackage](../../../sdk/models/shared/backgroundcheckpackage.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `raw`                                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                     | :heavy_minus_sign:                                                                    | N/A                                                                                   |