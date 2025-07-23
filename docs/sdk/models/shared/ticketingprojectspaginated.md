# TicketingProjectsPaginated

## Example Usage

```typescript
import { TicketingProjectsPaginated } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingProjectsPaginated = {
  data: [
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
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [shared.TicketingProject](../../../sdk/models/shared/ticketingproject.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |
| `next`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `raw`                                                                       | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]           | :heavy_minus_sign:                                                          | N/A                                                                         |