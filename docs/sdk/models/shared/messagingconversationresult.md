# MessagingConversationResult

## Example Usage

```typescript
import { MessagingConversationResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingConversationResult = {
  data: {
    createdAt: new Date("2024-03-20T10:00:00Z"),
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    lastMessageAt: new Date("2024-03-20T11:30:00Z"),
    name: "Project Discussion",
    participants: [
      "c28xIQ1",
      "c28xIQ2",
    ],
    private: true,
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [shared.MessagingConversationResultData](../../../sdk/models/shared/messagingconversationresultdata.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `raw`                                                                                                   | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                       | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |