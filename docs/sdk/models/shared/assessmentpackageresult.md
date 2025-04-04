# AssessmentPackageResult

## Example Usage

```typescript
import { AssessmentPackageResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: AssessmentPackageResult = {
  data: {
    description:
      "Skills test to gauge a candidate's proficiency in job-specific skills",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Test 1",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.AssessmentPackage](../../../sdk/models/shared/assessmentpackage.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `raw`                                                                       | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]           | :heavy_minus_sign:                                                          | N/A                                                                         |