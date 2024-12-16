# ChannelsEnum

## Example Usage

```typescript
import { ChannelsEnum, Value } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ChannelsEnum = {
  sourceValue: "SMS",
  value: Value.Sms,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `sourceValue`                                       | *shared.SourceValue*                                | :heavy_minus_sign:                                  | The source value of the Channels.                   | SMS                                                 |
| `value`                                             | [shared.Value](../../../sdk/models/shared/value.md) | :heavy_minus_sign:                                  | The Channels of the campaign.                       | sms                                                 |