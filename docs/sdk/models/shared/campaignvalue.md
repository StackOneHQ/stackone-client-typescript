# CampaignValue

The schedule type of the campaign.

## Example Usage

```typescript
import { CampaignValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignValue = CampaignValue.Immediate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Immediate`            | immediate              |
| `Scheduled`            | scheduled              |
| `Recurring`            | recurring              |
| `Custom`               | custom                 |
| `Triggered`            | triggered              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |