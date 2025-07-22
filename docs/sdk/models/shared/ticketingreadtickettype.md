# TicketingReadTicketType

The type of the ticket

## Example Usage

```typescript
import { TicketingReadTicketType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingReadTicketType = {
  id: "001",
  name: "Task",
  projectId: "project-001",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_minus_sign:                      | The id of the ticket type.              | 001                                     |
| `name`                                  | *string*                                | :heavy_minus_sign:                      | The name of the ticket type.            | Task                                    |
| `projectId`                             | *string*                                | :heavy_minus_sign:                      | The project the ticket type belongs to. | project-001                             |