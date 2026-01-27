# TicketingCreateTicketRequest

## Example Usage

```typescript
import { TicketingCreateTicketRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingTicketCreateRequestDtoValue } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingCreateTicketRequest = {
  prefer: "heartbeat",
  ticketingTicketCreateRequestDto: {
    assignees: [
      "user-001",
      "user-002",
    ],
    componentIds: "[\"component-001\",\"component-002\"]",
    content: null,
    creatorId: "user-001",
    organizationId: "organization-001",
    parentId: "ticket-002",
    priority: {
      id: "001",
      sourceValue: "Normal",
      value: TicketingTicketCreateRequestDtoValue.Medium,
    },
    projectId: "project-001",
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
  },
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `ticketingTicketCreateRequestDto`                                                                                                                                        | [shared.TicketingTicketCreateRequestDto](../../../sdk/models/shared/ticketingticketcreaterequestdto.md)                                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |