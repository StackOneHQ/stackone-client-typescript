# MessagingCreateConversationRequest

## Example Usage

```typescript
import { MessagingCreateConversationRequest } from "@stackone/stackone-client-ts/sdk/models/operations";

let value: MessagingCreateConversationRequest = {
  messagingCreateConversationRequestDto: {
    name: "Project Discussion",
    participants: [
      "c28xIQ1",
      "c28xIQ2",
    ],
    private: true,
  },
  prefer: "heartbeat",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `messagingCreateConversationRequestDto`                                                                                                                                  | [shared.MessagingCreateConversationRequestDto](../../../sdk/models/shared/messagingcreateconversationrequestdto.md)                                                      | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |