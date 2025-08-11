# MessagingSendMessageRequest

## Example Usage

```typescript
import { MessagingSendMessageRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MessagingSendMessageRequest = {
  messagingMessageSendRequestDto: {
    content: "Hello, world!",
    recipient: "c28xyrc55866bvuv",
    sender: "+34820398402",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `messagingMessageSendRequestDto`                                                                      | [shared.MessagingMessageSendRequestDto](../../../sdk/models/shared/messagingmessagesendrequestdto.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `xAccountId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The account identifier                                                                                |