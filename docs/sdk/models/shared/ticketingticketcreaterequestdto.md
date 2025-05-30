# TicketingTicketCreateRequestDto

## Example Usage

```typescript
import { TicketingTicketCreateRequestDto, TicketingTicketCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketCreateRequestDto = {
  assignees: [
    "user-001",
    "user-002",
  ],
  collectionIds: [
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
| `collectionIds`                                                                                                         | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Collections the ticket belongs to                                                                                       | [<br/>"collection-001",<br/>"collection-002"<br/>]                                                                      |
| `content`                                                                                                               | [shared.TicketingContent](../../../sdk/models/shared/ticketingcontent.md)[]                                             | :heavy_minus_sign:                                                                                                      | Array of content associated with the ticket                                                                             |                                                                                                                         |
| `creatorId`                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The creator of the ticket                                                                                               | user-001                                                                                                                |
| `organizationId`                                                                                                        | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Organization associated with the ticket                                                                                 | organization-001                                                                                                        |
| `parentId`                                                                                                              | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | ID of the parent ticket if this is a sub-ticket                                                                         | ticket-002                                                                                                              |
| `priority`                                                                                                              | [shared.TicketingTicketCreateRequestDtoPriority](../../../sdk/models/shared/ticketingticketcreaterequestdtopriority.md) | :heavy_minus_sign:                                                                                                      | Priority of the ticket                                                                                                  |                                                                                                                         |
| `reporters`                                                                                                             | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | Users who reported the ticket                                                                                           | [<br/>"user-001",<br/>"user-002"<br/>]                                                                                  |
| `tags`                                                                                                                  | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | The tags of the ticket                                                                                                  | [<br/>"tag-001",<br/>"tag-002"<br/>]                                                                                    |
| `title`                                                                                                                 | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The title or subject of the ticket                                                                                      | System outage in production environment                                                                                 |
| `type`                                                                                                                  | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The type of the ticket                                                                                                  | ticket-type-001                                                                                                         |
| `unifiedCustomFields`                                                                                                   | Record<string, *any*>                                                                                                   | :heavy_minus_sign:                                                                                                      | Custom Unified Fields configured in your StackOne project                                                               | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}                |