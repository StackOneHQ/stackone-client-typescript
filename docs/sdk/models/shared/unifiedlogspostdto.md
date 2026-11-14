# UnifiedLogsPostDto

## Example Usage

```typescript
import { UnifiedLogsPostDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: UnifiedLogsPostDto = {
  filters: {
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
  },
  page: 1,
  pageSize: 25,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `filters`                                                                                   | [shared.UnifiedLogsPostDtoFilters](../../../sdk/models/shared/unifiedlogspostdtofilters.md) | :heavy_minus_sign:                                                                          | The filters to apply to the results                                                         |                                                                                             |
| `page`                                                                                      | *number*                                                                                    | :heavy_minus_sign:                                                                          | The page number of the results to return                                                    | 1                                                                                           |
| `pageSize`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | The number of results per page                                                              | 25                                                                                          |