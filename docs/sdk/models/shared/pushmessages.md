# PushMessages

## Example Usage

```typescript
import { PushMessages } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PushMessages = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  messageType: {
    sourceValue: "Email",
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier                                                                             | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |
| `messageContent`                                                                              | [shared.PushMessagesMessageContent](../../../sdk/models/shared/pushmessagesmessagecontent.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `messageType`                                                                                 | [shared.PushMessagesMessageType](../../../sdk/models/shared/pushmessagesmessagetype.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `remoteId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Provider's unique identifier                                                                  | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                          |