# PlatformLogsPostDto

## Example Usage

```typescript
import { PlatformLogsPostDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PlatformLogsPostDto = {
  filters: {
    action: [
      "create",
      "delete",
    ],
    endTime: "2025-01-31T23:59:59.999Z",
    eventType: [
      "account_create",
      "account_delete",
    ],
    isRead: false,
    resource: [
      "account",
      "webhook",
    ],
    resourceId: [
      "45355976281015164504",
    ],
    startTime: "2025-01-01T00:00:00.000Z",
    statusCode: [
      "200",
      "404",
    ],
    success: true,
    userEmail: [
      "person@example.com",
    ],
  },
  page: 1,
  pageSize: 25,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `filters`                                                                                     | [shared.PlatformLogsPostDtoFilters](../../../sdk/models/shared/platformlogspostdtofilters.md) | :heavy_minus_sign:                                                                            | The filters to apply to the results                                                           |                                                                                               |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The page number of the results to return                                                      | 1                                                                                             |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of results per page                                                                | 25                                                                                            |