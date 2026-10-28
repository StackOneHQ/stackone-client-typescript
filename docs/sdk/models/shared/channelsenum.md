# ChannelsEnum

## Example Usage

```typescript
import { ChannelsEnum, ChannelsEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ChannelsEnum = {
  sourceValue: "SMS",
  value: ChannelsEnumValue.Sms,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `sourceValue`                                                               | *shared.ChannelsEnumSourceValue*                                            | :heavy_minus_sign:                                                          | The source value of the Channels.                                           | SMS                                                                         |
| `value`                                                                     | [shared.ChannelsEnumValue](../../../sdk/models/shared/channelsenumvalue.md) | :heavy_minus_sign:                                                          | The Channels of the campaign.                                               | sms                                                                         |