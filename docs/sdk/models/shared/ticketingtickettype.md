# TicketingTicketType

## Example Usage

```typescript
import { TicketingTicketType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketType = {
  collectionId: "collection-001",
  id: "001",
  name: "Task",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `collectionId`                             | *string*                                   | :heavy_minus_sign:                         | The collection the ticket type belongs to. | collection-001                             |
| `id`                                       | *string*                                   | :heavy_minus_sign:                         | The id of the ticket type.                 | 001                                        |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | The name of the ticket type.               | Task                                       |