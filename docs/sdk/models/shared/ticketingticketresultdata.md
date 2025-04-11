# TicketingTicketResultData

## Example Usage

```typescript
import {
  TicketingTicketResultData,
  TicketingTicketResultSchemasValue,
  TicketingTicketResultValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketResultData = {
  assignees: [
    "user-001",
    "user-002",
  ],
  closedAt: new Date("2021-01-01T01:01:01.000Z"),
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
  createdAt: new Date("2021-01-01T01:01:01.000Z"),
  creatorId: "user-001",
  id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  organization: {
    domain: "company.com",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Company",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  },
  parentId: "ticket-002",
  priority: {
    id: "001",
    sourceValue: "Normal",
    value: TicketingTicketResultValue.Medium,
  },
  remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
  reporters: [
    "user-001",
    "user-002",
  ],
  status: {
    id: "001",
    sourceValue: "Backlog",
    value: TicketingTicketResultSchemasValue.ToDo,
  },
  tags: [
    "tag-001",
    "tag-002",
  ],
  ticketNumber: "ticket-001",
  ticketUrl: "https://help.company.com/tickets/SUP-5689",
  title: "System outage in production environment",
  type: {
    collectionId: "collection-001",
    id: "001",
    name: "Task",
  },
  unifiedCustomFields: {
    "my_project_custom_field_1": "REF-1236",
    "my_project_custom_field_2": "some other value",
  },
  updatedAt: new Date("2021-01-01T01:01:01.000Z"),
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `assignees`                                                                                                 | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Agents assigned to the ticket                                                                               | [<br/>"user-001",<br/>"user-002"<br/>]                                                                      |
| `closedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | The date the ticket was closed                                                                              | 2021-01-01T01:01:01.000Z                                                                                    |
| `collections`                                                                                               | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Collections the ticket belongs to                                                                           | [<br/>"collection-001",<br/>"collection-002"<br/>]                                                          |
| `content`                                                                                                   | [shared.TicketingContent](../../../sdk/models/shared/ticketingcontent.md)[]                                 | :heavy_minus_sign:                                                                                          | Array of content associated with the ticket                                                                 |                                                                                                             |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | The timestamp when the record was created                                                                   | 2021-01-01T01:01:01.000Z                                                                                    |
| `creatorId`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The creator of the ticket                                                                                   | user-001                                                                                                    |
| `id`                                                                                                        | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Unique identifier                                                                                           | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                        |
| `organization`                                                                                              | [shared.TicketingTicketResultOrganization](../../../sdk/models/shared/ticketingticketresultorganization.md) | :heavy_minus_sign:                                                                                          | Organization associated with the ticket                                                                     |                                                                                                             |
| `parentId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | ID of the parent ticket if this is a sub-ticket                                                             | ticket-002                                                                                                  |
| `priority`                                                                                                  | [shared.TicketingTicketResultPriority](../../../sdk/models/shared/ticketingticketresultpriority.md)         | :heavy_minus_sign:                                                                                          | Priority of the ticket                                                                                      |                                                                                                             |
| `remoteId`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Provider's unique identifier                                                                                | 8187e5da-dc77-475e-9949-af0f1fa4e4e3                                                                        |
| `reporters`                                                                                                 | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | Users who reported the ticket                                                                               | [<br/>"user-001",<br/>"user-002"<br/>]                                                                      |
| `status`                                                                                                    | [shared.TicketingTicketResultStatus](../../../sdk/models/shared/ticketingticketresultstatus.md)             | :heavy_minus_sign:                                                                                          | Current status of the ticket                                                                                |                                                                                                             |
| `tags`                                                                                                      | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | The tags of the ticket                                                                                      | [<br/>"tag-001",<br/>"tag-002"<br/>]                                                                        |
| `ticketNumber`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The unique ticket number or reference ID                                                                    | ticket-001                                                                                                  |
| `ticketUrl`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | URL to view the ticket in the source system                                                                 | https://help.company.com/tickets/SUP-5689                                                                   |
| `title`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The title or subject of the ticket                                                                          | System outage in production environment                                                                     |
| `type`                                                                                                      | [shared.TicketingTicketResultType](../../../sdk/models/shared/ticketingticketresulttype.md)                 | :heavy_minus_sign:                                                                                          | The type of the ticket                                                                                      |                                                                                                             |
| `unifiedCustomFields`                                                                                       | Record<string, *any*>                                                                                       | :heavy_minus_sign:                                                                                          | Custom Unified Fields configured in your StackOne project                                                   | {<br/>"my_project_custom_field_1": "REF-1236",<br/>"my_project_custom_field_2": "some other value"<br/>}    |
| `updatedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_minus_sign:                                                                                          | The timestamp when the record was last updated                                                              | 2021-01-01T01:01:01.000Z                                                                                    |