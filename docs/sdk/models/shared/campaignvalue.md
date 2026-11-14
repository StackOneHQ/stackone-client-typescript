# CampaignValue

The schedule type of the campaign.

## Example Usage

```typescript
import { CampaignValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignValue = CampaignValue.Immediate;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Immediate`            | immediate              |
| `Scheduled`            | scheduled              |
| `Recurring`            | recurring              |
| `Custom`               | custom                 |
| `Triggered`            | triggered              |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |