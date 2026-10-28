# LogsPostDto

## Example Usage

```typescript
import { LogsPostDto, LogsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: LogsPostDto = {
  filters: {
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
  },
  page: 1,
  pageSize: 25,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `filters`                                                                     | [shared.LogsPostDtoFilters](../../../sdk/models/shared/logspostdtofilters.md) | :heavy_minus_sign:                                                            | The filters to apply to the results                                           |                                                                               |
| `page`                                                                        | *number*                                                                      | :heavy_minus_sign:                                                            | The page number of the results to return                                      | 1                                                                             |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | The number of results per page                                                | 25                                                                            |