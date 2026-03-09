# InAppMessagesValue

The unified message type.

## Example Usage

```typescript
import { InAppMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InAppMessagesValue = InAppMessagesValue.Email;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

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