# EmailMessages

## Example Usage

```typescript
import { EmailMessages, EmailMessagesValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: EmailMessages = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  messageType: {
    sourceValue: "Email",
    value: EmailMessagesValue.Email,
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier                                                                               | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |
| `messageContent`                                                                                | [shared.EmailMessagesMessageContent](../../../sdk/models/shared/emailmessagesmessagecontent.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `messageType`                                                                                   | [shared.EmailMessagesMessageType](../../../sdk/models/shared/emailmessagesmessagetype.md)       | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `remoteId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Provider's unique identifier                                                                    | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                            |