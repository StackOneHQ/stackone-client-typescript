# Message

## Example Usage

```typescript
import { Message } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Message = {
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    messageType: {
        sourceValue: true,
    },
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Unique identifier                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                          |
| `messageContent`                                                              | *shared.MessageMessageContent*                                                | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `messageType`                                                                 | [shared.MessageMessageType](../../../sdk/models/shared/messagemessagetype.md) | :heavy_minus_sign:                                                            | Stackone enum identifying the type of message associated with the content.    |                                                                               |
| `name`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `remoteId`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Provider's unique identifier                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                          |