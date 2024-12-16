# Value

The Channels of the campaign.

## Example Usage

```typescript
import { Value } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Value = Value.Sms;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

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