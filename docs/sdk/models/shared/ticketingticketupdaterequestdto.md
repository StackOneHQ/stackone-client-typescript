# TicketingTicketUpdateRequestDto

## Example Usage

```typescript
import {
  TicketingTicketUpdateRequestDto,
  TicketingTicketUpdateRequestDtoSchemasValue,
  TicketingTicketUpdateRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketUpdateRequestDto = {
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
  parentId: "ticket-002",
  priority: {
    id: "001",
    sourceValue: "Normal",
    value: TicketingTicketUpdateRequestDtoValue.Medium,
  },
  reporters: [
    "user-001",
    "user-002",
  ],
  status: {
    id: "001",
    name: "Backlog",
    type: {
      sourceValue: "New",
      value: TicketingTicketUpdateRequestDtoSchemasValue.ToDo,
    },
  },
  tags: [
    "tag-001",
    "tag-002",
  ],
  title: "System outage in production environment",
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `assignees`                                                                                                             | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Agents assigned to the ticket                                                                                           | [<br/>"user-001",<br/>"user-002"<br/>]                                                                                  |
| `collections`                                                                                                           | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Collections the ticket belongs to                                                                                       | [<br/>"collection-001",<br/>"collection-002"<br/>]                                                                      |
| `content`                                                                                                               | [shared.TicketingContent](../../../sdk/models/shared/ticketingcontent.md)[]                                             | :heavy_minus_sign:                                                                                                      | Array of content associated with the ticket                                                                             |                                                                                                                         |
| `parentId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | ID of the parent ticket if this is a sub-ticket                                                                         | ticket-002                                                                                                              |
| `priority`                                                                                                              | [shared.TicketingTicketUpdateRequestDtoPriority](../../../sdk/models/shared/ticketingticketupdaterequestdtopriority.md) | :heavy_minus_sign:                                                                                                      | Priority of the ticket                                                                                                  |                                                                                                                         |
| `reporters`                                                                                                             | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Users who reported the ticket                                                                                           | [<br/>"user-001",<br/>"user-002"<br/>]                                                                                  |
| `status`                                                                                                                | [shared.TicketingTicketUpdateRequestDtoStatus](../../../sdk/models/shared/ticketingticketupdaterequestdtostatus.md)     | :heavy_minus_sign:                                                                                                      | Current status of the ticket                                                                                            |                                                                                                                         |
| `tags`                                                                                                                  | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | The tags of the ticket                                                                                                  | [<br/>"tag-001",<br/>"tag-002"<br/>]                                                                                    |
| `title`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The title or subject of the ticket                                                                                      | System outage in production environment                                                                                 |
| `unifiedCustomFields`                                                                                                   | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | Custom Unified Fields configured in your StackOne project                                                               | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                |