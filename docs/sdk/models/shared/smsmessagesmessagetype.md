# SmsMessagesMessageType

## Example Usage

```typescript
import { SmsMessagesMessageType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SmsMessagesMessageType = {
  sourceValue: "Email",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.SmsMessagesSourceValue*                                               | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.SmsMessagesValue](../../../sdk/models/shared/smsmessagesvalue.md)     | :heavy_minus_sign:                                                            | The unified message type.                                                     |                                                                               |