# MessagingMessagesPaginated

## Example Usage

```typescript
import { MessagingMessagesPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingMessagesPaginated = {
  data: [
    {
      author: null,
      content: {
        html: "<p>Hello world</p>",
        plain: "Hello world",
      },
      createdAt: new Date("2024-03-20T10:00:00Z"),
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      parentMessageId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      updatedAt: new Date("2024-03-20T10:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.MessagingMessage](../../../sdk/models/shared/messagingmessage.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |
| `next`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `raw`                                                                       | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]           | :heavy_minus_sign:                                                          | N/A                                                                         |