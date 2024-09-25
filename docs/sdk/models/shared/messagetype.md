# MessageType

Stackone enum identifying the type of message associated with the content.

## Example Usage

```typescript
import { MessageType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessageType = {
  sourceValue: "Email",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.CreateMessageSourceValue*                                             | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.CreateMessageValue](../../../sdk/models/shared/createmessagevalue.md) | :heavy_minus_sign:                                                            | The unified message type.                                                     |                                                                               |