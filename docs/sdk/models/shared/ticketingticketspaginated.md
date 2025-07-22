# TicketingTicketsPaginated

## Example Usage

```typescript
import { TicketingReadTicketValue, TicketingTicketsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingTicketsPaginated = {
  data: [
    {
      assignees: [
        "user-001",
        "user-002",
      ],
      closedAt: new Date("2021-01-01T01:01:01.000Z"),
      components: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          description: "Description of the component",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Component Falcon",
          organizationId: "organization-001",
          projectId: "project-001",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
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
        value: TicketingReadTicketValue.Medium,
      },
      projects: [
        {
          createdAt: new Date("2021-01-01T01:01:01.000Z"),
          description: "Description of the project",
          id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          name: "Project Falcon",
          organizationId: "organization-001",
          remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
          updatedAt: new Date("2021-01-01T01:01:01.000Z"),
        },
      ],
      remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
      reporters: [
        "user-001",
        "user-002",
      ],
      status: null,
      tags: [
        "tag-001",
        "tag-002",
      ],
      ticketNumber: "ticket-001",
      ticketUrl: "https://help.company.com/tickets/SUP-5689",
      title: "System outage in production environment",
      type: {
        id: "001",
        name: "Task",
        projectId: "project-001",
      },
      unifiedCustomFields: {
        "my_project_custom_field_1": "REF-1236",
        "my_project_custom_field_2": "some other value",
      },
      updatedAt: new Date("2021-01-01T01:01:01.000Z"),
    },
  ],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `data`                                                                            | [shared.TicketingReadTicket](../../../sdk/models/shared/ticketingreadticket.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `next`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `raw`                                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                 | :heavy_minus_sign:                                                                | N/A                                                                               |