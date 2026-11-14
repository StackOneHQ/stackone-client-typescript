# ChannelsEnumValue

The Channels of the campaign.

## Example Usage

```typescript
import { ChannelsEnumValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ChannelsEnumValue = ChannelsEnumValue.Sms;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Email`                | email                  |
| `Sms`                  | sms                    |
| `WebPush`              | web_push               |
| `IosPush`              | ios_push               |
| `AndroidPush`          | android_push           |
| `Unknown`              | unknown                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |