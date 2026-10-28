# StackoneListLogsRequest

## Example Usage

```typescript
import { StackoneListLogsRequest } from "@stackone/stackone-client-ts/sdk/models/operations";
import { LogsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: StackoneListLogsRequest = {
  logsPostDto: {
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
  },
  expand: "connector",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `logsPostDto`                                                                                                                                                                                                                                                                                                      | [shared.LogsPostDto](../../../sdk/models/shared/logspostdto.md)                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                    |
| `expand`                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                 | A comma-separated list of additional fields to expand. Supported values: `connector` (the connector display data — name, logo, categories — for each row). Omitted unless requested, as resolving it is more expensive. `connector_key`, `connector_version` and `connector_owner` are always returned regardless. | connector                                                                                                                                                                                                                                                                                                          |