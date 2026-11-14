# ActionLogsPostDto

## Example Usage

```typescript
import { ActionLogsPostDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: ActionLogsPostDto = {
  filters: {
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
  },
  page: 1,
  pageSize: 25,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `filters`                                               | [shared.Filters](../../../sdk/models/shared/filters.md) | :heavy_minus_sign:                                      | The filters to apply to the results                     |                                                         |
| `page`                                                  | *number*                                                | :heavy_minus_sign:                                      | The page number of the results to return                | 1                                                       |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | The number of results per page                          | 25                                                      |