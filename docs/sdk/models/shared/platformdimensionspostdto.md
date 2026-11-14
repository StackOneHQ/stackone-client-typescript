# PlatformDimensionsPostDto

## Example Usage

```typescript
import { PlatformDimensionsPostDto } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: PlatformDimensionsPostDto = {
  dimensions: [],
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
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `dimensions`                                                                                                      | [shared.PlatformDimensionsPostDtoDimensions](../../../sdk/models/shared/platformdimensionspostdtodimensions.md)[] | :heavy_check_mark:                                                                                                | The dimensions to return distinct values for                                                                      |
| `filters`                                                                                                         | [shared.PlatformDimensionsPostDtoFilters](../../../sdk/models/shared/platformdimensionspostdtofilters.md)         | :heavy_minus_sign:                                                                                                | The filters to apply before collecting the distinct values                                                        |
| `maxValues`                                                                                                       | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The maximum number of distinct values to return per dimension                                                     |