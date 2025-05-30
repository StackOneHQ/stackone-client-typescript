# TicketingTicketTypeResultData

## Example Usage

```typescript
import { TicketingTicketTypeResultData } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketTypeResultData = {
  id: "001",
  name: "Task",
  parentCollectionId: "collection-001",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_minus_sign:                         | The id of the ticket type.                 | 001                                        |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | The name of the ticket type.               | Task                                       |
| `parentCollectionId`                       | *string*                                   | :heavy_minus_sign:                         | The collection the ticket type belongs to. | collection-001                             |