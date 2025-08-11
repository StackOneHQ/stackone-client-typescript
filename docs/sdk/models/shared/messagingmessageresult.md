# MessagingMessageResult

## Example Usage

```typescript
import { MessagingMessageResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingMessageResult = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [shared.MessagingMessageResultData](../../../sdk/models/shared/messagingmessageresultdata.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |