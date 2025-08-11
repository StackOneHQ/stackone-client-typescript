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
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `messagingCreateConversationRequestDto`                                                                             | [shared.MessagingCreateConversationRequestDto](../../../sdk/models/shared/messagingcreateconversationrequestdto.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `xAccountId`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The account identifier                                                                                              |