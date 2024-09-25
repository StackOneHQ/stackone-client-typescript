# MessageMessageType

Stackone enum identifying the type of message associated with the content.

## Example Usage

```typescript
import { MessageMessageType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessageMessageType = {
  sourceValue: "Email",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.MessageSourceValue*                                                   | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.MessageValue](../../../sdk/models/shared/messagevalue.md)             | :heavy_minus_sign:                                                            | The unified message type.                                                     |                                                                               |