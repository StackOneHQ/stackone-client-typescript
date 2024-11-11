# EmailMessagesMessageType

## Example Usage

```typescript
import { EmailMessagesMessageType, EmailMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmailMessagesMessageType = {
  sourceValue: "Email",
  value: EmailMessagesValue.Email,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.EmailMessagesSourceValue*                                             | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.EmailMessagesValue](../../../sdk/models/shared/emailmessagesvalue.md) | :heavy_minus_sign:                                                            | The unified message type.                                                     | email                                                                         |