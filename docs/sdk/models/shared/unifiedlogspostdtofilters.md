# UnifiedLogsPostDtoFilters

The filters to apply to the results

## Example Usage

```typescript
import { UnifiedLogsPostDtoFilters } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogsPostDtoFilters = {
  accountSecureId: [
    "45355976281015164504",
  ],
  action: [
    "create_employee",
  ],
  connectorKey: [
    "slack",
  ],
  endTime: "2025-01-31T23:59:59.999Z",
  mode: [
    "production",
  ],
  originOwnerId: [
    "owner-123",
  ],
  requestId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  resource: [
    "employees",
  ],
  service: [
    "hris",
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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `accountSecureId`                                                                                         | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by account IDs                                                                                     | [<br/>"45355976281015164504"<br/>]                                                                        |
| `action`                                                                                                  | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by actions                                                                                         | [<br/>"create_employee"<br/>]                                                                             |
| `connectorKey`                                                                                            | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by connector keys                                                                                  | [<br/>"slack"<br/>]                                                                                       |
| `connectorProfileId`                                                                                      | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by connector profile IDs                                                                           |                                                                                                           |
| `endTime`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The end of the time range to filter by (ISO 8601 timestamp)                                               | 2025-01-31T23:59:59.999Z                                                                                  |
| `httpMethod`                                                                                              | [shared.UnifiedLogsPostDtoHttpMethod](../../../sdk/models/shared/unifiedlogspostdtohttpmethod.md)[]       | :heavy_minus_sign:                                                                                        | Filter by HTTP methods                                                                                    |                                                                                                           |
| `mode`                                                                                                    | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by modes                                                                                           | [<br/>"production"<br/>]                                                                                  |
| `orderBy`                                                                                                 | [shared.UnifiedLogsPostDtoOrderBy](../../../sdk/models/shared/unifiedlogspostdtoorderby.md)               | :heavy_minus_sign:                                                                                        | The field to order the results by                                                                         |                                                                                                           |
| `orderDirection`                                                                                          | [shared.UnifiedLogsPostDtoOrderDirection](../../../sdk/models/shared/unifiedlogspostdtoorderdirection.md) | :heavy_minus_sign:                                                                                        | The direction to order the results by                                                                     |                                                                                                           |
| `originOwnerId`                                                                                           | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by origin owner IDs                                                                                | [<br/>"owner-123"<br/>]                                                                                   |
| `requestId`                                                                                               | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by request IDs                                                                                     | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                                        |
| `resource`                                                                                                | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by resources                                                                                       | [<br/>"employees"<br/>]                                                                                   |
| `service`                                                                                                 | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by services                                                                                        | [<br/>"hris"<br/>]                                                                                        |
| `sourceId`                                                                                                | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by source IDs                                                                                      | [<br/>"1234567890"<br/>]                                                                                  |
| `sourceType`                                                                                              | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by source types                                                                                    | [<br/>"DASHBOARD"<br/>]                                                                                   |
| `startTime`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The start of the time range to filter by (ISO 8601 timestamp)                                             | 2025-01-01T00:00:00.000Z                                                                                  |
| `statusCode`                                                                                              | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | Filter by HTTP status codes                                                                               | [<br/>"200"<br/>]                                                                                         |
| `success`                                                                                                 | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Filter by success status                                                                                  | true                                                                                                      |