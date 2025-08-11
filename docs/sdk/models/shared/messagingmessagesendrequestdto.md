# MessagingMessageSendRequestDto

## Example Usage

```typescript
import { MessagingMessageSendRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingMessageSendRequestDto = {
  content: "Hello, world!",
  recipient: "c28xyrc55866bvuv",
  sender: "+34820398402",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `content`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Content body of the message                               | Hello, world!                                             |
| `recipient`                                               | *string*                                                  | :heavy_minus_sign:                                        | Can be a conversation ID, user ID, email or phone number. | c28xyrc55866bvuv                                          |
| `sender`                                                  | *string*                                                  | :heavy_minus_sign:                                        | The account_id or phone number of the message sender      | +34820398402                                              |