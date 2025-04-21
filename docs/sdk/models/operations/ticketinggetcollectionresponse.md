# TicketingGetCollectionResponse

## Example Usage

```typescript
import { TicketingGetCollectionResponse } from "@stackone/stackone-client-ts/sdk/models/operations";
import { TicketingCollectionResultType } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: TicketingGetCollectionResponse = {
  contentType: "<value>",
  headers: {
    "key": [
      "<value>",
    ],
  },
  statusCode: 507,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  ticketingCollectionResult: {
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
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `ticketingCollectionResult`                                                                 | [shared.TicketingCollectionResult](../../../sdk/models/shared/ticketingcollectionresult.md) | :heavy_minus_sign:                                                                          | The collection with the given identifier was retrieved.                                     |