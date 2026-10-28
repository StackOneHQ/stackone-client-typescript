# LogsPostDtoFilters

The filters to apply to the results

## Example Usage

```typescript
import { LogsPostDtoFilters, LogsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LogsPostDtoFilters = {
  accountSecureId: [
    "45355976281015164504",
  ],
  action: [
    "create_employee",
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
  logId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  mode: [
    "production",
  ],
  originOwnerId: [
    "owner-123",
  ],
  provider: [
    "hibob",
  ],
  requestId: [
    "adbf752f-6457-4ddd-89b3-98ae2252b83b",
  ],
  resource: [
    "employees",
  ],
  riskLevel: [
    LogsPostDtoRiskLevel.High,
    LogsPostDtoRiskLevel.Critical,
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
  subResource: [
    "documents",
  ],
  success: true,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accountSecureId`                                                                           | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by account IDs                                                                       | [<br/>"45355976281015164504"<br/>]                                                          |
| `action`                                                                                    | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by actions                                                                           | [<br/>"create_employee"<br/>]                                                               |
| `actionId`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by action IDs                                                                        | [<br/>"get_employees"<br/>]                                                                 |
| `actionRunId`                                                                               | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by action run IDs                                                                    | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                          |
| `actionType`                                                                                | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by action types                                                                      | [<br/>"sync"<br/>]                                                                          |
| `agentId`                                                                                   | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by agent IDs                                                                         |                                                                                             |
| `authId`                                                                                    | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by authentication IDs                                                                |                                                                                             |
| `authType`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by authentication types                                                              |                                                                                             |
| `category`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by connector categories                                                              | [<br/>"hris"<br/>]                                                                          |
| `childResource`                                                                             | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by child resources                                                                   |                                                                                             |
| `connectorKey`                                                                              | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by connector keys                                                                    | [<br/>"slack"<br/>]                                                                         |
| `connectorOwner`                                                                            | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by connector owners                                                                  |                                                                                             |
| `connectorProfileId`                                                                        | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by connector profile IDs                                                             |                                                                                             |
| `connectorVersion`                                                                          | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by connector versions                                                                | [<br/>"1.0.0"<br/>]                                                                         |
| `endTime`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | The end of the time range to filter by (ISO 8601 timestamp)                                 | 2025-01-31T23:59:59.999Z                                                                    |
| `httpMethod`                                                                                | [shared.LogsPostDtoHttpMethod](../../../sdk/models/shared/logspostdtohttpmethod.md)[]       | :heavy_minus_sign:                                                                          | Filter by HTTP methods                                                                      |                                                                                             |
| `ipAddress`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by IP addresses                                                                      |                                                                                             |
| `isBackground`                                                                              | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Filter by whether the request ran in the background                                         |                                                                                             |
| `logId`                                                                                     | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by log IDs                                                                           | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                          |
| `logType`                                                                                   | [shared.LogsPostDtoLogType](../../../sdk/models/shared/logspostdtologtype.md)[]             | :heavy_minus_sign:                                                                          | Filter by log types                                                                         |                                                                                             |
| `mode`                                                                                      | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by modes                                                                             | [<br/>"production"<br/>]                                                                    |
| `orderBy`                                                                                   | [shared.LogsPostDtoOrderBy](../../../sdk/models/shared/logspostdtoorderby.md)               | :heavy_minus_sign:                                                                          | The field to order the results by                                                           |                                                                                             |
| `orderDirection`                                                                            | [shared.LogsPostDtoOrderDirection](../../../sdk/models/shared/logspostdtoorderdirection.md) | :heavy_minus_sign:                                                                          | The direction to order the results by                                                       |                                                                                             |
| `originOwnerId`                                                                             | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by origin owner IDs                                                                  | [<br/>"owner-123"<br/>]                                                                     |
| `originOwnerName`                                                                           | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by origin owner names                                                                |                                                                                             |
| `provider`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by providers                                                                         | [<br/>"hibob"<br/>]                                                                         |
| `requestId`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by request IDs                                                                       | [<br/>"adbf752f-6457-4ddd-89b3-98ae2252b83b"<br/>]                                          |
| `resource`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by resources                                                                         | [<br/>"employees"<br/>]                                                                     |
| `riskLevel`                                                                                 | [shared.LogsPostDtoRiskLevel](../../../sdk/models/shared/logspostdtorisklevel.md)[]         | :heavy_minus_sign:                                                                          | Filter by Defender risk level                                                               | [<br/>"high",<br/>"critical"<br/>]                                                          |
| `service`                                                                                   | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by services                                                                          | [<br/>"hris"<br/>]                                                                          |
| `sessionId`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by session IDs                                                                       |                                                                                             |
| `sourceId`                                                                                  | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by source IDs                                                                        | [<br/>"1234567890"<br/>]                                                                    |
| `sourceType`                                                                                | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by source types                                                                      | [<br/>"DASHBOARD"<br/>]                                                                     |
| `sourceValue`                                                                               | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by source values                                                                     |                                                                                             |
| `startTime`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | The start of the time range to filter by (ISO 8601 timestamp)                               | 2025-01-01T00:00:00.000Z                                                                    |
| `statusCode`                                                                                | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by HTTP status codes                                                                 | [<br/>"200"<br/>]                                                                           |
| `streamType`                                                                                | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by stream types                                                                      |                                                                                             |
| `subResource`                                                                               | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by sub-resources                                                                     | [<br/>"documents"<br/>]                                                                     |
| `success`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Filter by success status                                                                    | true                                                                                        |
| `transportType`                                                                             | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by transport types                                                                   |                                                                                             |
| `tuples`                                                                                    | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Grouped filters as JSON tuples of dimension and value pairs                                 |                                                                                             |
| `userAgent`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | Filter by user agents                                                                       |                                                                                             |