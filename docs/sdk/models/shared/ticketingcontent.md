# TicketingContent

## Example Usage

```typescript
import { TicketingContent } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingContent = {
  html: "<p>This is some content</p>",
  plain: "This is some content",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `html`                         | *string*                       | :heavy_minus_sign:             | The HTML content of the ticket | <p>This is some content</p>    |
| `plain`                        | *string*                       | :heavy_minus_sign:             | The content of the ticket      | This is some content           |