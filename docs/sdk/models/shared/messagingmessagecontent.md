# MessagingMessageContent

Content of the message

## Example Usage

```typescript
import { MessagingMessageContent } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: MessagingMessageContent = {
  html: "<p>Hello world</p>",
  plain: "Hello world",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `html`                            | *string*                          | :heavy_minus_sign:                | HTML content of the message       | <p>Hello world</p>                |
| `plain`                           | *string*                          | :heavy_minus_sign:                | Plain text content of the message | Hello world                       |