# CreateMessageValue

The unified message type.

## Example Usage

```typescript
import { CreateMessageValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateMessageValue = CreateMessageValue.Email;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Email`                | email                  |
| `Sms`                  | sms                    |
| `Push`                 | push                   |
| `WebPush`              | web_push               |
| `IosPush`              | ios_push               |
| `AndroidPush`          | android_push           |
| `AppPush`              | app_push               |
| `OmniChannel`          | omni_channel           |
| `ContentBlock`         | content_block          |
| `InApp`                | in_app                 |
| `Unknown`              | unknown                |
| `UnmappedValue`        | unmapped_value         |
| -                      | `Unrecognized<string>` |