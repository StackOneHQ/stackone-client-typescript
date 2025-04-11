# TicketingCreateTicketRequest

## Example Usage

```typescript
import { TicketingCreateTicketRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingTicketCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingCreateTicketRequest = {
  ticketingTicketCreateRequestDto: {
    assignees: [
      "user-001",
      "user-002",
    ],
    collections: [
      "collection-001",
      "collection-002",
    ],
    content: [
      {
        html: "<p>This is some content</p>",
        plain: "This is some content",
      },
    ],
    creatorId: "user-001",
    organizationId: "organization-001",
    parentId: "ticket-002",
    priority: {
      id: "001",
      sourceValue: "Normal",
      value: TicketingTicketCreateRequestDtoValue.Medium,
    },
    reporters: [
      "user-001",
      "user-002",
    ],
    tags: [
      "tag-001",
      "tag-002",
    ],
    title: "System outage in production environment",
    type: "ticket-type-001",
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `ticketingTicketCreateRequestDto`                                                                       | [shared.TicketingTicketCreateRequestDto](../../../sdk/models/shared/ticketingticketcreaterequestdto.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `xAccountId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The account identifier                                                                                  |