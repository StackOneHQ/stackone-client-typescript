# MessagingCreateConversationRequestDto

## Example Usage

```typescript
import { MessagingCreateConversationRequestDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingCreateConversationRequestDto = {
  name: "Project Discussion",
  participants: [
    "c28xIQ1",
    "c28xIQ2",
  ],
  private: true,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | Name or title of the conversation                     | Project Discussion                                    |
| `participants`                                        | *string*[]                                            | :heavy_minus_sign:                                    | List of participant user IDs in the conversation      | [<br/>"c28xIQ1",<br/>"c28xIQ2"<br/>]                  |
| `private`                                             | *shared.MessagingCreateConversationRequestDtoPrivate* | :heavy_minus_sign:                                    | Whether the conversation is private                   | true                                                  |