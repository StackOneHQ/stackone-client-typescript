# TicketingTicketStatusesPaginated

## Example Usage

```typescript
import { TicketingTicketStatusesPaginated, TicketingTicketStatusValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketStatusesPaginated = {
  data: [
    {
      id: "001",
      name: "Backlog",
      type: {
        sourceValue: "New",
        value: TicketingTicketStatusValue.ToDo,
      },
    },
  ],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [shared.TicketingTicketStatus](../../../sdk/models/shared/ticketingticketstatus.md)[] | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `next`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `raw`                                                                                 | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                     | :heavy_minus_sign:                                                                    | N/A                                                                                   |