# ScheduleType

The schedule type

## Example Usage

```typescript
import { CampaignValue, ScheduleType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ScheduleType = {
  sourceValue: "Immediate",
  value: CampaignValue.Immediate,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sourceValue`                                                       | *shared.CampaignSourceValue*                                        | :heavy_minus_sign:                                                  | The source value of the schedule type.                              | Immediate                                                           |
| `value`                                                             | [shared.CampaignValue](../../../sdk/models/shared/campaignvalue.md) | :heavy_minus_sign:                                                  | The schedule type of the campaign.                                  | immediate                                                           |