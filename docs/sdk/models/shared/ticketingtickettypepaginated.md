# TicketingTicketTypePaginated

## Example Usage

```typescript
import { TicketingTicketTypePaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketTypePaginated = {
  data: [
    {
      id: "001",
      name: "Task",
      parentCollectionId: "collection-001",
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.TicketingTicketType](../../../sdk/models/shared/ticketingtickettype.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `next`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `raw`                                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                 | :heavy_minus_sign:                                                                | N/A                                                                               |