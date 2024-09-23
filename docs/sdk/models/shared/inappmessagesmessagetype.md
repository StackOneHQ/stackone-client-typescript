# InAppMessagesMessageType

## Example Usage

```typescript
import { InAppMessagesMessageType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: InAppMessagesMessageType = {
  sourceValue: "Email",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `sourceValue`                                                                 | *shared.InAppMessagesSourceValue*                                             | :heavy_minus_sign:                                                            | The original value from the provider used to derive the unified message type. | Email                                                                         |
| `value`                                                                       | [shared.InAppMessagesValue](../../../sdk/models/shared/inappmessagesvalue.md) | :heavy_minus_sign:                                                            | The unified message type.                                                     |                                                                               |