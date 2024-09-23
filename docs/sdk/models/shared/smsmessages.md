# SmsMessages

## Example Usage

```typescript
import { SmsMessages } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: SmsMessages = {
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  messageType: {
    sourceValue: true,
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | Unique identifier                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                        |
| `messageContent`                                                                            | [shared.SmsMessagesMessageContent](../../../sdk/models/shared/smsmessagesmessagecontent.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `messageType`                                                                               | [shared.SmsMessagesMessageType](../../../sdk/models/shared/smsmessagesmessagetype.md)       | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |                                                                                             |
| `remoteId`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Provider's unique identifier                                                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                        |