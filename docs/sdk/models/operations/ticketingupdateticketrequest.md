# TicketingUpdateTicketRequest

## Example Usage

```typescript
import { TicketingUpdateTicketRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import {
  TicketingTicketUpdateRequestDtoSchemasValue,
  TicketingTicketUpdateRequestDtoValue,
} from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingUpdateTicketRequest = {
  prefer: "heartbeat",
  ticketingTicketUpdateRequestDto: {
    assignees: [
      "user-001",
      "user-002",
    ],
    componentIds: "[\"component-001\",\"component-002\"]",
    content: null,
    parentId: "ticket-002",
    priority: {
      id: "001",
      sourceValue: "Normal",
      value: TicketingTicketUpdateRequestDtoValue.Medium,
    },
    projectId: "project-001",
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
  },
  id: "<id>",
  xAccountId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prefer`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Set to "heartbeat" to enable keep-alive newline heartbeats during long-running requests. Response includes Preference-Applied: heartbeat header when honored. (RFC 7240) | heartbeat                                                                                                                                                                |
| `ticketingTicketUpdateRequestDto`                                                                                                                                        | [shared.TicketingTicketUpdateRequestDto](../../../sdk/models/shared/ticketingticketupdaterequestdto.md)                                                                  | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `xAccountId`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The account identifier                                                                                                                                                   |                                                                                                                                                                          |