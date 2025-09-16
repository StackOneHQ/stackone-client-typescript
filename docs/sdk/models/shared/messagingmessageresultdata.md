# MessagingMessageResultData

## Example Usage

```typescript
import { MessagingMessageResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingMessageResultData = {
  attachments: [
    {
      fileName: "document.pdf",
      fileSize: 1024,
      fileType: "application/pdf",
      id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    },
  ],
  author: {
    active: true,
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    email: "john@dew.com",
    externalReference: "al60043",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "John Dew",
    phoneNumber: "+1234567890",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    unifiedCustomFields: {
      "my_project_custom_field_1": "REF-1236",
      "my_project_custom_field_2": "some other value",
    },
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
  content: {
    html: "<p>Hello world</p>",
    plain: "Hello world",
  },
  createdAt: new Date("2024-03-20T10:00:00Z"),
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  parentMessageId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  updatedAt: new Date("2024-03-20T10:00:00Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `attachments`                                                                                       | [shared.MessagingAttachment](../../../sdk/models/shared/messagingattachment.md)[]                   | :heavy_minus_sign:                                                                                  | List of attachments in the message                                                                  |                                                                                                     |
| `author`                                                                                            | [shared.MessagingMessageResultAuthor](../../../sdk/models/shared/messagingmessageresultauthor.md)   | :heavy_minus_sign:                                                                                  | Author of the message                                                                               |                                                                                                     |
| `content`                                                                                           | [shared.MessagingMessageResultContent](../../../sdk/models/shared/messagingmessageresultcontent.md) | :heavy_minus_sign:                                                                                  | Content of the message                                                                              | {<br/>"html": "\u003cp\u003eHello world\u003c/p\u003e",<br/>"plain": "Hello world"<br/>}            |
| `createdAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | Timestamp when the message was created                                                              | 2024-03-20T10:00:00Z                                                                                |
| `id`                                                                                                | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Unique identifier                                                                                   | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `parentMessageId`                                                                                   | *string*                                                                                            | :heavy_minus_sign:                                                                                  | ID of the parent message if this is a reply                                                         | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `remoteId`                                                                                          | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Provider's unique identifier                                                                        | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                |
| `updatedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_minus_sign:                                                                                  | Timestamp when the message was last updated                                                         | 2024-03-20T10:00:00Z                                                                                |