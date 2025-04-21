# HrisUpdateEmployeeRequestDtoWorkTime

## Example Usage

```typescript
import { HrisUpdateEmployeeRequestDtoWorkTime } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisUpdateEmployeeRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  durationUnit: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The work time duration in ISO 8601 duration format                                                                        | P0Y0M0DT8H0M0S                                                                                                            |
| `durationUnit`                                                                                                            | [shared.HrisUpdateEmployeeRequestDtoDurationUnit](../../../sdk/models/shared/hrisupdateemployeerequestdtodurationunit.md) | :heavy_minus_sign:                                                                                                        | The duration unit of the work time                                                                                        | month                                                                                                                     |