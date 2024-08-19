# PushMessagesMessageType

## Example Usage

```typescript
import { PushMessagesMessageType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PushMessagesMessageType = {
    sourceValue: "Email",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.PushMessagesSourceValue*                                              | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.PushMessagesValue](../../../sdk/models/shared/pushmessagesvalue.md)   | :heavy_minus_sign:                                                            | The unified message type.                                                     |                                                                               |