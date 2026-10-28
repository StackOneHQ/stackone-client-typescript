# DimensionsPostDto

## Example Usage

```typescript
import { DimensionsPostDto, DimensionsPostDtoDimensions, DimensionsPostDtoRiskLevel } from "@stackone/stackone-client-ts/sdk/models/shared";

let value: DimensionsPostDto = {
  dimensions: [
    DimensionsPostDtoDimensions.PolicyResult,
  ],
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
      DimensionsPostDtoRiskLevel.High,
      DimensionsPostDtoRiskLevel.Critical,
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `dimensions`                                                                                      | [shared.DimensionsPostDtoDimensions](../../../sdk/models/shared/dimensionspostdtodimensions.md)[] | :heavy_check_mark:                                                                                | The dimensions to return distinct values for                                                      |
| `filters`                                                                                         | [shared.DimensionsPostDtoFilters](../../../sdk/models/shared/dimensionspostdtofilters.md)         | :heavy_minus_sign:                                                                                | The filters to apply to the results                                                               |
| `maxValues`                                                                                       | *number*                                                                                          | :heavy_minus_sign:                                                                                | The maximum number of distinct values to return per dimension                                     |