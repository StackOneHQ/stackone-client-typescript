# CreateMessage

## Example Usage

```typescript
import { CreateMessage } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: CreateMessage = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  messageType: {
    sourceValue: [
      "Email",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier                                                          | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                       |
| `messageContent`                                                           | *shared.MessageContent*                                                    | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |
| `messageType`                                                              | [shared.MessageType](../../../sdk/models/shared/messagetype.md)            | :heavy_minus_sign:                                                         | Stackone enum identifying the type of message associated with the content. |                                                                            |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |