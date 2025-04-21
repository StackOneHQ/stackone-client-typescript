# WorkTime

## Example Usage

```typescript
import { WorkTime } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: WorkTime = {
  duration: "P0Y0M0DT8H0M0S",
  durationUnit: {},
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The work time duration in ISO 8601 duration format                                                                | P0Y0M0DT8H0M0S                                                                                                    |
| `durationUnit`                                                                                                    | [shared.CreateEmploymentApiModelDurationUnit](../../../sdk/models/shared/createemploymentapimodeldurationunit.md) | :heavy_minus_sign:                                                                                                | The duration unit of the work time                                                                                | month                                                                                                             |