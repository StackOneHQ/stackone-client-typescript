# CampaignSchemasValue

The Status of the campaign.

## Example Usage

```typescript
import { CampaignSchemasValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignSchemasValue = CampaignSchemasValue.UnmappedValue;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Draft`                | draft                  |
| `Archived`             | archived               |
| `Live`                 | live                   |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |