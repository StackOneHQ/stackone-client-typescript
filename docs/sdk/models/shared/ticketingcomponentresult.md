# TicketingComponentResult

## Example Usage

```typescript
import { TicketingComponentResult } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingComponentResult = {
  data: {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    description: "Description of the component",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    name: "Component Falcon",
    organizationId: "organization-001",
    projectId: "project-001",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [shared.TicketingComponentResultData](../../../sdk/models/shared/ticketingcomponentresultdata.md) | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `raw`                                                                                             | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                 | :heavy_minus_sign:                                                                                | N/A                                                                                               |