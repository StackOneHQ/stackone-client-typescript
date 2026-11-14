# Filters

The filters to apply to the results

## Example Usage

```typescript
import { Filters } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: Filters = {
  accountSecureId: [
    "45355976281015164504",
  ],
  actionId: [
    "get_employees",
  ],
  actionRunId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  actionType: [
    "sync",
  ],
  category: [
    "hris",
  ],
  connectorKey: [
    "slack",
  ],
  connectorVersion: [
    "1.0.0",
  ],
  endTime: "2025-01-31T23:59:59.999Z",
  mode: [
    "production",
  ],
  originOwnerId: [
    "owner-123",
  ],
  sourceId: [
    "1234567890",
  ],
  sourceType: [
    "DASHBOARD",
  ],
  startTime: "2025-01-01T00:00:00.000Z",
  statusCode: [
    "200",
  ],
  success: true,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `accountSecureId`                                                     | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by account IDs                                                 | [<br/>"45355976281015164504"<br/>]                                    |
| `actionId`                                                            | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by action IDs                                                  | [<br/>"get_employees"<br/>]                                           |
| `actionRunId`                                                         | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by action run IDs                                              | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                    |
| `actionType`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by action types                                                | [<br/>"sync"<br/>]                                                    |
| `category`                                                            | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by connector categories                                        | [<br/>"hris"<br/>]                                                    |
| `connectorKey`                                                        | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by connector keys                                              | [<br/>"slack"<br/>]                                                   |
| `connectorProfileId`                                                  | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by connector profile IDs                                       |                                                                       |
| `connectorVersion`                                                    | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by connector versions                                          | [<br/>"1.0.0"<br/>]                                                   |
| `endTime`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The end of the time range to filter by (ISO 8601 timestamp)           | 2025-01-31T23:59:59.999Z                                              |
| `httpMethod`                                                          | [shared.HttpMethod](../../../sdk/models/shared/httpmethod.md)[]       | :heavy_minus_sign:                                                    | Filter by HTTP methods                                                |                                                                       |
| `mode`                                                                | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by modes                                                       | [<br/>"production"<br/>]                                              |
| `orderBy`                                                             | [shared.OrderBy](../../../sdk/models/shared/orderby.md)               | :heavy_minus_sign:                                                    | The field to order the results by                                     |                                                                       |
| `orderDirection`                                                      | [shared.OrderDirection](../../../sdk/models/shared/orderdirection.md) | :heavy_minus_sign:                                                    | The direction to order the results by                                 |                                                                       |
| `originOwnerId`                                                       | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by origin owner IDs                                            | [<br/>"owner-123"<br/>]                                               |
| `originOwnerName`                                                     | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by origin owner names                                          |                                                                       |
| `sourceId`                                                            | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by source IDs                                                  | [<br/>"1234567890"<br/>]                                              |
| `sourceType`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by source types                                                | [<br/>"DASHBOARD"<br/>]                                               |
| `startTime`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The start of the time range to filter by (ISO 8601 timestamp)         | 2025-01-01T00:00:00.000Z                                              |
| `statusCode`                                                          | *string*[]                                                            | :heavy_minus_sign:                                                    | Filter by HTTP status codes                                           | [<br/>"200"<br/>]                                                     |
| `success`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Filter by success status                                              | true                                                                  |