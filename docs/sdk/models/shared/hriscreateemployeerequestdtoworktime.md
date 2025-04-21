# HrisCreateEmployeeRequestDtoWorkTime

## Example Usage

```typescript
import { HrisCreateEmployeeRequestDtoWorkTime } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: HrisCreateEmployeeRequestDtoWorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  durationUnit: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                                | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The work time duration in ISO 8601 duration format                                                                        | P0Y0M0DT8H0M0S                                                                                                            |
| `durationUnit`                                                                                                            | [shared.HrisCreateEmployeeRequestDtoDurationUnit](../../../sdk/models/shared/hriscreateemployeerequestdtodurationunit.md) | :heavy_minus_sign:                                                                                                        | The duration unit of the work time                                                                                        | month                                                                                                                     |