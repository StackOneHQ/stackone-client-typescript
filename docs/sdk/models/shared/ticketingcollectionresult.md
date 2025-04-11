# TicketingCollectionResult

## Example Usage

```typescript
import { TicketingCollectionResult, TicketingCollectionResultType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingCollectionResult = {
  data: {
    createdAt: new Date("2021-01-01T01:01:01.000Z"),
    description: "Description of the project",
    id: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    key: "project-falcon",
    name: "Project Falcon",
    organizationId: "organization-001",
    parentId: "collection-001",
    remoteId: "8187e5da-dc77-475e-9949-af0f1fa4e4e3",
    type: TicketingCollectionResultType.Project,
    updatedAt: new Date("2021-01-01T01:01:01.000Z"),
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [shared.TicketingCollectionResultData](../../../sdk/models/shared/ticketingcollectionresultdata.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `raw`                                                                                               | [shared.RawResponse](../../../sdk/models/shared/rawresponse.md)[]                                   | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |