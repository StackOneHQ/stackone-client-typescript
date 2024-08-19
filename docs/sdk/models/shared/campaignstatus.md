# CampaignStatus

Status of the Campaign

## Example Usage

```typescript
import { CampaignSchemasValue, CampaignStatus } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CampaignStatus = {
    sourceValue: "Email",
    value: CampaignSchemasValue.Archived,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `sourceValue`                                                                     | *shared.CampaignSchemasSourceValue*                                               | :heavy_minus_sign:                                                                | The source value of the Status.                                                   | Email                                                                             |
| `value`                                                                           | [shared.CampaignSchemasValue](../../../sdk/models/shared/campaignschemasvalue.md) | :heavy_minus_sign:                                                                | The Status of the campaign.                                                       | email                                                                             |